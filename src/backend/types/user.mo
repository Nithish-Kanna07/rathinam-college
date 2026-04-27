import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type User = {
    id : UserId;
    var displayName : Text;
    createdAt : Timestamp;
  };

  // Shared (immutable) view returned to callers
  public type UserView = {
    id : UserId;
    displayName : Text;
    createdAt : Timestamp;
  };
};
