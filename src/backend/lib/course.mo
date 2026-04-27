import List "mo:core/List";
import Common "../types/common";
import CourseTypes "../types/course";

module {
  public type State = List.List<CourseTypes.CourseInquiry>;

  public func submit(
    state     : State,
    nextId    : Nat,
    name      : Text,
    email     : Text,
    phone     : Text,
    courseId  : Text,
    message   : Text,
    timestamp : Common.Timestamp,
  ) : CourseTypes.CourseInquiry {
    let inquiry : CourseTypes.CourseInquiry = {
      id = nextId;
      name;
      email;
      phone;
      courseId;
      message;
      timestamp;
    };
    state.add(inquiry);
    inquiry;
  };

  public func list(state : State) : [CourseTypes.CourseInquiry] {
    state.toArray();
  };
};
