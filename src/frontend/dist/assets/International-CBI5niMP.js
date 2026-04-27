import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, M as Mail, P as Phone, a as MapPin, r as reactExports, G as GraduationCap } from "./index-DOfvp4Z2.js";
import { f as Canvas, d as useFrame } from "./react-three-fiber.esm-m-0ZPZ_o.js";
import { B as Badge, S as Section } from "./Section-BdvItxFc.js";
import { m as motion } from "./proxy-MM0XfJfO.js";
import { G as Globe } from "./globe-C6HpeR6t.js";
import { A as ArrowRight } from "./arrow-right-DngBDH4K.js";
import { C as CircleCheck } from "./circle-check-DVtVve72.js";
import { S as Star } from "./star-S4XidvQT.js";
import { B as BookOpen } from "./book-open-CcbPGPb2.js";
import { U as Users } from "./users-Dgt8fP5D.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode);
const STATS = [
  { value: "50+", label: "Partner Universities", icon: "🏛️" },
  { value: "15", label: "Countries", icon: "🌍" },
  { value: "500+", label: "Students on Exchange", icon: "✈️" },
  { value: "100+", label: "Joint Research Projects", icon: "🔬" },
  { value: "80+", label: "International Internships", icon: "💼" }
];
const PARTNERS = [
  {
    name: "MIT",
    full: "Massachusetts Institute of Technology",
    country: "United States",
    flag: "🇺🇸",
    type: "Research",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700"
  },
  {
    name: "Oxford",
    full: "University of Oxford",
    country: "United Kingdom",
    flag: "🇬🇧",
    type: "Exchange",
    color: "bg-indigo-50 border-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-700"
  },
  {
    name: "TU Berlin",
    full: "Technische Universität Berlin",
    country: "Germany",
    flag: "🇩🇪",
    type: "Dual Degree",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-100 text-orange-700"
  },
  {
    name: "Sorbonne",
    full: "Sorbonne Université Paris",
    country: "France",
    flag: "🇫🇷",
    type: "Exchange",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-700"
  },
  {
    name: "NUS Singapore",
    full: "National University of Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    type: "Research",
    color: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700"
  },
  {
    name: "Waseda Japan",
    full: "Waseda University Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    type: "Exchange",
    color: "bg-pink-50 border-pink-200",
    badgeColor: "bg-pink-100 text-pink-700"
  },
  {
    name: "Melbourne",
    full: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    type: "Research",
    color: "bg-cyan-50 border-cyan-200",
    badgeColor: "bg-cyan-100 text-cyan-700"
  },
  {
    name: "Toronto",
    full: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    type: "Exchange",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-700"
  },
  {
    name: "DTU Denmark",
    full: "Technical University of Denmark",
    country: "Denmark",
    flag: "🇩🇰",
    type: "Research",
    color: "bg-yellow-50 border-yellow-200",
    badgeColor: "bg-yellow-100 text-yellow-700"
  },
  {
    name: "ETH Zurich",
    full: "ETH Zürich – Swiss Federal Institute",
    country: "Switzerland",
    flag: "🇨🇭",
    type: "Dual Degree",
    color: "bg-violet-50 border-violet-200",
    badgeColor: "bg-violet-100 text-violet-700"
  },
  {
    name: "IIT Bombay",
    full: "Indian Institute of Technology Bombay",
    country: "India",
    flag: "🇮🇳",
    type: "MoU",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-700"
  },
  {
    name: "Nanyang Tech",
    full: "Nanyang Technological University",
    country: "Singapore",
    flag: "🇸🇬",
    type: "Research",
    color: "bg-teal-50 border-teal-200",
    badgeColor: "bg-teal-100 text-teal-700"
  }
];
const PROGRAMS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { size: 28, className: "text-accent" }),
    title: "Semester Exchange",
    duration: "1 Semester",
    eligibility: "Eligible after 2nd year",
    desc: "Study one full semester at a partner university abroad with full credit transfer back to Rathinam. Immerse yourself in a new academic culture.",
    highlights: [
      "Full tuition waiver at partner campus",
      "Credit transfer guaranteed",
      "Visa & travel support",
      "Accommodation assistance"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 28, className: "text-secondary" }),
    title: "Summer School",
    duration: "4–6 Weeks",
    eligibility: "Open to all years",
    desc: "Spend 4–6 weeks at partner campuses during summer, attending specialized courses, workshops, and cultural excursions.",
    highlights: [
      "Short-term intensive courses",
      "Partner campus certificate",
      "Industry site visits",
      "Cultural immersion activities"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 28, className: "text-primary" }),
    title: "Dual Degree",
    duration: "Last Year Abroad",
    eligibility: "Merit-based selection",
    desc: "Complete your final year at a partner university and graduate with two internationally recognized degrees — one from Rathinam, one from the partner institution.",
    highlights: [
      "Two degrees in one program",
      "International alumni network",
      "Top-tier university credential",
      "Scholarship support available"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 28, className: "text-violet-600" }),
    title: "Joint Research",
    duration: "6–12 Months",
    eligibility: "Faculty + final year students",
    desc: "Collaborate with world-renowned faculty on cutting-edge research projects. Co-author publications and present at international conferences.",
    highlights: [
      "Co-supervised by partner faculty",
      "International publication credits",
      "Research stipend available",
      "PhD pathway support"
    ]
  }
];
const TESTIMONIALS = [
  {
    name: "Priya Subramaniam",
    country: "India 🇮🇳",
    exchangeUniv: "NUS Singapore",
    program: "Semester Exchange",
    quote: "My semester at NUS completely transformed my perspective. The exposure to research labs, multicultural peers, and Singapore's tech ecosystem was unparalleled. I returned with a job offer from a Singapore startup!",
    photo: "https://picsum.photos/seed/priya-student/200/200",
    rating: 5
  },
  {
    name: "Arjun Krishnamoorthy",
    country: "India 🇮🇳",
    exchangeUniv: "TU Berlin",
    program: "Dual Degree",
    quote: "The Dual Degree with TU Berlin was the best decision of my life. I now hold both a B.E. from Rathinam and a B.Sc. from Germany. My German degree opened doors in the European job market that I never imagined possible.",
    photo: "https://picsum.photos/seed/arjun-student/200/200",
    rating: 5
  },
  {
    name: "Kavitha Rajan",
    country: "India 🇮🇳",
    exchangeUniv: "University of Melbourne",
    program: "Summer School",
    quote: "The 5-week summer school at Melbourne was incredible. We worked on a real AI project with Australian students, toured top tech companies, and I made lifelong international friends. Highly recommend!",
    photo: "https://picsum.photos/seed/kavitha-student/200/200",
    rating: 5
  }
];
const PROCESS_STEPS = [
  {
    step: 1,
    label: "Apply",
    desc: "Submit online application with academic transcripts, SOP, and faculty recommendation",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 22 }),
    color: "bg-primary"
  },
  {
    step: 2,
    label: "Selection",
    desc: "Interview + shortlisting based on GPA, extracurriculars, and language proficiency",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 22 }),
    color: "bg-secondary"
  },
  {
    step: 3,
    label: "Visa Support",
    desc: "Our international office provides full visa guidance, documentation, and embassy prep",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 22 }),
    color: "bg-accent"
  },
  {
    step: 4,
    label: "Departure",
    desc: "Pre-departure orientation, partner campus introduction, and airport assistance",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { size: 22 }),
    color: "bg-violet-600"
  },
  {
    step: 5,
    label: "Return & Credits",
    desc: "On return, all earned credits are transferred and counted toward your Rathinam degree",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 22 }),
    color: "bg-orange-500"
  }
];
const BENEFITS = [
  {
    icon: "🌏",
    title: "Global Exposure",
    desc: "Study on 4 continents across 15+ countries"
  },
  {
    icon: "🎓",
    title: "International Degree Recognition",
    desc: "Credentials recognized by global employers and universities"
  },
  {
    icon: "🤝",
    title: "Industry Connections Worldwide",
    desc: "Access to multinational company networks and recruiters"
  },
  {
    icon: "🗣️",
    title: "Language Courses",
    desc: "Free English, German, French, and Japanese language training"
  },
  {
    icon: "🚀",
    title: "Career Boost",
    desc: "International alumni earn 40–60% higher starting packages"
  },
  {
    icon: "📜",
    title: "Research Publications",
    desc: "Co-author papers in top international journals"
  }
];
const typeColorMap = {
  Research: "bg-accent/15 text-accent border-accent/30",
  Exchange: "bg-primary/10 text-primary border-primary/20",
  "Dual Degree": "bg-secondary/15 text-secondary border-secondary/30",
  MoU: "bg-muted text-muted-foreground border-border"
};
function GlobeWireframe() {
  const groupRef = reactExports.useRef(null);
  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x += delta * 0.08;
    }
  });
  const latLines = Array.from({ length: 7 }, (_, i) => i);
  const lonLines = Array.from({ length: 10 }, (_, i) => i);
  const radius = 1.4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    latLines.map((i) => {
      const phi = i / 6 * Math.PI;
      const r = radius * Math.sin(phi);
      const y = radius * Math.cos(phi);
      const points = Array.from(
        { length: 33 },
        (_, j) => {
          const theta = j / 32 * Math.PI * 2;
          return [r * Math.cos(theta), y, r * Math.sin(theta)];
        }
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("line", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "bufferAttribute",
          {
            attach: "attributes-position",
            args: [new Float32Array(points.flat()), 3]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("lineBasicMaterial", { color: "#22d3ee", transparent: true, opacity: 0.55 })
      ] }, `lat-${i}`);
    }),
    lonLines.map((i) => {
      const theta = i / 10 * Math.PI;
      const points = Array.from(
        { length: 33 },
        (_, j) => {
          const phi = j / 32 * Math.PI * 2;
          return [
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
          ];
        }
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("line", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "bufferAttribute",
          {
            attach: "attributes-position",
            args: [new Float32Array(points.flat()), 3]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("lineBasicMaterial", { color: "#a78bfa", transparent: true, opacity: 0.45 })
      ] }, `lon-${i}`);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [radius * 1.01, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshBasicMaterial",
        {
          color: "#0ea5e9",
          transparent: true,
          opacity: 0.04,
          wireframe: false
        }
      )
    ] })
  ] });
}
function InternationalPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "international.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[560px] flex items-center",
        "data-ocid": "international.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/international-hero.dim_1400x600.jpg",
              alt: "Global campus connections",
              className: "absolute inset-0 w-full h-full object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.19_155/0.92)] via-[oklch(0.26_0.17_165/0.78)] to-[oklch(0.3_0.14_200/0.45)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute right-4 top-8 md:right-16 md:top-1/2 md:-translate-y-1/2 pointer-events-none opacity-80",
              style: { width: 200, height: 200 },
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 3.5], fov: 45 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.6 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(GlobeWireframe, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "green", className: "mb-5 text-sm px-4 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14 }),
                  " Global Connections"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight max-w-3xl", children: [
                  "Your Gateway to",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-green", children: "World-Class Education" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85 text-xl max-w-2xl leading-relaxed mb-8", children: "Partner with 50+ universities across 15 Countries. Study abroad, earn dual degrees, and build a career without borders from Rathinam Group of Institutions." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/admissions",
                      "data-ocid": "international.hero.apply_now.primary_button",
                      className: "inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-base",
                      children: [
                        "Apply for Exchange ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#programs",
                      "data-ocid": "international.hero.explore_programs.secondary_button",
                      className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth text-base",
                      children: "Explore Programs"
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-0 shadow-card",
        "data-ocid": "international.stats.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 divide-x divide-border", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "flex flex-col items-center py-8 px-4 text-center hover:bg-accent/5 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-1", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-accent leading-none mb-1", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm font-medium", children: s.label })
            ]
          },
          s.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "Our Global Partner Universities",
        subtitle: "50+ University collaborations across 15 Countries — Rathinam Group of Institutions",
        centered: true,
        "data-ocid": "international.partners.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4", children: PARTNERS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileInView: { opacity: 1, scale: 1 },
              initial: { opacity: 0, scale: 0.9 },
              viewport: { once: true },
              transition: { delay: i * 0.05 },
              "data-ocid": `international.partner.item.${i + 1}`,
              className: "bg-card border border-border rounded-xl p-4 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-default",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: p.flag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm mb-1 leading-tight", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: p.country }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2 py-0.5 text-[10px] font-bold rounded-full border ${typeColorMap[p.type] ?? "bg-muted text-muted-foreground border-border"}`,
                    children: p.type
                  }
                )
              ]
            },
            p.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "+ More partnerships being added every year. Full list available at the International Office, Rathinam Group of Institutions, Eachanari." }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        id: "programs",
        title: "International Programs",
        subtitle: "Choose the program that best fits your academic journey and career aspirations",
        className: "section-alt",
        centered: true,
        "data-ocid": "international.programs.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: PROGRAMS.map((prog, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, x: 0 },
            initial: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
            viewport: { once: true },
            transition: { delay: i * 0.12 },
            "data-ocid": `international.program.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-muted rounded-xl flex items-center justify-center shrink-0", children: prog.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-1", children: prog.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30 rounded-full px-2.5 py-0.5", children: [
                      "⏱ ",
                      prog.duration
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5", children: prog.eligibility })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: prog.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: prog.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-sm text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-accent shrink-0" }),
                    h
                  ]
                },
                h
              )) })
            ]
          },
          prog.title
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Student Voices",
        subtitle: "Hear from students who transformed their careers through our global programs",
        centered: true,
        "data-ocid": "international.testimonials.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 24 },
            viewport: { once: true },
            transition: { delay: i * 0.13 },
            "data-ocid": `international.testimonial.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mb-4", children: Array.from({ length: t.rating }, (_, j) => `star-${j}`).map(
                (key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 14,
                    className: "fill-secondary text-secondary"
                  },
                  key
                )
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-muted-foreground text-sm leading-relaxed flex-1 mb-5 italic", children: [
                '"',
                t.quote,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: t.photo,
                    alt: t.name,
                    className: "w-12 h-12 rounded-full object-cover border-2 border-accent/40",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.country }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-accent font-semibold", children: [
                    "📍 ",
                    t.exchangeUniv,
                    " · ",
                    t.program
                  ] })
                ] })
              ] })
            ]
          },
          t.name
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-gradient-hero-full py-20",
        "data-ocid": "international.process.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "green", className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { size: 12 }),
              " Study Abroad Journey"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3", children: "How It Works: 5 Simple Steps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg max-w-xl mx-auto", children: "We guide you through every stage — from application to credit transfer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-primary-foreground/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10", children: PROCESS_STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                whileInView: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: 20 },
                viewport: { once: true },
                transition: { delay: i * 0.12 },
                "data-ocid": `international.process.item.${i + 1}`,
                className: "flex flex-col items-center text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-20 h-20 ${s.color} rounded-full flex items-center justify-center text-white shadow-elevated mb-4 ring-4 ring-primary-foreground/20`,
                      children: s.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xs font-bold text-primary-foreground/60 uppercase tracking-widest mb-1", children: [
                    "Step ",
                    s.step
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary-foreground text-lg mb-2", children: s.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-xs leading-relaxed", children: s.desc })
                ]
              },
              s.step
            )) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Why Go Global?",
        subtitle: "International experience is the single biggest differentiator in today's job market",
        className: "section-alt",
        centered: true,
        "data-ocid": "international.benefits.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: BENEFITS.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 20 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            "data-ocid": `international.benefit.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: b.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-2", children: b.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: b.desc })
            ]
          },
          b.title
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-t border-border py-16",
        "data-ocid": "international.contact.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "green", className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 12 }),
              " International Office"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "Ready to Go Global?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-6", children: "Our dedicated International Programs team at Rathinam Group of Institutions is here to guide you through every step — from choosing the right program to visa documentation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-accent shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "mailto:international@rathinam.in",
                      className: "text-sm font-semibold text-foreground hover:text-accent transition-smooth",
                      "data-ocid": "international.contact.email.link",
                      children: "international@rathinam.in"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, className: "text-accent shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "tel:+914222345678",
                      className: "text-sm font-semibold text-foreground hover:text-accent transition-smooth",
                      "data-ocid": "international.contact.phone.link",
                      children: "+91-422-2345678"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-accent shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "International Office, Admin Block, Eachanari, Coimbatore" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-hero-full rounded-2xl p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🌏" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-primary-foreground mb-3", children: "Applications Open" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-foreground/80 text-sm mb-6", children: [
              "Next semester exchange deadline:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-secondary", children: "July 15, 2025" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-foreground/10 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-secondary", children: "50+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/70 text-xs", children: "Universities" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-foreground/10 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-secondary", children: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/70 text-xs", children: "Countries" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-foreground/10 rounded-lg p-3 col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-secondary", children: "80+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/70 text-xs", children: "International Internships" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/admissions",
                "data-ocid": "international.contact.apply_now.primary_button",
                className: "inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth",
                children: [
                  "Apply for Exchange Program ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ]
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
}
export {
  InternationalPage as default
};
