import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainPages = [
    { path: "/", label: "2026 Strategy" },
    { path: "/events-strategy", label: "Events Strategy" },
    { path: "/analyst-strategy", label: "Analyst Strategy" },
    { path: "/partners-strategy", label: "Partners Strategy" },
    { path: "/objectives-2026", label: "2026 Objectives" },
    { path: "/capacity-plan", label: "Capacity Plan" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SC</span>
            </div>
            <span className="font-display font-semibold text-lg">SoftCo 2026</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainPages.map((page) => (
              <Link key={page.path} to={page.path}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`text-sm font-medium ${
                    location.pathname === page.path ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {mainPages.map((page) => (
                <Link key={page.path} to={page.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${
                      location.pathname === page.path ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
