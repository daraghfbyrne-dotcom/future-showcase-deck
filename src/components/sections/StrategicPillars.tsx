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
            <h3 className="font-display font-bold text-3xl mb-6 text-center">
              4. Expected Commercial Outcomes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl font-bold text-primary">+30%</div>
                <p className="text-muted-foreground">pipeline from ERP ecosystems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl font-bold text-primary">+15%</div>
                <p className="text-muted-foreground">increase in mid-market ACV</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl font-bold text-primary">-20%</div>
                <p className="text-muted-foreground">CAC from improved brand authority</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl font-bold text-primary">+10pts</div>
                <p className="text-muted-foreground">increase in win rate in complex AP deals</p>
              </div>
            </div>
          </Card>

          {/* 5. Strategic Trade-Offs */}
          <Card className="p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30">
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
        </div>
      </div>
    </section>
  );
};
