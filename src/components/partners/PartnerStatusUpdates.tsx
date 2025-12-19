import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle, Clock, ArrowRight } from "lucide-react";

const PartnerStatusUpdates = () => {
  const currentPartners = [
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

  const prospects = [
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
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case "ending":
      case "paused":
        return <AlertCircle className="h-4 w-4 text-amber-400" />;
      case "killed":
        return <XCircle className="h-4 w-4 text-red-400" />;
      case "negotiating":
        return <Clock className="h-4 w-4 text-blue-400" />;
      default:
        return <Clock className="h-4 w-4 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "border-green-500/50 text-green-400";
      case "ending":
      case "paused":
        return "border-amber-500/50 text-amber-400";
      case "killed":
        return "border-red-500/50 text-red-400";
      case "negotiating":
        return "border-blue-500/50 text-blue-400";
      default:
        return "border-slate-500/50 text-slate-400";
    }
  };

  return (
    <section id="partner-status" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
        <h2 className="text-2xl font-bold text-white">Partner Status Updates</h2>
        <Badge variant="outline" className="border-slate-600 text-slate-400">December 16th</Badge>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-300">Current Partners</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {currentPartners.map((partner) => (
            <Card key={partner.name} className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white text-lg">{partner.name}</h4>
                    <Badge variant="outline" className={getStatusColor(partner.status)}>
                      {getStatusIcon(partner.status)}
                      <span className="ml-1">{partner.statusLabel}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300">{partner.summary}</p>
                  {partner.details && (
                    <p className="text-sm text-slate-400">{partner.details}</p>
                  )}
                  {partner.action && (
                    <div className="flex items-start gap-2 text-sm text-blue-400">
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
        <h3 className="text-lg font-semibold text-slate-300">Partner Outreach - Strong Prospects</h3>
        <p className="text-sm text-slate-400">Currently reviewing outreach to ensure alignment with 2026 strategy.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {prospects.map((prospect) => (
            <Card key={prospect.name} className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">{prospect.name}</h4>
                    <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
                      {prospect.fit} Fit
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300">{prospect.details}</p>
                  <p className="text-sm text-blue-400 flex items-center gap-2">
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
