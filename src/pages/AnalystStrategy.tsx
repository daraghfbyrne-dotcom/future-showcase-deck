import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Award, Calendar, CheckCircle2, Users, TrendingUp, FileText, Building2, Star, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";

const currentRecognitions = [
  { firm: "Gartner", recognition: "Niche Player in the 2025 Magic Quadrant for Accounts Payable Applications", icon: "🏆" },
  { firm: "Gartner", recognition: "Part of Critical Capabilities Report 2025", icon: "📊" },
  { firm: "Gartner", recognition: "Sample Vendor for AP Invoice Automation (APIA) category in 2024 Hype Cycle", icon: "📈" },
  { firm: "IDC", recognition: "Major Player in 2024 MarketScape for worldwide Accounts Payable automation", icon: "🌍" },
  { firm: "Everest", recognition: "Major Contender in the 2025 PEAK Matrix for P2P", icon: "⛰️" },
  { firm: "Forrester", recognition: "Referenced in 'Top AI use cases for Accounts Payable (AP) automation'", icon: "🤖" },
  { firm: "Forrester", recognition: "Featured in AP Landscape Report (October 2025)", icon: "📋" },
];

const futureTargets = [
  { target: "Forrester Wave for AP", timing: "Q4 2025", status: "Targeted" },
  { target: "Hackett Digital World Class® Matrix Accounts Payable", timing: "Q4 2025", status: "Submitted" },
  { target: "Improve positioning on existing quadrants", timing: "Ongoing", status: "Active" },
];

const analystFrameworks = [
  {
    firm: "Gartner",
    framework: "Magic Quadrant & Critical Capabilities",
    status: "Niche Player",
    rationale: "Gartner evaluates ability to execute and completeness of vision.",
    actions: "Prepare for 2026 MQ by aligning roadmap to Gartner's criteria. Provide evidence of market traction, AI innovations and strategic vision.",
    color: "bg-blue-500",
  },
  {
    firm: "Forrester",
    framework: "Wave & Landscape Report",
    status: "Not Featured",
    rationale: "The Wave process takes ~3 months and begins with inclusion in a landscape report.",
    actions: "October briefing in advance of wave & landscape completed. Confirmation we are invited to landscape report.",
    color: "bg-purple-500",
  },
  {
    firm: "IDC",
    framework: "MarketScape",
    status: "Major Player",
    rationale: "IDC scores vendors on capabilities and strategy.",
    actions: "Continue participation; emphasize long term strategy and global go to market alignment. Seek improvements by highlighting AI driven roadmap and enterprise wins.",
    color: "bg-green-500",
  },
  {
    firm: "Everest Group",
    framework: "PEAK Matrix",
    status: "Major Contender",
    rationale: "Recognized in 2025 evaluation.",
    actions: "Maintain analyst engagements 2X per year for 2026 evaluation.",
    color: "bg-orange-500",
  },
  {
    firm: "Hackett / SpendMatters",
    framework: "Combined Matrix",
    status: "Submitted",
    rationale: "New combined matrix. Submission completed.",
    actions: "In fact-check stage. Publication expected Q4 2025.",
    color: "bg-pink-500",
  },
];

const engagementTactics = [
  {
    id: "cross-functional",
    title: "Cross-Functional Committee",
    description: "Formalise a cross functional committee (product, sales, customer success). Allocate at least 0.5 FTE for AR activities to ensure consistent execution.",
    dependencies: ["Product", "Sales", "Customer Success", "Engineering", "Pre-Sales"],
  },
  {
    id: "briefings",
    title: "Bi-Annual Briefings",
    description: "Schedule bi-annual briefings with each target firm. Use briefing to glean insight ahead of evaluations.",
    dependencies: [],
  },
  {
    id: "briefing-deck",
    title: "Develop Briefing Deck",
    description: "Develop a concise briefing deck that articulates market challenges, SoftCo's differentiated AI capabilities, customer ROI, and strategic roadmap. Provide 'grit' (data, customer references) since analysts require evidence.",
    dependencies: ["Customer Support", "Pre-Sales"],
  },
  {
    id: "reference-pool",
    title: "Build Reference Customer Pool",
    description: "Build a pool of referenceable customers across industries and geographies. Offer to connect analysts with customers for case study interviews, demonstrating high retention and large deal sizes.",
    dependencies: ["Customer Success", "Sales"],
  },
  {
    id: "monitor-agendas",
    title: "Monitor Research Agendas",
    description: "Monitor upcoming research agendas and RFI/RFP deadlines. For Gartner and Forrester evaluations, respond promptly to questionnaires and provide differentiated criteria suggestions.",
    dependencies: [],
  },
  {
    id: "analyst-day",
    title: "Host Annual Analyst Day",
    description: "Look at potential of hosting an annual analyst day to showcase product roadmap and invite key analysts.",
    dependencies: ["CEO", "Product", "Engineering", "Sales", "Pre-Sales", "Customer Support"],
  },
  {
    id: "thought-leadership",
    title: "Engage for Thought Leadership",
    description: "Engage analysts for trend reports and best practice notes to increase thought leadership.",
    dependencies: [],
  },
  {
    id: "contact-tracker",
    title: "Create Analyst Contact Tracker",
    description: "Create an excel file with each analyst company, our contact, and their email address to ensure consistency.",
    dependencies: [],
  },
];

