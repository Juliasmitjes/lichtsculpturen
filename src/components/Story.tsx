import { Sparkles, TreePine, Lightbulb, Star } from "lucide-react";
import { Leaf,  Heart, Recycle } from "lucide-react";

const Story = () => {
  return (
    <section id="verhaal" className="py-20 bg-gradient-earth relative overflow-hidden">   

     <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

         {/* kernwaarden links */}
            <div className="space-y-6">
              {[
                {
                  icon: Leaf,
                  title: "Duurzaam",
                  description: "Bewust materiaalgebruik met maximaal effect. Geen verspilling, wel impact."
                },
                {
                  icon: Lightbulb,
                  title: "Innovatie", 
                  description: "Creatieve oplossingen voor moderne uitdagingen. Kunst die meebeweegt met de tijd."
                },
                {
                  icon: Heart,
                  title: "Handgemaakt",
                  description: "Elk stuk is uniek en met liefde gemaakt. Persoonlijke aandacht voor details."
                },
                {
                  icon: Recycle,
                  title: "Herbruikbaar",
                  description: "Sculpturen die meegroeien met de seizoenen. Van winter naar lente, altijd mooi."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

             {/* header */}
          <div className="text-center mb-20 relative">
            <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">
              Schoonheid is overal
            </h2>       
          </div>
            
         </div>
      </div>

         
          
         

          





          {/* Story Timeline */}
          <div className="space-y-12">

            
            
            {/* Opening Scene */}
            <div className="relative">
              <div className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-earth rounded-2xl flex items-center justify-center shadow-warm group-hover:scale-110 transition-all duration-300">
                  <TreePine className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/10 hover:shadow-warm hover:border-primary/20 transition-all duration-300">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Kerst het feest van licht, goud en glitters én van kerstbomen. Bij ons thuis altijd twee stuks, Nordmannen, een kleintje in de voorkamer en een grote joekel in de achterkamer. Bos in huis, dennengeur, het groen, zo fijn, maar ook het trieste vooruitzicht: 
                    <span className="font-medium text-foreground"> over een paar weken de bomen afgedankt bij het vuil als verdorde skeletten.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* The Question */}
            <div className="relative">
              <div className="flex items-start gap-8 group flex-row-reverse">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-warm group-hover:scale-110 transition-all duration-300">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-accent/10 hover:shadow-warm hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-handwritten text-3xl text-primary mb-4 flex items-center gap-2">
                    "Zullen we eens zonder boom?"
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Protest bij man en kinderen. <em>"Er zijn alternatieven, zoals een kunstboom."</em> <strong>"Nee mam, hartstikke kitsch en zo'n nepboom is ook niet duurzaam"</strong>. Daarmee was ik het met ze eens. <em>"Een constructie van steigerhout dan?"</em> <strong>"Lelijk, mam"</strong>. <em>"Of een moderne minimalistische variant?"</em> <strong>"Zo'n kaal ding, dan kunnen we beter helemaal niets doen."</strong>
                  </p>
                  <p className="text-accent-warm font-medium mt-4 italic">
                    En toch liet het me niet los...
                  </p>
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <div className="relative">
              <div className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-warm group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 bg-card backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-highlight/10 hover:shadow-warm hover:border-highlight/20 transition-all duration-300">
                  <h3 className="font-handwritten text-3xl text-highlight mb-4">
                    De uitdaging
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Ik dacht aan de glinsterende kiezels in mijn jeugd. Er is zoveel schoonheid. Het moet mogelijk zijn om een beter alternatief te bedenken. Ik ga het proberen! 
                  </p>
                  <div className="bg-highlight/5 rounded-xl p-6 border-l-4 border-highlight">
                    <p className="text-foreground font-medium">
                      <em>"Ik ga de uitdaging aan. Ik bedenk een feestelijke lichtbron als alternatief voor een boom: eenvoudig, minimaal materiaalgebruik (duurzaam) én met een wow-effect."</em>
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Het beeld tekende zich in mijn hoofd af, maar de weg ernaartoe was een tocht met hobbels over constructies, ontdekkingen over fournituren, lijmen, papiersoorten en stoffen...
                  </p>
                </div>
              </div>
            </div>

            {/* Success */}
            <div className="text-center py-12">
              <div className="inline-block bg-gradient-warm rounded-2xl p-8 shadow-elegant relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm"></div>
                <div className="relative">
                  <Sparkles className="w-12 h-12 text-primary-foreground mx-auto mb-4 animate-pulse" />
                  <h3 className="font-handwritten text-4xl text-primary-foreground mb-2">
                    Uiteindelijk is het gelukt!
                  </h3>
                  <div className="w-16 h-1 bg-primary-foreground/50 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>

        
      </div>
    </section>
  );
};

export default Story;