import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Zap } from "lucide-react";

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
              Laser focus on mid-market companies (€50m–€600m revenue) running Oracle, Infor, or JD Edwards, 
              in industries where complex AP automation matters most
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
