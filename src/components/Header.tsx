import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper: close menu and scroll to top
  const handleNavClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-hero-foreground font-bold text-xl tracking-wider"
            onClick={scrollToTop}
          >
            <img
              src="/discipling logo.png"
              alt="Discipling Logo"
              className="h-8 w-auto inline-block align-middle"
              style={{ verticalAlign: "middle" }}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/about"
              className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
              onClick={scrollToTop}
            >
              ABOUT
            </NavLink>
            {/* <NavLink
              to="/discipling"
              className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
              onClick={scrollToTop}
            >
              DISCIPLING
            </NavLink> */}
            <NavLink to="/join" onClick={scrollToTop}>
              <Button className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold tracking-wide">
                JOIN NOW
              </Button>
            </NavLink>
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden pt-4 pb-6 border-t border-hero-foreground/10 mt-4 overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/about"
                  className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
                  onClick={handleNavClick}
                >
                  ABOUT
                </NavLink>
                {/* <NavLink
                  to="/discipling"
                  className="text-hero-foreground/80 hover:text-hero-foreground transition-colors text-sm tracking-wide"
                  onClick={handleNavClick}
                >
                  DISCIPLING
                </NavLink> */}
                <NavLink to="/join" onClick={handleNavClick}>
                  <Button className="bg-hero-accent text-primary-foreground hover:bg-hero-accent/90 font-semibold tracking-wide w-fit">
                    JOIN NOW
                  </Button>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
