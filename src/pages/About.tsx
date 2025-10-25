import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "We Do The Impossible",
      description: "When clients say 'this can't be done,' that's when we get excited. We exist to solve problems others walk away from."
    },
    {
      icon: Users,
      title: "Your Success Is Our Success",
      description: "We don't just deliver projects—we become partners invested in your long-term growth and competitive advantage."
    },
    {
      icon: Award,
      title: "Excellence Is Non-Negotiable",
      description: "From code quality to client communication, we hold ourselves to standards that make other consultancies uncomfortable."
    },
    {
      icon: Globe,
      title: "Innovation Without Ego",
      description: "We use cutting-edge tech, but only when it solves real problems. No buzzwords, no tech for tech's sake."
    }
  ];

  const team = [
    {
      role: "AI & Data Science",
      description: "PhDs and practitioners who've built ML systems at scale for Fortune 500 companies"
    },
    {
      role: "Software Engineering",
      description: "Senior developers with 10+ years building enterprise systems that handle millions of users"
    },
    {
      role: "Strategic Analysis",
      description: "Former BCG and McKinsey consultants who speak the language of business, not just tech"
    },
    {
      role: "Design & UX",
      description: "Award-winning designers who make complex systems intuitive and beautiful"
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with mission to make AI accessible to enterprises" },
    { year: "2019", event: "First AI database system deployed for healthcare client" },
    { year: "2020", event: "Expanded to government sector, 100+ projects milestone" },
    { year: "2021", event: "International expansion, SOC 2 certification achieved" },
    { year: "2022", event: "500+ projects completed, 98% client retention rate" },
    { year: "2024", event: "Leading AI consultancy for enterprise database transformation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">We're Not Just Consultants</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We're Magic Makers
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2018, we've been turning "impossible" into "done" for enterprises, governments, and businesses that refuse to settle for ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-primary/30">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Our Mission</span>
                </h2>
                <p className="text-xl text-muted-foreground text-center leading-relaxed">
                  To democratize access to enterprise-grade AI and technology solutions, making the impossible possible for organizations of all sizes. We believe every business deserves software and intelligence systems that Fortune 500 companies have—without the Fortune 500 price tag or complexity.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We <span className="bg-gradient-accent bg-clip-text text-transparent">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              World-Class <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our team brings together the best minds from tech giants, consulting firms, and innovative startups
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Users className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.role}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="bg-gradient-gold bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow font-bold text-background group-hover:shadow-glow-secondary transition-all duration-300">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 mb-8">
                  <p className="text-foreground leading-relaxed">{milestone.event}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Certified & <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">SOC 2 Type II</div>
                <div className="text-sm text-muted-foreground">Security Certified</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">ISO 27001</div>
                <div className="text-sm text-muted-foreground">Information Security</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">GDPR</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">HIPAA</div>
                <div className="text-sm text-muted-foreground">Healthcare Ready</div>
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
            Join Companies That <span className="bg-gradient-accent bg-clip-text text-transparent">Chose Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help you achieve the impossible
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-12 group">
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
