import Types "../types/user";
import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  public type UserMap = Map.Map<Types.UserId, Types.User>;

  public func register(users : UserMap, caller : Types.UserId, displayName : Text) : Types.UserView {
    let now = Time.now();
    let user : Types.User = {
      id = caller;
      var displayName = displayName;
      createdAt = now;
    };
    users.add(caller, user);
    toView(user);
  };

  public func getProfile(users : UserMap, caller : Types.UserId) : ?Types.UserView {
    switch (users.get(caller)) {
      case (?user) { ?toView(user) };
      case null { null };
    };
  };

  public func updateDisplayName(users : UserMap, caller : Types.UserId, displayName : Text) : ?Types.UserView {
    switch (users.get(caller)) {
      case (?user) {
        user.displayName := displayName;
        ?toView(user);
      };
      case null { null };
    };
  };

  public func toView(user : Types.User) : Types.UserView {
    {
      id = user.id;
      displayName = user.displayName;
      createdAt = user.createdAt;
    };
  };
};
