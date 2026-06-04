-- Lock down partner_strategy_content to authenticated users only
DROP POLICY IF EXISTS "Partner strategy content is publicly readable" ON public.partner_strategy_content;
REVOKE SELECT ON public.partner_strategy_content FROM anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.partner_strategy_content TO authenticated;
CREATE POLICY "Authenticated users can read partner strategy"
  ON public.partner_strategy_content FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can modify partner strategy"
  ON public.partner_strategy_content FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Lock down tungsten_pipeline_actuals to authenticated users only
DROP POLICY IF EXISTS "Tungsten actuals are publicly insertable" ON public.tungsten_pipeline_actuals;
DROP POLICY IF EXISTS "Tungsten actuals are publicly readable" ON public.tungsten_pipeline_actuals;
DROP POLICY IF EXISTS "Tungsten actuals are publicly updatable" ON public.tungsten_pipeline_actuals;
REVOKE SELECT, INSERT, UPDATE ON public.tungsten_pipeline_actuals FROM anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tungsten_pipeline_actuals TO authenticated;
CREATE POLICY "Authenticated users can read tungsten actuals"
  ON public.tungsten_pipeline_actuals FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert tungsten actuals"
  ON public.tungsten_pipeline_actuals FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update tungsten actuals"
  ON public.tungsten_pipeline_actuals FOR UPDATE TO authenticated USING (true) WITH CHECK (true);