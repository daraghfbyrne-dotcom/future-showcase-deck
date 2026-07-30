import { useState } from "react";
import { Target, Award, Calendar as CalendarIcon, CheckCircle2, Users, TrendingUp, FileText, Building2, Star, Clock, Sparkles, Mail, AlertTriangle } from "lucide-react";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/Navigation";

import gartnerLogo from "@/assets/gartner-logo.png";
import forresterLogo from "@/assets/forrester-logo.png";
import idcLogo from "@/assets/idc-logo.png";
import hackettLogo from "@/assets/hackett-logo.png";
import hackettGroupLogo from "@/assets/hackett-group-logo.png";
import euromoneyLogo from "@/assets/euromoney-logo.png";
import everestLogo from "@/assets/everest-logo.png";

const firmLogos: Record<string, string> = {
  "Gartner": gartnerLogo,
  "Forrester": forresterLogo,
  "IDC": idcLogo,
  "Hackett": hackettLogo,
  "Hackett / SpendMatters": hackettLogo,
  "Hackett Group": hackettGroupLogo,
  "Euromoney": euromoneyLogo,
  "Everest": everestLogo,
  "Everest Group": everestLogo,
};

const currentRecognitions = [
  { firm: "Gartner", recognition: "Niche Player in the 2025 Magic Quadrant for Accounts Payable Applications" },
  { firm: "Gartner", recognition: "Part of Critical Capabilities Report 2025" },
  { firm: "Gartner", recognition: "Sample Vendor for AP Invoice Automation (APIA) category in 2024 Hype Cycle" },
  { firm: "IDC", recognition: "Major Player in 2024 MarketScape for worldwide Accounts Payable automation" },
  { firm: "Everest", recognition: "Major Contender in the 2025 PEAK Matrix for P2P" },
  { firm: "Forrester", recognition: "Referenced in 'Top AI use cases for Accounts Payable (AP) automation'" },
  { firm: "Forrester", recognition: "Featured in AP Landscape Report (October 2025)" },
  { firm: "Hackett Group", recognition: "Featured in Digital World Class® Matrix Accounts Payable (Q4 2025)" },
];

const futureTargets = [
  { target: "IDC MarketScape Report", timing: "Q2 2026", status: "Pending Publication" },
  { target: "SpendMatters Fall Solution Map 2026", timing: "Q2 2026", status: "In Progress" },
  { target: "Everest P2P PEAK Matrix 2026", timing: "Q2 2026", status: "In Progress" },
  { target: "Hackett Digital World Class Matrix", timing: "Q3 2026", status: "Awaiting RFI Release" },
  { target: "Forrester AP Landscape Report", timing: "Q3 2026", status: "Pending" },
  { target: "Forrester Navigating the E-Invoicing Compliance Ecosystem Report", timing: "Q2 2026", status: "Pending Publication" },
  { target: "Ardent Partners AP Automation and Payments Advisor", timing: "Q4 2026", status: "Exploring" },
];

const whitepapers2026 = [
  { title: "Forrester Top AI Use Cases for Accounts Payable Automation", firm: "Forrester", status: null },
  { title: "Hackett AI Solution Provider Landscape Report", firm: "Hackett", status: null },
  { title: "Euromoney Cash Management Survey 2026", firm: "Euromoney", status: null },
  { title: "Forrester eInvoicing Compliance Report", firm: "Forrester", status: "Invited" },
];

const upcomingBriefings = [
  { firm: "Gartner", date: "10th August" },
];

