import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndustryChart } from "@/components/charts/IndustryChart";
import { IndustryVolumeChart } from "@/components/charts/IndustryVolumeChart";

export const IndustryAnalysis = () => {
  const highPotentialIndustries = [
    { name: "Manufacturing", pre: { opps: 39, wins: 8, rate: 20 }, post: { opps: 28, wins: 4, rate: 14 }, status: "high-volume" },
    { name: "Transport & Logistics", pre: { opps: 4, wins: 3, rate: 75 }, post: { opps: 4, wins: 0, rate: 0 }, status: "collapsed" },
  ];

  const neutralIndustries = [
    { name: "Media & Telecom", pre: { opps: 4, wins: 1, rate: 25 }, post: { opps: 2, wins: 2, rate: 100 }, status: "strong-icp" },
    { name: "Health Services", pre: { opps: 7, wins: 2, rate: 29 }, post: { opps: 7, wins: 2, rate: 29 }, status: "strong-icp" },
    { name: "Food & Hospitality", pre: { opps: 9, wins: 2, rate: 22 }, post: { opps: 11, wins: 2, rate: 18 }, status: "stable" },
  ];

  const decliningIndustries = [
    { name: "Natural Resources", pre: { opps: 7, wins: 3, rate: 43 }, post: { opps: 0, wins: 0, rate: 0 }, status: "nonviable" },
    { name: "Retail", pre: { opps: 13, wins: 2, rate: 15 }, post: { opps: 0, wins: 0, rate: 0 }, status: "nonviable" },
    { name: "Financial Services", pre: { opps: 9, wins: 0, rate: 0 }, post: { opps: 5, wins: 0, rate: 0 }, status: "unwinnable" },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; className: string }> = {
      "high-volume": { label: "High Volume", className: "bg-primary/20 text-primary border-primary/30" },
      "collapsed": { label: "Collapsed", className: "bg-destructive/20 text-destructive border-destructive/30" },
      "strong-icp": { label: "Strong ICP", className: "bg-success/20 text-success border-success/30" },
      "stable": { label: "Stable", className: "bg-chart-2/20 text-chart-2 border-chart-2/30" },
      "nonviable": { label: "Non-viable", className: "bg-destructive/20 text-destructive border-destructive/30" },
      "unwinnable": { label: "Avoid", className: "bg-muted text-muted-foreground border-muted" },
    };
    const variant = variants[status] || variants["stable"];
    return <Badge variant="outline" className={variant.className}>{variant.label}</Badge>;
  };

  const renderIndustryCard = (industry: typeof highPotentialIndustries[0]) => (
    <Card key={industry.name} className="p-6 bg-card border-border hover:border-primary/30 transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg">{industry.name}</h3>
        {getStatusBadge(industry.status)}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-sm text-muted-foreground mb-3">Jan '23 - June '24</div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Opportunities:</span>
              <span className="font-semibold">{industry.pre.opps}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Wins:</span>
              <span className="font-semibold text-success">{industry.pre.wins}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Win Rate:</span>
              <span className="font-semibold">{industry.pre.rate}%</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-3">July '24 - Nov '25</div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Opportunities:</span>
              <span className="font-semibold">{industry.post.opps}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Wins:</span>
              <span className="font-semibold text-success">{industry.post.wins}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Win Rate:</span>
              <span className="font-semibold">{industry.post.rate > 0 ? `${industry.post.rate}%` : '–'}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="industry" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Performance by <span className="text-primary">Industry</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Identifying high-potential sectors and areas to avoid
            </p>
          </div>

          <Card className="mb-8 p-8 bg-primary/10 border-primary/30">
            <h3 className="font-semibold text-xl mb-4">Strategic Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Manufacturing remains highest-volume industry despite win-rate decline — needs action, not abandonment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Media/Telco and Health Services show stable or improving win rates — strong ICP segments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-2 mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Food & Hospitality stable win rate → predictable, scalable segment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Any opportunities within Retail, Natural Resources, and Financial Services need to be reviewed and qualified rigorously</span>
              </li>
            </ul>
          </Card>

          <Tabs defaultValue="win-rate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-6">
              <TabsTrigger value="win-rate">Win Rate</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="win-rate">
              <IndustryChart />
            </TabsContent>
            <TabsContent value="volume">
              <IndustryVolumeChart />
            </TabsContent>
            <TabsContent value="detail">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">High-Potential Industries</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {highPotentialIndustries.map(renderIndustryCard)}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-chart-2">Neutral / Recoverable Industries</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {neutralIndustries.map(renderIndustryCard)}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-destructive">Neutral & Review Required</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {decliningIndustries.map(renderIndustryCard)}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
