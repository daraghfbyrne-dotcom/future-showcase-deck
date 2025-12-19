import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Package, Cpu } from "lucide-react";

const PartnershipTypes = () => {
  const partnerTypes = [
    {
      category: "Referral & Co-Sell",
      role: "Influenced / Sourced",
      examples: "Advisory firms, tech alliances – Interpath, PwC, Xelix",
      value: "Revenue share, wider reach, upsell to our customer base",
      icon: Handshake,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      category: "OEM",
      role: "Indirect / Bundled Sales",
      examples: "ERPs, complimentary technologies",
      value: "Enhance their core offering, differentiation without building in-house, seamless integration",
      icon: Package,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      category: "Technology Partners",
      role: "Influence",
      examples: "Sage, Microsoft",
      value: "Strengthen their ecosystem value, integration that drives usage, industry validation through partner success, generate pipeline through joint GTM activities",
      icon: Cpu,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="partnership-types" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Partnership Types</h2>
      </div>

      <div className="grid gap-4">
        {partnerTypes.map((partner) => {
          const Icon = partner.icon;
          return (
            <Card key={partner.category} className="bg-white border-slate-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className={`p-3 ${partner.bgColor} rounded-lg flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${partner.iconColor}`} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">{partner.category}</h3>
                      <Badge variant="outline" className="border-slate-300 text-slate-600">
                        {partner.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500">
                      <span className="text-slate-700 font-medium">Examples:</span> {partner.examples}
                    </p>
                    <p className="text-sm text-slate-700">{partner.value}</p>
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
