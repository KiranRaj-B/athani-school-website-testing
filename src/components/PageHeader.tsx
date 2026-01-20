import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-primary-foreground transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {item.href ? (
                  <Link to={item.href} className="hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
