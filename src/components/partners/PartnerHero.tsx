import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, AlertTriangle } from "lucide-react";

const PartnerHero = () => {
  const keyPrinciples = [
    "Start with low-lift, high-impact models (referral, co-sell)",
    "Lay the groundwork for more complex models (VARs, SIs)",
    "Validate other models – eg OEM-out",
    "Deliver scalable enablement, feedback, and governance",
    "Continually evaluate and iterate",
  ];

  return (
    <section id="partner-overview" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="border-amber-500/50 text-amber-400">
          2025-2026 Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          SoftCo Partner Strategy
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg">
          Building a scalable partner ecosystem to drive &gt;30% of new ARR by 2029
        </p>
      </div>

      {/* Disclaimer */}
      <Card className="bg-amber-500/10 border-amber-500/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-200/90 text-sm">
              This Partnership Document (19/12/25) assumes a standard partnership with Tungsten Automation 
              delivering similar levels of pipeline. This document will be updated when the outcome of 
              Tungsten negotiations are completed.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* VCP Targets */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Target className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Five-Year VCP Target</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">ARR from Partners</span>
                <span className="text-2xl font-bold text-blue-400">&gt;30%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">Partner Implementation Days</span>
                <span className="text-2xl font-bold text-green-400">&gt;80%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Key Principles</h3>
            </div>
            <ul className="space-y-2">
              {keyPrinciples.map((principle, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                  <TrendingUp className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
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
