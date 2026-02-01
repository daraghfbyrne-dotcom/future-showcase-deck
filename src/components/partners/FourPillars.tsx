import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BarChart3, LayoutGrid, LucideIcon } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface Pillar {
  number: number;
  title: string;
  iconType?: string;
  description: string;
  items: string[];
}

interface FourPillarsContent {
  title?: string;
  subtitle?: string;
  pillars?: Pillar[];
}

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Calendar,
  BarChart3,
  LayoutGrid,
};

const defaultPillars: Pillar[] = [
  {
    number: 1,
    title: "Structured Enablement",
    iconType: "GraduationCap",
    description: "Formal partner education program focused on ICP, product understanding, objection handling, and SoftCo differentiators.",
    items: [
      "Onboarding sessions",
      "Quarterly refreshers",
      "Content hub / Partner portal (H1 2026)",
      "Content Executive support (H2 2025)",
    ],
  },
  {
    number: 2,
    title: "Regular QBRs and Joint Planning",
    iconType: "Calendar",
    description: "Quarterly Business Reviews with all key partners to review performance, track KPIs, and align priorities.",
    items: [
      "Review pipeline influenced & deals converted",
      "Annual joint business plans",
      "Define targets & marketing activities",
      "Resource commitments alignment",
    ],
  },
  {
    number: 3,
    title: "Performance Metrics & Accountability",
    iconType: "BarChart3",
    description: "Partners tracked across pipeline generation, conversion rates, and enablement activity.",
    items: [
      "Pipeline generation tracking",
      "Conversion rate monitoring",
      "Enablement activity completion",
      "High performer incentives",
    ],
  },
  {
    number: 4,
    title: "Partner Portal",
    iconType: "LayoutGrid",
    description: "Centralised partner portal by end H1 2026 for all partner operations.",
    items: [
      "Lead sharing / deal registration",
      "Collateral & training access",
      "Joint opportunity tracking",
      "Performance dashboard",
    ],
  },
];

const FourPillars = () => {
  const { data: section } = usePartnerStrategySection("four_pillars");
  
  const content = section?.content as FourPillarsContent | undefined;
  const pillars = (content?.pillars && content.pillars.length > 0) ? content.pillars : defaultPillars;
  const subtitle = content?.subtitle || "To unlock value from our existing ecosystem and make partners true multipliers of SoftCo's reach by mid-2026.";

  return (
    <section id="four-pillars" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Four Pillars of Partner Success</h2>
      </div>
      <p className="text-slate-600">
        {subtitle}
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {pillars.map((pillar) => {
          const Icon = iconMap[pillar.iconType || "GraduationCap"] || GraduationCap;
          return (
            <Card key={pillar.number} className="bg-white border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <CardTitle className="text-slate-900 text-lg flex items-center gap-2">
                    <span className="text-cyan-600">{pillar.number}.</span>
                    {pillar.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600">{pillar.description}</p>
                <ul className="space-y-1">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FourPillars;
