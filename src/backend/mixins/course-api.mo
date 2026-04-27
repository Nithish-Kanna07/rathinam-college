import List "mo:core/List";
import Time "mo:core/Time";
import CourseLib "../lib/course";
import CourseTypes "../types/course";

mixin (courseInquiries : List.List<CourseTypes.CourseInquiry>) {
  public func submitCourseInquiry(
    name     : Text,
    email    : Text,
    phone    : Text,
    courseId : Text,
    message  : Text,
  ) : async () {
    let nextId = courseInquiries.size();
    let _ = CourseLib.submit(
      courseInquiries,
      nextId,
      name,
      email,
      phone,
      courseId,
      message,
      Time.now(),
    );
  };
};
