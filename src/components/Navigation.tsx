import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/demo", label: "DEMO" },
    { path: "/presskit", label: "PRESSKIT" },
  ];

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className="bg-background/90 border-2 border-primary border-glow backdrop-blur-sm p-1">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-4 py-2 text-sm font-mono tracking-wider transition-all duration-300",
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