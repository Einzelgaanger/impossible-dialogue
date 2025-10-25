import { Card } from "@/components/ui/card";
import { Brain, Code, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI-Integrated Database Systems",
    description: "Transform your data into conversational insights. Natural language queries via web, WhatsApp, and SMS with role-based access control.",
    features: [
      "Custom AI interfaces for existing databases",
      "Multi-channel access (Web, WhatsApp, SMS)",
      "Real-time data extraction & analysis",
      "Intelligent role-based permissions"
    ],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Enterprise-grade solutions built for corporations, governments, and businesses of all sizes.",
    features: [
      "Enterprise systems & web applications",
      "Mobile app development",
      "API development & integrations",
      "Legacy system modernization"
    ],
    gradient: "from-secondary to-primary"
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Strategic Reports",
    description: "BCG-style consulting reports with predictive analytics and actionable business intelligence.",
    features: [
      "Market research & analysis",
      "Business intelligence dashboards",
      "Predictive analytics",
      "Data visualization & storytelling"
    ],
    gradient: "from-accent to-primary"
  }
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three pillars of innovation that transform your business from the impossible to inevitable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="relative group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glow`}>
                    <Icon className="w-8 h-8 text-background" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold text-primary hover:text-secondary hover:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
