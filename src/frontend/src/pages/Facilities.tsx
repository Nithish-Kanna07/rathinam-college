import { RoundedBox, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Building2,
  Coffee,
  Cpu,
  Dumbbell,
  Heart,
  Home,
  Mic2,
  Monitor,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Suspense, useRef, useState } from "react";
import type * as THREE from "three";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FacilityStat {
  value: string;
  label: string;
}

interface FacilityPhoto {
  src: string;
  alt: string;
}

interface FacilityData {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  stats: FacilityStat[];
  photos: FacilityPhoto[];
  accentFrom: string;
  accentTo: string;
  color3d: string;
  emoji: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FACILITIES: FacilityData[] = [
  {
    id: "computer-labs",
    icon: <Monitor size={26} />,
    emoji: "💻",
    title: "Computer Labs",
    tagline: "Cutting-edge computing infrastructure",
    description:
      "10 fully air-conditioned computer labs housing 500+ workstations with 1:1 student-to-computer ratio, powered by latest Intel i7 processors, 32 GB RAM, SSD storage, and dedicated GPUs. Round-the-clock access with 1 Gbps high-speed internet connectivity. Equipped with licensed software suites — Microsoft Azure, AutoCAD, MATLAB, and more.",
    stats: [
      { value: "10", label: "Labs" },
      { value: "500+", label: "Workstations" },
      { value: "1:1", label: "Student Ratio" },
      { value: "24/7", label: "Access" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-lab-comp-1/700/420",
        alt: "Computer lab with modern workstations",
      },
      {
        src: "https://picsum.photos/seed/rc-lab-comp-2/700/420",
        alt: "Students working in computer lab",
      },
      {
        src: "https://picsum.photos/seed/rc-lab-comp-3/700/420",
        alt: "Advanced computing workstation row",
      },
    ],
    accentFrom: "oklch(0.34 0.14 250)",
    accentTo: "oklch(0.44 0.16 260)",
    color3d: "#3b82f6",
  },
  {
    id: "electronics-labs",
    icon: <Cpu size={26} />,
    emoji: "🤖",
    title: "Electronics & Robotics",
    tagline: "Innovate, prototype, and build the future",
    description:
      "State-of-the-art EEE/ECE laboratories featuring 200+ advanced IoT instruments, industrial-grade robotics kits, 3D printers, oscilloscopes, spectrum analyzers, and embedded system workbenches. Students gain hands-on exposure to VLSI design, PCB fabrication, and autonomous robotics systems. Tie-ups with ABB Robotics and Texas Instruments.",
    stats: [
      { value: "8", label: "Specialised Labs" },
      { value: "200+", label: "Instruments" },
      { value: "12+", label: "3D Printers" },
      { value: "50+", label: "Robots" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-elec-1/700/420",
        alt: "Robotics lab with robot arms",
      },
      {
        src: "https://picsum.photos/seed/rc-elec-2/700/420",
        alt: "Electronics workbench with testing equipment",
      },
      {
        src: "https://picsum.photos/seed/rc-elec-3/700/420",
        alt: "Students assembling IoT project",
      },
    ],
    accentFrom: "oklch(0.58 0.18 30)",
    accentTo: "oklch(0.68 0.2 45)",
    color3d: "#f97316",
  },
  {
    id: "library",
    icon: <BookOpen size={26} />,
    emoji: "📚",
    title: "Library & Knowledge Centre",
    tagline: "A universe of knowledge at your fingertips",
    description:
      "The Rathinam Group of Institutions Knowledge Centre houses 1 lakh+ books, 200+ national and international journals, and provides digital library access to over 50,000 e-resources including EBSCO, IEEE Xplore, and Springer. Three dedicated reading halls with a combined seating capacity of 500 offer a serene study environment, open until midnight.",
    stats: [
      { value: "1 Lakh+", label: "Books" },
      { value: "100+", label: "Journals" },
      { value: "50,000+", label: "E-Resources" },
      { value: "500", label: "Reading Seats" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-lib-1/700/420",
        alt: "Central library with towering book stacks",
      },
      {
        src: "https://picsum.photos/seed/rc-lib-2/700/420",
        alt: "Digital resource center terminals",
      },
      {
        src: "https://picsum.photos/seed/rc-lib-3/700/420",
        alt: "Students reading quietly in library hall",
      },
    ],
    accentFrom: "oklch(0.34 0.14 250)",
    accentTo: "oklch(0.52 0.16 120)",
    color3d: "#8b5cf6",
  },
  {
    id: "sports",
    icon: <Dumbbell size={26} />,
    emoji: "🏆",
    title: "Sports & Recreation",
    tagline: "Champions are built here",
    description:
      "World-class sports infrastructure including a FIFA-grade football ground, Olympic-standard swimming pool, international-standard basketball & volleyball courts, a regulation cricket ground, and a 400-metre athletic track. Indoor facilities include TT hall, chess room, and squash courts. Professional coaches mentor students for national competitions.",
    stats: [
      { value: "FIFA-Grade", label: "Football Ground" },
      { value: "Olympic", label: "Pool Standard" },
      { value: "400m", label: "Athletic Track" },
      { value: "30+", label: "Trophies/Year" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-sports-1/700/420",
        alt: "Cricket ground with pavilion",
      },
      {
        src: "https://picsum.photos/seed/rc-sports-2/700/420",
        alt: "Basketball court with students playing",
      },
      {
        src: "https://picsum.photos/seed/rc-sports-3/700/420",
        alt: "Gymnasium with modern fitness equipment",
      },
    ],
    accentFrom: "oklch(0.54 0.2 125)",
    accentTo: "oklch(0.64 0.18 135)",
    color3d: "#22c55e",
  },
  {
    id: "hostel",
    icon: <Home size={26} />,
    emoji: "🏠",
    title: "Hostel Facilities",
    tagline: "Your home away from home",
    description:
      "Comfortable and secure separate hostels for boys and girls with a combined capacity of 2,000+ residents offering both AC and non-AC rooms. Furnished twin-sharing rooms with attached bathrooms, 24/7 Wi-Fi, round-the-clock CCTV surveillance, in-campus security, well-equipped common rooms, laundry services, and a dedicated warden team.",
    stats: [
      { value: "2,000+", label: "Capacity" },
      { value: "AC/Non-AC", label: "Room Options" },
      { value: "24/7", label: "Security" },
      { value: "Wi-Fi", label: "All Rooms" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-hostel-1/700/420",
        alt: "Hostel building exterior with greenery",
      },
      {
        src: "https://picsum.photos/seed/rc-hostel-2/700/420",
        alt: "Furnished hostel twin-sharing room",
      },
      {
        src: "https://picsum.photos/seed/rc-hostel-3/700/420",
        alt: "Hostel common room with students relaxing",
      },
    ],
    accentFrom: "oklch(0.52 0.16 120)",
    accentTo: "oklch(0.34 0.14 250)",
    color3d: "#14b8a6",
  },
  {
    id: "smart-classrooms",
    icon: <Building2 size={26} />,
    emoji: "🏫",
    title: "Smart Classrooms",
    tagline: "Interactive learning for the digital age",
    description:
      "150+ fully air-conditioned smart classrooms equipped with 4K laser projectors, interactive whiteboards, Dolby-quality sound systems, and individual student response pads. Real-time collaboration tools, digital lecture recording, and live streaming to remote students make every class immersive and future-ready.",
    stats: [
      { value: "150+", label: "Smart Rooms" },
      { value: "100%", label: "AC Enabled" },
      { value: "4K", label: "Projectors" },
      { value: "8,000+", label: "Seating" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-class-1/700/420",
        alt: "Smart classroom with interactive whiteboard",
      },
      {
        src: "https://picsum.photos/seed/rc-class-2/700/420",
        alt: "Students in modern lecture hall",
      },
      {
        src: "https://picsum.photos/seed/rc-class-3/700/420",
        alt: "Digital learning environment overhead view",
      },
    ],
    accentFrom: "oklch(0.52 0.16 120)",
    accentTo: "oklch(0.42 0.18 135)",
    color3d: "#ef4444",
  },
];

// 6 showcased facilities for 3D scene
const SHOWCASE_FACILITIES = FACILITIES.slice(0, 6);

// ─── 3D Box Mesh ───────────────────────────────────────────────────────────────
interface Box3DProps {
  position: [number, number, number];
  color: string;
  label: string;
  emoji: string;
  isActive: boolean;
  onClick: () => void;
  onHover: (v: boolean) => void;
  index: number;
}

function FacilityBox({
  position,
  color,
  label,
  isActive,
  onClick,
  onHover,
  index,
}: Box3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y += 0.008;
    meshRef.current.rotation.x = Math.sin(t * 0.5 + index) * 0.08;
    const targetY = position[1] + Math.sin(t * 0.7 + index * 1.2) * 0.12;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    const targetScale = isActive ? 1.22 : hovered ? 1.1 : 1;
    meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.12;
    meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.12;
    meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.12;
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[1.4, 1.4, 1.4]}
        radius={0.15}
        smoothness={4}
        onClick={onClick}
        onPointerOver={() => {
          setHovered(true);
          onHover(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(false);
        }}
      >
        <meshPhongMaterial
          color={isActive ? color : hovered ? color : color}
          emissive={isActive ? color : hovered ? color : "#000000"}
          emissiveIntensity={isActive ? 0.45 : hovered ? 0.2 : 0}
          shininess={isActive ? 90 : 60}
          opacity={isActive ? 1 : hovered ? 0.95 : 0.82}
          transparent
        />
      </RoundedBox>
      {/* label under box */}
      <Text
        position={[0, -1.1, 0]}
        fontSize={0.18}
        color={isActive ? "#ffffff" : "#cccccc"}
        anchorX="center"
        anchorY="middle"
        maxWidth={1.6}
        textAlign="center"
      >
        {label}
      </Text>
    </group>
  );
}