const calendarData = [
  { report: "Magic Quadrant for AP", analyst: "Gartner", rfiIssued: "Jan-26", demo: "", publication: "Tentatively June" },
  { report: "Critical Capabilities for AP", analyst: "Gartner", rfiIssued: "Jan-26", demo: "", publication: "Tentatively June" },
  { report: "AP Invoice Automation Landscape", analyst: "Forrester", rfiIssued: "6th October", demo: "13th October", publication: "29th December" },
  { report: "PEAK Matrix", analyst: "Everest", rfiIssued: "Q2 2026", demo: "", publication: "Q4 2026" },
  { report: "Spring Solution", analyst: "SpendMatters", rfiIssued: "Mid-late October", demo: "", publication: "March" },
  { report: "Fall Solution", analyst: "SpendMatters", rfiIssued: "Late April/May", demo: "", publication: "September (23rd)" },
  { report: "MarketScape", analyst: "IDC", rfiIssued: "TBC", demo: "", publication: "TBC" },
  { report: "ePayables Technology", analyst: "Ardent Group", rfiIssued: "Late July", demo: "4th-26th September", publication: "November 3rd" },
  { report: "World Class Matrix", analyst: "Hackett Group", rfiIssued: "20th June", demo: "", publication: "30th September (delayed)" },
  { report: "Wave APIA Software", analyst: "Forrester", rfiIssued: "9th February", demo: "", publication: "15th June" },
];

const successMetrics = [
  {
    category: "Coverage & Positioning",
    metrics: [
      "Inclusion in Forrester Wave or New Wave",
      "Movement in Gartner MQ quadrant",
      "Improved IDC MarketScape score",
      "Improved Everest Matrix positioning (capabilities and strategy)",
    ],
  },
  {
    category: "Engagement Activities",
    metrics: [
      "At least 2 analyst briefings per firm per year",
    ],
  },
  {
    category: "Analyst Citations",
    metrics: [
      "Increase in positive citations/quotes",
      "Number of SoftCo mentions in research notes, blogs and webinars",
    ],
  },
];

