import { Button } from "./ui/button";
import { Leaf, Lightbulb, Heart, Recycle } from "lucide-react";

const About = () => {
  return (
    <section id="over-mij" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div>
              <h2 className="font-handwritten text-4xl lg:text-5xl text-accent mb-4">
                Mijn verhaal
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Duurzame kunst met passie
              </h3>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-4">
                  Kerstbomen passen niet in deze tijd van duurzaamheidsopgaven. We moeten 
                  bomen planten en niet kappen. Een kunstboom als alternatief? 
                  Dat is ook niet echt duurzaam.
                </p>
                
                <p className="mb-4">
                  Ik ben de uitdaging aangegaan om met minimaal materiaal een maximaal 
                  effect te bereiken. Dat is gelukt! Mijn lichtsculpturen hebben een 
                  grootse uitstraling en het materiaalgebruik is beperkt: drie stokken, 
                  wat ijzeren ringen, een lichtsnoer en wat stof en vilt.
                </p>
                
                <p className="mb-6">
                  Het voordeel is ook dat je de sculptuur na Kerst makkelijk opbergt. 
                  Maar je kunt de sculptuur ook laten staan - met wat andere hangers 
                  maak je er een Paas- of herfstcreatie van. Eigenlijk zijn de 
                  lichtsculpturen in alle seizoenen leuk.
                </p>
              </div>

              <Button variant="organic" size="lg" onClick={() => {
                const element = document.getElementById('galerij');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Bekijk mijn werk
              </Button>
            </div>

            {/* Values Side */}
            <div className="space-y-6">
              {[
                {
                  icon: Leaf,
                  title: "Duurzaamheid",
                  description: "Minimaal materiaalgebruik voor maximaal effect. Geen verspilling, wel impact."
                },
                {
                  icon: Lightbulb,
                  title: "Innovatie", 
                  description: "Creatieve oplossingen voor moderne uitdagingen. Kunst die meebeweegt met de tijd."
                },
                {
                  icon: Heart,
                  title: "Handgemaakt",
                  description: "Elk stuk is uniek en met liefde gemaakt. Persoonlijke aandacht voor elk detail."
                },
                {
                  icon: Recycle,
                  title: "Herbruikbaar",
                  description: "Sculpturen die meegroeien met de seizoenen. Van kerst naar lente, altijd mooi."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;