const analystFrameworks = [
  {
    firm: "Gartner",
    framework: "Magic Quadrant & Critical Capabilities",
    status: "Niche Player",
    rationale: "Gartner evaluates ability to execute and completeness of vision.",
      actions: "Vendor briefing taking place on 10th August.",
    color: "bg-blue-500",
    rfiRelease: "February",
    published: "June/July",
    contacts: [
      { name: "Miles Onafowora", email: "Miles.Onafowora@gartner.com", role: "Analyst" },
        { name: "Abigail Swindlehurst", email: "abigail.swindlehurst@gartner.com", role: "Account Manager" },
    ],
  },
  {
    firm: "Forrester",
    framework: "Wave & Landscape Report",
    status: "Not Featured",
    rationale: "The Wave process takes ~3 months and begins with inclusion in a landscape report.",
      actions: "Evaluating joining their AI programme, waiting for publication of eInvoicing Compliance Ecosystem report.",
    color: "bg-purple-500",
    rfiRelease: "3rd February",
    published: "15th June",
    contacts: [
      { name: "Meng Liu", email: "", role: "Lead Analyst" },
        { name: "Ewan Brown", email: "ewbrown@forrester.com", role: "Account Executive" },
    ],
    demoLink: {
      label: "June 2026 Demo to Forrester",
      description: "Transcript of Vendor Briefing (3rd June)",
      url: "https://softco365.sharepoint.com/:w:/r/sites/salesmarketing/_layouts/15/Doc.aspx?sourcedoc=%7B80F79F98-8417-476A-89D6-9C6B29614732%7D&file=Vendor%20Briefing%203rd%20June%20Transcript.docx&action=default&mobileredirect=true",
    },
  },
  {
    firm: "IDC",
    framework: "MarketScape",
    status: "Major Player",
    rationale: "IDC scores vendors on capabilities and strategy.",
    actions: "Returning feedback on initial scores, provisionally placed as a leader in the 2026 AP MarketScape report.",
    color: "bg-green-500",
    rfiRelease: "23rd February",
    customerReferences: "20th February",
    published: "July",
    contacts: [
      { name: "Kevin Permenter", email: "k.permenter@idc.com", role: "Analyst" },
      { name: "Jordan Steele", email: "jsteele@idc.com", role: "Analyst" },
      { name: "Brian Amigleo", email: "brian.amigleo@idc.com", role: "Project Coordinator" },
    ],
  },
  {
    firm: "Everest Group",
    framework: "PEAK Matrix",
    status: "Major Contender",
    rationale: "Recognized in 2025 evaluation.",
    actions: "Waiting for the 2026 P2P PEAK Matrix RFI to be released.",
    color: "bg-orange-500",
    rfiRelease: "Mid July",
    published: "16th November",
    contacts: [
      { name: "Arushi Diwan", email: "arushi.a.diwan@everestgrp.com", role: "Key Contact" },
      { name: "Katrina Menzigian", email: "katrina.menzigian@everestgrp.com", role: "Supporting Analyst" },
      { name: "Patricia Blair", email: "patricia.blair@everestgrp.com", role: "Supporting Analyst" },
      { name: "Ritika Dhingra", email: "ritika.dhingra@everestgrp.com", role: "Supporting Analyst" },
      { name: "Anuj Srivastava", email: "anuj.srivastava@everestgrp.com", role: "Supporting Analyst" },
      { name: "Niketa Sharma", email: "niketa.sharma@everestgrp.com", role: "Supporting Analyst" },
      { name: "Anil Kapur", email: "anil.kapur@everestgrp.com", role: "Supporting Analyst" },
      { name: "Anchal Guleria", email: "anchal.guleria@everestgrp.com", role: "Supporting Analyst" },
    ],
  },
  {
    firm: "Hackett / SpendMatters",
    framework: "Combined Matrix",
    status: "Submitted",
    rationale: "New combined matrix. Submission completed.",
    actions: "Recently completed the Fall SolutionMap RFI, waiting to schedule a demo.",
    color: "bg-pink-500",
    rfiRelease: "June",
    published: "November",
    contacts: [
      { name: "Xavier Olivera", email: "xolivera@spendmatters.com", role: "SpendMatters Analyst" },
      { name: "Roderick Gaines", email: "roderick.gaines@thehackettgroup.com", role: "Hackett Analyst" },
    ],
  },
  {
    firm: "Ardent Partners",
    framework: "TBC",
    status: "Exploring",
    rationale: "Given exclusion from Forrester & Gartner reports, we are exploring new analyst firms.",
    actions: "Engage with Ardent Partners to discover reports that will be published in 2026.",
    color: "bg-teal-500",
    rfiRelease: "TBC",
    published: "TBC",
    contacts: [
      { name: "TBC", email: "", role: "TBC" },
    ],
  },
];

