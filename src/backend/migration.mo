// Migration: drop all stable variables from the old StudyFlow AI canister.
// The new Rathinam College canister has no equivalent state — this is a
// complete rebuild. We consume the old fields and return an empty record.
module {
  // --- Old type definitions (inlined from .old/src/backend/) ---

  // common
  type UserId    = Principal;
  type TaskId    = Nat;
  type Timestamp = Int;

  // task
  type TaskStatus = { #pending; #completed };
  type Task = {
    id                          : TaskId;
    owner                       : UserId;
    var title                   : Text;
    var description             : Text;
    var deadline                : ?Timestamp;
    var status                  : TaskStatus;
    var priorityScore           : ?Nat;
    var suggestedCategory       : ?Text;
    var estimatedCompletionMins : ?Nat;
    createdAt                   : Timestamp;
    var updatedAt               : Timestamp;
  };

  // user
  type User = {
    id              : UserId;
    var displayName : Text;
    createdAt       : Timestamp;
  };

  // ai
  type CompletionEvent = {
    taskId                  : TaskId;
    completedAt             : Timestamp;
    timeSpentEstimateMins   : ?Nat;
  };

  // --- mo:core/Map internal structure (from mo:core/Types.mo) ---
  type MapData<K, V> = {
    kvs      : [var ?(K, V)];
    var count : Nat;
  };
  type MapInternal<K, V> = {
    data     : MapData<K, V>;
    children : [var ?MapNode<K, V>];
  };
  type MapLeaf<K, V> = {
    data : MapData<K, V>;
  };
  type MapNode<K, V> = {
    #leaf     : MapLeaf<K, V>;
    #internal : MapInternal<K, V>;
  };
  type OldMap<K, V> = {
    var root : MapNode<K, V>;
    var size : Nat;
  };

  // --- mo:core/List internal structure (from mo:core/Types.mo) ---
  type OldList<T> = {
    var blocks       : [var [var ?T]];
    var blockIndex   : Nat;
    var elementIndex : Nat;
  };

  // --- Old actor state ---
  type OldActor = {
    var aiApiKey     : Text;
    var aiApiUrl     : Text;
    completionEvents : OldList<CompletionEvent>;
    tasks            : OldMap<TaskId, Task>;
    users            : OldMap<UserId, User>;
  };

  // The new Rathinam College actor has no stable fields.
  type NewActor = {};

  public func run(_old : OldActor) : NewActor {
    // Intentionally drop all old StudyFlow AI state — complete rebuild.
    {};
  };
};
