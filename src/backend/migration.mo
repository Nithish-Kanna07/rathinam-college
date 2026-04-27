// Migration: no prior stable state to consume.
// This is a fresh Rathinam College canister — no old fields exist.
module {
  type OldActor = {};
  type NewActor = {};

  public func run(_old : OldActor) : NewActor {
    {};
  };
};
