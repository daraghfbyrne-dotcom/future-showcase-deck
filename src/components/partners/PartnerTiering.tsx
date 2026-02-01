import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Award, LucideIcon } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface Tier {
  name: string;
  subtitle: string;
  iconType?: string;
  bgColor?: string;
  iconColor?: string;
  characteristics: string;
  enablement: string;
  benefits: string;
}

interface TieringContent {
  title?: string;
  subtitle?: string;
  requirements?: Tier[];
  progressionCriteria?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Medal,
  Crown,
};

const defaultTiers: Tier[] = [
  {
    name: "Bronze",
    subtitle: "Entry-Level",
    iconType: "Award",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-700",
    characteristics: "New or niche partners, early-stage relationship, low or no pipeline contribution yet",
    enablement: "Access to sales collateral, basic training",
    benefits: "Deal registration access, listing on SoftCo website",
  },
  {
    name: "Silver",
    subtitle: "Developing Contributor",
    iconType: "Medal",
    bgColor: "bg-slate-200",
    iconColor: "text-slate-600",
    characteristics: "Actively engaged, generating qualified leads, attending enablement sessions",
    enablement: "Full sales certification and quarterly enablement refreshers",
    benefits: "Co-marketing (webinars, event slots), limited MDF access, QBR participation",
  },
  {
    name: "Gold",
    subtitle: "Strategic Growth Partner",
    iconType: "Crown",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    characteristics: "Consistent and strategic pipeline contributor, deep product knowledge, joint GTM",
    enablement: "Certified across Sales, Pre-Sales, and Delivery (if applicable), demo access, sandbox environments",
    benefits: "Priority lead routing, co-funded campaign access, roadmap previews, access to beta features, senior sponsor alignment, PAB membership",
  },
];

const defaultProgressionCriteria = "Annual review of contribution, certification, and engagement metrics. Strategic partners who stagnate for more than two quarters may be subject to downgrade or lifecycle review.";

const PartnerTiering = () => {
  const { data: section } = usePartnerStrategySection("tiering");
  
  const content = section?.content as TieringContent | undefined;
  const tiers = (content?.requirements && content.requirements.length > 0) ? content.requirements : defaultTiers;
  const subtitle = content?.subtitle || "Applied across all partner types (Referral, Co-Sell, OEM-Out, VARs, and Strategic Alliances) to drive alignment, accountability, and motivation through tier-specific benefits.";
  const progressionCriteria = content?.progressionCriteria || defaultProgressionCriteria;

  return (
    <section id="tiering" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Partner Tiering Framework</h2>
        <Badge variant="outline" className="border-blue-500 text-blue-600">H1 2026</Badge>
      </div>
      <p className="text-slate-600">
        {subtitle}
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((tier) => {
          const Icon = iconMap[tier.iconType || "Award"] || Award;
          const bgColor = tier.bgColor || "bg-amber-100";
          const iconColor = tier.iconColor || "text-amber-700";
          
          return (
            <Card 
              key={tier.name} 
              className={`bg-white border-slate-200 shadow-sm ${
                tier.name === 'Gold' ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${bgColor}`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900">{tier.name}</CardTitle>
                    <p className="text-sm text-slate-500">{tier.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Characteristics</p>
                  <p className="text-sm text-slate-700">{tier.characteristics}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Enablement</p>
                  <p className="text-sm text-slate-700">{tier.enablement}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Benefits</p>
                  <p className="text-sm text-green-700">{tier.benefits}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-slate-50 border-slate-200">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-slate-900 mb-2">Progression Criteria</h4>
          <p className="text-sm text-slate-600">
            {progressionCriteria}
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default PartnerTiering;
