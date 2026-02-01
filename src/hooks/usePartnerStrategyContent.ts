import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PartnerStrategySection {
  id: string;
  section_key: string;
  section_title: string;
  content: Record<string, unknown>;
  last_synced_at: string;
  created_at: string;
  updated_at: string;
}

export const usePartnerStrategyContent = (sectionKey?: string) => {
  return useQuery({
    queryKey: ['partner-strategy-content', sectionKey],
    queryFn: async () => {
      let query = supabase
        .from('partner_strategy_content')
        .select('*');

      if (sectionKey) {
        query = query.eq('section_key', sectionKey);
      }

      const { data, error } = await query.order('section_key');

      if (error) {
        console.error('Error fetching partner strategy content:', error);
        throw error;
      }

      return data as PartnerStrategySection[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const usePartnerStrategySection = (sectionKey: string) => {
  return useQuery({
    queryKey: ['partner-strategy-section', sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partner_strategy_content')
        .select('*')
        .eq('section_key', sectionKey)
        .single();

      if (error) {
        console.error('Error fetching section:', sectionKey, error);
        throw error;
      }

      return data as PartnerStrategySection;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
