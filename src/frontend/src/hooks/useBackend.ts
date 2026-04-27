import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  ContactInquiry,
  CourseInquiry,
  OverallStats,
  PlacementRecord,
} from "../types";

const STATIC_PLACEMENT_RECORDS: PlacementRecord[] = [
  {
    company: "TCS",
    package: "7 LPA",
    packageLPA: 7,
    year: 2024,
    studentsPlaced: 142,
    role: "Software Engineer",
  },
  {
    company: "Infosys",
    package: "6.5 LPA",
    packageLPA: 6.5,
    year: 2024,
    studentsPlaced: 98,
    role: "Systems Engineer",
  },
  {
    company: "Wipro",
    package: "6 LPA",
    packageLPA: 6,
    year: 2024,
    studentsPlaced: 87,
    role: "Project Engineer",
  },
  {
    company: "Cognizant",
    package: "8 LPA",
    packageLPA: 8,
    year: 2024,
    studentsPlaced: 65,
    role: "Programmer Analyst",
  },
  {
    company: "Accenture",
    package: "10 LPA",
    packageLPA: 10,
    year: 2024,
    studentsPlaced: 54,
    role: "Associate Software Engineer",
  },
  {
    company: "Amazon",
    package: "18 LPA",
    packageLPA: 18,
    year: 2024,
    studentsPlaced: 12,
    role: "SDE-1",
  },
  {
    company: "Zoho",
    package: "9 LPA",
    packageLPA: 9,
    year: 2024,
    studentsPlaced: 43,
    role: "Software Developer",
  },
  {
    company: "HCL Technologies",
    package: "7.5 LPA",
    packageLPA: 7.5,
    year: 2024,
    studentsPlaced: 76,
    role: "Technical Lead Trainee",
  },
  {
    company: "Capgemini",
    package: "8.5 LPA",
    packageLPA: 8.5,
    year: 2024,
    studentsPlaced: 58,
    role: "Analyst",
  },
  {
    company: "Deloitte",
    package: "12 LPA",
    packageLPA: 12,
    year: 2024,
    studentsPlaced: 31,
    role: "Business Analyst",
  },
  {
    company: "Microsoft",
    package: "28 LPA",
    packageLPA: 28,
    year: 2024,
    studentsPlaced: 8,
    role: "Software Engineer II",
  },
  {
    company: "Google",
    package: "42 LPA",
    packageLPA: 42,
    year: 2024,
    studentsPlaced: 3,
    role: "Software Engineer",
  },
];

const STATIC_OVERALL_STATS: OverallStats = {
  placementRate: 98,
  avgPackageLPA: 12,
  highestPackageLPA: 42,
  partnerCompanies: 350,
  totalStudentsPlaced: 2840,
  internationalCollabs: 50,
};

export function usePlacementStats() {
  return useQuery<PlacementRecord[]>({
    queryKey: ["placements"],
    queryFn: async () => STATIC_PLACEMENT_RECORDS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useOverallStats() {
  return useQuery<OverallStats>({
    queryKey: ["overallStats"],
    queryFn: async () => STATIC_OVERALL_STATS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSubmitContactInquiry() {
  return useMutation<void, Error, ContactInquiry>({
    mutationFn: async (_inquiry: ContactInquiry) => {
      await new Promise((res) => setTimeout(res, 800));
    },
  });
}

export function useSubmitCourseInquiry() {
  return useMutation<void, Error, CourseInquiry>({
    mutationFn: async (_inquiry: CourseInquiry) => {
      await new Promise((res) => setTimeout(res, 800));
    },
  });
}
