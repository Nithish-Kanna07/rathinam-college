import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  Clock,
  GraduationCap,
  Mail,
  Phone,
  Send,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "../components/CollegeBadge";
import { Section } from "../components/Section";
import { useSubmitCourseInquiry } from "../hooks/useBackend";

interface Semester {
  sem: string;
  subjects: string[];
}

interface FacultyMember {
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  photo: string;
}

interface PlacementStat {
  company: string;
  role: string;
  lpa: string;
  logo: string;
}

interface CourseDetail {
  name: string;
  department: string;
  duration: string;
  seats: number;
  fee: string;
  image: string;
  description: string;
  eligibility: string;
  avgLPA: string;
  highestLPA: string;
  placementRate: string;
  highlights: string[];
  outcomes: string[];
  curriculum: Semester[];
  placements: PlacementStat[];
  faculty: FacultyMember[];
  partners: string[];
}

const COURSE_DETAILS: Record<string, CourseDetail> = {
  "be-cse": {
    name: "B.E. Computer Science & Engineering",
    department: "Engineering & Technology",
    duration: "4 Years (8 Semesters)",
    seats: 120,
    fee: "₹85,000/year",
    image: "https://picsum.photos/seed/cse-hero/1200/600",
    description:
      "A comprehensive 4-year program blending theory and hands-on practice across AI, ML, cloud computing, full-stack development and cybersecurity. Graduates emerge as industry-ready engineers equipped for top global companies.",
    eligibility:
      "10+2 with Physics, Chemistry & Mathematics — minimum 60% aggregate. TNEA rank holders preferred.",
    avgLPA: "18 LPA",
    highestLPA: "42 LPA",
    placementRate: "98%",
    highlights: [
      "AI & ML Specialization tracks",
      "AWS Educate partner institution",
      "Google & Amazon campus drives",
      "30+ active coding clubs",
      "Industry hackathons every semester",
    ],
    outcomes: [
      "Design and build scalable software systems",
      "Apply machine learning to real-world problems",
      "Deploy cloud-native applications on AWS/GCP",
      "Contribute to open-source projects",
      "Lead agile software development teams",
    ],
    curriculum: [
      {
        sem: "Semester 1",
        subjects: [
          "Engineering Mathematics I",
          "Physics for Computing",
          "Problem Solving & Python",
          "Digital Logic Design",
          "Communication Skills",
        ],
      },
      {
        sem: "Semester 2",
        subjects: [
          "Engineering Mathematics II",
          "Data Structures",
          "Object-Oriented Programming (Java)",
          "Computer Organization",
          "Environmental Science",
        ],
      },
      {
        sem: "Semester 3",
        subjects: [
          "Discrete Mathematics",
          "Algorithms & Complexity",
          "Database Management Systems",
          "Operating Systems",
          "Computer Networks I",
        ],
      },
      {
        sem: "Semester 4",
        subjects: [
          "Software Engineering",
          "Computer Networks II",
          "Web Technologies",
          "Probability & Statistics",
          "Microprocessors & Interfacing",
        ],
      },
      {
        sem: "Semester 5",
        subjects: [
          "Machine Learning",
          "Cloud Computing",
          "Mobile Application Development",
          "Compiler Design",
          "Elective I (AI / IoT)",
        ],
      },
      {
        sem: "Semester 6",
        subjects: [
          "Deep Learning",
          "Big Data Analytics",
          "Cybersecurity",
          "Full-Stack Development",
          "Elective II (Blockchain / AR-VR)",
        ],
      },
      {
        sem: "Semester 7",
        subjects: [
          "Project Work Phase I",
          "Industry Internship",
          "Elective III (DevOps / Data Engineering)",
          "Seminar & Technical Presentation",
        ],
      },
      {
        sem: "Semester 8",
        subjects: [
          "Project Work Phase II (Final)",
          "Entrepreneurship & IPR",
          "Elective IV (Research / Innovation)",
          "Campus Placement Training",
        ],
      },
    ],
    placements: [
      {
        company: "Google",
        role: "Software Engineer",
        lpa: "42 LPA",
        logo: "https://picsum.photos/seed/google-logo/80/80",
      },
      {
        company: "Microsoft",
        role: "SDE-II",
        lpa: "28 LPA",
        logo: "https://picsum.photos/seed/ms-logo/80/80",
      },
      {
        company: "Amazon",
        role: "SDE-1",
        lpa: "18 LPA",
        logo: "https://picsum.photos/seed/amz-logo/80/80",
      },
      {
        company: "Zoho",
        role: "Software Developer",
        lpa: "9 LPA",
        logo: "https://picsum.photos/seed/zoho-logo/80/80",
      },
      {
        company: "TCS",
        role: "Systems Engineer",
        lpa: "7 LPA",
        logo: "https://picsum.photos/seed/tcs-logo/80/80",
      },
      {
        company: "Infosys",
        role: "Associate",
        lpa: "6.5 LPA",
        logo: "https://picsum.photos/seed/infy-logo/80/80",
      },
    ],
    faculty: [
      {
        name: "Dr. K. Anbalagan",
        designation: "HOD & Professor",
        specialization: "Artificial Intelligence & Machine Learning",
        experience: "22 years",
        photo: "https://picsum.photos/seed/faculty-cse1/200/200",
      },
      {
        name: "Dr. P. Meenakshi",
        designation: "Associate Professor",
        specialization: "Cloud Computing & DevOps",
        experience: "15 years",
        photo: "https://picsum.photos/seed/faculty-cse2/200/200",
      },
      {
        name: "Mr. S. Karthikeyan",
        designation: "Assistant Professor",
        specialization: "Full-Stack Development & Open Source",
        experience: "10 years",
        photo: "https://picsum.photos/seed/faculty-cse3/200/200",
      },
    ],
    partners: [
      "Google",
      "Amazon",
      "Microsoft",
      "Zoho",
      "TCS",
      "Infosys",
      "Wipro",
    ],
  },
  "be-ece": {
    name: "B.E. Electronics & Communication Engineering",
    department: "Engineering & Technology",
    duration: "4 Years (8 Semesters)",
    seats: 60,
    fee: "₹80,000/year",
    image: "https://picsum.photos/seed/ece-hero/1200/600",
    description:
      "An advanced program covering VLSI design, embedded systems, 5G communications, and IoT. Students gain hands-on experience in state-of-the-art electronics labs and industry-sponsored projects.",
    eligibility:
      "10+2 with Physics, Chemistry & Mathematics — minimum 60% aggregate.",
    avgLPA: "12 LPA",
    highestLPA: "24 LPA",
    placementRate: "95%",
    highlights: [
      "VLSI Design & Simulation Lab",
      "Embedded Systems Workshop",
      "5G & IoT Research Centre",
      "Industry tie-up with BSNL & Airtel",
      "Texas Instruments partnership",
    ],
    outcomes: [
      "Design analog and digital circuits",
      "Develop embedded firmware",
      "Work on wireless communication systems",
      "Apply signal processing techniques",
      "Prototype IoT solutions",
    ],
    curriculum: [
      {
        sem: "Semester 1",
        subjects: [
          "Engineering Mathematics I",
          "Engineering Physics",
          "Basic Electrical Engineering",
          "Programming Fundamentals",
          "Engineering Drawing",
        ],
      },
      {
        sem: "Semester 2",
        subjects: [
          "Engineering Mathematics II",
          "Electronic Devices & Circuits",
          "Digital Electronics",
          "Network Analysis",
          "Communication Skills",
        ],
      },
      {
        sem: "Semester 3",
        subjects: [
          "Signals & Systems",
          "Analog Circuits",
          "Electromagnetic Theory",
          "Microcontrollers",
          "Data Structures",
        ],
      },
      {
        sem: "Semester 4",
        subjects: [
          "Digital Signal Processing",
          "Linear Integrated Circuits",
          "Communication Systems",
          "VLSI Design Fundamentals",
          "Control Systems",
        ],
      },
      {
        sem: "Semester 5",
        subjects: [
          "Wireless Communications",
          "Embedded Systems",
          "Advanced VLSI",
          "Antenna & Wave Propagation",
          "Elective I",
        ],
      },
      {
        sem: "Semester 6",
        subjects: [
          "IoT & Edge Computing",
          "5G Networks",
          "RF Circuit Design",
          "Optical Fiber Communications",
          "Elective II",
        ],
      },
      {
        sem: "Semester 7",
        subjects: [
          "Project Phase I",
          "Industry Internship",
          "Elective III (Robotics / AI in ECE)",
          "Technical Seminar",
        ],
      },
      {
        sem: "Semester 8",
        subjects: [
          "Project Phase II (Final)",
          "Entrepreneurship & IPR",
          "Elective IV",
          "Placement Training",
        ],
      },
    ],
    placements: [
      {
        company: "Qualcomm",
        role: "Hardware Engineer",
        lpa: "24 LPA",
        logo: "https://picsum.photos/seed/qual-logo/80/80",
      },
      {
        company: "Intel",
        role: "Firmware Engineer",
        lpa: "20 LPA",
        logo: "https://picsum.photos/seed/intel-logo/80/80",
      },
      {
        company: "BSNL",
        role: "Telecom Engineer",
        lpa: "10 LPA",
        logo: "https://picsum.photos/seed/bsnl-logo/80/80",
      },
      {
        company: "L&T Technology",
        role: "Design Engineer",
        lpa: "8 LPA",
        logo: "https://picsum.photos/seed/lt-logo/80/80",
      },
    ],
    faculty: [
      {
        name: "Dr. R. Sundaram",
        designation: "HOD & Professor",
        specialization: "VLSI Design & Signal Processing",
        experience: "20 years",
        photo: "https://picsum.photos/seed/faculty-ece1/200/200",
      },
      {
        name: "Dr. S. Lakshmi",
        designation: "Associate Professor",
        specialization: "Wireless Networks & 5G",
        experience: "14 years",
        photo: "https://picsum.photos/seed/faculty-ece2/200/200",
      },
      {
        name: "Mr. A. Babu",
        designation: "Assistant Professor",
        specialization: "Embedded Systems & IoT",
        experience: "9 years",
        photo: "https://picsum.photos/seed/faculty-ece3/200/200",
      },
    ],
    partners: [
      "Qualcomm",
      "Intel",
      "Texas Instruments",
      "BSNL",
      "L&T Technology",
    ],
  },
  mba: {
    name: "MBA — Master of Business Administration",
    department: "Management & Commerce",
    duration: "2 Years (4 Semesters)",
    seats: 60,
    fee: "₹95,000/year",
    image: "https://picsum.photos/seed/mba-hero/1200/600",
    description:
      "Industry-immersive MBA with dual specialization in Marketing, Finance, HR, or Operations. Live projects, executive speakers, and national B-school competitions define the two-year journey.",
    eligibility:
      "Any UG degree with minimum 50% aggregate. CAT/MAT/TANCET scores preferred.",
    avgLPA: "14 LPA",
    highestLPA: "30 LPA",
    placementRate: "96%",
    highlights: [
      "Dual specialization tracks",
      "50+ corporate partner companies",
      "International exchange program",
      "Executive speaker series",
      "Live consulting projects",
    ],
    outcomes: [
      "Lead cross-functional business teams",
      "Analyze financial statements and markets",
      "Design marketing strategies",
      "Build entrepreneurial ventures",
      "Manage operations and supply chains",
    ],
    curriculum: [
      {
        sem: "Semester 1",
        subjects: [
          "Management Fundamentals",
          "Business Statistics & Analytics",
          "Financial Accounting",
          "Marketing Management",
          "Organizational Behavior",
        ],
      },
      {
        sem: "Semester 2",
        subjects: [
          "Corporate Finance",
          "Business Law",
          "Human Resource Management",
          "Operations Management",
          "Research Methodology",
        ],
      },
      {
        sem: "Semester 3",
        subjects: [
          "Strategic Management",
          "Elective Specialization I",
          "Elective Specialization II",
          "Industry Internship (8 weeks)",
          "Business Ethics",
        ],
      },
      {
        sem: "Semester 4",
        subjects: [
          "Capstone Consulting Project",
          "Elective Specialization III",
          "Entrepreneurship & Startup",
          "Leadership & Innovation",
          "International Business",
        ],
      },
    ],
    placements: [
      {
        company: "Deloitte",
        role: "Business Analyst",
        lpa: "18 LPA",
        logo: "https://picsum.photos/seed/deloitte-logo/80/80",
      },
      {
        company: "HDFC Bank",
        role: "Relationship Manager",
        lpa: "12 LPA",
        logo: "https://picsum.photos/seed/hdfc-logo/80/80",
      },
      {
        company: "Flipkart",
        role: "Product Manager",
        lpa: "22 LPA",
        logo: "https://picsum.photos/seed/fkart-logo/80/80",
      },
      {
        company: "ITC",
        role: "Marketing Exec",
        lpa: "10 LPA",
        logo: "https://picsum.photos/seed/itc-logo/80/80",
      },
    ],
    faculty: [
      {
        name: "Dr. N. Ramachandran",
        designation: "Dean & Professor",
        specialization: "Strategic Management & Entrepreneurship",
        experience: "25 years",
        photo: "https://picsum.photos/seed/faculty-mba1/200/200",
      },
      {
        name: "Dr. V. Suganya",
        designation: "Associate Professor",
        specialization: "Finance & Capital Markets",
        experience: "16 years",
        photo: "https://picsum.photos/seed/faculty-mba2/200/200",
      },
      {
        name: "Mr. B. Praveen",
        designation: "Assistant Professor",
        specialization: "Marketing & Digital Strategy",
        experience: "11 years",
        photo: "https://picsum.photos/seed/faculty-mba3/200/200",
      },
    ],
    partners: ["Deloitte", "HDFC Bank", "Flipkart", "ITC", "Cognizant", "HCL"],
  },
};

