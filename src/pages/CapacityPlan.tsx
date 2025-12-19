import { Users, Calendar, AlertTriangle, CheckCircle2, XCircle, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";

const keyDecisions = [
  "Copywriter 1/1, Graphic Designer 1/3",
  "Brand refresh project non-negotiable for Q1",
  "Reduce webinar volume to 4 and phase Employer Branding to Q2",
  "Freelance designer (20 days) and copywriter contractor (25 days) factored in to ensure delivery velocity",
  "Focus on PR, AR, CAB, ESG, and Marketing automation deliverables",
  "Reduce to lean PPC and Social Media programmes",
  "Partner Portal blueprint ready for Q2 implementation",
];

const workstreams = [
  {
    workstream: "ESG & Brand Launch",
    deliverables: "ESG web section + internal rollout + creative refresh",
    owners: "Paul 18 / Blendi 8 / Designer 8 / Copywriter 8",
    effort: 42,
    feasibility: "Feasible",
  },
  {
    workstream: "Brand – Website & Collateral",
    deliverables: "Full brand rollout incl. website build, PR assets, collateral, event design, social templates",
    owners: "Paul 10 / Blendi 30 / Copywriter 35 / Designer 20 / John 20 / Freelance Designer 20 / Copywriter Contractor 15",
    effort: 150,
    feasibility: "Feasible (must deliver Q1)",
  },
  {
    workstream: "PR & Analyst Relations",
    deliverables: "PR framework + media calendar + 3 analyst briefings + evidence packs",
    owners: "Paul 10 / Luc 16 / CMO 6 / Copywriter 4",
    effort: 36,
    feasibility: "Feasible",
  },
  {
    workstream: "Thought Leadership & Content",
    deliverables: "6 blogs + 1 whitepaper + 1 video case study + 1 research project",
    owners: "Copywriter 40 / Copywriter Contractor 20 / John 8 / Karolina 4",
    effort: 62,
    feasibility: "Risk",
  },
  {
    workstream: "Sales Enablement Kits",
    deliverables: "3 kits (AI Analytics, iPaaS, Supplier Mgmt) + playbook",
    owners: "John 15 / Designer 6 / Copywriter 6 / Karolina 3",
    effort: 30,
    feasibility: "Feasible",
  },
  {
    workstream: "Webinars",
    deliverables: "Lead gen, partner themes & banked for pipeline velocity (reduced to 4 from 6)",
    owners: "Rob 10 / Luc 8 / Karolina 3 / Copywriter 3",
    effort: 24,
    feasibility: "Feasible",
  },
  {
    workstream: "Automation & Data Dashboards",
    deliverables: "4 nurture flows & detailed reporting dashboard",
    owners: "Rob 18 / John 6 / Copywriter 3",
    effort: 27,
    feasibility: "Feasible",
  },
  {
    workstream: "SEO & Geo Optimisation",
    deliverables: "On-page, technical & geo pages refresh",
    owners: "Blendi 12 / Karolina 4",
    effort: 16,
    feasibility: "Feasible",
  },
  {
    workstream: "Partnerships & Tungsten Engagement",
    deliverables: "Tungsten QBR + 2 joint campaign plans + referral framework + portal requirements",
    owners: "Partner Mgr 12 / Luc 12 / CMO 6",
    effort: 30,
    feasibility: "Feasible",
  },
  {
    workstream: "Customer Advocacy",
    deliverables: "Advocacy framework + pilot upsell campaign + case study refresh",
    owners: "Paul 10 / Karolina 4 / Copywriter 4 / Designer 4",
    effort: 18,
    feasibility: "Feasible",
  },
  {
    workstream: "Events & CAB (EU March 6)",
    deliverables: "CAB execution + survey + insight report",
    owners: "Paul 5 / Karolina 10 / CMO 6 / Copywriter 2",
    effort: 23,
    feasibility: "Feasible",
  },
  {
    workstream: "Employer Branding",
    deliverables: "EVP + creative concept + careers page content",
    owners: "Paul 6 / Designer 6 / Copywriter 4",
    effort: 16,
    feasibility: "Deferred",
  },
  {
    workstream: "Lead Gen & Performance Reporting",
    deliverables: "Dashboard design + ROI pack + metrics setup",
    owners: "Rob 10 / John 4 / CMO 2",
    effort: 16,
    feasibility: "Feasible",
  },
  {
    workstream: "Social Media",
    deliverables: "Social media plan, build, and reporting",
    owners: "Karolina 6 / Copywriter 4 / Designer 4",
    effort: 14,
    feasibility: "Deprioritised",
  },
  {
    workstream: "PPC / Paid Media",
    deliverables: "Reduced PPC programme: essential campaigns + performance reporting",
    owners: "Rob 8 / John 8 / Copywriter 3 / Designer 2 / Karolina 10 / Contractor 10",
    effort: 41,
    feasibility: "Feasible but reduced scope",
  },
];

const notAchievable = [
  "Full Marketing automation (nurture workflows) go-live (planned Q2)",
  "Partner Portal build and launch (Q2)",
  "Full Employer Brand project (Q2)",
  "Expanded PPC and Social campaigns (Q2)",
];

const atRiskItems = [
  { risk: "Brand rollout risk", mitigation: "Mitigated with external design and copy support" },
  { risk: "Contractor onboarding", mitigation: "Ensure rapid start in January" },
  { risk: "CAB logistics", mitigation: "Use event assistant to maintain quality" },
  { risk: "PPC tracking", mitigation: "Shift setup to Ops to avoid bandwidth conflicts" },
  { risk: "Automation dependencies", mitigation: "Confirm Ops integration by mid-February" },
];

const getFeasibilityBadge = (feasibility: string) => {
  if (feasibility === "Feasible" || feasibility.includes("must deliver")) {
    return <Badge className="bg-emerald-500 text-white">{feasibility}</Badge>;
  } else if (feasibility === "Risk") {
    return <Badge className="bg-amber-500 text-white">{feasibility}</Badge>;
  } else if (feasibility === "Deferred" || feasibility === "Deprioritised") {
    return <Badge className="bg-gray-500 text-white">{feasibility}</Badge>;
  } else if (feasibility.includes("reduced")) {
    return <Badge className="bg-blue-500 text-white">{feasibility}</Badge>;
  }
  return <Badge variant="outline">{feasibility}</Badge>;
};

const totalEffort = workstreams.reduce((sum, w) => sum + w.effort, 0);

const CapacityPlan = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 pt-20 pb-8 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Capacity Plan</h2>
            </div>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Complete visibility for the team and business on Q1 2026 deliverables and resource allocation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Calendar className="h-5 w-5 text-white" />
                <span className="text-white font-medium">
                  Total Demand: <span className="text-yellow-300 font-bold">~{totalEffort} days</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Within 2% of total capacity</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Decisions */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900">Key Decisions</h2>
          </div>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="pt-6">
              <ul className="grid md:grid-cols-2 gap-3">
                {keyDecisions.map((decision, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Workstreams Table */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">Detailed Q1 2026 Workstreams</h2>
          </div>

          <Card className="bg-white border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="text-gray-700 font-semibold">Workstream</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Deliverables</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Primary Owners (+ Days)</TableHead>
                    <TableHead className="text-gray-700 font-semibold text-center">Effort (Days)</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Feasibility</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workstreams.map((item, index) => (
                    <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                      <TableCell className="font-medium text-gray-900">{item.workstream}</TableCell>
                      <TableCell className="text-gray-700 max-w-xs">{item.deliverables}</TableCell>
                      <TableCell className="text-gray-600 text-sm max-w-xs">{item.owners}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="border-gray-300 text-gray-700 font-semibold">
                          {item.effort}
                        </Badge>
                      </TableCell>
                      <TableCell>{getFeasibilityBadge(item.feasibility)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="border-gray-200 bg-gray-100 font-bold">
                    <TableCell colSpan={3} className="text-gray-900 font-bold">Total</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-blue-600 text-white font-bold">{totalEffort}</Badge>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        {/* Not Achievable */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <XCircle className="h-7 w-7 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900">Not Achievable in Q1 2026</h2>
          </div>

          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {notAchievable.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* At-Risk Deliverables */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-7 w-7 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900">At-Risk Deliverables & Mitigation</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {atRiskItems.map((item, index) => (
              <Card key={index} className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.risk}</h3>
                      <p className="text-sm text-gray-600">{item.mitigation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          SoftCo Q1 2026 Marketing Team Capacity Plan
        </div>
      </footer>
    </div>
  );
};

export default CapacityPlan;
