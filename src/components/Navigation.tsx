import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/demo", label: "DEMO" },
    { path: "/factsheet", label: "FACTSHEET" },
    { path: "/presskit", label: "PRESSKIT" },
    { path: "/contact", label: "CONTACT" },
  ];

  if (isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 border-b-2 border-primary border-glow backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bebas text-primary glow tracking-widest" role="banner">AI KILL ALICE</h1>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-accent transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
        
        {isOpen && (
          <div id="mobile-menu" className="bg-background/95 border-t border-primary/30" role="menu">
            <div className="grid grid-cols-2 gap-1 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-xs font-orbitron tracking-wider transition-all duration-300 text-center",
                    location.pathname === item.path
                      ? "text-accent glow-accent bg-accent/10"
                      : "text-primary hover:text-accent hover:bg-primary/10 hover:glow"
                  )}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? "page" : undefined}
                  aria-label={`Navigate to ${item.label.toLowerCase()} page`}
                >
                  &gt;&gt; {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className="fixed top-6 left-6 z-50" role="navigation" aria-label="Main navigation">
      <div className="bg-background/90 border-2 border-primary border-glow backdrop-blur-sm p-1">
        <div className="space-y-1" role="list">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-4 py-2 text-sm font-orbitron tracking-wider transition-all duration-300",
                location.pathname === item.path
                  ? "text-accent glow-accent bg-accent/10"
                  : "text-primary hover:text-accent hover:bg-primary/10 hover:glow"
              )}
              role="listitem"
              aria-current={location.pathname === item.path ? "page" : undefined}
              aria-label={`Navigate to ${item.label.toLowerCase()} page`}
            >
              &gt;&gt; {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;