// fallback for courses not fully defined
function buildFallback(id: string): CourseDetail {
  return {
    name: id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    department: "Academic Department",
    duration: "3–4 Years",
    seats: 60,
    fee: "₹65,000/year",
    image: `https://picsum.photos/seed/${id}-hero/1200/600`,
    description:
      "An industry-aligned program designed to equip students with practical skills, theoretical knowledge, and professional readiness for rewarding careers.",
    eligibility: "10+2 with relevant subjects — minimum 50% aggregate.",
    avgLPA: "8 LPA",
    highestLPA: "18 LPA",
    placementRate: "94%",
    highlights: [
      "AICTE / UGC approved curriculum",
      "Industry-experienced faculty",
      "Placement assistance",
      "Modern labs and infrastructure",
      "Research and project opportunities",
    ],
    outcomes: [
      "Apply domain knowledge to industry problems",
      "Communicate effectively in professional settings",
      "Work in multidisciplinary teams",
      "Pursue higher education or entrepreneurship",
      "Contribute to national development",
    ],
    curriculum: [
      {
        sem: "Year 1 (Semesters 1–2)",
        subjects: [
          "Foundation Mathematics/Science",
          "Core Subject I",
          "Core Subject II",
          "Communication Skills",
          "Environmental Science",
        ],
      },
      {
        sem: "Year 2 (Semesters 3–4)",
        subjects: [
          "Core Subject III",
          "Core Subject IV",
          "Elective I",
          "Lab / Practical",
          "Soft Skills",
        ],
      },
      {
        sem: "Year 3 (Semesters 5–6)",
        subjects: [
          "Advanced Core I",
          "Advanced Core II",
          "Elective II",
          "Industry Internship",
          "Project Phase I",
        ],
      },
    ],
    placements: [
      {
        company: "TCS",
        role: "Graduate Trainee",
        lpa: "7 LPA",
        logo: "https://picsum.photos/seed/tcs-logo/80/80",
      },
      {
        company: "Wipro",
        role: "Process Associate",
        lpa: "6 LPA",
        logo: "https://picsum.photos/seed/wipro-logo/80/80",
      },
    ],
    faculty: [
      {
        name: "Dr. A. Rajesh",
        designation: "HOD & Professor",
        specialization: "Core Department Subject",
        experience: "18 years",
        photo: `https://picsum.photos/seed/${id}-f1/200/200`,
      },
      {
        name: "Dr. B. Priya",
        designation: "Associate Professor",
        specialization: "Applied Research",
        experience: "12 years",
        photo: `https://picsum.photos/seed/${id}-f2/200/200`,
      },
      {
        name: "Mr. C. Vignesh",
        designation: "Assistant Professor",
        specialization: "Industry & Placement",
        experience: "8 years",
        photo: `https://picsum.photos/seed/${id}-f3/200/200`,
      },
    ],
    partners: ["TCS", "Wipro", "Infosys", "HCL", "Cognizant"],
  };
}

