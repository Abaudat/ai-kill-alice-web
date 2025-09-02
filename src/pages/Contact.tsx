import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen bg-gradient-terminal">
      <Navigation />
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-mono font-bold glow">
              &gt;&gt; CONTACT
            </h1>
            <p className="text-xl font-mono text-primary/80">
              Get in touch with the developer
            </p>
          </div>

          {/* About the Developer Section */}
          <div className="p-8 border-2 border-primary border-glow bg-background/50">
            <h2 className="text-2xl md:text-3xl font-mono font-bold glow mb-8 flex items-center gap-3">
              <User className="w-6 w-8 md:w-8" />
              &gt;&gt; ABOUT_THE_DEVELOPER
            </h2>
            
            <div className="space-y-6 font-mono">
              <div className="space-y-2">
                <p className="text-lg text-accent glow-accent">
                  &gt; NAME: ADRIAN BAUDAT
                </p>
                <p className="text-sm text-primary/80">
                  &gt; ROLE: GAME_DEVELOPER
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
                  >
                    <Mail className="w-5 h-5" />
                    REVEAL_EMAIL
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <p className="text-accent glow-accent font-mono">
                      &gt; EMAIL: {obfuscatedEmail}
                    </p>
                    <Button 
                      variant="accent" 
                      onClick={handleEmailClick}
                      className="text-lg"
                    >
                      <Mail className="w-5 h-5" />
                      SEND_EMAIL
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;