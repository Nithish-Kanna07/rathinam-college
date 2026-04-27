import List "mo:core/List";
import Time "mo:core/Time";
import ContactLib "../lib/contact";
import ContactTypes "../types/contact";

mixin (contactInquiries : List.List<ContactTypes.ContactInquiry>) {
  public func submitContactInquiry(
    name           : Text,
    email          : Text,
    phone          : Text,
    courseInterest : Text,
    message        : Text,
  ) : async () {
    let nextId = contactInquiries.size();
    let _ = ContactLib.submit(
      contactInquiries,
      nextId,
      name,
      email,
      phone,
      courseInterest,
      message,
      Time.now(),
    );
  };

  public query func getContactInquiries() : async [ContactTypes.ContactInquiry] {
    ContactLib.list(contactInquiries);
  };
};
