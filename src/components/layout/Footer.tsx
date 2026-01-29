import { Link } from "react-router-dom";
import { Cpu, MapPin, Phone, Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-snyd-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-snyd rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold">SNYD TECH</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Empowering tomorrow's innovators through technology education and drone solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/snyd.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/snydtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/914520000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/drones" className="text-white/70 hover:text-white transition-colors">
                Drone Solutions
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-white/70">Python Programming</span>
              <span className="text-white/70">Java Development</span>
              <span className="text-white/70">AI & Machine Learning</span>
              <span className="text-white/70">Drone Training</span>
              <span className="text-white/70">3D Printing</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-white/70">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>76/2, Puttu Thoppu Main Rd, Madurai, TN 625016</span>
              </div>
              <div className="flex gap-3 text-white/70">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>+91 (0452) XXXXXX</span>
              </div>
              <div className="flex gap-3 text-white/70">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <span>info@snyd.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
          <p>© 2024 SNYD TECH. All rights reserved. | Designed for Technology Education Excellence</p>
        </div>
      </div>
    </footer>
  );
};
