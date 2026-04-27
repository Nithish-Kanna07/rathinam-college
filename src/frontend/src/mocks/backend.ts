import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getContactInquiries: async () => [],
  getOverallStats: async () => ({
    totalPlacements: BigInt(1200),
    highestPackage: 42,
    companiesCount: BigInt(150),
    avgSalary: 12,
  }),
  getPlacementStats: async () => [
    {
      year: BigInt(2024),
      placementRate: BigInt(98),
      topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"],
      highestLPA: 42,
      courseName: "B.E. Computer Science",
      courseId: "cse",
      avgLPA: 12,
    },
    {
      year: BigInt(2024),
      placementRate: BigInt(95),
      topCompanies: ["Deloitte", "KPMG", "EY", "Accenture"],
      highestLPA: 28,
      courseName: "MBA",
      courseId: "mba",
      avgLPA: 10,
    },
    {
      year: BigInt(2024),
      placementRate: BigInt(92),
      topCompanies: ["Apollo", "Fortis", "Manipal Hospitals"],
      highestLPA: 18,
      courseName: "B.Pharm",
      courseId: "bpharm",
      avgLPA: 7,
    },
  ],
  submitContactInquiry: async () => undefined,
  submitCourseInquiry: async () => undefined,
};
