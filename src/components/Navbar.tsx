import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "Overview", href: "/who-we-are" },
      { label: "About Us", href: "/who-we-are/about" },
      { label: "Vision, Mission & Values", href: "/who-we-are/vision" },
      { label: "Policies", href: "/who-we-are/policies" },
      { label: "Affiliations and Accreditations", href: "/who-we-are/affiliations" },
      { label: "Awards and Recognitions", href: "/who-we-are/awards" },
    ],
  },
  {
    label: "Learning",
    href: "/learning",
    children: [
      { label: "Overview", href: "/learning" },
      { label: "Our Approach", href: "/learning/approach" },
      { label: "Academics", href: "/learning/academics" },
      { label: "Technology & Innovation", href: "/learning/technology" },
      { label: "Reading Programme", href: "/learning/reading" },
      { label: "Parents Portal", href: "/learning/parents" },
      { label: "Publications", href: "/learning/publications" },
    ],
  },
  {
    label: "Life at School",
    href: "/life-at-school",
    children: [
      { label: "Overview", href: "/life-at-school" },
      { label: "Arts", href: "/life-at-school/arts" },
      { label: "Sports", href: "/life-at-school/sports" },
      { label: "Clubs & Activities", href: "/life-at-school/clubs" },
      { label: "Co-Curricular", href: "/life-at-school/co-curricular" },
      { label: "Health & Safety", href: "/life-at-school/health" },
      { label: "Sustainability Activities", href: "/life-at-school/sustainability" },
      { label: "Academic Calendar", href: "/life-at-school/calendar" },
      { label: "Student Achievements", href: "/life-at-school/achievements" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Overview", href: "/admissions" },
      { label: "Enrol Now", href: "/admissions/enrol" },
      { label: "Transportation", href: "/admissions/transportation" },
    ],
  },
  {
    label: "Stories",
    href: "/stories",
    children: [
      { label: "Overview", href: "/stories" },
      { label: "Field and Residential Trips", href: "/stories/trips" },
      { label: "Events and Activities", href: "/stories/events" },
      { label: "CAS and SAP Initiatives", href: "/stories/initiatives" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@athanischool.edu" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>info@athanischool.edu</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Athani, Belagavi – 591304</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Athani School</h1>
                <p className="text-xs text-muted-foreground">Excellence in Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-background rounded-xl shadow-xl border border-border py-2 min-w-[220px] animate-scale-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/admissions/enrol">Apply Now</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-background border-t border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link to="/admissions/enrol" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
                <Button asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
