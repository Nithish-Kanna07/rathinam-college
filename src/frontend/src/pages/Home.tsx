import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  Globe,
  GraduationCap,
  Lightbulb,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import type * as THREE from "three";
import { Badge } from "../components/CollegeBadge";
import { Section } from "../components/Section";
import { useOverallStats, usePlacementStats } from "../hooks/useBackend";

// ── Carousel Slides ──────────────────────────────────────────────
const HERO_SLIDES = [
  {
    id: 1,
    image: "/assets/generated/rathinam-campus-hero.dim_1400x600.jpg",
    badge: "🏆 Ranked #1 in Tamil Nadu for Placements 2024",
    title: "Rathinam Group",
    subtitle: "of Institutions",
    tagline: "Excellence in Education | Innovation | Industry Partnerships",
    desc: "Eachanari, Coimbatore — Igniting Careers. Shaping Leaders. Since 1994.\nApproved by AICTE · Affiliated to Anna University",
  },
  {
    id: 2,
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    badge: "🔬 State-of-the-Art Research Labs",
    title: "Learn by Doing",
    subtitle: "Industry-Ready Education",
    tagline: "50+ Advanced Labs | AI & Robotics | Live Industry Projects",
    desc: "Real equipment, real projects, real mentors.\nStep into your future career from day one.",
  },
  {
    id: 3,
    image:
      "/assets/generated/international-collaboration-event.dim_1400x600.jpg",
    badge: "🌍 50+ International University Partners",
    title: "Global Exposure",
    subtitle: "International Collaborations",
    tagline: "UK · Singapore · Australia · Germany | Exchange Programs",
    desc: "Study, research, and intern at partner universities worldwide.\nBuild a global network that opens doors everywhere.",
  },
];

// ── Courses Data ──────────────────────────────────────────────────
const COURSES = [
  {
    id: "engineering",
    title: "Engineering & Tech",
    desc: "B.E./B.Tech in CSE, ECE, Mechanical, Civil with cutting-edge labs.",
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    badge: "Most Popular",
    badgeVariant: "secondary" as const,
    seats: "240 seats",
  },
  {
    id: "management",
    title: "Management & Commerce",
    desc: "MBA, BBA, B.Com with live industry interactions and mentorship.",
    image: "/assets/generated/students-management.dim_800x500.jpg",
    badge: "High ROI",
    badgeVariant: "green" as const,
    seats: "180 seats",
  },
  {
    id: "arts-science",
    title: "Arts & Science",
    desc: "BCA, BSc, BA in data science, liberal arts, and modern sciences.",
    image: "/assets/generated/students-library.dim_800x500.jpg",
    badge: "Creative",
    badgeVariant: "primary" as const,
    seats: "120 seats",
  },
  {
    id: "health-sciences",
    title: "Health Sciences",
    desc: "Pharmacy and allied health programs for healthcare careers.",
    image: "/assets/generated/students-science-lab.dim_800x500.jpg",
    badge: "Growing Field",
    badgeVariant: "accent" as const,
    seats: "60 seats",
  },
  {
    id: "research",
    title: "Research & PhD",
    desc: "Doctoral programs in engineering, management, and sciences.",
    image: "/assets/generated/students-science-lab.dim_800x500.jpg",
    badge: "Advanced",
    badgeVariant: "primary" as const,
    seats: "30 seats",
  },
  {
    id: "diploma",
    title: "Diploma Programs",
    desc: "Skill-focused 3-year diploma courses with 100% job assistance.",
    image: "/assets/generated/students-classroom.dim_800x500.jpg",
    badge: "Job Ready",
    badgeVariant: "green" as const,
    seats: "90 seats",
  },
];

// ── Top Recruiters ─────────────────────────────────────────────────
const TOP_COMPANIES = [
  { name: "Google", package: "42 LPA", color: "text-secondary" },
  { name: "Amazon", package: "38 LPA", color: "text-secondary" },
  { name: "Microsoft", package: "34 LPA", color: "text-primary" },
  { name: "Infosys", package: "8 LPA", color: "text-accent" },
  { name: "TCS", package: "7 LPA", color: "text-accent" },
  { name: "Wipro", package: "7.5 LPA", color: "text-accent" },
  { name: "Zoho", package: "15 LPA", color: "text-primary" },
  { name: "Deloitte", package: "12 LPA", color: "text-primary" },
];

