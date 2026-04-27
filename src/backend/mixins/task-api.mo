import TaskLib "../lib/task";
import TaskTypes "../types/task";
import Common "../types/common";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

mixin (tasks : Map.Map<Common.TaskId, TaskTypes.Task>) {

  public shared ({ caller }) func createTask(input : TaskTypes.CreateTaskInput) : async TaskTypes.TaskView {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot create tasks");
    };
    TaskLib.create(tasks, caller, input);
  };

  public shared query ({ caller }) func listTasks() : async [TaskTypes.TaskView] {
    if (caller.isAnonymous()) { return [] };
    TaskLib.listForUser(tasks, caller);
  };

  public shared query ({ caller }) func getTask(taskId : Common.TaskId) : async ?TaskTypes.TaskView {
    if (caller.isAnonymous()) { return null };
    TaskLib.getById(tasks, caller, taskId);
  };

  public shared ({ caller }) func updateTask(taskId : Common.TaskId, input : TaskTypes.UpdateTaskInput) : async ?TaskTypes.TaskView {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot update tasks");
    };
    TaskLib.update(tasks, caller, taskId, input);
  };

  public shared ({ caller }) func deleteTask(taskId : Common.TaskId) : async Bool {
    if (caller.isAnonymous()) { return false };
    TaskLib.delete(tasks, caller, taskId);
  };

  public shared ({ caller }) func toggleTask(taskId : Common.TaskId) : async ?TaskTypes.TaskView {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot toggle tasks");
    };
    TaskLib.toggle(tasks, caller, taskId);
  };

  public shared query ({ caller }) func searchTasks(keyword : Text) : async [TaskTypes.TaskView] {
    if (caller.isAnonymous()) { return [] };
    TaskLib.search(tasks, caller, keyword);
  };

};
