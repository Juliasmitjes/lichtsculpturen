import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo NOG AANP*/}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground text-white" />
            </div>
            <div>
              <h1 className="text-xl font-business font-bold  text-foreground">Jacqueline Tiemens</h1>
              <p className="text-sm text-muted-foreground font-playful">Handgemaakte kunst</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#galerij">
            <button 
              className="text-foreground hover:text-primary text-xl font-business font-bold  transition-colors duration-300"
            >
              Galerij
            </button>        
            </Link>
            
            <button 
              onClick={() => scrollToSection('over-mij')}
              className="text-foreground hover:text-primary text-xl font-business font-bold transition-colors duration-300"
            >
              Over mij
            </button>
            <Button 
              variant="organic"
              size="sm"
              className="font-business text-xl font-bold"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-warm">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('galerij')}
                className="block text-foreground hover:text-primary transition-colors duration-300"
              >
                Galerij
              </button>
              <button 
                onClick={() => scrollToSection('over-mij')}
                className="block text-foreground hover:text-primary transition-colors duration-300"
              >
                Over mij
              </button>
              <Button 
                variant="organic"
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;