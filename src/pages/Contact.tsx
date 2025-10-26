import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Let's Make</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                The Impossible Happen
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? We're here to turn your biggest challenges into breakthrough solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input 
                      placeholder="Your full name" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input 
                      placeholder="Your company name" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <a href="mailto:binfred.ke@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0 group-hover:shadow-glow-secondary transition-all">
                      <Mail className="w-6 h-6 text-background" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Email Us</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">binfred.ke@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </a>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <a href="tel:+254700861129" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow-secondary flex-shrink-0 group-hover:shadow-glow transition-all">
                      <Phone className="w-6 h-6 text-background" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Call Us</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">+254 700 861129</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EAT</p>
                    </div>
                  </a>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <a href="https://wa.me/254700861129" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all">
                      <MessageSquare className="w-6 h-6 text-background" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">WhatsApp</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">+254 700 861129</p>
                      <p className="text-sm text-muted-foreground">Quick response via WhatsApp</p>
                    </div>
                  </a>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-background" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                      <p className="text-sm text-muted-foreground">Schedule an appointment</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-card/20 to-background">
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your <span className="bg-gradient-accent bg-clip-text text-transparent">Impossible Project</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether it's AI integration, custom software, or strategic analysis—we're here to deliver magic.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
