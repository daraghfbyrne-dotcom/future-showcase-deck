import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-sync-key',
};

interface SectionUpdate {
  section_key: string;
  section_title?: string;
  content: Record<string, unknown>;
}

interface SyncPayload {
  sections: SectionUpdate[];
  sync_key?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // GET: Fetch all sections (for Power Automate to read current state)
    if (req.method === 'GET') {
      console.log('Fetching all partner strategy sections');
      
      const { data, error } = await supabase
        .from('partner_strategy_content')
        .select('*')
        .order('section_key');

      if (error) {
        console.error('Error fetching sections:', error);
        return new Response(
          JSON.stringify({ error: error.message }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ sections: data, last_fetched: new Date().toISOString() }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // POST: Update sections from Word document
    if (req.method === 'POST') {
      const payload: SyncPayload = await req.json();
      console.log('Received sync payload with', payload.sections?.length, 'sections');

      // Validate sync key if configured (optional security layer)
      const expectedSyncKey = Deno.env.get('PARTNER_SYNC_KEY');
      if (expectedSyncKey && payload.sync_key !== expectedSyncKey) {
        const headerSyncKey = req.headers.get('x-sync-key');
        if (headerSyncKey !== expectedSyncKey) {
          console.error('Invalid sync key provided');
          return new Response(
            JSON.stringify({ error: 'Invalid sync key' }),
            { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }

      if (!payload.sections || !Array.isArray(payload.sections)) {
        return new Response(
          JSON.stringify({ error: 'Invalid payload: sections array required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const results = [];
      const errors = [];

      for (const section of payload.sections) {
        if (!section.section_key) {
          errors.push({ section: section, error: 'Missing section_key' });
          continue;
        }

        console.log('Updating section:', section.section_key);

        const updateData: Record<string, unknown> = {
          content: section.content,
          last_synced_at: new Date().toISOString(),
        };

        if (section.section_title) {
          updateData.section_title = section.section_title;
        }

        const { data, error } = await supabase
          .from('partner_strategy_content')
          .upsert({
            section_key: section.section_key,
            section_title: section.section_title || section.section_key,
            content: section.content,
            last_synced_at: new Date().toISOString(),
          }, { onConflict: 'section_key' })
          .select()
          .single();

        if (error) {
          console.error('Error updating section', section.section_key, ':', error);
          errors.push({ section_key: section.section_key, error: error.message });
        } else {
          results.push(data);
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          updated: results.length,
          errors: errors.length > 0 ? errors : undefined,
          synced_at: new Date().toISOString(),
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Sync error:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
