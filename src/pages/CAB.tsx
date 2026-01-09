import { Users, Calendar, Clock, Target, Globe, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";

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

const CAB = () => {
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
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white font-medium">
                  EU Launch: <span className="text-yellow-300 font-bold">March 6, 2026</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Building2 className="h-5 w-5 text-white" />
                <span className="text-white font-medium">
                  NA Launch: <span className="text-yellow-300 font-bold">Mid-2026</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <div className="mb-8">
          <KeyPointsSummary
            points={[
              "Two regional boards: EU (Dublin) and NA (Chicago) with 8–10 members each",
              "Semi-annual cadence: one in-person and one virtual meeting per year",
              "EU inaugural event: March 6, 2026 coinciding with Ireland vs Wales rugby",
              "Estimated EU event budget: ~€13,400 including accommodation, venue, dinner, and rugby tickets"
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

        {/* EU CAB Event Details */}
        <section className="space-y-6">
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
        </section>

        {/* CAB Timeline */}
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
        </section>

        {/* CAB Agenda */}
        <section className="space-y-6">
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
        </section>

        {/* EU & NA Members */}
        <section className="space-y-6">
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
          SoftCo Customer Advisory Board Programme
        </div>
      </footer>
    </div>
  );
};

export default CAB;
