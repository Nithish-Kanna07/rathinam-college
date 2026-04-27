import UserLib "../lib/user";
import UserTypes "../types/user";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

mixin (users : Map.Map<UserTypes.UserId, UserTypes.User>) {

  public shared ({ caller }) func registerUser(displayName : Text) : async UserTypes.UserView {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot register");
    };
    UserLib.register(users, caller, displayName);
  };

  public shared query ({ caller }) func getMyProfile() : async ?UserTypes.UserView {
    if (caller.isAnonymous()) { return null };
    UserLib.getProfile(users, caller);
  };

  public shared ({ caller }) func updateProfile(displayName : Text) : async ?UserTypes.UserView {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers cannot update profile");
    };
    UserLib.updateDisplayName(users, caller, displayName);
  };

};
