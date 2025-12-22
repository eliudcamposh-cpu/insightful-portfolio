import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Marketing Campaign Performance Analysis",
    description:
      "Analyzed which marketing campaigns generate real business value versus those that only increase acquisition costs. Evaluated ROAS, CPA, and channel performance over time to optimize budget allocation.",
    tools: ["SQL", "Google Sheets", "Looker Studio"],
    dashboardUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sales & Profitability Dashboard",
    description:
      "Built a comprehensive dashboard to determine if sales growth aligns with profitability. Analyzed revenue vs cost, product and category margins, and identified trends and seasonality patterns.",
    tools: ["SQL", "Google Sheets", "Looker Studio"],
    dashboardUrl: "#",
    githubUrl: "#",
  },
  {
    title: "User Retention & Churn Analysis",
    description:
      "Investigated where and why users drop off through cohort analysis, retention and churn metrics, and behavioral insights to inform retention strategies.",
    tools: ["SQL", "Google Sheets", "Looker Studio"],
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
