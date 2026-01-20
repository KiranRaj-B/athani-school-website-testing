import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import eventImage from "@/assets/event.jpg";

const stories = [
  {
    id: 1,
    title: "Annual Science Fair Showcases Student Innovation",
    excerpt: "Students demonstrated remarkable projects ranging from renewable energy solutions to AI-powered assistants.",
    date: "December 15, 2024",
    category: "Events",
    image: eventImage,
  },
  {
    id: 2,
    title: "Sports Day 2024: A Celebration of Athletic Excellence",
    excerpt: "Our annual sports day witnessed record-breaking performances and outstanding sportsmanship.",
    date: "November 28, 2024",
    category: "Sports",
    image: eventImage,
  },
  {
    id: 3,
    title: "Community Service Initiative: Clean Athani Drive",
    excerpt: "Students led a successful environmental initiative, planting 500 trees across the community.",
    date: "November 10, 2024",
    category: "Community",
    image: eventImage,
  },
];

export function StoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="animate-slide-up">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Latest Updates</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Stories &{" "}
              <span className="text-gradient-primary">Events</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/stories">
              View All Stories
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{story.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {story.excerpt}
                </p>
                <Link
                  to={`/stories/${story.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
