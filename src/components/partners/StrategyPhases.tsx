import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Package, Store } from "lucide-react";

const StrategyPhases = () => {
  const phases = [
    {
      number: 1,
      title: "Maximize Existing Partnerships",
      timing: "H2 2025",
      description: "Unlock value from current partnerships (PwC, Tungsten, Interpath) through structured enablement, QBRs, and performance tracking.",
      icon: CheckCircle2,
      status: "active",
    },
    {
      number: 2,
      title: "Build Referral & Co-sell Partners",
      timing: "H2 2025 – 2026",
      description: "Onboard 2-3 high-potential referral partners with 15-20% Year 1 SaaS referral fees. Low-risk, high-impact warm pipeline generation.",
      icon: Users,
      status: "upcoming",
    },
    {
      number: 3,
      title: "Explore OEM Opportunities",
      timing: "H2 2025",
      description: "License SoftCo's AI-led invoice matching, coding, and routing services to complementary software vendors at the API level.",
      icon: Package,
      status: "upcoming",
    },
    {
      number: 4,
      title: "Expand to VARs",
      timing: "H2 2026",
      description: "Once internal enablement infrastructure is in place, onboard 1 VAR in late 2026 / early 2027, focusing on quality and alignment.",
      icon: Store,
      status: "future",
    },
  ];

  return (
    <section id="strategy-phases" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Strategy Overview</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <Card 
              key={phase.number} 
              className={`bg-white border-slate-200 shadow-sm ${
                phase.status === 'active' ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    phase.status === 'active' 
                      ? 'bg-amber-100 text-amber-600' 
                      : phase.status === 'upcoming'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-2xl font-bold text-slate-400">{phase.number}</span>
                      <Badge 
                        variant="outline" 
                        className={`${
                          phase.status === 'active' 
                            ? 'border-amber-500 text-amber-600' 
                            : 'border-slate-300 text-slate-600'
                        }`}
                      >
                        {phase.timing}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                    <p className="text-sm text-slate-600">{phase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default StrategyPhases;
