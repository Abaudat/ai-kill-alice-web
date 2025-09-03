import { useEffect, useRef } from "react";
import background from "@/assets/background.png";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground = ({ children }: ParallaxBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      backgroundRef.current.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.1)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden parallax-container">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out scanlines"
        style={{
          backgroundImage: `url(${background})`,
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;