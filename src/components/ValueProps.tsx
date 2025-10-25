import { Card } from "@/components/ui/card";
import { Zap, Shield, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We move at the speed of innovation, delivering projects efficiently without compromising quality."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data and systems are protected with industry-leading security practices and compliance."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 support and ongoing maintenance to ensure your systems run smoothly and scale with you."
  },
  {
    icon: Rocket,
    title: "Future-Proof Solutions",
    description: "Built with cutting-edge technology that evolves with your business needs and market demands."
  }
];

const ValueProps = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">MBC</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't just build software—we create impossible solutions that drive real business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
