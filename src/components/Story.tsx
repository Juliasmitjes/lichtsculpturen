import { Sparkles, TreePine, Lightbulb, Star } from "lucide-react";
import { Leaf,  Heart, Recycle } from "lucide-react";

const Story = () => {
  const coreValues = [
    {
      icon: Leaf,
      title: "Duurzaam",
      description:
        "Bewust materiaalgebruik met maximaal effect. Geen verspilling, wel impact.",
    },
    {
      icon: Lightbulb,
      title: "Vernieuwend",
      description:
        "Creatieve oplossingen voor moderne uitdagingen. Kunst die meebeweegt met de tijd.",
    },
    {
      icon: Heart,
      title: "Handgemaakt",
      description:
        "Elk stuk is uniek en met liefde gemaakt. Persoonlijke aandacht voor details.",
    },
    {
      icon: Recycle,
      title: "Herbruikbaar",
      description:
        "Sculpturen die meegroeien met de seizoenen. Van winter naar lente, altijd mooi.",
    },
  ];

  return (
  <section id="verhaal" className="py-20 bg-gradient-earth relative overflow-hidden"> 
    <div className="container mx-auto px-6 max-w-6xl">
       {/* deel 1 */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Van groene joekel tot verdord skelet
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Kerst het feest van licht, goud en glitters én van kerstbomen. Bij ons thuis altijd twee stuks, Nordmannen, een kleintje in de voorkamer en een grote joekel in de achterkamer. Bos in huis, dennengeur, het groen, zo fijn, maar ook het trieste vooruitzicht: over een paar weken de bomen afgedankt bij het vuil als verdorde skeletten.
          </p>
        </div>

        {/* deel 2 */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              "Zullen we eens zonder boom?"
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              ‘Zullen we eens zonder boom?’, probeerde ik. Protest bij man en kinderen. ‘Er zijn alternatieven, zoals een kunstboom.’ ‘Nee mam, hartstikke kitsch en zo’n nepboom is ook niet duurzaam’. Daarmee was ik het met ze eens. ‘Een constructie van steigerhout dan?’ ‘Lelijk, mam’. ‘Of een moderne minimalistische variant?’. ‘Zo’n kaal ding, dan kunnen we beter helemaal niets doen.’ En ook daarin gaf ik ze gelijk. En toch liet het me niet los.
            </p>
          </div>

          {/* deel 3 */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            De uitdaging
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Ik dacht aan de glinsterende kiezels in mijn jeugd. Er is zoveel schoonheid. Het moet mogelijk zijn om een beter alternatief te bedenken. Ik ga het proberen! Ik zei tegen man en kinderen, ‘ik ga de uitdaging aan. Ik bedenk een feestelijke lichtbron als alternatief voor een boom: eenvoudig, minimaal materiaalgebruik (duurzaam) én met een wow-effect. Het beeld tekende zich in mijn hoofd af, maar de weg ernaartoe was een tocht met hobbels over constructies ontdekkingen over fournituren, lijmen, papiersoorten en stoffen...
          </p>
        </div>

        {/* deel 4 */}
          <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Uiteindelijk is het gelukt!
              </h3>
              <p className="text-muted-foreground text-lg">
                Een feestelijke lichtbron, duurzaam en met een wow-effect. Zo simpel kan schoonheid zijn.
              </p>
            </div>
       

        {/* waarden */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24 my-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-card rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-1">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default Story;