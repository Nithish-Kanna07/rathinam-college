import { Badge } from "@/components/CollegeBadge";
import { Button } from "@/components/CollegeButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/CollegeCard";
import { Section } from "@/components/Section";
import { useSubmitContactInquiry } from "@/hooks/useBackend";
import type { ContactInquiry } from "@/types";
import {
  AlertCircle,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Download,
  FileText,
  GraduationCap,
  ListChecks,
  Mail,
  Phone,
  Send,
  Upload,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ─── Static Data ──────────────────────────────────────────────────────────────

const admissionSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill Application",
    desc: "Complete the online form with personal & academic details. Upload your passport-size photo.",
  },
  {
    icon: Upload,
    step: "02",
    title: "Submit Documents",
    desc: "Upload mark sheets, transfer certificate, community certificate and government-issued ID.",
  },
  {
    icon: ListChecks,
    step: "03",
    title: "Merit List",
    desc: "Merit list published on the website. Shortlisted candidates receive SMS & email notification.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Fee Payment",
    desc: "Pay admission fee online or at the college cashier within 3 working days of selection letter.",
  },
  {
    icon: BookOpen,
    step: "05",
    title: "Classes Begin",
    desc: "Collect your ID card, attend orientation and kick-start your academic journey at Rathinam.",
  },
];

const programs = [
  {
    name: "B.Sc / B.Com / BBA (Arts & Science)",
    type: "UG",
    duration: "3 Years",
    eligibility: "10+2 (Any Stream) — Min 50%",
    seats: 60,
  },
  {
    name: "B.E / B.Tech (Engineering)",
    type: "UG",
    duration: "4 Years",
    eligibility: "10+2 with PCM — Min 60% (TNEA)",
    seats: 60,
  },
  {
    name: "MBA",
    type: "PG",
    duration: "2 Years",
    eligibility: "Any UG Degree + Entrance Test",
    seats: 60,
  },
  {
    name: "MCA",
    type: "PG",
    duration: "3 Years",
    eligibility: "BSc CS / BCA / BIT — Min 50%",
    seats: 30,
  },
  {
    name: "M.Sc / M.Com",
    type: "PG",
    duration: "2 Years",
    eligibility: "Relevant UG Degree — Min 50%",
    seats: 30,
  },
  {
    name: "Ph.D Programs",
    type: "Research",
    duration: "3–5 Yrs",
    eligibility: "PG with Min 55% Marks + Research Proposal",
    seats: 10,
  },
];

const brochures = [
  {
    title: "B.Sc Computer Science",
    dept: "Arts & Science",
    color: "from-blue-700 to-blue-900",
    icon: "💻",
  },
  {
    title: "B.Com & BBA",
    dept: "Commerce & Mgmt",
    color: "from-emerald-600 to-emerald-800",
    icon: "📊",
  },
  {
    title: "MBA Program",
    dept: "Business School",
    color: "from-purple-600 to-purple-800",
    icon: "🎓",
  },
  {
    title: "MCA Program",
    dept: "Computer Applications",
    color: "from-orange-600 to-orange-800",
    icon: "🖥️",
  },
  {
    title: "B.E Mechanical",
    dept: "Engineering",
    color: "from-rose-600 to-rose-800",
    icon: "⚙️",
  },
  {
    title: "B.E Civil Engineering",
    dept: "Engineering",
    color: "from-amber-600 to-amber-800",
    icon: "🏗️",
  },
  {
    title: "B.E ECE",
    dept: "Engineering",
    color: "from-indigo-600 to-indigo-800",
    icon: "📡",
  },
  {
    title: "B.E CSE",
    dept: "Engineering",
    color: "from-teal-600 to-teal-800",
    icon: "🔧",
  },
];

