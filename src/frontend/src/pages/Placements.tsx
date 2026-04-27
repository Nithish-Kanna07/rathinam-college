import { Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Building2,
  type LucideIcon,
  Mail,
  Phone,
  Quote,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { Suspense, useEffect, useRef, useState } from "react";
import type * as THREE from "three";
import { useOverallStats, usePlacementStats } from "../hooks/useBackend";

// ─── Static data ─────────────────────────────────────────────────────────────

const YEAR_TREND = [
  { year: 2020, avg: 2.1, pct: 72 },
  { year: 2021, avg: 2.4, pct: 78 },
  { year: 2022, avg: 2.8, pct: 84 },
  { year: 2023, avg: 3.1, pct: 90 },
  { year: 2024, avg: 3.25, pct: 93.12 },
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
    barGrad: "from-blue-400 to-blue-600",
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
    barGrad: "from-violet-400 to-violet-600",
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
    barGrad: "from-cyan-400 to-cyan-600",
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
    barGrad: "from-amber-400 to-amber-600",
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
    barGrad: "from-emerald-400 to-emerald-600",
  },
  {
    dept: "Mechanical",
    fullName: "Mechanical Engineering",
    pct: 88,
    avg: 3.0,
    highest: 16,
    recruiters: ["Tech Mahindra", "HP", "Reliance"],
    barColor: "bg-orange-500",
    badge: "bg-orange-100 text-orange-800",
    rowBg: "hover:bg-orange-50/50",
    barGrad: "from-orange-400 to-orange-600",
  },
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
  "HP",
];

const ALUMNI = [
  {
    id: 1,
    name: "Priya Suresh",
    year: "2024",
    company: "Google India",
    role: "Software Engineer",
    salary: "54–58 LPA",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "Rathinam Group's placement cell coached me through every round. The 3-month intensive training made Google feel like the next logical step.",
    dept: "CSE",
    deptColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Arjun Krishnamurthy",
    year: "2023",
    company: "Citi Bank",
    role: "Business Analyst",
    salary: "18–22 LPA",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "The MBA curriculum at Rathinam is industry-aligned. Citi Bank noticed our practical exposure — I was client-ready from day one.",
    dept: "MBA",
    deptColor: "bg-amber-500",
  },
  {
    id: 3,
    name: "Kavya Ramachandran",
    year: "2024",
    company: "Tech Mahindra",
    role: "Data Analyst",
    salary: "12–16 LPA",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "The mock interviews at Rathinam Group are tougher than the real ones. That preparation gave me unshakeable confidence.",
    dept: "MCA",
    deptColor: "bg-violet-500",
  },
  {
    id: 4,
    name: "Vikram Selvaraj",
    year: "2022",
    company: "Samsung India",
    role: "Embedded Systems Engineer",
    salary: "10–14 LPA",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format",
    quote:
      "The ECE labs have industry-grade equipment — I already knew Samsung's toolchain on day one at work.",
    dept: "ECE",
    deptColor: "bg-cyan-500",
  },
];

// ─── 3D Hero Components ──────────────────────────────────────────────────────

