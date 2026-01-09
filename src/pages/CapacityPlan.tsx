import { Users, Calendar, AlertTriangle, CheckCircle2, XCircle, Clock, TrendingUp, Target, Globe, MapPin, Plane, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";

const keyDecisions = [
  "Partner Manager operational from 1/4",
  "Oisin operational from 1/2",
  "Enes operational from 1/2",
  "Brand refresh project non-negotiable for Q1",
  "Reduce webinar volume to 4 and phase Employer Branding to Q2",
  "Freelance designer (20 days) and Oisin contractor (25 days) factored in to ensure delivery velocity",
  "Focus on PR, Analyst Relations, CAB, ESG, and Marketing Automation deliverables",
  "Reduce to lean PPC and Social Media programmes",
  "Partner Portal blueprint ready for Q2 implementation",
];

const workstreams = [
  {
    workstream: "ESG Programme",
    deliverables: "ESG web section, ESG messaging framework, internal rollout",
    owners: "Paul Tighe 18 / Oisin 8 / Enes 6",
    effort: 32,
    feasibility: "Feasible",
  },
  {
    workstream: "Brand Launch – Website & Collateral",
    deliverables: "Full brand rollout incl. website build, PR assets, collateral, event design, social templates",
    owners: "Paul 10 / Blendi 30 / Oisin 35 / Enes 20 / John 20 / Freelance Designer 20 / Oisin Contractor 15",
    effort: 150,
    feasibility: "Feasible (must deliver Q1)",
  },
  {
    workstream: "PR & Analyst Relations",
    deliverables: "PR framework, media calendar, Gartner MQ & Forrester",
    owners: "Paul 10 / Luc 16 / CMO 6 / Oisin 4",
    effort: 36,
    feasibility: "Feasible",
  },
  {
    workstream: "Thought Leadership & Content",
    deliverables: "6 blogs, 1 whitepaper, 1 video case study, 1 research project",
    owners: "Oisin 40 / Oisin Contractor 20 / John 8 / Karolina 4",
    effort: 62,
    feasibility: "At Risk",
  },
  {
    workstream: "Sales Enablement Kits",
    deliverables: "3 kits (AI Analytics, iPaaS, Supplier Mgmt) + playbook",
    owners: "John 15 / Enes 6 / Oisin 6 / Karolina 3",
    effort: 30,
    feasibility: "Feasible",
  },
  {
    workstream: "Webinars",
    deliverables: "Lead gen & partner webinars (4 total)",
    owners: "Rob 10 / Luc 8 / Karolina 3 / Oisin 3",
    effort: 24,
    feasibility: "Feasible",
  },
  {
    workstream: "Automation & Data Dashboards",
    deliverables: "4 nurture flows + reporting dashboard",
    owners: "Rob 18 / John 6 / Oisin 3",
    effort: 27,
    feasibility: "Feasible",
  },
  {
    workstream: "SEO & Geo Optimisation",
    deliverables: "On-page, technical & geo page refresh",
    owners: "Blendi 12 / Oisin 10",
    effort: 16,
    feasibility: "Feasible",
  },
  {
    workstream: "Partnerships & Tungsten Engagement",
    deliverables: "Tungsten QBR, PwC QBR, 2 joint campaigns, referral framework, portal requirements",
    owners: "Partner Mgr 12 / Luc 12 / CMO 6",
    effort: 30,
    feasibility: "Feasible",
  },
  {
    workstream: "Customer Advocacy",
    deliverables: "Advocacy framework, pilot upsell campaign, case study refresh",
    owners: "Paul 10 / Karolina 4 / Oisin 4 / Enes 4",
    effort: 18,
    feasibility: "Feasible",
  },
  {
    workstream: "Events & CAB (EU – March 6)",
    deliverables: "CAB execution, survey, insight report",
    owners: "Paul 5 / Karolina 10 / CMO 6 / Oisin 2",
    effort: 23,
    feasibility: "Feasible",
  },
  {
    workstream: "Employer Branding",
    deliverables: "EVP, creative concept, careers page content",
    owners: "Paul 6 / Enes 6 / Oisin 4",
    effort: 16,
    feasibility: "Deferred – Q2",
  },
  {
    workstream: "Lead Gen & Performance Reporting",
    deliverables: "ROI dashboard, metrics setup",
    owners: "Rob 10 / John 4 / CMO 2",
    effort: 16,
    feasibility: "Feasible",
  },
  {
    workstream: "Social Media",
    deliverables: "Basic social plan, publishing & reporting",
    owners: "Karolina 6 / Oisin 4 / Enes 4",
    effort: 14,
    feasibility: "Deprioritised",
  },
  {
    workstream: "PPC / Paid Media",
    deliverables: "Reduced PPC programme + performance reporting",
    owners: "Rob 8 / John 8 / Oisin 3 / Enes 2 / Karolina 10 / Contractor 10",
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

const cabTimeline = [
  { date: "Oct 2025", task: "Finalise EU member shortlist & get SLT sign-off", owner: "SLT" },
  { date: "Oct 2025", task: "Send personalised invitations to EU CAB candidates", owner: "CEO" },
  { date: "Nov–Dec 2025", task: "Confirm guest speakers & draft agenda for March", owner: "Product & Marketing" },
  { date: "Jan–Feb 2026", task: "Finalise venue, catering, A/V, travel & materials", owner: "Marketing" },
  { date: "6 Mar 2026", task: "Host inaugural EU CAB meeting (Dublin)", owner: "All Stakeholders" },
  { date: "Apr 2026", task: "Post-EU follow-up: minutes, survey, action items", owner: "Marketing & Product" },
  { date: "Jun 2026", task: "Host inaugural NA CAB meeting (Chicago)", owner: "All Stakeholders" },
  { date: "Sep 2026", task: "Virtual EU CAB meeting (6 months after in-person)", owner: "Marketing & Product" },
];

const cabAgenda = [
  { time: "30 mins", item: "Welcome & Executive Context", owner: "CEO" },
  { time: "15 mins", item: "Charter & Expectations", owner: "CMO" },
  { time: "30 mins", item: "Member Introductions", owner: "All Members" },
  { time: "30 mins", item: "Market & Industry Trends", owner: "Guest Speaker" },
  { time: "45 mins", item: "SoftCo Strategic Direction & Roadmap", owner: "Product" },
  { time: "45 mins", item: "Breakout Discussions (by industry/size)", owner: "Facilitators" },
  { time: "10 mins", item: "Customer Success Spotlight", owner: "Head of CS" },
  { time: "15 mins", item: "Next Steps & Close", owner: "CMO" },
];

const euCabMembers = [
  { company: "Grafton Merchanting ROI Ltd.", industry: "Building Materials & Retail Trade", status: "Pending" },
  { company: "Primark Limited", industry: "Retail", status: "Confirmed" },
  { company: "VP plc (VP Group)", industry: "Industrial Equipment Rental", status: "Confirmed" },
  { company: "Basic-Fit International", industry: "Fitness & Leisure", status: "Confirmed" },
  { company: "Analog Devices (EMEA)", industry: "Technology/Manufacturing", status: "Current" },
  { company: "VistaJet Limited", industry: "Aviation (Private Jet Charter)", status: "Current" },
  { company: "Toolstation Ltd.", industry: "Retail (Home Improvement)", status: "Current" },
  { company: "University of Cambridge", industry: "Education", status: "Current" },
  { company: "Logitech (Ireland)", industry: "Manufacturing", status: "Current" },
  { company: "C&C Group", industry: "Food & Drink", status: "Current" },
];

const naCabMembers = [
  { company: "MFCP", industry: "Distribution", contact: "CFO" },
  { company: "Snap-On Incorporated", industry: "Manufacturing (Automotive Tools)", contact: "VP Treasury" },
  { company: "LGG Industrial Inc.", industry: "Industrial Supply & Machinery", contact: "CFO" },
  { company: "Hydro-Gear", industry: "Manufacturing (Hydraulic Components)", contact: "CFO" },
  { company: "NorthStar Energy", industry: "Energy (Fuel Distribution)", contact: "Controller" },
  { company: "Bulk Barn Foods Ltd.", industry: "Retail (Specialty Food)", contact: "CFO" },
  { company: "Parrish & Heimbecker", industry: "Agribusiness", contact: "VP Finance & IT" },
  { company: "Shorr Packaging Corp.", industry: "Packaging & Logistics", contact: "CFO" },
  { company: "Patagonia", industry: "Retail", contact: "Director Accounting Ops" },
  { company: "Cambria", industry: "Manufacturing", contact: "SVP, Controller" },
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

        {/* Key Points Summary */}
        <div className="mb-8">
          <KeyPointsSummary
            points={[
              `~${totalEffort} days total effort across 15 workstreams in Q1`,
              "Brand refresh is the non-negotiable Q1 priority (150 days)",
              "4 items deferred to Q2: MA go-live, Partner Portal, Employer Brand, PPC expansion",
              "New hires: Partner Manager (Apr), Oisin & Enes (Feb) + freelance support"
            ]}
          />
        </div>

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

        {/* CAB Section */}
        <section className="space-y-6" id="cab">
          <div className="flex items-center gap-3">
            <Globe className="h-7 w-7 text-indigo-500" />
            <h2 className="text-2xl font-bold text-gray-900">Customer Advisory Board (CAB)</h2>
          </div>

          {/* CAB Overview */}
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Establishing two Customer Advisory Boards — <strong>Europe (EU)</strong> and <strong>North America (NA)</strong>. Both boards follow a common framework, convening semi-annually with one in-person and one virtual meeting per year.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                  <div>
                    <p className="font-semibold text-gray-900">EU Launch</p>
                    <p className="text-sm text-gray-600">March 6, 2026 — Dublin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                  <Building2 className="h-5 w-5 text-indigo-500" />
                  <div>
                    <p className="font-semibold text-gray-900">NA Launch</p>
                    <p className="text-sm text-gray-600">Mid-2026 — Chicago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                  <Users className="h-5 w-5 text-indigo-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Members</p>
                    <p className="text-sm text-gray-600">8–10 per region</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EU CAB Event Details */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-green-500" />
                EU CAB Inaugural Event — March 6, 2026
              </CardTitle>
              <CardDescription>InterContinental Hotel, Dublin — coinciding with Ireland vs Wales Rugby (6 Nations)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Schedule</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>8:00 AM</strong> — International guests arrive</span></li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>9:00 AM – 1:00 PM</strong> — CAB Meeting (Hibernia Room)</span></li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>5:00 PM</strong> — Dinner (venue TBD)</span></li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>8:10 PM</strong> — 6 Nations Rugby Game</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Estimated Budget</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between"><span>Accommodation (10 rooms)</span><span className="font-medium">€3,550</span></li>
                    <li className="flex justify-between"><span>Meeting Room & F&B</span><span className="font-medium">€2,285</span></li>
                    <li className="flex justify-between"><span>Dinner (20 guests)</span><span className="font-medium">€3,000–3,500</span></li>
                    <li className="flex justify-between"><span>Rugby Tickets (20)</span><span className="font-medium">€3,000</span></li>
                    <li className="flex justify-between"><span>Flights & Transport</span><span className="font-medium">~€1,300</span></li>
                    <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Total Estimated</span><span className="font-bold text-indigo-600">~€13,400</span></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CAB Timeline */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-blue-500" />
                CAB Implementation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-700 font-semibold">Date</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Milestone</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Owner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cabTimeline.map((item, index) => (
                      <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap">{item.date}</TableCell>
                        <TableCell className="text-gray-700">{item.task}</TableCell>
                        <TableCell className="text-gray-600">{item.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* CAB Agenda */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-purple-500" />
                Proposed In-Person Meeting Agenda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-700 font-semibold w-24">Duration</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Agenda Item</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Owner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cabAgenda.map((item, index) => (
                      <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900">{item.time}</TableCell>
                        <TableCell className="text-gray-700">{item.item}</TableCell>
                        <TableCell className="text-gray-600">{item.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* EU & NA Members */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-green-500" />
                  European CAB Members
                </CardTitle>
                <CardDescription>Proposed & current members for EU board</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="text-gray-700 font-semibold">Company</TableHead>
                        <TableHead className="text-gray-700 font-semibold">Industry</TableHead>
                        <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {euCabMembers.map((member, index) => (
                        <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                          <TableCell className="font-medium text-gray-900 text-sm">{member.company}</TableCell>
                          <TableCell className="text-gray-600 text-sm">{member.industry}</TableCell>
                          <TableCell>
                            <Badge className={
                              member.status === "Confirmed" ? "bg-emerald-500 text-white" :
                              member.status === "Current" ? "bg-blue-500 text-white" :
                              "bg-gray-400 text-white"
                            }>{member.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="h-5 w-5 text-blue-500" />
                  North America CAB Members
                </CardTitle>
                <CardDescription>Suggested members for NA board (mid-2026)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="text-gray-700 font-semibold">Company</TableHead>
                        <TableHead className="text-gray-700 font-semibold">Industry</TableHead>
                        <TableHead className="text-gray-700 font-semibold">Contact</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {naCabMembers.map((member, index) => (
                        <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                          <TableCell className="font-medium text-gray-900 text-sm">{member.company}</TableCell>
                          <TableCell className="text-gray-600 text-sm">{member.industry}</TableCell>
                          <TableCell className="text-gray-600 text-sm">{member.contact}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
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
