import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
import steamLogo from "@/assets/steam-logo.svg";
import discordLogo from "@/assets/discord-logo.svg";
import itchLogo from "@/assets/itch-logo.svg";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-terminal">
      <Navigation />
      <div className="container mx-auto px-6 pt-24 md:pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bebas font-bold glow">
              &gt;&gt; DEMO
            </h1>
            <p className="text-xl font-orbitron text-primary/80">
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
              <Button variant="terminal" size="lg" className="w-full h-24 text-lg font-orbitron">
                <img src={steamLogo} className="w-8 h-8" alt="Steam" />
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
              <Button variant="accent" size="lg" className="w-full h-24 text-lg font-orbitron">
                <img src={itchLogo} className="w-8 h-8" alt="Itch.io" />
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
              <Button variant="outline" size="lg" className="w-full h-24 text-lg font-orbitron">
                <img src={discordLogo} className="w-8 h-8" alt="Discord" />
                <div className="text-left">
                  <div>DISCORD</div>
                  <div className="text-xs opacity-70">COMMUNITY</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;