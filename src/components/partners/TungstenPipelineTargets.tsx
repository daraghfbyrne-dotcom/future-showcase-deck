import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Target } from "lucide-react";

interface MonthData {
  month: string;
  qualifiedEuro: number;
  qualifiedCount: number;
  salesLeads: number;
}

const monthlyTargets: MonthData[] = [
  { month: "Jan", qualifiedEuro: 0, qualifiedCount: 0, salesLeads: 0 },
  { month: "Feb", qualifiedEuro: 115500, qualifiedCount: 1, salesLeads: 3.5 },
  { month: "Mar", qualifiedEuro: 297000, qualifiedCount: 3, salesLeads: 9.0 },
  { month: "Apr", qualifiedEuro: 495000, qualifiedCount: 5, salesLeads: 15.0 },
  { month: "May", qualifiedEuro: 495000, qualifiedCount: 5, salesLeads: 15.0 },
  { month: "Jun", qualifiedEuro: 495000, qualifiedCount: 5, salesLeads: 15.0 },
  { month: "Jul", qualifiedEuro: 297000, qualifiedCount: 3, salesLeads: 9.0 },
  { month: "Aug", qualifiedEuro: 297000, qualifiedCount: 3, salesLeads: 9.0 },
  { month: "Sep", qualifiedEuro: 330000, qualifiedCount: 3, salesLeads: 10.0 },
  { month: "Oct", qualifiedEuro: 495000, qualifiedCount: 5, salesLeads: 15.0 },
  { month: "Nov", qualifiedEuro: 330000, qualifiedCount: 3, salesLeads: 10.0 },
  { month: "Dec", qualifiedEuro: 165000, qualifiedCount: 2, salesLeads: 5.0 },
];

const totals = {
  qualifiedEuro: 3811500,
  qualifiedCount: 38,
  salesLeads: 115.5,
};

const formatCurrency = (val: number) =>
  val === 0 ? "–" : `€${val.toLocaleString()}`;

