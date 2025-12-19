import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";

const RisksBlockers = () => {
  const risks = [
    {
      risk: "Tungsten Partnership Loss",
      impact: "Loss of a major partnership could leave a significant gap in expected influenced pipeline and ARR for the year.",
      mitigation: "Diversify partner ecosystem & don't be over reliant on TA. Build a healthy pipeline of potential partners to replace if needed. Secure quick wins from existing partners (PwC, Xelix) while pursuing new ones.",
    },
    {
      risk: "Partners Don't Generate Expected Pipeline",
      impact: "Underperformance would slow ARR growth and make it harder to hit the >30% ARR contribution goal by 2029.",
      mitigation: "Rigorously qualify new partners for ICP fit and market reach. Use clear QBRs, joint business plans, and scorecards to monitor and address underperformance. Replace low performers quickly.",
    },
    {
      risk: "Channel Conflict with Direct Sales",
      impact: "Risk of internal friction, disputes over deals, or lost sales if partners and direct sales teams compete for the same accounts.",
      mitigation: "Have clear rules of engagement and deal registration in the partner portal. Develop incentive structures that encourage sales teams to co-sell with partners. Ensure there is escalation procedure in place.",
    },
    {
      risk: "Quality Issues in Partner-led Deals",
      impact: "Poor delivery or misrepresentation could damage SoftCo's reputation and result in unhappy customers.",
      mitigation: "Enforce a structured certification program for partners (sales & technical). Start new partners with referral/co-sell & only allow delivery once certified. Co-deliver or closely shadow early partner-led implementations.",
    },
    {
      risk: "Delays in Enablement Rollout",
      impact: "Slow rollout of partner portal, training, or onboarding could delay the impact and scaling of the partner channel.",
      mitigation: "Hiring is key. Prioritise Ops input for certification framework. Pilot enablement with a small group before rolling out at scale. Track CSAT on partner projects to catch issues early.",
    },
  ];

  const otherChecks = [
    "Financial stability, reputation, compliance checks",
    "Exit strategy for winding down underperforming partnerships",
    "IP protection safeguards for sharing technical information",
    "Compliance framework to ensure partners meet regulatory requirements",
  ];

  return (
    <section id="risks" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
        <h2 className="text-2xl font-bold text-white">Partner Risks & Blockers</h2>
      </div>

      <div className="space-y-4">
        {risks.map((item, idx) => (
          <Card key={idx} className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-500/20 rounded-lg flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold text-white">{item.risk}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-red-400 uppercase tracking-wide mb-1">Potential Impact</p>
                      <p className="text-sm text-slate-300">{item.impact}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-400 uppercase tracking-wide mb-1">Mitigation</p>
                      <p className="text-sm text-slate-300">{item.mitigation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white text-lg">
            <Shield className="h-5 w-5 text-blue-400" />
            Other Risk Checks to Incorporate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid md:grid-cols-2 gap-2">
            {otherChecks.map((check, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                <div className="h-1.5 w-1.5 bg-blue-400 rounded-full" />
                {check}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default RisksBlockers;
