import Navigation from "@/components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { Mail, User } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const obfuscatedEmail = "ai.kill.alice@gmail.com";
  
  const handleRevealEmail = () => {
    setEmailRevealed(true);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${obfuscatedEmail}`;
  };

  return (
    <ParallaxBackground>
      <Navigation />
      <main className="container mx-auto px-6 pt-24 md:pt-20 pb-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bebas font-bold glow tracking-widest">
              &gt;&gt; CONTACT
            </h1>
            <p className="text-xl font-orbitron text-primary/80" role="text">
              Get in touch with the developer
            </p>
          </header>

          <section className="p-8 border-2 border-primary border-glow bg-background/50" aria-labelledby="developer-info-heading">
            <h2 id="developer-info-heading" className="text-xl md:text-2xl font-bebas font-bold glow mb-8 flex items-center gap-3 tracking-widest">
              <User className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
              &gt;&gt; ABOUT THE DEVELOPER
            </h2>
            
            <div className="space-y-6 font-orbitron">
              <div className="space-y-2">
                <p className="text-lg text-accent glow-accent">
                  &gt; NAME: ADRIAN BAUDAT
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-primary">
                  &gt; DESCRIPTION:
                </p>
                <p className="pl-4 text-primary/90 leading-relaxed">
                  Adrian is a professional software engineer with a burning passion for game development. 
                  He has been creating games as side projects for over 10 years, previously for mobile 
                  and web platforms.
                </p>
              </div>
              
              <div className="pt-4 space-y-4">
                {!emailRevealed ? (
                  <Button 
                    variant="terminal" 
                    onClick={handleRevealEmail}
                    className="text-lg"
                    aria-label="Reveal developer email address"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    REVEAL EMAIL
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <p className="text-accent glow-accent font-mono" role="text">
                      &gt; EMAIL: {obfuscatedEmail}
                    </p>
                    <Button 
                      variant="accent" 
                      onClick={handleEmailClick}
                      className="text-lg"
                      aria-label={`Send email to ${obfuscatedEmail}`}
                    >
                      <Mail className="w-5 h-5" aria-hidden="true" />
                      SEND_EMAIL
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </ParallaxBackground>
  );
};

export default Contact;