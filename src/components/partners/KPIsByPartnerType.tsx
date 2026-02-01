import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3 } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface KPI {
  type: string;
  volume: string;
  efficiency: string;
  engagement: string;
  financial: string;
}

interface KPIsContent {
  title?: string;
  subtitle?: string;
  metrics?: KPI[];
}

const defaultKPIs: KPI[] = [
  {
    type: "Referral",
    volume: "# Referrals/month",
    efficiency: "Referral → qualified Opp conversion rate",
    engagement: "% Partners with >1 referral/mo",
    financial: "Avg deal size influenced",
  },
  {
    type: "Co-sell",
    volume: "# Co-sell leads",
    efficiency: "Win rate vs. direct",
    engagement: "# Joint calls/training sessions completed",
    financial: "Revenue booked jointly",
  },
  {
    type: "VAR",
    volume: "# Deals registered",
    efficiency: "Deal registration approval rate",
    engagement: "% Partners certified",
    financial: "Gross margin retention",
  },
  {
    type: "SI",
    volume: "# Sourced projects",
    efficiency: "PS utilization rate",
    engagement: "# Technical certifications",
    financial: "PS revenue, Refer-to-delivery time",
  },
  {
    type: "OEM-out",
    volume: "TBD",
    efficiency: "TBD",
    engagement: "TBD",
    financial: "TBD",
  },
];

const KPIsByPartnerType = () => {
  const { data: section } = usePartnerStrategySection("kpis");
  
  const content = section?.content as KPIsContent | undefined;
  const kpis = (content?.metrics && content.metrics.length > 0) ? content.metrics : defaultKPIs;
  const title = content?.title || "Performance Tracking Framework";
  const subtitle = content?.subtitle || "Proposed KPIs once partner program is fully mobilised.";

  return (
    <section id="kpis" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">KPIs by Partner Type</h2>
      </div>
      <p className="text-slate-600">{subtitle}</p>

      <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-200 bg-slate-50">
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <BarChart3 className="h-5 w-5 text-pink-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200">
                  <TableHead className="text-slate-700">Partner Type</TableHead>
                  <TableHead className="text-slate-700">Volume & Funnel</TableHead>
                  <TableHead className="text-slate-700">Efficiency & Quality</TableHead>
                  <TableHead className="text-slate-700">Engagement & Enablement</TableHead>
                  <TableHead className="text-slate-700">Financial & Strategic</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpis.map((kpi) => (
                  <TableRow key={kpi.type} className="border-slate-200">
                    <TableCell className="font-medium text-slate-900">{kpi.type}</TableCell>
                    <TableCell className="text-slate-700 text-sm">{kpi.volume}</TableCell>
                    <TableCell className="text-slate-700 text-sm">{kpi.efficiency}</TableCell>
                    <TableCell className="text-slate-700 text-sm">{kpi.engagement}</TableCell>
                    <TableCell className="text-slate-700 text-sm">{kpi.financial}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default KPIsByPartnerType;
