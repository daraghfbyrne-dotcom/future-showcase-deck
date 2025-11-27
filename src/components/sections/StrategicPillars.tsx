import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Zap, Rocket, Sparkles } from "lucide-react";

export const StrategicPillars = () => {
  return (
    <section id="strategy" className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
              2026 Strategy: Winning in <span className="text-primary">High-Complexity AP Automation</span>
            </h2>
          </div>

          {/* Target Audience Statement - WHO we are going after */}
          <Card className="p-8 md:p-10 mb-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-4 border-primary/40 shadow-xl">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Who We Target</span>
              </div>
              <p className="text-2xl md:text-3xl font-display font-bold text-foreground leading-relaxed">
                Laser-focused on mid-market excellence. Targeting €50M–€600M companies running Oracle, Infor, and JD Edwards in high-complexity AP environments.
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
                <h4 className="font-display font-bold text-3xl mb-4 text-white">Bet 2 — Win the Mid-Market</h4>
                <p className="text-white/95 text-lg font-medium mb-4">Where Complexity Peaks</p>
                <div className="text-white/90 text-base leading-relaxed space-y-3">
                  <p>Target companies €50M–€600M running Oracle, Infor, and JD Edwards — the segment where:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Complexity ≥ budget</li>
                    <li>• Buying cycles are fast</li>
                    <li>• Competitors are weak</li>
                    <li>• SoftCo already wins most often</li>
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
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-card border-2 border-primary/40 hover:border-primary/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-2xl mb-4">Pillar 1 — Category Leadership (Play Bigger)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Establish the new category: Complex AP Control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Anchor messaging on certainty, control, auditability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Position SoftCo as the specialist, not a generalist AP vendor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Make the competition irrelevant by reframing the problem</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-2 border-accent/40 hover:border-accent/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-display font-bold text-2xl mb-4">Pillar 2 — ERP Ecosystem Domination</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Oracle, Infor, JDE-first GTM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ERP-specific content, demos, case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ERP ecosystem partners as force multipliers</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-2 border-success/40 hover:border-success/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-success" />
                </div>
                <h4 className="font-display font-bold text-2xl mb-4">Pillar 3 — Mid-Market & Industry Focus</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Focus on manufacturing, telco/media, and health services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Avoid low-complexity verticals and high-cost enterprise RFPs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Precision ICP targeting and outbound</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-2 border-chart-4/40 hover:border-chart-4/60 transition-all">
                <div className="w-14 h-14 rounded-xl bg-chart-4/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-chart-4" />
                </div>
                <h4 className="font-display font-bold text-2xl mb-4">Pillar 4 — Brand as a Commercial Weapon</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-chart-4 mt-1">•</span>
                    <span>Shift from software to promised outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-4 mt-1">•</span>
                    <span>Build credibility with CFO/CIO buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-4 mt-1">•</span>
                    <span>Leverage brand to lower CAC and increase SQL quality</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* 3. Execution Programs */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-3xl mb-8 text-center">
              3. Execution Programs <span className="text-muted-foreground">(What We Do)</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
                <h4 className="font-display font-bold text-xl mb-4 text-primary">Program A — Narrative & Category Creation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>"Complex AP Control" story</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Thought leadership that defines the problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Analyst & influencer program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>CFO/CIO events</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
                <h4 className="font-display font-bold text-xl mb-4 text-accent">Program B — ERP Ecosystem GTM</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Infor/Oracle/JDE co-marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ERP-specific campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Partner training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Competitive displacement plays</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-success/10 to-success/5 border-2 border-success/30">
                <h4 className="font-display font-bold text-xl mb-4 text-success">Program C — Precision Demand & Conversion</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Highly targeted outbound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>ABM on top 500 ERP-aligned accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>ERP-keyword SEO/PPC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Executive dinners, events, vertical webinars</span>
                  </li>
                </ul>
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
                  <h4 className="font-semibold text-lg">AE Generated (12 Months)</h4>
                  <span className="text-2xl font-bold text-accent">€3.96M</span>
                </div>
                <p className="text-sm text-muted-foreground">Based on 3 qualified opps per month from 5 sales reps @110k</p>
              </div>

              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6 border-l-4 border-success">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Marketing (12 Months)</h4>
                  <span className="text-2xl font-bold text-success">€8.49M</span>
                </div>
                <p className="text-sm text-muted-foreground">on 2025 Forecast. Incremental Research Project, improved organic - new site + brand refresh</p>
              </div>

              <div className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 rounded-lg p-6 border-l-4 border-chart-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Partnerships (12 Months)</h4>
                  <span className="text-2xl font-bold text-chart-4">€5.20M</span>
                </div>
                <p className="text-sm text-muted-foreground">2025 Pipeline €1.6m. TA €3.8M pipe based on 530k ARR to SoftCo. Risk Xelix partnership winding down. Target onboard 3 new ptrs by end Q1 2026</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Total Pipeline Target</div>
                  <div className="text-2xl font-bold text-primary">€24.48M</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Average per Month</div>
                  <div className="text-2xl font-bold">€2.04M</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Nov - Jul '25 (9 months)</div>
                  <div className="text-2xl font-bold">€18.36M</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
