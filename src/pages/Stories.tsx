import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin, Users, Heart } from "lucide-react";
import eventImage from "@/assets/event.jpg";

const featuredStories = [
  {
    id: 1,
    title: "Annual Science Fair 2024: Innovation at Its Best",
    excerpt: "Students showcased remarkable projects ranging from renewable energy solutions to AI-powered assistants, demonstrating their scientific acumen and creativity.",
    date: "December 15, 2024",
    category: "Events",
    image: eventImage,
  },
  {
    id: 2,
    title: "Sports Day 2024: A Celebration of Athletic Excellence",
    excerpt: "Our annual sports day witnessed record-breaking performances and outstanding sportsmanship from students across all grades.",
    date: "November 28, 2024",
    category: "Sports",
    image: eventImage,
  },
  {
    id: 3,
    title: "Clean Athani Initiative: Students Lead the Way",
    excerpt: "Over 500 students participated in our community service drive, planting trees and conducting cleanliness drives across the town.",
    date: "November 10, 2024",
    category: "Community",
    image: eventImage,
  },
];

const moreStories = [
  { id: 4, title: "Diwali Celebrations 2024", date: "October 30, 2024", category: "Events" },
  { id: 5, title: "Inter-School Debate Competition", date: "October 15, 2024", category: "Academics" },
  { id: 6, title: "Field Trip to Hampi", date: "September 22, 2024", category: "Trips" },
  { id: 7, title: "Independence Day Celebrations", date: "August 15, 2024", category: "Events" },
  { id: 8, title: "Mathematics Olympiad Winners", date: "August 5, 2024", category: "Achievements" },
  { id: 9, title: "Annual Day Celebrations", date: "July 20, 2024", category: "Events" },
];

const categories = [
  { icon: MapPin, title: "Field & Residential Trips", description: "Educational excursions and overnight camps", href: "/stories/trips" },
  { icon: Calendar, title: "Events & Activities", description: "School functions and special occasions", href: "/stories/events" },
  { icon: Heart, title: "CAS & SAP Initiatives", description: "Community service and social awareness programs", href: "/stories/initiatives" },
];

export default function Stories() {
  return (
    <PageLayout>
      <PageHeader
        title="Stories & Events"
        subtitle="Stay updated with the latest happenings at Athani School"
        breadcrumbs={[{ label: "Stories" }]}
      />

      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.href}
                className="bg-muted/50 rounded-xl p-6 flex items-center gap-4 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <article
                key={story.id}
                className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{story.excerpt}</p>
                  <Link
                    to={`/stories/${story.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">More Stories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {moreStories.map((story) => (
              <Link
                key={story.id}
                to={`/stories/${story.id}`}
                className="flex items-center justify-between bg-muted/50 rounded-xl p-5 hover:shadow-card transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{story.title}</h4>
                    <p className="text-sm text-muted-foreground">{story.date}</p>
                  </div>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{story.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
