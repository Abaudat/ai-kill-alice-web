import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { FileText } from "lucide-react";

const Factsheet = () => {
  return (
    <ParallaxBackground>
      <Navigation />
      <div className="container mx-auto px-6 pt-24 md:pt-20 pb-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bebas font-bold glow tracking-widest">
              &gt;&gt; FACTSHEET
            </h1>
            <p className="text-xl font-orbitron text-primary/80">
              Essential information about AI Kill Alice
            </p>
          </div>

          {/* Factsheet Section */}
          <div className="p-8 border-2 border-primary border-glow bg-background/50">
            <h2 className="text-xl md:text-2xl font-bebas font-bold glow mb-8 flex items-center gap-3 tracking-widest">
              <FileText className="w-6 md:w-8 h-6 md:h-8" />
              &gt;&gt; GAME INFORMATION
            </h2>
            
            <div className="space-y-6 font-orbitron">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1">&gt; Game Name</p>
                    <p className="text-primary text-lg">AI Kill Alice</p>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1">&gt; Developer</p>
                    <p className="text-primary text-lg">Adrian Baudat</p>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1">&gt; Genre</p>
                    <p className="text-primary text-lg">Puzzle</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1">&gt; Tags</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-primary bg-primary/10 px-2 py-1 text-sm border border-primary/30">Logic</span>
                      <span className="text-primary bg-primary/10 px-2 py-1 text-sm border border-primary/30">Indie</span>
                      <span className="text-primary bg-primary/10 px-2 py-1 text-sm border border-primary/30">Difficult</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1">&gt; Platforms</p>
                    <p className="text-primary text-lg">Windows</p>
                  </div>
                  
                  <div>
                    <p className="text-accent text-sm uppercase tracking-wider mb-1">&gt; Release Date</p>
                    <p className="text-primary text-lg">TBD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default Factsheet;