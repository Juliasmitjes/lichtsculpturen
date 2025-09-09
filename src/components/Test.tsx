import { TreePine, Star, Lightbulb, Sparkles } from "lucide-react";

const Story = () => {
  const storySteps = [
    {
      icon: TreePine,
      title: "Van groene joekel tot verdord skelet",
      text: "Kerst het feest van licht, goud en glitters én van kerstbomen. Bij ons thuis altijd twee stuks, Nordmannen, een kleintje in de voorkamer en een grote joekel in de achterkamer. Bos in huis, dennengeur, het groen, zo fijn, maar ook het trieste vooruitzicht: over een paar weken de bomen afgedankt bij het vuil als verdorde skeletten.",
    },
    {
      icon: Star,
      title: '"Zullen we eens zonder boom?"',
      text: "‘Zullen we eens zonder boom?’, probeerde ik. Protest bij man en kinderen. ‘Er zijn alternatieven, zoals een kunstboom.’ ‘Nee mam, hartstikke kitsch en zo’n nepboom is ook niet duurzaam’. Daarmee was ik het met ze eens. ‘Een constructie van steigerhout dan?’ ‘Lelijk, mam’. ‘Of een moderne minimalistische variant?’. ‘Zo’n kaal ding, dan kunnen we beter helemaal niets doen.’ En ook daarin gaf ik ze gelijk. En toch liet het me niet los.",
    },
    {
      icon: Lightbulb,
      title: "De uitdaging",
      text: "Ik dacht aan de glinsterende kiezels in mijn jeugd. Er is zoveel schoonheid. Het moet mogelijk zijn om een beter alternatief te bedenken. Ik ga het proberen! Ik zei tegen man en kinderen, ‘ik ga de uitdaging aan. Ik bedenk een feestelijke lichtbron als alternatief voor een boom: eenvoudig, minimaal materiaalgebruik (duurzaam) én met een wow-effect. Het beeld tekende zich in mijn hoofd af, maar de weg ernaartoe was een tocht met hobbels over constructies ontdekkingen over fournituren, lijmen, papiersoorten en stoffen...",
    },
    {
      icon: Sparkles,
      title: "Uiteindelijk is het gelukt!",
      text: "Een feestelijke lichtbron, duurzaam en met een wow-effect. Zo simpel kan schoonheid zijn.",
    },
  ];

  return (
    <section id="verhaal" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* verticale lijn */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>

        <div className="space-y-20">
          {storySteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col lg:flex-row items-start gap-6 relative">
                {/* icon + lijn connector */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg animate-fadeIn">
                    <Icon className="w-6 h-6" />
                  </div>
                  {i !== storySteps.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-primary to-secondary"></div>
                  )}
                </div>

                {/* content */}
                <div className="bg-white p-8 rounded-2xl shadow-lg flex-1 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Story;
