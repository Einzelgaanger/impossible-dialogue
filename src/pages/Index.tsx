import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProps from "@/components/ValueProps";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <ValueProps />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
