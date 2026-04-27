import Common "common";

module {
  public type ContactInquiry = {
    id        : Common.InquiryId;
    name      : Text;
    email     : Text;
    phone     : Text;
    courseInterest : Text;
    message   : Text;
    timestamp : Common.Timestamp;
  };
};
