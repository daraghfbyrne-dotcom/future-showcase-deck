import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ChannelContributionChart } from "@/components/charts/ChannelContributionChart";
import { Target, CheckCircle2 } from "lucide-react";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const channelMonthlyData = {
  ppc: {
    name: "PPC",
    total: "€195,747",
    color: "border-blue-500",
    pipelineValue: [8898, 35590, 8898, 26693, 17795, 0, 17795, 17795, 17795, 26693, 17795, 0],
    qualified: [0.08, 0.33, 0.08, 0.25, 0.16, 0, 0.16, 0.16, 0.16, 0.25, 0.16, 0],
    salesLeads: [0.75, 3.00, 0.75, 2.25, 1.50, 0, 1.50, 1.50, 1.50, 2.25, 1.50, 0],
    totalQualified: 1.81,
    totalSalesLeads: 16.48,
  },
  sdr: {
    name: "SDR",
    total: "€6,043,695",
    color: "border-primary",
    pipelineValue: [413000, 465000, 516000, 620000, 620000, 671000, 310000, 310000, 671000, 671000, 516000, 258000],
    qualified: [4.35, 4.89, 5.44, 6.52, 6.52, 7.07, 3.26, 3.26, 7.07, 7.07, 5.44, 2.72],
    salesLeads: [6.21, 6.99, 7.77, 9.32, 9.32, 10.10, 4.66, 4.66, 10.10, 10.10, 7.77, 3.88],
    totalQualified: 63.62,
    totalSalesLeads: 90.88,
  },
  aeGenerated: {
    name: "AE Generated",
    total: "€3,460,531",
    color: "border-accent",
    pipelineValue: [299058, 341781, 256336, 341781, 256336, 256336, 256336, 256336, 341781, 341781, 256336, 256336],
    qualified: [2.72, 3.11, 2.33, 3.11, 2.33, 2.33, 2.33, 2.33, 3.11, 3.11, 2.33, 2.33],
    salesLeads: [6.80, 7.77, 5.83, 7.77, 5.83, 5.83, 5.83, 5.83, 7.77, 7.77, 5.83, 5.83],
    totalQualified: 31.46,
    totalSalesLeads: 78.65,
  },
  webinars: {
    name: "Webinars",
    total: "€1,041,935",
    color: "border-purple-500",
    pipelineValue: [77180, 77180, 77180, 77180, 77180, 77180, 77180, 77180, 115771, 115771, 115771, 77180],
    qualified: [0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 1.07, 1.07, 1.07, 0.71],
    salesLeads: [2.38, 2.38, 2.38, 2.38, 2.38, 2.38, 2.38, 2.38, 3.57, 3.57, 3.57, 2.38],
    totalQualified: 9.65,
    totalSalesLeads: 32.16,
  },
  organic: {
    name: "Organic",
    total: "€3,131,956",
    color: "border-green-500",
    pipelineValue: [251675, 251675, 251675, 279639, 279639, 251675, 251675, 251675, 279639, 279639, 279639, 223711],
    qualified: [2.33, 2.33, 2.33, 2.59, 2.59, 2.33, 2.33, 2.33, 2.59, 2.59, 2.59, 2.07],
    salesLeads: [7.77, 7.77, 7.77, 8.63, 8.63, 7.77, 7.77, 7.77, 8.63, 8.63, 8.63, 6.90],
    totalQualified: 29.00,
    totalSalesLeads: 96.67,
  },
  events: {
    name: "Events",
    total: "€2,709,701",
    color: "border-success",
    pipelineValue: [0, 75503, 75503, 390096, 75503, 801165, 314594, 151005, 0, 285232, 314594, 226508],
    qualified: [0, 0.70, 0.70, 3.61, 0.70, 7.42, 2.91, 1.40, 0, 2.64, 2.91, 2.10],
    salesLeads: [0, 2.69, 2.69, 13.89, 2.69, 28.53, 11.20, 5.38, 0, 10.16, 11.20, 8.07],
    totalQualified: 25.09,
    totalSalesLeads: 96.50,
  },
  marketingAutomation: {
    name: "Marketing Automation (email nurture)",
    total: "€395,449",
    color: "border-orange-500",
    pipelineValue: [0, 0, 0, 49431, 0, 49431, 0, 98862, 0, 49431, 148293, 0],
    qualified: [0, 0, 0, 0.35, 0, 0.35, 0, 0.71, 0, 0.35, 1.06, 0],
    salesLeads: [0, 0, 0, 1.18, 0, 1.18, 0, 2.35, 0, 1.18, 3.53, 0],
    totalQualified: 2.82,
    totalSalesLeads: 9.42,
  },
  partnerships: {
    name: "Partnerships (incl 3.8m TA)",
    total: "€4,140,986",
    color: "border-chart-4",
    pipelineValue: [0, 155355, 345859, 345859, 345859, 388387, 194194, 345859, 582581, 582581, 582581, 271871],
    qualified: [0, 1.41, 3.14, 3.14, 3.14, 3.53, 1.77, 3.14, 5.30, 5.30, 5.30, 2.47],
    salesLeads: [0, 4.71, 10.48, 10.48, 10.48, 11.77, 5.88, 10.48, 17.65, 17.65, 17.65, 8.24],
    totalQualified: 37.65,
    totalSalesLeads: 125.48,
  },
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatCurrency = (value: number) => {
  if (value === 0) return "-";
  if (value >= 1000000) return `€${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `€${(value / 1000).toFixed(0)}K`;
  return `€${value.toFixed(0)}`;
};

const ChannelDetailTable = ({ channel }: { channel: typeof channelMonthlyData.sdr }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-xs">
      <thead>
        <tr className="border-b border-border">
          <th className="py-2 px-2 text-left font-semibold text-muted-foreground">Metric</th>
          {months.map((month) => (
            <th key={month} className="py-2 px-2 text-center font-semibold text-muted-foreground">{month}</th>
          ))}
          <th className="py-2 px-2 text-center font-bold text-foreground bg-primary/10">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border/50 hover:bg-muted/30">
          <td className="py-2 px-2 font-medium">Pipeline Value</td>
          {channel.pipelineValue.map((value, idx) => (
            <td key={idx} className="py-2 px-2 text-center">{formatCurrency(value)}</td>
          ))}
          <td className="py-2 px-2 text-center font-bold bg-primary/10">{channel.total}</td>
        </tr>
        <tr className="border-b border-border/50 hover:bg-muted/30">
          <td className="py-2 px-2 font-medium">Qualified Opps</td>
          {channel.qualified.map((value, idx) => (
            <td key={idx} className="py-2 px-2 text-center">{value === 0 ? "-" : value.toFixed(2)}</td>
          ))}
          <td className="py-2 px-2 text-center font-bold bg-primary/10">{channel.totalQualified.toFixed(2)}</td>
        </tr>
        <tr className="border-b border-border/50 hover:bg-muted/30">
          <td className="py-2 px-2 font-medium">Sales Leads</td>
          {channel.salesLeads.map((value, idx) => (
            <td key={idx} className="py-2 px-2 text-center">{value === 0 ? "-" : value.toFixed(2)}</td>
          ))}
          <td className="py-2 px-2 text-center font-bold bg-primary/10">{channel.totalSalesLeads.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const PipelineTargets = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Key Points Summary */}
              <div className="mb-8">
                <KeyPointsSummary
                  points={[
                    "€21.1M incremental pipeline required to hit €3.8M ARR target",
                    "SDR largest channel at €6.1M with 5 opps/month target",
                    "Marketing contributing €7.5M through proven channels",
                    "Partnerships targeting €4.1M including Tungsten Alliance"
                  ]}
                />
              </div>

              <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 text-center">
                  Targeted Outcomes - <span className="text-primary">Pipeline</span>
                </h2>
                
                {/* Centered cards */}
                <div className="flex justify-center gap-6 mb-10 flex-wrap">
                  <div className="flex flex-col justify-between text-center p-4 bg-card rounded-lg border border-chart-3/30 min-h-[120px] min-w-[180px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">ARR Target</div>
                    <div className="text-3xl font-bold text-chart-3 mt-auto">€3.8M</div>
                  </div>
                  <div className="flex flex-col justify-between text-center p-4 bg-card rounded-lg border border-success/30 min-h-[120px] min-w-[180px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Incremental Pipeline Required*</div>
                    <div className="text-3xl font-bold text-success mt-auto">€21.1M</div>
                  </div>
                  <div className="flex flex-col justify-between text-center p-4 bg-card rounded-lg border border-chart-4/30 min-h-[120px] min-w-[180px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Avg Monthly Pipeline Required</div>
                    <div className="text-3xl font-bold text-chart-4 mt-auto">€1.75M</div>
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
                      <span className="text-2xl font-bold text-primary">€6.1M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">2 Additional SDRs. 5 Opps per month pure outbound = €510k per mth pipeline. Nov/Dec 2025 Run Rate €500k pm. Av Deal size €95k.</p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border-l-4 border-accent">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">AE Generated</h4>
                      <span className="text-2xl font-bold text-accent">€3.5M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Target = average 1 Sales Lead per rep per month & 2 qualified opps to deliver €290k per month pipeline.</p>
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

                {/* Monthly Channel Breakdown */}
                <h3 className="font-display font-bold text-2xl mb-6 text-center mt-10">
                  Monthly Targets by Channel
                </h3>
                <Accordion type="multiple" className="space-y-2">
                  {Object.values(channelMonthlyData).map((channel) => (
                    <AccordionItem key={channel.name} value={channel.name} className={`border rounded-lg px-4 ${channel.color}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between w-full pr-4">
                          <span className="font-medium">{channel.name}</span>
                          <span className="text-sm font-bold text-primary">{channel.total}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4">
                        <ChannelDetailTable channel={channel} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Totals Summary */}
                <div className="mt-8 p-4 bg-card rounded-lg border border-primary/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Total Pipeline</div>
                      <div className="text-2xl font-bold text-primary">€21,120,000</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Total Qualified Opps</div>
                      <div className="text-2xl font-bold text-success">201.10</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Total Sales Leads</div>
                      <div className="text-2xl font-bold text-accent">546.23</div>
                    </div>
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
