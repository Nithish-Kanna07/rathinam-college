import { Canvas, useFrame } from "@react-three/fiber";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Phone,
  Send,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import type * as THREE from "three";
import { Badge } from "../components/CollegeBadge";
import { Section } from "../components/Section";
import { useSubmitContactInquiry } from "../hooks/useBackend";
import type { ContactInquiry } from "../types";

const PROGRAMS = [
  "B.Sc Computer Science",
  "B.Sc Information Technology",
  "B.Com",
  "BBA",
  "B.Sc Mathematics",
  "B.Sc Physics",
  "B.Sc Chemistry",
  "B.Sc Biotechnology",
  "MCA",
  "MBA",
  "M.Sc Computer Science",
  "Other",
];

const DEPT_CONTACTS = [
  {
    dept: "Admissions",
    email: "admissions@rathinam.in",
    icon: GraduationCap,
    color: "bg-primary",
    desc: "Courses, eligibility & application queries",
    timing: "Mon–Sat, 9 AM – 5 PM",
  },
  {
    dept: "Placements",
    email: "placements@rathinam.in",
    icon: Users,
    color: "bg-secondary",
    desc: "Recruitment, internship & corporate tie-ups",
    timing: "Mon–Fri, 9 AM – 5 PM",
  },
  {
    dept: "International",
    email: "international@rathinam.in",
    icon: Globe,
    color: "bg-accent",
    desc: "Study abroad, exchange programmes & MOU details",
    timing: "Mon–Fri, 10 AM – 4 PM",
  },
  {
    dept: "Hostel",
    email: "hostel@rathinam.in",
    icon: Home,
    color: "bg-primary",
    desc: "Accommodation, facilities & hostel fee enquiries",
    timing: "All days, 8 AM – 8 PM",
  },
];

