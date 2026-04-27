import Types "../types/task";
import Common "../types/common";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";

module {
  public type TaskMap = Map.Map<Common.TaskId, Types.Task>;

  // Derive next id: max existing key + 1 (0 if empty)
  func nextId(tasks : TaskMap) : Nat {
    tasks.foldLeft(
      0 : Nat,
      func(acc : Nat, k : Common.TaskId, _v : Types.Task) : Nat {
        if (k >= acc) { k + 1 } else { acc }
      },
    );
  };

  public func create(
    tasks : TaskMap,
    caller : Common.UserId,
    input : Types.CreateTaskInput,
  ) : Types.TaskView {
    let id = nextId(tasks);
    let now = Time.now();
    let task : Types.Task = {
      id;
      owner = caller;
      var title = input.title;
      var description = input.description;
      var deadline = input.deadline;
      var status = #pending;
      var priorityScore = null;
      var suggestedCategory = null;
      var estimatedCompletionMins = null;
      createdAt = now;
      var updatedAt = now;
    };
    tasks.add(id, task);
    toView(task);
  };

  public func listForUser(tasks : TaskMap, caller : Common.UserId) : [Types.TaskView] {
    tasks.entries()
      .filter(func((_, t) : (Common.TaskId, Types.Task)) : Bool { t.owner == caller })
      .map(func((_, t) : (Common.TaskId, Types.Task)) : Types.TaskView { toView(t) })
      .toArray();
  };

  public func getById(tasks : TaskMap, caller : Common.UserId, taskId : Common.TaskId) : ?Types.TaskView {
    switch (tasks.get(taskId)) {
      case (?task) {
        if (task.owner == caller) { ?toView(task) } else { null };
      };
      case null { null };
    };
  };

  public func update(
    tasks : TaskMap,
    caller : Common.UserId,
    taskId : Common.TaskId,
    input : Types.UpdateTaskInput,
  ) : ?Types.TaskView {
    switch (tasks.get(taskId)) {
      case (?task) {
        if (task.owner != caller) { return null };
        switch (input.title) { case (?t) { task.title := t }; case null {} };
        switch (input.description) { case (?d) { task.description := d }; case null {} };
        switch (input.deadline) { case (?dl) { task.deadline := ?dl }; case null {} };
        switch (input.status) { case (?s) { task.status := s }; case null {} };
        task.updatedAt := Time.now();
        ?toView(task);
      };
      case null { null };
    };
  };

  public func delete(tasks : TaskMap, caller : Common.UserId, taskId : Common.TaskId) : Bool {
    switch (tasks.get(taskId)) {
      case (?task) {
        if (task.owner != caller) { return false };
        tasks.remove(taskId);
        true;
      };
      case null { false };
    };
  };

  public func toggle(tasks : TaskMap, caller : Common.UserId, taskId : Common.TaskId) : ?Types.TaskView {
    switch (tasks.get(taskId)) {
      case (?task) {
        if (task.owner != caller) { return null };
        task.status := switch (task.status) {
          case (#pending) { #completed };
          case (#completed) { #pending };
        };
        task.updatedAt := Time.now();
        ?toView(task);
      };
      case null { null };
    };
  };

  public func search(tasks : TaskMap, caller : Common.UserId, keyword : Text) : [Types.TaskView] {
    let lower = keyword.toLower();
    tasks.entries()
      .filter(func((_, t) : (Common.TaskId, Types.Task)) : Bool {
        t.owner == caller and (
          t.title.toLower().contains(#text lower) or
          t.description.toLower().contains(#text lower)
        )
      })
      .map(func((_, t) : (Common.TaskId, Types.Task)) : Types.TaskView { toView(t) })
      .toArray();
  };

  public func toView(task : Types.Task) : Types.TaskView {
    {
      id = task.id;
      owner = task.owner;
      title = task.title;
      description = task.description;
      deadline = task.deadline;
      status = task.status;
      priorityScore = task.priorityScore;
      suggestedCategory = task.suggestedCategory;
      estimatedCompletionMins = task.estimatedCompletionMins;
      createdAt = task.createdAt;
      updatedAt = task.updatedAt;
    };
  };

  public func applyAiMeta(
    tasks : TaskMap,
    taskId : Common.TaskId,
    priorityScore : ?Nat,
    suggestedCategory : ?Text,
    estimatedCompletionMins : ?Nat,
  ) {
    switch (tasks.get(taskId)) {
      case (?task) {
        switch (priorityScore) { case (?p) { task.priorityScore := ?p }; case null {} };
        switch (suggestedCategory) { case (?c) { task.suggestedCategory := ?c }; case null {} };
        switch (estimatedCompletionMins) { case (?m) { task.estimatedCompletionMins := ?m }; case null {} };
        task.updatedAt := Time.now();
      };
      case null {};
    };
  };

  // Emergent behavior: after 3+ completions, boost priority of pending tasks
  // based on deadline proximity (closer deadline → higher priority)
  public func applyEmergentPriority(tasks : TaskMap, caller : Common.UserId, now : Common.Timestamp) {
    for ((_, t) in tasks.entries()) {
      if (t.owner == caller and t.status == #pending) {
        let score : Nat = switch (t.deadline) {
          case (?dl) {
            let diff = dl - now;
            let dayNs : Int = 86_400_000_000_000;
            if (diff <= dayNs) { 10 }
            else if (diff <= 3 * dayNs) { 8 }
            else if (diff <= 7 * dayNs) { 6 }
            else { 4 };
          };
          case null { 3 };
        };
        t.priorityScore := ?score;
        t.updatedAt := now;
      };
    };
  };
};
