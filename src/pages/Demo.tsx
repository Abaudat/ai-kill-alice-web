import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import steamLogo from "@/assets/steam-white.svg";
import discordLogo from "@/assets/discord-white.png";
import itchLogo from "@/assets/itch-logo.svg";
import {useEffect, useRef, useState} from "react";

const Demo = () => {

  const [showDemo, setShowDemo] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const unityInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!showDemo || !canvasRef.current) return;

    const script = document.createElement("script");
    script.src = import.meta.env.BASE_URL + "Build/Build.loader.js";
    script.onload = () => {
      // @ts-ignore (Unity loader defines this globally)
      createUnityInstance(canvasRef.current, {
        dataUrl: import.meta.env.BASE_URL + "Build/Build.data",
        frameworkUrl: import.meta.env.BASE_URL + "Build/Build.framework.js",
        codeUrl: import.meta.env.BASE_URL + "Build/Build.wasm",
        streamingAssetsUrl: import.meta.env.BASE_URL + "StreamingAssets",
        companyName: "ABGames",
        productName: "AI kill Alice",
        productVersion: "1.0",
      }).then((instance: any) => {
        unityInstanceRef.current = instance;
      });
    };
    document.body.appendChild(script);

    return () => {
      // cleanup: quit Unity instance if running
      if (unityInstanceRef.current) {
        unityInstanceRef.current.Quit()
        unityInstanceRef.current = null;
      }
      document.body.removeChild(script);
    };
  }, [showDemo]);
  
  return (
    <ParallaxBackground>
      <Navigation />
      <div className="container mx-auto px-6 pt-24 md:pt-20 pb-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bebas font-bold glow tracking-widest">
              &gt;&gt; DEMO
            </h1>
          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Button variant="accent" size="lg" className={showDemo ? "hidden" : "hidden md:inline-block w-full h-24 text-lg font-orbitron col-start-2"} onClick={() => setShowDemo(true)}>
              <div className="text-left">
                <div>▶ TRY IN BROWSER</div>
              </div>
            </Button>
          </div>
          <canvas
              ref={canvasRef}
              id="unity-canvas"
              width={960}
              height={600}
              className={showDemo ? "block bg-[#231F20]" : "hidden"}
          />

          <p className="text-xl font-orbitron text-primary/80 block md:hidden">
            The demo is available on Steam. Join the community on Discord!
          </p>

          <p className="text-xl font-orbitron text-primary/80 hidden md:block">
            The demo is also available on Itch.io and Steam. Join the community on Discord!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href="https://bibibis.itch.io/ai-kill-alice"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button variant="terminal" size="lg" className="w-full h-24 text-lg font-orbitron bg-background border-primary hover:bg-background/80">
                <img src={itchLogo} className="w-8 h-8 brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(59%) sepia(99%) saturate(1347%) hue-rotate(60deg) brightness(103%) contrast(103%)'}} alt="Itch.io" />
                <div className="text-left">
                  <div>ITCH.IO</div>
                  <div className="text-xs opacity-70">DEMO</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </a>

            <a
              href="https://store.steampowered.com/app/3236050/AI_Kill_Alice/?utm_source=web&utm_campaign=web_demo_button"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="accent" size="lg" className="w-full h-24 text-lg font-orbitron">
                <img src={steamLogo} className="w-8 h-8" style={{filter: 'brightness(0)'}} alt="Steam" />
                <div className="text-left">
                  <div>STEAM</div>
                  <div className="text-xs opacity-70">DEMO</div>
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
              <Button variant="outline" size="lg" className="w-full h-24 text-lg font-orbitron bg-background border-primary hover:bg-background/80">
                <img src={discordLogo} className="w-8 h-8" style={{filter: 'brightness(0) saturate(100%) invert(59%) sepia(99%) saturate(1347%) hue-rotate(60deg) brightness(103%) contrast(103%)'}} alt="Discord" />
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
    </ParallaxBackground>
  );
};

export default Demo;