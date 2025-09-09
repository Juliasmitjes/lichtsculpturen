import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import schilderenVoorbeeld from '../assets/images/schilderenVoorbeeld.jpg';

const About = () => {
  return (
    <section id="over-mij" className="relative min-h-screen flex items-center bg-gradient-earth overflow-hidden">

      <div className="absolute inest-0">
        <img
        src={schilderenVoorbeeld}
        alt="schilderen"
        className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-warm opacity-20"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

       
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* content */}
            <div>
              <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">
                Mijn verhaal
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Veelzijdig en bevlogen
              </h3>
              
              <div className="prose prose-lg text-primary-foreground font-business font-bold text-lg mb-8">
                <p className="mb-4">
                  Ik ben gek op het leven en vind ook veel leuk: getallen, taal, kinderen, kunst. Soms is het lastig kiezen. Gelukkig hoeft niet alles tegelijk. Mijn leven is een avontuurlijke reis van accountant, moeder én kunstenaar. Hoe heerlijk! Vorm kleur en creativiteit. Met hart en handen en altijd met passie. 
                </p>
                
                <p className="mb-4">
                  Ik maak pasteltekeningen en lichtsculpturen.
                </p>
              </div>

              <Button className="mr-4" variant="heroref" size="lg" onClick={() => {
                const element = document.getElementById('galerij');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Bekijk mijn werk
              </Button>
       
            <Button variant="outlineref" size="lg" onClick={() => {
              const element = document.getElementById('verhaal');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Lees meer 
            <ChevronDown className="w-5 h-5" />
            </Button>
            </div>           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;