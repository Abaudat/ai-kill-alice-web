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
    { path: "/presskit", label: "PRESSKIT" },
    { path: "/factsheet", label: "FACTSHEET" },
    { path: "/contact", label: "CONTACT" },
  ];

  if (isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 border-b-2 border-primary border-glow backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bebas text-primary glow tracking-widest">AI KILL ALICE</h1>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="bg-background/95 border-t border-primary/30">
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
    <nav className="fixed top-6 left-6 z-50">
      <div className="bg-background/90 border-2 border-primary border-glow backdrop-blur-sm p-1">
        <div className="space-y-1">
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