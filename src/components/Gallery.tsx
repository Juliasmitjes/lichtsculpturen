import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Heart } from "lucide-react";

interface ArtworkItem {
  id: number;
  title: string;
  category: "sculpturen" | "schilderijen";
  image: string;
  description: string;
  materials?: string;
}

const artworks: ArtworkItem[] = [
  {
    id: 1,
    title: "Lichtsculptuur Boom I",
    category: "sculpturen",
    image: "",
    description: "Een elegante sculptuur van natuurlijke takken met warme LED-verlichting",
    materials: "Houten takken, LED-lights, linnen"
  },
  {
    id: 2,
    title: "Aardse Abstractie", 
    category: "schilderijen",
    image: "",
    description: "Organische vormen in warme aardtinten die de natuur vieren",
    materials: "Acryl op linnen"
  },
  {
    id: 3,
    title: "Lichtsculptuur Boom II",
    category: "sculpturen", 
    image: "",
    description: "Delicate handgemaakte installatie met zachte gloed",
    materials: "Houten structuur, natuurlijke vezels, LED"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<"alle" | "sculpturen" | "schilderijen">("alle");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredArtworks = activeCategory === "alle" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

  return (
    <section id="galerij" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-handwritten text-4xl lg:text-5xl text-accent mb-4">
            Mijn creaties
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Kunst met een verhaal
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elke sculptuur en elk schilderij is met de hand gemaakt, 
            met aandacht voor duurzaamheid en natuurlijke schoonheid.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-card shadow-soft p-1">
            {[
              { key: "alle", label: "Alle werken" },
              { key: "sculpturen", label: "Lichtsculpturen" },
              { key: "schilderijen", label: "Schilderijen" }
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={activeCategory === filter.key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(filter.key as any)}
                className="mx-1"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:translate-y-4' : ''
              }`}
              onMouseEnter={() => setHoveredItem(artwork.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center ${
                  hoveredItem === artwork.id ? 'opacity-80' : ''
                }`}>
                  <div className="text-center p-6">
                    <Heart className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <p className="text-primary-foreground font-medium">Bekijk details</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {artwork.category === "sculpturen" ? "Lichtsculptuur" : "Schilderij"}
                </span>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {artwork.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {artwork.description}
                </p>
                
                {artwork.materials && (
                  <p className="text-xs text-accent-warm font-medium mb-4">
                    Materialen: {artwork.materials}
                  </p>
                )}

                <Button variant="outline" size="sm" className="w-full">
                  Meer informatie
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-warm inline-block">
            <h4 className="font-handwritten text-2xl text-accent mb-2">
              Geïnteresseerd?
            </h4>
            <p className="text-muted-foreground mb-4">
              Neem contact op voor meer informatie over beschikbaarheid en prijzen
            </p>
            <Button variant="hero" onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact opnemen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;