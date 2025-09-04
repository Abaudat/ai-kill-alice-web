import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ParallaxBackground>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-20 pb-4">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bebas font-bold glow tracking-widest">
              &gt;&gt; 404
            </h1>
            <p className="text-xl md:text-2xl font-orbitron text-primary/80">
              Oops! Page not found
            </p>
            <p className="text-sm font-orbitron text-primary/60">
              The page you're looking for doesn't exist
            </p>
          </div>
          
          <Link 
            to="/" 
            className="inline-block px-6 py-3 border-2 border-primary border-glow bg-background/50 text-primary hover:text-accent hover:border-accent font-orbitron tracking-wider transition-all duration-300 hover:glow"
          >
            &gt;&gt; RETURN TO HOME
          </Link>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default NotFound;
