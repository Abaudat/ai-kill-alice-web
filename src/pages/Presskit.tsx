import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Presskit = () => {
  const handlePresskitDownload = () => {
    // Create a link to download the presskit folder
    const link = document.createElement('a');
    link.href = '/presskit.zip'; // This would be a zip file of the presskit folder
    link.download = 'AI_Kill_Alice_Presskit.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-terminal">
      <Navigation />
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-mono font-bold glow">
              &gt;&gt; PRESS_KIT
            </h1>
            <p className="text-xl font-mono text-primary/80">
              Media resources for journalists and content creators
            </p>
          </div>

          {/* Presskit Download Section */}
          <div className="p-8 border-2 border-accent border-glow bg-background/50">
            <h2 className="text-2xl md:text-3xl font-mono font-bold glow-accent mb-8 flex items-center gap-3">
              <Download className="w-6 md:w-8 h-6 md:h-8" />
              &gt;&gt; PRESSKIT_DOWNLOAD
            </h2>
            
            <div className="space-y-6 font-mono">
              <p className="text-primary/90">
                &gt; Complete media kit including screenshots, logos, trailer, and press release
              </p>
              
              <div className="space-y-2 text-sm text-primary/70">
                <p>&gt; CONTENTS:</p>
                <p className="pl-4">&gt; High-resolution screenshots</p>
                <p className="pl-4">&gt; Game logos (PNG, SVG formats)</p>
                <p className="pl-4">&gt; Gameplay trailer</p>
                <p className="pl-4">&gt; Developer photos</p>
                <p className="pl-4">&gt; Press release</p>
                <p className="pl-4">&gt; Fact sheet</p>
              </div>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={handlePresskitDownload}
                className="text-lg"
              >
                <Download className="w-6 h-6" />
                DOWNLOAD_PRESSKIT.ZIP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presskit;