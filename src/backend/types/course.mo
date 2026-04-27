import Common "common";

module {
  public type CourseInquiry = {
    id        : Common.InquiryId;
    name      : Text;
    email     : Text;
    phone     : Text;
    courseId  : Text;
    message   : Text;
    timestamp : Common.Timestamp;
  };
};
