import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", submenu: [
      { name: "AI Database Systems", path: "/services/ai-database" },
      { name: "Software Development", path: "/services/software-development" },
      { name: "Data Analysis & Reports", path: "/services/data-analysis" },
    ]},
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-secondary transition-all duration-300">
              <span className="text-background font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none bg-gradient-primary bg-clip-text text-transparent">
                Magic Builders
              </span>
              <span className="text-xs text-muted-foreground">Consultancy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className={`block px-4 py-3 text-sm hover:bg-primary/10 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                          isActive(sublink.path) ? "text-primary font-medium" : "text-foreground"
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 text-sm transition-colors ${
                          isActive(sublink.path)
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4 bg-gradient-primary">Get Started</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
