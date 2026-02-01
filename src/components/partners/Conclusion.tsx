import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { usePartnerStrategySection } from "@/hooks/usePartnerStrategyContent";

interface ConclusionContent {
  summary?: string;
  milestones?: Array<{
    year: string;
    label: string;
    color: string;
  }>;
}

const defaultSummary = `This phased strategy positions SoftCo to scale our partner ecosystem in a controlled, 
high-impact way. By leading with low-friction referral partnerships in 2025 and gradually layering in VARs 
later in 2026, we can align with internal capacity, learn from early partner engagements, and ensure each 
partner type is properly enabled to contribute meaningfully to our growth goals.`;

const defaultMilestones = [
  { year: "2025", label: "Referral Focus", color: "green" },
  { year: "H2 2026", label: "VAR Expansion", color: "blue" },
  { year: "2029", label: "30% ARR Target", color: "amber" },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600" },
};

const Conclusion = () => {
  const { data: section } = usePartnerStrategySection("conclusion");
  
  const content = section?.content as ConclusionContent | undefined;
  const summary = content?.summary || defaultSummary;
  const milestones = (content?.milestones && content.milestones.length > 0) ? content.milestones : defaultMilestones;

  return (
    <section id="conclusion" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Conclusion</h2>
      </div>

      <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                {summary}
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                {milestones.map((milestone, idx) => {
                  const colors = colorMap[milestone.color] || colorMap.green;
                  return (
                    <div 
                      key={idx} 
                      className={`text-center p-4 ${colors.bg} rounded-lg border ${colors.border}`}
                    >
                      <p className={`text-3xl font-bold ${colors.text}`}>{milestone.year}</p>
                      <p className="text-sm text-slate-600">{milestone.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Conclusion;
