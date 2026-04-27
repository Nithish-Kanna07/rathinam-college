import AiTypes "../types/ai";
import TaskTypes "../types/task";
import Common "../types/common";
import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";

module {
  public type EventList = List.List<AiTypes.CompletionEvent>;

  public func recordCompletion(events : EventList, event : AiTypes.CompletionEvent) {
    events.add(event);
  };

  public func countEvents(events : EventList) : Nat {
    events.size();
  };

  func joinLines(lines : [Text]) : Text {
    var result = "";
    var i = 0;
    while (i < lines.size()) {
      if (i > 0) { result := result # "\n" };
      result := result # lines[i];
      i += 1;
    };
    result;
  };

  public func buildInsightsPrompt(
    events : EventList,
    tasks : [TaskTypes.TaskView],
  ) : Text {
    let eventCount = events.size();
    let pendingTasks = tasks.filter(func(t : TaskTypes.TaskView) : Bool { t.status == #pending });
    let completedCount = tasks.filter(func(t : TaskTypes.TaskView) : Bool { t.status == #completed }).size();

    let taskLines = joinLines(
      pendingTasks.map(func(t : TaskTypes.TaskView) : Text {
        "- id:" # t.id.toText() # " title:\"" # t.title # "\" deadline:" # (
          switch (t.deadline) {
            case (?d) { d.toText() };
            case null { "none" };
          }
        )
      })
    );

    "You are an AI assistant helping a student manage tasks.\n" #
    "User has " # pendingTasks.size().toText() # " pending and " # completedCount.toText() # " completed tasks.\n" #
    "Total completion events recorded: " # eventCount.toText() # ".\n" #
    "Pending tasks:\n" # taskLines # "\n\n" #
    "Respond ONLY in JSON with this exact shape:\n" #
    "{\"taskInsights\":[{\"taskId\":0,\"priorityScore\":5,\"suggestedCategory\":\"study\",\"estimatedCompletionMins\":30}],\"stressLevel\":5,\"recommendedNextTaskId\":null}";
  };

  public func buildWeeklySummaryPrompt(
    events : EventList,
    tasks : [TaskTypes.TaskView],
  ) : Text {
    let completedThisWeek = events.size();
    let total = tasks.size();

    "You are an AI assistant helping a student.\n" #
    "This week the student completed " # completedThisWeek.toText() # " tasks. Total tasks: " # total.toText() # ".\n" #
    "Respond ONLY in JSON with this exact shape:\n" #
    "{\"completedCount\":0,\"completionRate\":0,\"busiestDay\":\"Monday\",\"streakDays\":0,\"insightsText\":\"Your weekly summary here.\"}";
  };

  public func buildNlpPrompt(rawText : Text) : Text {
    "You are a task parsing assistant for a student app.\n" #
    "Parse this natural language input into a task:\n\"" # rawText # "\"\n\n" #
    "Respond ONLY in JSON with this exact shape:\n" #
    "{\"title\":\"Task title\",\"description\":\"Task description\",\"deadline\":null}";
  };

  public func buildGroupingPrompt(tasks : [TaskTypes.TaskView]) : Text {
    let taskLines = joinLines(
      tasks.map(func(t : TaskTypes.TaskView) : Text {
        "- id:" # t.id.toText() # " title:\"" # t.title # "\""
      })
    );

    "You are an AI task organizer for students.\n" #
    "Group these tasks into logical categories:\n" # taskLines # "\n\n" #
    "Respond ONLY in JSON with this exact shape:\n" #
    "[{\"category\":\"study\",\"taskIds\":[1,2]},{\"category\":\"personal\",\"taskIds\":[3]}]";
  };

  public func computeStressLevel(events : EventList, pendingCount : Nat) : Nat {
    let totalEvents = events.size();
    let avgDaily : Nat = if (totalEvents == 0) { 1 } else {
      let raw = totalEvents / 7;
      if (raw == 0) { 1 } else { raw };
    };
    let threshold = avgDaily + avgDaily / 2;
    if (pendingCount >= threshold * 3) { 10 }
    else if (pendingCount >= threshold * 2) { 8 }
    else if (pendingCount >= threshold) { 6 }
    else { 3 };
  };

  public func getInsights(
    _events : EventList,
    _tasks : [TaskTypes.TaskView],
    _aiResponseJson : Text,
  ) : AiTypes.AiInsights {
    {
      taskInsights = [];
      stressLevel = 5;
      recommendedNextTaskId = null;
    };
  };

  public func getWeeklySummary(
    _events : EventList,
    _tasks : [TaskTypes.TaskView],
    aiResponseJson : Text,
  ) : AiTypes.WeeklySummary {
    {
      completedCount = 0;
      completionRate = 0;
      busiestDay = "";
      streakDays = 0;
      insightsText = aiResponseJson;
    };
  };

  public func parseNaturalLanguageTask(aiResponseJson : Text) : AiTypes.ParsedTaskJson {
    aiResponseJson;
  };

  public func groupTasks(
    _tasks : [TaskTypes.TaskView],
    aiResponseJson : Text,
  ) : [AiTypes.TaskGroup] {
    [{ category = aiResponseJson; taskIds = [] }];
  };
};
