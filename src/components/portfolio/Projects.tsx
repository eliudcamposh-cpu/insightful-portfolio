import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Built an interactive dashboard to track regional sales performance, identify top-performing products, and forecast quarterly revenue trends.",
    tools: ["SQL", "Looker Studio"],
    dashboardUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "Analyzed customer behavior patterns to identify churn indicators, enabling the marketing team to implement targeted retention strategies.",
    tools: ["SQL", "Google Sheets", "Looker Studio"],
    dashboardUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Inventory Optimization Report",
    description:
      "Developed an automated reporting system to monitor stock levels, predict demand, and reduce inventory holding costs by 15%.",
    tools: ["SQL", "Google Sheets"],
    dashboardUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Dashboard
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
