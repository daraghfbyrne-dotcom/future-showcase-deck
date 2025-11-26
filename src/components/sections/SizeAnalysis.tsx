import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SizeSegmentChart } from "@/components/charts/SizeSegmentChart";
import { SizeVolumeChart } from "@/components/charts/SizeVolumeChart";

export const SizeAnalysis = () => {
  const sizeSegments = [
    { range: "€50–150M", pre: { opps: 28, wins: 7, rate: 25 }, post: { opps: 24, wins: 5, rate: 21 }, target: true },
    { range: "€100–300M", pre: { opps: 38, wins: 6, rate: 16 }, post: { opps: 32, wins: 5, rate: 16 }, target: true },
    { range: "€300–600M", pre: { opps: 34, wins: 6, rate: 18 }, post: { opps: 28, wins: 5, rate: 18 }, target: true },
    { range: "€600M–1B", pre: { opps: 21, wins: 4, rate: 19 }, post: { opps: 18, wins: 2, rate: 11 }, target: false },
    { range: "€1B+", pre: { opps: 10, wins: 2, rate: 20 }, post: { opps: 7, wins: 1, rate: 14 }, target: false },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Sweet Spot by <span className="text-primary">Company Size</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Revenue-based segmentation analysis
            </p>
          </div>

          <Tabs defaultValue="win-rate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-6">
              <TabsTrigger value="win-rate">Win Rate</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="win-rate">
              <SizeSegmentChart />
            </TabsContent>
            <TabsContent value="volume">
              <SizeVolumeChart />
            </TabsContent>
            <TabsContent value="detail">
              <div className="space-y-4 mb-12">
            {sizeSegments.map((segment, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-card border-border transition-all ${
                  segment.target ? 'border-primary/50 shadow-lg shadow-primary/10' : 'opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-xl">{segment.range}</h3>
                    {segment.target && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                        <Target className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary">Target Segment</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Pre Opps</div>
                    <div className="text-lg font-semibold">{segment.pre.opps}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Pre Wins</div>
                    <div className="text-lg font-semibold text-success">{segment.pre.wins}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Pre Rate</div>
                    <div className="text-lg font-semibold">{segment.pre.rate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post Opps</div>
                    <div className="text-lg font-semibold">{segment.post.opps}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post Wins</div>
                    <div className="text-lg font-semibold text-success">{segment.post.wins}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post Rate</div>
                    <div className="text-lg font-semibold">{segment.post.rate}%</div>
                  </div>
                </div>
              </Card>
            ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="p-8 bg-primary/10 border-primary/30">
            <h3 className="font-semibold text-xl mb-4">Key Findings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">€50–150M and €300–600M remain highest-conversion segments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">€100–300M remains the highest-volume band with consistent performance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Enterprise (&gt;€600M) weakened significantly post-2024 → avoid this segment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-1 mt-2 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>ICP sweet spot: €50M–€600M revenue mid-market</strong></span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
