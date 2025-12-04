import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SizeSegmentChart } from "@/components/charts/SizeSegmentChart";
import { SizeVolumeChart } from "@/components/charts/SizeVolumeChart";

export const SizeAnalysis = () => {
  const sizeSegments = [
    { range: "€500m–1b", deals: 44, wins: 13, rate: 29.5, target: true, note: "Highest volume of wins" },
    { range: "€250m–499m", deals: 37, wins: 10, rate: 27.0, target: true, note: "Strong secondary" },
    { range: "€5b+", deals: 19, wins: 5, rate: 26.3, target: true, note: "Strategic ABM" },
    { range: "€1b–5b", deals: 37, wins: 6, rate: 16.2, target: false, note: "Collapse post-2024" },
    { range: "€50m–99m", deals: 19, wins: 2, rate: 10.5, target: false, note: "Inconsistent fit" },
    { range: "€5m–49m", deals: 30, wins: 3, rate: 10.0, target: false, note: "Very low win yield" },
    { range: "€100m–249m", deals: 42, wins: 4, rate: 9.5, target: false, note: "Low conversion" },
    { range: "€0–5m", deals: 12, wins: 0, rate: 0.0, target: false, note: "Non-viable" },
  ];

  return (
    <section id="size" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Sweet Spot by <span className="text-primary">Company Size</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Jan 2023 → Nov 2025 — Revenue-based segmentation analysis
            </p>
          </div>

          <Card className="mb-8 p-8 bg-primary/10 border-primary/30">
            <h3 className="font-semibold text-xl mb-4">Key Findings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">€500m–1b is the core sweet spot with 29.5% win rate and highest volume of wins</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">€250m–499m strong secondary target segment at 27% win rate</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">€5b+ viable for strategic ABM with 26.3% win rate — <em>however, volume of opportunities and wins is low; proceed with caution</em></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">€1b–5b and €250m–499m collapsed post-2024 — inconsistent fit now</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Sub-€50m revenue continues to be very low win yield — avoid</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-1 mt-2 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>ICP Focus €250m – 1bn</strong></span>
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
                  <span className="text-sm text-muted-foreground italic">{segment.note}</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Deals</div>
                    <div className="text-lg font-semibold">{segment.deals}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Wins</div>
                    <div className="text-lg font-semibold text-success">{segment.wins}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Win Rate</div>
                    <div className="text-lg font-semibold">{segment.rate}%</div>
                  </div>
                </div>
              </Card>
            ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