const SOCIAL = [
  {
    name: "Facebook",
    href: "https://facebook.com/rathinamcollege",
    Icon: FaFacebookF,
    hoverBg: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rathinamcollege",
    Icon: FaInstagram,
    hoverBg: "hover:bg-pink-600",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/school/rathinamcollege",
    Icon: FaLinkedinIn,
    hoverBg: "hover:bg-blue-700",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/rathinamcollege",
    Icon: FaYoutube,
    hoverBg: "hover:bg-red-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rathinamcollege",
    Icon: FaTwitter,
    hoverBg: "hover:bg-sky-500",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  program: "",
  subject: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(f: FormState): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim()) e.name = "Full name is required";
  if (!f.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Enter a valid email address";
  if (!f.phone.trim()) e.phone = "Phone number is required";
  else if (!/^\+?[0-9\s\-]{7,15}$/.test(f.phone))
    e.phone = "Enter a valid phone number";
  if (!f.program) e.program = "Please select a program";
  if (!f.subject.trim()) e.subject = "Subject is required";
  if (!f.message.trim()) e.message = "Message is required";
  return e;
}

// ── 3D Location Pin ───────────────────────────────────────────────────────────
function LocationPinMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      // gentle bob
      groupRef.current.position.y =
        Math.sin(_state.clock.elapsedTime * 1.2) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Pin sphere top */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.52, 24, 24]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#dc2626"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Inner dot */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color="#fff"
          emissive="#fff"
          emissiveIntensity={0.6}
        />
      </mesh>
      {/* Pin stem */}
      <mesh position={[0, -0.22, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.18, 1.2, 16]} />
        <meshStandardMaterial color="#b91c1c" />
      </mesh>
      {/* Shadow disc */}
      <mesh position={[0, -0.88, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.32, 24]} />
        <meshBasicMaterial color="#000" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const mutation = useSubmitContactInquiry();

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(field: keyof FormState) {
    const errs = validateForm(form);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const payload: ContactInquiry = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      courseInterest: form.program,
      message: `Subject: ${form.subject}\n\n${form.message}`,
    };
    mutation.mutate(payload, {
      onSuccess: () => {
        setSubmitted(true);
        setForm(EMPTY_FORM);
        setErrors({});
      },
    });
  }

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newsletterEmail.trim()) setNewsletterDone(true);
  }

  const inputCls =
    "w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth";

  return (
    <div data-ocid="contact.page">
      {/* ── Hero Banner ── */}
      <div
        data-ocid="contact.hero_section"
        className="relative h-64 md:h-80 overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/contact-hero.dim_1400x500.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <nav className="flex items-center gap-2 text-primary-foreground/70 text-xs mb-3">
              <a
                href="/"
                className="hover:text-primary-foreground transition-colors"
              >
                Home
              </a>
              <span>/</span>
              <span className="text-primary-foreground font-semibold">
                Contact Us
              </span>
            </nav>
            <Badge variant="secondary" className="mb-3">
              We're Here to Help
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 mt-2 text-base md:text-lg max-w-xl">
              Rathinam Group of Institutions, Eachanari, Coimbatore — reach out
              and we respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* ── Contact Details + Form ── */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: details + 3D pin + social */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            data-ocid="contact.details_panel"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-sm">
                Visit us, call us, or drop an email. Our counsellors are ready
                to guide you.
              </p>
            </div>

            {/* 3D location pin decoration */}
            <div className="flex justify-center" aria-hidden="true">
              <div style={{ width: 120, height: 130 }}>
                <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[3, 5, 3]} intensity={1.2} />
                  <LocationPinMesh />
                </Canvas>
              </div>
            </div>

            {[
              {
                Icon: MapPin,
                color: "bg-primary/10",
                iconColor: "text-primary",
                label: "Address",
                content: (
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Rathinam Group of Institutions
                    <br />
                    Eachanari, Coimbatore – 641021
                    <br />
                    Tamil Nadu, India
                  </p>
                ),
              },
              {
                Icon: Phone,
                color: "bg-secondary/10",
                iconColor: "text-secondary",
                label: "Phone",
                content: (
                  <a
                    href="tel:+914222345678"
                    data-ocid="contact.phone_link"
                    className="text-secondary text-sm font-semibold hover:underline"
                  >
                    +91-422-2345678
                  </a>
                ),
              },
              {
                Icon: Mail,
                color: "bg-accent/10",
                iconColor: "text-accent",
                label: "Email",
                content: (
                  <a
                    href="mailto:info@rathinam.in"
                    data-ocid="contact.email_link"
                    className="text-accent text-sm font-semibold hover:underline"
                  >
                    info@rathinam.in
                  </a>
                ),
              },
              {
                Icon: Clock,
                color: "bg-primary/10",
                iconColor: "text-primary",
                label: "Office Hours",
                content: (
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Monday – Saturday &nbsp;|&nbsp; 9:00 AM – 5:00 PM
                  </p>
                ),
              },
            ].map(({ Icon, color, iconColor, label, content }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-subtle"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {label}
                  </p>
                  {content}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div>
              <p className="font-semibold text-foreground text-sm mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                {SOCIAL.map(({ name, href, Icon, hoverBg }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    data-ocid={`contact.social_${name.toLowerCase()}_link`}
                    className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-smooth ${hoverBg} hover:text-white`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: inquiry form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div
                data-ocid="contact.form_success_state"
                className="flex flex-col items-center justify-center text-center py-16 px-8 bg-card border border-border rounded-2xl shadow-card gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out to Rathinam Group of Institutions.
                  Our team will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.send_another_button"
                  className="btn-outline text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                data-ocid="contact.inquiry_form"
                className="bg-card border border-border rounded-2xl shadow-card p-8 space-y-5"
              >
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                    Send an Inquiry
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Fill in your details and we'll get back to you shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor="inq-name"
                      className="text-sm font-semibold text-foreground"
                    >
                      Full Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="inq-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="Your full name"
                      data-ocid="contact.name_input"
                      className={inputCls}
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.name_field_error"
                        className="text-destructive text-xs"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="inq-email"
                      className="text-sm font-semibold text-foreground"
                    >
                      Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="inq-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="you@example.com"
                      data-ocid="contact.email_input"
                      className={inputCls}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.email_field_error"
                        className="text-destructive text-xs"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label
                      htmlFor="inq-phone"
                      className="text-sm font-semibold text-foreground"
                    >
                      Phone <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="inq-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur("phone")}
                      placeholder="+91 98765 43210"
                      data-ocid="contact.phone_input"
                      className={inputCls}
                    />
                    {errors.phone && (
                      <p
                        data-ocid="contact.phone_field_error"
                        className="text-destructive text-xs"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Program Interest */}
                  <div className="space-y-1">
                    <label
                      htmlFor="inq-program"
                      className="text-sm font-semibold text-foreground"
                    >
                      Program Interest <span className="text-secondary">*</span>
                    </label>
                    <select
                      id="inq-program"
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      onBlur={() => handleBlur("program")}
                      data-ocid="contact.program_select"
                      className={inputCls}
                    >
                      <option value="">Select a program…</option>
                      {PROGRAMS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.program && (
                      <p
                        data-ocid="contact.program_field_error"
                        className="text-destructive text-xs"
                      >
                        {errors.program}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label
                    htmlFor="inq-subject"
                    className="text-sm font-semibold text-foreground"
                  >
                    Subject <span className="text-secondary">*</span>
                  </label>
                  <input
                    id="inq-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={() => handleBlur("subject")}
                    placeholder="What is your inquiry about?"
                    data-ocid="contact.subject_input"
                    className={inputCls}
                  />
                  {errors.subject && (
                    <p
                      data-ocid="contact.subject_field_error"
                      className="text-destructive text-xs"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label
                    htmlFor="inq-message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="inq-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us more about your query…"
                    data-ocid="contact.message_textarea"
                    className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.message_field_error"
                      className="text-destructive text-xs"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {mutation.isError && (
                  <p
                    data-ocid="contact.form_error_state"
                    className="text-destructive text-sm"
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  data-ocid="contact.submit_button"
                  className="w-full btn-secondary flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {mutation.isPending ? (
                    <span className="w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {mutation.isPending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>

      {/* ── Map Section ── */}
      <Section
        className="section-alt"
        title="Find Us on the Map"
        subtitle="Rathinam Group of Institutions, Eachanari, Coimbatore – 641021, Tamil Nadu"
        centered
        data-ocid="contact.map_section"
      >
        <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
          <iframe
            title="Rathinam Group of Institutions Location – Coimbatore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2!2d76.9366!3d10.9754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85e6e3b8d5c2f%3A0x0!2sRathinam%20Group%20of%20Institutions%2C%20Eachanari%2C%20Coimbatore%2C%20Tamil%20Nadu%20641021!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Eachanari, Coimbatore – 641021, Tamil Nadu, India</span>
          <a
            href="https://maps.google.com/?q=Rathinam+Group+of+Institutions+Eachanari+Coimbatore"
            target="_blank"
            rel="noreferrer"
            data-ocid="contact.maps_external_link"
            className="ml-2 text-primary font-semibold hover:underline flex items-center gap-1"
          >
            Open in Maps <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </Section>

      {/* ── Department Contacts ── */}
      <Section
        title="Department Contacts"
        subtitle="Reach the right team directly for faster responses"
        centered
        data-ocid="contact.departments_section"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPT_CONTACTS.map(
            ({ dept, email, icon: Icon, color, desc, timing }, i) => (
              <motion.div
                key={dept}
                data-ocid={`contact.dept_card.${i + 1}`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-subtle hover:shadow-elevated transition-smooth hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mx-auto mb-4 shadow-card`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-1">
                  {dept}
                </h3>
                <p className="text-muted-foreground text-xs mb-3 min-h-[2.5rem]">
                  {desc}
                </p>
                <a
                  href={`mailto:${email}`}
                  data-ocid={`contact.dept_email_link.${i + 1}`}
                  className="text-primary text-sm font-semibold hover:underline break-all"
                >
                  {email}
                </a>
                <Badge variant="muted" className="mt-3 mx-auto block w-fit">
                  {timing}
                </Badge>
              </motion.div>
            ),
          )}
        </div>
      </Section>

      {/* ── Newsletter ── */}
      <section
        data-ocid="contact.newsletter_section"
        className="bg-gradient-hero-full py-16"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-2">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest news, events, and
            placement updates from Rathinam Group of Institutions, Eachanari,
            Coimbatore.
          </p>

          {newsletterDone ? (
            <div
              data-ocid="contact.newsletter_success_state"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-6 py-4"
            >
              <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              <p className="text-primary-foreground font-semibold">
                You're subscribed! Welcome to the Rathinam family.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              data-ocid="contact.newsletter_form"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                data-ocid="contact.newsletter_email_input"
                className="flex-1 h-12 px-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 backdrop-blur-sm"
              />
              <button
                type="submit"
                data-ocid="contact.newsletter_subscribe_button"
                className="btn-secondary h-12 px-6 rounded-lg font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
