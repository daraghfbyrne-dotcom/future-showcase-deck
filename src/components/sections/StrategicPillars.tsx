import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Zap, Rocket, Sparkles } from "lucide-react";

export const StrategicPillars = () => {
  return (
    <section id="strategy" className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
              2026 Strategic <span className="text-primary">Pillars</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Two overarching strategic imperatives drive everything we do in 2026
            </p>
          </div>

          {/* Two Overarching Strategic Pillars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Play Bigger */}
            <Card className="p-10 bg-gradient-to-br from-primary via-primary/90 to-primary/80 border-4 border-primary shadow-2xl hover:shadow-primary/50 transition-all animate-fade-in">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                <Rocket className="w-11 h-11 text-white" />
              </div>
              <h3 className="font-display font-bold text-4xl mb-4 text-white">Play Bigger</h3>
              <p className="text-white/90 mb-6 text-lg font-medium">
                Define the category. Own the problem. Become the default choice for complex, multi-ERP AP automation.
              </p>
              <div className="space-y-4 text-white/95">
                <h4 className="font-semibold text-lg text-white mb-3">What this means:</h4>
                
                <div className="space-y-3 text-base">
                  <p>
                    <strong>Build a new category around "AP Automation Tailored to Perfection."</strong><br />
                    We stop competing on features and instead define a new space where SoftCo is the only credible leader.
                  </p>
                  
                  <p>
                    <strong>Anchor everything to the customer's "why."</strong><br />
                    Finance teams with complexity need certainty, control, and outcomes they can audit—not generic automation.
                  </p>
                  
                  <p>
                    <strong>Do we shift the narrative from 1) software to guaranteed results you can rely on (SoftCo Approved)</strong>
                  </p>
                  
                  <p>
                    <strong>Tell a big, bold, simple story.</strong><br />
                    We elevate SoftCo from "AP vendor" to the only specialist for multi-ERP, fast-growing organisations offering guaranteed results.
                  </p>
                  
                  <p>
                    <strong>Make competitors irrelevant.</strong><br />
                    By defining the category around our strengths we force the market to play on our terms.
                  </p>
                </div>
                
                <h4 className="font-semibold text-lg text-white mt-6 mb-3">Why it matters in 2026:</h4>
                
                <div className="space-y-2 text-base">
                  <p>This strategy creates long-term differentiation</p>
                  <p>It drives market perception, premium pricing, and credibility with C-suite buyers.</p>
                  <p>It increases pipeline quality by attracting accounts who resonate with our "why."</p>
                  <p>It aligns every tactical decision—GTM, product, messaging—around becoming the category leader.</p>
                </div>
              </div>
            </Card>

            {/* SoftCo Brand */}
            <Card className="p-10 bg-gradient-to-br from-accent via-accent/90 to-accent/80 border-4 border-accent shadow-2xl hover:shadow-accent/50 transition-all animate-fade-in">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-11 h-11 text-white" />
              </div>
              <h3 className="font-display font-bold text-4xl mb-4 text-white">SoftCo Brand</h3>
              <p className="text-white/90 mb-6 text-lg font-medium">
                Codify who we are, amplify what makes us different, and express it with clarity, confidence, and personality.
              </p>
              <div className="space-y-4 text-white/95">
                <h4 className="font-semibold text-lg text-white mb-3">What this means:</h4>
                
                <div className="space-y-3 text-base">
                  <p>
                    <strong>A brand built around "tailored to perfection."</strong><br />
                    Everything - from messaging to demos to delivery - reinforces our promise & Play Bigger proposition.
                  </p>
                  
                  <p>
                    <strong>A tone that is confident, human, and insight-led.</strong><br />
                    Reflecting the Ruler/Hero archetype mix: authoritative, skilled, but never arrogant. Friendly, direct, lightly witty when appropriate.
                  </p>
                  
                  <p>
                    <strong>A visual and verbal identity that stands out</strong><br />
                    so we intentionally differentiate from competitors who all look and sound the same.
                  </p>
                </div>
                
                <h4 className="font-semibold text-lg text-white mt-6 mb-3">Why it matters in 2026:</h4>
                
                <div className="space-y-2 text-base">
                  <p>Creates trust with CFOs, CIOs, and Finance Ops leaders tasked with risk removal and compliance.</p>
                  <p>Drives recognition and preference in ERP ecosystems (Oracle, JDE, Infor).</p>
                  <p>Supports higher conversion, higher win rates, and stronger retention.</p>
                  <p>Ensures every touchpoint communicates leadership in complex AP automation.</p>
                  <p>Makes SoftCo the brand buyers feel is made for them—especially in mid-market enterprises with multi-ERP complexity.</p>
                  <p><strong>Brand is what creates future demand.</strong> Around 80% of long-term revenue growth comes from brand-building, not short-term activation — without a strong brand, pipeline becomes increasingly expensive to generate.</p>
                  <p><strong>A strong brand lowers cost of acquisition and increases win rates.</strong> Buyers pre-qualify vendors based on trust and perception before Sales ever engages; brand strength directly reduces CAC, shortens cycles, and boosts conversion.</p>
                  <p><strong>Brand is the engine of category leadership.</strong> In a crowded AP market, brand is how we define the problem, shape the category, and become the default choice — making every euro spent across GTM work harder.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Supporting Tactical Focus Areas */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="font-display font-semibold text-2xl text-muted-foreground">
                Delivered through these four tactical focus areas
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">ERP-First GTM</h3>
              <p className="text-muted-foreground mb-4">Buyers think ERP-first, so we align everything to ERP ecosystems:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ERP-specific landing pages, demos & case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ERP-specific outbound campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ERP-specific events & webinars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Partner ecosystems (Infor, JDE, Oracle)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-accent/20 hover:border-accent/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Industry-Aligned Positioning</h3>
              <p className="text-muted-foreground mb-4">Target only industries where:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>AP complexity is high (multi-entity approvals)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>PO matching/GR/IR matters significantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Manufacturing, Media/Telco, Health Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Avoid Financial Services entirely</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-success/20 hover:border-success/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Mid-Market Focus</h3>
              <p className="text-muted-foreground mb-4">Sweet spot where SoftCo wins most often:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Faster buying cycles than enterprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Higher automation pain points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Lower RFP complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Target: €50M–€600M revenue companies</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-chart-4/20 hover:border-chart-4/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-chart-4/20 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-chart-4" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Channel Strategy</h3>
              <p className="text-muted-foreground mb-4">High-intent, conversion-focused channels:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-chart-4 mt-1">•</span>
                  <span>Outbound targeting Oracle & Infor accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-4 mt-1">•</span>
                  <span>ERP Events & Executive Dinners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-4 mt-1">•</span>
                  <span>SEO/PPC with ERP-specific keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-4 mt-1">•</span>
                  <span>Partner ecosystems (Oracle, JDE, Infor)</span>
                </li>
              </ul>
            </Card>
          </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <h3 className="font-display font-bold text-2xl mb-4 text-center">Why This Strategy Will Succeed</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm text-muted-foreground">Aligns with actual winning patterns across both periods</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm text-muted-foreground">Avoids competitors' strongholds (Basware/SAP, Medius/Microsoft)</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm text-muted-foreground">Focuses on ERP ecosystems where SoftCo wins consistently</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
