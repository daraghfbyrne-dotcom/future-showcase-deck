import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle, Clock, ArrowRight } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface Partner {
  name: string;
  status: string;
  statusLabel: string;
  summary: string;
  details?: string;
  action?: string;
}

interface Prospect {
  name: string;
  fit: string;
  details: string;
  timeline: string;
}

interface StatusContent {
  updateDate?: string;
  currentPartners?: Partner[];
  prospects?: Prospect[];
}

const defaultCurrentPartners: Partner[] = [
  {
    name: "Xelix",
    status: "ending",
    statusLabel: "Ending",
    summary: "Partnership coming to an end - Xelix developing their own AP Automation solution (Q2 2026).",
    details: "Interim plan: Monthly engagement, still accepting leads. Communications must be approved by Daragh. No significant engagement since September.",
    action: "Looking at replacing Xelix, originally looked at FlexTecs but significant doubt over company synergies.",
  },
  {
    name: "Interpath",
    status: "active",
    statusLabel: "Active",
    summary: "One warm opportunity presented: FSG Global (15k invoices annually).",
    details: "Difficult to coordinate with owing to confusion within their own ranks on onboarding. Productive DACH meeting but slow follow-up.",
    action: "Goal: Set up meeting in early 2026 to create an engagement plan.",
  },
  {
    name: "NTT Data",
    status: "killed",
    statusLabel: "Killed",
    summary: "Partnership to be killed promptly.",
    details: "",
    action: "",
  },
  {
    name: "Deloitte",
    status: "paused",
    statusLabel: "Paused",
    summary: "No significant updates since October.",
    details: "",
    action: "Potential reach out in 2026.",
  },
  {
    name: "Springbok",
    status: "killed",
    statusLabel: "Killed",
    summary: "Opportunity killed due to lack of synergies.",
    details: "",
    action: "",
  },
  {
    name: "FlexTecs",
    status: "negotiating",
    statusLabel: "Negotiating",
    summary: "Currently at negotiation stage - reviewing legals.",
    details: "Significant internal doubts about culture and company fit.",
    action: "May be killed as an opportunity in the new year.",
  },
];

const defaultProspects: Prospect[] = [
  {
    name: "BillTrust",
    fit: "Strong",
    details: "Strong industry alignment, strong partnership goals alignment.",
    timeline: "Discussions in mid December and early January.",
  },
  {
    name: "Invennt",
    fit: "Strong",
    details: "Construction software with strong links to Sage. Strong assurance from Sage for GTM events. No current AP partner.",
    timeline: "Discussions in early 2026.",
  },
  {
    name: "Innov8",
    fit: "Strong",
    details: "Construction partner operating in UK and Ireland, from a Sage introduction.",
    timeline: "Partnership discussions in early 2026.",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "ending":
    case "paused":
      return <AlertCircle className="h-4 w-4 text-amber-600" />;
    case "killed":
      return <XCircle className="h-4 w-4 text-red-600" />;
    case "negotiating":
      return <Clock className="h-4 w-4 text-blue-600" />;
    default:
      return <Clock className="h-4 w-4 text-slate-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "border-green-500 text-green-700 bg-green-50";
    case "ending":
    case "paused":
      return "border-amber-500 text-amber-700 bg-amber-50";
    case "killed":
      return "border-red-500 text-red-700 bg-red-50";
    case "negotiating":
      return "border-blue-500 text-blue-700 bg-blue-50";
    default:
      return "border-slate-300 text-slate-600";
  }
};

const PartnerStatusUpdates = () => {
  const { data: section } = usePartnerStrategySection("status_updates");
  
  const content = section?.content as StatusContent | undefined;
  const currentPartners = (content?.currentPartners && content.currentPartners.length > 0) ? content.currentPartners : defaultCurrentPartners;
  const prospects = (content?.prospects && content.prospects.length > 0) ? content.prospects : defaultProspects;
  const updateDate = content?.updateDate || "December 16th";

  return (
    <section id="partner-status" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Partner Status Updates</h2>
        <Badge variant="outline" className="border-slate-400 text-slate-600">{updateDate}</Badge>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-700">Current Partners</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {currentPartners.map((partner) => (
            <Card key={partner.name} className="bg-white border-slate-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-lg">{partner.name}</h4>
                    <Badge variant="outline" className={getStatusColor(partner.status)}>
                      {getStatusIcon(partner.status)}
                      <span className="ml-1">{partner.statusLabel}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-700">{partner.summary}</p>
                  {partner.details && (
                    <p className="text-sm text-slate-500">{partner.details}</p>
                  )}
                  {partner.action && (
                    <div className="flex items-start gap-2 text-sm text-blue-600">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      {partner.action}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-700">Partner Outreach - Strong Prospects</h3>
        <p className="text-sm text-slate-500">Currently reviewing outreach to ensure alignment with 2026 strategy.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {prospects.map((prospect) => (
            <Card key={prospect.name} className="bg-white border-slate-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900">{prospect.name}</h4>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                      {prospect.fit} Fit
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-700">{prospect.details}</p>
                  <p className="text-sm text-blue-600 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {prospect.timeline}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerStatusUpdates;
