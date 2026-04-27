import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as MapPin, P as Phone, M as Mail, F as FaFacebookF, b as FaInstagram, d as FaLinkedinIn, e as FaYoutube, f as FaTwitter, G as GraduationCap } from "./index-DOfvp4Z2.js";
import { f as Canvas, d as useFrame } from "./react-three-fiber.esm-m-0ZPZ_o.js";
import { B as Badge, S as Section } from "./Section-BdvItxFc.js";
import { b as useSubmitContactInquiry } from "./useBackend-5YnAgzFD.js";
import { m as motion } from "./proxy-MM0XfJfO.js";
import { C as Clock } from "./clock-DtCPNENW.js";
import { C as CircleCheck } from "./circle-check-DVtVve72.js";
import { S as Send } from "./send-DQ5G1Z3T.js";
import { U as Users } from "./users-Dgt8fP5D.js";
import { G as Globe } from "./globe-C6HpeR6t.js";
import { H as House } from "./house-j8a2l1bH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
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
  "Other"
];
const DEPT_CONTACTS = [
  {
    dept: "Admissions",
    email: "admissions@rathinam.in",
    icon: GraduationCap,
    color: "bg-primary",
    desc: "Courses, eligibility & application queries",
    timing: "Mon–Sat, 9 AM – 5 PM"
  },
  {
    dept: "Placements",
    email: "placements@rathinam.in",
    icon: Users,
    color: "bg-secondary",
    desc: "Recruitment, internship & corporate tie-ups",
    timing: "Mon–Fri, 9 AM – 5 PM"
  },
  {
    dept: "International",
    email: "international@rathinam.in",
    icon: Globe,
    color: "bg-accent",
    desc: "Study abroad, exchange programmes & MOU details",
    timing: "Mon–Fri, 10 AM – 4 PM"
  },
  {
    dept: "Hostel",
    email: "hostel@rathinam.in",
    icon: House,
    color: "bg-primary",
    desc: "Accommodation, facilities & hostel fee enquiries",
    timing: "All days, 8 AM – 8 PM"
  }
];
const SOCIAL = [
  {
    name: "Facebook",
    href: "https://facebook.com/rathinamcollege",
    Icon: FaFacebookF,
    hoverBg: "hover:bg-blue-600"
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rathinamcollege",
    Icon: FaInstagram,
    hoverBg: "hover:bg-pink-600"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/school/rathinamcollege",
    Icon: FaLinkedinIn,
    hoverBg: "hover:bg-blue-700"
  },
  {
    name: "YouTube",
    href: "https://youtube.com/rathinamcollege",
    Icon: FaYoutube,
    hoverBg: "hover:bg-red-600"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rathinamcollege",
    Icon: FaTwitter,
    hoverBg: "hover:bg-sky-500"
  }
];
const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  program: "",
  subject: "",
  message: ""
};
function validateForm(f) {
  const e = {};
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
function LocationPinMesh() {
  const groupRef = reactExports.useRef(null);
  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.position.y = Math.sin(_state.clock.elapsedTime * 1.2) * 0.12;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.6, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.52, 24, 24] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#ef4444",
          emissive: "#dc2626",
          emissiveIntensity: 0.3
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.6, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.22, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#fff",
          emissive: "#fff",
          emissiveIntensity: 0.6
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, -0.22, 0], rotation: [Math.PI, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("coneGeometry", { args: [0.18, 1.2, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#b91c1c" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, -0.88, 0], rotation: [-Math.PI / 2, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circleGeometry", { args: [0.32, 24] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#000", transparent: true, opacity: 0.18 })
    ] })
  ] });
}
function ContactPage() {
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [newsletterEmail, setNewsletterEmail] = reactExports.useState("");
  const [newsletterDone, setNewsletterDone] = reactExports.useState(false);
  const mutation = useSubmitContactInquiry();
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  }
  function handleBlur(field) {
    const errs = validateForm(form);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      courseInterest: form.program,
      message: `Subject: ${form.subject}

${form.message}`
    };
    mutation.mutate(payload, {
      onSuccess: () => {
        setSubmitted(true);
        setForm(EMPTY_FORM);
        setErrors({});
      }
    });
  }
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    if (newsletterEmail.trim()) setNewsletterDone(true);
  }
  const inputCls = "w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "contact.hero_section",
        className: "relative h-64 md:h-80 overflow-hidden",
        style: {
          backgroundImage: "url('/assets/generated/contact-hero.dim_1400x500.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col justify-center px-6 md:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-primary-foreground/70 text-xs mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/",
                  className: "hover:text-primary-foreground transition-colors",
                  children: "Home"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-semibold", children: "Contact Us" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "We're Here to Help" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mt-2 text-base md:text-lg max-w-xl", children: "Rathinam Group of Institutions, Eachanari, Coimbatore — reach out and we respond within 24 hours." })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "lg:col-span-2 space-y-5",
          "data-ocid": "contact.details_panel",
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-1", children: "Get In Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Visit us, call us, or drop an email. Our counsellors are ready to guide you." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 120, height: 130 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 3.2], fov: 42 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.8 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [3, 5, 3], intensity: 1.2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(LocationPinMesh, {})
            ] }) }) }),
            [
              {
                Icon: MapPin,
                color: "bg-primary/10",
                iconColor: "text-primary",
                label: "Address",
                content: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-0.5", children: [
                  "Rathinam Group of Institutions",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Eachanari, Coimbatore – 641021",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Tamil Nadu, India"
                ] })
              },
              {
                Icon: Phone,
                color: "bg-secondary/10",
                iconColor: "text-secondary",
                label: "Phone",
                content: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:+914222345678",
                    "data-ocid": "contact.phone_link",
                    className: "text-secondary text-sm font-semibold hover:underline",
                    children: "+91-422-2345678"
                  }
                )
              },
              {
                Icon: Mail,
                color: "bg-accent/10",
                iconColor: "text-accent",
                label: "Email",
                content: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "mailto:info@rathinam.in",
                    "data-ocid": "contact.email_link",
                    className: "text-accent text-sm font-semibold hover:underline",
                    children: "info@rathinam.in"
                  }
                )
              },
              {
                Icon: Clock,
                color: "bg-primary/10",
                iconColor: "text-primary",
                label: "Office Hours",
                content: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Monday – Saturday  |  9:00 AM – 5:00 PM" })
              }
            ].map(({ Icon, color, iconColor, label, content }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-subtle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-10 h-10 rounded-lg ${color} flex items-center justify-center flex-shrink-0`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${iconColor}` })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: label }),
                    content
                  ] })
                ]
              },
              label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm mb-3", children: "Follow Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: SOCIAL.map(({ name, href, Icon, hoverBg }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": name,
                  "data-ocid": `contact.social_${name.toLowerCase()}_link`,
                  className: `w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-smooth ${hoverBg} hover:text-white`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
                },
                name
              )) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "lg:col-span-3",
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "contact.form_success_state",
              className: "flex flex-col items-center justify-center text-center py-16 px-8 bg-card border border-border rounded-2xl shadow-card gap-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground", children: "Message Sent!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Thank you for reaching out to Rathinam Group of Institutions. Our team will respond within 24 hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSubmitted(false),
                    "data-ocid": "contact.send_another_button",
                    className: "btn-outline text-sm",
                    children: "Send Another Message"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              noValidate: true,
              "data-ocid": "contact.inquiry_form",
              className: "bg-card border border-border rounded-2xl shadow-card p-8 space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-1", children: "Send an Inquiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Fill in your details and we'll get back to you shortly." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "inq-name",
                        className: "text-sm font-semibold text-foreground",
                        children: [
                          "Full Name ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "inq-name",
                        name: "name",
                        type: "text",
                        value: form.name,
                        onChange: handleChange,
                        onBlur: () => handleBlur("name"),
                        placeholder: "Your full name",
                        "data-ocid": "contact.name_input",
                        className: inputCls
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        "data-ocid": "contact.name_field_error",
                        className: "text-destructive text-xs",
                        children: errors.name
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "inq-email",
                        className: "text-sm font-semibold text-foreground",
                        children: [
                          "Email ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "inq-email",
                        name: "email",
                        type: "email",
                        value: form.email,
                        onChange: handleChange,
                        onBlur: () => handleBlur("email"),
                        placeholder: "you@example.com",
                        "data-ocid": "contact.email_input",
                        className: inputCls
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        "data-ocid": "contact.email_field_error",
                        className: "text-destructive text-xs",
                        children: errors.email
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "inq-phone",
                        className: "text-sm font-semibold text-foreground",
                        children: [
                          "Phone ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "inq-phone",
                        name: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: handleChange,
                        onBlur: () => handleBlur("phone"),
                        placeholder: "+91 98765 43210",
                        "data-ocid": "contact.phone_input",
                        className: inputCls
                      }
                    ),
                    errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        "data-ocid": "contact.phone_field_error",
                        className: "text-destructive text-xs",
                        children: errors.phone
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "inq-program",
                        className: "text-sm font-semibold text-foreground",
                        children: [
                          "Program Interest ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "inq-program",
                        name: "program",
                        value: form.program,
                        onChange: handleChange,
                        onBlur: () => handleBlur("program"),
                        "data-ocid": "contact.program_select",
                        className: inputCls,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a program…" }),
                          PROGRAMS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p))
                        ]
                      }
                    ),
                    errors.program && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        "data-ocid": "contact.program_field_error",
                        className: "text-destructive text-xs",
                        children: errors.program
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "inq-subject",
                      className: "text-sm font-semibold text-foreground",
                      children: [
                        "Subject ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "inq-subject",
                      name: "subject",
                      type: "text",
                      value: form.subject,
                      onChange: handleChange,
                      onBlur: () => handleBlur("subject"),
                      placeholder: "What is your inquiry about?",
                      "data-ocid": "contact.subject_input",
                      className: inputCls
                    }
                  ),
                  errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      "data-ocid": "contact.subject_field_error",
                      className: "text-destructive text-xs",
                      children: errors.subject
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "inq-message",
                      className: "text-sm font-semibold text-foreground",
                      children: [
                        "Message ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "inq-message",
                      name: "message",
                      rows: 4,
                      value: form.message,
                      onChange: handleChange,
                      onBlur: () => handleBlur("message"),
                      placeholder: "Tell us more about your query…",
                      "data-ocid": "contact.message_textarea",
                      className: "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                    }
                  ),
                  errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      "data-ocid": "contact.message_field_error",
                      className: "text-destructive text-xs",
                      children: errors.message
                    }
                  )
                ] }),
                mutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    "data-ocid": "contact.form_error_state",
                    className: "text-destructive text-sm",
                    children: "Something went wrong. Please try again."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: mutation.isPending,
                    "data-ocid": "contact.submit_button",
                    className: "w-full btn-secondary flex items-center justify-center gap-2 disabled:opacity-60",
                    children: [
                      mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                      mutation.isPending ? "Sending…" : "Send Message"
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        className: "section-alt",
        title: "Find Us on the Map",
        subtitle: "Rathinam Group of Institutions, Eachanari, Coimbatore – 641021, Tamil Nadu",
        centered: true,
        "data-ocid": "contact.map_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-elevated border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Rathinam Group of Institutions Location – Coimbatore",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2!2d76.9366!3d10.9754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85e6e3b8d5c2f%3A0x0!2sRathinam%20Group%20of%20Institutions%2C%20Eachanari%2C%20Coimbatore%2C%20Tamil%20Nadu%20641021!5e0!3m2!1sen!2sin!4v1700000000000",
              width: "100%",
              height: "400",
              style: { border: 0 },
              allowFullScreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Eachanari, Coimbatore – 641021, Tamil Nadu, India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://maps.google.com/?q=Rathinam+Group+of+Institutions+Eachanari+Coimbatore",
                target: "_blank",
                rel: "noreferrer",
                "data-ocid": "contact.maps_external_link",
                className: "ml-2 text-primary font-semibold hover:underline flex items-center gap-1",
                children: [
                  "Open in Maps ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Department Contacts",
        subtitle: "Reach the right team directly for faster responses",
        centered: true,
        "data-ocid": "contact.departments_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: DEPT_CONTACTS.map(
          ({ dept, email, icon: Icon, color, desc, timing }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              "data-ocid": `contact.dept_card.${i + 1}`,
              whileInView: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: 20 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "bg-card border border-border rounded-xl p-6 text-center shadow-subtle hover:shadow-elevated transition-smooth hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-14 h-14 rounded-full ${color} flex items-center justify-center mx-auto mb-4 shadow-card`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-1", children: dept }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-3 min-h-[2.5rem]", children: desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `mailto:${email}`,
                    "data-ocid": `contact.dept_email_link.${i + 1}`,
                    className: "text-primary text-sm font-semibold hover:underline break-all",
                    children: email
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "muted", className: "mt-3 mx-auto block w-fit", children: timing })
              ]
            },
            dept
          )
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "contact.newsletter_section",
        className: "bg-gradient-hero-full py-16",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-primary-foreground mb-2", children: "Stay Updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 max-w-lg mx-auto", children: "Subscribe to our newsletter for the latest news, events, and placement updates from Rathinam Group of Institutions, Eachanari, Coimbatore." }),
          newsletterDone ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "contact.newsletter_success_state",
              className: "flex items-center justify-center gap-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-6 py-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground font-semibold", children: "You're subscribed! Welcome to the Rathinam family." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleNewsletterSubmit,
              "data-ocid": "contact.newsletter_form",
              className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "newsletter-email", className: "sr-only", children: "Email address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "newsletter-email",
                    type: "email",
                    value: newsletterEmail,
                    onChange: (e) => setNewsletterEmail(e.target.value),
                    placeholder: "Enter your email address",
                    required: true,
                    "data-ocid": "contact.newsletter_email_input",
                    className: "flex-1 h-12 px-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 backdrop-blur-sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    "data-ocid": "contact.newsletter_subscribe_button",
                    className: "btn-secondary h-12 px-6 rounded-lg font-semibold whitespace-nowrap",
                    children: "Subscribe"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  ContactPage as default
};
