import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Building2,
  Mail,
  Phone,
  Quote,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useOverallStats, usePlacementStats } from "../hooks/useBackend";

// ─── Static data ─────────────────────────────────────────────────────────────

const YEAR_TREND = [
  { year: 2020, avg: 6.2, pct: 59 },
  { year: 2021, avg: 6.8, pct: 65 },
  { year: 2022, avg: 7.5, pct: 71 },
  { year: 2023, avg: 8.1, pct: 77 },
  { year: 2024, avg: 8.5, pct: 81 },
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
    rowBg: "hover:bg-blue-50/50",
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
    rowBg: "hover:bg-violet-50/50",
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
    rowBg: "hover:bg-cyan-50/50",
  },
  {
    dept: "MBA",
    fullName: "Master of Business Administration",
    pct: 93,
    avg: 8.0,
    highest: 22,
    recruiters: ["Deloitte", "KPMG", "EY"],
    barColor: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800",
    rowBg: "hover:bg-amber-50/50",
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
    rowBg: "hover:bg-emerald-50/50",
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
    rowBg: "hover:bg-orange-50/50",
  },
  {
    dept: "Civil",
    fullName: "Civil Engineering",
    pct: 85,
    avg: 6.0,
    highest: 15,
    recruiters: ["L&T", "Godrej Properties"],
    barColor: "bg-rose-500",
    badge: "bg-rose-100 text-rose-800",
    rowBg: "hover:bg-rose-50/50",
  },
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
  { name: "Adobe", cat: 4 },
];

const CAT_COLORS = [
  "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100",
  "bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100",
  "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100",
  "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100",
  "bg-rose-50 border-rose-200 text-rose-800 hover:bg-rose-100",
  "bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100",
];

const ALUMNI = [
  {
    id: 1,
    name: "Priya Suresh",
    year: "2022",
    company: "Microsoft India",
    role: "Software Engineer II",
    salary: "28–32 LPA",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "Rathinam's placement cell coached me for every interview round. Landing at Microsoft straight out of campus was a dream I hadn't dared to dream till senior year.",
    dept: "CSE",
    deptColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Arjun Krishnamurthy",
    year: "2023",
    company: "Deloitte USI",
    role: "Business Analyst",
    salary: "14–18 LPA",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "The MBA programme gave me real consulting frameworks. Within six months at Deloitte I was leading client workshops — confidence that came from Rathinam's business simulations.",
    dept: "MBA",
    deptColor: "bg-amber-500",
  },
  {
    id: 3,
    name: "Kavya Ramachandran",
    year: "2023",
    company: "Google",
    role: "Data Analyst",
    salary: "38–42 LPA",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "The mock interviews here are tougher than the real ones. After that preparation, cracking Google's data analytics role felt natural — it was just another practice round.",
    dept: "MCA",
    deptColor: "bg-violet-500",
  },
  {
    id: 4,
    name: "Vikram Selvaraj",
    year: "2021",
    company: "Bosch India",
    role: "Embedded Systems Engineer",
    salary: "10–14 LPA",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "The ECE labs have industry-grade equipment. When I joined Bosch I already knew their embedded toolchain — the learning curve was almost flat from day one.",
    dept: "ECE",
    deptColor: "bg-cyan-500",
  },
];

// ─── Chart bar colours ────────────────────────────────────────────────────────

const BAR_GRADIENTS = [
  "from-blue-400 to-blue-600",
  "from-violet-400 to-violet-600",
  "from-emerald-400 to-emerald-600",
  "from-orange-400 to-orange-600",
  "from-rose-400 to-rose-600",
];

