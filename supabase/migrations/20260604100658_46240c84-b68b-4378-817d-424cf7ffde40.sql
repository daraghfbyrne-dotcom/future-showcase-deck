-- Revert to public access since app now uses a simple shared password gate on the client
DROP POLICY IF EXISTS "Authenticated users can view partner strategy content" ON public.partner_strategy_content;
DROP POLICY IF EXISTS "Authenticated users can insert partner strategy content" ON public.partner_strategy_content;
DROP POLICY IF EXISTS "Authenticated users can update partner strategy content" ON public.partner_strategy_content;
DROP POLICY IF EXISTS "Authenticated users can view tungsten pipeline actuals" ON public.tungsten_pipeline_actuals;
DROP POLICY IF EXISTS "Authenticated users can insert tungsten pipeline actuals" ON public.tungsten_pipeline_actuals;
DROP POLICY IF EXISTS "Authenticated users can update tungsten pipeline actuals" ON public.tungsten_pipeline_actuals;

GRANT SELECT, INSERT, UPDATE ON public.partner_strategy_content TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.tungsten_pipeline_actuals TO anon, authenticated;

CREATE POLICY "Public can view partner strategy content" ON public.partner_strategy_content FOR SELECT USING (true);
CREATE POLICY "Public can insert partner strategy content" ON public.partner_strategy_content FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can update partner strategy content" ON public.partner_strategy_content FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Public can view tungsten pipeline actuals" ON public.tungsten_pipeline_actuals FOR SELECT USING (true);
CREATE POLICY "Public can insert tungsten pipeline actuals" ON public.tungsten_pipeline_actuals FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can update tungsten pipeline actuals" ON public.tungsten_pipeline_actuals FOR UPDATE USING (true) WITH CHECK (true);