const feeRows = [
  {
    course: "B.Sc CS / IT",
    tuition: "₹45,000",
    hostel: "₹60,000",
    transport: "₹18,000",
  },
  {
    course: "B.Com / BBA",
    tuition: "₹40,000",
    hostel: "₹60,000",
    transport: "₹18,000",
  },
  {
    course: "B.E / B.Tech",
    tuition: "₹90,000",
    hostel: "₹65,000",
    transport: "₹20,000",
  },
  {
    course: "MBA",
    tuition: "₹1,10,000",
    hostel: "₹65,000",
    transport: "₹20,000",
  },
  {
    course: "MCA",
    tuition: "₹75,000",
    hostel: "₹65,000",
    transport: "₹20,000",
  },
  {
    course: "M.Sc (Science)",
    tuition: "₹55,000",
    hostel: "₹60,000",
    transport: "₹18,000",
  },
];

const eligibilitySections = [
  {
    title: "UG Programs — Arts, Science & Commerce",
    criteria: [
      "Passed 10+2 from a recognized board",
      "Minimum 50% aggregate marks in all subjects",
      "No entrance exam required for most programs",
      "Age: 17–25 years as of July 1st of admission year",
    ],
  },
  {
    title: "UG Engineering Programs — B.E / B.Tech",
    criteria: [
      "Passed 10+2 with Physics, Chemistry & Mathematics",
      "Minimum 60% aggregate in PCM subjects",
      "Must have appeared in TNEA counseling (Tamil Nadu)",
      "Age: 17–25 years as of July 31st of admission year",
    ],
  },
  {
    title: "PG Programs — MBA, MCA & M.Sc",
    criteria: [
      "Relevant UG degree from a recognized university",
      "Minimum 50% aggregate marks in qualifying UG degree",
      "MBA: Any graduate degree + college entrance test",
      "MCA: BSc CS / BCA / BIT with Mathematics as subject",
    ],
  },
];