// ── International Partners ────────────────────────────────────────
const INT_PARTNERS = [
  { name: "UWE Bristol", country: "🇬🇧 United Kingdom" },
  { name: "NTU Singapore", country: "🇸🇬 Singapore" },
  { name: "Curtin University", country: "🇦🇺 Australia" },
  { name: "IU Germany", country: "🇩🇪 Germany" },
];

// ── Highlights ────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "World-Class Faculty",
    desc: "500+ experienced professors, IIT/IIM alumni, and industry practitioners guiding every student.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Trophy,
    title: "100% Industry Placement",
    desc: "Dedicated placement cell with 350+ company tie-ups and mock interview programs year-round.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Globe,
    title: "Global Collaborations",
    desc: "Student exchange, dual-degree, and research programs with 50+ universities across 20 countries.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Lightbulb,
    title: "Smart Classrooms",
    desc: "IoT-enabled classrooms, AI labs, maker spaces, and a central innovation & incubation centre.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

// ── Testimonials ─────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Priya Krishnamurthy",
    role: "SDE at Amazon",
    company: "Amazon",
    package: "18 LPA",
    batch: "B.Tech CSE, 2023",
    quote:
      "Rathinam's placement cell guided me through every step. The mock interviews and industry sessions made all the difference in cracking Amazon.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Arjun Selvam",
    role: "Analyst at Deloitte",
    company: "Deloitte",
    package: "12 LPA",
    batch: "MBA, 2023",
    quote:
      "The international exposure through UWE Bristol was a game-changer. The faculty here genuinely care about your success beyond graduation.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Meera Sundaram",
    role: "Product Manager at Zoho",
    company: "Zoho",
    package: "15 LPA",
    batch: "B.Tech IT, 2022",
    quote:
      "From day one, the faculty pushed us to think beyond textbooks. Real projects, real learning, real results. I owe my career to Rathinam Group of Institutions.",
    avatar:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&h=80&fit=crop&crop=face",
  },
];

// ── News & Events ─────────────────────────────────────────────────
const NEWS = [
  {
    date: "Apr 15, 2025",
    category: "Placements",
    title: "Record 42 LPA Placement: Rathinam Student Lands Google Offer",
    excerpt:
      "Kavin Kumar from B.Tech CSE batch 2025 receives the highest-ever offer of ₹42 LPA from Google Bangalore, setting a new record at Rathinam Group of Institutions.",
    image: "/assets/generated/placement-ceremony.dim_800x500.jpg",
    catColor: "text-secondary",
    catBg: "bg-secondary/15",
  },
  {
    date: "Mar 28, 2025",
    category: "International",
    title: "MoU Signed with NTU Singapore for Student Exchange 2025-26",
    excerpt:
      "Rathinam Group of Institutions expands its global footprint with a new academic partnership enabling 50 students to study at NTU Singapore annually.",
    image:
      "/assets/generated/international-collaboration-event.dim_1400x600.jpg",
    catColor: "text-accent",
    catBg: "bg-accent/15",
  },
  {
    date: "Mar 10, 2025",
    category: "Academics",
    title: "New AI & Data Science Lab Inaugurated — ₹2 Crore Investment",
    excerpt:
      "State-of-the-art AI lab with NVIDIA GPU clusters, IoT integration, and dedicated industry mentors from top tech companies opens for students.",
    image: "/assets/generated/students-computer-lab.dim_800x500.jpg",
    catColor: "text-primary",
    catBg: "bg-primary/15",
  },
];

// ── Stat Strip Data ───────────────────────────────────────────────
const STAT_STRIP = [
  { value: "Est. 1994", label: "Founded" },
  { value: "15,000+", label: "Students" },
  { value: "500+", label: "Faculty" },
  { value: "93.12%", label: "Placements" },
  { value: "50+", label: "Intl. Partners" },
];

// ════════════════════════════════════════════════════════════════
// ── 3D Hero Scene ─────────────────────────────────────────────────