export default function CourseDetailPage() {
  const { courseId } = useParams({ from: "/courses/$courseId" });
  const course = COURSE_DETAILS[courseId] ?? buildFallback(courseId);

  const {
    mutate: submitInquiry,
    isPending,
    isSuccess,
    isError,
  } = useSubmitCourseInquiry();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry({ ...form, courseId });
  };

  return (
    <div data-ocid="course_detail.page">
      {/* Hero */}
      <section
        className="bg-gradient-hero-full py-16 relative overflow-hidden"
        data-ocid="course_detail.hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            data-ocid="course_detail.back.link"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-smooth text-sm mb-6"
          >
            <ArrowLeft size={16} /> Back to All Programs
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Badge variant="secondary" className="mb-3">
                {course.department}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                {course.name}
              </h1>
              <p className="text-primary-foreground/80 text-base leading-relaxed mb-6">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 py-1.5 text-primary-foreground text-sm">
                  <Clock size={14} className="text-secondary" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 py-1.5 text-primary-foreground text-sm">
                  <Users size={14} className="text-secondary" />
                  {course.seats} seats
                </span>
                <span className="flex items-center gap-2 bg-secondary/20 rounded-lg px-3 py-1.5 text-secondary text-sm font-bold">
                  <TrendingUp size={14} />
                  Avg {course.avgLPA}
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/admissions"
                  data-ocid="course_detail.apply_now.primary_button"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <a
                  href="#request-info"
                  data-ocid="course_detail.request_info.secondary_button"
                  className="btn-outline inline-flex items-center gap-2"
                  style={{
                    color: "oklch(var(--primary-foreground))",
                    borderColor: "oklch(var(--primary-foreground)/0.5)",
                  }}
                >
                  Request Info
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <img
                src={course.image}
                alt={course.name}
                className="rounded-2xl shadow-elevated w-full object-cover aspect-video"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement Stats Bar */}
      <div
        className="bg-card border-b border-border"
        data-ocid="course_detail.stats.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              {
                label: "Placement Rate",
                value: course.placementRate,
                icon: Award,
                color: "text-accent",
              },
              {
                label: "Average Package",
                value: course.avgLPA,
                icon: TrendingUp,
                color: "text-secondary",
              },
              {
                label: "Highest Package",
                value: course.highestLPA,
                icon: GraduationCap,
                color: "text-primary",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1"
              >
                <stat.icon size={22} className={stat.color} />
                <span
                  className={`font-display text-2xl font-bold ${stat.color}`}
                >
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Section data-ocid="course_detail.details.section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                Program Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4"
                  >
                    <CheckCircle
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                Learning Outcomes
              </h2>
              <div className="space-y-3">
                {course.outcomes.map((o, i) => (
                  <motion.div
                    key={o}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -16 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/15 rounded-xl"
                  >
                    <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{o}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Semester-wise Curriculum */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                <BookOpen className="inline mr-2 text-primary" size={22} />
                Semester-wise Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((sem, i) => (
                  <motion.div
                    key={sem.sem}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 12 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-border rounded-xl overflow-hidden"
                    data-ocid={`course_detail.curriculum.item.${i + 1}`}
                  >
                    <div className="bg-primary/8 px-5 py-3 flex items-center gap-3 border-b border-border">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="font-display font-bold text-foreground text-sm">
                        {sem.sem}
                      </span>
                    </div>
                    <div className="p-4 flex flex-wrap gap-2">
                      {sem.subjects.map((s) => (
                        <span
                          key={s}
                          className="bg-background border border-border text-foreground rounded-full px-3 py-1 text-xs font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Placement Companies */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                <TrendingUp className="inline mr-2 text-secondary" size={22} />
                Placement Records
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {course.placements.map((p, i) => (
                  <motion.div
                    key={p.company}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-card transition-smooth"
                    data-ocid={`course_detail.placement.item.${i + 1}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-muted mx-auto mb-2 overflow-hidden">
                      <img
                        src={p.logo}
                        alt={p.company}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">
                      {p.company}
                    </p>
                    <p className="text-muted-foreground text-xs mb-2">
                      {p.role}
                    </p>
                    <Badge variant="placement">{p.lpa}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Faculty */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                <GraduationCap className="inline mr-2 text-accent" size={22} />
                Meet the Faculty
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {course.faculty.map((f, i) => (
                  <motion.div
                    key={f.name}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-card transition-smooth"
                    data-ocid={`course_detail.faculty.item.${i + 1}`}
                  >
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover ring-4 ring-primary/20"
                      loading="lazy"
                    />
                    <h3 className="font-display font-bold text-foreground text-sm">
                      {f.name}
                    </h3>
                    <p className="text-primary text-xs font-semibold mb-1">
                      {f.designation}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                      {f.specialization}
                    </p>
                    <Badge variant="muted">{f.experience}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industry Partners */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                <Building2 className="inline mr-2 text-primary" size={22} />
                Industry Partners
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.partners.map((p) => (
                  <span
                    key={p}
                    className="bg-muted border border-border text-foreground font-semibold text-sm rounded-xl px-5 py-2.5 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-smooth"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6" data-ocid="course_detail.sidebar.section">
            {/* Eligibility Card */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground sticky top-24">
              <h3 className="font-display font-bold text-lg mb-3">
                Eligibility Criteria
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                {course.eligibility}
              </p>
              <div className="space-y-2 mb-5 border-t border-primary-foreground/20 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-foreground/70">Duration</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-foreground/70">Annual Fee</span>
                  <span className="font-bold text-secondary">{course.fee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-foreground/70">
                    Total Seats
                  </span>
                  <span className="font-semibold">{course.seats}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-foreground/70">
                    Avg Package
                  </span>
                  <span className="font-bold text-secondary">
                    {course.avgLPA}
                  </span>
                </div>
              </div>
              <Link
                to="/admissions"
                data-ocid="course_detail.sidebar.apply.primary_button"
                className="block text-center btn-secondary w-full mb-2"
              >
                Apply Now
              </Link>
              <a
                href="#request-info"
                data-ocid="course_detail.sidebar.request_info.secondary_button"
                className="block text-center text-sm text-primary-foreground/80 hover:text-primary-foreground underline transition-smooth"
              >
                Request Information
              </a>
            </div>

            {/* Download Brochure */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-foreground mb-2">
                Program Brochure
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Download the detailed program guide with fee structure and
                syllabus.
              </p>
              <a
                href="/assets/brochure.pdf"
                download
                data-ocid="course_detail.brochure.download_button"
                className="btn-outline w-full text-center block text-sm"
              >
                Download Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Request Info Form */}
      <section
        id="request-info"
        className="bg-muted/30 py-16 border-t border-border"
        data-ocid="course_detail.request_info.section"
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3">
              Get In Touch
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Request Program Information
            </h2>
            <p className="text-muted-foreground">
              Our admissions counsellor will contact you within 24 hours.
            </p>
          </div>
          <div
            className="bg-card border border-border rounded-2xl p-8 shadow-card"
            data-ocid="course_detail.inquiry_form.dialog"
          >
            {isSuccess ? (
              <div
                className="text-center py-10"
                data-ocid="course_detail.inquiry_form.success_state"
              >
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Request Submitted!
                </h3>
                <p className="text-muted-foreground">
                  We'll reach out to you within 24 hours with full program
                  details.
                </p>
                <Link to="/courses" className="btn-primary mt-6 inline-block">
                  Explore More Programs
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                data-ocid="course_detail.inquiry.form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="inq-name"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="inq-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Arun Kumar"
                        data-ocid="course_detail.inquiry.name.input"
                        className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="inq-phone"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        id="inq-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        placeholder="+91 98765 43210"
                        data-ocid="course_detail.inquiry.phone.input"
                        className="w-full bg-background border border-input rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    className="block text-sm font-semibold text-foreground mb-1.5"
                    htmlFor="inq-email"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      id="inq-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="arun@email.com"
                      data-ocid="course_detail.inquiry.email.input"
                      className="w-full bg-background border border-input rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    className="block text-sm font-semibold text-foreground mb-1.5"
                    htmlFor="inq-program"
                  >
                    Program Interested In
                  </label>
                  <input
                    id="inq-program"
                    type="text"
                    readOnly
                    value={course.name}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-muted-foreground cursor-default"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-semibold text-foreground mb-1.5"
                    htmlFor="inq-message"
                  >
                    Your Questions / Message
                  </label>
                  <textarea
                    id="inq-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us about your academic background or specific questions about this program..."
                    data-ocid="course_detail.inquiry.message.textarea"
                    className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                {isError && (
                  <p
                    className="text-destructive text-sm mb-4"
                    data-ocid="course_detail.inquiry.error_state"
                  >
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="course_detail.inquiry.submit_button"
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isPending ? (
                    <span
                      className="flex items-center gap-2"
                      data-ocid="course_detail.inquiry.loading_state"
                    >
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <>
                      <Send size={16} /> Send Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
