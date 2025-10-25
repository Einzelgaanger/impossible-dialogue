import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Target, Lightbulb, ArrowRight, Brain, LineChart, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroBg from "@/assets/data-analysis-hero.jpg";

const DataAnalysis = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Strategic Business Reports",
      description: "BCG-style consulting reports that don't just show you data—they tell you exactly what to do next.",
      deliverables: ["Executive Dashboards", "Market Analysis", "Competitive Intelligence", "Growth Strategies"]
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Stop reacting to the market. See what's coming and position yourself ahead of the competition.",
      deliverables: ["Demand Forecasting", "Risk Modeling", "Customer Behavior Prediction", "Trend Analysis"]
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Real-time dashboards that turn your data chaos into crystal-clear insights leadership can act on.",
      deliverables: ["Custom BI Dashboards", "KPI Tracking", "Automated Reporting", "Data Visualization"]
    },
    {
      icon: PieChart,
      title: "Market Research",
      description: "Deep-dive research that reveals opportunities your competitors don't even know exist.",
      deliverables: ["Industry Reports", "Customer Segmentation", "Market Sizing", "Competitor Analysis"]
    }
  ];

  const process = [
    {
      title: "Data Discovery",
      description: "We audit your existing data sources, identify gaps, and map what matters to your strategic goals."
    },
    {
      title: "Analysis & Insights",
      description: "Our analysts dig deep, find patterns, and uncover insights that transform how you see your business."
    },
    {
      title: "Strategic Recommendations",
      description: "We don't just present findings. We provide actionable strategies with ROI projections and implementation roadmaps."
    },
    {
      title: "Ongoing Intelligence",
      description: "Set up automated reporting so you always have fresh insights without the manual work."
    }
  ];

  const ceoValue = [
    {
      icon: Target,
      title: "Make Confident Decisions",
      description: "Stop making gut-call decisions with millions on the line. Every recommendation is backed by hard data and proven methodologies.",
      stat: "3x",
      statLabel: "Faster Strategic Decisions"
    },
    {
      icon: TrendingUp,
      title: "Find Hidden Revenue",
      description: "Your data is hiding opportunities right now. We find them, quantify them, and show you how to capture them.",
      stat: "23%",
      statLabel: "Average Revenue Increase"
    },
    {
      icon: Lightbulb,
      title: "Outthink Competition",
      description: "While competitors react to last quarter, you'll be executing on predictions about next year.",
      stat: "6-12mo",
      statLabel: "Market Advantage Window"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce CEO",
      challenge: "Which products to stock for holiday season?",
      insight: "Predictive model analyzed 3 years of data, weather patterns, social trends",
      outcome: "37% higher profit margin by stocking exactly what customers wanted before they knew it"
    },
    {
      industry: "Healthcare CFO",
      challenge: "Why are costs rising faster than revenue?",
      insight: "Deep-dive analysis revealed hidden inefficiencies in supply chain and staffing",
      outcome: "$2.4M saved in first year with zero service quality impact"
    },
    {
      industry: "SaaS Founder",
      challenge: "Where should we expand internationally?",
      insight: "Market analysis scored 47 countries across 23 criteria",
      outcome: "Entered 3 markets with 89% higher conversion rates than US average"
    },
    {
      industry: "Manufacturing COO",
      challenge: "How to reduce waste without cutting corners?",
      insight: "Data model identified exact points in production where quality control could be optimized",
      outcome: "18% waste reduction, 12% faster production, quality scores improved"
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
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Strategic Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Turn Data Into</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Strategic Advantage
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BCG-caliber analysis and reports that show you not just what happened, but exactly what to do next to dominate your market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold hover:shadow-glow transition-all duration-300 text-lg px-8 group text-background">
                  Request Sample Report
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/10 text-lg px-8">
                See Case Studies
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
              Why <span className="bg-gradient-primary bg-clip-text text-transparent">Leadership</span> Needs This
            </h2>
            <p className="text-xl text-muted-foreground">
              Your competitors are flying blind. You won't be.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ceoValue.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow group-hover:shadow-glow-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                          {item.stat}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.statLabel}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We <span className="bg-gradient-accent bg-clip-text text-transparent">Deliver</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              From Data to <span className="bg-gradient-primary bg-clip-text text-transparent">Decisions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((phase, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow font-bold text-background text-lg">
                  {index + 1}
                </div>
                <div className="space-y-3 pt-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Real Leaders, <span className="bg-gradient-gold bg-clip-text text-transparent">Real Results</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how data intelligence changed the game for these organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-lg font-bold text-accent">{useCase.industry}</div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-1">THE QUESTION</h4>
                    <p className="text-foreground italic">"{useCase.challenge}"</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-1">OUR INSIGHT</h4>
                    <p className="text-sm text-muted-foreground">{useCase.insight}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <h4 className="text-sm font-semibold text-accent mb-1">THE RESULT</h4>
                    <p className="text-foreground font-medium">{useCase.outcome}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Stop Guessing. <span className="bg-gradient-primary bg-clip-text text-transparent">Start Knowing.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Request a sample analysis of your industry and see what insights you're missing
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-gold hover:shadow-glow text-lg px-12 group text-background">
              Get Your Free Industry Report
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataAnalysis;
