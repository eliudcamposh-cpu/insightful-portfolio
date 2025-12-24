import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Index = () => {
  const { settings, loading } = useSiteSettings();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Cargando...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        name={settings?.name || "Your Name"} 
        profileImageUrl={settings?.profile_image_url}
      />
      <About />
      <TechStack />
      <Projects />
      <Contact 
        linkedinUrl={settings?.linkedin_url || "#"}
        githubUrl={settings?.github_url || "#"}
        email={settings?.email || "hello@example.com"}
      />
    </main>
  );
};

export default Index;
