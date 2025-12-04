import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, TrendingDown, Minus, BarChart3, MessageSquareText, Link2, Users, Rocket, Zap } from "lucide-react";
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

  const productImprovements = [
    {
      name: "Analytics",
      icon: BarChart3,
      description: "Enhanced visibility and insights to demonstrate value and ROI",
      impact: "Value Demonstration"
    },
    {
      name: "Chatbot",
      icon: MessageSquareText,
      description: "AI-powered support improving user experience and efficiency",
      impact: "User Experience"
    },
    {
      name: "iPaaS",
      icon: Link2,
      description: "Seamless integration capabilities for complex multi-ERP environments",
      impact: "Integration Power"
    },
    {
      name: "SLM",
      icon: Users,
      description: "Supplier lifecycle management extending our platform value",
      impact: "Platform Extension"
    }
  ];

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

          {/* Enhanced Product Improvements Section */}
          <div className="mt-16 relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 rounded-3xl -z-10" />
            
            <Card className="p-12 bg-gradient-to-br from-primary/15 via-background to-secondary/15 border-2 border-primary/50 shadow-2xl shadow-primary/20 rounded-2xl overflow-hidden relative">
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Critical for 2026 Success</span>
                </div>
                <h3 className="font-display font-bold text-4xl md:text-5xl mb-4">
                  Product <span className="text-primary">Improvements</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Four strategic roadmap items that directly address competitive weaknesses and enable our market position
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
                {productImprovements.map((product, index) => (
                  <div 
                    key={index}
                    className="group p-8 bg-background/90 border-2 border-primary/30 rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        <product.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-2xl">{product.name}</h4>
                        </div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary/30 text-secondary-foreground mb-3">
                          {product.impact}
                        </span>
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-primary/15 border-2 border-primary/40 rounded-xl max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-foreground">Strategic Impact</h4>
                    <p className="text-muted-foreground font-medium">
                      These roadmap items directly address product weaknesses identified in competitive losses against Medius and Coupa, and will enable our strategy execution in the mid-market, multi-ERP segment.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
