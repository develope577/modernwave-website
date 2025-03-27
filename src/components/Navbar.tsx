
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 font-display font-medium text-lg"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-white">
              <span className="font-semibold">A</span>
            </div>
            <span className={`transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-foreground"
            }`}>ADA Tech Ventures</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-300 subtle-underline ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/business"
              className={`transition-colors duration-300 subtle-underline ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              Business
            </Link>
            <Link
              to="/consumer"
              className={`transition-colors duration-300 subtle-underline ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              Consumer
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-300 subtle-underline ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-border animate-slide-down">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block py-3 px-4 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/business"
              className="block py-3 px-4 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              to="/consumer"
              className="block py-3 px-4 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consumer
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-4 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 pb-4">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