// Visual calendar data - reports we ARE included in
const includedCalendarEvents = [
  { firm: "IDC", report: "MarketScape", rfiMonth: 1, publishMonth: 6, rfiLabel: "23rd Feb", publishLabel: "Jul", color: "bg-green-500" },
  { firm: "Everest", report: "PEAK Matrix", rfiMonth: 5, publishMonth: 10, rfiLabel: "18th Jun", publishLabel: "16th Nov", color: "bg-orange-500" },
  { firm: "Hackett", report: "Digital World Class Matrix", rfiMonth: 5, publishMonth: 10, rfiLabel: "Jun", publishLabel: "Nov", color: "bg-pink-500" },
  { firm: "Spend Matters", report: "Fall Solution Map", rfiMonth: 4, publishMonth: 8, rfiLabel: "May", publishLabel: "Sep", color: "bg-cyan-500" },
  { firm: "Forrester", report: "AP Landscape Report", rfiMonth: 7, publishMonth: 9, rfiLabel: "Aug", publishLabel: "Oct", color: "bg-violet-500" },
  { firm: "Ardent Partners", report: "2027 AP Automation & Payments Advisor", rfiMonth: 9, publishMonth: 12, rfiLabel: "Oct", publishLabel: "Jan '27", color: "bg-teal-500" },
  
  { firm: "Gartner", report: "Briefing for the 10th August", rfiMonth: 7, publishMonth: 7, rfiLabel: "10th Aug", publishLabel: "10th Aug", color: "bg-blue-500", type: "briefing" },
];

