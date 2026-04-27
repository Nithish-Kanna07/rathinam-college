module {
  public type PlacementRecord = {
    courseId      : Text;
    courseName    : Text;
    placementRate : Nat;
    avgLPA        : Float;
    highestLPA    : Float;
    year          : Nat;
    topCompanies  : [Text];
  };

  public type OverallStats = {
    totalPlacements  : Nat;
    avgSalary        : Float;
    highestPackage   : Float;
    companiesCount   : Nat;
  };
};