function FloatingShape({
  position,
  color,
  speed,
  shape,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  shape: "torusKnot" | "sphere" | "box" | "octahedron";
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed * 0.4;
    meshRef.current.rotation.y = t * speed * 0.6;
    meshRef.current.position.y = initialY + Math.sin(t * speed * 0.5) * 0.3;
  });

  const mat = (
    <meshStandardMaterial
      color={color}
      roughness={0.3}
      metalness={0.6}
      transparent
      opacity={0.85}
    />
  );

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {shape === "torusKnot" && (
        <torusKnotGeometry args={[0.5, 0.18, 100, 16]} />
      )}
      {shape === "sphere" && <sphereGeometry args={[0.55, 32, 32]} />}
      {shape === "box" && <boxGeometry args={[0.9, 0.9, 0.9]} />}
      {shape === "octahedron" && <octahedronGeometry args={[0.65]} />}
      {mat}
    </mesh>
  );
}

function HeroScene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.4} color="#4f6ef7" />
      <pointLight position={[-8, -5, 5]} intensity={1.0} color="#ff8c40" />
      <pointLight position={[0, 8, -5]} intensity={0.8} color="#3ddc84" />

      <Stars
        radius={80}
        depth={50}
        count={isMobile ? 1500 : 3000}
        factor={4}
        saturation={0.5}
        fade
        speed={0.4}
      />

      {!isMobile && (
        <>
          <FloatingShape
            position={[-5.5, 1.5, -3]}
            color="#4f6ef7"
            speed={0.5}
            shape="torusKnot"
            scale={1.1}
          />
          <FloatingShape
            position={[5.0, -1.0, -2]}
            color="#ff8c40"
            speed={0.35}
            shape="octahedron"
            scale={1.3}
          />
          <FloatingShape
            position={[3.5, 2.5, -4]}
            color="#3ddc84"
            speed={0.45}
            shape="sphere"
            scale={0.9}
          />
          <FloatingShape
            position={[-4.0, -2.0, -3]}
            color="#a855f7"
            speed={0.55}
            shape="box"
            scale={0.8}
          />
          <FloatingShape
            position={[0.5, 3.2, -5]}
            color="#f7c948"
            speed={0.3}
            shape="octahedron"
            scale={0.7}
          />
        </>
      )}
      {isMobile && (
        <>
          <FloatingShape
            position={[-3.5, 1.0, -3]}
            color="#4f6ef7"
            speed={0.4}
            shape="torusKnot"
            scale={0.8}
          />
          <FloatingShape
            position={[3.5, -0.5, -2]}
            color="#ff8c40"
            speed={0.3}
            shape="octahedron"
            scale={1.0}
          />
        </>
      )}

      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * 0.35}
        />
      )}
    </>
  );
}

// ── 3D Particle Ring for Stat Strip ──────────────────────────────
function ParticleRing() {
  const points = useRef<THREE.Points>(null);
  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const r = 3 + Math.random() * 1.5;
    positions[i * 3] = Math.cos(angle) * r;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
    positions[i * 3 + 2] = Math.sin(angle) * r;
  }

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#ff8c40" transparent opacity={0.7} />
    </points>
  );
}

function StatStripScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 3, 2]} intensity={1.2} color="#ff8c40" />
      <ParticleRing />
    </>
  );
}

// ── 3D Globe for International Section ───────────────────────────
function GlobeScene() {
  const globeRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) globeRef.current.rotation.y = t * 0.25;
    if (wireRef.current) wireRef.current.rotation.y = t * 0.18;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#4f6ef7" />
      <pointLight position={[-4, -3, 2]} intensity={0.8} color="#3ddc84" />
      <Stars radius={40} depth={20} count={800} factor={3} fade speed={0.2} />

      {/* Main globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.3, 48, 48]} />
        <meshStandardMaterial
          color="#1a2f6e"
          roughness={0.4}
          metalness={0.5}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.35, 18, 18]} />
        <meshBasicMaterial
          color="#4f6ef7"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Glowing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.03, 8, 64]} />
        <meshStandardMaterial
          color="#ff8c40"
          emissive="#ff8c40"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.5, 0]}>
        <torusGeometry args={[1.55, 0.02, 8, 64]} />
        <meshStandardMaterial
          color="#3ddc84"
          emissive="#3ddc84"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbiting dot */}
      <OrbitDot />
    </>
  );
}