const TungstenPipelineTargets = () => {
  const [actuals, setActuals] = useState<Record<string, Record<string, string>>>({});

  const updateActual = (month: string, metric: string, value: string) => {
    setActuals((prev) => ({
      ...prev,
      [month]: { ...prev[month], [metric]: value },
    }));
  };

  return (
    <Card className="shadow-sm overflow-hidden">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Target className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">Pipeline Target — Tungsten Automation</h4>
            <p className="text-sm text-muted-foreground">Monthly targets with space to input actuals</p>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <Table className="text-xs">
            <TableHeader>
              <TableRow className="border-slate-200">
                <TableHead className="text-slate-700 font-semibold min-w-[140px] sticky left-0 bg-white z-10">Metric</TableHead>
                {monthlyTargets.map((m) => (
                  <TableHead key={m.month} colSpan={2} className="text-center text-slate-700 font-semibold border-l border-slate-200">
                    {m.month}
                  </TableHead>
                ))}
                <TableHead colSpan={2} className="text-center text-slate-700 font-bold border-l-2 border-slate-300 bg-slate-50">
                  Total
                </TableHead>
              </TableRow>
              <TableRow className="border-slate-200">
                <TableHead className="text-slate-500 sticky left-0 bg-white z-10"></TableHead>
                {monthlyTargets.map((m) => (
                  <>
                    <TableHead key={`${m.month}-t`} className="text-center text-[10px] text-slate-500 border-l border-slate-200 px-1">Target</TableHead>
                    <TableHead key={`${m.month}-a`} className="text-center text-[10px] text-blue-600 px-1">Actual</TableHead>
                  </>
                ))}
                <TableHead className="text-center text-[10px] text-slate-500 border-l-2 border-slate-300 bg-slate-50 px-1">Target</TableHead>
                <TableHead className="text-center text-[10px] text-blue-600 bg-slate-50 px-1">Actual</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Qualified € Row */}
              <TableRow className="border-slate-200">
                <TableCell className="font-semibold text-slate-900 sticky left-0 bg-white z-10 whitespace-nowrap">
                  Tungsten "qualified" €
                </TableCell>
                {monthlyTargets.map((m) => (
                  <>
                    <TableCell key={`${m.month}-eq-t`} className="text-center text-slate-700 border-l border-slate-200 px-1 whitespace-nowrap">
                      {formatCurrency(m.qualifiedEuro)}
                    </TableCell>
                    <TableCell key={`${m.month}-eq-a`} className="px-0.5">
                      <Input
                        className="h-6 text-xs text-center w-[70px] border-blue-200 bg-blue-50/50"
                        placeholder="–"
                        value={actuals[m.month]?.euro || ""}
                        onChange={(e) => updateActual(m.month, "euro", e.target.value)}
                      />
                    </TableCell>
                  </>
                ))}
                <TableCell className="text-center font-bold text-slate-900 border-l-2 border-slate-300 bg-slate-50 whitespace-nowrap">
                  {formatCurrency(totals.qualifiedEuro)}
                </TableCell>
                <TableCell className="bg-slate-50 px-0.5">
                  <Input className="h-6 text-xs text-center w-[70px] border-blue-200 bg-blue-50/50" placeholder="–" disabled />
                </TableCell>
              </TableRow>

              {/* Qualified # Row */}
              <TableRow className="border-slate-200 bg-slate-50/50">
                <TableCell className="font-semibold text-slate-900 sticky left-0 bg-slate-50/50 z-10 whitespace-nowrap">
                  Tungsten "qualified" #
                </TableCell>
                {monthlyTargets.map((m) => (
                  <>
                    <TableCell key={`${m.month}-qc-t`} className="text-center text-slate-700 border-l border-slate-200 px-1">
                      {m.qualifiedCount === 0 ? "–" : m.qualifiedCount}
                    </TableCell>
                    <TableCell key={`${m.month}-qc-a`} className="px-0.5">
                      <Input
                        className="h-6 text-xs text-center w-[70px] border-blue-200 bg-blue-50/50"
                        placeholder="–"
                        value={actuals[m.month]?.count || ""}
                        onChange={(e) => updateActual(m.month, "count", e.target.value)}
                      />
                    </TableCell>
                  </>
                ))}
                <TableCell className="text-center font-bold text-slate-900 border-l-2 border-slate-300 bg-slate-50 whitespace-nowrap">
                  {totals.qualifiedCount}
                </TableCell>
                <TableCell className="bg-slate-50 px-0.5">
                  <Input className="h-6 text-xs text-center w-[70px] border-blue-200 bg-blue-50/50" placeholder="–" disabled />
                </TableCell>
              </TableRow>

              {/* Sales Leads Row */}
              <TableRow className="border-slate-200">
                <TableCell className="font-semibold text-slate-900 sticky left-0 bg-white z-10 whitespace-nowrap">
                  Tungsten Sales Leads
                </TableCell>
                {monthlyTargets.map((m) => (
                  <>
                    <TableCell key={`${m.month}-sl-t`} className="text-center text-slate-700 border-l border-slate-200 px-1">
                      {m.salesLeads === 0 ? "–" : m.salesLeads.toFixed(1)}
                    </TableCell>
                    <TableCell key={`${m.month}-sl-a`} className="px-0.5">
                      <Input
                        className="h-6 text-xs text-center w-[70px] border-blue-200 bg-blue-50/50"
                        placeholder="–"
                        value={actuals[m.month]?.leads || ""}
                        onChange={(e) => updateActual(m.month, "leads", e.target.value)}
                      />
                    </TableCell>
                  </>
                ))}
                <TableCell className="text-center font-bold text-slate-900 border-l-2 border-slate-300 bg-slate-50 whitespace-nowrap">
                  {totals.salesLeads.toFixed(1)}
                </TableCell>
                <TableCell className="bg-slate-50 px-0.5">
                  <Input className="h-6 text-xs text-center w-[70px] border-blue-200 bg-blue-50/50" placeholder="–" disabled />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TungstenPipelineTargets;
