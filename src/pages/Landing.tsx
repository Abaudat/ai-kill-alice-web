import ParallaxBackground from "@/components/ParallaxBackground";
import Navigation from "@/components/Navigation";
import aiKillAliceIcon from "@/assets/ai-kill-alice-icon.png";

const Landing = () => {
  return (
    <ParallaxBackground>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-6 pb-4">
        <section className="text-center space-y-8 max-w-4xl" role="banner">
          <img
              src={aiKillAliceIcon}
              alt="AI Kill Alice - Logic puzzle game logo featuring futuristic typography and AI-themed design elements"
              className="mx-auto w-80 md:w-[32rem] lg:w-[40rem]"
              role="img"
          />

          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-orbitron glow" role="heading" aria-level={1}>
              A LOGIC PUZZLE GAME
            </h1>
            <p className="text-xl md:text-2xl font-orbitron text-accent glow-accent" role="text">
              BY ADRIAN BAUDAT<span className="cursor" aria-hidden="true"></span>
            </p>
          </div>
        </section>
      </main>
    </ParallaxBackground>
  );
};

export default Landing;