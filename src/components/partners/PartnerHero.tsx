import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, AlertTriangle } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface OverviewContent {
  headline?: string;
  description?: string;
  disclaimer?: string;
  vcpTargets?: {
    arrFromPartners?: string;
    partnerImplementationDays?: string;
  };
  keyPrinciples?: string[];
}

const defaultContent: OverviewContent = {
  headline: "SoftCo Partner Strategy",
  description: "Building a scalable partner ecosystem to drive >30% of new ARR by 2029",
  disclaimer: "This Partnership Document (19/12/25) assumes a standard partnership with Tungsten Automation delivering similar levels of pipeline. This document will be updated when the outcome of Tungsten negotiations are completed.",
  vcpTargets: {
    arrFromPartners: ">30%",
    partnerImplementationDays: ">80%",
  },
  keyPrinciples: [
    "Start with low-lift, high-impact models (referral, co-sell)",
    "Lay the groundwork for more complex models (VARs, SIs)",
    "Validate other models – eg OEM-out",
    "Deliver scalable enablement, feedback, and governance",
    "Continually evaluate and iterate",
  ],
};

const PartnerHero = () => {
  const { data: section, isLoading } = usePartnerStrategySection("overview");
  
  const content: OverviewContent = section?.content 
    ? { ...defaultContent, ...(section.content as OverviewContent) }
    : defaultContent;

  const keyPrinciples = content.keyPrinciples || defaultContent.keyPrinciples || [];

  return (
    <section id="partner-overview" className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          {content.headline}
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
          {content.description}
        </p>
        <p className="text-xs text-slate-400">
            Last synced: 15/02/2026
        </p>
      </div>
    </section>
  );
};

export default PartnerHero;
