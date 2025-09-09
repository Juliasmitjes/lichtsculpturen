import { Button } from "./ui/button";
import { Leaf, Lightbulb, Heart, Recycle } from "lucide-react";

const About = () => {
  return (
    <section id="over-mij" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* content */}
            <div>
              <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">
                Mijn verhaal
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Duurzame kunst met passie
              </h3>
              
              <div className="prose prose-lg text-muted-foreground font-business font-bold mb-8">
                <p className="mb-4">
                  Ik ben gek op het leven en vind ook veel leuk: getallen, taal, kinderen, kunst. Soms is het lastig kiezen. Gelukkig hoeft niet alles tegelijk. Mijn leven is een avontuurlijke reis van accountant, moeder én kunstenaar. Hoe heerlijk! Vorm kleur en creativiteit. Met hart en handen en altijd met passie. 
                </p>
                
                <p className="mb-4">
                  Ik maak pasteltekeningen en lichtsculpturen.
                </p>
                
                <p className="mb-6 text-foreground">
                  Nieuwsgierig? 
                </p>
              </div>

              <Button className="mr-4" variant="organic" size="lg" onClick={() => {
                const element = document.getElementById('galerij');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Bekijk mijn werk
              </Button>
       
            <Button variant="hero" size="lg" onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact opnemen
            </Button>
            </div>

            

            {/* kernwaarden links */}
            <div className="space-y-6">
              {[
                {
                  icon: Leaf,
                  title: "Duurzaam",
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