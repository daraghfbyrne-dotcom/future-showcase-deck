import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users2 } from "lucide-react";

const ResourcesRequired = () => {
  const resources = [
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

  return (
    <section id="resources" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Incremental Resources Required</h2>
        <Badge variant="outline" className="border-indigo-500 text-indigo-600">H1 2026</Badge>
      </div>

      <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-200 bg-slate-50">
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Users2 className="h-5 w-5 text-indigo-600" />
            Team Expansion Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200">
                  <TableHead className="text-slate-700">Role</TableHead>
                  <TableHead className="text-slate-700 text-center">FTE</TableHead>
                  <TableHead className="text-slate-700">Timing</TableHead>
                  <TableHead className="text-slate-700">Rationale</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((resource) => (
                  <TableRow key={resource.role} className="border-slate-200">
                    <TableCell className="font-medium text-slate-900">{resource.role}</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                        {resource.fte}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-slate-300 text-slate-700">
                        {resource.timing}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-600 text-sm">{resource.rationale}</TableCell>
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

export default ResourcesRequired;
