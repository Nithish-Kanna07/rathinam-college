import AiLib "../lib/ai";
import TaskLib "../lib/task";
import AiTypes "../types/ai";
import TaskTypes "../types/task";
import Common "../types/common";
import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Runtime "mo:core/Runtime";

mixin (
  completionEvents : List.List<AiTypes.CompletionEvent>,
  tasks : Map.Map<Common.TaskId, TaskTypes.Task>,
) {

  // Required transform callback for IC HTTP outcalls
  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  let aiApiUrl : Text = "https://api.openai.com/v1/chat/completions";
  let aiApiKey : Text = "REPLACE_WITH_API_KEY";

  func escapeJson(s : Text) : Text {
    let s1 = s.replace(#char '\\', "\\\\");
    let s2 = s1.replace(#char '\u{22}', "\\" # "\u{22}");
    let s3 = s2.replace(#char '\n', "\\n");
    let s4 = s3.replace(#char '\r', "\\r");
    let s5 = s4.replace(#char '\t', "\\t");
    s5;
  };

  func makeAiRequest(prompt : Text) : async Text {
    let body = "{\"model\":\"gpt-4o-mini\",\"messages\":[{\"role\":\"user\",\"content\":\"" # escapeJson(prompt) # "\"}],\"temperature\":0.3}";
    let headers : [OutCall.Header] = [
      { name = "Authorization"; value = "Bearer " # aiApiKey },
      { name = "Content-Type"; value = "application/json" },
    ];
    await OutCall.httpPostRequest(aiApiUrl, headers, body, transform);
  };

  func callerTasks(caller : Principal) : [TaskTypes.TaskView] {
    TaskLib.listForUser(tasks, caller);
  };

  func callerEvents(caller : Principal) : List.List<AiTypes.CompletionEvent> {
    let callerTaskIds : [Common.TaskId] = tasks.entries()
      .filter(func((_, t) : (Common.TaskId, TaskTypes.Task)) : Bool { t.owner == caller })
      .map(func((id, _) : (Common.TaskId, TaskTypes.Task)) : Common.TaskId { id })
      .toArray();

    let filtered = List.empty<AiTypes.CompletionEvent>();
    completionEvents.forEach(func(e : AiTypes.CompletionEvent) {
      if (callerTaskIds.contains(e.taskId)) {
        filtered.add(e);
      };
    });
    filtered;
  };

  public shared ({ caller }) func recordTaskCompletion(event : AiTypes.CompletionEvent) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot record completions");
    };
    switch (tasks.get(event.taskId)) {
      case (?task) {
        if (task.owner != caller) {
          Runtime.trap("Task does not belong to caller");
        };
        task.status := #completed;
        task.updatedAt := Time.now();
      };
      case null { Runtime.trap("Task not found") };
    };
    AiLib.recordCompletion(completionEvents, event);

    // Emergent behavior: after 3+ completions, re-prioritize remaining pending tasks
    let userEvents = callerEvents(caller);
    if (userEvents.size() >= 3) {
      TaskLib.applyEmergentPriority(tasks, caller, Time.now());
    };
  };

  public shared ({ caller }) func getAiInsights() : async AiTypes.AiInsights {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot get insights");
    };
    let userTasks = callerTasks(caller);
    let userEvents = callerEvents(caller);
    let pendingCount = userTasks.filter(func(t : TaskTypes.TaskView) : Bool { t.status == #pending }).size();
    let stressLevel = AiLib.computeStressLevel(userEvents, pendingCount);

    let prompt = AiLib.buildInsightsPrompt(userEvents, userTasks);
    let _aiJson = await makeAiRequest(prompt);

    {
      taskInsights = [];
      stressLevel;
      recommendedNextTaskId = null;
    };
  };

  public shared ({ caller }) func getWeeklySummary() : async AiTypes.WeeklySummary {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot get weekly summary");
    };
    let userTasks = callerTasks(caller);
    let userEvents = callerEvents(caller);
    let prompt = AiLib.buildWeeklySummaryPrompt(userEvents, userTasks);
    let aiJson = await makeAiRequest(prompt);
    AiLib.getWeeklySummary(userEvents, userTasks, aiJson);
  };

  public shared ({ caller }) func parseNaturalLanguageTask(rawText : Text) : async AiTypes.ParsedTaskJson {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot use NLP");
    };
    let prompt = AiLib.buildNlpPrompt(rawText);
    let aiJson = await makeAiRequest(prompt);
    AiLib.parseNaturalLanguageTask(aiJson);
  };

  public shared ({ caller }) func getTaskGroups() : async [AiTypes.TaskGroup] {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot get task groups");
    };
    let userTasks = callerTasks(caller);
    let prompt = AiLib.buildGroupingPrompt(userTasks);
    let aiJson = await makeAiRequest(prompt);
    AiLib.groupTasks(userTasks, aiJson);
  };

};
