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
    image: `${process.env.PUBLIC_URL}/images/boom1.jpg`,
    description: "Een elegante sculptuur van natuurlijke takken met warme LED-verlichting",
    materials: "Houten takken, LED-lights, linnen"
  },
  {
    id: 2,
    title: "Aardse Abstractie", 
    category: "sculpturen",
    image: "",
    description: "Organische vormen in warme aardtinten die de natuur vieren",
    materials: "Acryl op linnen"
  },
  {
    id: 3,
    title: "Lichtsculptuur Boom II",
    category: "schilderijen", 
    image: "",
    description: "Delicate handgemaakte installatie met zachte gloed",
    materials: "Houten structuur, natuurlijke vezels, LED"
  },
  {
    id: 4,
    title: "Herfstbos",
    category: "sculpturen",
    image: "",
    description: "Warme oranje en bruine tinten die de essentie van de herfst vastleggen",
    materials: "Olieverf op doek"
  },  
  {
    id: 5,
    title: "Lichtsculptuur Ster", 
    category: "schilderijen",
    image: "",
    description: "Stervormige sculptuur met een magische, sprankelende uitstraling",
    materials: "Metaal, LED-lights, zijde"
  },
  {
    id: 6,
    title: "Zonsondergang in het Bos",  
    category: "sculpturen",
    image: "",
    description: "Warme gele en rode tinten die een serene zonsondergang in het bos uitbeelden",
    materials: "Aquarel op papier"
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
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">
            Mijn creaties
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Licht in alle seizoenen
          </h3>
          <p className="text-lg text-muted-foreground font-business font-bold max-w-2xl mx-auto">
            Kerstbomen passen niet in deze tijd van duurzaamheidsopgaven. We moeten bomen planten en niet kappen. Een kunstboom als alternatief? Dat is ook niet echt duurzaam. 
            <br />
            <br />
            Ik ben de uitdaging aangegaan om met minimaal materiaal een maximaal effect te bereiken. Dat is gelukt! Mijn lichtsculpturen hebben een grootse uitstraling. En het materiaalgebruik is beperkt: drie stokken, wat ijzeren ringen, een lichtsnoer en wat stof en vilt. Voordeel is ook dat je de sculptuur na Kerst makkelijk opbergt. Eén doos, die stokken en de ringen met een haak aan de muur. Dat is alles. 
            <br />
            <br />
            Maar je kunt de sculptuur ook laten staan. Met wat andere hangers, maak je er een Paas- of herfstcreatie van. Eigenlijk zijn de lichtsculpturen in alle seizoenen leuk.
          </p>
        </div>

        {/* filter buttons */}
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
                onClick={() => setActiveCategory(filter.key as "alle" | "sculpturen" | "schilderijen")}
                className="mx-1"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* galerij */}
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
              {/* afbeeldingen */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* overlay */}
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