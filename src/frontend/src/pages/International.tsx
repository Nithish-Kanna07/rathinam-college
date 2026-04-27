import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Plane,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../components/CollegeBadge";
import { Section } from "../components/Section";

const STATS = [
  { value: "50+", label: "Partner Universities", icon: "🏛️" },
  { value: "25", label: "Countries", icon: "🌍" },
  { value: "500+", label: "Students on Exchange", icon: "✈️" },
  { value: "100+", label: "Joint Research Projects", icon: "🔬" },
];

const PARTNERS = [
  {
    name: "MIT",
    full: "Massachusetts Institute of Technology",
    country: "United States",
    flag: "🇺🇸",
    type: "Research",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Oxford",
    full: "University of Oxford",
    country: "United Kingdom",
    flag: "🇬🇧",
    type: "Exchange",
    color: "bg-indigo-50 border-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "TU Berlin",
    full: "Technische Universität Berlin",
    country: "Germany",
    flag: "🇩🇪",
    type: "Dual Degree",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    name: "Sorbonne",
    full: "Sorbonne Université Paris",
    country: "France",
    flag: "🇫🇷",
    type: "Exchange",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "NUS Singapore",
    full: "National University of Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    type: "Research",
    color: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Waseda Japan",
    full: "Waseda University Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    type: "Exchange",
    color: "bg-pink-50 border-pink-200",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    name: "Melbourne",
    full: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    type: "Research",
    color: "bg-cyan-50 border-cyan-200",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Toronto",
    full: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    type: "Exchange",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "DTU Denmark",
    full: "Technical University of Denmark",
    country: "Denmark",
    flag: "🇩🇰",
    type: "Research",
    color: "bg-yellow-50 border-yellow-200",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "ETH Zurich",
    full: "ETH Zürich – Swiss Federal Institute",
    country: "Switzerland",
    flag: "🇨🇭",
    type: "Dual Degree",
    color: "bg-violet-50 border-violet-200",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    name: "IIT Bombay",
    full: "Indian Institute of Technology Bombay",
    country: "India",
    flag: "🇮🇳",
    type: "MoU",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "Nanyang Tech",
    full: "Nanyang Technological University",
    country: "Singapore",
    flag: "🇸🇬",
    type: "Research",
    color: "bg-teal-50 border-teal-200",
    badgeColor: "bg-teal-100 text-teal-700",
  },
];

