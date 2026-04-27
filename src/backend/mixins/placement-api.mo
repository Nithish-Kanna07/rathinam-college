import List "mo:core/List";
import PlacementLib "../lib/placement";
import PlacementTypes "../types/placement";

mixin (placements : List.List<PlacementTypes.PlacementRecord>) {
  public query func getPlacementStats() : async [PlacementTypes.PlacementRecord] {
    PlacementLib.getAll(placements);
  };

  public query func getOverallStats() : async PlacementTypes.OverallStats {
    PlacementLib.getOverall(placements);
  };
};
