import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompetitorChart } from "@/components/charts/CompetitorChart";

export const CompetitorAnalysis = () => {
  const competitors = [
    { name: "Other / Unspecified", preMentions: 57, postMentions: 62, change: "+5", trend: "up" },
    { name: "Medius", preMentions: 7, postMentions: 8, change: "+1", trend: "up" },
    { name: "Coupa", preMentions: 4, postMentions: 8, change: "+4", trend: "up" },
    { name: "Tipalti", preMentions: 3, postMentions: 6, change: "+3", trend: "up" },
    { name: "Esker", preMentions: 3, postMentions: 5, change: "+2", trend: "up" },
    { name: "Basware", preMentions: 2, postMentions: 5, change: "+3", trend: "up" },
    { name: "Concur", preMentions: 9, postMentions: 3, change: "-6", trend: "down" },
    { name: "Stampli", preMentions: 3, postMentions: 3, change: "0", trend: "stable" },
    { name: "AvidXchange", preMentions: 3, postMentions: 3, change: "0", trend: "stable" },
    { name: "Yooz", preMentions: 4, postMentions: 3, change: "-1", trend: "down" },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-destructive" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-success" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
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

          <Card className="mb-8 p-8 bg-destructive/10 border-destructive/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Medius and Coupa increased their competitive presence post-2024</strong> — Coupa doubled from 4 to 8 mentions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Basware more than doubled its mentions</strong> — This correlates with SAP & enterprise losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Concur decreased in relevance</strong> in the Post period (9 → 3 mentions), shifting competitive pressure around T&E/AP blends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Tipalti and Esker emerging as threats</strong> — Both roughly doubled their presence</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="mentions" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="mentions">Mentions</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="mentions">
              <CompetitorChart />
            </TabsContent>
            <TabsContent value="detail">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {competitors.filter(c => c.name !== "Other / Unspecified").map((competitor, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{competitor.name}</h3>
                  {getTrendIcon(competitor.trend)}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pre Mentions:</span>
                    <span className="font-semibold">{competitor.preMentions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Post Mentions:</span>
                    <span className="font-semibold">{competitor.postMentions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Change:</span>
                    <span className={`font-semibold ${competitor.trend === 'up' ? 'text-destructive' : competitor.trend === 'down' ? 'text-success' : 'text-muted-foreground'}`}>
                      {competitor.change}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 p-4 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              <strong>Data Note:</strong> The competitive data presented here is limited in scope. However, this analysis reflects what we know is happening in the market, particularly against Medius and Basware. A key action for 2026 is ensuring adherence to comprehensive data capture and maintaining all competitive intelligence in HubSpot.
            </p>
          </div>

          <Card className="mt-12 p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/40 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Immediate Product Improvements
              </h3>
              <p className="text-xl text-muted-foreground font-semibold">
                Enabling Our Competitive Response
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto text-center">
              What we are going to do differently this year is to focus on our target market segment and ICP, reinforced with critical product roadmap items that will strengthen our competitive position:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-background/80 border-2 border-primary/30 rounded-lg hover:border-primary/50 transition-all shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl">Analytics</h4>
                </div>
                <p className="text-muted-foreground">Enhanced visibility and insights to demonstrate value and ROI</p>
              </div>
              <div className="p-6 bg-background/80 border-2 border-primary/30 rounded-lg hover:border-primary/50 transition-all shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl">Chatbot</h4>
                </div>
                <p className="text-muted-foreground">AI-powered support improving user experience and efficiency</p>
              </div>
              <div className="p-6 bg-background/80 border-2 border-primary/30 rounded-lg hover:border-primary/50 transition-all shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl">iPaaS</h4>
                </div>
                <p className="text-muted-foreground">Seamless integration capabilities for complex multi-ERP environments</p>
              </div>
              <div className="p-6 bg-background/80 border-2 border-primary/30 rounded-lg hover:border-primary/50 transition-all shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl">SLM</h4>
                </div>
                <p className="text-muted-foreground">Supplier lifecycle management extending our platform value</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg max-w-4xl mx-auto">
              <p className="text-muted-foreground text-center italic font-medium">
                These roadmap items directly address product weaknesses identified in competitive losses and will enable our strategy execution in the mid-market, multi-ERP segment.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
