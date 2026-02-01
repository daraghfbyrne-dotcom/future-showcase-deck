import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface Incentive {
  category: string;
  criteria: string[];
  rewards: string[];
}

interface IncentivesContent {
  title?: string;
  tiers?: Incentive[];
}

const defaultIncentives: Incentive[] = [
  {
    category: "Pipeline Generation",
    criteria: [
      "Influences >€500k pipeline per quarter",
      "Consistently registers qualified leads",
    ],
    rewards: [
      "Increased referral fees",
      "Access to co-funded demand gen campaigns",
      "Early access to new markets or verticals",
    ],
  },
  {
    category: "Conversion Rates",
    criteria: [
      "Conversion rate >30% from registered leads",
      "Deals close within target sales cycle",
    ],
    rewards: [
      "Priority lead routing",
      "Joint win press releases",
      "Invitation to exclusive SoftCo customer events",
    ],
  },
  {
    category: "Enablement Activity",
    criteria: [
      "80%+ team enablement completion",
      "Active participation in QBRs, webinars",
    ],
    rewards: [
      "MDF bonus allocations",
      "Beta access to new product features",
      "Partner certification spotlight in SoftCo comms",
    ],
  },
];

const IncentivesTable = () => {
  const { data: section } = usePartnerStrategySection("incentives");
  
  const content = section?.content as IncentivesContent | undefined;
  const incentives = (content?.tiers && content.tiers.length > 0) ? content.tiers : defaultIncentives;
  const title = content?.title || "Incentives for High-Performing Partners";

  return (
    <section id="incentives" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-yellow-500 to-amber-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Partner Incentives</h2>
      </div>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Award className="h-5 w-5 text-yellow-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {incentives.map((incentive) => (
              <div key={incentive.category} className="space-y-3">
                <h4 className="font-semibold text-amber-600">{incentive.category}</h4>
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Criteria</p>
                  <ul className="space-y-1">
                    {incentive.criteria.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Rewards</p>
                  <ul className="space-y-1">
                    {incentive.rewards.map((item, idx) => (
                      <li key={idx} className="text-sm text-green-700 flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IncentivesTable;