const faqs = [
  {
    q: "Is an entrance exam required for admission?",
    a: "For most UG programs (Arts, Science, Commerce) no entrance exam is required — admission is based on merit (10+2 marks). B.E/B.Tech admissions go through TNEA counseling. MBA requires a college-conducted entrance test.",
  },
  {
    q: "When do classes start for 2024–25?",
    a: "Classes for 2024–25 begin on August 1st, 2024. A freshers' orientation program is held July 30–31, 2024. All admitted students must complete reporting formalities by July 28, 2024.",
  },
  {
    q: "What is the last date to apply?",
    a: "The last date for online applications is July 31st, 2024. Seats fill quickly, so early application is strongly advised. Some programs may close earlier due to capacity.",
  },
  {
    q: "Are hostel facilities available for outstation students?",
    a: "Yes — separate hostels for boys and girls are available on campus, offering furnished rooms, nutritious meals, Wi-Fi, gym access, and 24/7 security. Annual hostel fee is approximately ₹60,000–₹65,000.",
  },
  {
    q: "What scholarships are available?",
    a: "Rathinam College offers Merit Scholarships (25%–100% fee waiver), Sports Scholarships for state/national athletes, Tamil Nadu Government SC/ST scholarships, and education loan facilitation through SBI, Canara Bank, and Indian Bank.",
  },
  {
    q: "Can I transfer my admission from another college?",
    a: "Lateral entry and transfer admissions are accepted for select programs at 2nd-year level. Candidates must provide a transfer certificate, NOC from their previous institution, and qualifying marks sheet. Availability depends on seat vacancy.",
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function StepCard({
  icon: Icon,
  step,
  title,
  desc,
  index,
}: {
  icon: React.ElementType;
  step: string;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
      data-ocid={`admissions.step.item.${index + 1}`}
    >
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-elevated">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <span className="absolute -top-1.5 -right-1.5 bg-secondary text-secondary-foreground text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-card">
          {step}
        </span>
      </div>
      <h3 className="font-display font-bold text-foreground text-sm mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-xs leading-relaxed max-w-[180px]">
        {desc}
      </p>
    </motion.div>
  );
}

function AccordionItem({
  title,
  criteria,
  defaultOpen = false,
}: { title: string; criteria: string[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const ocidKey = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-muted/40 transition-smooth text-left"
        onClick={() => setOpen(!open)}
        data-ocid={`eligibility.${ocidKey}.toggle`}
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-foreground text-sm md:text-base">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 py-5 bg-background border-t border-border">
          <ul className="space-y-2.5">
            {criteria.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-start justify-between px-6 py-4 bg-card hover:bg-muted/40 transition-smooth text-left gap-4"
        onClick={() => setOpen(!open)}
        data-ocid={`faq.item.${index + 1}`}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm leading-relaxed">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <div className="px-6 py-4 bg-muted/20 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const mutation = useSubmitContactInquiry();
  const [form, setForm] = useState<ContactInquiry>({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const set =
    (field: keyof ContactInquiry) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form, {
      onSuccess: () =>
        setForm({
          name: "",
          email: "",
          phone: "",
          courseInterest: "",
          message: "",
        }),
    });
  };

  if (mutation.isSuccess) {
    return (
      <div className="text-center py-10" data-ocid="contact.success_state">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          Request Sent!
        </h3>
        <p className="text-muted-foreground text-sm">
          Our admissions team will contact you within 24 working hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-ocid="contact_form"
    >
      <div>
        <label
          htmlFor="cf-name"
          className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
        >
          Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            id="cf-name"
            name="name"
            value={form.name}
            onChange={set("name")}
            required
            placeholder="Your full name"
            className="w-full pl-9 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            data-ocid="contact.name.input"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="cf-email"
            className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
          >
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              id="cf-email"
              name="email"
              value={form.email}
              onChange={set("email")}
              required
              type="email"
              placeholder="you@email.com"
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              data-ocid="contact.email.input"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="cf-phone"
            className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
          >
            Phone *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              id="cf-phone"
              name="phone"
              value={form.phone}
              onChange={set("phone")}
              required
              placeholder="+91 98765 43210"
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              data-ocid="contact.phone.input"
            />
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="cf-program"
          className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
        >
          Program Interest *
        </label>
        <select
          id="cf-program"
          name="courseInterest"
          value={form.courseInterest}
          onChange={set("courseInterest")}
          required
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          data-ocid="contact.program.select"
        >
          <option value="">Select a program…</option>
          <option value="B.Sc Computer Science">B.Sc Computer Science</option>
          <option value="B.Com / BBA">B.Com / BBA</option>
          <option value="B.E / B.Tech Engineering">
            B.E / B.Tech Engineering
          </option>
          <option value="MBA">MBA</option>
          <option value="MCA">MCA</option>
          <option value="M.Sc (Science)">M.Sc (Science)</option>
          <option value="Ph.D Program">Ph.D Program</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="cf-message"
          className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
        >
          Message (optional)
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={set("message")}
          rows={3}
          placeholder="Any specific query about fees, scholarships, hostel…"
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
          data-ocid="contact.message.textarea"
        />
      </div>
      {mutation.isError && (
        <div
          className="flex items-center gap-2 text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3"
          data-ocid="contact.error_state"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="text-sm font-semibold">
            Something went wrong. Please try again.
          </span>
        </div>
      )}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full btn-secondary flex items-center justify-center gap-2"
        data-ocid="contact.submit_button"
      >
        {mutation.isPending ? (
          <span className="w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {mutation.isPending ? "Sending…" : "Request Information"}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdmissionsPage() {
  return (
    <div data-ocid="admissions.page">
      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[460px] flex items-center overflow-hidden"
        data-ocid="admissions.hero"
      >
        <img
          src="https://picsum.photos/seed/rathinam-admissions/1600/600"
          alt="Admissions at Rathinam College"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/40" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
              🎓 Admissions Open — 2024–25
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-4">
              Your Journey to
              <br />
              <span className="text-gradient-orange">Excellence</span> Begins
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-xl">
              Join Rathinam College — where world-class education meets
              industry-ready skills. Applications are open for all UG, PG, and
              MBA programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply-now"
                className="btn-secondary inline-flex items-center gap-2"
                data-ocid="admissions.apply_button"
              >
                Apply Online Now
              </a>
              <a
                href="#brochures"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/60 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-smooth"
                data-ocid="admissions.brochures_link"
              >
                <Download className="w-4 h-4" /> Download Brochure
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Important Dates Banner ──────────────────────────────────────────── */}
      <div className="bg-secondary py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-secondary-foreground">
            {[
              {
                icon: Calendar,
                label: "Last Date to Apply:",
                value: "31st July 2024",
              },
              {
                icon: BookOpen,
                label: "Classes Start:",
                value: "1st August 2024",
              },
              {
                icon: GraduationCap,
                label: "Orientation:",
                value: "30–31 July 2024",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 font-semibold text-sm"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                <span className="font-black bg-secondary-foreground/20 rounded px-2 py-0.5">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Admission Steps ─────────────────────────────────────────────────── */}
      <Section
        title="Admission Process — 5 Simple Steps"
        subtitle="Follow these steps to secure your seat at Rathinam College."
        centered
        className="bg-background"
        data-ocid="admissions.steps.section"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {admissionSteps.map((s, i) => (
            <StepCard key={s.step} {...s} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#apply-now"
            className="btn-secondary inline-flex items-center gap-2"
            data-ocid="admissions.steps.apply_button"
          >
            Start Your Application
          </a>
        </div>
      </Section>

      {/* ── Programs Overview Table ─────────────────────────────────────────── */}
      <Section
        title="Programs Offered 2024–25"
        subtitle="Transparent fee structure — no hidden charges. Merit-based selection only."
        className="section-alt"
        data-ocid="admissions.programs.section"
      >
        <div className="overflow-x-auto rounded-xl border border-border shadow-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {[
                  "Program",
                  "Level",
                  "Duration",
                  "Eligibility",
                  "Intake",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 font-semibold text-left first:text-left last:text-center [&:not(:first-child):not(:last-child)]:text-center whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {programs.map((p, i) => (
                <tr
                  key={p.name}
                  className={`border-b border-border transition-smooth hover:bg-muted/40 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                  data-ocid={`programs.item.${i + 1}`}
                >
                  <td className="px-5 py-4 font-semibold text-foreground">
                    {p.name}
                  </td>
                  <td className="px-5 py-4 text-center">
                    <Badge
                      variant={
                        p.type === "UG"
                          ? "primary"
                          : p.type === "PG"
                            ? "accent"
                            : "secondary"
                      }
                    >
                      {p.type}
                    </Badge>
                  </td>
                  <td className="px-5 py-4 text-center text-muted-foreground font-medium">
                    {p.duration}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground text-xs">
                    {p.eligibility}
                  </td>
                  <td className="px-5 py-4 text-center font-bold text-primary">
                    {p.seats} Seats
                  </td>
                  <td className="px-5 py-4 text-center">
                    <a
                      href="#apply-now"
                      className="btn-outline text-xs px-3 py-1.5 inline-block"
                      data-ocid={`programs.apply_button.${i + 1}`}
                    >
                      Apply
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Brochure Downloads ──────────────────────────────────────────────── */}
      <Section
        id="brochures"
        title="Download Department Brochures"
        subtitle="Get detailed curriculum, faculty profiles, and career outcomes for each department."
        centered
        className="bg-background"
        data-ocid="admissions.brochures.section"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {brochures.map((b, i) => (
            <motion.div
              key={b.title}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.94 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              data-ocid={`brochure.item.${i + 1}`}
            >
              <div
                className={`bg-gradient-to-br ${b.color} p-6 flex flex-col items-center justify-center`}
              >
                <span className="text-4xl">{b.icon}</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1 font-medium">
                  {b.dept}
                </p>
                <h4 className="font-display font-bold text-foreground text-sm leading-tight mb-3">
                  {b.title}
                </h4>
                <a
                  href="https://drive.google.com/drive/folders/sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-smooth"
                  data-ocid={`brochure.download_button.${i + 1}`}
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Eligibility Criteria ────────────────────────────────────────────── */}
      <Section
        title="Eligibility Criteria"
        subtitle="Review requirements for each program category before applying."
        className="section-alt"
        data-ocid="admissions.eligibility.section"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {eligibilitySections.map((e, i) => (
            <AccordionItem key={e.title} {...e} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      {/* ── Fee Structure + Scholarships ────────────────────────────────────── */}
      <Section className="bg-background" data-ocid="admissions.fees.section">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fee Table */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Fee Structure 2024–25
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Annual fees (approximate) — subject to revision. Government
              scholarships apply where eligible.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10 text-primary">
                    {["Course", "Tuition", "Hostel", "Transport"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 font-semibold text-left first:text-left [&:not(:first-child)]:text-right"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((f, i) => (
                    <tr
                      key={f.course}
                      className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                      data-ocid={`fees.item.${i + 1}`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {f.course}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-primary">
                        {f.tuition}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground">
                        {f.hostel}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground">
                        {f.transport}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Scholarships */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Scholarships & Financial Aid
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Quality education should be accessible — here's how we help.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "🏆",
                  title: "Merit Scholarship",
                  desc: "25%–100% fee waiver for students scoring above 85% in qualifying exam. Top 3 students get full scholarship.",
                  badge: "Up to 100% Waiver",
                  variant: "green" as const,
                },
                {
                  icon: "⚽",
                  title: "Sports Scholarship",
                  desc: "State and national-level sports achievers receive 50% fee concession, valid for the entire program duration.",
                  badge: "50% Fee Off",
                  variant: "placement" as const,
                },
                {
                  icon: "🏛️",
                  title: "SC/ST Govt. Concession",
                  desc: "Full tuition fee waiver under Tamil Nadu government scholarship scheme for eligible SC/ST category candidates.",
                  badge: "Full Tuition Free",
                  variant: "green" as const,
                },
                {
                  icon: "🏦",
                  title: "Education Loan Assist",
                  desc: "Tie-ups with SBI, Canara & Indian Bank for hassle-free education loan processing. Zero collateral up to ₹7.5L.",
                  badge: "Low Interest Loans",
                  variant: "primary" as const,
                },
              ].map((s) => (
                <Card
                  key={s.title}
                  className="border-l-4 border-l-accent"
                  data-ocid={`scholarship.item.${["Merit Scholarship", "Sports Scholarship", "SC/ST Govt. Concession", "Education Loan Assist"].indexOf(s.title) + 1}`}
                >
                  <CardContent className="py-4 flex items-start gap-4">
                    <span className="text-2xl shrink-0">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-foreground text-sm">
                          {s.title}
                        </h4>
                        <Badge variant={s.variant}>{s.badge}</Badge>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Quick answers to the most common admission queries."
        className="section-alt"
        centered
        data-ocid="admissions.faq.section"
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </Section>

      {/* ── Apply Now + Contact Form ─────────────────────────────────────────── */}
      <Section
        id="apply-now"
        className="bg-background"
        data-ocid="admissions.contact.section"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA + Why Rathinam */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Seats Filling Fast
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
              Ready to Begin Your
              <br />
              <span className="text-gradient-orange">Academic Journey?</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              Fill out the inquiry form and our admissions counselor will
              contact you within 24 hours to guide you through the process,
              answer all your questions, and help you select the right program.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: Award,
                  title: "98% Placement Rate",
                  desc: "Industry-best record with 350+ partner companies.",
                },
                {
                  icon: GraduationCap,
                  title: "NAAC A+ Accredited",
                  desc: "Top-tier academic quality certified by national bodies.",
                },
                {
                  icon: BookOpen,
                  title: "50+ Programs",
                  desc: "UG, PG, MBA, MCA, Ph.D across all disciplines.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl border border-border p-5">
              <p className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Direct Contact
              </p>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <p>
                  📞{" "}
                  <a
                    href="tel:+914224253685"
                    className="hover:text-primary transition-smooth font-medium"
                  >
                    +91 422 425 3685
                  </a>
                </p>
                <p>
                  📧{" "}
                  <a
                    href="mailto:admissions@rathinam.in"
                    className="hover:text-primary transition-smooth font-medium"
                  >
                    admissions@rathinam.in
                  </a>
                </p>
                <p>🕐 Monday–Saturday: 9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <Card className="shadow-elevated" data-ocid="contact.dialog">
            <CardHeader>
              <CardTitle className="text-xl">
                Request More Information
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-1">
                Get personalised guidance from our admissions counselors.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
