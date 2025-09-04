import ParallaxBackground from "@/components/ParallaxBackground";
import Navigation from "@/components/Navigation";
import aiKillAliceIcon from "@/assets/ai-kill-alice-icon.png";

const Landing = () => {
  return (
    <ParallaxBackground>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-6 pb-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Replace text with image */}
          <img
              src={aiKillAliceIcon}
              alt="AI Kill Alice"
              className="mx-auto w-80 md:w-[32rem] lg:w-[40rem]"
          />

          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-orbitron glow">
              A LOGIC PUZZLE GAME
            </p>
            <p className="text-xl md:text-2xl font-orbitron text-accent glow-accent">
              BY ADRIAN BAUDAT<span className="cursor"></span>
            </p>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default Landing;