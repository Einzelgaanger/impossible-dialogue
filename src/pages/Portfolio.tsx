import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import portfolioBg from "@/assets/portfolio-bg.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Healthcare Data System",
      client: "Major Hospital Network",
      category: "AI Database Systems",
      description: "Transformed patient data access for 2,000+ healthcare professionals through natural language WhatsApp queries.",
      impact: ["67% reduction in data retrieval time", "Zero data breaches in 18 months", "98% user satisfaction"],
      tags: ["Healthcare", "AI", "WhatsApp Integration", "HIPAA Compliant"]
    },
    {
      title: "National E-Governance Platform",
      client: "Government Agency",
      category: "Software Development",
      description: "Built a comprehensive citizen service platform serving 5M+ users with 99.9% uptime.",
      impact: ["5M+ active users", "300+ government services digitized", "45% reduction in processing time"],
      tags: ["Government", "Enterprise", "Web Platform", "Mobile Apps"]
    },
    {
      title: "Retail Intelligence Dashboard",
      client: "Fortune 500 Retailer",
      category: "Data Analysis",
      description: "Real-time analytics platform providing predictive insights across 500+ store locations.",
      impact: ["$12M additional revenue", "23% inventory optimization", "Real-time decision making"],
      tags: ["Retail", "Predictive Analytics", "BI Dashboard", "Big Data"]
    },
    {
      title: "Financial Trading Platform",
      client: "Investment Firm",
      category: "Software Development",
      description: "High-frequency trading system processing 100,000+ transactions per second with enterprise security.",
      impact: ["<10ms latency", "Zero downtime in 2 years", "SOC 2 Type II certified"],
      tags: ["Finance", "Real-time Systems", "Security", "APIs"]
    },
    {
      title: "Manufacturing IoT System",
      client: "Industrial Manufacturer",
      category: "AI Database Systems",
      description: "AI assistant querying production data from 50+ factory sensors via SMS and web interface.",
      impact: ["80% faster reporting", "35% downtime reduction", "4x faster issue identification"],
      tags: ["Manufacturing", "IoT", "AI", "SMS Integration"]
    },
    {
      title: "Market Expansion Strategy",
      client: "SaaS Startup",
      category: "Data Analysis",
      description: "Comprehensive market analysis identifying optimal expansion markets with ROI projections.",
      impact: ["3 new markets entered", "89% higher conversion", "2x faster customer acquisition"],
      tags: ["Market Research", "Strategy", "BCG-style Report", "SaaS"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Projects That</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Changed Everything
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From healthcare to finance, government to retail—real solutions that delivered impossible results
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <div className="text-sm text-muted-foreground italic">{project.client}</div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3">IMPACT</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Project Could Be <span className="bg-gradient-accent bg-clip-text text-transparent">Next</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can deliver impossible results for your organization
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-12 group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
