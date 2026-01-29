import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-snyd-navy text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 tech-grid-dark opacity-30" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-heading text-xl font-semibold tracking-tight">
                SNYDTECH
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Pioneering drone technology solutions and next-generation tech education in Tamil Nadu.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com/snyd.in", label: "IG" },
                { href: "https://linkedin.com/company/snydtech", label: "IN" },
                { href: "https://wa.me/914520000000", label: "WA" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white/60 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Drone Solutions", href: "/drones" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                "Drone Pilot Training",
                "Aerial Photography",
                "Agricultural Solutions",
                "Tech Education",
              ].map((service) => (
                <span key={service} className="text-white/60 text-sm">
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  76/2, Puttu Thoppu Main Rd,<br />
                  Madurai, TN 625016
                </span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a 
                  href="mailto:info@snyd.in" 
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  info@snyd.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © 2024 SNYD TECH. All rights reserved.
            </p>
            <p className="text-white/40 text-xs font-mono">
              EXPANDING PERSPECTIVES
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
