import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  name: string;
}

export const Hero = ({ name }: HeroProps) => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-4">
          Business Intelligence Analyst
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Transforming data into business insights
        </p>
        <Button
          onClick={scrollToPortfolio}
          size="lg"
          className="gap-2"
        >
          View Portfolio
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
