import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ERPChart } from "@/components/charts/ERPChart";
import { ERPVolumeChart } from "@/components/charts/ERPVolumeChart";

export const ERPAnalysis = () => {
  const erpData = [
    { name: "Oracle", prePeriod: { opps: 19, wins: 5, rate: 26 }, postPeriod: { opps: 15, wins: 4, rate: 27 }, trend: "stable", status: "strong" },
    { name: "Infor", prePeriod: { opps: 12, wins: 3, rate: 25 }, postPeriod: { opps: 11, wins: 3, rate: 27 }, trend: "stable", status: "strong" },
    { name: "JD Edwards", prePeriod: { opps: 8, wins: 3, rate: 38 }, postPeriod: { opps: 6, wins: 2, rate: 33 }, trend: "stable", status: "strong" },
    { name: "SAP", prePeriod: { opps: 19, wins: 4, rate: 21 }, postPeriod: { opps: 23, wins: 3, rate: 13 }, trend: "down", status: "declining" },
    { name: "Dynamics", prePeriod: { opps: 11, wins: 1, rate: 9 }, postPeriod: { opps: 10, wins: 2, rate: 20 }, trend: "up", status: "weak" },
    { name: "Other ERPs", prePeriod: { opps: 36, wins: 3, rate: 8 }, postPeriod: { opps: 23, wins: 1, rate: 4 }, trend: "down", status: "avoid" },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-success" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getStatusColor = (status: string) => {
    if (status === "strong") return "text-success";
    if (status === "declining") return "text-warning";
    if (status === "weak") return "text-muted-foreground";
    return "text-destructive";
  };

  return (
    <section id="analysis" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Win Patterns by <span className="text-primary">ERP System</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Jan '23 - July '24 vs July '24 - Nov '25
            </p>
          </div>

          <Tabs defaultValue="win-rate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-6">
              <TabsTrigger value="win-rate">Win Rate</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="win-rate">
              <ERPChart />
            </TabsContent>
            <TabsContent value="volume">
              <ERPVolumeChart />
            </TabsContent>
            <TabsContent value="detail">
              <div className="space-y-4 mb-12">
            {erpData.map((erp, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-xl">{erp.name}</h3>
                    {getTrendIcon(erp.trend)}
                    <span className={`text-sm font-medium ${getStatusColor(erp.status)}`}>
                      {erp.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Pre Opps</div>
                    <div className="text-lg font-semibold">{erp.prePeriod.opps}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Pre Wins</div>
                    <div className="text-lg font-semibold text-success">{erp.prePeriod.wins}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Pre Rate</div>
                    <div className="text-lg font-semibold">{erp.prePeriod.rate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post Opps</div>
                    <div className="text-lg font-semibold">{erp.postPeriod.opps}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post Wins</div>
                    <div className="text-lg font-semibold text-success">{erp.postPeriod.wins}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post Rate</div>
                    <div className="text-lg font-semibold">{erp.postPeriod.rate}%</div>
                  </div>
                </div>
              </Card>
            ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="p-8 bg-primary/10 border-primary/30">
            <p className="text-lg font-medium mb-6 text-foreground">
              ERP Fit is a clear predictor of success with true winning ERP's / ecosystems emerging
            </p>
            <h3 className="font-semibold text-xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Oracle, Infor, JD Edwards remain strongest ERPs with consistent win rates</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">SAP worsened significantly post-2024 – more volume but fewer wins</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Microsoft ERPs remain weak fit, dominated by Medius → low wins</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">"Other ERPs" are high-volume but extremely low win potential</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
