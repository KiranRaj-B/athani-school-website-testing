import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Trophy, Users, Heart, Leaf, Calendar, Award } from "lucide-react";
import artsImage from "@/assets/arts.jpg";
import sportsImage from "@/assets/sports.jpg";

const activities = [
  {
    icon: Palette,
    title: "Arts & Performing",
    description: "Visual arts, music, dance, drama, and creative expression programs.",
    href: "/life-at-school/arts",
    image: artsImage,
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description: "Comprehensive sports program with professional coaching and facilities.",
    href: "/life-at-school/sports",
    image: sportsImage,
  },
];

const otherActivities = [
  { icon: Users, title: "Clubs & Activities", description: "Robotics, debate, MUN, photography, and more.", href: "/life-at-school/clubs" },
  { icon: Heart, title: "Health & Safety", description: "On-campus medical facilities and wellness programs.", href: "/life-at-school/health" },
  { icon: Leaf, title: "Sustainability", description: "Environmental initiatives and green campus programs.", href: "/life-at-school/sustainability" },
  { icon: Calendar, title: "Academic Calendar", description: "Important dates, events, and school schedule.", href: "/life-at-school/calendar" },
  { icon: Award, title: "Student Achievements", description: "Celebrating excellence in academics and beyond.", href: "/life-at-school/achievements" },
];

const highlights = [
  { emoji: "🎭", text: "Annual Arts Festival" },
  { emoji: "🏆", text: "State-level Sports Champions" },
  { emoji: "🎵", text: "Music Academy" },
  { emoji: "🔬", text: "Science Olympiad Winners" },
  { emoji: "🤝", text: "Community Service Programs" },
  { emoji: "⭐", text: "Leadership Development" },
];

export default function LifeAtSchool() {
  return (
    <PageLayout>
      <PageHeader
        title="Life at Athani School"
        subtitle="Beyond academics, we nurture well-rounded individuals through diverse experiences"
        breadcrumbs={[{ label: "Life at School" }]}
      />

      {/* Main Activities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                to={activity.href}
                className="group relative rounded-2xl overflow-hidden h-[350px] shadow-card hover:shadow-card-hover transition-all"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <activity.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">{activity.title}</h3>
                  <p className="text-primary-foreground/80 mb-4">{activity.description}</p>
                  <div className="flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Activities */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">More to Explore</h2>
            <p className="text-muted-foreground">
              Discover the many ways students can engage and grow at Athani School
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherActivities.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Student Life Highlights
              </h2>
              <p className="text-primary-foreground/80">
                A glimpse into the vibrant life at our campus
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-3 flex items-center gap-3"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-primary-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
