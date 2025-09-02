import ParallaxBackground from "@/components/ParallaxBackground";
import Navigation from "@/components/Navigation";

const Landing = () => {
  return (
    <ParallaxBackground>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-8xl md:text-9xl font-mono font-bold glow cursor">
            AI KILL ALICE
          </h1>
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-mono glow">
              A LOGIC PUZZLE GAME
            </p>
            <p className="text-xl md:text-2xl font-mono text-accent glow-accent">
              BY ADRIAN BAUDAT
            </p>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default Landing;