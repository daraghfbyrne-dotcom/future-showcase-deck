import { useState } from "react";
import { Users, Calendar, Clock, Target, Globe, MapPin, Building2, CheckCircle2, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cabTimeline = [
  { date: "Oct 2025", task: "Finalise EU member shortlist & get SLT sign-off", owner: "SLT", completed: true },
  { date: "Oct 2025", task: "Send personalised invitations to EU CAB candidates", owner: "CEO", completed: true },
  { date: "Nov–Dec 2025", task: "Confirm guest speakers & draft agenda for March", owner: "Product & Marketing", completed: true },
  { date: "Jan–Feb 2026", task: "Finalise venue, catering, A/V, travel & materials", owner: "Marketing", completed: false },
  { date: "6 Mar 2026", task: "Host inaugural EU CAB meeting (Dublin)", owner: "All Stakeholders", completed: false },
  { date: "Apr 2026", task: "Post-EU follow-up: minutes, survey, action items", owner: "Marketing & Product", completed: false },
  { date: "Jun 2026", task: "Host inaugural NA CAB meeting (Chicago)", owner: "All Stakeholders", completed: false },
  { date: "Sep 2026", task: "Virtual EU CAB meeting (6 months after in-person)", owner: "Marketing & Product", completed: false },
];

const cabAgenda = [
  { time: "12:00 PM", item: "Welcome and executive context: why we're launching the CAB and what we want to achieve", owner: "CEO" },
  { time: "", item: "CAB charter and expectations, including cadence and how feedback will be tracked and actioned", owner: "CMO" },
  { time: "", item: "Member introductions", owner: "All Members" },
  { time: "", item: "Trends & challenges: a discussion grounded in the survey feedback you will have already shared", owner: "Facilitated" },
  { time: "", item: "SoftCo roadmap: our vision and key themes", owner: "Product" },
  { time: "3:30 PM", item: "Next steps and close", owner: "CMO" },
];

const initialEuCabMembers = [
  { company: "Grafton Merchanting ROI Ltd.", industry: "Building Materials & Retail Trade", contact: "Colm Scannell", status: "Confirmed" },
  { company: "Primark Limited", industry: "Retail", contact: "Peter Rogan", status: "Confirmed" },
  { company: "VP plc (VP Group)", industry: "Industrial Equipment Rental", contact: "Serena Geers", status: "Confirmed" },
  { company: "Basic-Fit International", industry: "Fitness & Leisure", contact: "Adriaan Boss", status: "Confirmed" },
  { company: "Analog Devices (EMEA)", industry: "Technology/Manufacturing", contact: "Mary Lucey", status: "Declined" },
  { company: "VistaJet Limited", industry: "Aviation (Private Jet Charter)", contact: "Paul Douglas", status: "Confirmed" },
  { company: "Toolstation Ltd.", industry: "Retail (Home Improvement)", contact: "Andrew Venner", status: "Declined" },
  { company: "University of Cambridge", industry: "Education", contact: "Chris Patten", status: "Confirmed" },
  { company: "Logitech (Ireland)", industry: "Manufacturing", contact: "Aisling Connelly", status: "Confirmed" },
  { company: "C&C Group", industry: "Food & Drink", contact: "Jimmy McHugh", status: "Confirmed" },
  { company: "APAM SSE Group Services", industry: "Energy/Utilities", contact: "Sarah Turner", status: "Confirmed" },
];

const initialNaCabMembers = [
  { company: "MFCP", industry: "Distribution", contact: "CFO", status: "Pending" },
  { company: "Snap-On Incorporated", industry: "Manufacturing (Automotive Tools)", contact: "VP Treasury", status: "Pending" },
  { company: "LGG Industrial Inc.", industry: "Industrial Supply & Machinery", contact: "CFO", status: "Pending" },
  { company: "Hydro-Gear", industry: "Manufacturing (Hydraulic Components)", contact: "CFO", status: "Pending" },
  { company: "NorthStar Energy", industry: "Energy (Fuel Distribution)", contact: "Controller", status: "Pending" },
  { company: "Bulk Barn Foods Ltd.", industry: "Retail (Specialty Food)", contact: "CFO", status: "Pending" },
  { company: "Parrish & Heimbecker", industry: "Agribusiness", contact: "VP Finance & IT", status: "Pending" },
  { company: "Shorr Packaging Corp.", industry: "Packaging & Logistics", contact: "CFO", status: "Pending" },
  { company: "Patagonia", industry: "Retail", contact: "Director Accounting Ops", status: "Pending" },
  { company: "Cambria", industry: "Manufacturing", contact: "SVP, Controller", status: "Pending" },
];

type StatusType = "Confirmed" | "Pending" | "Declined";

const statusOptions: { value: StatusType; label: string; color: string }[] = [
  { value: "Confirmed", label: "Confirmed", color: "bg-emerald-500 hover:bg-emerald-600" },
  { value: "Pending", label: "Pending", color: "bg-amber-500 hover:bg-amber-600" },
  { value: "Declined", label: "Declined", color: "bg-red-500 hover:bg-red-600" },
];

const CAB = () => {
  const [euCabMembers, setEuCabMembers] = useState(initialEuCabMembers);
  const [naCabMembers, setNaCabMembers] = useState(initialNaCabMembers);
  const [euStatusFilter, setEuStatusFilter] = useState<StatusType | "All">("All");
  const [naStatusFilter, setNaStatusFilter] = useState<StatusType | "All">("All");

  const filteredEuMembers = euStatusFilter === "All" 
    ? euCabMembers 
    : euCabMembers.filter(m => m.status === euStatusFilter);

  const filteredNaMembers = naStatusFilter === "All" 
    ? naCabMembers 
    : naCabMembers.filter(m => m.status === naStatusFilter);

  const updateEuMemberStatus = (index: number, newStatus: StatusType) => {
    setEuCabMembers(prev => prev.map((member, i) => 
      i === index ? { ...member, status: newStatus } : member
    ));
  };

  const updateNaMemberStatus = (index: number, newStatus: StatusType) => {
    setNaCabMembers(prev => prev.map((member, i) => 
      i === index ? { ...member, status: newStatus } : member
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-emerald-500 hover:bg-emerald-600";
      case "Pending": return "bg-amber-500 hover:bg-amber-600";
      case "Declined": return "bg-red-500 hover:bg-red-600";
      default: return "bg-gray-500 hover:bg-gray-600";
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 pt-20 pb-8 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Customer Advisory Board (CAB)</h2>
            </div>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Establishing strategic Customer Advisory Boards in Europe and North America to gather insights, strengthen relationships, and drive product direction.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#eu-cab" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/40 hover:scale-105 transition-all duration-200 border border-white/30 hover:border-white/60 shadow-lg hover:shadow-xl">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white font-medium">
                  EU Launch: <span className="text-yellow-300 font-bold">March 6, 2026</span>
                </span>
              </a>
              <a href="#na-cab" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/40 hover:scale-105 transition-all duration-200 border border-white/30 hover:border-white/60 shadow-lg hover:shadow-xl">
                <Building2 className="h-5 w-5 text-white" />
                <span className="text-white font-medium">
                  NA Launch: <span className="text-yellow-300 font-bold">Mid-2026</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <div className="mb-8">
          <KeyPointsSummary
            points={[
              "Two regional boards: EU (Dublin) and NA (Chicago) with 8–10 members each",
              "Semi-annual cadence: one in-person and one virtual meeting per year",
              "EU inaugural event: March 6, 2026 coinciding with Ireland vs Wales rugby"
            ]}
          />
        </div>

        {/* CAB Overview */}
        <section className="space-y-6">
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
        </section>

        {/* ===== EU CAB SECTION ===== */}
        <section id="eu-cab" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">EU Customer Advisory Board</h2>
          </div>

          {/* 1. EU CAB Members */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-green-500" />
                  EU CAB Members
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  {(["All", "Confirmed", "Pending", "Declined"] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setEuStatusFilter(status)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        euStatusFilter === status
                          ? status === "All" ? "bg-gray-800 text-white" 
                            : status === "Confirmed" ? "bg-emerald-500 text-white"
                            : status === "Pending" ? "bg-amber-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
              <CardDescription>Proposed & current members for the EU board</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-700 font-semibold">Company</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Contact</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Industry</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEuMembers.map((member, index) => (
                      <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 text-sm">{member.company}</TableCell>
                        <TableCell className="text-gray-600 text-sm">{member.contact}</TableCell>
                        <TableCell className="text-gray-600 text-sm">{member.industry}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button type="button" className="focus:outline-none">
                                <Badge className={`${getStatusColor(member.status)} text-white cursor-pointer transition-colors`}>
                                  {member.status}
                                </Badge>
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg z-[100]">
                              {statusOptions.map((option) => (
                                <DropdownMenuItem
                                  key={option.value}
                                  onClick={() => updateEuMemberStatus(index, option.value)}
                                  className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
                                >
                                  <Badge className={`${option.color} text-white`}>{option.label}</Badge>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* 2. EU CAB Event Details & Detailed Agenda */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-green-500" />
                EU CAB Inaugural Event — March 6, 2026
              </CardTitle>
              <CardDescription>The Marker Hotel, Dublin — coinciding with Ireland vs Wales Rugby (Six Nations)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Schedule overview */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Day Overview</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>12:00 – 15:30</strong> — CAB Meeting (3.5 hours)</span></li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>~17:30 (TBC)</strong> — Dinner at The Marker Hotel</span></li>
                  <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gray-400 mt-0.5" /> <span><strong>Evening</strong> — Ireland vs Wales, Six Nations Rugby at Aviva Stadium</span></li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Audience: 8–10 Enterprise Senior Decision Makers &nbsp;|&nbsp; Format Principle: 60% customer voice / 40% SoftCo
                </p>
              </div>

              {/* Detailed Agenda */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Detailed Running Order</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="text-gray-700 font-semibold w-36">Time</TableHead>
                        <TableHead className="text-gray-700 font-semibold">Session</TableHead>
                        <TableHead className="text-gray-700 font-semibold w-28">Owner</TableHead>
                        <TableHead className="text-gray-700 font-semibold w-32">Format</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap text-sm">12:00–12:30</TableCell>
                        <TableCell className="text-sm">
                          <p className="font-semibold text-gray-900">Arrival, Lunch & Informal Networking</p>
                          <ul className="text-gray-600 text-xs mt-1 list-disc list-inside space-y-0.5">
                            <li>Establish peer rapport before formal session</li>
                            <li>Reduce "presentation mode" dynamic</li>
                            <li>Relationship foundation for open dialogue</li>
                          </ul>
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">CEO & CMO</TableCell>
                        <TableCell className="text-gray-600 text-sm">Working lunch with pre-assigned seating</TableCell>
                      </TableRow>
                      <TableRow className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap text-sm">12:30–12:50</TableCell>
                        <TableCell className="text-sm">
                          <p className="font-semibold text-gray-900">Welcome & Executive Context</p>
                          <ul className="text-gray-600 text-xs mt-1 list-disc list-inside space-y-0.5">
                            <li>Clarify why SoftCo is launching the CAB now</li>
                            <li>Reinforce strategic partnership positioning</li>
                            <li>Define where customer influence is genuinely required</li>
                            <li>2–3 macro shifts / high-level feedback from survey</li>
                            <li>SoftCo's 18–24 month ambition</li>
                          </ul>
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">CEO</TableCell>
                        <TableCell className="text-gray-600 text-sm">Executive address</TableCell>
                      </TableRow>
                      <TableRow className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap text-sm">12:50–13:00</TableCell>
                        <TableCell className="text-sm">
                          <p className="font-semibold text-gray-900">CAB Charter & Operating Model</p>
                          <ul className="text-gray-600 text-xs mt-1 list-disc list-inside space-y-0.5">
                            <li>Semi-annual cadence (1 in-person, 1 virtual)</li>
                            <li>2-year term</li>
                            <li>Confidentiality (Chatham House Rule)</li>
                            <li>How feedback is logged, scored, prioritised, and reported back</li>
                            <li>What members can expect after today</li>
                          </ul>
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">CMO</TableCell>
                        <TableCell className="text-gray-600 text-sm">Interactive discussion</TableCell>
                      </TableRow>
                      <TableRow className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap text-sm">13:00–14:30</TableCell>
                        <TableCell className="text-sm">
                          <p className="font-semibold text-gray-900">Member Roundtable — Trends & Challenges</p>
                          <ul className="text-gray-600 text-xs mt-1 list-disc list-inside space-y-0.5">
                            <li>Structured discussion on agreed themes from survey</li>
                            <li>Each member: ~10 minutes (1.5 hours total)</li>
                            <li>Which trends are overhyped? Which represent board-level pressure?</li>
                            <li>Where are budgets being allocated?</li>
                            <li>Identify cross-industry patterns & priority areas</li>
                          </ul>
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">CEO (facilitator)</TableCell>
                        <TableCell className="text-gray-600 text-sm">Structured roundtable</TableCell>
                      </TableRow>
                      <TableRow className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap text-sm">14:30–15:00</TableCell>
                        <TableCell className="text-sm">
                          <p className="font-semibold text-gray-900">SoftCo Vision & Roadmap Themes</p>
                          <ul className="text-gray-600 text-xs mt-1 list-disc list-inside space-y-0.5">
                            <li>Future vision for finance automation</li>
                            <li>4–5 roadmap themes (not features)</li>
                            <li>Validate direction & identify misalignment early</li>
                            <li>Expose trade-off tensions</li>
                          </ul>
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">Chief Product Officer</TableCell>
                        <TableCell className="text-gray-600 text-sm">Strategic presentation + live prioritisation</TableCell>
                      </TableRow>
                      <TableRow className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 whitespace-nowrap text-sm">15:00–15:30</TableCell>
                        <TableCell className="text-sm">
                          <p className="font-semibold text-gray-900">Next Steps, Commitments & Close</p>
                          <ul className="text-gray-600 text-xs mt-1 list-disc list-inside space-y-0.5">
                            <li>Summary of top 5 priorities heard</li>
                            <li>Timeline for CAB Impact Report (within 30 days)</li>
                            <li>Next virtual session date</li>
                            <li>Interim pulse survey schedule</li>
                            <li>Agreed next milestones & accountability established</li>
                          </ul>
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">CMO / CEO</TableCell>
                        <TableCell className="text-gray-600 text-sm">Wrap-up</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Pre-CAB Survey (full detail) */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-purple-500" />
                Pre-Meeting Insight Survey
              </CardTitle>
              <CardDescription>
                Ahead of the session, a short survey (~10 mins) will be circulated to all members. Results will be aggregated and shared before the CAB so everyone has visibility of the key themes in advance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 text-sm text-gray-700 space-y-5">
                <div>
                  <p className="font-bold text-indigo-800 mb-1">Purpose</p>
                  <p className="text-gray-600">To ensure our CAB session is focused and high value, we ask you to complete this short survey (approx. 10 minutes). We will group common themes and prioritise areas raised by multiple members so that we go deep on the most important issues.</p>
                </div>

                {/* Section 1 */}
                <div>
                  <p className="font-bold text-gray-900 mb-2 border-b border-indigo-200 pb-1">Section 1: Context & Priorities</p>
                  <p className="font-semibold text-gray-800 mt-2 mb-1">1. Your Current Priorities</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Your role and organisation</li>
                    <li>Your top 2–3 priorities for the next 24 months</li>
                    <li>Any major business changes underway or planned</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <p className="font-bold text-gray-900 mb-2 border-b border-indigo-200 pb-1">Section 2: Key Challenges & Direction</p>
                  <p className="font-semibold text-gray-800 mt-2 mb-1">2. Core Challenges</p>
                  <p className="text-gray-600 mb-2">What are the 2–3 most significant challenges facing your finance function today? (Please focus on areas you are comfortable discussing in a peer forum.)</p>

                  <p className="font-semibold text-gray-800 mt-3 mb-1">3. Direction of Your Finance Operating Model</p>
                  <p className="text-gray-600 mb-1">Over the next 2–3 years, is your finance function primarily focused on:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>☐ Cost efficiency</li>
                    <li>☐ Automation & productivity</li>
                    <li>☐ AI enablement</li>
                    <li>☐ Risk & control</li>
                    <li>☐ Growth enablement</li>
                    <li>☐ ERP or platform transformation</li>
                    <li>☐ Centralisation / shared services</li>
                  </ul>
                  <p className="text-gray-600 mt-2 italic">What is driving this direction?</p>

                  <p className="font-semibold text-gray-800 mt-3 mb-1">4. Technology Investment</p>
                  <p className="text-gray-600">Where do you expect the greatest increase in finance technology investment over the next 3 years? (Open response)</p>
                </div>

                {/* Section 3 */}
                <div>
                  <p className="font-bold text-gray-900 mb-2 border-b border-indigo-200 pb-1">Section 3: The Future of Finance Leadership</p>
                  <p className="font-semibold text-gray-800 mt-2 mb-1">5. Evolution of the CFO Role</p>
                  <p className="text-gray-600 mb-2">How do you see the role of the CFO / finance leader evolving over the next 3–5 years?</p>

                  <p className="font-semibold text-gray-800 mt-3 mb-1">6. Biggest Potential Disruption</p>
                  <p className="text-gray-600">What could most disrupt your finance operating model in the next five years?</p>
                </div>

                {/* Section 4 */}
                <div>
                  <p className="font-bold text-gray-900 mb-2 border-b border-indigo-200 pb-1">Section 4: AI & Data Confidence</p>
                  <p className="font-semibold text-gray-800 mt-2 mb-1">7. AI in Finance</p>
                  <p className="text-gray-600 mb-2">Where are you currently using, or planning to use, AI within finance?</p>

                  <p className="font-semibold text-gray-800 mt-3 mb-1">8. AI Maturity (Multiple Choice)</p>
                  <p className="text-gray-600 mb-1">How would you describe your organisation's approach to AI?</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>☐ Exploring only</li>
                    <li>☐ Piloting in limited areas</li>
                    <li>☐ Scaling use cases</li>
                    <li>☐ AI embedded in multiple core processes</li>
                    <li>☐ Not currently a focus</li>
                  </ul>

                  <p className="font-semibold text-gray-800 mt-3 mb-1">9. Confidence in AI Handling Financial Data</p>
                  <p className="text-gray-600 mb-1">Which statement best reflects your organisation's position regarding AI and sensitive financial data?</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>☐ We would only use AI capabilities embedded within trusted enterprise software platforms</li>
                    <li>☐ We would consider internally developed AI solutions under strict governance</li>
                    <li>☐ We are open to secure external AI platforms if properly controlled</li>
                    <li>☐ We are not yet comfortable using AI with core financial data</li>
                    <li>☐ Still evaluating</li>
                  </ul>
                  <p className="text-gray-600 mt-2 italic">Please elaborate on what would need to be true for you to be fully comfortable.</p>

                  <p className="font-semibold text-gray-800 mt-3 mb-1">10. Where Should SoftCo Focus?</p>
                  <p className="text-gray-600">Looking ahead 2–3 years, where should SoftCo invest to create the greatest strategic value for your organisation?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. SoftCo Attendees */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-indigo-500" />
                SoftCo Attendees
              </CardTitle>
              <CardDescription>SoftCo team attending the EU CAB inaugural session and evening event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Anton", "Ann-Marie", "Daragh", "Kana", "Peter", "Robyn"].map((name) => (
                  <div key={name} className="flex items-center gap-2 bg-indigo-50 rounded-lg px-4 py-2.5">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm font-medium text-gray-800">{name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                Killian and others will join for the dinner and rugby in the evening.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ===== NORTH AMERICA CAB SECTION ===== */}
        <section id="na-cab" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">North America Customer Advisory Board</h2>
          </div>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-blue-500" />
                  NA CAB Members
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  {(["All", "Confirmed", "Pending", "Declined"] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setNaStatusFilter(status)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        naStatusFilter === status
                          ? status === "All" ? "bg-gray-800 text-white" 
                            : status === "Confirmed" ? "bg-emerald-500 text-white"
                            : status === "Pending" ? "bg-amber-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
              <CardDescription>Suggested members for NA board — launching mid-2026 in Chicago</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-700 font-semibold">Company</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Industry</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Contact</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredNaMembers.map((member, index) => (
                      <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 text-sm">{member.company}</TableCell>
                        <TableCell className="text-gray-600 text-sm">{member.industry}</TableCell>
                        <TableCell className="text-gray-600 text-sm">{member.contact}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button type="button" className="focus:outline-none">
                                <Badge className={`${getStatusColor(member.status)} text-white cursor-pointer transition-colors`}>
                                  {member.status}
                                </Badge>
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg z-[100]">
                              {statusOptions.map((option) => (
                                <DropdownMenuItem
                                  key={option.value}
                                  onClick={() => updateNaMemberStatus(index, option.value)}
                                  className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
                                >
                                  <Badge className={`${option.color} text-white`}>{option.label}</Badge>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ===== CAB IMPLEMENTATION TIMELINE ===== */}
        <section className="space-y-6">
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
                      <TableRow key={index} className={`border-gray-200 hover:bg-gray-50 ${item.completed ? 'bg-emerald-50' : ''}`}>
                        <TableCell className="font-medium whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {item.completed && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                            <span className={item.completed ? 'text-emerald-700' : 'text-blue-600'}>{item.date}</span>
                          </div>
                        </TableCell>
                        <TableCell className={item.completed ? 'text-emerald-700' : 'text-gray-700'}>{item.task}</TableCell>
                        <TableCell className={item.completed ? 'text-emerald-600' : 'text-gray-600'}>{item.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          SoftCo Customer Advisory Board Programme
        </div>
      </footer>
    </div>
  );
};

export default CAB;
