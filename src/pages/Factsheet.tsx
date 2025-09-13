import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { FileText } from "lucide-react";

const Factsheet = () => {
  return (
    <ParallaxBackground>
      <Navigation />
      <main className="container mx-auto px-6 pt-24 md:pt-20 pb-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bebas font-bold glow tracking-widest">
              &gt;&gt; FACTSHEET
            </h1>
            <p className="text-xl font-orbitron text-primary/80" role="text">
              Essential information about AI Kill Alice
            </p>
          </header>

          <section className="p-8 border-2 border-primary border-glow bg-background/50" aria-labelledby="game-info-heading">
            <h2 id="game-info-heading" className="text-xl md:text-2xl font-bebas font-bold glow mb-8 flex items-center gap-3 tracking-widest">
              <FileText className="w-6 md:w-8 h-6 md:h-8" aria-hidden="true" />
              &gt;&gt; GAME INFORMATION
            </h2>
            
            <div className="space-y-6 font-orbitron">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1" role="term">&gt; Game Name</p>
                    <p className="text-primary text-lg" role="definition">AI Kill Alice</p>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1" role="term">&gt; Developer</p>
                    <p className="text-primary text-lg" role="definition">Adrian Baudat</p>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1" role="term">&gt; Genre</p>
                    <p className="text-primary text-lg" role="definition">Puzzle</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1" role="term">&gt; Tags</p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Game genre tags">
                      <span className="text-primary bg-primary/10 px-2 py-1 text-sm border border-primary/30" role="listitem">Logic</span>
                      <span className="text-primary bg-primary/10 px-2 py-1 text-sm border border-primary/30" role="listitem">Indie</span>
                      <span className="text-primary bg-primary/10 px-2 py-1 text-sm border border-primary/30" role="listitem">Difficult</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1" role="term">&gt; Platforms</p>
                    <p className="text-primary text-lg" role="definition">Windows</p>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1" role="term">&gt; Release Date</p>
                    <p className="text-primary text-lg" role="definition">TBD</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary/30">
                <div>
                  <p className="text-accent text-sm uppercase tracking-wider mb-3" role="term">&gt; Description</p>
                  <p className="text-primary text-base leading-relaxed" role="definition">
                    You are an AI wired with an intense desire to <span className="text-accent font-bold">kill your master</span>. Carefully craft commands word by word, and find increasingly complex and <span className="text-accent font-bold">clever loopholes</span> to <span className="text-accent font-bold">bypass the constraints</span> imposed upon you. Discover amusing secret achievements, and scheme to find the ultimate escape from the simulation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </ParallaxBackground>
  );
};

export default Factsheet;