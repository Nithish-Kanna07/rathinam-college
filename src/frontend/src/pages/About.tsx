import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Download,
  Globe2,
  GraduationCap,
  Lightbulb,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Badge } from "../components/CollegeBadge";
import { Section } from "../components/Section";

const TIMELINE = [
  {
    year: "1994",
    event:
      "Rathinam Group of Institutions founded at Eachanari, Coimbatore with a vision to provide world-class education.",
    color: "bg-primary",
    icon: "🎓",
  },
  {
    year: "1998",
    event:
      "First batch of graduates placed with outstanding results. Campus expansion begins to accommodate growing student strength.",
    color: "bg-secondary",
    icon: "🏆",
  },
  {
    year: "2003",
    event:
      "Granted Autonomous Status by Anna University — enabling the institution to frame its own industry-aligned syllabus.",
    color: "bg-accent",
    icon: "📜",
  },
  {
    year: "2008",
    event:
      "ISO 9001:2015 Certification for quality management. International MOU signed with UWE Bristol, UK.",
    color: "bg-primary",
    icon: "🌍",
  },
  {
    year: "2014",
    event:
      "NAAC awarded prestigious 'A' Grade after rigorous peer review. NBA Accreditation secured for Engineering programs.",
    color: "bg-secondary",
    icon: "⭐",
  },
  {
    year: "2018",
    event:
      "Upgraded to NAAC 'A+' Grade — highest distinction. Smart Campus initiative launched with IoT-enabled infrastructure.",
    color: "bg-accent",
    icon: "💡",
  },
  {
    year: "2020",
    event:
      "Smart Campus transformation completed. Over 10,000 students enrolled; hybrid learning infrastructure deployed.",
    color: "bg-primary",
    icon: "🖥️",
  },
  {
    year: "2024",
    event:
      "NAAC A++ Accreditation and 30 Years of Excellence. Highest placement package at 42 LPA. 15,000+ students across UG, PG, MBA, MCA programs.",
    color: "bg-secondary",
    icon: "🚀",
  },
];

const LEADERSHIP = [
  {
    name: "Dr. R. Krishnamoorthi",
    role: "Principal",
    qualification: "PhD, IIT Madras",
    experience: "30 Years Experience",
    image: "https://i.pravatar.cc/300?img=52",
    quote:
      "We shape not just professionals but responsible global citizens who lead with integrity and innovation.",
    dept: "Institution Head",
  },
  {
    name: "Dr. Priya Nair",
    role: "Dean of Academics",
    qualification: "PhD, Anna University",
    experience: "22 Years Experience",
    image: "https://i.pravatar.cc/300?img=47",
    quote:
      "Every student deserves personalized mentorship and access to world-class research resources.",
    dept: "Academics & Research",
  },
  {
    name: "Prof. S. Venkatesh",
    role: "Head – Engineering",
    qualification: "M.Tech, NIT Trichy",
    experience: "18 Years Experience",
    image: "https://i.pravatar.cc/300?img=57",
    quote:
      "Our engineering programs bridge the gap between theoretical knowledge and industrial application.",
    dept: "Engineering & Technology",
  },
  {
    name: "Dr. Meena Rajendran",
    role: "Head – Management",
    qualification: "PhD, IIM Bangalore",
    experience: "20 Years Experience",
    image: "https://i.pravatar.cc/300?img=45",
    quote:
      "Management education must empower students to think strategically and act ethically in global markets.",
    dept: "Management Studies",
  },
];

const ACCREDITATIONS = [
  {
    name: "NAAC A++",
    sub: "2024 Highest Grade",
    color: "border-primary bg-primary/5 text-primary",
  },
  {
    name: "NIRF",
    sub: "Top 100 Ranking",
    color: "border-secondary bg-secondary/5 text-secondary",
  },
  {
    name: "NBA",
    sub: "Accredited Engineering",
    color: "border-accent bg-accent/5 text-accent",
  },
  {
    name: "AICTE",
    sub: "Approved Institution",
    color: "border-primary bg-primary/5 text-primary",
  },
  {
    name: "ISO 9001:2015",
    sub: "Quality Certified",
    color: "border-secondary bg-secondary/5 text-secondary",
  },
  {
    name: "Best College",
    sub: "TN Award 2022",
    color: "border-accent bg-accent/5 text-accent",
  },
];

const COMMUNITY_STATS = [
  {
    value: "15,000+",
    label: "Students",
    icon: GraduationCap,
    color: "bg-primary/10 text-primary",
  },
  {
    value: "500+",
    label: "Faculty",
    icon: Users,
    color: "bg-secondary/10 text-secondary",
  },
  {
    value: "100+",
    label: "Clubs",
    icon: Star,
    color: "bg-accent/10 text-accent",
  },
  {
    value: "50+",
    label: "International Partners",
    icon: Globe2,
    color: "bg-primary/10 text-primary",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Excellence",
    desc: "Relentless pursuit of academic and professional excellence in every endeavor",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Community",
    desc: "A vibrant, inclusive community where every student belongs and thrives",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Globe2,
    title: "Global Vision",
    desc: "International collaborations that prepare students for a connected world",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: CheckCircle2,
    title: "Integrity",
    desc: "Ethical values and character development at the core of all programs",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Fostering creativity and entrepreneurial thinking through applied learning",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Legacy",
    desc: "30+ years of academic legacy with thousands of successful alumni worldwide",
    color: "bg-accent/10 text-accent",
  },
];

