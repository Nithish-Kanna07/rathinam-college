import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Badge } from "../components/CollegeBadge";
import { Section } from "../components/Section";

type FilterKey =
  | "all"
  | "engineering"
  | "science-arts"
  | "commerce"
  | "cs"
  | "pg";

interface CourseCard {
  id: string;
  name: string;
  department: string;
  filter: FilterKey[];
  duration: string;
  seats: number;
  subjects: string[];
  image: string;
  lpa: string;
  color: string;
}

const COURSES: CourseCard[] = [
  {
    id: "be-cse",
    name: "B.E. Computer Science & Engineering",
    department: "Engineering",
    filter: ["all", "engineering", "cs"],
    duration: "4 Years",
    seats: 120,
    subjects: ["Data Structures", "Machine Learning", "Cloud Computing"],
    image: "https://picsum.photos/seed/cse1/800/500",
    lpa: "18 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "be-ece",
    name: "B.E. Electronics & Communication Engg.",
    department: "Engineering",
    filter: ["all", "engineering"],
    duration: "4 Years",
    seats: 60,
    subjects: ["VLSI Design", "Embedded Systems", "Signal Processing"],
    image: "https://picsum.photos/seed/ece2/800/500",
    lpa: "12 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "be-mech",
    name: "B.E. Mechanical Engineering",
    department: "Engineering",
    filter: ["all", "engineering"],
    duration: "4 Years",
    seats: 60,
    subjects: ["CAD/CAM", "Thermodynamics", "Robotics"],
    image: "https://picsum.photos/seed/mech3/800/500",
    lpa: "10 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "be-civil",
    name: "B.E. Civil Engineering",
    department: "Engineering",
    filter: ["all", "engineering"],
    duration: "4 Years",
    seats: 60,
    subjects: [
      "Structural Engineering",
      "GIS & Remote Sensing",
      "Construction Mgmt",
    ],
    image: "https://picsum.photos/seed/civil4/800/500",
    lpa: "9 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "be-it",
    name: "B.E. Information Technology",
    department: "Engineering",
    filter: ["all", "engineering", "cs"],
    duration: "4 Years",
    seats: 60,
    subjects: ["Web Technologies", "Cybersecurity", "AI & Automation"],
    image: "https://picsum.photos/seed/it5/800/500",
    lpa: "16 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "b-arch",
    name: "B.Arch (Bachelor of Architecture)",
    department: "Engineering",
    filter: ["all", "engineering"],
    duration: "5 Years",
    seats: 40,
    subjects: ["Architectural Design", "Urban Planning", "Sustainable Design"],
    image: "https://picsum.photos/seed/arch6/800/500",
    lpa: "8 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "bsc-cs",
    name: "B.Sc. Computer Science",
    department: "Science & Arts",
    filter: ["all", "science-arts", "cs"],
    duration: "3 Years",
    seats: 60,
    subjects: [
      "Programming Fundamentals",
      "Networking",
      "Software Engineering",
    ],
    image: "https://picsum.photos/seed/bsccs7/800/500",
    lpa: "10 LPA",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "bsc-maths",
    name: "B.Sc. Mathematics",
    department: "Science & Arts",
    filter: ["all", "science-arts"],
    duration: "3 Years",
    seats: 60,
    subjects: ["Real Analysis", "Linear Algebra", "Probability & Statistics"],
    image: "https://picsum.photos/seed/math8/800/500",
    lpa: "7 LPA",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "bsc-physics",
    name: "B.Sc. Physics",
    department: "Science & Arts",
    filter: ["all", "science-arts"],
    duration: "3 Years",
    seats: 60,
    subjects: ["Classical Mechanics", "Quantum Physics", "Electronics"],
    image: "https://picsum.photos/seed/phys9/800/500",
    lpa: "7 LPA",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "bsc-chem",
    name: "B.Sc. Chemistry",
    department: "Science & Arts",
    filter: ["all", "science-arts"],
    duration: "3 Years",
    seats: 60,
    subjects: ["Organic Chemistry", "Analytical Chemistry", "Biochemistry"],
    image: "https://picsum.photos/seed/chem10/800/500",
    lpa: "7 LPA",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "bcom",
    name: "B.Com (Bachelor of Commerce)",
    department: "Commerce & Management",
    filter: ["all", "commerce"],
    duration: "3 Years",
    seats: 60,
    subjects: ["Accounting", "Business Law", "Tally & GST"],
    image: "https://picsum.photos/seed/bcom11/800/500",
    lpa: "6 LPA",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    id: "bba",
    name: "BBA (Bachelor of Business Administration)",
    department: "Commerce & Management",
    filter: ["all", "commerce"],
    duration: "3 Years",
    seats: 60,
    subjects: [
      "Marketing Management",
      "Entrepreneurship",
      "Business Analytics",
    ],
    image: "https://picsum.photos/seed/bba12/800/500",
    lpa: "8 LPA",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    id: "mba",
    name: "MBA (Master of Business Administration)",
    department: "Commerce & Management",
    filter: ["all", "commerce", "pg"],
    duration: "2 Years",
    seats: 60,
    subjects: ["Strategic Management", "Financial Mgmt", "Operations Research"],
    image: "https://picsum.photos/seed/mba13/800/500",
    lpa: "14 LPA",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    id: "mca",
    name: "MCA (Master of Computer Applications)",
    department: "PG Programs",
    filter: ["all", "cs", "pg"],
    duration: "2 Years",
    seats: 30,
    subjects: [
      "Advanced Algorithms",
      "Cloud Architecture",
      "Mobile Development",
    ],
    image: "https://picsum.photos/seed/mca14/800/500",
    lpa: "15 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "msc-cs",
    name: "M.Sc. Computer Science",
    department: "PG Programs",
    filter: ["all", "cs", "pg"],
    duration: "2 Years",
    seats: 30,
    subjects: ["Advanced AI", "Big Data Analytics", "Research Methodology"],
    image: "https://picsum.photos/seed/msccs15/800/500",
    lpa: "16 LPA",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "msc-maths",
    name: "M.Sc. Mathematics",
    department: "PG Programs",
    filter: ["all", "science-arts", "pg"],
    duration: "2 Years",
    seats: 30,
    subjects: ["Advanced Analysis", "Numerical Methods", "Graph Theory"],
    image: "https://picsum.photos/seed/mscm16/800/500",
    lpa: "9 LPA",
    color: "bg-accent/10 text-accent border-accent/20",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Programs" },
  { key: "engineering", label: "Engineering" },
  { key: "science-arts", label: "Science & Arts" },
  { key: "commerce", label: "Commerce & Management" },
  { key: "cs", label: "Computer Science" },
  { key: "pg", label: "PG Programs" },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = COURSES.filter((c) => c.filter.includes(activeFilter));

  return (
    <div data-ocid="courses.page">
      {/* Hero Banner */}
      <section
        className="bg-gradient-hero-full py-20 relative overflow-hidden"
        data-ocid="courses.hero.section"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,oklch(1 0 0/0.15) 40px,oklch(1 0 0/0.15) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,oklch(1 0 0/0.15) 40px,oklch(1 0 0/0.15) 41px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Academic Programs 2025–26
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                Our Programs &amp;
                <br />
                <span className="text-gradient-orange">
                  Academic Excellence
                </span>
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Choose from 16 undergraduate and postgraduate programs across
                Engineering, Science, Arts, and Management. Every program is
                AICTE-approved, industry-aligned, and placement-focused.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2">
                  <GraduationCap size={18} className="text-secondary" />
                  <span className="text-primary-foreground text-sm font-semibold">
                    16 Programs
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2">
                  <Users size={18} className="text-secondary" />
                  <span className="text-primary-foreground text-sm font-semibold">
                    1800+ Seats
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2">
                  <ArrowRight size={18} className="text-secondary" />
                  <span className="text-primary-foreground text-sm font-semibold">
                    98% Placement
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  src: "https://picsum.photos/seed/hero-cse/400/280",
                  alt: "CSE Students",
                },
                {
                  src: "https://picsum.photos/seed/hero-lab/400/280",
                  alt: "Lab Session",
                },
                {
                  src: "https://picsum.photos/seed/hero-mgmt/400/280",
                  alt: "Management Class",
                },
                {
                  src: "https://picsum.photos/seed/hero-sci/400/280",
                  alt: "Science Department",
                },
              ].map((img, i) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  className={`rounded-2xl object-cover w-full shadow-elevated ${i === 0 ? "h-36" : i === 3 ? "h-36" : "h-36"}`}
                  loading="eager"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div
        className="bg-card border-b border-border sticky top-16 z-30 shadow-subtle"
        data-ocid="courses.filter.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                data-ocid={`courses.filter.${f.key}.tab`}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                  activeFilter === f.key
                    ? "bg-primary text-primary-foreground border-primary shadow-card"
                    : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                }`}
              >
                {f.label}
                {f.key === "all" && (
                  <span className="ml-1.5 bg-primary-foreground/20 text-primary-foreground rounded-full px-1.5 py-0 text-xs">
                    {COURSES.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <Section
        title={
          FILTERS.find((f) => f.key === activeFilter)?.label ?? "All Programs"
        }
        subtitle={`Showing ${filtered.length} program${filtered.length !== 1 ? "s" : ""} — click any card to explore full curriculum, faculty, and placement stats.`}
        data-ocid="courses.grid.section"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((course, ci) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.06 }}
                data-ocid={`courses.catalog.item.${ci + 1}`}
              >
                <Link
                  to="/courses/$courseId"
                  params={{ courseId: course.id }}
                  className="group block h-full"
                >
                  <div className="course-card h-full flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex gap-2">
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                          {course.lpa} avg
                        </span>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${course.color}`}
                        >
                          {course.department}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-foreground text-base mb-3 group-hover:text-primary transition-smooth leading-snug">
                        {course.name}
                      </h3>
                      <div className="flex gap-3 mb-4">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock size={12} className="text-primary" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users size={12} className="text-primary" />
                          {course.seats} seats
                        </span>
                      </div>
                      <ul className="space-y-1.5 mb-5 flex-1">
                        {course.subjects.map((s) => (
                          <li
                            key={s}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <BookOpen
                              size={10}
                              className="text-accent shrink-0"
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <Link
                          to="/admissions"
                          onClick={(e) => e.stopPropagation()}
                          data-ocid={`courses.catalog.apply.${ci + 1}`}
                          className="btn-secondary text-xs px-4 py-2 rounded-lg"
                        >
                          Apply Now
                        </Link>
                        <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth">
                          Know More <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="courses.catalog.empty_state"
          >
            <GraduationCap size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">
              No programs found for this filter.
            </p>
          </div>
        )}
      </Section>

      {/* CTA Banner */}
      <section
        className="bg-gradient-primary py-16"
        data-ocid="courses.cta.section"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Applications are open for the 2025–26 academic year. Secure your
            seat today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              data-ocid="courses.cta.apply_now.primary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              data-ocid="courses.cta.contact.secondary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-bold rounded-full hover:bg-primary-foreground/10 transition-smooth"
            >
              Request Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
