import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompetitorChart } from "@/components/charts/CompetitorChart";

export const CompetitorAnalysis = () => {
  const competitors = [
    { name: "Medius", pre: "75.0%", post: "85.7%", change: "+10.7", interpretation: "Getting worse vs your most-frequent competitor", threat: "high" },
    { name: "Concur", pre: "72.7%", post: "100%", change: "+27.3", interpretation: "Now losing every Concur deal", threat: "high" },
    { name: "Coupa", pre: "62.5%", post: "85.7%", change: "+23.2", interpretation: "Significant deterioration vs Coupa", threat: "high" },
    { name: "Esker", pre: "33.3%", post: "100%", change: "+66.7", interpretation: "Massive decline; previously strong, now 0 wins", threat: "high" },
    { name: "Basware", pre: "20.0%", post: "85.7%", change: "+65.7", interpretation: "Previously dominated Basware, now losing heavily", threat: "high" },
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

          <Tabs defaultValue="win-rate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="win-rate">Win Rate</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="win-rate">
              <CompetitorChart />
            </TabsContent>
            <TabsContent value="detail">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {competitors.map((competitor, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{competitor.name}</h3>
                  <TrendingUp className="w-5 h-5 text-destructive" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Jan '23 - June '24:</span>
                    <span className="font-semibold">{competitor.pre}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">July '24 - Nov '25:</span>
                    <span className="font-semibold text-destructive">{competitor.post}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Change:</span>
                    <span className="font-semibold text-destructive">{competitor.change} pts</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">{competitor.interpretation}</p>
                  </div>
                </div>
              </Card>
            ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="p-8 bg-destructive/10 border-destructive/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-4">Competitive Threats</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Catastrophic decline across all competitors:</strong> Loss rates have deteriorated significantly post-July 2024, with most competitors showing 60-85% loss rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Total collapse against Esker and Concur:</strong> Now losing 100% of deals against these competitors, representing a complete reversal from previous strong performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Basware dominance reversed:</strong> Previously won 80% of Basware deals, now losing 85.7% — a massive 65.7 point deterioration indicating fundamental competitive shift</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Even strong positions eroding:</strong> Medius (most frequent competitor) and Coupa both showing 20%+ deterioration, suggesting systematic competitive weakness</span>
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