function OrbitDot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x = Math.cos(t * 0.8) * 1.7;
      ref.current.position.z = Math.sin(t * 0.8) * 1.7;
      ref.current.position.y = Math.sin(t * 0.4) * 0.3;
    }
  });
  return (
    <Sphere ref={ref} args={[0.08, 12, 12]}>
      <meshStandardMaterial
        color="#f7c948"
        emissive="#f7c948"
        emissiveIntensity={1.2}
      />
    </Sphere>
  );
}

// ════════════════════════════════════════════════════════════════
export default function HomePage() {
  const { data: stats } = useOverallStats();
  const { data: placements } = usePlacementStats();
  const topPlaced = placements?.slice(0, 4) ?? [];

  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const goToSlide = useCallback((next: number, direction: number) => {
    setDir(direction);
    setSlide((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const nextSlide = useCallback(
    () => goToSlide(slide + 1, 1),
    [slide, goToSlide],
  );
  const prevSlide = useCallback(
    () => goToSlide(slide - 1, -1),
    [slide, goToSlide],
  );

  useEffect(() => {
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
    enter: (_d: number) => ({ opacity: 0 }),
    center: { opacity: 1, x: 0 },
    exit: (_d2: number) => ({ opacity: 0 }),
  };

  return (
    <div data-ocid="home.page">
      {/* ── HERO SECTION with 3D Canvas ─────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex flex-col overflow-hidden"
        data-ocid="home.hero.section"
      >
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 bg-gradient-hero-full">
          <Suspense
            fallback={<div className="w-full h-full bg-gradient-hero-full" />}
          >
            <Canvas
              camera={{ position: [0, 0, 7], fov: 60 }}
              gl={{ antialias: true, alpha: false }}
              style={{ background: "transparent" }}
            >
              <HeroScene isMobile={isMobile} />
            </Canvas>
          </Suspense>
        </div>

        {/* Slide background image overlay (blended on top of canvas) */}
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={current.id}
            custom={dir}
            variants={{
              enter: () => ({ opacity: 0 }),
              center: { opacity: 1 },
              exit: () => ({ opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${current.image}')`,
              mixBlendMode: "overlay",
              opacity: 0.22,
            }}
          />
        </AnimatePresence>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`slide-${current.id}`}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-secondary/50 text-primary-foreground text-sm font-semibold mb-5 backdrop-blur-sm"
                  >
                    {current.badge}
                  </motion.span>

                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-1 drop-shadow-lg">
                    {current.title}
                  </h1>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-secondary mb-2 tracking-wide drop-shadow-md">
                    {current.subtitle}
                  </h2>
                  <p className="text-primary-foreground/60 text-xs font-medium mb-3 tracking-wider uppercase">
                    Rathinam Group of Institutions, Eachanari, Coimbatore
                  </p>
                  <p className="text-primary-foreground/90 text-base md:text-lg font-medium mb-3 tracking-wide">
                    {current.tagline}
                  </p>
                  <p className="text-primary-foreground/70 text-sm md:text-base mb-8 whitespace-pre-line">
                    {current.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/courses"
                      data-ocid="home.hero.explore_programs.secondary_button"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/15 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth text-sm backdrop-blur-sm"
                    >
                      <BookOpen size={16} /> Explore Programs
                    </Link>
                    <Link
                      to="/admissions"
                      data-ocid="home.hero.apply_now.primary_button"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-sm"
                    >
                      Apply Now 2025-26 <ArrowRight size={16} />
                    </Link>
                    <a
                      href="/assets/brochure.pdf"
                      download
                      data-ocid="home.hero.download_brochure.button"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-sm"
                    >
                      <Download size={16} /> Download Brochure
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
          <button
            type="button"
            onClick={prevSlide}
            data-ocid="home.hero.prev.button"
            aria-label="Previous slide"
            className="pointer-events-auto w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            data-ocid="home.hero.next.button"
            aria-label="Next slide"
            className="pointer-events-auto w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-smooth backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_SLIDES.map((s, i) => (
            <button
              type="button"
              key={s.id}
              onClick={() => goToSlide(i, i > slide ? 1 : -1)}
              data-ocid={`home.hero.dot.${i + 1}`}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-smooth rounded-full ${i === slide ? "w-8 h-2 bg-secondary" : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"}`}
            />
          ))}
        </div>

        {/* Hero Stat Cards */}
        <div className="relative bottom-0 pb-0 overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-0"
            >
              {[
                {
                  icon: Award,
                  value: `${stats?.placementRate ?? 93.12}%`,
                  label: "Placements",
                  color: "text-secondary",
                },
                {
                  icon: TrendingUp,
                  value: `${stats?.avgPackageLPA ?? 3.25} LPA`,
                  label: "Avg Package",
                  color: "text-secondary",
                },
                {
                  icon: Users,
                  value: `${stats?.partnerCompanies ?? 350}+`,
                  label: "Partner Companies",
                  color: "text-accent",
                },
                {
                  icon: Globe,
                  value: `${stats?.internationalCollabs ?? 50}+`,
                  label: "Global Partners",
                  color: "text-accent",
                },
              ].map(({ icon: Icon, value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  data-ocid={`home.stat.item.${i + 1}`}
                  className="hero-card rounded-none first:rounded-tl-xl last:rounded-tr-xl text-center"
                >
                  <Icon size={26} className={`${color} mx-auto mb-2`} />
                  <div className={`font-display text-3xl font-bold ${color}`}>
                    {value}
                  </div>
                  <div className="text-primary-foreground/70 text-xs mt-1 uppercase tracking-wide">
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP with 3D Canvas ───────────────────────────────── */}
      <div
        className="relative bg-secondary text-secondary-foreground py-3 overflow-hidden"
        data-ocid="home.stat_strip.section"
      >
        {/* 3D animated background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <StatStripScene />
            </Canvas>
          </Suspense>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-secondary-foreground/25">
            {STAT_STRIP.map((s, i) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-5 py-0.5"
                data-ocid={`home.stat_strip.item.${i + 1}`}
              >
                <span className="font-display font-bold text-base">
                  {s.value}
                </span>
                <span className="text-secondary-foreground/75 text-xs font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ADMISSIONS BANNER ──────────────────────────────────────── */}
      <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-semibold">
        🎓 Admissions Open for 2025-26 Academic Year &nbsp;|&nbsp; Apply before
        May 30, 2025 &nbsp;
        <Link
          to="/admissions"
          data-ocid="home.admission_banner.apply.link"
          className="underline ml-2 hover:no-underline text-secondary"
        >
          Apply Now →
        </Link>
      </div>

      {/* ── HIGHLIGHTS ─────────────────────────────────────────────── */}
      <Section
        title="Why Choose Rathinam Group of Institutions?"
        subtitle="Four pillars that set us apart from every other college in Tamil Nadu"
        className="section-alt"
        centered
        data-ocid="home.highlights.section"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`home.highlight.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth"
            >
              <div
                className={`w-14 h-14 ${h.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <h.icon size={28} className={h.color} />
              </div>
              <h3 className={`font-display font-bold text-lg mb-2 ${h.color}`}>
                {h.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FEATURED COURSES with staggered animation ───────────────── */}
      <Section
        title="Academic Programs"
        subtitle="Industry-aligned programs designed to launch high-impact careers"
        data-ocid="home.courses.section"
      >
        <div
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          data-ocid="home.courses.list"
          style={{ scrollbarWidth: "none" }}
        >
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              data-ocid={`home.courses.item.${i + 1}`}
              className="snap-start flex-shrink-0 w-60 sm:w-72"
            >
              <Link
                to="/courses/$courseId"
                params={{ courseId: course.id }}
                className="group block"
              >
                <div className="course-card h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={course.badgeVariant}>
                        {course.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {course.seats}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base mb-1 group-hover:text-primary transition-smooth">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3">
                      {course.desc}
                    </p>
                    <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-smooth">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/courses"
            data-ocid="home.courses.view_all.link"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ── PLACEMENTS HIGHLIGHT ────────────────────────────────────── */}
      <section
        className="section-alt py-20"
        data-ocid="home.placements.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🚀 Outstanding Placement Record
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Our Students Get Hired by the Best
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Consistent placements at India's top companies and global brands.
              Average salary{" "}
              <span className="text-secondary font-bold">3.25 LPA</span>,
              highest <span className="text-secondary font-bold">58 LPA</span>.
            </p>
          </div>

          {/* Mega Stat Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                label: "Highest Package",
                value: `${stats?.highestPackageLPA ?? 58} LPA`,
                icon: "🚀",
                sub: "Google, 2024",
                color: "text-secondary",
                border: "border-secondary/30 bg-secondary/5",
              },
              {
                label: "Average Package",
                value: `${stats?.avgPackageLPA ?? 8.5} LPA`,
                icon: "📈",
                sub: "Across all batches",
                color: "text-primary",
                border: "border-primary/30 bg-primary/5",
              },
              {
                label: "Students Placed",
                value: `${stats?.totalStudentsPlaced?.toLocaleString() ?? "2,840"}+`,
                icon: "🎓",
                sub: "Class of 2024",
                color: "text-accent",
                border: "border-accent/30 bg-accent/5",
              },
              {
                label: "Placement Rate",
                value: `${stats?.placementRate ?? 93.12}%`,
                icon: "🏆",
                sub: "Rathinam Group 2024",
                color: "text-secondary",
                border: "border-secondary/30 bg-secondary/5",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`home.placement_stat.item.${i + 1}`}
                className={`stat-card border ${item.border}`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div
                  className={`font-display text-3xl font-bold ${item.color}`}
                >
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-foreground mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company cards with 3D hover effect */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card mb-8">
            <p className="text-center text-muted-foreground text-sm font-semibold mb-5 uppercase tracking-wider">
              Our Students Work At
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TOP_COMPANIES.map((c, i) => (
                <motion.div
                  key={c.name}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{
                    scale: 1.08,
                    rotateX: 6,
                    rotateY: 4,
                    z: 20,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                  data-ocid={`home.company.item.${i + 1}`}
                  className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-smooth cursor-default"
                >
                  <span className="font-display font-bold text-foreground text-sm">
                    {c.name}
                  </span>
                  <span className={`font-bold text-xs ${c.color}`}>
                    {c.package}
                  </span>
                </motion.div>
              ))}
              {topPlaced.map((c, i) => (
                <motion.div
                  key={`backend-${c.company}`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + TOP_COMPANIES.length) * 0.06 }}
                  whileHover={{
                    scale: 1.08,
                    rotateX: 6,
                    rotateY: 4,
                    z: 20,
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 rounded-xl border border-border hover:border-secondary/30 hover:bg-secondary/5 transition-smooth cursor-default"
                >
                  <span className="font-display font-bold text-foreground text-sm">
                    {c.company}
                  </span>
                  <span className="text-secondary font-bold text-xs">
                    {c.package}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/placements"
              data-ocid="home.view_placements.primary_button"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View Full Placement Record <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <Section
        title="What Our Students Say"
        subtitle="Success stories from Rathinam Group of Institutions alumni placed across India and the globe"
        data-ocid="home.testimonials.section"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              data-ocid={`home.testimonial.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth relative flex flex-col"
            >
              <div className="text-5xl text-secondary/20 font-display absolute top-3 right-5 select-none">
                "
              </div>
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={12}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary/30"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-secondary font-medium truncate">
                    {t.role} · {t.company}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.batch}</div>
                </div>
                <div className="ml-auto shrink-0">
                  <span className="placement-badge">{t.package}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── INTERNATIONAL with 3D Globe ──────────────────────────────── */}
      <Section
        title="Global Collaborations"
        subtitle="Study, research, and intern at our international partner universities"
        className="section-alt"
        centered
        data-ocid="home.international.section"
      >
        {/* 3D Globe + Partner Grid side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
          {/* Globe Canvas */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.85 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-72 lg:h-80 rounded-2xl overflow-hidden border border-border shadow-elevated bg-primary/10"
            data-ocid="home.globe.canvas"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <Globe size={48} className="text-primary/30 animate-pulse" />
                </div>
              }
            >
              <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
                <GlobeScene />
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Partner cards */}
          <div className="grid grid-cols-2 gap-4">
            {INT_PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, rotateX: 4, rotateY: 3 }}
                style={{ transformStyle: "preserve-3d", perspective: 600 }}
                data-ocid={`home.international.item.${i + 1}`}
                className="bg-card border border-border rounded-xl p-5 text-center shadow-card hover:shadow-elevated transition-smooth"
              >
                <div className="text-3xl mb-2">{p.country.split(" ")[0]}</div>
                <div className="font-display font-bold text-foreground text-sm">
                  {p.name}
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  {p.country.split(" ").slice(1).join(" ")}
                </div>
                <Badge variant="green" className="mt-2">
                  Partner University
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/international"
            data-ocid="home.international.primary_button"
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Global Programs <Globe size={16} />
          </Link>
        </div>
      </Section>

      {/* ── FACILITIES PREVIEW ───────────────────────────────────────── */}
      <section className="py-20" data-ocid="home.facilities.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">
                🏛️ World-Class Infrastructure
              </Badge>
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Facilities That Inspire Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Over 100 acres of lush campus in Eachanari, Coimbatore with
                state-of-the-art labs, smart classrooms, innovation hubs, sports
                facilities, and modern hostels for a complete campus experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "10+ Advanced Engineering & Research Labs",
                  "Smart Classrooms with IoT & AR Integration",
                  "Central Library with 50,000+ Volumes",
                  "Innovation & Incubation Centre (IIIC)",
                  "Sports Complex, Swimming Pool & Gymnasium",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckCircle size={16} className="text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/facilities"
                data-ocid="home.facilities.primary_button"
                className="btn-primary inline-flex items-center gap-2"
              >
                Explore Campus <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src="/assets/generated/students-computer-lab.dim_800x500.jpg"
                alt="Computer Lab"
                className="rounded-xl shadow-card w-full aspect-video object-cover"
              />
              <img
                src="/assets/generated/students-classroom.dim_800x500.jpg"
                alt="Smart Classroom"
                className="rounded-xl shadow-card w-full aspect-video object-cover mt-6"
              />
              <img
                src="/assets/generated/students-library.dim_800x500.jpg"
                alt="Library"
                className="rounded-xl shadow-card w-full aspect-video object-cover -mt-6"
              />
              <img
                src="/assets/generated/students-science-lab.dim_800x500.jpg"
                alt="Science Lab"
                className="rounded-xl shadow-card w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS & EVENTS ────────────────────────────────────────────── */}
      <Section
        title="News & Events"
        subtitle="Stay updated with the latest happenings at Rathinam Group of Institutions"
        className="section-alt"
        data-ocid="home.news.section"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {NEWS.map((n, i) => (
            <motion.article
              key={n.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              data-ocid={`home.news.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${n.catBg} ${n.catColor} border border-current/20`}
                  >
                    {n.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={11} /> {n.date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                  {n.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {n.excerpt}
                </p>
                <span className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-smooth">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/about"
            data-ocid="home.news.view_all.link"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Building2 size={16} /> View All News & Events
          </Link>
        </div>
      </Section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section
        className="bg-gradient-primary py-16"
        data-ocid="home.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
          >
            Your Dream Career Starts Here
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg mb-3"
          >
            Join 2,800+ students who landed placements at top companies with
            packages up to{" "}
            <span className="text-secondary font-bold">42 LPA</span>
          </motion.p>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Rathinam Group of Institutions, Eachanari, Coimbatore
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/admissions"
              data-ocid="home.cta.apply_now.primary_button"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <a
              href="/assets/brochure.pdf"
              download
              data-ocid="home.cta.download_brochure.button"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth"
            >
              <Download size={18} /> Download Brochure
            </a>
            <Link
              to="/contact"
              data-ocid="home.cta.contact.secondary_button"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth"
            >
              Talk to Counsellor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
