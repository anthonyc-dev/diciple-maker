import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-hero-foreground font-bold text-xl tracking-wider"
          >
            <span className="text-hero-accent">D</span>ISCIPLING
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
            >
              ABOUT
            </Link>
            <Link
              to="/discipling"
              className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
            >
              DISCIPLING
            </Link>
            <Link to="/join">
              <Button className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold tracking-wide">
                JOIN NOW
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-hero-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-hero-foreground/10 mt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/discipling"
                className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                DISCIPLING
              </Link>
              <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold tracking-wide w-fit">
                  JOIN NOW
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
