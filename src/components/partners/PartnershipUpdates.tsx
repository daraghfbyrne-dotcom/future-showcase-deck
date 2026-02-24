import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import microsoftLogo from "@/assets/microsoft-logo.png";
import pwcLogo from "@/assets/pwc-logo.png";
import interpathLogo from "@/assets/interpath-logo.png";
import xelixLogo from "@/assets/xelix-logo.png";
import sageLogo from "@/assets/sage-logo.png";
import tungstenLogo from "@/assets/tungsten-logo.png";

interface PartnerUpdate {
  name: string;
  logo: string | null;
  logoFallback?: string;
  status: "active" | "growing" | "new" | "winding-down";
  statusLabel: string;
  update: string;
  highlights?: string[];
}

const partners: PartnerUpdate[] = [
  {
    name: "Tungsten Automation",
    logo: tungstenLogo,
    status: "active",
    statusLabel: "Active",
    update:
      "Engaging with Jason on joint partnership activities, pipeline having signed new deal to take advantage of Tungsten TotalAgility.",
    highlights: ["New deal signed", "TotalAgility integration"],
  },
  {
    name: "PwC",
    logo: pwcLogo,
    status: "growing",
    statusLabel: "Growing",
    update:
      "PwC have brought forward Acrisure LLC as a new opportunity. There are discussions for this to be a lighthouse customer, as PwC believe once they get one over the line in the insurance space, it opens the door for more.",
    highlights: [
      "Acrisure LLC opportunity",
      "Joint eInvoicing webinar – 25th Feb",
      "Q1 QBR scheduled – early April",
    ],
  },
  {
    name: "Interpath",
    logo: interpathLogo,
    status: "new",
    statusLabel: "New Partnership",
    update:
      "We are entering discussions with Interpath to build a partnership and engagement framework, with the aim of generating pipeline opportunities in 2026. Working directly with Interpath to establish ownership, meeting cadence, pipeline review and joint GtM activities.",
    highlights: ["Framework development", "Pipeline generation target 2026"],
  },
  {
    name: "Microsoft",
    logo: microsoftLogo,
    status: "active",
    statusLabel: "Active",
    update:
      "Currently engaging in a Propensity Mapping Exercise, where we send 20–40 top prospective customers and map if they can buy via Azure Marketplace.",
    highlights: ["Propensity Mapping Exercise", "Azure Marketplace evaluation"],
  },
  {
    name: "Sage",
    logo: sageLogo,
    status: "growing",
    statusLabel: "Growing",
    update:
      "We are officially a Sage Intacct Referral partner, giving us two-way access to referrals. We actively engage and are planning joint GtM activities with Sage, and working on sharing pipeline and joint opportunities via Crossbeam. Sage have also introduced us to two potential partners.",
    highlights: [
      "Official Sage Intacct Referral Partner",
      "Joint GtM planning",
      "Crossbeam pipeline sharing",
      "Two partner introductions",
    ],
  },
  {
    name: "Xelix",
    logo: xelixLogo,
    status: "winding-down",
    statusLabel: "Winding Down",
    update: "Very little contact as partnership winds down.",
  },
];

const statusConfig: Record<
  PartnerUpdate["status"],
  { color: string; badgeClass: string; icon: typeof TrendingUp }
> = {
  active: {
    color: "border-l-blue-500",
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
    icon: ArrowRight,
  },
  growing: {
    color: "border-l-green-500",
    badgeClass: "bg-green-100 text-green-700 border-green-200",
    icon: TrendingUp,
  },
  new: {
    color: "border-l-purple-500",
    badgeClass: "bg-purple-100 text-purple-700 border-purple-200",
    icon: ArrowRight,
  },
  "winding-down": {
    color: "border-l-red-400",
    badgeClass: "bg-red-100 text-red-700 border-red-200",
    icon: TrendingDown,
  },
};

const PartnershipUpdates = () => {
  return (
    <section id="partnership-updates" className="space-y-6">
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">
                Partnership Updates — February 2026
              </h3>
              <p className="text-sm text-muted-foreground">
                Latest status across active and prospective partnerships
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {partners.map((partner, i) => {
              const cfg = statusConfig[partner.status];
              const Icon = cfg.icon;
              return (
                <div
                  key={i}
                  className={`p-5 rounded-lg bg-slate-50 border border-slate-200 border-l-4 ${cfg.color}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-sm font-bold text-slate-500">
                          {partner.logoFallback}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="font-semibold text-slate-900">
                          {partner.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${cfg.badgeClass}`}
                        >
                          <Icon className="w-3 h-3 mr-1" />
                          {partner.statusLabel}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-2">
                        {partner.update}
                      </p>
                      {partner.highlights && partner.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {partner.highlights.map((h, j) => (
                            <Badge
                              key={j}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {h}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PartnershipUpdates;
