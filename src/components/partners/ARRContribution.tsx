import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface ARRDataRow {
  year: number;
  contribution: string;
  arrTotal: string;
  arrPartners: string;
  conversion: string;
  pipeline: string;
  actual?: boolean;
}

interface ARRContent {
  title?: string;
  subtitle?: string;
  timeline?: ARRDataRow[];
}

const defaultTimeline: ARRDataRow[] = [
  { year: 2024, contribution: "14%", arrTotal: "€3.12m", arrPartners: "€0.43m", conversion: "20%", pipeline: "€2.20m", actual: true },
  { year: 2025, contribution: "15%", arrTotal: "€4.2m", arrPartners: "€0.63m", conversion: "25%", pipeline: "€2.52m", actual: false },
  { year: 2026, contribution: "17%", arrTotal: "€4.5m", arrPartners: "€0.77m", conversion: "26%", pipeline: "€2.94m", actual: false },
  { year: 2027, contribution: "25%", arrTotal: "€4.7m", arrPartners: "€1.18m", conversion: "27%", pipeline: "€4.35m", actual: false },
  { year: 2028, contribution: "27%", arrTotal: "€5.0m", arrPartners: "€1.35m", conversion: "28%", pipeline: "€4.82m", actual: false },
  { year: 2029, contribution: "30%", arrTotal: "€5.3m", arrPartners: "€1.59m", conversion: "30%", pipeline: "€5.30m", actual: false },
];

const ARRContribution = () => {
  const { data: section } = usePartnerStrategySection("arr_contribution");
  
  const content = section?.content as ARRContent | undefined;
  const arrData = (content?.timeline && content.timeline.length > 0) ? content.timeline : defaultTimeline;
  const title = content?.title || "Partner Contribution to Pipeline & ARR";
  const subtitle = content?.subtitle || "Building to 30% ARR contribution by 2029 as Closed Won ratio improves to 30%";

  return (
    <section id="arr-contribution" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">ARR Contribution Timeline</h2>
      </div>

      <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-200 bg-slate-50">
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <TrendingUp className="h-5 w-5 text-green-600" />
            {title}
          </CardTitle>
          <p className="text-sm text-slate-600">
            {subtitle}
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200">
                  <TableHead className="text-slate-700">Year</TableHead>
                  <TableHead className="text-slate-700">% ARR from Partners</TableHead>
                  <TableHead className="text-slate-700">Total ARR</TableHead>
                  <TableHead className="text-slate-700">Partner ARR</TableHead>
                  <TableHead className="text-slate-700">Conversion Rate</TableHead>
                  <TableHead className="text-slate-700">Pipeline Required</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {arrData.map((row) => (
                  <TableRow key={row.year} className={`border-slate-200 ${row.actual ? 'bg-green-50' : ''}`}>
                    <TableCell className="font-medium text-slate-900">
                      {row.year}
                      {row.actual && <span className="ml-2 text-xs text-green-600">(Actual)</span>}
                    </TableCell>
                    <TableCell className="text-emerald-600 font-semibold">{row.contribution}</TableCell>
                    <TableCell className="text-slate-700">{row.arrTotal}</TableCell>
                    <TableCell className="text-blue-600">{row.arrPartners}</TableCell>
                    <TableCell className="text-slate-700">{row.conversion}</TableCell>
                    <TableCell className="text-slate-700">{row.pipeline}</TableCell>
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

export default ARRContribution;
