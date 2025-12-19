import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Handshake, Package, Cpu } from "lucide-react";

const PartnershipTypes = () => {
  const partnerTypes = [
    {
      category: "Referral & Co-Sell",
      role: "Influenced / Sourced",
      examples: "Advisory firms, tech alliances – Interpath, PwC, Xelix",
      value: "Revenue share, wider reach, upsell to our customer base",
      icon: Handshake,
      color: "blue",
    },
    {
      category: "OEM",
      role: "Indirect / Bundled Sales",
      examples: "ERPs, complimentary technologies",
      value: "Enhance their core offering, differentiation without building in-house, seamless integration",
      icon: Package,
      color: "purple",
    },
    {
      category: "Technology Partners",
      role: "Influence",
      examples: "Sage, Microsoft",
      value: "Strengthen their ecosystem value, integration that drives usage, industry validation through partner success, generate pipeline through joint GTM activities",
      icon: Cpu,
      color: "green",
    },
  ];

  return (
    <section id="partnership-types" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
        <h2 className="text-2xl font-bold text-white">Partnership Types</h2>
      </div>

      <div className="grid gap-4">
        {partnerTypes.map((partner) => {
          const Icon = partner.icon;
          return (
            <Card key={partner.category} className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className={`p-3 bg-${partner.color}-500/20 rounded-lg flex-shrink-0`}>
                    <Icon className={`h-6 w-6 text-${partner.color}-400`} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">{partner.category}</h3>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {partner.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400">
                      <span className="text-slate-300 font-medium">Examples:</span> {partner.examples}
                    </p>
                    <p className="text-sm text-slate-300">{partner.value}</p>
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

export default PartnershipTypes;
