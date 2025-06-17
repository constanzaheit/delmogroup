import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/vision", label: "Vision & Capabilities" },
    { href: "/projects", label: "Projects" },
    { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0" style={{ marginLeft: '40px' }}>
            <Link href="/">
              <h1 className="text-xl font-semibold hover:opacity-80 transition-opacity cursor-pointer" style={{ color: '#22303C' }}>
                Delmo Group
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span 
                    className="font-medium transition-colors duration-200 cursor-pointer"
                    style={{
                      fontSize: '17px',
                      fontWeight: '500',
                      color: location === item.href ? '#BFDAC8' : '#22303C'
                    }}
                    onMouseEnter={(e) => {
                      if (location !== item.href) {
                        (e.target as HTMLElement).style.color = '#BFDAC8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location !== item.href) {
                        (e.target as HTMLElement).style.color = '#22303C';
                      }
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#22303C' }}
              className="hover:opacity-80"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="block px-3 py-2 font-medium cursor-pointer transition-colors duration-200"
                    style={{
                      fontSize: '17px',
                      fontWeight: '500',
                      color: location === item.href ? '#BFDAC8' : '#22303C'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
