CREATE TABLE public.tungsten_pipeline_actuals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  month text NOT NULL,
  metric text NOT NULL,
  value text NOT NULL DEFAULT '',
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(month, metric)
);

ALTER TABLE public.tungsten_pipeline_actuals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tungsten actuals are publicly readable" ON public.tungsten_pipeline_actuals FOR SELECT TO public USING (true);
CREATE POLICY "Tungsten actuals are publicly insertable" ON public.tungsten_pipeline_actuals FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Tungsten actuals are publicly updatable" ON public.tungsten_pipeline_actuals FOR UPDATE TO public USING (true) WITH CHECK (true);