// Visual calendar data - reports we are NOT included in
const excludedCalendarEvents = [
  { firm: "Gartner", report: "Magic Quadrant & Critical Capabilities", rfiMonth: 1, publishMonth: 5, rfiLabel: "Feb", publishLabel: "Jun/Jul", color: "bg-blue-500" },
  { firm: "Forrester", report: "Wave APIA Software", rfiMonth: 1, publishMonth: 5, rfiLabel: "3rd Feb", publishLabel: "15th Jun", color: "bg-purple-500" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
  {
    id: "analyst-engagement-weeks",
    title: "Analyst Engagement Weeks",
    description: "Dedicated analyst engagement weeks to maximise face-time with key analysts across all firms.",
    dependencies: [],
    extraContent: {
      h1: { label: "H1 2026", dates: "4th – 15th May 2026" },
      h2: { label: "H2 2026", dates: "5th – 16th October 2026" },
      timeSlots: ["12:00 – 1:00pm", "2:00 – 3:00pm", "3:00 – 4:00pm"],
      timezone: "Irish Time (IST/GMT)",
      note: "We are currently reaching out to analysts to confirm availability for these proposed dates.",
    },
  },
];


type RAGStatus = "not-started" | "in-progress" | "completed" | "blocked";

const ragStatusConfig: Record<RAGStatus, { label: string; color: string; bgColor: string; borderColor: string }> = {
  "not-started": { label: "Not Started", color: "text-gray-600", bgColor: "bg-gray-100", borderColor: "border-gray-300" },
  "in-progress": { label: "In Progress", color: "text-amber-700", bgColor: "bg-amber-50", borderColor: "border-amber-400" },
  "completed": { label: "Completed", color: "text-emerald-700", bgColor: "bg-emerald-50", borderColor: "border-emerald-400" },
  "blocked": { label: "Blocked", color: "text-red-700", bgColor: "bg-red-50", borderColor: "border-red-400" },
};

const AnalystStrategy = () => {
  const [tacticStatuses, setTacticStatuses] = useState<Record<string, RAGStatus>>({});



  const updateTacticStatus = (id: string, status: RAGStatus) => {
    setTacticStatuses(prev => ({ ...prev, [id]: status }));
  };




  const getStatusCounts = () => {
    const counts = { "not-started": 0, "in-progress": 0, "completed": 0, "blocked": 0 };
    engagementTactics.forEach(tactic => {
      const status = tacticStatuses[tactic.id] || "not-started";
      counts[status]++;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 pt-20 pb-8 space-y-8">
        {/* Hero Section - Why Analysts */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12 mb-8">
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

        {/* Key Points Summary */}
        <div className="mb-8">
          <KeyPointsSummary
            points={[
              "We have not been included in the Gartner Magic Quadrant or Forrester Wave",
              "We have taken part in the IDC MarketScape Report, the SpendMatters Fall Solution Map is underway, and the Everest PEAK Matrix is due in June",
              "We have vendor briefing with Gartner on 10th August"
            ]}
          />
        </div>

        {/* Important Note */}
        <Card className="border-amber-300 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800">Important Note</h3>
                <p className="text-sm text-amber-700 mt-1">
                  SoftCo has <span className="font-bold">NOT</span> been included in the 2026 Gartner Magic Quadrant, Critical Capabilities or the Forrester Wave report.
                   Forrester and Gartner have stated that they do not consider SoftCo 'relevant' enough to warrant inclusion. Gartner have stated that relevancy is derived from the number of clients talking about certain companies.
                   We are now evaluating new reports such as Spend Matters and Ardent Partners, to improve our market visibility and analyst relations.
                   We have scheduled briefings with Gartner and Forrester which will ideally shed light on our lack of inclusion. We have been included in Forrester's AI Capabilities Report & invited to take part in their E-Invoicing Compliance report.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Vendor Briefings */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-6 w-6 text-indigo-500" />
            <h2 className="text-xl font-bold text-gray-900">Upcoming Vendor Briefings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingBriefings.map((b) => (
              <Card key={b.firm} className="bg-white border-gray-200">
                <CardContent className="pt-6 flex items-center gap-4">
                  {firmLogos[b.firm] && (
                    <img src={firmLogos[b.firm]} alt={b.firm} className="h-8 w-auto object-contain" />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{b.firm}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{b.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                {["Gartner", "Forrester", "Hackett (including SpendMatters)", "Everest", "IDC", "Ardent Partners"].map((firm) => (
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
                    {firmLogos[item.firm] && (
                      <img src={firmLogos[item.firm]} alt={item.firm} className="h-6 w-auto object-contain flex-shrink-0" />
                    )}
                    <div>
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
                        item.status === "Pending Publication" ? "bg-indigo-500 text-white" :
                        item.status === "Awaiting RFI Release" ? "bg-orange-500 text-white" :
                        item.status === "Pending" ? "bg-slate-500 text-white" :
                        item.status === "Exploring" ? "bg-teal-500 text-white" :
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

        {/* 2026 Whitepapers */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-7 w-7 text-fuchsia-500" />
            <h2 className="text-2xl font-bold text-gray-900">2026 Whitepapers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {whitepapers2026.map((wp, idx) => (
              <Card key={idx} className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    {wp.firm && firmLogos[wp.firm] && (
                      <img
                        src={firmLogos[wp.firm]}
                        alt={wp.firm}
                        className={`w-auto object-contain flex-shrink-0 mt-0.5 ${
                          wp.firm === "Hackett" || wp.firm === "Euromoney" ? "h-16" : "h-6"
                        }`}
                      />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{wp.title}</p>
                      {wp.status && (
                        <Badge className="mt-2 bg-emerald-500 text-white">{wp.status}</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Visual RFI & Publish Calendar - Included */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-7 w-7 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900">Reports We Are Included In</h2>
          </div>

          <Card className="bg-white border-emerald-200 overflow-hidden">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                  <div className="grid grid-cols-[200px_repeat(13,1fr)] gap-0 mb-2">
                    <div className="text-sm font-semibold text-gray-500 pr-4">Firm / Report</div>
                    {[...months, "Jan '27"].map((m) => (
                      <div key={m} className="text-xs font-medium text-gray-400 text-center">{m}</div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {includedCalendarEvents.map((event) => (
                      <div key={event.firm + event.report} className="grid grid-cols-[200px_repeat(13,1fr)] gap-0 items-center">
                        <div className="pr-4">
                          <p className="text-sm font-medium text-gray-900 truncate">{event.firm}</p>
                          <p className="text-xs text-gray-500 truncate">{event.report}</p>
                        </div>
                        {[...months, "Jan '27"].map((_, monthIdx) => {
                          const isRfi = monthIdx === event.rfiMonth;
                          const isPublish = monthIdx === event.publishMonth;
                          const isBetween = monthIdx > event.rfiMonth && monthIdx < event.publishMonth;
                          const isBriefing = (event as any).type === "briefing";
                          return (
                            <div key={monthIdx} className="flex items-center justify-center h-10 relative">
                              {isBetween && !isBriefing && (
                                <div className={`absolute inset-y-3 inset-x-0 ${event.color} opacity-10 rounded-sm`} />
                              )}
                              {isRfi && isBriefing && (
                                <div className="flex flex-col items-center z-10">
                                  <div className={`w-4 h-4 rotate-45 ${event.color} ring-2 ring-white shadow-md`} />
                                  <span className="text-[9px] text-gray-600 mt-0.5 font-medium whitespace-nowrap">Briefing</span>
                                </div>
                              )}
                              {isRfi && !isBriefing && (
                                <div className="flex flex-col items-center z-10">
                                  <div className={`w-4 h-4 rounded-full ${event.color} ring-2 ring-white shadow-md`} />
                                  <span className="text-[9px] text-gray-600 mt-0.5 font-medium whitespace-nowrap">RFI</span>
                                </div>
                              )}
                              {isPublish && !isBriefing && (
                                <div className="flex flex-col items-center z-10">
                                  <div className={`w-4 h-4 rounded-sm ${event.color} ring-2 ring-white shadow-md`} />
                                  <span className="text-[9px] text-gray-600 mt-0.5 font-medium whitespace-nowrap">Pub</span>
                                </div>
                              )}
                              {isBetween && !isBriefing && (
                                <div className={`absolute inset-y-[18px] inset-x-0 h-[2px] ${event.color} opacity-30`} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                      <span className="text-xs text-gray-500">RFI Release</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gray-500" />
                      <span className="text-xs text-gray-500">Publication</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <FileText className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-700">
              <span className="font-semibold">Note:</span> Hackett acquired Spend Matters in 2025, however they both still run individual reports.
            </p>
          </div>
        </section>

        {/* Visual RFI & Publish Calendar - Not Included */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-7 w-7 text-red-400" />
            <h2 className="text-2xl font-bold text-gray-900">Reports We Are Not Included In</h2>
          </div>

          <Card className="bg-white border-red-200 overflow-hidden">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                  <div className="grid grid-cols-[200px_repeat(12,1fr)] gap-0 mb-2">
                    <div className="text-sm font-semibold text-gray-500 pr-4">Firm / Report</div>
                    {months.map((m) => (
                      <div key={m} className="text-xs font-medium text-gray-400 text-center">{m}</div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {excludedCalendarEvents.map((event) => (
                      <div key={event.firm + event.report} className="grid grid-cols-[200px_repeat(12,1fr)] gap-0 items-center">
                        <div className="pr-4">
                          <p className="text-sm font-medium text-gray-900 truncate">{event.firm}</p>
                          <p className="text-xs text-gray-500 truncate">{event.report}</p>
                        </div>
                        {months.map((_, monthIdx) => {
                          const isRfi = monthIdx === event.rfiMonth;
                          const isPublish = monthIdx === event.publishMonth;
                          const isBetween = monthIdx > event.rfiMonth && monthIdx < event.publishMonth;
                          return (
                            <div key={monthIdx} className="flex items-center justify-center h-10 relative">
                              {isBetween && (
                                <div className={`absolute inset-y-3 inset-x-0 ${event.color} opacity-10 rounded-sm`} />
                              )}
                              {isRfi && (
                                <div className="flex flex-col items-center z-10">
                                  <div className={`w-4 h-4 rounded-full ${event.color} ring-2 ring-white shadow-md`} />
                                  <span className="text-[9px] text-gray-600 mt-0.5 font-medium whitespace-nowrap">RFI</span>
                                </div>
                              )}
                              {isPublish && (
                                <div className="flex flex-col items-center z-10">
                                  <div className={`w-4 h-4 rounded-sm ${event.color} ring-2 ring-white shadow-md`} />
                                  <span className="text-[9px] text-gray-600 mt-0.5 font-medium whitespace-nowrap">Pub</span>
                                </div>
                              )}
                              {isBetween && (
                                <div className={`absolute inset-y-[18px] inset-x-0 h-[2px] ${event.color} opacity-30`} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                      <span className="text-xs text-gray-500">RFI Release</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gray-500" />
                      <span className="text-xs text-gray-500">Publication</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <FileText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700">
              <span className="font-semibold">Note:</span> We will still take part in the Forrester Landscape Report, and invite both Gartner and Forrester to our Analyst Engagement Weeks.
            </p>
          </div>
        </section>

        {/* Key Analyst Firms & Frameworks - Always expanded */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-7 w-7 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">Key Analyst Firms & Frameworks</h2>
          </div>

          <div className="space-y-4">
            {analystFrameworks.map((framework) => (
              <Card key={framework.firm} className="bg-white border-gray-200 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {firmLogos[framework.firm] && (
                      <img src={firmLogos[framework.firm]} alt={framework.firm} className="h-8 w-auto object-contain" />
                    )}
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
                </CardHeader>
                <CardContent className="border-t border-gray-200 pt-4">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Rationale</h4>
                      <p className="text-gray-700">{framework.rationale}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Actions</h4>
                      <p className="text-gray-700">{framework.actions}</p>
                    </div>
                  </div>

                  {/* Timeline info */}
                  <div className="grid md:grid-cols-2 gap-6 mb-4 pt-4 border-t border-gray-100">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">
                        <CalendarIcon className="h-3.5 w-3.5 inline mr-1" />
                        RFI Release
                      </h4>
                      <p className="text-gray-700 font-medium">{framework.rfiRelease}</p>
                      {(framework as any).customerReferences && (
                        <p className="text-gray-600 text-sm mt-1">Customer References: {(framework as any).customerReferences}</p>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">
                        <FileText className="h-3.5 w-3.5 inline mr-1" />
                        Published
                      </h4>
                      <p className="text-gray-700 font-medium">{framework.published}</p>
                    </div>
                  </div>

                  {/* Key Contacts */}
                  <div className={`pt-4 border-t border-gray-100 ${(framework as any).demoLink ? "grid md:grid-cols-2 gap-6" : ""}`}>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">
                        <Mail className="h-3.5 w-3.5 inline mr-1" />
                        Key Contacts
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {framework.contacts.map((contact, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                              <p className="text-xs text-gray-500">{contact.role}</p>
                              {contact.email && (
                                <a href={`mailto:${contact.email}`} className="text-xs text-blue-600 hover:underline">
                                  {contact.email}
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {(framework as any).demoLink && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">
                          <FileText className="h-3.5 w-3.5 inline mr-1" />
                          {(framework as any).demoLink.label}
                        </h4>
                        <a
                          href={(framework as any).demoLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 transition rounded-lg px-3 py-2 border border-purple-200"
                        >
                          <FileText className="h-4 w-4 text-purple-600" />
                          <div>
                            <p className="text-sm font-medium text-purple-900">View Transcript (SharePoint)</p>
                            <p className="text-xs text-purple-700">{(framework as any).demoLink.description}</p>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Engagement Tactics section hidden */}


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
