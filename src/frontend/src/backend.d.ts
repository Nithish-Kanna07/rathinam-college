import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export type InquiryId = bigint;
export interface PlacementRecord {
    year: bigint;
    placementRate: bigint;
    topCompanies: Array<string>;
    highestLPA: number;
    courseName: string;
    courseId: string;
    avgLPA: number;
}
export interface OverallStats {
    totalPlacements: bigint;
    highestPackage: number;
    companiesCount: bigint;
    avgSalary: number;
}
export interface ContactInquiry {
    id: InquiryId;
    name: string;
    email: string;
    courseInterest: string;
    message: string;
    timestamp: Timestamp;
    phone: string;
}
export interface backendInterface {
    getContactInquiries(): Promise<Array<ContactInquiry>>;
    getOverallStats(): Promise<OverallStats>;
    getPlacementStats(): Promise<Array<PlacementRecord>>;
    submitContactInquiry(name: string, email: string, phone: string, courseInterest: string, message: string): Promise<void>;
    submitCourseInquiry(name: string, email: string, phone: string, courseId: string, message: string): Promise<void>;
}
