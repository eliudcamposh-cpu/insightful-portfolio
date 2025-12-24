import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { Save } from 'lucide-react';

export const AdminSettings = () => {
  const { settings, loading, refetch } = useSiteSettings();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    tagline: '',
    profile_image_url: '',
    linkedin_url: '',
    github_url: '',
    email: '',
  });

  useEffect(() => {
    if (settings) {
      setFormData({
        name: settings.name || '',
        title: settings.title || '',
        tagline: settings.tagline || '',
        profile_image_url: settings.profile_image_url || '',
        linkedin_url: settings.linkedin_url || '',
        github_url: settings.github_url || '',
        email: settings.email || '',
      });
    }
  }, [settings]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from('site_settings')
      .update(formData)
      .eq('id', settings?.id);

    if (error) {
      toast({
        title: 'Error',
        description: 'No se pudo guardar la configuración',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Guardado',
        description: 'La configuración se guardó correctamente',
      });
      refetch();
    }
    
    setSaving(false);
  };

  if (loading) {
    return <p className="text-muted-foreground">Cargando...</p>;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6">Información Personal</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Título profesional</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input
            id="tagline"
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profile_image_url">URL de foto de perfil</Label>
          <Input
            id="profile_image_url"
            value={formData.profile_image_url}
            onChange={(e) => setFormData({ ...formData, profile_image_url: e.target.value })}
            placeholder="https://..."
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin_url">LinkedIn URL</Label>
            <Input
              id="linkedin_url"
              value={formData.linkedin_url}
              onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="github_url">GitHub URL</Label>
            <Input
              id="github_url"
              value={formData.github_url}
              onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
              placeholder="https://github.com/..."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        
        <Button type="submit" disabled={saving} className="gap-2">
          <Save className="h-4 w-4" />
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </Button>
      </form>
    </div>
  );
};