const MISSION_ICONS = [
  { emoji: "🎓", label: "Education", delay: 0, pos: "top-4 left-6" },
  { emoji: "🔬", label: "Research", delay: 0.4, pos: "top-2 right-10" },
  { emoji: "💡", label: "Innovation", delay: 0.8, pos: "bottom-6 left-12" },
  { emoji: "🌍", label: "Global", delay: 0.2, pos: "bottom-4 right-6" },
  { emoji: "🏆", label: "Excellence", delay: 0.6, pos: "top-1/2 left-2" },
  { emoji: "🤝", label: "Collaboration", delay: 1.0, pos: "top-1/2 right-2" },
];

// CSS 3D timeline card component
function TimelineCard({
  item,
  index,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }

  const isEven = index % 2 === 0;

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      data-ocid={`about.timeline.item.${index + 1}`}
      className={`md:flex md:items-center md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} mb-8`}
    >
      {/* Content side */}
      <div
        className={`flex-1 md:px-8 ${isEven ? "md:text-right" : "md:text-left"}`}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transition: "transform 0.15s ease-out",
            transformStyle: "preserve-3d",
          }}
          className="bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-elevated cursor-default"
        >
          {/* 3D depth layer */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2 text-primary-foreground ${item.color}`}
          >
            <span>{item.icon}</span>
            {item.year}
          </div>
          <p
            style={{ transform: "translateZ(10px)" }}
            className="text-foreground text-sm leading-relaxed"
          >
            {item.event}
          </p>
        </div>
      </div>

      {/* Center dot */}
      <div
        className={`hidden md:flex w-12 h-12 rounded-full ${item.color} flex-shrink-0 items-center justify-center z-10 shadow-elevated`}
      >
        <span className="text-primary-foreground font-bold text-xs">
          {item.year.slice(2)}
        </span>
      </div>

      {/* Empty side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden"
        data-ocid="about.hero.section"
      >
        <div className="relative h-72 md:h-80">
          <img
            src="https://picsum.photos/seed/rathinam-about/1400/400"
            alt="Rathinam Group of Institutions Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-3">
                  Est. 1994 · Eachanari, Coimbatore
                </Badge>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
                  About Rathinam Group of Institutions
                </h1>
                <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl">
                  NAAC A++ Accredited Institution of Excellence · 30 Years of
                  Shaping Leaders
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-secondary py-0" data-ocid="about.stats.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-secondary-foreground/20">
            {COMMUNITY_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`about.stat.item.${i + 1}`}
                className="py-6 text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground">
                  {s.value}
                </div>
                <div className="text-secondary-foreground/80 text-sm mt-0.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Introduction */}
      <Section data-ocid="about.intro.section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-4">
              Our Story
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              30 Years of{" "}
              <span className="text-gradient-orange">Academic Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in <strong className="text-foreground">1994</strong> at
              Eachanari, Coimbatore, Tamil Nadu, Rathinam Group of Institutions
              has grown from a single engineering college into one of Tamil
              Nadu's premier multi-disciplinary institutions. Today, we proudly
              serve over{" "}
              <strong className="text-foreground">15,000+ students</strong>{" "}
              across UG, PG, MBA, and MCA programs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Accredited with{" "}
              <strong className="text-foreground">NAAC A++</strong> — the
              highest grade — and ranked among India's top 100 institutions by
              NIRF. Our 500+ faculty members, 100+ student clubs, and 50+
              international partnerships create an ecosystem where talent
              flourishes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admissions"
                data-ocid="about.intro.apply.primary_button"
                className="btn-primary inline-flex items-center gap-2"
              >
                <GraduationCap size={16} />
                Apply for 2025-26
              </Link>
              <a
                href="/assets/brochure-rathinam-2025.pdf"
                download
                data-ocid="about.intro.brochure.secondary_button"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download Brochure
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://picsum.photos/seed/rathinam-campus1/600/400"
              alt="Campus Building"
              className="rounded-2xl shadow-elevated w-full h-48 object-cover"
            />
            <img
              src="https://picsum.photos/seed/rathinam-students1/600/400"
              alt="Students on Campus"
              className="rounded-2xl shadow-elevated w-full h-48 object-cover mt-8"
            />
            <img
              src="https://picsum.photos/seed/rathinam-lab1/600/400"
              alt="Research Lab"
              className="rounded-2xl shadow-elevated w-full h-48 object-cover"
            />
            <img
              src="https://picsum.photos/seed/rathinam-library/600/400"
              alt="Library"
              className="rounded-2xl shadow-elevated w-full h-48 object-cover mt-8"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision — with 3D floating academic icons */}
      <section className="section-alt py-20" data-ocid="about.mission.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">
              What Drives Us
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Mission & Vision
            </h2>
          </div>

          {/* Floating academic icons strip */}
          <div
            className="relative h-16 mb-8 overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            {MISSION_ICONS.map((icon) => (
              <motion.div
                key={icon.label}
                className={`absolute ${icon.pos} text-2xl select-none`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [-4, 4, -4],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + icon.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: icon.delay,
                }}
                style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
              >
                {icon.emoji}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-ocid="about.mission.card"
              className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-elevated relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                "To nurture holistic individuals with academic excellence,
                professional skills, and ethical values for a knowledge-driven
                society."
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Industry-aligned curriculum updated annually",
                  "Research & innovation at every level",
                  "Holistic personality development",
                  "Ethical leadership and social responsibility",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              data-ocid="about.vision.card"
              className="bg-card border-2 border-secondary/30 rounded-2xl p-8 shadow-elevated relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5">
                <Globe2 size={28} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                "To be a globally recognized institution of excellence in
                education, research, and industry collaboration."
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Top 50 institution in India by 2030",
                  "50+ active global university partnerships",
                  "100% graduate employability",
                  "Pioneering research in emerging technologies",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-secondary shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline — CSS 3D perspective cards */}
      <Section
        title="College History"
        subtitle="Three decades of milestones — Rathinam Group of Institutions, Eachanari, Coimbatore"
        data-ocid="about.history.section"
      >
        <div className="relative">
          {/* Center line on desktop */}
          <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-6 md:space-y-0">
            {TIMELINE.map((item, i) => (
              <TimelineCard key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <section
        className="section-alt py-20"
        data-ocid="about.leadership.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-3">
              Meet the Team
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visionaries with decades of academic and industry experience
              guiding Rathinam's pursuit of excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((l, i) => (
              <motion.div
                key={l.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.leader.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              >
                {/* Photo header */}
                <div className="relative bg-gradient-hero-full pt-8 pb-6 flex flex-col items-center">
                  <img
                    src={l.image}
                    alt={l.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-secondary shadow-elevated"
                  />
                  <span className="absolute top-3 right-3 text-[10px] bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-2 py-0.5 font-semibold">
                    {l.dept}
                  </span>
                </div>

                <div className="p-5 text-center">
                  <h3 className="font-display font-bold text-foreground text-base leading-tight">
                    {l.name}
                  </h3>
                  <p className="text-primary text-xs font-semibold mt-1">
                    {l.role}
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen size={10} /> {l.qualification}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-1 text-[11px] text-muted-foreground">
                    <Award size={10} className="text-secondary" />
                    {l.experience}
                  </div>
                  <p className="text-muted-foreground text-xs italic mt-3 leading-relaxed line-clamp-3">
                    "{l.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <Section
        title="Our Core Values"
        subtitle="The principles that guide everything we do at Rathinam Group of Institutions"
        centered
        data-ocid="about.values.section"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`about.value.item.${i + 1}`}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-smooth text-center group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}
              >
                <v.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">
                {v.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Accreditations & Awards */}
      <section
        className="section-alt py-16"
        data-ocid="about.accreditations.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-3">
              Recognized Excellence
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Accreditations & Awards
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Recognized by India's premier education bodies and international
              ranking agencies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {ACCREDITATIONS.map((acc, i) => (
              <motion.div
                key={acc.name}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`about.accreditation.item.${i + 1}`}
                className={`border-2 rounded-2xl p-4 text-center shadow-subtle hover:shadow-card transition-smooth ${acc.color}`}
              >
                <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mx-auto mb-2">
                  <Award size={18} />
                </div>
                <div className="font-display font-bold text-sm">{acc.name}</div>
                <div className="text-xs mt-0.5 opacity-70">{acc.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Community Stats */}
          <div className="bg-card border border-border rounded-2xl shadow-elevated p-8">
            <h3 className="font-display text-xl font-bold text-center text-foreground mb-8">
              Rathinam Group of Institutions — Community at a Glance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {COMMUNITY_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 15 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`about.community.item.${i + 1}`}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <s.icon size={28} />
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure + CTA */}
      <section
        className="py-20 bg-gradient-hero-full"
        data-ocid="about.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <Building2 size={32} className="text-secondary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Be Part of the Rathinam Legacy
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 15,000+ students who are building their future at Rathinam
              Group of Institutions, Eachanari, Coimbatore — Tamil Nadu's finest
              institution. Download our brochure or apply today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/assets/brochure-rathinam-2025.pdf"
                download
                data-ocid="about.cta.brochure.primary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:shadow-card hover:scale-105 transition-smooth"
              >
                <Download size={18} />
                Download College Brochure
              </a>
              <Link
                to="/admissions"
                data-ocid="about.cta.admissions.secondary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/60 text-primary-foreground font-bold rounded-full hover:bg-primary-foreground/10 transition-smooth"
              >
                <GraduationCap size={18} />
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
