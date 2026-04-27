import List "mo:core/List";
import Common "../types/common";
import ContactTypes "../types/contact";

module {
  public type State = List.List<ContactTypes.ContactInquiry>;

  public func submit(
    state          : State,
    nextId         : Nat,
    name           : Text,
    email          : Text,
    phone          : Text,
    courseInterest : Text,
    message        : Text,
    timestamp      : Common.Timestamp,
  ) : ContactTypes.ContactInquiry {
    let inquiry : ContactTypes.ContactInquiry = {
      id             = nextId;
      name;
      email;
      phone;
      courseInterest;
      message;
      timestamp;
    };
    state.add(inquiry);
    inquiry;
  };

  public func list(state : State) : [ContactTypes.ContactInquiry] {
    state.toArray();
  };
};
