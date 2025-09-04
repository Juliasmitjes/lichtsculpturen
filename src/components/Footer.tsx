import { Heart, Palette } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                <Palette className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">Julia Smitjes</span>
            </div>
            <p className="font-handwritten text-accent-light text-sm">
              Handgemaakte kunst met ziel
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#galerij" className="text-background/80 hover:text-accent transition-colors">
                Galerij
              </a>
              <a href="#over-mij" className="text-background/80 hover:text-accent transition-colors">
                Over mij
              </a>
              <a href="#contact" className="text-background/80 hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/60 text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Julia Smitjes
              <Heart className="w-4 h-4 text-primary" />
              Gemaakt met liefde
            </p>
          </div>
        </div>

        {/* Bottom Border */}
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