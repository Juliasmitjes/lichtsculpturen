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
          alt="Julia's kunstwerkplaats met natuurlijke materialen" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-warm opacity-30"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-8 w-12 h-12 bg-primary/20 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Subtitle */}
          <p className="font-handwritten text-2xl lg:text-3xl text-primary mb-4 animate-glow">
            Handgemaakte kunst met ziel
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Licht en warmte
            <span className="block font-handwritten text-accent text-4xl lg:text-5xl mt-2">
              in alle seizoenen
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Ontdek mijn unieke lichtsculpturen en schilderijen, gemaakt met liefde voor natuurlijke 
            materialen en duurzame kunst. Elk stuk vertelt een verhaal van warmte en creativiteit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="hero"
              onClick={scrollToGallery}
              className="animate-float"
            >
              Bekijk mijn werk
              <ChevronDown className="w-5 h-5 animate-bounce" />
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;