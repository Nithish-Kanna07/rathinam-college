import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, G as GraduationCap } from "./index-zlr7lLpe.js";
import { S as Section, B as Badge } from "./Section--4kNx3lt.js";
import { u as useOverallStats, a as usePlacementStats } from "./useBackend-C_lmyPCj.js";
import { A as AnimatePresence } from "./index-DUaRmuQU.js";
import { m as motion } from "./proxy-91zh4HLU.js";
import { B as BookOpen } from "./book-open-D6AoIqdF.js";
import { A as ArrowRight } from "./arrow-right-Ci_qWX7X.js";
import { D as Download } from "./download-C_CixVyj.js";
import { A as Award } from "./award-16gjXTk0.js";
import { T as TrendingUp } from "./trending-up-CgvZrXJv.js";
import { U as Users } from "./users-D5L5l4N9.js";
import { G as Globe } from "./globe-ClsGSxOh.js";
import { T as Trophy } from "./trophy-BMca1iXo.js";
import { L as Lightbulb } from "./lightbulb-CVpt41Dh.js";
import { S as Star } from "./star-Cg6E-iwd.js";
import { C as CircleCheckBig } from "./circle-check-big-DWdWStPh.js";
import { C as Calendar } from "./calendar-D0piGZoC.js";
import { B as Building2 } from "./building-2-C6eJNm70.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const HERO_SLIDES = [
  {
    id: 1,
    image: "/assets/generated/rathinam-campus-hero.dim_1400x600.jpg",
    badge: "🏆 Ranked #1 in Tamil Nadu for Placements 2024",
    title: "Rathinam College",
    subtitle: "of Arts & Science",
    tagline: "Excellence in Education | Innovation | Industry Partnerships",
    desc: "Igniting Careers. Shaping Leaders. Since 1994.\nApproved by AICTE · Affiliated to Anna University"
  },
  {
    id: 2,
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    badge: "🔬 State-of-the-Art Research Labs",
    title: "Learn by Doing",
    subtitle: "Industry-Ready Education",
    tagline: "50+ Advanced Labs | AI & Robotics | Live Industry Projects",
    desc: "Real equipment, real projects, real mentors.\nStep into your future career from day one."
  },
  {
    id: 3,
    image: "/assets/generated/international-collaboration-event.dim_1400x600.jpg",
    badge: "🌍 50+ International University Partners",
    title: "Global Exposure",
    subtitle: "International Collaborations",
    tagline: "UK · Singapore · Australia · Germany | Exchange Programs",
    desc: "Study, research, and intern at partner universities worldwide.\nBuild a global network that opens doors everywhere."
  }
];
const COURSES = [
  {
    id: "engineering",
    title: "Engineering & Tech",
    desc: "B.E./B.Tech in CSE, ECE, Mechanical, Civil with cutting-edge labs.",
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    badge: "Most Popular",
    badgeVariant: "secondary",
    seats: "240 seats"
  },
  {
    id: "management",
    title: "Management & Commerce",
    desc: "MBA, BBA, B.Com with live industry interactions and mentorship.",
    image: "/assets/generated/students-management.dim_800x500.jpg",
    badge: "High ROI",
    badgeVariant: "green",
    seats: "180 seats"
  },
  {
    id: "arts-science",
    title: "Arts & Science",
    desc: "BCA, BSc, BA in data science, liberal arts, and modern sciences.",
    image: "/assets/generated/students-library.dim_800x500.jpg",
    badge: "Creative",
    badgeVariant: "primary",
    seats: "120 seats"
  },
  {
    id: "health-sciences",
    title: "Health Sciences",
    desc: "Pharmacy and allied health programs for healthcare careers.",
    image: "/assets/generated/students-science-lab.dim_800x500.jpg",
    badge: "Growing Field",
    badgeVariant: "accent",
    seats: "60 seats"
  },
  {
    id: "research",
    title: "Research & PhD",
    desc: "Doctoral programs in engineering, management, and sciences.",
    image: "/assets/generated/students-science-lab.dim_800x500.jpg",
    badge: "Advanced",
    badgeVariant: "primary",
    seats: "30 seats"
  },
  {
    id: "diploma",
    title: "Diploma Programs",
    desc: "Skill-focused 3-year diploma courses with 100% job assistance.",
    image: "/assets/generated/students-classroom.dim_800x500.jpg",
    badge: "Job Ready",
    badgeVariant: "green",
    seats: "90 seats"
  }
];
const TOP_COMPANIES = [
  { name: "Google", package: "42 LPA", color: "text-secondary" },
  { name: "Amazon", package: "38 LPA", color: "text-secondary" },
  { name: "Microsoft", package: "34 LPA", color: "text-primary" },
  { name: "Infosys", package: "8 LPA", color: "text-accent" },
  { name: "TCS", package: "7 LPA", color: "text-accent" },
  { name: "Wipro", package: "7.5 LPA", color: "text-accent" },
  { name: "Zoho", package: "15 LPA", color: "text-primary" },
  { name: "Deloitte", package: "12 LPA", color: "text-primary" }
];
const INT_PARTNERS = [
  { name: "UWE Bristol", country: "🇬🇧 United Kingdom" },
  { name: "NTU Singapore", country: "🇸🇬 Singapore" },
  { name: "Curtin University", country: "🇦🇺 Australia" },
  { name: "IU Germany", country: "🇩🇪 Germany" }
];
const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "World-Class Faculty",
    desc: "500+ experienced professors, IIT/IIM alumni, and industry practitioners guiding every student.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Trophy,
    title: "100% Industry Placement",
    desc: "Dedicated placement cell with 350+ company tie-ups and mock interview programs year-round.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    icon: Globe,
    title: "Global Collaborations",
    desc: "Student exchange, dual-degree, and research programs with 50+ universities across 20 countries.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Lightbulb,
    title: "Smart Classrooms",
    desc: "IoT-enabled classrooms, AI labs, maker spaces, and a central innovation & incubation centre.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  }
];
const TESTIMONIALS = [
  {
    name: "Priya Krishnamurthy",
    role: "SDE at Amazon",
    company: "Amazon",
    package: "18 LPA",
    batch: "B.Tech CSE, 2023",
    quote: "Rathinam's placement cell guided me through every step. The mock interviews and industry sessions made all the difference in cracking Amazon.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Arjun Selvam",
    role: "Analyst at Deloitte",
    company: "Deloitte",
    package: "12 LPA",
    batch: "MBA, 2023",
    quote: "The international exposure through UWE Bristol was a game-changer. The faculty here genuinely care about your success beyond graduation.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Meera Sundaram",
    role: "Product Manager at Zoho",
    company: "Zoho",
    package: "15 LPA",
    batch: "B.Tech IT, 2022",
    quote: "From day one, the faculty pushed us to think beyond textbooks. Real projects, real learning, real results. I owe my career to Rathinam.",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&h=80&fit=crop&crop=face"
  }
];
const NEWS = [
  {
    date: "Apr 15, 2025",
    category: "Placements",
    title: "Record 42 LPA Placement: Rathinam Student Lands Google Offer",
    excerpt: "Kavin Kumar from B.Tech CSE batch 2025 receives the highest-ever offer of ₹42 LPA from Google Bangalore, setting a new college record.",
    image: "/assets/generated/placement-ceremony.dim_800x500.jpg",
    catColor: "text-secondary",
    catBg: "bg-secondary/15"
  },
  {
    date: "Mar 28, 2025",
    category: "International",
    title: "MoU Signed with NTU Singapore for Student Exchange 2025-26",
    excerpt: "Rathinam College expands its global footprint with a new academic partnership enabling 50 students to study at NTU Singapore annually.",
    image: "/assets/generated/international-collaboration-event.dim_1400x600.jpg",
    catColor: "text-accent",
    catBg: "bg-accent/15"
  },
  {
    date: "Mar 10, 2025",
    category: "Academics",
    title: "New AI & Data Science Lab Inaugurated — ₹2 Crore Investment",
    excerpt: "State-of-the-art AI lab with NVIDIA GPU clusters, IoT integration, and dedicated industry mentors from top tech companies opens for students.",
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    catColor: "text-primary",
    catBg: "bg-primary/15"
  }
];
const STAT_STRIP = [
  { value: "Est. 1994", label: "Founded" },
  { value: "15,000+", label: "Students" },
  { value: "500+", label: "Faculty" },
  { value: "98%", label: "Placements" },
  { value: "50+", label: "Intl. Partners" }
];
function HomePage() {
  var _a;
  const { data: stats } = useOverallStats();
  const { data: placements } = usePlacementStats();
  const topPlaced = (placements == null ? void 0 : placements.slice(0, 4)) ?? [];
  const [slide, setSlide] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const timerRef = reactExports.useRef(null);
  const goToSlide = reactExports.useCallback((next, direction) => {
    setDir(direction);
    setSlide((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);
  const nextSlide = reactExports.useCallback(
    () => goToSlide(slide + 1, 1),
    [slide, goToSlide]
  );
  const prevSlide = reactExports.useCallback(
    () => goToSlide(slide - 1, -1),
    [slide, goToSlide]
  );
  reactExports.useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
      setDir(1);
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const current = HERO_SLIDES[slide];
  const variants = {
    enter: (_d) => ({ opacity: 0 }),
    center: { opacity: 1, x: 0 },
    exit: (_d2) => ({ opacity: 0 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex flex-col overflow-hidden",
        "data-ocid": "home.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, custom: dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              custom: dir,
              variants: {
                enter: () => ({ opacity: 0 }),
                center: { opacity: 1 },
                exit: () => ({ opacity: 0 })
              },
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: { duration: 0.7 },
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: { backgroundImage: `url('${current.image}')` }
            },
            current.id
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero-full opacity-88" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: dir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              custom: dir,
              variants,
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: { duration: 0.55, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-primary-foreground text-sm font-semibold mb-5 backdrop-blur-sm", children: current.badge }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-1", children: current.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold text-secondary mb-4 tracking-wide", children: current.subtitle }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-base md:text-lg font-medium mb-3 tracking-wide", children: current.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm md:text-base mb-8 whitespace-pre-line", children: current.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/courses",
                      "data-ocid": "home.hero.explore_programs.secondary_button",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/15 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth text-sm backdrop-blur-sm",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16 }),
                        " Explore Programs"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/admissions",
                      "data-ocid": "home.hero.apply_now.primary_button",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-sm",
                      children: [
                        "Apply Now 2025-26 ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/assets/brochure.pdf",
                      download: true,
                      "data-ocid": "home.hero.download_brochure.button",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-sm",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                        " Download Brochure"
                      ]
                    }
                  )
                ] })
              ]
            },
            `slide-${current.id}`
          ) }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: prevSlide,
                "data-ocid": "home.hero.prev.button",
                "aria-label": "Previous slide",
                className: "pointer-events-auto w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth backdrop-blur-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: nextSlide,
                "data-ocid": "home.hero.next.button",
                "aria-label": "Next slide",
                className: "pointer-events-auto w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth backdrop-blur-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2", children: HERO_SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => goToSlide(i, i > slide ? 1 : -1),
              "data-ocid": `home.hero.dot.${i + 1}`,
              "aria-label": `Go to slide ${i + 1}`,
              className: `transition-smooth rounded-full ${i === slide ? "w-8 h-2 bg-secondary" : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"}`
            },
            s.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bottom-0 pb-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-0",
              children: [
                {
                  icon: Award,
                  value: `${(stats == null ? void 0 : stats.placementRate) ?? 98}%`,
                  label: "Placements",
                  color: "text-secondary"
                },
                {
                  icon: TrendingUp,
                  value: `${(stats == null ? void 0 : stats.avgPackageLPA) ?? 8.5} LPA`,
                  label: "Avg Package",
                  color: "text-secondary"
                },
                {
                  icon: Users,
                  value: `${(stats == null ? void 0 : stats.partnerCompanies) ?? 350}+`,
                  label: "Partner Companies",
                  color: "text-accent"
                },
                {
                  icon: Globe,
                  value: `${(stats == null ? void 0 : stats.internationalCollabs) ?? 50}+`,
                  label: "Global Partners",
                  color: "text-accent"
                }
              ].map(({ icon: Icon, value, label, color }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 + i * 0.1 },
                  "data-ocid": `home.stat.item.${i + 1}`,
                  className: "hero-card rounded-none first:rounded-tl-xl last:rounded-tr-xl text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: `${color} mx-auto mb-2` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-3xl font-bold ${color}`, children: value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/70 text-xs mt-1 uppercase tracking-wide", children: label })
                  ]
                },
                label
              ))
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-secondary text-secondary-foreground py-3",
        "data-ocid": "home.stat_strip.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-0 divide-x divide-secondary-foreground/25", children: STAT_STRIP.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 px-5 py-0.5",
            "data-ocid": `home.stat_strip.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary-foreground/75 text-xs font-medium", children: s.label })
            ]
          },
          s.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-semibold", children: [
      "🎓 Admissions Open for 2025-26 Academic Year  |  Apply before May 30, 2025  ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/admissions",
          "data-ocid": "home.admission_banner.apply.link",
          className: "underline ml-2 hover:no-underline text-secondary",
          children: "Apply Now →"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Why Choose Rathinam?",
        subtitle: "Four pillars that set us apart from every other college in Tamil Nadu",
        className: "section-alt",
        centered: true,
        "data-ocid": "home.highlights.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 30 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            "data-ocid": `home.highlight.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-14 h-14 ${h.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(h.icon, { size: 28, className: h.color })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display font-bold text-lg mb-2 ${h.color}`, children: h.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: h.desc })
            ]
          },
          h.title
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "Academic Programs",
        subtitle: "Industry-aligned programs designed to launch high-impact careers",
        "data-ocid": "home.courses.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide",
              "data-ocid": "home.courses.list",
              style: { scrollbarWidth: "none" },
              children: COURSES.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileInView: { opacity: 1, scale: 1 },
                  initial: { opacity: 0, scale: 0.95 },
                  viewport: { once: true },
                  transition: { delay: i * 0.08 },
                  "data-ocid": `home.courses.item.${i + 1}`,
                  className: "snap-start flex-shrink-0 w-60 sm:w-72",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/courses/$courseId",
                      params: { courseId: course.id },
                      className: "group block",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "course-card h-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: course.image,
                            alt: course.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                            loading: "lazy"
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: course.badgeVariant, children: course.badge }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: course.seats })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-1 group-hover:text-primary transition-smooth", children: course.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3", children: course.desc }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
                            "Learn More ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                          ] })
                        ] })
                      ] })
                    }
                  )
                },
                course.id
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/courses",
              "data-ocid": "home.courses.view_all.link",
              className: "btn-outline inline-flex items-center gap-2",
              children: [
                "View All Programs ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "section-alt py-20",
        "data-ocid": "home.placements.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: "🚀 Outstanding Placement Record" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-3", children: "Our Students Get Hired by the Best" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: [
              "Consistent placements at India's top companies and global brands. Average salary",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold", children: "8.5 LPA" }),
              ", highest",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold", children: "42 LPA" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: [
            {
              label: "Highest Package",
              value: `${(stats == null ? void 0 : stats.highestPackageLPA) ?? 42} LPA`,
              icon: "🚀",
              sub: "Google, 2024",
              color: "text-secondary",
              border: "border-secondary/30 bg-secondary/5"
            },
            {
              label: "Average Package",
              value: `${(stats == null ? void 0 : stats.avgPackageLPA) ?? 8.5} LPA`,
              icon: "📈",
              sub: "Across all batches",
              color: "text-primary",
              border: "border-primary/30 bg-primary/5"
            },
            {
              label: "Students Placed",
              value: `${((_a = stats == null ? void 0 : stats.totalStudentsPlaced) == null ? void 0 : _a.toLocaleString()) ?? "2,840"}+`,
              icon: "🎓",
              sub: "Class of 2024",
              color: "text-accent",
              border: "border-accent/30 bg-accent/5"
            },
            {
              label: "Partner Companies",
              value: `${(stats == null ? void 0 : stats.partnerCompanies) ?? 350}+`,
              icon: "🏢",
              sub: "Fortune 500 & startups",
              color: "text-secondary",
              border: "border-secondary/30 bg-secondary/5"
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileInView: { opacity: 1, scale: 1 },
              initial: { opacity: 0, scale: 0.9 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `home.placement_stat.item.${i + 1}`,
              className: `stat-card border ${item.border}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `font-display text-3xl font-bold ${item.color}`,
                    children: item.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground mt-1", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: item.sub })
              ]
            },
            item.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm font-semibold mb-5 uppercase tracking-wider", children: "Our Students Work At" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
              TOP_COMPANIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  whileInView: { opacity: 1, y: 0 },
                  initial: { opacity: 0, y: 10 },
                  viewport: { once: true },
                  transition: { delay: i * 0.06 },
                  "data-ocid": `home.company.item.${i + 1}`,
                  className: "flex items-center gap-2 px-4 py-2 bg-muted/60 rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-smooth cursor-default",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: c.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-xs ${c.color}`, children: c.package })
                  ]
                },
                c.name
              )),
              topPlaced.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  whileInView: { opacity: 1, y: 0 },
                  initial: { opacity: 0, y: 10 },
                  viewport: { once: true },
                  transition: { delay: (i + TOP_COMPANIES.length) * 0.06 },
                  className: "flex items-center gap-2 px-4 py-2 bg-muted/60 rounded-full border border-border hover:border-secondary/30 hover:bg-secondary/5 transition-smooth cursor-default",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: c.company }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold text-xs", children: c.package })
                  ]
                },
                `backend-${c.company}`
              ))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/placements",
              "data-ocid": "home.view_placements.primary_button",
              className: "btn-secondary inline-flex items-center gap-2",
              children: [
                "View Full Placement Record ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "What Our Students Say",
        subtitle: "Success stories from Rathinam alumni placed across India and the globe",
        "data-ocid": "home.testimonials.section",
        centered: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileInView: { opacity: 1, x: 0 },
            initial: { opacity: 0, x: -20 },
            viewport: { once: true },
            transition: { delay: i * 0.15 },
            "data-ocid": `home.testimonial.item.${i + 1}`,
            className: "bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth relative flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl text-secondary/20 font-display absolute top-3 right-5 select-none", children: '"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  size: 12,
                  className: "fill-secondary text-secondary"
                },
                s
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed mb-5 italic flex-1", children: [
                '"',
                t.quote,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: t.avatar,
                    alt: t.name,
                    className: "w-12 h-12 rounded-full object-cover border-2 border-secondary/30",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm truncate", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-secondary font-medium truncate", children: [
                    t.role,
                    " · ",
                    t.company
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.batch })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "placement-badge", children: t.package }) })
              ] })
            ]
          },
          t.name
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "Global Collaborations",
        subtitle: "Study, research, and intern at our international partner universities",
        className: "section-alt",
        centered: true,
        "data-ocid": "home.international.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: INT_PARTNERS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 20 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `home.international.item.${i + 1}`,
              className: "bg-card border border-border rounded-xl p-5 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: p.country.split(" ")[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-1", children: p.country.split(" ").slice(1).join(" ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "green", className: "mt-2", children: "Partner University" })
              ]
            },
            p.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/international",
              "data-ocid": "home.international.primary_button",
              className: "btn-primary inline-flex items-center gap-2",
              children: [
                "Explore Global Programs ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16 })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-ocid": "home.facilities.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "primary", className: "mb-4", children: "🏛️ World-Class Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Facilities That Inspire Excellence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-6 leading-relaxed", children: "Over 100 acres of lush campus with state-of-the-art labs, smart classrooms, innovation hubs, sports facilities, and modern hostels for a complete campus experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: [
          "10+ Advanced Engineering & Research Labs",
          "Smart Classrooms with IoT & AR Integration",
          "Central Library with 50,000+ Volumes",
          "Innovation & Incubation Centre (IIIC)",
          "Sports Complex, Swimming Pool & Gymnasium"
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-3 text-sm text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "text-accent shrink-0" }),
              f
            ]
          },
          f
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/facilities",
            "data-ocid": "home.facilities.primary_button",
            className: "btn-primary inline-flex items-center gap-2",
            children: [
              "Explore Campus ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-computer-lab.dim_800x500.jpg",
            alt: "Computer Lab",
            className: "rounded-xl shadow-card w-full aspect-video object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-classroom.dim_800x500.jpg",
            alt: "Smart Classroom",
            className: "rounded-xl shadow-card w-full aspect-video object-cover mt-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-library.dim_800x500.jpg",
            alt: "Library",
            className: "rounded-xl shadow-card w-full aspect-video object-cover -mt-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/students-science-lab.dim_800x500.jpg",
            alt: "Science Lab",
            className: "rounded-xl shadow-card w-full aspect-video object-cover"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "News & Events",
        subtitle: "Stay updated with the latest happenings at Rathinam College",
        className: "section-alt",
        "data-ocid": "home.news.section",
        centered: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: NEWS.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.article,
            {
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 20 },
              viewport: { once: true },
              transition: { delay: i * 0.12 },
              "data-ocid": `home.news.item.${i + 1}`,
              className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-pointer group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: n.image,
                    alt: n.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `px-2.5 py-0.5 rounded-full text-xs font-bold ${n.catBg} ${n.catColor} border border-current/20`,
                        children: n.category
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
                      " ",
                      n.date
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-2 group-hover:text-primary transition-smooth line-clamp-2", children: n.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed line-clamp-3", children: n.excerpt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-smooth", children: [
                    "Read More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ] })
                ] })
              ]
            },
            n.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/about",
              "data-ocid": "home.news.view_all.link",
              className: "btn-outline inline-flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
                " View All News & Events"
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-gradient-primary py-16",
        "data-ocid": "home.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 20 },
              viewport: { once: true },
              className: "font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4",
              children: "Your Dream Career Starts Here"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-foreground/80 text-lg mb-8", children: [
            "Join 2,800+ students who landed placements at top companies with packages up to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary font-bold", children: "42 LPA" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/admissions",
                "data-ocid": "home.cta.apply_now.primary_button",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth",
                children: [
                  "Apply Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/assets/brochure.pdf",
                download: true,
                "data-ocid": "home.cta.download_brochure.button",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18 }),
                  " Download Brochure"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": "home.cta.contact.secondary_button",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth",
                children: "Talk to Counsellor"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  HomePage as default
};
