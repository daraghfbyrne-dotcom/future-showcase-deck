-- Create table to store Partner Strategy content from Word/OneDrive
CREATE TABLE public.partner_strategy_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_key TEXT NOT NULL UNIQUE,
  section_title TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  last_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.partner_strategy_content ENABLE ROW LEVEL SECURITY;

-- Public read access (content is viewable by anyone)
CREATE POLICY "Partner strategy content is publicly readable" 
ON public.partner_strategy_content 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_partner_strategy_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  NEW.last_synced_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_partner_strategy_content_updated_at
BEFORE UPDATE ON public.partner_strategy_content
FOR EACH ROW
EXECUTE FUNCTION public.update_partner_strategy_updated_at();

-- Insert initial sections that will be synced from Word
INSERT INTO public.partner_strategy_content (section_key, section_title, content) VALUES
  ('overview', 'Overview', '{"headline": "Partner Strategy 2025-2026", "description": "Building a world-class partner ecosystem to accelerate growth."}'),
  ('partnership_types', 'Partnership Types', '{"types": []}'),
  ('arr_contribution', 'ARR Contribution', '{"timeline": []}'),
  ('strategy_phases', 'Strategy Phases', '{"phases": []}'),
  ('four_pillars', 'Four Pillars', '{"pillars": []}'),
  ('incentives', 'Incentives', '{"tiers": []}'),
  ('tiering', 'Tiering', '{"requirements": []}'),
  ('kpis', 'KPIs', '{"metrics": []}'),
  ('resources', 'Resources', '{"team": []}'),
  ('risks', 'Risks & Blockers', '{"risks": [], "mitigations": []}'),
  ('status_updates', 'Status Updates', '{"partners": []}'),
  ('conclusion', 'Conclusion', '{"summary": ""}')