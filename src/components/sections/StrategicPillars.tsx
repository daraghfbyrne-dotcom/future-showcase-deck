import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Zap, Rocket, Sparkles, BarChart3 } from "lucide-react";

export const StrategicPillars = () => {
  return (
    <section id="strategy" className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
              2026 Strategy
            </h2>
          </div>

          {/* Strategy Statement */}
          <Card className="p-8 md:p-10 mb-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-4 border-primary/40 shadow-xl">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-display font-bold text-foreground leading-relaxed">
                Focus on upper–mid-market and enterprise organisations (€250m–€1bn+ revenue) running Oracle, Infor, or JD Edwards, in industries where scalable AP automation delivers measurable operational impact, using tightly defined ICP targeting, vertical-specific value propositions, and ERP-aligned go-to-market motions.
              </p>
            </div>
          </Card>

          {/* 1. Strategic Imperatives */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              1. Strategic Imperatives <span className="text-muted-foreground">(The Big Bets)</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 bg-gradient-to-br from-primary via-primary/90 to-primary/80 border-4 border-primary shadow-2xl hover:shadow-primary/50 transition-all">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                  <Rocket className="w-11 h-11 text-white" />
                </div>
                <h4 className="font-display font-bold text-3xl mb-4 text-white">Bet 1 — Own the Category</h4>
                <p className="text-white/95 text-lg font-medium mb-4">Multi-ERP, High-Complexity AP Automation</p>
                <p className="text-white/90 text-base leading-relaxed">
                  We will define and lead the category built around the problem only SoftCo can solve: Controlling AP across multiple ERPs, multiple entities, and complex approvals.
                </p>
              </Card>

              <Card className="p-10 bg-gradient-to-br from-accent via-accent/90 to-accent/80 border-4 border-accent shadow-2xl hover:shadow-accent/50 transition-all">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-11 h-11 text-white" />
                </div>
                <h4 className="font-display font-bold text-3xl mb-4 text-white">Bet 2 — Win the Upper Mid-Market</h4>
                <p className="text-white/95 text-lg font-medium mb-4">€250m–€1bn+ Revenue</p>
                <div className="text-white/90 text-base leading-relaxed space-y-3">
                  <p>Target upper–mid-market and enterprise organisations running Oracle, Infor, or JD Edwards — where:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Scalable AP automation delivers measurable operational impact</li>
                    <li>• Our ICP targeting is tightly defined</li>
                    <li>• Vertical-specific value propositions resonate</li>
                    <li>• ERP-aligned GTM motions create competitive advantage</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>

          {/* 2. Strategic Pillars */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              2. Strategic Pillars <span className="text-muted-foreground">(How We Win)</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-card border-2 border-primary/40 hover:border-primary/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-xl mb-4">ICP Precision & Market Focus</h4>
                <p className="text-sm text-muted-foreground mb-4">Rebuild GTM around where we win now:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Revenue:</strong> €500m–1b core</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>ERP:</strong> Oracle / Infor / JDE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Industries:</strong> Manufacturing, Food, Health, Media/Telco, Construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Invoice volume:</strong> 3k–30k & 60k–120k</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-2 border-accent/40 hover:border-accent/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-display font-bold text-xl mb-4">Verticalisation & Value Proposition</h4>
                <p className="text-sm text-muted-foreground mb-4">Each vertical gets unique:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Messaging tailored to industry pain points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ROI calculators with industry benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Industry-specific references and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Vertical-specific sales plays</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-2 border-success/40 hover:border-success/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-success" />
                </div>
                <h4 className="font-display font-bold text-xl mb-4">Pipeline Quality & Sales Productivity</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Strict qualification for ICP, ERP, invoice volume, industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Exit &gt;120k invoice bands unless strategic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Route deals into velocity (≤30k invoices) or strategic ABM (60k–120k, 5b+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Improve forecast accuracy and reduce cycle times</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Every program (marketing, sales, partners) aligns to this footprint.
                </p>
              </Card>
            </div>
          </div>

          {/* 3. Channel Strategy */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              3. Channel Strategy
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
                <h4 className="font-display font-bold text-xl mb-4 text-primary">Primary Channels</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Outbound (Oracle & Infor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>ERP Events / Executive Dinners (Oracle, JDE, Infor user groups)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SEO / GEO (All)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>PPC (high-intent, ERP-specific keywords)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Partner Ecosystems (Infor, JDE, Oracle)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
                <h4 className="font-display font-bold text-xl mb-4 text-accent">Secondary Channels</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Review sites (Capterra, Software Advice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Targeted webinars (ERP + industry combinations)</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground italic">
                    Build long-term market preference by strengthening our brand — reducing future CAC, improving win rates, and accelerating sales cycles.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* 4. Expected Commercial Outcomes */}
          <Card className="p-8 mb-16 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              4. Expected Commercial Outcomes
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">ARR Target</div>
                <div className="text-4xl font-bold text-primary">€3.8M</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Pipeline Required</div>
                <div className="text-4xl font-bold text-accent">€27.14M</div>
                <div className="text-xs text-muted-foreground mt-1">14% win rate</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Current Pipeline</div>
                <div className="text-4xl font-bold text-foreground">€6.76M</div>
              </div>
            </div>

            <div className="border-t border-primary/20 pt-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Net Pipeline Required</div>
                  <div className="text-3xl font-bold text-warning">€20.38M</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Total Channel Target</div>
                  <div className="text-3xl font-bold text-success">€24.48M</div>
                </div>
              </div>
            </div>

            <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-4 text-center">
              <div className="text-sm font-semibold text-destructive uppercase tracking-wider mb-1">Pipeline Delta</div>
              <div className="text-2xl font-bold text-destructive">-€2.02M</div>
              <div className="text-xs text-muted-foreground mt-2">Requires acceleration of partnership onboarding and SDR activity in Q1 2026</div>
            </div>
          </Card>

          {/* 5. Strategic Trade-Offs */}
          <Card className="p-8 mb-16 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30">
            <h3 className="font-display font-bold text-3xl mb-6 text-center">
              5. Strategic Trade-Offs <span className="text-muted-foreground">(What We Stop)</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No SAP/MS ecosystem pursuits</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No low-complexity AP deals</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No undifferentiated "AP automation" messaging</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No enterprise mega-RFP cycles</p>
              </div>
            </div>
          </Card>

          {/* Pipeline Contribution by Channel */}
          <Card className="p-8 mb-16 bg-card border-2 border-primary/30">
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              Pipeline Contribution by Channel
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">SDR (12 Months)</h4>
                  <span className="text-2xl font-bold text-primary">€6.84M</span>
                </div>
                <p className="text-sm text-muted-foreground">1 Additional SDR. 6 Opps per month pure outbound = €660k per mth pipeline. Q4 2025 Run Rate €500k pm. Av Deal size €95k</p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">AE Generated</h4>
                  <span className="text-2xl font-bold text-accent">€3.96M</span>
                </div>
                <p className="text-sm text-muted-foreground">3 qualified opps per month from 5 sales reps = €330k per month pipeline</p>
              </div>

              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6 border-l-4 border-success">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Marketing</h4>
                  <span className="text-2xl font-bold text-success">€8.49M</span>
                </div>
                <p className="text-sm text-muted-foreground">Based on 2025 forecast with incremental research, new site, brand refresh</p>
              </div>

              <div className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 rounded-lg p-6 border-l-4 border-chart-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Partnerships</h4>
                  <span className="text-2xl font-bold text-chart-4">€5.20M</span>
                </div>
                <p className="text-sm text-muted-foreground">2025 pipeline €1.6m. Targeting 3 new partners by end Q1 2026</p>
              </div>
            </div>

            <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg text-center">
              <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Total Pipeline Target</div>
              <div className="text-4xl font-bold text-primary">€24.48M</div>
              <div className="text-sm text-muted-foreground mt-2">€2,040,340/month average</div>
            </div>
          </Card>

          {/* Why This Strategy Will Succeed */}
          <Card className="p-8 bg-gradient-to-br from-success/10 to-success/5 border-2 border-success/30">
            <h3 className="font-display font-bold text-3xl mb-6 text-center">
              We Will Succeed Because This Strategy…
            </h3>
            <ul className="space-y-4 max-w-4xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Built on real performance data, focusing only on segments where we consistently win</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Avoids competitor strongholds (Medius in Microsoft; Basware/Coupa in SAP enterprise)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Concentrates on ERPs where we win reliably — Oracle, Infor, and JD Edwards</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Targets industries with stable or growing win rates, improving conversion and scalability</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Aligns to our strongest invoice-volume sweet spots (3k–30k and 60k–120k)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Eliminates low-yield segments, improving sales focus and productivity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Directs GTM investment into the channels that consistently generate qualified pipeline and wins</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