// ─── Page sections ────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <section
      data-ocid="placements.hero.section"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.18 250) 0%, oklch(0.28 0.16 240) 45%, oklch(0.38 0.14 30) 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, oklch(0.58 0.18 30 / 0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.52 0.16 120 / 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-sm font-semibold mb-6">
              <Trophy size={14} /> Placement Season 2024–25 Open
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Our <span className="text-gradient-orange">Placements</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Building careers since 1997. Rathinam students are hired by
              Fortune 500 companies across India and the globe — packages that
              set the benchmark for Tier-2 colleges nationwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                data-ocid="placements.hero.apply_button"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Apply for 2025 <Award size={16} />
              </Link>
              <a
                href="#course-table"
                data-ocid="placements.hero.explore_button"
                className="px-6 py-3 border-2 border-primary-foreground/40 text-primary-foreground rounded-lg transition-smooth hover:bg-primary-foreground/10 inline-flex items-center gap-2 font-semibold"
              >
                View Course Stats <BookOpen size={16} />
              </a>
            </div>
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block relative"
          >
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&h=480&fit=crop&auto=format"
              alt="Rathinam placement ceremony"
              className="w-full rounded-2xl object-cover shadow-elevated"
              style={{ maxHeight: 380 }}
            />
            <div className="absolute -bottom-5 -left-5 bg-card rounded-xl shadow-elevated px-5 py-3 flex items-center gap-3 border border-border">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Star size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-foreground leading-none">
                  42 LPA
                </p>
                <p className="text-xs text-muted-foreground">
                  Highest Package 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OverallStats() {
  const { data: stats } = useOverallStats();

  const cards = [
    {
      label: "Placement Rate",
      value: `${stats?.placementRate ?? 98}%`,
      sub: "Batch of 2024",
      Icon: Users,
      gradient: "from-green-500 to-emerald-600",
      textColor: "text-emerald-600",
      bg: "bg-green-50 border-green-200",
      ocid: "placements.stats.placement_rate.card",
    },
    {
      label: "Average Package",
      value: `${stats?.avgPackageLPA ?? 8.5} LPA`,
      sub: "Across all departments",
      Icon: TrendingUp,
      gradient: "from-orange-500 to-amber-500",
      textColor: "text-orange-600",
      bg: "bg-orange-50 border-orange-200",
      ocid: "placements.stats.avg_package.card",
    },
    {
      label: "Highest Package",
      value: `${stats?.highestPackageLPA ?? 42} LPA`,
      sub: "Google — CSE 2024",
      Icon: Trophy,
      gradient: "from-violet-500 to-purple-600",
      textColor: "text-violet-600",
      bg: "bg-violet-50 border-violet-200",
      ocid: "placements.stats.highest_package.card",
    },
    {
      label: "Recruiting Companies",
      value: `${stats?.partnerCompanies ?? 350}+`,
      sub: "Campus + off-campus",
      Icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
      ocid: "placements.stats.companies.card",
    },
  ];

  return (
    <section
      data-ocid="placements.stats.section"
      className="bg-background py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="placement-badge mb-3 inline-flex">
            2024 Highlights
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Numbers That Speak
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
            Every figure verified from official annual placement records.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              data-ocid={c.ocid}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-6 lg:p-8 flex flex-col items-center text-center transition-smooth hover:shadow-elevated hover:-translate-y-1 ${c.bg}`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 shadow-card`}
              >
                <c.Icon size={24} className="text-white" />
              </div>
              <p
                className={`font-display text-3xl lg:text-4xl font-bold ${c.textColor} leading-tight`}
              >
                {c.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {c.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function YearTrend() {
  const maxAvg = Math.max(...YEAR_TREND.map((y) => y.avg));

  return (
    <section
      data-ocid="placements.trend.section"
      className="section-alt py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="green-badge mb-3 inline-flex">
            Year-on-Year Growth
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Average Package Trend
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Consistent upward trajectory — our students keep raising the bar
            every year.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-card p-8">
          {/* bar chart */}
          <div
            className="flex items-end justify-around gap-3"
            style={{ height: 240 }}
            role="img"
            aria-label="Year-on-year average package bar chart"
          >
            {YEAR_TREND.map((item, i) => {
              const barH = Math.round((item.avg / maxAvg) * 190);
              return (
                <motion.div
                  key={item.year}
                  data-ocid={`placements.trend.bar.${i + 1}`}
                  className="flex flex-col items-center gap-2 flex-1"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <span className="text-sm font-bold text-foreground tabular-nums">
                    {item.avg} LPA
                  </span>
                  <motion.div
                    className={`w-full max-w-[72px] rounded-t-xl bg-gradient-to-t ${BAR_GRADIENTS[i]} transition-smooth hover:opacity-90 shadow-card`}
                    initial={{ height: 0 }}
                    whileInView={{ height: barH }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.12,
                      ease: "easeOut",
                    }}
                    style={{ minHeight: 4 }}
                    title={`${item.year}: ${item.avg} LPA average`}
                  />
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.year}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-5 justify-center">
            {YEAR_TREND.map((item) => (
              <div key={item.year} className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-muted-foreground">
                  {item.year}:
                </span>
                <span className="font-bold text-secondary">{item.avg} LPA</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseTable() {
  return (
    <section
      id="course-table"
      data-ocid="placements.course_table.section"
      className="bg-background py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="placement-badge mb-3 inline-flex">
            Department Breakdown
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Course-wise Placement Statistics
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Every department. Every number. Transparent and verified for 2024.
          </p>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {COURSE_PLACEMENTS.map((c, i) => (
            <motion.div
              key={c.dept}
              data-ocid={`placements.course_table.item.${i + 1}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl p-5 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`w-2.5 h-9 rounded-full ${c.barColor} shrink-0`}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-display font-bold text-foreground text-base">
                    {c.dept}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {c.fullName}
                  </p>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0 ${c.badge}`}
                >
                  {c.pct}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground">Avg Package</p>
                  <p className="font-bold text-orange-600">{c.avg} LPA</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Highest Package
                  </p>
                  <p className="font-bold text-violet-600">{c.highest} LPA</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.recruiters.map((r) => (
                  <span
                    key={r}
                    className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-semibold">
                  Department
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  Placement %
                </th>
                <th className="px-6 py-4 text-right font-semibold">
                  Avg Package
                </th>
                <th className="px-6 py-4 text-right font-semibold">Highest</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Top Recruiters
                </th>
              </tr>
            </thead>
            <tbody>
              {COURSE_PLACEMENTS.map((c, i) => (
                <motion.tr
                  key={c.dept}
                  data-ocid={`placements.course_table.row.${i + 1}`}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`border-t border-border transition-smooth ${i % 2 === 0 ? "bg-card" : "bg-muted/10"} ${c.rowBg}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-8 rounded-full ${c.barColor} shrink-0`}
                      />
                      <div>
                        <p className="font-bold text-foreground">{c.dept}</p>
                        <p className="text-xs text-muted-foreground">
                          {c.fullName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}
                    >
                      {c.pct}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-orange-600 tabular-nums">
                    {c.avg} LPA
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-violet-600 tabular-nums">
                    {c.highest} LPA
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {c.recruiters.map((r) => (
                        <span
                          key={r}
                          className="text-xs bg-muted text-muted-foreground px-2.5 py-0.5 rounded-full border border-border"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TopRecruiters() {
  return (
    <section
      data-ocid="placements.recruiters.section"
      className="section-alt py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="green-badge mb-3 inline-flex">350+ Partners</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Our Top Recruiters
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Industry titans — from tech giants to global consulting firms —
            return to Rathinam year after year.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {TOP_RECRUITERS.map((company, i) => (
            <motion.div
              key={company.name}
              data-ocid={`placements.recruiters.item.${i + 1}`}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: Math.floor(i / 5) * 0.08 }}
              className={`px-5 py-2.5 rounded-xl border text-sm font-bold transition-smooth cursor-default ${CAT_COLORS[company.cat]}`}
            >
              {company.name}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          …and 320+ more companies visit campus every recruitment season.
        </p>
      </div>
    </section>
  );
}

function AlumniStories() {
  return (
    <section
      data-ocid="placements.alumni.section"
      className="bg-background py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="placement-badge mb-3 inline-flex">
            Alumni Voices
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Success Stories
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Real students. Real packages. Real inspiration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALUMNI.map((a, i) => (
            <motion.div
              key={a.id}
              data-ocid={`placements.alumni.item.${i + 1}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 28 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 flex flex-col"
            >
              <div className="relative">
                <img
                  src={a.photo}
                  alt={a.name}
                  className="w-full h-52 object-cover object-top"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-0.5 rounded-full shadow-card ${a.deptColor}`}
                >
                  {a.dept} · {a.year}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-foreground text-base leading-tight">
                  {a.name}
                </h3>
                <p className="text-sm text-primary font-semibold mt-0.5">
                  {a.role}
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  {a.company}
                </p>

                <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full w-fit mb-4">
                  {a.salary}
                </span>

                <blockquote className="mt-auto text-xs text-muted-foreground leading-relaxed italic border-l-2 border-secondary pl-3">
                  <Quote size={10} className="text-secondary inline mr-1" />
                  {a.quote}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementCTA() {
  const { data: records } = usePlacementStats();
  const topLPA = records ? Math.max(...records.map((r) => r.packageLPA)) : 42;
  const topRecord = records?.find((r) => r.packageLPA === topLPA);

  return (
    <section
      data-ocid="placements.cta.section"
      className="py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.18 250) 0%, oklch(0.3 0.14 240) 60%, oklch(0.36 0.12 230) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Your Dream Company is{" "}
              <span className="text-gradient-orange">One Step Away</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Join a college where{" "}
              <strong className="text-secondary">98%</strong> of students get
              placed in their preferred domain. Our dedicated placement cell
              works year-round, not just during season.
            </p>

            {topRecord && (
              <div className="inline-flex items-center gap-3 bg-secondary/20 border border-secondary/40 rounded-xl px-5 py-3 mb-8">
                <Trophy size={20} className="text-secondary shrink-0" />
                <div>
                  <p className="text-xs text-primary-foreground/70">
                    Highest Package 2024
                  </p>
                  <p className="font-display font-bold text-secondary text-base">
                    {topRecord.package} · {topRecord.company} · {topRecord.role}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                data-ocid="placements.cta.apply_button"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Apply Now — Free
              </Link>
              <Link
                to="/contact"
                data-ocid="placements.cta.contact_button"
                className="px-6 py-3 border-2 border-primary-foreground/40 text-primary-foreground rounded-lg transition-smooth hover:bg-primary-foreground/10 font-semibold"
              >
                Talk to Placement Cell
              </Link>
            </div>
          </div>

          {/* Contact card */}
          <div
            data-ocid="placements.contact.card"
            className="bg-card rounded-2xl shadow-elevated p-8 border border-border"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Placement Cell — Direct Contact
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              For companies wishing to participate in campus recruitment, or
              students seeking placement guidance — reach us directly.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href="mailto:placementcell@rathinam.in"
                    data-ocid="placements.contact.email_link"
                    className="font-semibold text-primary hover:underline text-sm"
                  >
                    placementcell@rathinam.in
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a
                    href="tel:+914221234567"
                    data-ocid="placements.contact.phone_link"
                    className="font-semibold text-secondary hover:underline text-sm"
                  >
                    +91-422-123-4567
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">
                Placement season runs November–April. Pre-placement talks begin
                in September.
              </p>
              <Link
                to="/contact"
                data-ocid="placements.contact.inquiry_button"
                className="w-full text-center btn-primary block text-sm"
              >
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlacementsPage() {
  return (
    <div data-ocid="placements.page">
      <HeroBanner />
      <OverallStats />
      <YearTrend />
      <CourseTable />
      <TopRecruiters />
      <AlumniStories />
      <PlacementCTA />
    </div>
  );
}
