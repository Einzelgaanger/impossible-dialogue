import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              The Impossible Is What We Do
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
            Magic Builders
            <br />
            <span className="text-foreground">Consultancy</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Transforming businesses through AI-powered solutions, custom software development, 
            and strategic insights that make the impossible possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 transition-all duration-300"
              >
                Explore Services
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                98%
              </div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="hidden md:block animate-in fade-in slide-in-from-right-4 duration-1000">
          <div className="aspect-square rounded-lg border-2 border-primary flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">✨</div>
              <p className="text-primary font-medium">Innovation in Action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
