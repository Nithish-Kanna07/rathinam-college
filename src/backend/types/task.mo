import Common "common";

module {
  public type UserId = Common.UserId;
  public type TaskId = Common.TaskId;
  public type Timestamp = Common.Timestamp;

  public type TaskStatus = { #pending; #completed };

  public type Task = {
    id : TaskId;
    owner : UserId;
    var title : Text;
    var description : Text;
    var deadline : ?Timestamp;
    var status : TaskStatus;
    var priorityScore : ?Nat; // 1-10, AI-computed
    var suggestedCategory : ?Text;
    var estimatedCompletionMins : ?Nat;
    createdAt : Timestamp;
    var updatedAt : Timestamp;
  };

  // Shared view of a task for the public API
  public type TaskView = {
    id : TaskId;
    owner : UserId;
    title : Text;
    description : Text;
    deadline : ?Timestamp;
    status : TaskStatus;
    priorityScore : ?Nat;
    suggestedCategory : ?Text;
    estimatedCompletionMins : ?Nat;
    createdAt : Timestamp;
    updatedAt : Timestamp;
  };

  public type CreateTaskInput = {
    title : Text;
    description : Text;
    deadline : ?Timestamp;
  };

  public type UpdateTaskInput = {
    title : ?Text;
    description : ?Text;
    deadline : ?Timestamp;
    status : ?TaskStatus;
  };
};