// ─── 3D Scene ─────────────────────────────────────────────────────────────────
function Scene({
  activeIdx,
  setActiveIdx,
}: { activeIdx: number; setActiveIdx: (i: number) => void }) {
  // Circular arrangement for 6 boxes
  const radius = 3.2;
  const positions: [number, number, number][] = SHOWCASE_FACILITIES.map(
    (_, i) => {
      const angle =
        (i / SHOWCASE_FACILITIES.length) * Math.PI * 2 - Math.PI / 2;
      return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
    },
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 8, 5]} intensity={80} color="#ffffff" />
      <pointLight position={[-6, 4, -4]} intensity={50} color="#a78bfa" />
      <pointLight position={[0, -4, 6]} intensity={40} color="#fb923c" />
      {SHOWCASE_FACILITIES.map((fac, i) => (
        <FacilityBox
          key={fac.id}
          position={positions[i]}
          color={fac.color3d}
          label={fac.title}
          emoji={fac.emoji}
          isActive={activeIdx === i}
          index={i}
          onClick={() => setActiveIdx(i)}
          onHover={() => {}}
        />
      ))}
    </>
  );
}

// ─── Mobile Grid ──────────────────────────────────────────────────────────────
function MobileShowcaseGrid({
  activeIdx,
  setActiveIdx,
}: { activeIdx: number; setActiveIdx: (i: number) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {SHOWCASE_FACILITIES.map((fac, i) => (
        <button
          key={fac.id}
          type="button"
          onClick={() => setActiveIdx(i)}
          data-ocid={`facilities.3d.mobile.${fac.id}.button`}
          className={`flex flex-col items-center gap-2 rounded-2xl p-4 border-2 transition-smooth font-semibold text-sm ${
            activeIdx === i
              ? "border-primary bg-primary/10 text-primary shadow-elevated"
              : "border-border bg-card text-foreground hover:border-primary/50"
          }`}
        >
          <span className="text-3xl">{fac.emoji}</span>
          <span className="leading-tight text-center">{fac.title}</span>
        </button>
      ))}
    </div>
  );
}

