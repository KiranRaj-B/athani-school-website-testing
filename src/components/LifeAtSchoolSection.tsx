import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import artsImage from "@/assets/arts.jpg";
import sportsImage from "@/assets/sports.jpg";

const activities = [
  {
    title: "Arts & Performing",
    description: "Drama, music, dance, and visual arts programs that nurture creativity and self-expression.",
    image: artsImage,
    href: "/life-at-school/arts",
    color: "from-primary/80 to-primary/40",
  },
  {
    title: "Sports & Athletics",
    description: "World-class sports facilities with training in cricket, football, basketball, and more.",
    image: sportsImage,
    href: "/life-at-school/sports",
    color: "from-secondary/80 to-secondary/40",
  },
];

const highlights = [
  { label: "Annual Arts Festival", icon: "🎭" },
  { label: "Inter-School Sports", icon: "🏆" },
  { label: "Music Academy", icon: "🎵" },
  { label: "Leadership Programs", icon: "⭐" },
  { label: "Community Service", icon: "🤝" },
  { label: "Science Olympiad", icon: "🔬" },
];

export function LifeAtSchoolSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Beyond Academics</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Life at{" "}
            <span className="text-gradient-primary">Athani School</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in developing well-rounded individuals. Our extensive co-curricular programs 
            help students discover their passions and develop essential life skills.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity) => (
            <Link
              key={activity.title}
              to={activity.href}
              className="group relative rounded-2xl overflow-hidden h-[350px] shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${activity.color}`} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Clubs, Activities & More
              </h3>
              <p className="text-muted-foreground">
                From robotics to debate, our diverse range of clubs and activities cater to every interest.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-background rounded-full px-4 py-2 flex items-center gap-2 shadow-sm border border-border"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link to="/life-at-school">
                Explore All Activities
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/life-at-school/calendar">View Academic Calendar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
