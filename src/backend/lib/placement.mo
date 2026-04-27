import List "mo:core/List";
import Nat "mo:core/Nat";
import Set "mo:core/Set";
import Text "mo:core/Text";
import PlacementTypes "../types/placement";

module {
  public type State = List.List<PlacementTypes.PlacementRecord>;

  // Seed data for Rathinam College courses
  let seedData : [PlacementTypes.PlacementRecord] = [
    {
      courseId      = "cse";
      courseName    = "B.E. Computer Science & Engineering";
      placementRate = 94;
      avgLPA        = 6.8;
      highestLPA    = 42.0;
      year          = 2024;
      topCompanies  = ["TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Zoho", "Amazon", "Capgemini"];
    },
    {
      courseId      = "ece";
      courseName    = "B.E. Electronics & Communication Engineering";
      placementRate = 88;
      avgLPA        = 5.9;
      highestLPA    = 28.0;
      year          = 2024;
      topCompanies  = ["Bosch", "Texas Instruments", "Qualcomm", "Samsung", "Infosys", "Wipro", "HCL"];
    },
    {
      courseId      = "mech";
      courseName    = "B.E. Mechanical Engineering";
      placementRate = 82;
      avgLPA        = 5.2;
      highestLPA    = 18.0;
      year          = 2024;
      topCompanies  = ["Ashok Leyland", "TVS", "Sundaram Clayton", "TATA Motors", "L&T", "Hyundai"];
    },
    {
      courseId      = "civil";
      courseName    = "B.E. Civil Engineering";
      placementRate = 78;
      avgLPA        = 4.8;
      highestLPA    = 14.0;
      year          = 2024;
      topCompanies  = ["L&T Construction", "Shapoorji Pallonji", "NCC Limited", "RITES", "IRCON"];
    },
    {
      courseId      = "eee";
      courseName    = "B.E. Electrical & Electronics Engineering";
      placementRate = 85;
      avgLPA        = 5.5;
      highestLPA    = 22.0;
      year          = 2024;
      topCompanies  = ["BHEL", "TNEB", "Schneider Electric", "Siemens", "ABB", "Crompton"];
    },
    {
      courseId      = "it";
      courseName    = "B.Tech Information Technology";
      placementRate = 92;
      avgLPA        = 6.5;
      highestLPA    = 38.0;
      year          = 2024;
      topCompanies  = ["TCS", "Infosys", "Accenture", "Zoho", "Freshworks", "PayPal", "Hexaware"];
    },
    {
      courseId      = "mba";
      courseName    = "MBA (Master of Business Administration)";
      placementRate = 96;
      avgLPA        = 8.2;
      highestLPA    = 32.0;
      year          = 2024;
      topCompanies  = ["Deloitte", "KPMG", "Amazon", "Flipkart", "Marico", "ITC", "HDFC Bank", "Axis Bank"];
    },
    {
      courseId      = "mca";
      courseName    = "MCA (Master of Computer Applications)";
      placementRate = 91;
      avgLPA        = 7.1;
      highestLPA    = 35.0;
      year          = 2024;
      topCompanies  = ["TCS", "Infosys", "Wipro", "Cognizant", "Mphasis", "Zoho"];
    },
    {
      courseId      = "aids";
      courseName    = "B.E. AI & Data Science";
      placementRate = 90;
      avgLPA        = 7.8;
      highestLPA    = 42.0;
      year          = 2024;
      topCompanies  = ["Google", "Microsoft", "Amazon", "Flipkart", "Zoho", "Freshworks", "Mu Sigma"];
    },
    {
      courseId      = "cyber";
      courseName    = "B.Tech Cyber Security";
      placementRate = 89;
      avgLPA        = 7.4;
      highestLPA    = 30.0;
      year          = 2024;
      topCompanies  = ["IBM", "Cisco", "Palo Alto Networks", "FireEye", "TCS", "Infosys"];
    },
  ];

  public func init(state : State) {
    if (state.isEmpty()) {
      for (record in seedData.values()) {
        state.add(record);
      };
    };
  };

  public func getAll(state : State) : [PlacementTypes.PlacementRecord] {
    state.toArray();
  };

  public func getOverall(state : State) : PlacementTypes.OverallStats {
    let records = state.toArray();
    let count = records.size();
    if (count == 0) {
      return {
        totalPlacements = 0;
        avgSalary       = 0.0;
        highestPackage  = 0.0;
        companiesCount  = 0;
      };
    };

    var totalStudents : Nat   = 0;
    var sumAvgLPA     : Float = 0.0;
    var maxLPA        : Float = 0.0;
    let companies = Set.empty<Text>();

    for (r in records.values()) {
      // Estimate ~120 students per course for total placements
      totalStudents += (r.placementRate * 120) / 100;
      sumAvgLPA     += r.avgLPA;
      if (r.highestLPA > maxLPA) { maxLPA := r.highestLPA };
      for (c in r.topCompanies.values()) {
        companies.add(c);
      };
    };

    {
      totalPlacements = totalStudents;
      avgSalary       = sumAvgLPA / count.toFloat();
      highestPackage  = maxLPA;
      companiesCount  = companies.size();
    };
  };
};
