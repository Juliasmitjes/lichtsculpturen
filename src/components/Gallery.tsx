import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { Link }  from "react-router-dom";
import boom1Img from "../assets/images/boom1.jpg";
import boom2Img from "../assets/images/boom2.jpeg";
import schilderij1Img from "../assets/images/schilderij1.jpg";
import boom3Img from "../assets/images/boom3.jpg";
import schilderij2Img from "../assets/images/schilderij2.jpg";
import boom4Img from "../assets/images/boom4.jpeg";

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
    title: "Najaarslicht",
    category: "sculpturen",
    image: boom1Img,
    description: "Organische vormen in warme aardtinten",
    materials: "Hout, warme kleuren, denneappels"
  },
  {
    id: 2,
    title: "Licht in stijl", 
    category: "sculpturen",
    image: boom2Img,
    description: "Een elegante sculptuur van klassieke vorm",
    materials: "Goud en linnen"
  },
  {
    id: 3,
    title: "Landschap",
    category: "schilderijen", 
    image: schilderij1Img,
    description: "Koele tinten die een Scandinavisch landschap oproepen",
    materials: "Olieverf op doek"
  },
  {
    id: 4,
    title: "Bubbellicht",
    category: "sculpturen",
    image: boom3Img,
    description: "Warme oranje en bruine tinten met zachte gloed",
    materials: "Hout en natuurlijke vezels"
  },  
  {
    id: 5,
    title: "Boslandschap", 
    category: "schilderijen",
    image: schilderij2Img,
    description: "Warme gele en rode tinten die een warme dag in het bos uitbeelden",
    materials: "Aquarel op papier"
  },
  {
    id: 6,
    title: "Lentelicht",  
    category: "sculpturen",
    image: boom4Img,
    description: "Feestelijke, vrolijke sculptuur met een frisse uitstraling",
    materials: "Metaal, licht, linnen"
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
          <p className="text-lg text-foreground font-business font-bold max-w-2xl mx-auto mt-10">
          Nieuwsgierig? Kijk hieronder
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
              <Link to={`/details/${artwork.id}`} className="relative overflow-hidden aspect-[4/5] block group">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* overlay */}
                <div
                  className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center ${
                    hoveredItem === artwork.id ? 'opacity-80 cursor-pointer' : ''
                  }`}
                >
                  <div className="text-center p-6">
                    <Heart className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <p className="text-primary-foreground font-business font-bold">Bekijk details</p>
                  </div>
                </div>
              </Link>

              {/* content */}
              <div className="p-6">
                <span className="inline-block bg-secondary text-accent-foreground text-sm font-business font-bold px-3 py-1 rounded-full mb-3">
                  {artwork.category === "sculpturen" ? "Lichtsculptuur" : "Schilderij"}
                </span>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {artwork.title}
                </h4>
                
                <p className="text-muted-foreground font-business font-bold mb-3">
                  {artwork.description}
                </p>
                
                {artwork.materials && (
                  <p className="text-sm text-accent-warm font-business font-bold mb-4">
                    Materialen: {artwork.materials}
                  </p>
                )}

                <Button asChild variant="default" size="sm" className="w-full">
                  <Link to={`/details/${artwork.id}`}>
                    Meer informatie
                    <ExternalLink className="w-4 h-4" />
                  </Link>
              </Button>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default Gallery;