import ParallaxBackground from "@/components/ParallaxBackground";
import Navigation from "@/components/Navigation";

const Factsheet = () => {
  return (
    <ParallaxBackground>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-background/90 border-2 border-primary border-glow backdrop-blur-sm p-8">
            <h1 className="text-4xl md:text-6xl font-bebas text-primary glow mb-8 text-center tracking-widest">
              FACTSHEET
            </h1>
            
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