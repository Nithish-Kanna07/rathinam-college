import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, G as GraduationCap, P as Phone, C as ChevronDown, M as Mail } from "./index-DOfvp4Z2.js";
import { c as cn, B as Badge, S as Section } from "./Section-BdvItxFc.js";
import { b as useSubmitContactInquiry } from "./useBackend-5YnAgzFD.js";
import { m as motion } from "./proxy-MM0XfJfO.js";
import { D as Download } from "./download-CPoApM8e.js";
import { C as Calendar } from "./calendar--znboOEL.js";
import { B as BookOpen } from "./book-open-CcbPGPb2.js";
import { A as Award } from "./award-BNk4Apbz.js";
import { C as CircleCheck } from "./circle-check-DVtVve72.js";
import { S as Send } from "./send-DQ5G1Z3T.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle hover:shadow-card",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-card hover:shadow-elevated",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-muted/60",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-subtle hover:shadow-card",
  hero: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elevated font-bold tracking-wide",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
};
const sizeStyles = {
  sm: "h-8 px-3 text-xs rounded-md",
  md: "h-9 px-4 text-sm rounded-md",
  lg: "h-11 px-6 text-sm rounded-lg",
  xl: "h-13 px-8 text-base rounded-full",
  icon: "h-9 w-9 rounded-md"
};
const Button = reactExports.forwardRef(
  ({
    variant = "primary",
    size = "md",
    loading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    href,
    ...props
  }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      sizeStyles[size],
      variantStyles[variant],
      className
    );
    if (href) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: href, className: classes, children: [
        leftIcon,
        children,
        rightIcon
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        disabled: disabled || loading,
        className: classes,
        ...props,
        children: [
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }) : leftIcon,
          children,
          !loading && rightIcon
        ]
      }
    );
  }
);
Button.displayName = "Button";
function Card({ className, children, hover, onClick }) {
  const handleKeyDown = (e) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      onClick,
      onKeyDown: handleKeyDown,
      role: onClick ? "button" : void 0,
      tabIndex: onClick ? 0 : void 0,
      className: cn(
        "bg-card rounded-xl border border-border shadow-card",
        hover && "cursor-pointer hover:shadow-elevated hover:-translate-y-1 transition-smooth",
        className
      ),
      children
    }
  );
}
function CardHeader({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("px-6 pt-6 pb-3", className), children });
}
function CardContent({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("px-6 pb-6", className), children });
}
function CardTitle({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h3",
    {
      className: cn(
        "font-display font-semibold text-lg text-foreground leading-tight",
        className
      ),
      children
    }
  );
}
const admissionSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill Application",
    desc: "Complete the online form with personal & academic details. Upload your passport-size photo."
  },
  {
    icon: Upload,
    step: "02",
    title: "Submit Documents",
    desc: "Upload mark sheets, transfer certificate, community certificate and government-issued ID."
  },
  {
    icon: ListChecks,
    step: "03",
    title: "Merit List",
    desc: "Merit list published on the website. Shortlisted candidates receive SMS & email notification."
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Fee Payment",
    desc: "Pay admission fee online or at the college cashier within 3 working days of selection letter."
  },
  {
    icon: BookOpen,
    step: "05",
    title: "Classes Begin",
    desc: "Collect your ID card, attend orientation and kick-start your academic journey at Rathinam."
  }
];
const programs = [
  {
    name: "B.Sc / B.Com / BBA (Arts & Science)",
    type: "UG",
    duration: "3 Years",
    eligibility: "10+2 (Any Stream) — Min 50%",
    seats: 60
  },
  {
    name: "B.E / B.Tech (Engineering)",
    type: "UG",
    duration: "4 Years",
    eligibility: "10+2 with PCM — Min 60% (TNEA)",
    seats: 60
  },
  {
    name: "MBA",
    type: "PG",
    duration: "2 Years",
    eligibility: "Any UG Degree + Entrance Test",
    seats: 60
  },
  {
    name: "MCA",
    type: "PG",
    duration: "3 Years",
    eligibility: "BSc CS / BCA / BIT — Min 50%",
    seats: 30
  },
  {
    name: "M.Sc / M.Com",
    type: "PG",
    duration: "2 Years",
    eligibility: "Relevant UG Degree — Min 50%",
    seats: 30
  },
  {
    name: "Ph.D Programs",
    type: "Research",
    duration: "3–5 Yrs",
    eligibility: "PG with Min 55% Marks + Research Proposal",
    seats: 10
  }
];
function getBadgeVariant(type) {
  if (type === "UG") return "primary";
  if (type === "PG") return "accent";
  return "secondary";
}
const brochures = [
  {
    title: "B.Sc Computer Science",
    dept: "Arts & Science",
    color: "from-blue-700 to-blue-900",
    icon: "💻"
  },
  {
    title: "B.Com & BBA",
    dept: "Commerce & Mgmt",
    color: "from-emerald-600 to-emerald-800",
    icon: "📊"
  },
  {
    title: "MBA Program",
    dept: "Business School",
    color: "from-purple-600 to-purple-800",
    icon: "🎓"
  },
  {
    title: "MCA Program",
    dept: "Computer Applications",
    color: "from-orange-600 to-orange-800",
    icon: "🖥️"
  },
  {
    title: "B.E Mechanical",
    dept: "Engineering",
    color: "from-rose-600 to-rose-800",
    icon: "⚙️"
  },
  {
    title: "B.E Civil Engineering",
    dept: "Engineering",
    color: "from-amber-600 to-amber-800",
    icon: "🏗️"
  },
  {
    title: "B.E ECE",
    dept: "Engineering",
    color: "from-indigo-600 to-indigo-800",
    icon: "📡"
  },
  {
    title: "B.E CSE",
    dept: "Engineering",
    color: "from-teal-600 to-teal-800",
    icon: "🔧"
  }
];
const feeRows = [
  {
    course: "B.Sc CS / IT",
    tuition: "₹45,000",
    hostel: "₹60,000",
    transport: "₹18,000"
  },
  {
    course: "B.Com / BBA",
    tuition: "₹40,000",
    hostel: "₹60,000",
    transport: "₹18,000"
  },
  {
    course: "B.E / B.Tech",
    tuition: "₹90,000",
    hostel: "₹65,000",
    transport: "₹20,000"
  },
  {
    course: "MBA",
    tuition: "₹1,10,000",
    hostel: "₹65,000",
    transport: "₹20,000"
  },
  {
    course: "MCA",
    tuition: "₹75,000",
    hostel: "₹65,000",
    transport: "₹20,000"
  },
  {
    course: "M.Sc (Science)",
    tuition: "₹55,000",
    hostel: "₹60,000",
    transport: "₹18,000"
  }
];
const eligibilitySections = [
  {
    title: "UG Programs — Arts, Science & Commerce",
    criteria: [
      "Passed 10+2 from a recognized board",
      "Minimum 50% aggregate marks in all subjects",
      "No entrance exam required for most programs",
      "Age: 17–25 years as of July 1st of admission year"
    ]
  },
  {
    title: "UG Engineering Programs — B.E / B.Tech",
    criteria: [
      "Passed 10+2 with Physics, Chemistry & Mathematics",
      "Minimum 60% aggregate in PCM subjects",
      "Must have appeared in TNEA counseling (Tamil Nadu)",
      "Age: 17–25 years as of July 31st of admission year"
    ]
  },
  {
    title: "PG Programs — MBA, MCA & M.Sc",
    criteria: [
      "Relevant UG degree from a recognized university",
      "Minimum 50% aggregate marks in qualifying UG degree",
      "MBA: Any graduate degree + college entrance test",
      "MCA: BSc CS / BCA / BIT with Mathematics as subject"
    ]
  }
];
const faqs = [
  {
    q: "Is an entrance exam required for admission?",
    a: "For most UG programs (Arts, Science, Commerce) no entrance exam is required — admission is based on merit (10+2 marks). B.E/B.Tech admissions go through TNEA counseling. MBA requires a college-conducted entrance test."
  },
  {
    q: "When do classes start for 2024–25?",
    a: "Classes for 2024–25 begin on August 1st, 2024. A freshers' orientation program is held July 30–31, 2024. All admitted students must complete reporting formalities by July 28, 2024."
  },
  {
    q: "What is the last date to apply?",
    a: "The last date for online applications is July 31st, 2024. Seats fill quickly, so early application is strongly advised. Some programs may close earlier due to capacity."
  },
  {
    q: "Are hostel facilities available for outstation students?",
    a: "Yes — separate hostels for boys and girls are available on campus at Eachanari, Coimbatore, offering furnished rooms, nutritious meals, Wi-Fi, gym access, and 24/7 security. Annual hostel fee is approximately ₹60,000–₹65,000."
  },
  {
    q: "What scholarships are available?",
    a: "Rathinam Group of Institutions offers Merit Scholarships (25%–100% fee waiver), Sports Scholarships for state/national athletes, Tamil Nadu Government SC/ST scholarships, and education loan facilitation through SBI, Canara Bank, and Indian Bank."
  },
  {
    q: "Can I transfer my admission from another college?",
    a: "Lateral entry and transfer admissions are accepted for select programs at 2nd-year level. Candidates must provide a transfer certificate, NOC from their previous institution, and qualifying marks sheet. Availability depends on seat vacancy."
  }
];
function StepCard({
  icon: Icon,
  step,
  title,
  desc,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      whileInView: { opacity: 1, y: 0 },
      initial: { opacity: 0, y: 24 },
      viewport: { once: true },
      transition: { delay: index * 0.1 },
      className: "flex flex-col items-center text-center",
      "data-ocid": `admissions.step.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 bg-secondary text-secondary-foreground text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-card", children: step })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-sm mb-2", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed max-w-[180px]", children: desc })
      ]
    }
  );
}
function AccordionItem({
  title,
  criteria,
  defaultOpen = false
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  const ocidKey = title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-muted/40 transition-smooth text-left",
        onClick: () => setOpen(!open),
        "data-ocid": `eligibility.${ocidKey}.toggle`,
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground text-sm md:text-base", children: title }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5 text-primary shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-muted-foreground shrink-0" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-5 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: criteria.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-accent mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: c })
    ] }, c)) }) })
  ] });
}
function FAQItem({ q, a, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-start justify-between px-6 py-4 bg-card hover:bg-muted/40 transition-smooth text-left gap-4",
        onClick: () => setOpen(!open),
        "data-ocid": `faq.item.${index + 1}`,
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm leading-relaxed", children: q }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-muted-foreground shrink-0 mt-0.5" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 bg-muted/20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: a }) })
  ] });
}
function ContactForm() {
  const mutation = useSubmitContactInquiry();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: ""
  });
  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form, {
      onSuccess: () => setForm({
        name: "",
        email: "",
        phone: "",
        courseInterest: "",
        message: ""
      })
    });
  };
  if (mutation.isSuccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", "data-ocid": "contact.success_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 text-accent mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: "Request Sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Our admissions team will contact you within 24 working hours." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-4",
      "data-ocid": "contact_form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "cf-name",
              className: "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide",
              children: "Full Name *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "cf-name",
                name: "name",
                value: form.name,
                onChange: set("name"),
                required: true,
                placeholder: "Your full name",
                className: "w-full pl-9 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                "data-ocid": "contact.name.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "cf-email",
                className: "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide",
                children: "Email *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "cf-email",
                  name: "email",
                  value: form.email,
                  onChange: set("email"),
                  required: true,
                  type: "email",
                  placeholder: "you@email.com",
                  className: "w-full pl-9 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                  "data-ocid": "contact.email.input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "cf-phone",
                className: "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide",
                children: "Phone *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "cf-phone",
                  name: "phone",
                  value: form.phone,
                  onChange: set("phone"),
                  required: true,
                  placeholder: "+91 98765 43210",
                  className: "w-full pl-9 pr-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                  "data-ocid": "contact.phone.input"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "cf-program",
              className: "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide",
              children: "Program Interest *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "cf-program",
              name: "courseInterest",
              value: form.courseInterest,
              onChange: set("courseInterest"),
              required: true,
              className: "w-full px-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
              "data-ocid": "contact.program.select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a program…" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "B.Sc Computer Science", children: "B.Sc Computer Science" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "B.Com / BBA", children: "B.Com / BBA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "B.E / B.Tech Engineering", children: "B.E / B.Tech Engineering" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MBA", children: "MBA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MCA", children: "MCA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "M.Sc (Science)", children: "M.Sc (Science)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Ph.D Program", children: "Ph.D Program" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "cf-message",
              className: "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide",
              children: "Message (optional)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "cf-message",
              name: "message",
              value: form.message,
              onChange: set("message"),
              rows: 3,
              placeholder: "Any specific query about fees, scholarships, hostel…",
              className: "w-full px-4 py-2.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none",
              "data-ocid": "contact.message.textarea"
            }
          )
        ] }),
        mutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3",
            "data-ocid": "contact.error_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Something went wrong. Please try again." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: mutation.isPending,
            className: "w-full btn-secondary flex items-center justify-center gap-2",
            "data-ocid": "contact.submit_button",
            children: [
              mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
              mutation.isPending ? "Sending…" : "Request Information"
            ]
          }
        )
      ]
    }
  );
}
function AdmissionsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[460px] flex items-center overflow-hidden",
        "data-ocid": "admissions.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://picsum.photos/seed/rathinam-admissions/1600/600",
              alt: "Admissions at Rathinam Group of Institutions",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4 text-sm px-3 py-1", children: "🎓 Admissions Open — 2024–25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-4", children: [
                  "Your Journey to",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Excellence" }),
                  " Begins"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-xl", children: "Join Rathinam Group of Institutions, Eachanari, Coimbatore — where world-class education meets industry-ready skills." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#apply-now",
                      className: "btn-secondary inline-flex items-center gap-2",
                      "data-ocid": "admissions.apply_button",
                      children: "Apply Online Now"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#brochures",
                      className: "inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/60 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-smooth",
                      "data-ocid": "admissions.brochures_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                        " Download Brochure"
                      ]
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-secondary-foreground", children: [
      {
        icon: Calendar,
        label: "Last Date to Apply:",
        value: "31st July 2024"
      },
      {
        icon: BookOpen,
        label: "Classes Start:",
        value: "1st August 2024"
      },
      {
        icon: GraduationCap,
        label: "Orientation:",
        value: "30–31 July 2024"
      }
    ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 font-semibold text-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black bg-secondary-foreground/20 rounded px-2 py-0.5", children: value })
        ]
      },
      label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        title: "Admission Process — 5 Simple Steps",
        subtitle: "Follow these steps to secure your seat at Rathinam Group of Institutions.",
        centered: true,
        className: "bg-background",
        "data-ocid": "admissions.steps.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8", children: admissionSteps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StepCard, { ...s, index: i }, s.step)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#apply-now",
              className: "btn-secondary inline-flex items-center gap-2",
              "data-ocid": "admissions.steps.apply_button",
              children: "Start Your Application"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Programs Offered 2024–25",
        subtitle: "Transparent fee structure — no hidden charges. Merit-based selection only.",
        className: "section-alt",
        "data-ocid": "admissions.programs.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-primary text-primary-foreground", children: [
            "Program",
            "Level",
            "Duration",
            "Eligibility",
            "Intake",
            "Action"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-5 py-4 font-semibold text-left first:text-left last:text-center [&:not(:first-child):not(:last-child)]:text-center whitespace-nowrap",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: programs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: `border-b border-border transition-smooth hover:bg-muted/40 ${i % 2 === 0 ? "bg-card" : "bg-background"}`,
              "data-ocid": `programs.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-semibold text-foreground", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: getBadgeVariant(p.type), children: p.type }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-center text-muted-foreground font-medium", children: p.duration }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-muted-foreground text-xs", children: p.eligibility }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-center font-bold text-primary", children: [
                  p.seats,
                  " Seats"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#apply-now",
                    className: "btn-outline text-xs px-3 py-1.5 inline-block",
                    "data-ocid": `programs.apply_button.${i + 1}`,
                    children: "Apply"
                  }
                ) })
              ]
            },
            p.name
          )) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        id: "brochures",
        title: "Download Department Brochures",
        subtitle: "Get detailed curriculum, faculty profiles, and career outcomes for each department.",
        centered: true,
        className: "bg-background",
        "data-ocid": "admissions.brochures.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://drive.google.com/drive/folders/sample",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "admissions.brochures.download_all.primary_button",
              className: "inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-elevated hover:scale-105 transition-smooth text-base",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5" }),
                "Download All Brochures (PDF Bundle)"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5", children: brochures.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileInView: { opacity: 1, scale: 1 },
              initial: { opacity: 0, scale: 0.94 },
              viewport: { once: true },
              transition: { delay: i * 0.07 },
              className: "bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth",
              "data-ocid": `brochure.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `bg-gradient-to-br ${b.color} p-6 flex flex-col items-center justify-center`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: b.icon })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1 font-medium", children: b.dept }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm leading-tight mb-3", children: b.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://drive.google.com/drive/folders/sample",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-smooth",
                      "data-ocid": `brochure.download_button.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                        " Download PDF"
                      ]
                    }
                  )
                ] })
              ]
            },
            b.title
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Eligibility Criteria",
        subtitle: "Review requirements for each program category before applying.",
        className: "section-alt",
        "data-ocid": "admissions.eligibility.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: eligibilitySections.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { ...e, defaultOpen: i === 0 }, e.title)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-background", "data-ocid": "admissions.fees.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Fee Structure 2024–25" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Annual fees (approximate) — subject to revision. Government scholarships apply where eligible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-primary/10 text-primary", children: ["Course", "Tuition", "Hostel", "Transport"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-4 py-3 font-semibold text-left first:text-left [&:not(:first-child)]:text-right",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: feeRows.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: `border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`,
              "data-ocid": `fees.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: f.course }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-primary", children: f.tuition }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-muted-foreground", children: f.hostel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-muted-foreground", children: f.transport })
              ]
            },
            f.course
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Scholarships & Financial Aid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Quality education should be accessible — here's how we help." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
          {
            icon: "🏆",
            title: "Merit Scholarship",
            desc: "25%–100% fee waiver for students scoring above 85% in qualifying exam. Top 3 students get full scholarship.",
            badge: "Up to 100% Waiver",
            variant: "green"
          },
          {
            icon: "⚽",
            title: "Sports Scholarship",
            desc: "State and national-level sports achievers receive 50% fee concession, valid for the entire program duration.",
            badge: "50% Fee Off",
            variant: "placement"
          },
          {
            icon: "🏛️",
            title: "SC/ST Govt. Concession",
            desc: "Full tuition fee waiver under Tamil Nadu government scholarship scheme for eligible SC/ST category candidates.",
            badge: "Full Tuition Free",
            variant: "green"
          },
          {
            icon: "🏦",
            title: "Education Loan Assist",
            desc: "Tie-ups with SBI, Canara & Indian Bank for hassle-free education loan processing. Zero collateral up to ₹7.5L.",
            badge: "Low Interest Loans",
            variant: "primary"
          }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "border-l-4 border-l-accent",
            "data-ocid": `scholarship.item.${["Merit Scholarship", "Sports Scholarship", "SC/ST Govt. Concession", "Education Loan Assist"].indexOf(s.title) + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-4 flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground text-sm", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.variant, children: s.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: s.desc })
              ] })
            ] })
          },
          s.title
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to the most common admission queries.",
        className: "section-alt",
        centered: true,
        "data-ocid": "admissions.faq.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: f.q, a: f.a, index: i }, f.q)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        id: "apply-now",
        className: "bg-background",
        "data-ocid": "admissions.contact.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: "Seats Filling Fast" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight", children: [
              "Ready to Begin Your",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Academic Journey?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed text-sm", children: "Fill out the inquiry form and our admissions counselor will contact you within 24 hours to guide you through the process and help you select the right program at our Eachanari campus." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: [
              {
                icon: Award,
                title: "98% Placement Rate",
                desc: "Industry-best record with 350+ partner companies."
              },
              {
                icon: GraduationCap,
                title: "NAAC A++ Accredited",
                desc: "Top-tier academic quality certified by national bodies."
              },
              {
                icon: BookOpen,
                title: "50+ Programs",
                desc: "UG, PG, MBA, MCA, Ph.D across all disciplines."
              }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: item.desc })
                  ] })
                ]
              },
              item.title
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground text-sm mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-primary" }),
                " Direct Contact"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "📞",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "tel:+914222345678",
                      className: "hover:text-primary transition-smooth font-medium",
                      children: "+91-422-2345678"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "📧",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "mailto:admissions@rathinam.in",
                      className: "hover:text-primary transition-smooth font-medium",
                      children: "admissions@rathinam.in"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "📍 Eachanari, Coimbatore – 641021, Tamil Nadu" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🕐 Monday–Saturday: 9:00 AM – 5:00 PM" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-elevated", "data-ocid": "contact.dialog", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: "Request More Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Get personalised guidance from our admissions counselors." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
          ] })
        ] })
      }
    )
  ] });
}
export {
  AdmissionsPage as default
};
