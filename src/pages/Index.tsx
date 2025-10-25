import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProps from "@/components/ValueProps";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <ValueProps />
      <Contact />
    </div>
  );
};

export default Index;
