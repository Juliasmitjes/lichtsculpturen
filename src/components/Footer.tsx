import { Heart, Palette } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* logo */}
          <Link to="/#hero">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Palette className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-business font-bold text-lg">Jacqueline Tiemens</span>
              </div>
              <p className="font-playful text-accent-light text-sm">
                Handgemaakte kunst
              </p>
            </div>
          </Link>         

          {/* links naar pagina's */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#galerij">
                <button className="text-background/80 hover:text-accent transition-colors">
                Galerij
                </button>             
              </Link>

              <Link to="/#over-mij">
                <button className="text-background/80 hover:text-accent transition-colors">
                  Over mij
                </button>
              </ Link>

              <Link to="/#contact">
              <button className="text-background/80 hover:text-accent transition-colors">
                Contact
              </button>
              </Link>
              
            </div>
          </div>

          {/* copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/60 text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Jacqueline Tiemens
              <Heart className="w-4 h-4 text-primary" />
              Gemaakt met aandacht
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-xs">
            Duurzame kunst voor alle seizoenen • Handgemaakt in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;