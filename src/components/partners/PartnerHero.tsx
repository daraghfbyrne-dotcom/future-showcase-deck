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
        <Badge variant="outline" className="border-amber-500 text-amber-600">
          2025-2026 Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          {content.headline}
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
          {content.description}
        </p>
        {section?.last_synced_at && (
          <p className="text-xs text-slate-400">
            Last synced: {new Date(section.last_synced_at).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* Disclaimer */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              {content.disclaimer}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* VCP Targets */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-50 border-slate-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Five-Year VCP Target</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-700">ARR from Partners</span>
                <span className="text-2xl font-bold text-blue-600">
                  {content.vcpTargets?.arrFromPartners || ">30%"}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-700">Partner Implementation Days</span>
                <span className="text-2xl font-bold text-green-600">
                  {content.vcpTargets?.partnerImplementationDays || ">80%"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50 border-slate-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Key Principles</h3>
            </div>
            <ul className="space-y-2">
              {keyPrinciples.map((principle, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <TrendingUp className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  {principle}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnerHero;
