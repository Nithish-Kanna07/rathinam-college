import List "mo:core/List";
import ContactTypes "types/contact";
import PlacementTypes "types/placement";
import CourseTypes "types/course";
import PlacementLib "lib/placement";
import ContactApi "mixins/contact-api";
import PlacementApi "mixins/placement-api";
import CourseApi "mixins/course-api";
import Migration "migration";

(with migration = Migration.run)
actor {
  let contactInquiries = List.empty<ContactTypes.ContactInquiry>();
  let placements       = List.empty<PlacementTypes.PlacementRecord>();
  let courseInquiries  = List.empty<CourseTypes.CourseInquiry>();

  // Seed placement data on first run
  PlacementLib.init(placements);

  include ContactApi(contactInquiries);
  include PlacementApi(placements);
  include CourseApi(courseInquiries);
};
