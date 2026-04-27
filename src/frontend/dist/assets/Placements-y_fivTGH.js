import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, M as Mail, P as Phone } from "./index-zlr7lLpe.js";
import { u as useOverallStats, a as usePlacementStats } from "./useBackend-C_lmyPCj.js";
import { m as motion } from "./proxy-91zh4HLU.js";
import { T as Trophy } from "./trophy-BMca1iXo.js";
import { A as Award } from "./award-16gjXTk0.js";
import { B as BookOpen } from "./book-open-D6AoIqdF.js";
import { S as Star } from "./star-Cg6E-iwd.js";
import { U as Users } from "./users-D5L5l4N9.js";
import { T as TrendingUp } from "./trending-up-CgvZrXJv.js";
import { B as Building2 } from "./building-2-C6eJNm70.js";
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const YEAR_TREND = [
  { year: 2020, avg: 6.2, pct: 59 },
  { year: 2021, avg: 6.8, pct: 65 },
  { year: 2022, avg: 7.5, pct: 71 },
  { year: 2023, avg: 8.1, pct: 77 },
  { year: 2024, avg: 8.5, pct: 81 }
];
const COURSE_PLACEMENTS = [
  {
    dept: "CSE",
    fullName: "Computer Science & Engg.",
    pct: 98,
    avg: 9.2,
    highest: 42,
    recruiters: ["TCS", "Infosys", "Wipro"],
    barColor: "bg-blue-500",
    badge: "bg-blue-100 text-blue-800",
    rowBg: "hover:bg-blue-50/50"
  },
  {
    dept: "MCA",
    fullName: "Master of Computer Applications",
    pct: 97,
    avg: 8.5,
    highest: 35,
    recruiters: ["Microsoft", "Google"],
    barColor: "bg-violet-500",
    badge: "bg-violet-100 text-violet-800",
    rowBg: "hover:bg-violet-50/50"
  },
  {
    dept: "ECE",
    fullName: "Electronics & Communication",
    pct: 95,
    avg: 7.8,
    highest: 28,
    recruiters: ["Samsung", "Bosch", "Intel"],
    barColor: "bg-cyan-500",
    badge: "bg-cyan-100 text-cyan-800",
    rowBg: "hover:bg-cyan-50/50"
  },
  {
    dept: "MBA",
    fullName: "Master of Business Administration",
    pct: 93,
    avg: 8,
    highest: 22,
    recruiters: ["Deloitte", "KPMG", "EY"],
    barColor: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800",
    rowBg: "hover:bg-amber-50/50"
  },
  {
    dept: "B.Com",
    fullName: "Bachelor of Commerce",
    pct: 90,
    avg: 7.2,
    highest: 20,
    recruiters: ["HDFC", "ICICI", "Axis Bank"],
    barColor: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-800",
    rowBg: "hover:bg-emerald-50/50"
  },
  {
    dept: "Mechanical",
    fullName: "Mechanical Engineering",
    pct: 88,
    avg: 6.5,
    highest: 18,
    recruiters: ["L&T", "Tata Motors"],
    barColor: "bg-orange-500",
    badge: "bg-orange-100 text-orange-800",
    rowBg: "hover:bg-orange-50/50"
  },
  {
    dept: "Civil",
    fullName: "Civil Engineering",
    pct: 85,
    avg: 6,
    highest: 15,
    recruiters: ["L&T", "Godrej Properties"],
    barColor: "bg-rose-500",
    badge: "bg-rose-100 text-rose-800",
    rowBg: "hover:bg-rose-50/50"
  }
];
const TOP_RECRUITERS = [
  { name: "TCS", cat: 0 },
  { name: "Infosys", cat: 1 },
  { name: "Wipro", cat: 2 },
  { name: "HCL", cat: 0 },
  { name: "Cognizant", cat: 3 },
  { name: "Accenture", cat: 4 },
  { name: "IBM", cat: 5 },
  { name: "Microsoft", cat: 0 },
  { name: "Google", cat: 1 },
  { name: "Amazon", cat: 2 },
  { name: "Deloitte", cat: 3 },
  { name: "KPMG", cat: 4 },
  { name: "EY", cat: 5 },
  { name: "PwC", cat: 0 },
  { name: "Capgemini", cat: 1 },
  { name: "Tech Mahindra", cat: 2 },
  { name: "Samsung", cat: 3 },
  { name: "Bosch", cat: 4 },
  { name: "L&T", cat: 5 },
  { name: "Tata Motors", cat: 0 },
  { name: "HDFC Bank", cat: 1 },
  { name: "ICICI Bank", cat: 2 },
  { name: "Axis Bank", cat: 3 },
  { name: "Toyota", cat: 4 },
  { name: "Ford", cat: 5 },
  { name: "Intel", cat: 0 },
  { name: "Qualcomm", cat: 1 },
  { name: "Oracle", cat: 2 },
  { name: "Cisco", cat: 3 },
  { name: "Adobe", cat: 4 }
];
const CAT_COLORS = [
  "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100",
  "bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100",
  "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100",
  "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100",
  "bg-rose-50 border-rose-200 text-rose-800 hover:bg-rose-100",
  "bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100"
];
const ALUMNI = [
  {
    id: 1,
    name: "Priya Suresh",
    year: "2022",
    company: "Microsoft India",
    role: "Software Engineer II",
    salary: "28–32 LPA",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "Rathinam's placement cell coached me for every interview round. Landing at Microsoft straight out of campus was a dream I hadn't dared to dream till senior year.",
    dept: "CSE",
    deptColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Arjun Krishnamurthy",
    year: "2023",
    company: "Deloitte USI",
    role: "Business Analyst",
    salary: "14–18 LPA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "The MBA programme gave me real consulting frameworks. Within six months at Deloitte I was leading client workshops — confidence that came from Rathinam's business simulations.",
    dept: "MBA",
    deptColor: "bg-amber-500"
  },
  {
    id: 3,
    name: "Kavya Ramachandran",
    year: "2023",
    company: "Google",
    role: "Data Analyst",
    salary: "38–42 LPA",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "The mock interviews here are tougher than the real ones. After that preparation, cracking Google's data analytics role felt natural — it was just another practice round.",
    dept: "MCA",
    deptColor: "bg-violet-500"
  },
  {
    id: 4,
    name: "Vikram Selvaraj",
    year: "2021",
    company: "Bosch India",
    role: "Embedded Systems Engineer",
    salary: "10–14 LPA",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "The ECE labs have industry-grade equipment. When I joined Bosch I already knew their embedded toolchain — the learning curve was almost flat from day one.",
    dept: "ECE",
    deptColor: "bg-cyan-500"
  }
];
const BAR_GRADIENTS = [
  "from-blue-400 to-blue-600",
  "from-violet-400 to-violet-600",
  "from-emerald-400 to-emerald-600",
  "from-orange-400 to-orange-600",
  "from-rose-400 to-rose-600"
];
function HeroBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "placements.hero.section",
      className: "relative overflow-hidden",
      style: {
        background: "linear-gradient(135deg, oklch(0.22 0.18 250) 0%, oklch(0.28 0.16 240) 45%, oklch(0.38 0.14 30) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at 70% 50%, oklch(0.58 0.18 30 / 0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.52 0.16 120 / 0.15) 0%, transparent 50%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-sm font-semibold mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 14 }),
                  " Placement Season 2024–25 Open"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4", children: [
                  "Our ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Placements" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-lg", children: "Building careers since 1997. Rathinam students are hired by Fortune 500 companies across India and the globe — packages that set the benchmark for Tier-2 colleges nationwide." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/admissions",
                      "data-ocid": "placements.hero.apply_button",
                      className: "btn-secondary inline-flex items-center gap-2",
                      children: [
                        "Apply for 2025 ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 16 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#course-table",
                      "data-ocid": "placements.hero.explore_button",
                      className: "px-6 py-3 border-2 border-primary-foreground/40 text-primary-foreground rounded-lg transition-smooth hover:bg-primary-foreground/10 inline-flex items-center gap-2 font-semibold",
                      children: [
                        "View Course Stats ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16 })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.15 },
              className: "hidden lg:block relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&h=480&fit=crop&auto=format",
                    alt: "Rathinam placement ceremony",
                    className: "w-full rounded-2xl object-cover shadow-elevated",
                    style: { maxHeight: 380 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-5 -left-5 bg-card rounded-xl shadow-elevated px-5 py-3 flex items-center gap-3 border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18, className: "text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground leading-none", children: "42 LPA" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Highest Package 2024" })
                  ] })
                ] })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function OverallStats() {
  const { data: stats } = useOverallStats();
  const cards = [
    {
      label: "Placement Rate",
      value: `${(stats == null ? void 0 : stats.placementRate) ?? 98}%`,
      sub: "Batch of 2024",
      Icon: Users,
      gradient: "from-green-500 to-emerald-600",
      textColor: "text-emerald-600",
      bg: "bg-green-50 border-green-200",
      ocid: "placements.stats.placement_rate.card"
    },
    {
      label: "Average Package",
      value: `${(stats == null ? void 0 : stats.avgPackageLPA) ?? 8.5} LPA`,
      sub: "Across all departments",
      Icon: TrendingUp,
      gradient: "from-orange-500 to-amber-500",
      textColor: "text-orange-600",
      bg: "bg-orange-50 border-orange-200",
      ocid: "placements.stats.avg_package.card"
    },
    {
      label: "Highest Package",
      value: `${(stats == null ? void 0 : stats.highestPackageLPA) ?? 42} LPA`,
      sub: "Google — CSE 2024",
      Icon: Trophy,
      gradient: "from-violet-500 to-purple-600",
      textColor: "text-violet-600",
      bg: "bg-violet-50 border-violet-200",
      ocid: "placements.stats.highest_package.card"
    },
    {
      label: "Recruiting Companies",
      value: `${(stats == null ? void 0 : stats.partnerCompanies) ?? 350}+`,
      sub: "Campus + off-campus",
      Icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
      ocid: "placements.stats.companies.card"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.stats.section",
      className: "bg-background py-16 lg:py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "placement-badge mb-3 inline-flex", children: "2024 Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground", children: "Numbers That Speak" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-lg max-w-xl mx-auto", children: "Every figure verified from official annual placement records." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7", children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": c.ocid,
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 24 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: `rounded-2xl border p-6 lg:p-8 flex flex-col items-center text-center transition-smooth hover:shadow-elevated hover:-translate-y-1 ${c.bg}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 shadow-card`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { size: 24, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `font-display text-3xl lg:text-4xl font-bold ${c.textColor} leading-tight`,
                  children: c.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-foreground", children: c.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: c.sub })
            ]
          },
          c.label
        )) })
      ] })
    }
  );
}
function YearTrend() {
  const maxAvg = Math.max(...YEAR_TREND.map((y) => y.avg));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.trend.section",
      className: "section-alt py-16 lg:py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "green-badge mb-3 inline-flex", children: "Year-on-Year Growth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground", children: "Average Package Trend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Consistent upward trajectory — our students keep raising the bar every year." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-end justify-around gap-3",
              style: { height: 240 },
              role: "img",
              "aria-label": "Year-on-year average package bar chart",
              children: YEAR_TREND.map((item, i) => {
                const barH = Math.round(item.avg / maxAvg * 190);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": `placements.trend.bar.${i + 1}`,
                    className: "flex flex-col items-center gap-2 flex-1",
                    whileInView: { opacity: 1 },
                    initial: { opacity: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.12 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground tabular-nums", children: [
                        item.avg,
                        " LPA"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: `w-full max-w-[72px] rounded-t-xl bg-gradient-to-t ${BAR_GRADIENTS[i]} transition-smooth hover:opacity-90 shadow-card`,
                          initial: { height: 0 },
                          whileInView: { height: barH },
                          viewport: { once: true },
                          transition: {
                            duration: 0.8,
                            delay: i * 0.12,
                            ease: "easeOut"
                          },
                          style: { minHeight: 4 },
                          title: `${item.year}: ${item.avg} LPA average`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: item.year })
                    ]
                  },
                  item.year
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-5 border-t border-border flex flex-wrap gap-5 justify-center", children: YEAR_TREND.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-muted-foreground", children: [
              item.year,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-secondary", children: [
              item.avg,
              " LPA"
            ] })
          ] }, item.year)) })
        ] })
      ] })
    }
  );
}
function CourseTable() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "course-table",
      "data-ocid": "placements.course_table.section",
      className: "bg-background py-16 lg:py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "placement-badge mb-3 inline-flex", children: "Department Breakdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground", children: "Course-wise Placement Statistics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Every department. Every number. Transparent and verified for 2024." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden space-y-4", children: COURSE_PLACEMENTS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": `placements.course_table.item.${i + 1}`,
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 16 },
            viewport: { once: true },
            transition: { delay: i * 0.07 },
            className: "bg-card border border-border rounded-xl p-5 shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `w-2.5 h-9 rounded-full ${c.barColor} shrink-0`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-base", children: c.dept }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: c.fullName })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0 ${c.badge}`,
                    children: [
                      c.pct,
                      "%"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avg Package" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-orange-600", children: [
                    c.avg,
                    " LPA"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Highest Package" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-violet-600", children: [
                    c.highest,
                    " LPA"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: c.recruiters.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border",
                  children: r
                },
                r
              )) })
            ]
          },
          c.dept
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block overflow-hidden rounded-2xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-primary text-primary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-left font-semibold", children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-center font-semibold", children: "Placement %" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-right font-semibold", children: "Avg Package" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-right font-semibold", children: "Highest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-left font-semibold", children: "Top Recruiters" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COURSE_PLACEMENTS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.tr,
            {
              "data-ocid": `placements.course_table.row.${i + 1}`,
              whileInView: { opacity: 1 },
              initial: { opacity: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.06 },
              className: `border-t border-border transition-smooth ${i % 2 === 0 ? "bg-card" : "bg-muted/10"} ${c.rowBg}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `w-2 h-8 rounded-full ${c.barColor} shrink-0`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: c.dept }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.fullName })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `inline-block text-xs font-bold px-3 py-1 rounded-full ${c.badge}`,
                    children: [
                      c.pct,
                      "%"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 text-right font-bold text-orange-600 tabular-nums", children: [
                  c.avg,
                  " LPA"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 text-right font-bold text-violet-600 tabular-nums", children: [
                  c.highest,
                  " LPA"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: c.recruiters.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs bg-muted text-muted-foreground px-2.5 py-0.5 rounded-full border border-border",
                    children: r
                  },
                  r
                )) }) })
              ]
            },
            c.dept
          )) })
        ] }) })
      ] })
    }
  );
}
function TopRecruiters() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.recruiters.section",
      className: "section-alt py-16 lg:py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "green-badge mb-3 inline-flex", children: "350+ Partners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground", children: "Our Top Recruiters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Industry titans — from tech giants to global consulting firms — return to Rathinam year after year." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: TOP_RECRUITERS.map((company, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "data-ocid": `placements.recruiters.item.${i + 1}`,
            whileInView: { opacity: 1, scale: 1 },
            initial: { opacity: 0, scale: 0.9 },
            viewport: { once: true },
            transition: { delay: Math.floor(i / 5) * 0.08 },
            className: `px-5 py-2.5 rounded-xl border text-sm font-bold transition-smooth cursor-default ${CAT_COLORS[company.cat]}`,
            children: company.name
          },
          company.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mt-8", children: "…and 320+ more companies visit campus every recruitment season." })
      ] })
    }
  );
}
function AlumniStories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.alumni.section",
      className: "bg-background py-16 lg:py-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "placement-badge mb-3 inline-flex", children: "Alumni Voices" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground", children: "Success Stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Real students. Real packages. Real inspiration." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: ALUMNI.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": `placements.alumni.item.${i + 1}`,
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 28 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: a.photo,
                    alt: a.name,
                    className: "w-full h-52 object-cover object-top"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-0.5 rounded-full shadow-card ${a.deptColor}`,
                    children: [
                      a.dept,
                      " · ",
                      a.year
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base leading-tight", children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-semibold mt-0.5", children: a.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: a.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full w-fit mb-4", children: a.salary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-auto text-xs text-muted-foreground leading-relaxed italic border-l-2 border-secondary pl-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 10, className: "text-secondary inline mr-1" }),
                  a.quote
                ] })
              ] })
            ]
          },
          a.id
        )) })
      ] })
    }
  );
}
function PlacementCTA() {
  const { data: records } = usePlacementStats();
  const topLPA = records ? Math.max(...records.map((r) => r.packageLPA)) : 42;
  const topRecord = records == null ? void 0 : records.find((r) => r.packageLPA === topLPA);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.cta.section",
      className: "py-16 lg:py-20",
      style: {
        background: "linear-gradient(135deg, oklch(0.22 0.18 250) 0%, oklch(0.3 0.14 240) 60%, oklch(0.36 0.12 230) 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4", children: [
            "Your Dream Company is",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "One Step Away" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-foreground/80 text-lg mb-6", children: [
            "Join a college where",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-secondary", children: "98%" }),
            " of students get placed in their preferred domain. Our dedicated placement cell works year-round, not just during season."
          ] }),
          topRecord && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 bg-secondary/20 border border-secondary/40 rounded-xl px-5 py-3 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 20, className: "text-secondary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/70", children: "Highest Package 2024" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-secondary text-base", children: [
                topRecord.package,
                " · ",
                topRecord.company,
                " · ",
                topRecord.role
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/admissions",
                "data-ocid": "placements.cta.apply_button",
                className: "btn-secondary inline-flex items-center gap-2",
                children: "Apply Now — Free"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": "placements.cta.contact_button",
                className: "px-6 py-3 border-2 border-primary-foreground/40 text-primary-foreground rounded-lg transition-smooth hover:bg-primary-foreground/10 font-semibold",
                children: "Talk to Placement Cell"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "placements.contact.card",
            className: "bg-card rounded-2xl shadow-elevated p-8 border border-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Placement Cell — Direct Contact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "For companies wishing to participate in campus recruitment, or students seeking placement guidance — reach us directly." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "mailto:placementcell@rathinam.in",
                        "data-ocid": "placements.contact.email_link",
                        className: "font-semibold text-primary hover:underline text-sm",
                        children: "placementcell@rathinam.in"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, className: "text-secondary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Phone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "tel:+914221234567",
                        "data-ocid": "placements.contact.phone_link",
                        className: "font-semibold text-secondary hover:underline text-sm",
                        children: "+91-422-123-4567"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Placement season runs November–April. Pre-placement talks begin in September." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    "data-ocid": "placements.contact.inquiry_button",
                    className: "w-full text-center btn-primary block text-sm",
                    children: "Send an Inquiry"
                  }
                )
              ] })
            ]
          }
        )
      ] }) })
    }
  );
}
function PlacementsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "placements.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OverallStats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(YearTrend, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CourseTable, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopRecruiters, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlumniStories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlacementCTA, {})
  ] });
}
export {
  PlacementsPage as default
};