// ─── 3D Showcase Section ──────────────────────────────────────────────────────
function FacilityShowcase3D() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeFacility = SHOWCASE_FACILITIES[activeIdx];

  return (
    <section
      data-ocid="facilities.3d.section"
      className="bg-gradient-to-br from-[oklch(0.12_0.04_250)] via-[oklch(0.16_0.06_260)] to-[oklch(0.14_0.05_245)] py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold rounded-full uppercase tracking-widest mb-3">
            Interactive 3D Tour
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Explore Our{" "}
            <span className="text-gradient-orange">World-Class</span> Facilities
          </h2>
          <p className="text-white/60 mt-2 text-sm">
            Click on any cube to explore — Rathinam Group of Institutions,
            Eachanari, Coimbatore
          </p>
        </div>

        {/* Desktop: 3D Canvas */}
        <div className="hidden md:block relative">
          <div
            className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-elevated"
            style={{ height: "460px" }}
            data-ocid="facilities.3d.canvas"
          >
            <Canvas
              camera={{ position: [0, 2.5, 10], fov: 55 }}
              gl={{ antialias: true }}
              style={{ background: "transparent" }}
            >
              <Suspense fallback={null}>
                <Scene activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
              </Suspense>
            </Canvas>
          </div>

          {/* Dot nav */}
          <div className="flex justify-center gap-2 mt-4">
            {SHOWCASE_FACILITIES.map((fac, i) => (
              <button
                key={fac.id}
                type="button"
                onClick={() => setActiveIdx(i)}
                data-ocid={`facilities.3d.dot.${i + 1}`}
                aria-label={`Select ${fac.title}`}
                className={`w-2.5 h-2.5 rounded-full transition-smooth ${
                  activeIdx === i
                    ? "bg-secondary scale-125"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="md:hidden">
          <MobileShowcaseGrid
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFacility.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8"
            data-ocid="facilities.3d.detail_panel"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-elevated text-3xl"
                style={{
                  background: `linear-gradient(135deg, ${activeFacility.accentFrom}, ${activeFacility.accentTo})`,
                }}
              >
                {activeFacility.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
                  {activeFacility.title}
                </h3>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">
                  {activeFacility.tagline}
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {activeFacility.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {activeFacility.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center bg-white/10 border border-white/15 rounded-xl px-4 py-3 min-w-[72px]"
                    >
                      <span className="font-display font-bold text-secondary text-lg leading-none">
                        {stat.value}
                      </span>
                      <span className="text-white/50 text-[10px] mt-1 text-center leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function StatPill({ value, label }: FacilityStat) {
  return (
    <div className="flex flex-col items-center justify-center bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 min-w-[76px]">
      <span className="font-display font-bold text-xl text-primary leading-none">
        {value}
      </span>
      <span className="text-muted-foreground text-[11px] mt-1 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

function PhotoCard({ photo, eager }: { photo: FacilityPhoto; eager: boolean }) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-card border border-border aspect-video bg-muted group"
      style={{ perspective: "800px" }}
    >
      <div
        className="w-full h-full transition-all duration-300"
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform =
            "rotateY(4deg) rotateX(-3deg) scale(1.03)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform =
            "rotateY(0deg) rotateX(0deg) scale(1)";
        }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function FacilitySection({
  facility,
  index,
}: { facility: FacilityData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      id={facility.id}
      data-ocid={`facilities.${facility.id}.section`}
      className={`py-16 scroll-mt-[110px] ${isEven ? "bg-background" : "bg-muted/30"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <motion.div
            className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-elevated"
            style={{
              background: `linear-gradient(135deg, ${facility.accentFrom}, ${facility.accentTo})`,
            }}
            whileHover={{ scale: 1.1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {facility.icon}
          </motion.div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-0.5">
              Campus Facility
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {facility.title}
            </h2>
            <p className="text-muted-foreground text-sm mt-0.5">
              {facility.tagline}
            </p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Description + stats */}
          <motion.div
            className={`lg:col-span-2 ${!isEven ? "lg:order-2" : ""}`}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-foreground/80 text-base leading-relaxed mb-7">
              {facility.description}
            </p>
            <div
              className="flex flex-wrap gap-3"
              data-ocid={`facilities.${facility.id}.stats`}
            >
              {facility.stats.map((stat, si) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + si * 0.08 }}
                >
                  <StatPill value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo grid with perspective tilt */}
          <motion.div
            className={`lg:col-span-3 ${!isEven ? "lg:order-1" : ""}`}
            data-ocid={`facilities.${facility.id}.photos`}
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {facility.photos.length === 2 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facility.photos.map((photo) => (
                  <PhotoCard key={photo.src} photo={photo} eager={index < 2} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <PhotoCard photo={facility.photos[0]} eager={index < 2} />
                </div>
                <PhotoCard photo={facility.photos[1]} eager={index < 2} />
                <PhotoCard photo={facility.photos[2]} eager={false} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Extended facilities (not in 3D showcase)
const EXTRA_FACILITIES: FacilityData[] = [
  {
    id: "cafeteria",
    icon: <Coffee size={26} />,
    emoji: "☕",
    title: "Cafeteria & Dining",
    tagline: "Fuel your ambitions with nutritious meals",
    description:
      "Three spacious cafeterias serving over 5,000 students daily with hygienic, nutritionally balanced, and subsidized meals. Multiple cuisine options including South Indian, North Indian, and fast food counters. FSSAI-certified kitchens, certified food handlers, regular quality audits, and RO-purified drinking water throughout the campus.",
    stats: [
      { value: "3", label: "Cafeterias" },
      { value: "5,000+", label: "Students/Day" },
      { value: "FSSAI", label: "Certified" },
      { value: "₹35", label: "Avg Meal" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-cafe-1/700/420",
        alt: "Main cafeteria dining hall full of students",
      },
      {
        src: "https://picsum.photos/seed/rc-cafe-2/700/420",
        alt: "Food counters with variety of options",
      },
      {
        src: "https://picsum.photos/seed/rc-cafe-3/700/420",
        alt: "Students enjoying fresh meals together",
      },
    ],
    accentFrom: "oklch(0.58 0.18 30)",
    accentTo: "oklch(0.34 0.14 250)",
    color3d: "#f59e0b",
  },
  {
    id: "auditorium",
    icon: <Mic2 size={26} />,
    emoji: "🎭",
    title: "Auditorium & Seminar Halls",
    tagline: "Where ideas meet inspiration",
    description:
      "A grand 2,000-seat air-conditioned main auditorium equipped with state-of-the-art Dolby surround sound, high-definition LED displays, professional stage lighting, and full HD video streaming capabilities. Five additional seminar halls with capacities from 100 to 500 seats, ideal for workshops, industry conferences, and cultural events.",
    stats: [
      { value: "2,000", label: "Main Hall Seats" },
      { value: "5", label: "Seminar Halls" },
      { value: "Dolby", label: "Sound System" },
      { value: "HD", label: "Live Streaming" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-audi-1/700/420",
        alt: "Main auditorium stage with professional lighting",
      },
      {
        src: "https://picsum.photos/seed/rc-audi-2/700/420",
        alt: "Seminar hall with conference setup",
      },
      {
        src: "https://picsum.photos/seed/rc-audi-3/700/420",
        alt: "Cultural event performance in auditorium",
      },
    ],
    accentFrom: "oklch(0.34 0.14 250)",
    accentTo: "oklch(0.58 0.18 30)",
    color3d: "#ec4899",
  },
  {
    id: "medical",
    icon: <Heart size={26} />,
    emoji: "🏥",
    title: "Medical Centre",
    tagline: "Your health is our priority",
    description:
      "A fully equipped 24/7 on-campus medical centre staffed by 2 qualified doctors, 5 trained nurses, and paramedical support staff. Immediate first-aid facilities, in-house pharmacy, diagnostic equipment, and a dedicated ambulance service with tie-ups to three major hospitals in Coimbatore. Annual health check-up camps and mental health counselling sessions.",
    stats: [
      { value: "24/7", label: "Open Always" },
      { value: "2", label: "Doctors" },
      { value: "5", label: "Nurses" },
      { value: "1", label: "Ambulance" },
    ],
    photos: [
      {
        src: "https://picsum.photos/seed/rc-medical-1/700/420",
        alt: "Medical centre reception area",
      },
      {
        src: "https://picsum.photos/seed/rc-medical-2/700/420",
        alt: "Doctor consulting a student patient",
      },
    ],
    accentFrom: "oklch(0.58 0.2 22)",
    accentTo: "oklch(0.58 0.18 30)",
    color3d: "#ef4444",
  },
];

const ALL_FACILITIES = [...FACILITIES, ...EXTRA_FACILITIES];

// ─── Quick-nav tabs ─────────────────────────────────────────────────────────
function QuickNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-[65px] z-30 bg-card border-b border-border shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-1.5 overflow-x-auto py-3"
          style={{ scrollbarWidth: "none" }}
        >
          {ALL_FACILITIES.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => scrollTo(f.id)}
              data-ocid={`facilities.quicknav.${f.id}.button`}
              className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth whitespace-nowrap"
            >
              <span>{f.emoji}</span>
              {f.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FacilitiesPage() {
  return (
    <div data-ocid="facilities.page">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div className="relative h-[340px] md:h-[440px] overflow-hidden">
        <img
          src="https://picsum.photos/seed/rathinam-campus-aerial/1400/440"
          alt="Rathinam Group of Institutions Campus Panorama"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/72 to-primary/30" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest">
                World-Class Infrastructure
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
              Campus <span className="text-gradient-orange">Facilities</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-2">
              Rathinam Group of Institutions, Eachanari, Coimbatore — 50+ acres
              of state-of-the-art infrastructure designed to inspire learning,
              innovation, and holistic development.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { value: "50+ Acres", label: "Campus" },
              { value: "9+", label: "Facility Categories" },
              { value: "25,000+", label: "Students" },
              { value: "NAAC A+", label: "Accredited" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2"
              >
                <span className="font-display font-bold text-secondary text-sm whitespace-nowrap">
                  {s.value}
                </span>
                <span className="text-white/70 text-xs whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Quick Nav ────────────────────────────────────────────────────── */}
      <QuickNav />

      {/* ── Highlights Strip ─────────────────────────────────────────────── */}
      <div
        className="bg-primary py-10"
        data-ocid="facilities.highlights.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-primary-foreground/60 text-xs uppercase tracking-widest font-bold mb-6">
            Rathinam Group of Institutions — At a Glance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: <Monitor size={20} />,
                label: "500+ Workstations",
                sub: "Computer Labs",
              },
              {
                icon: <BookOpen size={20} />,
                label: "1 Lakh+ Books",
                sub: "Knowledge Centre",
              },
              {
                icon: <Building2 size={20} />,
                label: "150+ Smart Rooms",
                sub: "Classrooms",
              },
              {
                icon: <Home size={20} />,
                label: "2,000+ Beds",
                sub: "AC/Non-AC Hostel",
              },
              {
                icon: <Mic2 size={20} />,
                label: "2,000-Seat Hall",
                sub: "Auditorium",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-4 text-primary-foreground"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-secondary">{item.icon}</span>
                <span className="text-sm font-bold text-center leading-tight">
                  {item.label}
                </span>
                <span className="text-xs text-primary-foreground/50">
                  {item.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3D Interactive Facility Showcase ─────────────────────────────── */}
      <FacilityShowcase3D />

      {/* ── All Facility Sections ─────────────────────────────────────────── */}
      {ALL_FACILITIES.map((facility, index) => (
        <FacilitySection key={facility.id} facility={facility} index={index} />
      ))}

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section
        data-ocid="facilities.cta.section"
        className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest mb-5">
              Visit Our Campus
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Experience it{" "}
              <span className="text-gradient-orange">in person</span>
            </h2>
            <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Words and photos only tell part of the story. Schedule a campus
              tour at Rathinam Group of Institutions, Eachanari, Coimbatore and
              walk through our world-class facilities for yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/admissions"
                data-ocid="facilities.cta.apply_button"
                className="px-8 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:shadow-card hover:scale-105 transition-smooth text-base"
              >
                Apply for Admission
              </Link>
              <Link
                to="/contact"
                data-ocid="facilities.cta.tour_button"
                className="px-8 py-3.5 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/10 transition-smooth text-base"
              >
                Book a Campus Tour
              </Link>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-secondary" />
                Tours available Mon–Sat, 9 AM – 5 PM
              </span>
              <span className="hidden sm:block w-px h-4 bg-primary-foreground/20" />
              <span className="flex items-center gap-2">
                <Heart size={14} className="text-secondary" />
                No prior appointment needed
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
