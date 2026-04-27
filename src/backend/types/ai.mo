import Common "common";

module {
  public type UserId = Common.UserId;
  public type TaskId = Common.TaskId;
  public type Timestamp = Common.Timestamp;

  public type CompletionEvent = {
    taskId : TaskId;
    completedAt : Timestamp;
    timeSpentEstimateMins : ?Nat;
  };

  public type TaskInsight = {
    taskId : TaskId;
    priorityScore : Nat; // 1-10
    suggestedCategory : Text;
    estimatedCompletionMins : Nat;
  };

  public type AiInsights = {
    taskInsights : [TaskInsight];
    stressLevel : Nat; // 1-10
    recommendedNextTaskId : ?TaskId;
  };

  public type WeeklySummary = {
    completedCount : Nat;
    completionRate : Nat; // 0-100 percent
    busiestDay : Text;
    streakDays : Nat;
    insightsText : Text;
  };

  // Raw text input → structured task fields returned as JSON text (frontend parses)
  public type ParsedTaskJson = Text;

  public type TaskGroup = {
    category : Text;
    taskIds : [TaskId];
  };
};
