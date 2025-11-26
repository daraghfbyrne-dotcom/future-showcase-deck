import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp } from "lucide-react";

export const CompetitorAnalysis = () => {
  const competitors = [
    { name: "Medius", pre: 7, post: 8, trend: "up", threat: "high" },
    { name: "Coupa", pre: 4, post: 8, trend: "up", threat: "high" },
    { name: "Basware", pre: 2, post: 5, trend: "up", threat: "high" },
    { name: "Tipalti", pre: 3, post: 6, trend: "up", threat: "medium" },
    { name: "Esker", pre: 3, post: 5, trend: "up", threat: "medium" },
    { name: "Concur", pre: 9, post: 3, trend: "down", threat: "low" },
  ];

  const getThreatColor = (threat: string) => {
    if (threat === "high") return "text-destructive";
    if (threat === "medium") return "text-warning";
    return "text-success";
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Competitive <span className="text-primary">Landscape</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tracking competitor mentions and market dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {competitors.map((competitor, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{competitor.name}</h3>
                  {competitor.trend === "up" && (
                    <TrendingUp className="w-5 h-5 text-destructive" />
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pre-July Mentions:</span>
                    <span className="font-semibold">{competitor.pre}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Post-July Mentions:</span>
                    <span className="font-semibold">{competitor.post}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">Threat Level:</span>
                    <span className={`font-semibold uppercase text-xs ${getThreatColor(competitor.threat)}`}>
                      {competitor.threat}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-destructive/10 border-destructive/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-4">Competitive Threats</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Medius and Coupa</strong> increased competitive presence significantly post-2024</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Basware</strong> doubled mentions — correlates with SAP & enterprise losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Concur</strong> decreased in relevance during the post period</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
