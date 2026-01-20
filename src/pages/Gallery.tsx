import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import campus1 from "@/assets/gallery/campus-1.jpg";
import classroom1 from "@/assets/gallery/classroom-1.jpg";
import lab1 from "@/assets/gallery/lab-1.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import sports1 from "@/assets/gallery/sports-1.jpg";
import library1 from "@/assets/gallery/library-1.jpg";
import computer1 from "@/assets/gallery/computer-1.jpg";
import art1 from "@/assets/gallery/art-1.jpg";

const categories = ["All", "Campus", "Academics", "Events", "Sports", "Arts"];

const galleryImages = [
  { id: 1, src: campus1, title: "School Campus", category: "Campus", description: "Our beautiful campus with modern architecture" },
  { id: 2, src: classroom1, title: "Smart Classroom", category: "Academics", description: "Interactive learning with smart boards" },
  { id: 3, src: lab1, title: "Science Laboratory", category: "Academics", description: "Hands-on experiments in our science lab" },
  { id: 4, src: event1, title: "Annual Day Celebration", category: "Events", description: "Students performing at annual day" },
  { id: 5, src: sports1, title: "Sports Day", category: "Sports", description: "Athletics competition on sports day" },
  { id: 6, src: library1, title: "Library", category: "Academics", description: "Students reading in our well-stocked library" },
  { id: 7, src: computer1, title: "Computer Lab", category: "Academics", description: "Modern computer lab for digital learning" },
  { id: 8, src: art1, title: "Art Class", category: "Arts", description: "Creative expression in art class" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageLayout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Explore our campus, events, and student life through images"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-primary-foreground font-semibold">{image.title}</h3>
                      <p className="text-primary-foreground/80 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-primary-foreground text-xl font-semibold">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm mt-1">
                {filteredImages[currentImageIndex]?.description}
              </p>
              <p className="text-primary-foreground/50 text-sm mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </PageLayout>
  );
}
