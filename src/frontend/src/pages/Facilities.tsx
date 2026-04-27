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
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FACILITIES: FacilityData[] = [
  {
    id: "computer-labs",
    icon: <Monitor size={26} />,
    title: "Computer Labs",
    tagline: "Cutting-edge computing infrastructure",
    description:
      "10 fully air-conditioned computer labs housing 500+ workstations powered by latest Intel i7 processors, 32 GB RAM, SSD storage, and dedicated GPUs. Round-the-clock access with 1 Gbps high-speed internet connectivity. Equipped with licensed software suites for engineering, design, and development — Microsoft Azure, AutoCAD, MATLAB, and more.",
    stats: [
      { value: "10", label: "Labs" },
      { value: "500+", label: "Workstations" },
      { value: "1 Gbps", label: "Internet" },
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
  },
  {
    id: "electronics-labs",
    icon: <Cpu size={26} />,
    title: "Electronics & Robotics Labs",
    tagline: "Innovate, prototype, and build the future",
    description:
      "State-of-the-art EEE/ECE laboratories featuring advanced IoT equipment, industrial-grade robotics kits, 3D printers, oscilloscopes, spectrum analyzers, and embedded system workbenches. Students gain hands-on exposure to VLSI design, PCB fabrication, and autonomous robotics systems. Tie-ups with ABB Robotics and Texas Instruments.",
    stats: [
      { value: "8", label: "Specialised Labs" },
      { value: "12+", label: "3D Printers" },
      { value: "200+", label: "IoT Kits" },
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
  },
  {
    id: "smart-classrooms",
    icon: <Building2 size={26} />,
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
  },
  {
    id: "library",
    icon: <BookOpen size={26} />,
    title: "Library & Knowledge Centre",
    tagline: "A universe of knowledge at your fingertips",
    description:
      "The Rathinam Knowledge Centre houses 1 lakh+ books, 200+ national and international journals, and provides digital library access to over 50,000 e-resources including EBSCO, IEEE Xplore, and Springer. Three dedicated reading halls with a combined seating capacity of 500 offer a serene study environment, open until midnight.",
    stats: [
      { value: "1 Lakh+", label: "Books" },
      { value: "200+", label: "Journals" },
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
  },
  {
    id: "sports",
    icon: <Dumbbell size={26} />,
    title: "Sports & Recreation",
    tagline: "Champions are built here",
    description:
      "World-class sports infrastructure including international-standard basketball courts, volleyball courts, a regulation cricket ground, a 400-metre athletic track, and a fully equipped gymnasium. Indoor facilities include a TT hall, chess room, carrom arena, and squash courts. Professional coaches mentor students for inter-collegiate and national competitions.",
    stats: [
      { value: "15+", label: "Sports" },
      { value: "5", label: "Outdoor Courts" },
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
    accentFrom: "oklch(0.58 0.18 30)",
    accentTo: "oklch(0.52 0.16 120)",
  },
  {
    id: "cafeteria",
    icon: <Coffee size={26} />,
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
  },
  {
    id: "hostel",
    icon: <Home size={26} />,
    title: "Hostel Facilities",
    tagline: "Your home away from home",
    description:
      "Comfortable and secure separate hostels for boys and girls with a combined capacity of 2,000+ residents. Furnished twin-sharing rooms with attached bathrooms, 24/7 Wi-Fi, round-the-clock CCTV surveillance, in-campus security personnel, well-equipped common rooms, laundry services, and a dedicated warden team ensuring safety and wellbeing.",
    stats: [
      { value: "2,000+", label: "Capacity" },
      { value: "24/7", label: "Security" },
      { value: "Wi-Fi", label: "All Rooms" },
      { value: "2", label: "Blocks" },
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
  },
  {
    id: "auditorium",
    icon: <Mic2 size={26} />,
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
  },
  {
    id: "medical",
    icon: <Heart size={26} />,
    title: "Medical Centre",
    tagline: "Your health is our priority",
    description:
      "A fully equipped 24/7 on-campus medical centre staffed by 2 qualified doctors, 5 trained nurses, and paramedical support staff. Immediate first-aid facilities, in-house pharmacy, diagnostic equipment, and a dedicated ambulance service with tie-ups to three major hospitals in Coimbatore. Annual health check-up camps and mental health counselling sessions for all students.",
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
  },
];

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

function PhotoCard({
  photo,
  eager,
}: {
  photo: FacilityPhoto;
  eager: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-card border border-border aspect-video bg-muted group">
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        className="w-full h-full object-cover transition-smooth group-hover:scale-105"
      />
    </div>
  );
}

function FacilitySection({
  facility,
  index,
}: {
  facility: FacilityData;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={facility.id}
      data-ocid={`facilities.${facility.id}.section`}
      className={`py-16 scroll-mt-[110px] ${isEven ? "bg-background" : "bg-muted/30"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div
            className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-elevated"
            style={{
              background: `linear-gradient(135deg, ${facility.accentFrom}, ${facility.accentTo})`,
            }}
          >
            {facility.icon}
          </div>
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

        {/* Content grid: text + photos alternating */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Description + stats */}
          <div className={`lg:col-span-2 ${!isEven ? "lg:order-2" : ""}`}>
            <p className="text-foreground/80 text-base leading-relaxed mb-7">
              {facility.description}
            </p>
            <div
              className="flex flex-wrap gap-3"
              data-ocid={`facilities.${facility.id}.stats`}
            >
              {facility.stats.map((stat) => (
                <StatPill
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* Photo grid */}
          <div
            className={`lg:col-span-3 ${!isEven ? "lg:order-1" : ""}`}
            data-ocid={`facilities.${facility.id}.photos`}
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
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quick-nav tabs ────────────────────────────────────────────────────────────
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
          {FACILITIES.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => scrollTo(f.id)}
              data-ocid={`facilities.quicknav.${f.id}.button`}
              className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth whitespace-nowrap"
            >
              <span className="text-foreground/50">{getSmallIcon(f.id)}</span>
              {f.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getSmallIcon(id: string) {
  const icons: Record<string, React.ReactNode> = {
    "computer-labs": <Monitor size={12} />,
    "electronics-labs": <Cpu size={12} />,
    "smart-classrooms": <Building2 size={12} />,
    library: <BookOpen size={12} />,
    sports: <Dumbbell size={12} />,
    cafeteria: <Coffee size={12} />,
    hostel: <Home size={12} />,
    auditorium: <Mic2 size={12} />,
    medical: <Heart size={12} />,
  };
  return icons[id] ?? null;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FacilitiesPage() {
  return (
    <div data-ocid="facilities.page">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div className="relative h-[340px] md:h-[440px] overflow-hidden">
        <img
          src="https://picsum.photos/seed/rathinam-campus-aerial/1400/440"
          alt="Rathinam College Campus Panorama"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/72 to-primary/30" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mb-3">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest">
              World-Class Infrastructure
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            Campus <span className="text-gradient-orange">Facilities</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-6">
            50+ acres of state-of-the-art infrastructure meticulously designed
            to inspire learning, innovation, and holistic development.
          </p>

          {/* Hero quick stats */}
          <div className="flex flex-wrap gap-3">
            {[
              { value: "50+ Acres", label: "Campus" },
              { value: "9", label: "Facility Categories" },
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
          </div>
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
            At a Glance
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
              { icon: <Home size={20} />, label: "2,000+ Beds", sub: "Hostel" },
              {
                icon: <Mic2 size={20} />,
                label: "2,000-Seat Hall",
                sub: "Auditorium",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-4 text-primary-foreground"
              >
                <span className="text-secondary">{item.icon}</span>
                <span className="text-sm font-bold text-center leading-tight">
                  {item.label}
                </span>
                <span className="text-xs text-primary-foreground/50">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── All Facility Sections ─────────────────────────────────────────── */}
      {FACILITIES.map((facility, index) => (
        <FacilitySection key={facility.id} facility={facility} index={index} />
      ))}

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section
        data-ocid="facilities.cta.section"
        className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest mb-5">
            Visit Our Campus
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Experience it{" "}
            <span className="text-gradient-orange">in person</span>
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Words and photos only tell part of the story. Schedule a campus tour
            and walk through our world-class facilities for yourself.
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

          {/* Info strip */}
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
        </div>
      </section>
    </div>
  );
}
