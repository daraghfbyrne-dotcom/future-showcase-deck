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
    <section id="competitors" className="py-24">
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
                <h3 className="font-semibold text-xl mb-4">What the Data Tells Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Systematic competitive pressure increasing:</strong> Win rates have declined across all major competitors post-July 2024, with loss rates now ranging from 85-100%, indicating a fundamental shift in competitive dynamics requiring strategic response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Strongest competitive positions eroded most:</strong> Against Basware (previously 80% win rate, now 14%) and Esker (previously 67% win rate, now 0%), our historically dominant positions have reversed completely, suggesting competitors have identified and neutralized our previous advantages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Differentiation gap widening:</strong> Even against frequent competitors like Medius (+10.7 points) and Coupa (+23.2 points), our competitive position is weakening, indicating our value proposition is not resonating effectively in head-to-head evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Strategic imperative for category redefinition:</strong> The consistent decline across all competitors suggests the current competitive battleground favors competitors. We must reframe the category around our strengths (multi-ERP complexity, mid-market specialization) rather than compete on their terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-6 p-4 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              <strong>Data Note:</strong> The competitive data presented here is limited in scope. However, this analysis reflects what we know is happening in the market, particularly against Medius and Basware. A key action for 2026 is ensuring adherence to comprehensive data capture and maintaining all competitive intelligence in HubSpot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
