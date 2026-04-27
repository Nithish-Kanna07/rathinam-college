import { Link, useRouter } from "@tanstack/react-router";
import {
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Academics",
    href: "/courses",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "Engineering & Tech", href: "/courses/engineering" },
      { label: "Management", href: "/courses/management" },
      { label: "Arts & Science", href: "/courses/arts-science" },
      { label: "Health Sciences", href: "/courses/health-sciences" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Facilities", href: "/facilities" },
  { label: "International", href: "/international" },
  { label: "Contact", href: "/contact" },
];

function NavItem({
  label,
  href,
  subLinks,
}: {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}) {
  const router = useRouter();
  const isActive =
    router.state.location.pathname === href ||
    (href !== "/" && router.state.location.pathname.startsWith(href));
  const [open, setOpen] = useState(false);

  if (subLinks) {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          to={href}
          data-ocid={`nav.${label.toLowerCase()}.link`}
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-smooth rounded-md ${isActive ? "text-secondary" : "text-primary-foreground/90 hover:text-secondary"}`}
        >
          {label}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </Link>
        {open && (
          <div className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded-lg shadow-elevated z-50 py-1 animate-fade-in">
            {subLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={href}
      data-ocid={`nav.${label.toLowerCase()}.link`}
      className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${isActive ? "text-secondary border-b-2 border-secondary" : "text-primary-foreground/90 hover:text-secondary"}`}
    >
      {label}
    </Link>
  );
}

export function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="bg-primary/95 text-primary-foreground/80 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={11} /> +91-422-2345678
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail size={11} /> info@rathinam.in
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin size={11} /> Eachanari, Coimbatore - 641021
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-primary shadow-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              to="/"
              data-ocid="nav.brand.link"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shadow-card group-hover:scale-105 transition-smooth">
                <GraduationCap
                  size={22}
                  className="text-secondary-foreground"
                />
              </div>
              <div>
                <span className="block font-display text-base font-bold text-primary-foreground leading-tight">
                  Rathinam Group of Institutions
                </span>
                <span className="block text-[10px] text-secondary font-semibold tracking-wide uppercase leading-tight">
                  Eachanari, Coimbatore
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  subLinks={link.children}
                />
              ))}
            </nav>

            {/* Apply Now + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/admissions"
                data-ocid="nav.apply_now.primary_button"
                className="hidden sm:inline-flex items-center px-5 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-full shadow-card hover:shadow-elevated hover:scale-105 transition-smooth"
              >
                Apply Now
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                data-ocid="nav.mobile_menu.button"
                aria-label="Toggle menu"
                className="lg:hidden p-2 rounded-md text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/20 px-4 py-4 space-y-1 animate-slide-up">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-smooth"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              data-ocid="nav.mobile.apply_now.primary_button"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-5 py-2.5 bg-secondary text-secondary-foreground text-sm font-bold rounded-full"
            >
              Apply Now
            </Link>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand col */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <GraduationCap
                    size={22}
                    className="text-secondary-foreground"
                  />
                </div>
                <div>
                  <span className="block font-display text-base font-bold leading-tight">
                    Rathinam Group of Institutions
                  </span>
                  <span className="block text-[10px] text-secondary font-semibold tracking-wide uppercase">
                    Eachanari, Coimbatore
                  </span>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                Igniting careers and shaping tomorrow's leaders since 1994.
                Rathinam Group of Institutions, Eachanari, Coimbatore — Approved
                by AICTE, affiliated with Anna University.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: FaFacebook, href: "#", label: "Facebook" },
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  { Icon: FaYoutube, href: "#", label: "YouTube" },
                  { Icon: FaTwitter, href: "#", label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-smooth"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-base mb-4 text-secondary">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "About College", href: "/about" },
                  { label: "Academic Programs", href: "/courses" },
                  { label: "Admissions 2025", href: "/admissions" },
                  { label: "Placement Records", href: "/placements" },
                  { label: "Campus Facilities", href: "/facilities" },
                  { label: "International Tie-ups", href: "/international" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-smooth flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-display font-bold text-base mb-4 text-secondary">
                Programs
              </h4>
              <ul className="space-y-2">
                {[
                  "B.E. / B.Tech",
                  "M.E. / M.Tech",
                  "MBA / MCA",
                  "BCA / BSc",
                  "B.Com / BBA",
                  "Diploma Programs",
                  "PhD Research",
                ].map((prog) => (
                  <li
                    key={prog}
                    className="text-sm text-primary-foreground/70 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    {prog}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-base mb-4 text-secondary">
                Contact Us
              </h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    size={14}
                    className="text-secondary mt-0.5 shrink-0"
                  />
                  <span>
                    Rathinam Techzone, Pollachi Main Road, Eachanari, Coimbatore
                    - 641021, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-secondary shrink-0" />
                  <span>+91-422-2345678</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-secondary shrink-0" />
                  <span>info@rathinam.in</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-secondary/20 rounded-lg border border-secondary/30">
                <p className="text-xs text-secondary font-semibold mb-1">
                  Admissions Open 2025-26
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Apply before May 30, 2025
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Rathinam Group of Institutions,
              Eachanari, Coimbatore. All rights reserved. | AICTE Approved |
              Anna University Affiliated
            </p>
            <p className="text-xs text-primary-foreground/50">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
