export interface Course {
  id: string;
  title: string;
  department: string;
  duration: string;
  seats: number;
  description: string;
  highlights: string[];
  imageUrl: string;
  fee: string;
  eligibility: string;
}

export interface PlacementRecord {
  company: string;
  package: string;
  packageLPA: number;
  year: number;
  studentsPlaced: number;
  logoUrl?: string;
  role: string;
}

export interface OverallStats {
  placementRate: number;
  avgPackageLPA: number;
  highestPackageLPA: number;
  partnerCompanies: number;
  totalStudentsPlaced: number;
  internationalCollabs: number;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}

export interface CourseInquiry {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Facility {
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface InternationalPartner {
  university: string;
  country: string;
  flag: string;
  description: string;
  programs: string[];
}
