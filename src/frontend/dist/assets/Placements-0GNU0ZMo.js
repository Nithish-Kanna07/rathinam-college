import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, M as Mail, P as Phone } from "./index-DOfvp4Z2.js";
import { f as Canvas, d as useFrame } from "./react-three-fiber.esm-m-0ZPZ_o.js";
import { u as useOverallStats, a as usePlacementStats } from "./useBackend-5YnAgzFD.js";
import { r as resolveElements, m as motion } from "./proxy-MM0XfJfO.js";
import { T as Trophy } from "./trophy-D2Us8zw-.js";
import { A as Award } from "./award-BNk4Apbz.js";
import { B as BookOpen } from "./book-open-CcbPGPb2.js";
import { T as TrendingUp } from "./trending-up-D_jXFHaU.js";
import { B as Building2 } from "./building-2-Cs1kuwC4.js";
import { U as Users } from "./users-Dgt8fP5D.js";
import { S as Star } from "./star-S4XidvQT.js";
import { T as Text } from "./Text-DnTmfKz8.js";
import "./extends-BwmuZ0dU.js";
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
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const YEAR_TREND = [
  { year: 2020, avg: 2.1, pct: 72 },
  { year: 2021, avg: 2.4, pct: 78 },
  { year: 2022, avg: 2.8, pct: 84 },
  { year: 2023, avg: 3.1, pct: 90 },
  { year: 2024, avg: 3.25, pct: 93.12 }
];
const COURSE_PLACEMENTS = [
  {
    dept: "CSE",
    fullName: "Computer Science & Engg.",
    pct: 98,
    avg: 4.8,
    highest: 58,
    recruiters: ["TCS", "Wipro", "Google"],
    barColor: "bg-blue-500",
    badge: "bg-blue-100 text-blue-800",
    rowBg: "hover:bg-blue-50/50",
    barGrad: "from-blue-400 to-blue-600"
  },
  {
    dept: "MCA",
    fullName: "Master of Computer Applications",
    pct: 97,
    avg: 4.2,
    highest: 42,
    recruiters: ["IBM", "Microsoft", "Airtel"],
    barColor: "bg-violet-500",
    badge: "bg-violet-100 text-violet-800",
    rowBg: "hover:bg-violet-50/50",
    barGrad: "from-violet-400 to-violet-600"
  },
  {
    dept: "ECE",
    fullName: "Electronics & Communication",
    pct: 95,
    avg: 3.6,
    highest: 28,
    recruiters: ["Samsung", "Vivo", "HP"],
    barColor: "bg-cyan-500",
    badge: "bg-cyan-100 text-cyan-800",
    rowBg: "hover:bg-cyan-50/50",
    barGrad: "from-cyan-400 to-cyan-600"
  },
  {
    dept: "MBA",
    fullName: "Master of Business Administration",
    pct: 93,
    avg: 3.8,
    highest: 24,
    recruiters: ["HDFC", "Citi Bank", "Reliance"],
    barColor: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800",
    rowBg: "hover:bg-amber-50/50",
    barGrad: "from-amber-400 to-amber-600"
  },
  {
    dept: "B.Com",
    fullName: "Bachelor of Commerce",
    pct: 90,
    avg: 3.2,
    highest: 18,
    recruiters: ["HDFC", "Citi Bank", "Reliance"],
    barColor: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-800",
    rowBg: "hover:bg-emerald-50/50",
    barGrad: "from-emerald-400 to-emerald-600"
  },
  {
    dept: "Mechanical",
    fullName: "Mechanical Engineering",
    pct: 88,
    avg: 3,
    highest: 16,
    recruiters: ["Tech Mahindra", "HP", "Reliance"],
    barColor: "bg-orange-500",
    badge: "bg-orange-100 text-orange-800",
    rowBg: "hover:bg-orange-50/50",
    barGrad: "from-orange-400 to-orange-600"
  }
];
const CAROUSEL_COMPANIES = [
  "TCS",
  "Wipro",
  "IBM",
  "Citi Bank",
  "HDFC",
  "Samsung",
  "Google",
  "Tech Mahindra",
  "Airtel",
  "Reliance",
  "Vivo",
  "HP"
];
const ALUMNI = [
  {
    id: 1,
    name: "Priya Suresh",
    year: "2024",
    company: "Google India",
    role: "Software Engineer",
    salary: "54–58 LPA",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "Rathinam Group's placement cell coached me through every round. The 3-month intensive training made Google feel like the next logical step.",
    dept: "CSE",
    deptColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Arjun Krishnamurthy",
    year: "2023",
    company: "Citi Bank",
    role: "Business Analyst",
    salary: "18–22 LPA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "The MBA curriculum at Rathinam is industry-aligned. Citi Bank noticed our practical exposure — I was client-ready from day one.",
    dept: "MBA",
    deptColor: "bg-amber-500"
  },
  {
    id: 3,
    name: "Kavya Ramachandran",
    year: "2024",
    company: "Tech Mahindra",
    role: "Data Analyst",
    salary: "12–16 LPA",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "The mock interviews at Rathinam Group are tougher than the real ones. That preparation gave me unshakeable confidence.",
    dept: "MCA",
    deptColor: "bg-violet-500"
  },
  {
    id: 4,
    name: "Vikram Selvaraj",
    year: "2022",
    company: "Samsung India",
    role: "Embedded Systems Engineer",
    salary: "10–14 LPA",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format",
    quote: "The ECE labs have industry-grade equipment — I already knew Samsung's toolchain on day one at work.",
    dept: "ECE",
    deptColor: "bg-cyan-500"
  }
];
function FloatingCoin({
  position,
  color,
  speed,
  delay
}) {
  const meshRef = reactExports.useRef(null);
  const t = reactExports.useRef(delay);
  useFrame((_, delta) => {
    t.current += delta * speed;
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t.current) * 0.4;
      meshRef.current.rotation.y += delta * 1.2;
      meshRef.current.rotation.z = Math.sin(t.current * 0.5) * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.35, 0.35, 0.08, 32] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 0.9,
        roughness: 0.1,
        emissive: color,
        emissiveIntensity: 0.15
      }
    )
  ] });
}
function FloatingSphere({
  position,
  color,
  speed,
  delay
}) {
  const meshRef = reactExports.useRef(null);
  const t = reactExports.useRef(delay);
  useFrame((_, delta) => {
    t.current += delta * speed;
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.cos(t.current) * 0.3;
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.22, 1] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color, wireframe: true, transparent: true, opacity: 0.6 })
  ] });
}
function SceneObjects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [10, 10, 10], intensity: 1.2, color: "#ffffff" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-10, -5, -5], intensity: 0.6, color: "#6366f1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, -8, 5], intensity: 0.4, color: "#f59e0b" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [-3.5, 1, -1],
        color: "#f59e0b",
        speed: 0.8,
        delay: 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [-1.5, -0.5, -0.5],
        color: "#fbbf24",
        speed: 0.6,
        delay: 1.2
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [1.2, 1.2, -1.5],
        color: "#d97706",
        speed: 1,
        delay: 0.5
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [3, -0.8, -1],
        color: "#f59e0b",
        speed: 0.7,
        delay: 2.1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [0, 1.8, -2],
        color: "#fbbf24",
        speed: 0.9,
        delay: 0.8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [-2.8, -1.2, -0.8],
        color: "#d97706",
        speed: 0.5,
        delay: 1.8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingCoin,
      {
        position: [2.5, 1.5, -0.5],
        color: "#f59e0b",
        speed: 1.1,
        delay: 3
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingSphere,
      {
        position: [-4, 0, -1.5],
        color: "#6366f1",
        speed: 0.5,
        delay: 0.3
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingSphere,
      {
        position: [4, 0.5, -1.5],
        color: "#22d3ee",
        speed: 0.7,
        delay: 1.5
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingSphere,
      {
        position: [-0.5, -1.5, -1],
        color: "#a855f7",
        speed: 0.6,
        delay: 0.9
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingSphere,
      {
        position: [1.8, -1.8, -1.2],
        color: "#10b981",
        speed: 0.8,
        delay: 2.4
      }
    )
  ] });
}
function CarouselText({
  company,
  index,
  total,
  rotationY
}) {
  const meshRef = reactExports.useRef(null);
  const angle = index / total * Math.PI * 2;
  const radius = 3.8;
  useFrame(() => {
    if (meshRef.current) {
      const currentAngle = angle + rotationY.current;
      meshRef.current.position.x = Math.sin(currentAngle) * radius;
      meshRef.current.position.z = Math.cos(currentAngle) * radius;
      meshRef.current.rotation.y = -currentAngle;
      const z = Math.cos(currentAngle);
      const scale = 0.7 + (z + 1) * 0.3;
      meshRef.current.scale.setScalar(scale);
    }
  });
  const colors = [
    "#60a5fa",
    "#a78bfa",
    "#34d399",
    "#fbbf24",
    "#f87171",
    "#22d3ee",
    "#818cf8",
    "#4ade80",
    "#fb923c",
    "#e879f9",
    "#38bdf8",
    "#facc15"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref: meshRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Text,
    {
      fontSize: 0.28,
      color: colors[index % colors.length],
      anchorX: "center",
      anchorY: "middle",
      font: void 0,
      children: company
    }
  ) });
}
function CarouselScene({ paused }) {
  const rotationY = reactExports.useRef(0);
  useFrame((_, delta) => {
    if (!paused) {
      rotationY.current += delta * 0.35;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 5, 5], intensity: 1, color: "#ffffff" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: CAROUSEL_COMPANIES.map((company, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CarouselText,
      {
        company,
        index: i,
        total: CAROUSEL_COMPANIES.length,
        rotationY
      },
      company
    )) })
  ] });
}
function StatCard3D({
  label,
  value,
  sub,
  Icon,
  frontGrad,
  backGrad,
  ocid,
  delay
}) {
  const [flipped, setFlipped] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "data-ocid": ocid,
      whileInView: { opacity: 1, y: 0 },
      initial: { opacity: 0, y: 28 },
      viewport: { once: true },
      transition: { delay },
      className: "h-44 cursor-pointer",
      style: { perspective: "800px" },
      onMouseEnter: () => setFlipped(true),
      onMouseLeave: () => setFlipped(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            width: "100%",
            height: "100%",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { backfaceVisibility: "hidden" },
                className: `absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${frontGrad} shadow-elevated border border-white/10`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: "text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold text-white leading-none", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm font-semibold mt-1", children: label })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                },
                className: `absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${backGrad} shadow-elevated border border-white/10`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-white mb-2", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm mb-1", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs", children: sub })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function AnimatedBar({
  pct,
  grad,
  delay
}) {
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: "relative h-3 bg-muted rounded-full overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: `absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${grad}`,
          initial: { width: 0 },
          animate: inView2 ? { width: `${pct}%` } : { width: 0 },
          transition: { duration: 1, delay, ease: "easeOut" }
        }
      )
    }
  );
}
function HeroBanner() {
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "placements.hero.section",
      className: "relative overflow-hidden",
      style: { minHeight: 480 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(135deg, oklch(0.18 0.22 250) 0%, oklch(0.24 0.20 240) 40%, oklch(0.32 0.16 30) 100%)"
            }
          }
        ),
        !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 6], fov: 60 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SceneObjects, {}) }) }),
        isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            "aria-hidden": true,
            style: {
              background: "radial-gradient(ellipse at 80% 20%, oklch(0.62 0.24 32 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.52 0.22 250 / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, oklch(0.54 0.20 125 / 0.2) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.65 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/25 border border-secondary/50 text-secondary text-sm font-bold mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 14 }),
                " Placement Season 2024–25 Open"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4", children: [
                "Placements at",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Rathinam Group" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-primary-foreground/80 leading-relaxed mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-secondary", children: "Rathinam Group of Institutions, Eachanari, Coimbatore" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-primary-foreground/70 leading-relaxed mb-8 max-w-lg", children: "Building careers since 1997. Our students are hired by Fortune 500 companies across India — with packages that set the benchmark for institutions in Tamil Nadu." }),
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
        ) }) })
      ]
    }
  );
}
function OverallStats() {
  const { data: stats } = useOverallStats();
  const cards = [
    {
      label: "Highest Package",
      value: `${(stats == null ? void 0 : stats.highestPackageLPA) ?? 58} LPA`,
      sub: "Google / Microsoft — CSE 2024",
      Icon: Trophy,
      frontGrad: "from-violet-500 to-purple-700",
      backGrad: "from-purple-600 to-indigo-700",
      ocid: "placements.stats.highest_package.card",
      delay: 0
    },
    {
      label: "Average Package",
      value: `${(stats == null ? void 0 : stats.avgPackageLPA) ?? 3.25} LPA`,
      sub: "Across all departments, batch 2024",
      Icon: TrendingUp,
      frontGrad: "from-orange-400 to-amber-600",
      backGrad: "from-amber-500 to-orange-700",
      ocid: "placements.stats.avg_package.card",
      delay: 0.1
    },
    {
      label: "Companies",
      value: "150+",
      sub: "Fortune 500 + Tier-1 MNCs on campus",
      Icon: Building2,
      frontGrad: "from-blue-500 to-cyan-600",
      backGrad: "from-cyan-500 to-blue-700",
      ocid: "placements.stats.companies.card",
      delay: 0.2
    },
    {
      label: "Students Placed",
      value: "1500+",
      sub: "Cumulative — all departments 2024",
      Icon: Users,
      frontGrad: "from-emerald-500 to-teal-600",
      backGrad: "from-teal-500 to-emerald-700",
      ocid: "placements.stats.students_placed.card",
      delay: 0.3
    },
    {
      label: "Placement Rate",
      value: "93.12%",
      sub: "Verified official record, batch 2024",
      Icon: Star,
      frontGrad: "from-rose-500 to-pink-600",
      backGrad: "from-pink-500 to-rose-700",
      ocid: "placements.stats.placement_rate.card",
      delay: 0.4
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-base max-w-xl mx-auto", children: "Hover each card to reveal the full detail. Every figure verified from official placement records." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard3D, { ...c }, c.label)) })
      ] })
    }
  );
}
function YearTrend() {
  const maxAvg = Math.max(...YEAR_TREND.map((y) => y.avg));
  const GRADS = [
    "from-blue-400 to-blue-600",
    "from-violet-400 to-violet-600",
    "from-emerald-400 to-emerald-600",
    "from-orange-400 to-orange-600",
    "from-rose-400 to-rose-600"
  ];
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
                          className: `w-full max-w-[72px] rounded-t-xl bg-gradient-to-t ${GRADS[i]} transition-smooth hover:opacity-90 shadow-card`,
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
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-accent", children: [
              item.pct,
              "%"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Every department, every number — transparent and verified for 2024." })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBar, { pct: c.pct, grad: c.barGrad, delay: i * 0.08 }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-center font-semibold w-56", children: "Bar" }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AnimatedBar,
                  {
                    pct: c.pct,
                    grad: c.barGrad,
                    delay: i * 0.08
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
function TopRecruiters3D() {
  const [paused, setPaused] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.recruiters.section",
      className: "section-alt py-16 lg:py-20 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "green-badge mb-3 inline-flex", children: "150+ Partners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-foreground", children: "Our Top Recruiters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Industry titans return to Rathinam Group of Institutions every year. Hover to pause the carousel." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": "placements.recruiters.carousel",
            whileInView: { opacity: 1 },
            initial: { opacity: 0 },
            viewport: { once: true },
            className: "relative rounded-2xl overflow-hidden border border-border shadow-elevated",
            style: {
              height: 220,
              background: "linear-gradient(135deg, oklch(0.18 0.20 250) 0%, oklch(0.22 0.18 240) 50%, oklch(0.28 0.14 260) 100%)"
            },
            onMouseEnter: () => setPaused(true),
            onMouseLeave: () => setPaused(false),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 7], fov: 55 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselScene, { paused }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-y-0 left-0 w-24 pointer-events-none",
                  style: {
                    background: "linear-gradient(to right, oklch(0.18 0.20 250 / 0.9) 0%, transparent 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-y-0 right-0 w-24 pointer-events-none",
                  style: {
                    background: "linear-gradient(to left, oklch(0.18 0.20 250 / 0.9) 0%, transparent 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 w-full text-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40 font-medium", children: paused ? "▐▐ Paused" : "↻ Rotating — hover to pause" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: CAROUSEL_COMPANIES.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "data-ocid": `placements.recruiters.item.${i + 1}`,
            whileInView: { opacity: 1, scale: 1 },
            initial: { opacity: 0, scale: 0.88 },
            viewport: { once: true },
            transition: { delay: Math.floor(i / 4) * 0.08 },
            className: "px-5 py-2.5 rounded-xl border border-border bg-card text-sm font-bold text-foreground transition-smooth hover:shadow-elevated hover:border-secondary/50 hover:text-secondary",
            children: name
          },
          name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mt-6", children: "…and 138+ more companies visit campus every recruitment season." })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-lg mx-auto", children: "Real students of Rathinam Group of Institutions. Real packages. Real inspiration." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: ALUMNI.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": `placements.alumni.item.${i + 1}`,
            whileInView: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 36 },
            viewport: { once: true },
            transition: {
              delay: i * 0.12,
              duration: 0.5,
              type: "spring",
              bounce: 0.2
            },
            className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-2 flex flex-col",
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
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" })
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
  const topLPA = records ? Math.max(...records.map((r) => r.packageLPA)) : 58;
  const topRecord = records == null ? void 0 : records.find((r) => r.packageLPA === topLPA);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "placements.cta.section",
      className: "py-16 lg:py-20",
      style: {
        background: "linear-gradient(135deg, oklch(0.18 0.22 250) 0%, oklch(0.26 0.18 240) 60%, oklch(0.32 0.14 230) 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4", children: [
            "Your Dream Company is",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "One Step Away" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-foreground/80 text-lg mb-6", children: [
            "Join",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-secondary", children: "Rathinam Group of Institutions, Eachanari, Coimbatore" }),
            " ",
            "— where ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-secondary", children: "93.12%" }),
            " of students get placed in their preferred domain."
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "For companies wishing to participate in campus recruitment or students seeking placement guidance — reach us directly." }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopRecruiters3D, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlumniStories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlacementCTA, {})
  ] });
}
export {
  PlacementsPage as default
};
