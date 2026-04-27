import { r as reactExports, j as jsxRuntimeExports, G as GraduationCap, L as Link } from "./index-DOfvp4Z2.js";
import { B as Badge, S as Section } from "./Section-BdvItxFc.js";
import { m as motion } from "./proxy-MM0XfJfO.js";
import { U as Users } from "./users-Dgt8fP5D.js";
import { A as ArrowRight } from "./arrow-right-DngBDH4K.js";
import { A as AnimatePresence } from "./index-BqYWv6t-.js";
import { C as Clock } from "./clock-DtCPNENW.js";
import { B as BookOpen } from "./book-open-CcbPGPb2.js";
const COURSES = [
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
    color: "bg-primary/10 text-primary border-primary/20"
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
    color: "bg-primary/10 text-primary border-primary/20"
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
    color: "bg-primary/10 text-primary border-primary/20"
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
      "Construction Mgmt"
    ],
    image: "https://picsum.photos/seed/civil4/800/500",
    lpa: "9 LPA",
    color: "bg-primary/10 text-primary border-primary/20"
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
    color: "bg-primary/10 text-primary border-primary/20"
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
    color: "bg-primary/10 text-primary border-primary/20"
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
      "Software Engineering"
    ],
    image: "https://picsum.photos/seed/bsccs7/800/500",
    lpa: "10 LPA",
    color: "bg-accent/10 text-accent border-accent/20"
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
    color: "bg-accent/10 text-accent border-accent/20"
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
    color: "bg-accent/10 text-accent border-accent/20"
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
    color: "bg-accent/10 text-accent border-accent/20"
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
    color: "bg-secondary/10 text-secondary border-secondary/20"
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
      "Business Analytics"
    ],
    image: "https://picsum.photos/seed/bba12/800/500",
    lpa: "8 LPA",
    color: "bg-secondary/10 text-secondary border-secondary/20"
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
    color: "bg-secondary/10 text-secondary border-secondary/20"
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
      "Mobile Development"
    ],
    image: "https://picsum.photos/seed/mca14/800/500",
    lpa: "15 LPA",
    color: "bg-primary/10 text-primary border-primary/20"
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
    color: "bg-primary/10 text-primary border-primary/20"
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
    color: "bg-accent/10 text-accent border-accent/20"
  }
];
const FILTERS = [
  { key: "all", label: "All Programs" },
  { key: "engineering", label: "Engineering" },
  { key: "science-arts", label: "Science & Arts" },
  { key: "commerce", label: "Commerce & Management" },
  { key: "cs", label: "Computer Science" },
  { key: "pg", label: "PG Programs" }
];
function CoursesPage() {
  var _a;
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const filtered = COURSES.filter((c) => c.filter.includes(activeFilter));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "courses.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-gradient-hero-full py-20 relative overflow-hidden",
        "data-ocid": "courses.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,oklch(1 0 0/0.15) 40px,oklch(1 0 0/0.15) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,oklch(1 0 0/0.15) 40px,oklch(1 0 0/0.15) 41px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: "Academic Programs 2025–26" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight", children: [
                    "Our Programs &",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Academic Excellence" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed", children: "Choose from 16 undergraduate and postgraduate programs at Rathinam Group of Institutions, Eachanari, Coimbatore. Every program is AICTE-approved, industry-aligned, and placement-focused." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 18, className: "text-secondary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground text-sm font-semibold", children: "16 Programs" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 18, className: "text-secondary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground text-sm font-semibold", children: "1800+ Seats" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "text-secondary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground text-sm font-semibold", children: "98% Placement" })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.6, delay: 0.15 },
                className: "grid grid-cols-2 gap-4",
                children: [
                  {
                    src: "https://picsum.photos/seed/hero-cse/400/280",
                    alt: "CSE Students at Rathinam"
                  },
                  {
                    src: "https://picsum.photos/seed/hero-lab/400/280",
                    alt: "Lab Session"
                  },
                  {
                    src: "https://picsum.photos/seed/hero-mgmt/400/280",
                    alt: "Management Class"
                  },
                  {
                    src: "https://picsum.photos/seed/hero-sci/400/280",
                    alt: "Science Department"
                  }
                ].map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: img.src,
                    alt: img.alt,
                    className: `rounded-2xl object-cover w-full shadow-elevated ${i === 0 ? "h-36" : i === 3 ? "h-36" : "h-36"}`,
                    loading: "eager"
                  },
                  img.alt
                ))
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border-b border-border sticky top-16 z-30 shadow-subtle",
        "data-ocid": "courses.filter.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 overflow-x-auto py-3 scrollbar-hide", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(f.key),
            "data-ocid": `courses.filter.${f.key}.tab`,
            className: `whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-smooth border ${activeFilter === f.key ? "bg-primary text-primary-foreground border-primary shadow-card" : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"}`,
            children: [
              f.label,
              f.key === "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 bg-primary-foreground/20 text-primary-foreground rounded-full px-1.5 py-0 text-xs", children: COURSES.length })
            ]
          },
          f.key
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: ((_a = FILTERS.find((f) => f.key === activeFilter)) == null ? void 0 : _a.label) ?? "All Programs",
        subtitle: `Showing ${filtered.length} program${filtered.length !== 1 ? "s" : ""} — click any card to explore full curriculum, faculty, and placement stats.`,
        "data-ocid": "courses.grid.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              transition: { duration: 0.3 },
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7",
              children: filtered.map((course, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: ci * 0.06 },
                  "data-ocid": `courses.catalog.item.${ci + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/courses/$courseId",
                      params: { courseId: course.id },
                      className: "group block h-full",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "course-card h-full flex flex-col", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] overflow-hidden", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: course.image,
                              alt: course.name,
                              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                              loading: "lazy"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 flex gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full", children: [
                              course.lpa,
                              " avg"
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `text-xs font-semibold px-2.5 py-1 rounded-full border ${course.color}`,
                                children: course.department
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-3 group-hover:text-primary transition-smooth leading-snug", children: course.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "text-primary" }),
                              course.duration
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12, className: "text-primary" }),
                              course.seats,
                              " seats"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-5 flex-1", children: course.subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "li",
                            {
                              className: "flex items-center gap-2 text-xs text-muted-foreground",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  BookOpen,
                                  {
                                    size: 10,
                                    className: "text-accent shrink-0"
                                  }
                                ),
                                s
                              ]
                            },
                            s
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Link,
                              {
                                to: "/admissions",
                                onClick: (e) => e.stopPropagation(),
                                "data-ocid": `courses.catalog.apply.${ci + 1}`,
                                className: "btn-secondary text-xs px-4 py-2 rounded-lg",
                                children: "Apply Now"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
                              "Know More ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  )
                },
                course.id
              ))
            },
            activeFilter
          ) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-16 text-muted-foreground",
              "data-ocid": "courses.catalog.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 48, className: "mx-auto mb-4 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: "No programs found for this filter." })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-gradient-primary py-16",
        "data-ocid": "courses.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4", children: "Ready to Begin Your Journey?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 text-lg", children: "Applications are open at Rathinam Group of Institutions, Eachanari, Coimbatore for the 2025–26 academic year. Secure your seat today." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/admissions",
                "data-ocid": "courses.cta.apply_now.primary_button",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth",
                children: [
                  "Apply Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": "courses.cta.contact.secondary_button",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-bold rounded-full hover:bg-primary-foreground/10 transition-smooth",
                children: "Request Info"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  CoursesPage as default
};
