import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Layers, ArrowRight, Shield, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroBg from "@/assets/software-dev-hero.jpg";

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: Layers,
      title: "Enterprise Systems",
      description: "Mission-critical applications built for scale, security, and seamless integration with your existing infrastructure.",
      features: ["Custom ERP Solutions", "Workflow Automation", "Legacy System Modernization", "API Integrations"]
    },
    {
      icon: Cloud,
      title: "Web Applications",
      description: "Lightning-fast, responsive web apps that work flawlessly across all devices and deliver exceptional user experiences.",
      features: ["Progressive Web Apps", "SaaS Platforms", "Admin Dashboards", "Customer Portals"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that users love, from concept to App Store launch and beyond.",
      features: ["iOS & Android Apps", "React Native Development", "Mobile-First Design", "App Store Optimization"]
    },
    {
      icon: Code,
      title: "API Development",
      description: "Robust, scalable APIs that power integrations, enable third-party access, and future-proof your digital ecosystem.",
      features: ["RESTful APIs", "GraphQL Services", "Microservices Architecture", "Third-Party Integrations"]
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We immerse ourselves in your business, understand your challenges, and map out a solution that actually solves them."
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "See your vision come to life with interactive prototypes. Iterate fast, fail fast, perfect before coding."
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Weekly demos, constant communication, rapid iterations. You're part of the team, not just a client."
    },
    {
      step: "04",
      title: "Launch & Scale",
      description: "We don't just ship and disappear. Ongoing support, monitoring, and optimization as you grow."
    }
  ];

  const whyUs = [
    {
      icon: Rocket,
      title: "Proven Track Record",
      stat: "500+",
      description: "Projects delivered across 20+ industries for enterprises, governments, and startups"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      stat: "100%",
      description: "Compliant with SOC 2, GDPR, HIPAA - we build with security as a foundation, not an afterthought"
    },
    {
      icon: Users,
      title: "Dedicated Teams",
      stat: "24/7",
      description: "Your project gets a dedicated team that acts as an extension of your organization"
    }
  ];

  const techStack = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Go", ".NET", "Java"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    database: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    cloud: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"]
  };

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
              <Code className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Enterprise-Grade Development</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Software That</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transforms Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From idea to launch to scale. We build custom software for enterprises, governments, and fast-growing businesses that refuse to settle for off-the-shelf.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We <span className="bg-gradient-accent bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From mobile apps to enterprise platforms, we build software that works as hard as you do
            </p>
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
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              How We <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven process that turns complex challenges into elegant solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {approach.map((phase, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow font-bold text-background text-lg">
                  {phase.step}
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

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Teams <span className="bg-gradient-gold bg-clip-text text-transparent">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {whyUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mx-auto group-hover:shadow-glow-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                      {item.stat}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Tech Stack */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Technologies We Master</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">{category}</h4>
                  <div className="space-y-2">
                    {technologies.map((tech) => (
                      <div key={tech} className="text-sm text-muted-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something <span className="bg-gradient-accent bg-clip-text text-transparent">Impossible</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your vision, and we'll show you how we can turn it into reality
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-12 group">
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
