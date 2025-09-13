import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Presskit = () => {
  const handlePresskitDownload = () => {
    // Create a link to download the presskit folder
    const link = document.createElement('a');
    link.href = "https://media.githubusercontent.com/media/Abaudat/ai-kill-alice-web/refs/heads/main/public/presskit.zip";
    link.download = 'AI_Kill_Alice_Presskit.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ParallaxBackground>
      <Navigation />
      <main className="container mx-auto px-6 pt-24 md:pt-20 pb-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bebas font-bold glow tracking-widest">
              &gt;&gt; PRESSKIT
            </h1>
            <p className="text-xl font-orbitron text-primary/80" role="text">
              Media resources for journalists and content creators
            </p>
          </header>

          <section className="p-8 border-2 border-primary border-glow bg-background/50" aria-labelledby="presskit-heading">
            <h2 id="presskit-heading" className="text-xl md:text-2xl font-bebas font-bold glow mb-8 flex items-center gap-3 tracking-widest">
              <Download className="w-6 md:w-8 h-6 md:h-8" aria-hidden="true" />
              &gt;&gt; PRESSKIT DOWNLOAD
            </h2>
            
            <div className="space-y-6 font-orbitron">
              <p className="text-primary/90">
                &gt; Complete media kit including screenshots, logos, trailer, and images
              </p>
              
              <div className="space-y-2 text-sm text-primary/70">
                <p>&gt; CONTENTS:</p>
                <p className="pl-4">&gt; Screenshots</p>
                <p className="pl-4">&gt; Logos</p>
                <p className="pl-4">&gt; Capsules</p>
                <p className="pl-4">&gt; Trailers</p>
                <p className="pl-4">&gt; GIFs</p>
                <p className="pl-4">&gt; Character sprites</p>
              </div>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={handlePresskitDownload}
                className="text-lg"
                aria-label="Download AI Kill Alice presskit containing media assets and promotional materials"
              >
                <Download className="w-6 h-6" aria-hidden="true" />
                DOWNLOAD
              </Button>
            </div>
          </section>
        </div>
      </main>
    </ParallaxBackground>
  );
};

export default Presskit;