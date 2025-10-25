import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Zap, Globe, CheckCircle, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroBg from "@/assets/ai-database-hero.jpg";
import healthcareImg from "@/assets/industry-healthcare.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import financeImg from "@/assets/industry-finance.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";

const AIDatabaseSystems = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Your team asks questions in plain English via web, WhatsApp, or SMS. No SQL knowledge needed."
    },
    {
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Intelligent permissions ensure everyone sees only what they're authorized to access."
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description: "Get instant answers from your database, no waiting for IT or data analysts."
    },
    {
      icon: Globe,
      title: "Multi-Channel Access",
      description: "Web portal, WhatsApp, SMS - access your data however works best for your workflow."
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      image: healthcareImg,
      challenge: "Doctors and nurses waste 2+ hours daily searching for patient data across multiple systems.",
      solution: "Ask via WhatsApp: 'Show me John Doe's latest lab results' - instant secure access while on rounds.",
      impact: "67% reduction in data retrieval time, doctors focus on patients, not paperwork."
    },
    {
      name: "Retail & E-commerce",
      image: retailImg,
      challenge: "Store managers can't make fast inventory decisions without calling headquarters.",
      solution: "Text the system: 'Do we have stock for product XYZ at warehouse B?' Get answers in seconds.",
      impact: "45% faster restocking decisions, 23% reduction in out-of-stock incidents."
    },
    {
      name: "Financial Services",
      image: financeImg,
      challenge: "Executives need market data but don't have time to log into complex analytics platforms.",
      solution: "Ask via SMS: 'What's our portfolio performance today?' Secure, instant briefings anywhere.",
      impact: "Executives make decisions 3x faster with real-time data in their pocket."
    },
    {
      name: "Manufacturing",
      image: manufacturingImg,
      challenge: "Production managers lose hours compiling reports from legacy ERP systems.",
      solution: "Natural language: 'Show me production output for Line 3 this week' - instant comprehensive reports.",
      impact: "80% time saved on reporting, production issues identified 4x faster."
    }
  ];

  const ceoValue = [
    {
      icon: Clock,
      title: "Save 15+ Hours Per Week Per Manager",
      description: "Your team stops wasting time navigating complex systems. They ask, they get answers, they execute."
    },
    {
      icon: TrendingUp,
      title: "Decisions at the Speed of Thought",
      description: "When your leadership has instant access to data, you move faster than competitors stuck in spreadsheet hell."
    },
    {
      icon: Shield,
      title: "Security Without Friction",
      description: "AI handles permissions automatically. Your data stays secure while becoming infinitely more accessible."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Database Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Talk to Your Database
              </span>
              <br />
              <span className="text-foreground">Like It's Human</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your existing database into an AI assistant your entire organization can query via WhatsApp, SMS, or web in plain English.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 group">
                  See a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8">
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Value Proposition */}
      <section className="py-24 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="bg-gradient-accent bg-clip-text text-transparent">CEOs Choose This</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Because your competitors are drowning in data while their teams can't find the answers they need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ceoValue.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="bg-gradient-primary bg-clip-text text-transparent">Actually Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              No rebuilding your database. No complex training. Just AI magic layered on what you already have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Real Industries, <span className="bg-gradient-gold bg-clip-text text-transparent">Real Results</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how organizations across sectors turn data paralysis into competitive advantage
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 group">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {industry.name}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-destructive mb-2">THE PROBLEM</h4>
                        <p className="text-muted-foreground">{industry.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-secondary mb-2">OUR SOLUTION</h4>
                        <p className="text-foreground italic">"{industry.solution}"</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-2">THE MAGIC</h4>
                        <p className="text-muted-foreground font-medium">{industry.impact}</p>
                      </div>
                    </div>

                    <Button variant="ghost" className="self-start group/btn p-0 h-auto font-semibold text-primary hover:text-secondary hover:bg-transparent">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Make Your Data <span className="bg-gradient-accent bg-clip-text text-transparent">Speak</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a 30-minute demo and we'll show you your own database answering questions in real-time
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-12 group">
              Schedule Your Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIDatabaseSystems;
