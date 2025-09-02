import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gamepad2, MessageCircle } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-terminal">
      <Navigation />
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl font-mono font-bold glow">
              &gt;&gt; DEMO_ACCESS
            </h1>
            <p className="text-xl font-mono text-primary/80">
              The demo is also available on Steam and Itch.io
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href="https://partner.steampowered.com/app/details/3236050/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="terminal" size="lg" className="w-full h-24 text-lg">
                <Gamepad2 className="w-8 h-8" />
                <div className="text-left">
                  <div>STEAM</div>
                  <div className="text-xs opacity-70">PLATFORM</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>

            <a
              href="https://bibibis.itch.io/ai-kill-alice"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="accent" size="lg" className="w-full h-24 text-lg">
                <Gamepad2 className="w-8 h-8" />
                <div className="text-left">
                  <div>ITCH.IO</div>
                  <div className="text-xs opacity-70">PLATFORM</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>

            <a
              href="https://discord.gg/zEhP2Hda3R"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" size="lg" className="w-full h-24 text-lg">
                <MessageCircle className="w-8 h-8" />
                <div className="text-left">
                  <div>DISCORD</div>
                  <div className="text-xs opacity-70">COMMUNITY</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>
          </div>

          <div className="mt-16 p-8 border-2 border-primary border-glow bg-background/50">
            <h2 className="text-2xl font-mono font-bold glow mb-4">
              &gt;&gt; SYSTEM_REQUIREMENTS
            </h2>
            <div className="text-left space-y-2 font-mono text-sm">
              <p>&gt; OS: Windows 10+, macOS 10.15+, Linux Ubuntu 18.04+</p>
              <p>&gt; Memory: 512 MB RAM</p>
              <p>&gt; Storage: 100 MB available space</p>
              <p>&gt; Network: Broadband Internet connection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;