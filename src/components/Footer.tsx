import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Academics", href: "/learning/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Life at School", href: "/life-at-school" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const learningLinks = [
  { label: "Our Approach", href: "/learning/approach" },
  { label: "Academics", href: "/learning/academics" },
  { label: "Technology & Innovation", href: "/learning/technology" },
  { label: "Reading Programme", href: "/learning/reading" },
  { label: "Parents Portal", href: "/learning/parents" },
];

const lifeLinks = [
  { label: "Arts", href: "/life-at-school/arts" },
  { label: "Sports", href: "/life-at-school/sports" },
  { label: "Clubs & Activities", href: "/life-at-school/clubs" },
  { label: "Academic Calendar", href: "/life-at-school/calendar" },
  { label: "Student Achievements", href: "/life-at-school/achievements" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Athani School</h3>
                <p className="text-sm text-primary-foreground/70">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Shaping future-ready learners through academic excellence, holistic development, 
              and a nurturing environment that fosters curiosity, creativity, and character.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Learning</h4>
            <ul className="space-y-3">
              {learningLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Athani, Belagavi – 591304<br />Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:info@athanischool.edu" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  info@athanischool.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Athani School. All rights reserved.</p>
            <p>
              Developed by <a href="#" className="text-secondary hover:underline">Kiran</a> & <a href="https://trevia.ai" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Trevia.ai</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
