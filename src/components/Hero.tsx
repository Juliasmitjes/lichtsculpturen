import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('galerij');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-earth overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/linnen.jpg"
          alt="linnen" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-warm opacity-20"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          
          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Licht en warmte
            <span className="block font-playful text-accent text-4xl lg:text-5xl mt-2">
              in alle seizoenen
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-foreground font-business font-bold mb-8 max-w-2xl leading-relaxed">
            Ontdek mijn lichtsculpturen. Gemaakt met liefde voor natuurlijke 
            materialen en duurzame kunst. Ieder stuk is uniek.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="hero"
              onClick={scrollToGallery}
              className=""
            >
              Bekijk mijn werk
              <ChevronDown className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="hero"
              onClick={() => {
                const element = document.getElementById('over-mij');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Leer mij kennen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;