const PROGRAMS = [
  {
    icon: <Plane size={28} className="text-accent" />,
    title: "Semester Exchange",
    duration: "1 Semester",
    eligibility: "Eligible after 2nd year",
    desc: "Study one full semester at a partner university abroad with full credit transfer back to Rathinam. Immerse yourself in a new academic culture.",
    highlights: [
      "Full tuition waiver at partner campus",
      "Credit transfer guaranteed",
      "Visa & travel support",
      "Accommodation assistance",
    ],
  },
  {
    icon: <Star size={28} className="text-secondary" />,
    title: "Summer School",
    duration: "4–6 Weeks",
    eligibility: "Open to all years",
    desc: "Spend 4–6 weeks at partner campuses during summer, attending specialized courses, workshops, and cultural excursions.",
    highlights: [
      "Short-term intensive courses",
      "Partner campus certificate",
      "Industry site visits",
      "Cultural immersion activities",
    ],
  },
  {
    icon: <GraduationCap size={28} className="text-primary" />,
    title: "Dual Degree",
    duration: "Last Year Abroad",
    eligibility: "Merit-based selection",
    desc: "Complete your final year at a partner university and graduate with two internationally recognized degrees — one from Rathinam, one from the partner institution.",
    highlights: [
      "Two degrees in one program",
      "International alumni network",
      "Top-tier university credential",
      "Scholarship support available",
    ],
  },
  {
    icon: <BookOpen size={28} className="text-violet-600" />,
    title: "Joint Research",
    duration: "6–12 Months",
    eligibility: "Faculty + final year students",
    desc: "Collaborate with world-renowned faculty on cutting-edge research projects. Co-author publications and present at international conferences.",
    highlights: [
      "Co-supervised by partner faculty",
      "International publication credits",
      "Research stipend available",
      "PhD pathway support",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Subramaniam",
    country: "India 🇮🇳",
    exchangeUniv: "NUS Singapore",
    program: "Semester Exchange",
    quote:
      "My semester at NUS completely transformed my perspective. The exposure to research labs, multicultural peers, and Singapore's tech ecosystem was unparalleled. I returned with a job offer from a Singapore startup!",
    photo: "https://picsum.photos/seed/priya-student/200/200",
    rating: 5,
  },
  {
    name: "Arjun Krishnamoorthy",
    country: "India 🇮🇳",
    exchangeUniv: "TU Berlin",
    program: "Dual Degree",
    quote:
      "The Dual Degree with TU Berlin was the best decision of my life. I now hold both a B.E. from Rathinam and a B.Sc. from Germany. My German degree opened doors in the European job market that I never imagined possible.",
    photo: "https://picsum.photos/seed/arjun-student/200/200",
    rating: 5,
  },
  {
    name: "Kavitha Rajan",
    country: "India 🇮🇳",
    exchangeUniv: "University of Melbourne",
    program: "Summer School",
    quote:
      "The 5-week summer school at Melbourne was incredible. We worked on a real AI project with Australian students, toured top tech companies, and I made lifelong international friends. Highly recommend!",
    photo: "https://picsum.photos/seed/kavitha-student/200/200",
    rating: 5,
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    label: "Apply",
    desc: "Submit online application with academic transcripts, SOP, and faculty recommendation",
    icon: <Globe size={22} />,
    color: "bg-primary",
  },
  {
    step: 2,
    label: "Selection",
    desc: "Interview + shortlisting based on GPA, extracurriculars, and language proficiency",
    icon: <Users size={22} />,
    color: "bg-secondary",
  },
  {
    step: 3,
    label: "Visa Support",
    desc: "Our international office provides full visa guidance, documentation, and embassy prep",
    icon: <CheckCircle2 size={22} />,
    color: "bg-accent",
  },
  {
    step: 4,
    label: "Departure",
    desc: "Pre-departure orientation, partner campus introduction, and airport assistance",
    icon: <Plane size={22} />,
    color: "bg-violet-600",
  },
  {
    step: 5,
    label: "Return & Credits",
    desc: "On return, all earned credits are transferred and counted toward your Rathinam degree",
    icon: <GraduationCap size={22} />,
    color: "bg-orange-500",
  },
];

const BENEFITS = [
  {
    icon: "🌏",
    title: "Global Exposure",
    desc: "Study on 4 continents across 25+ countries",
  },
  {
    icon: "🎓",
    title: "International Degree Recognition",
    desc: "Credentials recognized by global employers and universities",
  },
  {
    icon: "🤝",
    title: "Industry Connections Worldwide",
    desc: "Access to multinational company networks and recruiters",
  },
  {
    icon: "🗣️",
    title: "Language Courses",
    desc: "Free English, German, French, and Japanese language training",
  },
  {
    icon: "🚀",
    title: "Career Boost",
    desc: "International alumni earn 40–60% higher starting packages",
  },
  {
    icon: "📜",
    title: "Research Publications",
    desc: "Co-author papers in top international journals",
  },
];

const typeColorMap: Record<string, string> = {
  Research: "bg-accent/15 text-accent border-accent/30",
  Exchange: "bg-primary/10 text-primary border-primary/20",
  "Dual Degree": "bg-secondary/15 text-secondary border-secondary/30",
  MoU: "bg-muted text-muted-foreground border-border",
};

export default function InternationalPage() {
  return (
    <div data-ocid="international.page">
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[560px] flex items-center"
        data-ocid="international.hero.section"
      >
        <img
          src="/assets/generated/international-hero.dim_1400x600.jpg"
          alt="Global campus connections"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.19_155/0.92)] via-[oklch(0.26_0.17_165/0.78)] to-[oklch(0.3_0.14_200/0.45)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="green" className="mb-5 text-sm px-4 py-1.5">
              <Globe size={14} /> Global Connections
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight max-w-3xl">
              Your Gateway to{" "}
              <span className="text-gradient-green">World-Class Education</span>
            </h1>
            <p className="text-primary-foreground/85 text-xl max-w-2xl leading-relaxed mb-8">
              Partner with 50+ universities across 25 countries. Study abroad,
              earn dual degrees, and build a career without borders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                data-ocid="international.hero.apply_now.primary_button"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-base"
              >
                Apply for Exchange <ArrowRight size={18} />
              </Link>
              <a
                href="#programs"
                data-ocid="international.hero.explore_programs.secondary_button"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/25 transition-smooth text-base"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="bg-card border-b border-border py-0 shadow-card"
        data-ocid="international.stats.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center py-8 px-4 text-center hover:bg-accent/5 transition-smooth"
              >
                <span className="text-3xl mb-1">{s.icon}</span>
                <div className="font-display text-3xl font-bold text-accent leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <Section
        title="Our Global Partner Universities"
        subtitle="Collaborations with the world's finest academic institutions across 25 countries"
        centered
        data-ocid="international.partners.section"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-ocid={`international.partner.item.${i + 1}`}
              className="bg-card border border-border rounded-xl p-4 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-default"
            >
              <div className="text-4xl mb-2">{p.flag}</div>
              <div className="font-display font-bold text-foreground text-sm mb-1 leading-tight">
                {p.name}
              </div>
              <div className="text-xs text-muted-foreground mb-2">
                {p.country}
              </div>
              <span
                className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold rounded-full border ${typeColorMap[p.type] ?? "bg-muted text-muted-foreground border-border"}`}
              >
                {p.type}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            + More partnerships being added every year. Full list available at
            the International Office.
          </p>
        </div>
      </Section>

      {/* Programs */}
      <Section
        id="programs"
        title="International Programs"
        subtitle="Choose the program that best fits your academic journey and career aspirations"
        className="section-alt"
        centered
        data-ocid="international.programs.section"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROGRAMS.map((prog, i) => (
            <motion.div
              key={prog.title}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              data-ocid={`international.program.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center shrink-0">
                  {prog.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-1">
                    {prog.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30 rounded-full px-2.5 py-0.5">
                      ⏱ {prog.duration}
                    </span>
                    <span className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5">
                      {prog.eligibility}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {prog.desc}
              </p>
              <ul className="space-y-1.5">
                {prog.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="Student Voices"
        subtitle="Hear from students who transformed their careers through our global programs"
        centered
        data-ocid="international.testimonials.section"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13 }}
              data-ocid={`international.testimonial.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, j) => `star-${j}`).map(
                  (key) => (
                    <Star
                      key={key}
                      size={14}
                      className="fill-secondary text-secondary"
                    />
                  ),
                )}
              </div>
              <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5 italic">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/40"
                  loading="lazy"
                />
                <div>
                  <div className="font-display font-bold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.country}
                  </div>
                  <div className="text-xs text-accent font-semibold">
                    📍 {t.exchangeUniv} · {t.program}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Timeline */}
      <section
        className="bg-gradient-hero-full py-20"
        data-ocid="international.process.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="green" className="mb-4">
              <Plane size={12} /> Study Abroad Journey
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              How It Works: 5 Simple Steps
            </h2>
            <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto">
              We guide you through every stage — from application to credit
              transfer
            </p>
          </div>
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-primary-foreground/20" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {PROCESS_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  data-ocid={`international.process.item.${i + 1}`}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`w-20 h-20 ${s.color} rounded-full flex items-center justify-center text-white shadow-elevated mb-4 ring-4 ring-primary-foreground/20`}
                  >
                    {s.icon}
                  </div>
                  <div className="font-display text-xs font-bold text-primary-foreground/60 uppercase tracking-widest mb-1">
                    Step {s.step}
                  </div>
                  <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">
                    {s.label}
                  </h3>
                  <p className="text-primary-foreground/70 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section
        title="Why Go Global?"
        subtitle="International experience is the single biggest differentiator in today's job market"
        className="section-alt"
        centered
        data-ocid="international.benefits.section"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`international.benefit.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth text-center"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact International Office */}
      <section
        className="bg-card border-t border-border py-16"
        data-ocid="international.contact.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="green" className="mb-4">
                <Globe size={12} /> International Office
              </Badge>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Ready to Go Global?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Our dedicated International Programs team is here to guide you
                through every step — from choosing the right program to visa
                documentation and cultural preparation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg">
                  <Mail size={18} className="text-accent shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <a
                      href="mailto:international@rathinam.in"
                      className="text-sm font-semibold text-foreground hover:text-accent transition-smooth"
                      data-ocid="international.contact.email.link"
                    >
                      international@rathinam.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg">
                  <Phone size={18} className="text-accent shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <a
                      href="tel:+914221234568"
                      className="text-sm font-semibold text-foreground hover:text-accent transition-smooth"
                      data-ocid="international.contact.phone.link"
                    >
                      +91-422-123-4568
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg">
                  <MapPin size={18} className="text-accent shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      International Office, Admin Block, Ground Floor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero-full rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🌏</div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
                Applications Open
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-6">
                Next semester exchange deadline:{" "}
                <strong className="text-secondary">July 15, 2025</strong>
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6 text-center">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <div className="font-display text-2xl font-bold text-secondary">
                    50+
                  </div>
                  <div className="text-primary-foreground/70 text-xs">
                    Universities
                  </div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <div className="font-display text-2xl font-bold text-secondary">
                    25
                  </div>
                  <div className="text-primary-foreground/70 text-xs">
                    Countries
                  </div>
                </div>
              </div>
              <Link
                to="/admissions"
                data-ocid="international.contact.apply_now.primary_button"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth"
              >
                Apply for Exchange Program <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