function FloatingCoin({
  position,
  color,
  speed,
  delay,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(delay);

  useFrame((_, delta) => {
    t.current += delta * speed;
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t.current) * 0.4;
      meshRef.current.rotation.y += delta * 1.2;
      meshRef.current.rotation.z = Math.sin(t.current * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function FloatingSphere({
  position,
  color,
  speed,
  delay,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(delay);

  useFrame((_, delta) => {
    t.current += delta * speed;
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.cos(t.current) * 0.3;
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.22, 1]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function SceneObjects() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={0.6} color="#6366f1" />
      <pointLight position={[5, -8, 5]} intensity={0.4} color="#f59e0b" />
      <FloatingCoin
        position={[-3.5, 1, -1]}
        color="#f59e0b"
        speed={0.8}
        delay={0}
      />
      <FloatingCoin
        position={[-1.5, -0.5, -0.5]}
        color="#fbbf24"
        speed={0.6}
        delay={1.2}
      />
      <FloatingCoin
        position={[1.2, 1.2, -1.5]}
        color="#d97706"
        speed={1.0}
        delay={0.5}
      />
      <FloatingCoin
        position={[3.0, -0.8, -1]}
        color="#f59e0b"
        speed={0.7}
        delay={2.1}
      />
      <FloatingCoin
        position={[0, 1.8, -2]}
        color="#fbbf24"
        speed={0.9}
        delay={0.8}
      />
      <FloatingCoin
        position={[-2.8, -1.2, -0.8]}
        color="#d97706"
        speed={0.5}
        delay={1.8}
      />
      <FloatingCoin
        position={[2.5, 1.5, -0.5]}
        color="#f59e0b"
        speed={1.1}
        delay={3.0}
      />
      <FloatingSphere
        position={[-4, 0, -1.5]}
        color="#6366f1"
        speed={0.5}
        delay={0.3}
      />
      <FloatingSphere
        position={[4, 0.5, -1.5]}
        color="#22d3ee"
        speed={0.7}
        delay={1.5}
      />
      <FloatingSphere
        position={[-0.5, -1.5, -1]}
        color="#a855f7"
        speed={0.6}
        delay={0.9}
      />
      <FloatingSphere
        position={[1.8, -1.8, -1.2]}
        color="#10b981"
        speed={0.8}
        delay={2.4}
      />
    </>
  );
}

// ─── 3D Carousel Components ─────────────────────────────────────────────────

function CarouselText({
  company,
  index,
  total,
  rotationY,
}: {
  company: string;
  index: number;
  total: number;
  rotationY: React.MutableRefObject<number>;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 3.8;

  useFrame(() => {
    if (meshRef.current) {
      const currentAngle = angle + rotationY.current;
      meshRef.current.position.x = Math.sin(currentAngle) * radius;
      meshRef.current.position.z = Math.cos(currentAngle) * radius;
      meshRef.current.rotation.y = -currentAngle;
      // Scale based on Z position (closest = biggest)
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
    "#facc15",
  ];

  return (
    <group ref={meshRef}>
      <Text
        fontSize={0.28}
        color={colors[index % colors.length]}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {company}
      </Text>
    </group>
  );
}

function CarouselScene({ paused }: { paused: boolean }) {
  const rotationY = useRef(0);

  useFrame((_, delta) => {
    if (!paused) {
      rotationY.current += delta * 0.35;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 5, 5]} intensity={1} color="#ffffff" />
      <Suspense fallback={null}>
        {CAROUSEL_COMPANIES.map((company, i) => (
          <CarouselText
            key={company}
            company={company}
            index={i}
            total={CAROUSEL_COMPANIES.length}
            rotationY={rotationY}
          />
        ))}
      </Suspense>
    </>
  );
}

// ─── Stat Card with 3D Flip ──────────────────────────────────────────────────

function StatCard3D({
  label,
  value,
  sub,
  Icon,
  frontGrad,
  backGrad,
  ocid,
  delay,
}: {
  label: string;
  value: string;
  sub: string;
  Icon: LucideIcon;
  frontGrad: string;
  backGrad: string;
  ocid: string;
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      data-ocid={ocid}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 28 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-44 cursor-pointer"
      style={{ perspective: "800px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${frontGrad} shadow-elevated border border-white/10`}
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
            <Icon size={22} className="text-white" />
          </div>
          <p className="font-display text-3xl font-bold text-white leading-none">
            {value}
          </p>
          <p className="text-white/80 text-sm font-semibold mt-1">{label}</p>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className={`absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${backGrad} shadow-elevated border border-white/10`}
        >
          <p className="font-display text-2xl font-bold text-white mb-2">
            {value}
          </p>
          <p className="text-white font-semibold text-sm mb-1">{label}</p>
          <p className="text-white/70 text-xs">{sub}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Animated Bar ────────────────────────────────────────────────────────────

function AnimatedBar({
  pct,
  grad,
  delay,
}: {
  pct: number;
  grad: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative h-3 bg-muted rounded-full overflow-hidden"
    >
      <motion.div
        className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${grad}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.0, delay, ease: "easeOut" }}
      />
    </div>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      data-ocid="placements.hero.section"
      className="relative overflow-hidden"
      style={{ minHeight: 480 }}
    >
      {/* Background gradient always */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.22 250) 0%, oklch(0.24 0.20 240) 40%, oklch(0.32 0.16 30) 100%)",
        }}
      />

      {/* 3D Canvas — desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <SceneObjects />
          </Canvas>
        </div>
      )}

      {/* Mobile gradient overlay */}
      {isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, oklch(0.62 0.24 32 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.52 0.22 250 / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, oklch(0.54 0.20 125 / 0.2) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/25 border border-secondary/50 text-secondary text-sm font-bold mb-6">
              <Trophy size={14} /> Placement Season 2024–25 Open
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Placements at{" "}
              <span className="text-gradient-orange">Rathinam Group</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-3">
              <strong className="text-secondary">
                Rathinam Group of Institutions, Eachanari, Coimbatore
              </strong>
            </p>
            <p className="text-base text-primary-foreground/70 leading-relaxed mb-8 max-w-lg">
              Building careers since 1997. Our students are hired by Fortune 500
              companies across India — with packages that set the benchmark for
              institutions in Tamil Nadu.
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
        </div>
      </div>
    </section>
  );
}

function OverallStats() {
  const { data: stats } = useOverallStats();

  const cards = [
    {
      label: "Highest Package",
      value: `${stats?.highestPackageLPA ?? 58} LPA`,
      sub: "Google / Microsoft — CSE 2024",
      Icon: Trophy,
      frontGrad: "from-violet-500 to-purple-700",
      backGrad: "from-purple-600 to-indigo-700",
      ocid: "placements.stats.highest_package.card",
      delay: 0,
    },
    {
      label: "Average Package",
      value: `${stats?.avgPackageLPA ?? 3.25} LPA`,
      sub: "Across all departments, batch 2024",
      Icon: TrendingUp,
      frontGrad: "from-orange-400 to-amber-600",
      backGrad: "from-amber-500 to-orange-700",
      ocid: "placements.stats.avg_package.card",
      delay: 0.1,
    },
    {
      label: "Companies",
      value: "150+",
      sub: "Fortune 500 + Tier-1 MNCs on campus",
      Icon: Building2,
      frontGrad: "from-blue-500 to-cyan-600",
      backGrad: "from-cyan-500 to-blue-700",
      ocid: "placements.stats.companies.card",
      delay: 0.2,
    },
    {
      label: "Students Placed",
      value: "1500+",
      sub: "Cumulative — all departments 2024",
      Icon: Users,
      frontGrad: "from-emerald-500 to-teal-600",
      backGrad: "from-teal-500 to-emerald-700",
      ocid: "placements.stats.students_placed.card",
      delay: 0.3,
    },
    {
      label: "Placement Rate",
      value: "93.12%",
      sub: "Verified official record, batch 2024",
      Icon: Star,
      frontGrad: "from-rose-500 to-pink-600",
      backGrad: "from-pink-500 to-rose-700",
      ocid: "placements.stats.placement_rate.card",
      delay: 0.4,
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
          <p className="mt-3 text-muted-foreground text-base max-w-xl mx-auto">
            Hover each card to reveal the full detail. Every figure verified
            from official placement records.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {cards.map((c) => (
            <StatCard3D key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function YearTrend() {
  const maxAvg = Math.max(...YEAR_TREND.map((y) => y.avg));
  const GRADS = [
    "from-blue-400 to-blue-600",
    "from-violet-400 to-violet-600",
    "from-emerald-400 to-emerald-600",
    "from-orange-400 to-orange-600",
    "from-rose-400 to-rose-600",
  ];

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
                    className={`w-full max-w-[72px] rounded-t-xl bg-gradient-to-t ${GRADS[i]} transition-smooth hover:opacity-90 shadow-card`}
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
                <span className="text-muted-foreground">·</span>
                <span className="font-semibold text-accent">{item.pct}%</span>
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
            Every department, every number — transparent and verified for 2024.
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

              <div className="mb-3">
                <AnimatedBar pct={c.pct} grad={c.barGrad} delay={i * 0.08} />
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
                <th className="px-6 py-4 text-center font-semibold w-56">
                  Bar
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
                  <td className="px-6 py-4">
                    <AnimatedBar
                      pct={c.pct}
                      grad={c.barGrad}
                      delay={i * 0.08}
                    />
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

function TopRecruiters3D() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      data-ocid="placements.recruiters.section"
      className="section-alt py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="green-badge mb-3 inline-flex">150+ Partners</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Our Top Recruiters
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Industry titans return to Rathinam Group of Institutions every year.
            Hover to pause the carousel.
          </p>
        </div>

        {/* 3D Carousel */}
        <motion.div
          data-ocid="placements.recruiters.carousel"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-elevated"
          style={{
            height: 220,
            background:
              "linear-gradient(135deg, oklch(0.18 0.20 250) 0%, oklch(0.22 0.18 240) 50%, oklch(0.28 0.14 260) 100%)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
            <CarouselScene paused={paused} />
          </Canvas>

          {/* Edge fade overlays */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, oklch(0.18 0.20 250 / 0.9) 0%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, oklch(0.18 0.20 250 / 0.9) 0%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-3 w-full text-center pointer-events-none">
            <span className="text-xs text-white/40 font-medium">
              {paused ? "▐▐ Paused" : "↻ Rotating — hover to pause"}
            </span>
          </div>
        </motion.div>

        {/* Company grid fallback / supplement */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {CAROUSEL_COMPANIES.map((name, i) => (
            <motion.div
              key={name}
              data-ocid={`placements.recruiters.item.${i + 1}`}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.88 }}
              viewport={{ once: true }}
              transition={{ delay: Math.floor(i / 4) * 0.08 }}
              className="px-5 py-2.5 rounded-xl border border-border bg-card text-sm font-bold text-foreground transition-smooth hover:shadow-elevated hover:border-secondary/50 hover:text-secondary"
            >
              {name}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          …and 138+ more companies visit campus every recruitment season.
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
            Real students of Rathinam Group of Institutions. Real packages. Real
            inspiration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALUMNI.map((a, i) => (
            <motion.div
              key={a.id}
              data-ocid={`placements.alumni.item.${i + 1}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 36 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                type: "spring",
                bounce: 0.2,
              }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-2 flex flex-col"
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
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
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
  const topLPA = records ? Math.max(...records.map((r) => r.packageLPA)) : 58;
  const topRecord = records?.find((r) => r.packageLPA === topLPA);

  return (
    <section
      data-ocid="placements.cta.section"
      className="py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.22 250) 0%, oklch(0.26 0.18 240) 60%, oklch(0.32 0.14 230) 100%)",
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
              Join{" "}
              <strong className="text-secondary">
                Rathinam Group of Institutions, Eachanari, Coimbatore
              </strong>{" "}
              — where <strong className="text-secondary">93.12%</strong> of
              students get placed in their preferred domain.
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

          <div
            data-ocid="placements.contact.card"
            className="bg-card rounded-2xl shadow-elevated p-8 border border-border"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Placement Cell — Direct Contact
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              For companies wishing to participate in campus recruitment or
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
      <TopRecruiters3D />
      <AlumniStories />
      <PlacementCTA />
    </div>
  );
}
