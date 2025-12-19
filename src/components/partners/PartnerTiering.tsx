import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Award } from "lucide-react";

const PartnerTiering = () => {
  const tiers = [
    {
      name: "Bronze",
      subtitle: "Entry-Level",
      icon: Award,
      color: "amber",
      characteristics: "New or niche partners, early-stage relationship, low or no pipeline contribution yet",
      enablement: "Access to sales collateral, basic training",
      benefits: "Deal registration access, listing on SoftCo website",
    },
    {
      name: "Silver",
      subtitle: "Developing Contributor",
      icon: Medal,
      color: "slate",
      characteristics: "Actively engaged, generating qualified leads, attending enablement sessions",
      enablement: "Full sales certification and quarterly enablement refreshers",
      benefits: "Co-marketing (webinars, event slots), limited MDF access, QBR participation",
    },
    {
      name: "Gold",
      subtitle: "Strategic Growth Partner",
      icon: Crown,
      color: "yellow",
      characteristics: "Consistent and strategic pipeline contributor, deep product knowledge, joint GTM",
      enablement: "Certified across Sales, Pre-Sales, and Delivery (if applicable), demo access, sandbox environments",
      benefits: "Priority lead routing, co-funded campaign access, roadmap previews, access to beta features, senior sponsor alignment, PAB membership",
    },
  ];

  return (
    <section id="tiering" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
        <h2 className="text-2xl font-bold text-white">Partner Tiering Framework</h2>
        <Badge variant="outline" className="border-blue-500/50 text-blue-400">H1 2026</Badge>
      </div>
      <p className="text-slate-400">
        Applied across all partner types (Referral, Co-Sell, OEM-Out, VARs, and Strategic Alliances) 
        to drive alignment, accountability, and motivation through tier-specific benefits.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <Card 
              key={tier.name} 
              className={`bg-slate-800/50 border-slate-700 ${
                tier.name === 'Gold' ? 'ring-2 ring-yellow-500/30' : ''
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    tier.name === 'Gold' 
                      ? 'bg-yellow-500/20' 
                      : tier.name === 'Silver'
                      ? 'bg-slate-400/20'
                      : 'bg-amber-700/20'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      tier.name === 'Gold' 
                        ? 'text-yellow-400' 
                        : tier.name === 'Silver'
                        ? 'text-slate-300'
                        : 'text-amber-600'
                    }`} />
                  </div>
                  <div>
                    <CardTitle className="text-white">{tier.name}</CardTitle>
                    <p className="text-sm text-slate-400">{tier.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Characteristics</p>
                  <p className="text-sm text-slate-300">{tier.characteristics}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Enablement</p>
                  <p className="text-sm text-slate-300">{tier.enablement}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Benefits</p>
                  <p className="text-sm text-green-400">{tier.benefits}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-white mb-2">Progression Criteria</h4>
          <p className="text-sm text-slate-400">
            Annual review of contribution, certification, and engagement metrics. Strategic partners 
            who stagnate for more than two quarters may be subject to downgrade or lifecycle review.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default PartnerTiering;
