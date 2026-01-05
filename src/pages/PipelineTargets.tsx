import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ChannelContributionChart } from "@/components/charts/ChannelContributionChart";

const PipelineTargets = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 text-center">
                  Targeted Outcomes - <span className="text-primary">Pipeline</span>
                </h2>
                
                <div className="grid md:grid-cols-5 gap-6 mb-10">
                  <div className="flex flex-col justify-between text-center p-4 bg-card rounded-lg border border-chart-3/30 min-h-[120px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">ARR Target</div>
                    <div className="text-3xl font-bold text-chart-3 mt-auto">€3.8M</div>
                  </div>
                  <div className="flex flex-col justify-between text-center p-4 bg-card rounded-lg border border-success/30 min-h-[120px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Incremental Pipeline Required</div>
                    <div className="text-3xl font-bold text-success mt-auto">€21.1M</div>
                  </div>
                  <div className="flex flex-col justify-between text-center p-4 bg-card rounded-lg border border-chart-4/30 min-h-[120px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Avg Monthly Pipeline Required</div>
                    <div className="text-3xl font-bold text-chart-4 mt-auto">€1.76M</div>
                  </div>
                </div>

                {/* Pipeline Contribution by Channel */}
                <h3 className="font-display font-bold text-2xl mb-6 text-center">
                  Pipeline Contribution by Channel <span className="text-muted-foreground">(full year)</span>
                </h3>

                {/* Bar Chart */}
                <div className="mb-8">
                  <ChannelContributionChart />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">SDR</h4>
                      <span className="text-2xl font-bold text-primary">€6M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">1 Additional SDR. 6 Opps per month pure outbound = €650k per mth pipeline. Q4 2025 Run Rate €500k pm. Av Deal size €95k.</p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border-l-4 border-accent">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">AE Generated</h4>
                      <span className="text-2xl font-bold text-accent">€3.5M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Hiring 2 additional Reps. Assume churn. Target to average 6 qualified opps per month from 5 sales reps = €650k per month pipeline. Oct/Nov run rate €500k per mth</p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border-l-4 border-success">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">Marketing</h4>
                      <span className="text-2xl font-bold text-success">€7.5M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Mirror channels that have delivered. Invest heaviest where we have had wins. Research Project (limited impact pre July). Brand refresh impact & new optimized site.</p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border-l-4 border-chart-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">Partnerships</h4>
                      <span className="text-2xl font-bold text-chart-4">€4.1M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">2025 Pipeline €1.6m. TA €3.8M pipe based on 530k ARR to SoftCo. Risk Xelix partnership winding down. Target onboard 3 new ptrs by end Q1 2026.</p>
                  </div>
                </div>

                {/* Linearity Profile Table */}
                <h3 className="font-display font-bold text-2xl mb-6 text-center mt-10">
                  Linearity Profile
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">FY26</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">New Business</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">New Business Total €</th>
                        <th className="py-3 px-4 pl-8 text-center font-semibold text-muted-foreground">Account Mgmt %</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">Account Management Total €</th>
                        <th className="py-3 px-4 text-center font-bold text-foreground bg-primary/15">Total €</th>
                        <th className="py-3 px-4 text-center font-bold text-foreground bg-primary/15">Total %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 text-center font-medium">Q1</td>
                        <td className="py-3 px-4 text-center">16%</td>
                        <td className="py-3 px-4 text-center">€608,000</td>
                        <td className="py-3 px-4 pl-8 text-center">20%</td>
                        <td className="py-3 px-4 text-center">€200,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">€808,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">17%</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 text-center font-medium">Q2</td>
                        <td className="py-3 px-4 text-center">21%</td>
                        <td className="py-3 px-4 text-center">€798,000</td>
                        <td className="py-3 px-4 pl-8 text-center">28%</td>
                        <td className="py-3 px-4 text-center">€280,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">€1,078,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">22%</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 text-center font-medium">Q3</td>
                        <td className="py-3 px-4 text-center">23%</td>
                        <td className="py-3 px-4 text-center">€874,000</td>
                        <td className="py-3 px-4 pl-8 text-center">22%</td>
                        <td className="py-3 px-4 text-center">€220,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">€1,094,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">23%</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 text-center font-medium">Q4</td>
                        <td className="py-3 px-4 text-center">40%</td>
                        <td className="py-3 px-4 text-center">€1,520,000</td>
                        <td className="py-3 px-4 pl-8 text-center">30%</td>
                        <td className="py-3 px-4 text-center">€300,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">€1,820,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/10">38%</td>
                      </tr>
                      <tr className="bg-primary/10 font-semibold">
                        <td className="py-3 px-4 text-center">Total</td>
                        <td className="py-3 px-4 text-center">100%</td>
                        <td className="py-3 px-4 text-center">€3,800,000</td>
                        <td className="py-3 px-4 pl-8 text-center">100%</td>
                        <td className="py-3 px-4 text-center">€1,000,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/20">€4,800,000</td>
                        <td className="py-3 px-4 text-center font-bold bg-primary/20">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Tungsten ARR Table */}
                <h3 className="font-display font-bold text-2xl mb-6 text-center mt-10">
                  Tungsten ARR
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm max-w-md mx-auto">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 text-left font-semibold text-muted-foreground">Quarter</th>
                        <th className="py-3 px-4 text-center font-semibold text-muted-foreground">% Allocation</th>
                        <th className="py-3 px-4 text-right font-semibold text-muted-foreground">ARR Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium">Q1</td>
                        <td className="py-3 px-4 text-center">17%</td>
                        <td className="py-3 px-4 text-right font-medium">€85,000</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium">Q2</td>
                        <td className="py-3 px-4 text-center">22%</td>
                        <td className="py-3 px-4 text-right font-medium">€110,000</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium">Q3</td>
                        <td className="py-3 px-4 text-center">23%</td>
                        <td className="py-3 px-4 text-right font-medium">€115,000</td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium">Q4</td>
                        <td className="py-3 px-4 text-center">38%</td>
                        <td className="py-3 px-4 text-right font-medium">€190,000</td>
                      </tr>
                      <tr className="bg-primary/10 font-semibold">
                        <td className="py-3 px-4">Total</td>
                        <td className="py-3 px-4 text-center">100%</td>
                        <td className="py-3 px-4 text-right">€500,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">SoftCo 2026 Strategy • Confidential</p>
        </div>
      </footer>
    </div>
  );
};

export default PipelineTargets;
