import { Card } from "@/components/ui/card";
import { Target, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoiceVolumeChart } from "@/components/charts/InvoiceVolumeChart";

export const InvoiceVolumeAnalysis = () => {
  const volumeSegments = [
    { range: "0-20k", prePeriod: 17.2, postPeriod: 36.8, change: 19.6, target: true, zone: "core", note: "Stable volume, very strong and improving performance" },
    { range: "20k–30k", prePeriod: 25.0, postPeriod: 17.6, change: -7.4, target: true, zone: "core", note: "Core segment with solid performance" },
    { range: "30k–45k", prePeriod: 10.0, postPeriod: 6.7, change: -3.3, target: false, zone: "secondary", note: "Performance declining" },
    { range: "45k–60k", prePeriod: 15.4, postPeriod: 5.9, change: -9.5, target: false, zone: "secondary", note: "Significant decline" },
    { range: "60k–120k", prePeriod: 28.6, postPeriod: 17.4, change: -11.2, target: true, zone: "secondary", note: "Meaningful band but slipping — needs attention" },
    { range: "120k–1.8m", prePeriod: 33.3, postPeriod: 0.0, change: -33.3, target: false, zone: "worry", note: "Still generating pipeline but closing none" },
  ];

  return (
    <section id="invoice-volume" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Win Patterns by <span className="text-primary">Invoice Volume</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Jan 2023 → Nov 2025 — Performance by annual invoice processing volume
            </p>
          </div>

          <Card className="mb-8 p-8 bg-primary/10 border-primary/30">
            <h3 className="font-semibold text-xl mb-4">GTM Implications (Invoice Volume)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="font-semibold text-success">Core: c.30k invoices P/A</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground ml-5">
                  <li>• Stable volume, very strong and improving performance at the low end</li>
                  <li>• +19.6 pts improvement in 0-20k segment</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-semibold text-primary">Secondary: 60k – 120k invoices P/A</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground ml-5">
                  <li>• Still a meaningful band, but performance slipped — needs attention</li>
                  <li>• -11.2 pts decline requires focus</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="font-semibold text-destructive">Worry Zone: &gt;120k invoices P/A</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground ml-5">
                  <li>• Still generating pipeline (17 deals in P2) but are <strong>closing none</strong></li>
                  <li>• That's expensive, demoralising pipeline</li>
                </ul>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="win-rate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="win-rate">Win Rate</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="win-rate">
              <InvoiceVolumeChart />
            </TabsContent>
            <TabsContent value="detail">
              <div className="space-y-4 mb-12">
                {volumeSegments.map((segment, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 bg-card border-border transition-all ${
                      segment.target ? 'border-primary/50 shadow-lg shadow-primary/10' : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-xl">{segment.range} invoices P/A</h3>
                        {segment.target && (
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                            <Target className="w-3 h-3 text-primary" />
                            <span className="text-xs font-medium text-primary">Target Segment</span>
                          </div>
                        )}
                        {segment.zone === "worry" && (
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-destructive/20 border border-destructive/30">
                            <AlertTriangle className="w-3 h-3 text-destructive" />
                            <span className="text-xs font-medium text-destructive">Worry Zone</span>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground italic">{segment.note}</span>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Pre-July 2024</div>
                        <div className="text-lg font-semibold">{segment.prePeriod}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Post-July 2024</div>
                        <div className="text-lg font-semibold">{segment.postPeriod}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Change</div>
                        <div className={`text-lg font-semibold flex items-center gap-1 ${
                          segment.change > 0 ? 'text-success' : 'text-destructive'
                        }`}>
                          {segment.change > 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {segment.change > 0 ? '+' : ''}{segment.change} pts
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Status</div>
                        <div className={`text-lg font-semibold ${
                          segment.zone === "core" ? 'text-success' : 
                          segment.zone === "secondary" ? 'text-primary' : 'text-destructive'
                        }`}>
                          {segment.zone === "core" ? 'Core' : 
                           segment.zone === "secondary" ? 'Secondary' : 'Avoid'}
                        </div>
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
