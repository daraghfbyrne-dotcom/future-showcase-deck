import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users2, ArrowRight } from "lucide-react";

const ResourcesRequired = () => {
  const originalPlan = [
    {
      role: "Partner Managers",
      fte: 2,
      timing: "H1 2026",
      rationale: "Day-to-day relationship management for referrals, co-sell and early VAR/SI partners. Manages deal registration, MDF budgeting/tracking, reporting systems.",
    },
    {
      role: "Partner Enablement Manager",
      fte: 1,
      timing: "H2 2025",
      rationale: "Develops training curricula, certification, and partner portal content.",
    },
    {
      role: "Content Executive",
      fte: 0.5,
      timing: "H2 2025",
      rationale: "Builds on-demand modules, partner-facing sales material (being hired in Kosovo & in budget).",
    },
  ];

  const updatedPlan = [
    {
      role: "Partner Manager",
      fte: 1,
      timing: "H1 2026",
      rationale: "Day-to-day relationship management focusing on Tungsten Automation primarily. Manages deal registration, MDF budgeting/tracking, reporting systems.",
    },
    {
      role: "Content Manager",
      fte: 0.1,
      timing: "H1 2026",
      rationale: "Builds on-demand modules, partner-facing sales material.",
    },
  ];

  return (
    <section id="resources" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Incremental Resources Required</h2>
        <Badge className="bg-amber-500 text-white hover:bg-amber-600">Updated</Badge>
        <Badge variant="outline" className="border-slate-400 text-slate-600">January 2026</Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Original Plan */}
        <Card className="bg-slate-50 border-slate-200 shadow-sm overflow-hidden opacity-75">
          <CardHeader className="border-b border-slate-200 bg-slate-100">
            <CardTitle className="flex items-center gap-2 text-slate-700">
              <Users2 className="h-5 w-5 text-slate-500" />
              Original Plan
              <Badge variant="outline" className="border-slate-400 text-slate-500 ml-auto">Previous</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200">
                    <TableHead className="text-slate-600">Role</TableHead>
                    <TableHead className="text-slate-600 text-center">FTE</TableHead>
                    <TableHead className="text-slate-600">Timing</TableHead>
                    <TableHead className="text-slate-600">Rationale</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {originalPlan.map((resource) => (
                    <TableRow key={resource.role} className="border-slate-200">
                      <TableCell className="font-medium text-slate-700">{resource.role}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-slate-200 text-slate-600 hover:bg-slate-300">
                          {resource.fte}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-slate-300 text-slate-600">
                          {resource.timing}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-500 text-sm">{resource.rationale}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                <span className="font-semibold">Total FTE:</span> 3.5
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updated Plan */}
        <Card className="bg-white border-emerald-200 shadow-sm overflow-hidden ring-2 ring-emerald-100">
          <CardHeader className="border-b border-emerald-200 bg-emerald-50">
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Users2 className="h-5 w-5 text-emerald-600" />
              Updated Plan
              <Badge className="bg-emerald-500 text-white ml-auto">January 2026</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-emerald-100">
                    <TableHead className="text-slate-700">Role</TableHead>
                    <TableHead className="text-slate-700 text-center">FTE</TableHead>
                    <TableHead className="text-slate-700">Timing</TableHead>
                    <TableHead className="text-slate-700">Rationale</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {updatedPlan.map((resource) => (
                    <TableRow key={resource.role} className="border-emerald-100">
                      <TableCell className="font-medium text-slate-900">{resource.role}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                          {resource.fte}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                          {resource.timing}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-600 text-sm">{resource.rationale}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-200">
              <p className="text-sm text-emerald-700">
                <span className="font-semibold">Total FTE:</span> 1.1
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Change Summary */}
      <Card className="bg-gradient-to-r from-amber-50 to-emerald-50 border-amber-200 shadow-sm">
        <CardContent className="py-4">
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Original:</span>
              <Badge variant="outline" className="border-slate-400 text-slate-600">3.5 FTE</Badge>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-emerald-700">Updated:</span>
              <Badge className="bg-emerald-500 text-white">1.1 FTE</Badge>
            </div>
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-300">
              <span className="font-semibold text-slate-700">Change:</span>
              <Badge className="bg-rose-100 text-rose-700">-2.4 FTE</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResourcesRequired;
