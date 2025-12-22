import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero name="Your Name" />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