const AnalystStrategy = () => {
  const [completedTactics, setCompletedTactics] = useState<string[]>([]);
  const [expandedFrameworks, setExpandedFrameworks] = useState<string[]>([]);

  const toggleTactic = (id: string) => {
    setCompletedTactics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const toggleFramework = (firm: string) => {
    setExpandedFrameworks(prev =>
      prev.includes(firm) ? prev.filter(f => f !== firm) : [...prev, firm]
    );
  };

  const tacticsProgress = (completedTactics.length / engagementTactics.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Strategy</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Analyst Relations Strategy</h1>
            <Badge variant="outline" className="border-emerald-500 text-emerald-600">
              2025-2026
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section - Why Analysts */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Analysts?</h2>
            </div>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Use analyst endorsements to <span className="font-semibold text-yellow-300">accelerate credibility</span>, 
              improve awareness and <span className="font-semibold text-yellow-300">drive demand / lead generation</span>.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">
                Analyst reports influence more than <span className="text-yellow-300 font-bold">80%</span> of enterprise IT purchase decisions
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">Source: Insight Partners</p>
          </div>
        </section>

        {/* Objectives */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="h-7 w-7 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900">Strategic Objectives</h2>
          </div>

          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-500" />
                Elevate Market Positioning & Achieve Broadest Analyst Coverage
              </CardTitle>
              <CardDescription className="text-gray-600">
                Target analysts covering P2P and AP automation to ensure SoftCo is top of mind when landscape reports are compiled.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {["Gartner", "Forrester", "Hackett (including SpendMatters)", "Everest", "IDC"].map((firm) => (
                  <Badge key={firm} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm">
                    {firm}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Recognition */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900">Current Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentRecognitions.map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <Badge variant="outline" className="mb-2 border-gray-300 text-gray-600">
                        {item.firm}
                      </Badge>
                      <p className="text-sm text-gray-700">{item.recognition}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Targets */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">Future Target Opportunities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {futureTargets.map((item, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{item.target}</h3>
                    <Badge 
                      className={
                        item.status === "In Progress" ? "bg-yellow-500 text-white" :
                        item.status === "Submitted" ? "bg-blue-500 text-white" :
                        item.status === "Active" ? "bg-emerald-500 text-white" :
                        "bg-gray-500 text-white"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{item.timing}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Analyst Firms & Frameworks */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-7 w-7 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">Key Analyst Firms & Frameworks</h2>
          </div>

          <div className="space-y-4">
            {analystFrameworks.map((framework) => (
              <Collapsible key={framework.firm} open={expandedFrameworks.includes(framework.firm)}>
                <Card className="bg-white border-gray-200 overflow-hidden">
                  <CollapsibleTrigger asChild>
                    <button
                      onClick={() => toggleFramework(framework.firm)}
                      className="w-full text-left"
                    >
                      <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-2 h-12 rounded-full ${framework.color}`} />
                            <div>
                              <CardTitle className="text-gray-900 flex items-center gap-3">
                                {framework.firm}
                                <Badge variant="outline" className="border-gray-300 text-gray-600 font-normal">
                                  {framework.framework}
                                </Badge>
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge 
                                  className={
                                    framework.status === "Major Player" || framework.status === "Major Contender" ? "bg-emerald-500 text-white" :
                                    framework.status === "Niche Player" ? "bg-amber-500 text-white" :
                                    framework.status === "Submitted" ? "bg-blue-500 text-white" :
                                    "bg-gray-500 text-white"
                                  }
                                >
                                  {framework.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {expandedFrameworks.includes(framework.firm) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="border-t border-gray-200 pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">Rationale</h4>
                          <p className="text-gray-700">{framework.rationale}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">Actions</h4>
                          <p className="text-gray-700">{framework.actions}</p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </section>

        {/* Engagement Tactics - Interactive */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="h-7 w-7 text-cyan-500" />
              <h2 className="text-2xl font-bold text-gray-900">Engagement Tactics</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {completedTactics.length} of {engagementTactics.length} completed
              </span>
              <div className="w-32">
                <Progress value={tacticsProgress} className="h-2" />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {engagementTactics.map((tactic) => (
              <Card 
                key={tactic.id} 
                className={`bg-white border-gray-200 transition-all ${
                  completedTactics.includes(tactic.id) ? "border-emerald-400 bg-emerald-50" : ""
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Checkbox
                      id={tactic.id}
                      checked={completedTactics.includes(tactic.id)}
                      onCheckedChange={() => toggleTactic(tactic.id)}
                      className="mt-1 border-gray-400 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                    />
                    <div className="flex-1">
                      <label 
                        htmlFor={tactic.id}
                        className={`font-semibold cursor-pointer ${
                          completedTactics.includes(tactic.id) ? "text-emerald-600 line-through" : "text-gray-900"
                        }`}
                      >
                        {tactic.title}
                      </label>
                      <p className="text-sm text-gray-600 mt-1">{tactic.description}</p>
                      {tactic.dependencies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="text-xs text-gray-500">Dependencies:</span>
                          {tactic.dependencies.map((dep) => (
                            <Badge key={dep} variant="outline" className="text-xs border-gray-300 text-gray-500">
                              {dep}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Target className="h-7 w-7 text-rose-500" />
            <h2 className="text-2xl font-bold text-gray-900">Success Metrics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{metric.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {metric.metrics.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Calendar & Timelines */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-7 w-7 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900">Calendar & Timelines</h2>
          </div>
          <p className="text-sm text-gray-500">
            Dates are subject to change and are dependent on the analyst organizations. Dates correct as at 16/10/25.
          </p>

          <Card className="bg-white border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="text-gray-700 font-semibold">Report Name</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Analyst</TableHead>
                    <TableHead className="text-gray-700 font-semibold">RFI Issued</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Demo</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Publication</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calendarData.map((item, index) => (
                    <TableRow key={index} className="border-gray-200 hover:bg-gray-50">
                      <TableCell className="font-medium text-gray-900">{item.report}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-gray-300 text-gray-600">
                          {item.analyst}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">{item.rfiIssued || "—"}</TableCell>
                      <TableCell className="text-gray-700">{item.demo || "—"}</TableCell>
                      <TableCell className="text-gray-700">{item.publication || "—"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          SoftCo Analyst Relations Strategy 2025-2026
        </div>
      </footer>
    </div>
  );
};

export default AnalystStrategy;
