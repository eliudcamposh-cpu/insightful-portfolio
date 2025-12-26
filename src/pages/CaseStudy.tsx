import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, BarChart3, Lightbulb, Target } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import BackgroundPattern from "@/components/BackgroundPattern";
import { ThemeToggle } from "@/components/ThemeToggle";

const CaseStudy = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { projects, loading } = useProjects();
  
  const project = projects.find(p => p.id === projectId);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Proyecto no encontrado</p>
        <Button asChild variant="outline">
          <Link to="/#portfolio">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Portfolio
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundPattern />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link to="/#portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Portfolio
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Project Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Project Overview */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Resumen del Proyecto</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Este proyecto aborda un problema de negocio común en el sector, donde la falta de visibilidad 
              sobre los datos dificulta la toma de decisiones estratégicas. El objetivo principal fue crear 
              un sistema de análisis que permita identificar patrones, tendencias y oportunidades de mejora.
            </p>
          </div>
        </section>

        {/* Section 2: Data & Tools */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Datos y Herramientas</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Fuente de Datos</h3>
                <p className="text-muted-foreground text-sm">
                  Datos sintéticos generados para simular un escenario empresarial realista, 
                  incluyendo métricas de rendimiento, datos de clientes y transacciones históricas.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Herramientas Utilizadas</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  {project.tools.map((tool) => (
                    <li key={tool}>• {tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Analytical Approach */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Enfoque Analítico</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              El análisis se realizó siguiendo una metodología estructurada en tres fases:
            </p>
            <ol className="text-muted-foreground space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">1</span>
                <span><strong>Exploración de datos:</strong> Limpieza, validación y análisis exploratorio para entender la estructura y calidad de los datos.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">2</span>
                <span><strong>Análisis descriptivo:</strong> Cálculo de métricas clave, segmentación y detección de patrones mediante consultas SQL.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">3</span>
                <span><strong>Visualización:</strong> Creación de dashboards interactivos para comunicar los hallazgos de forma clara y accionable.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 4: Key Insights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Hallazgos Clave</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">Se identificó que el 20% de los clientes generan el 80% de los ingresos, confirmando la regla de Pareto.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">Los picos de actividad se concentran en días específicos de la semana, sugiriendo oportunidades de optimización.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">Existe una correlación significativa entre el tiempo de respuesta y la satisfacción del cliente.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">Las tasas de conversión varían considerablemente según el canal de adquisición utilizado.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Visual Evidence */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Evidencia Visual</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Dashboard Screenshot</p>
                </div>
              </div>
              <div className="p-3 border-t border-border">
                <p className="text-sm text-muted-foreground">Vista general del dashboard principal</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Chart Placeholder</p>
                </div>
              </div>
              <div className="p-3 border-t border-border">
                <p className="text-sm text-muted-foreground">Gráfico de tendencias temporales</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden md:col-span-2">
              <div className="aspect-[21/9] bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Database className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">SQL Query Example</p>
                </div>
              </div>
              <div className="p-3 border-t border-border">
                <p className="text-sm text-muted-foreground">Ejemplo de consulta SQL utilizada en el análisis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Business Recommendations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Recomendaciones de Negocio</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-semibold">1</span>
                <div>
                  <h3 className="font-medium mb-1">Implementar programa de fidelización</h3>
                  <p className="text-muted-foreground text-sm">Desarrollar un programa enfocado en retener a los clientes de alto valor identificados en el análisis.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-semibold">2</span>
                <div>
                  <h3 className="font-medium mb-1">Optimizar recursos según demanda</h3>
                  <p className="text-muted-foreground text-sm">Ajustar la asignación de recursos basándose en los patrones de actividad detectados.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-semibold">3</span>
                <div>
                  <h3 className="font-medium mb-1">Mejorar tiempos de respuesta</h3>
                  <p className="text-muted-foreground text-sm">Establecer SLAs más estrictos para mejorar la satisfacción del cliente.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-semibold">4</span>
                <div>
                  <h3 className="font-medium mb-1">Revisar estrategia de canales</h3>
                  <p className="text-muted-foreground text-sm">Reasignar presupuesto de marketing hacia los canales con mejor rendimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center pt-8 border-t border-border">
          <Button asChild>
            <Link to="/#portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Portfolio
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CaseStudy;
