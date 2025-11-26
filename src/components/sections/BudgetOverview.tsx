import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calendar, Users } from "lucide-react";
import { BudgetAllocationChart } from "@/components/charts/BudgetAllocationChart";

export const BudgetOverview = () => {
  const budgetItems = [
    { category: "Events & Conferences", amount: "€358,228", description: "Executive dinners & major conferences" },
    { category: "Logistics & Travel", amount: "€87,140", description: "Flights, hotels, meals, transportation" },
    { category: "LinkedIn Advertising", amount: "€48,000", description: "Full-funnel campaigns (€4K/month)" },
    { category: "Google Display", amount: "€14,400", description: "Retargeting & webinar promotion" },
    { category: "Website Rebuild", amount: "TBD", description: "New copywriter + web developer" },
  ];

  return (
    <section id="budget" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              2026 Budget <span className="text-primary">Overview</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Strategic investment allocation for maximum ROI
            </p>
          </div>

          {/* Top-level metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
              <DollarSign className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold mb-1">€445K</div>
              <div className="text-sm text-muted-foreground">Total Events Budget</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold mb-1">€2.97M</div>
              <div className="text-sm text-muted-foreground">Pipeline Target</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/20 to-success/5 border-success/30">
              <Calendar className="w-8 h-8 text-success mb-3" />
              <div className="text-3xl font-bold mb-1">18</div>
              <div className="text-sm text-muted-foreground">Events Planned</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-chart-4/20 to-chart-4/5 border-chart-4/30">
              <Users className="w-8 h-8 text-chart-4 mb-3" />
              <div className="text-3xl font-bold mb-1">8,320%</div>
              <div className="text-sm text-muted-foreground">Research ROI</div>
            </Card>
          </div>

          {/* Budget visualization */}
          <BudgetAllocationChart />

          {/* Budget breakdown */}
          <Card className="p-8 bg-card border-border mb-8 mt-8">
            <h3 className="font-semibold text-xl mb-6">Investment Breakdown</h3>
            <div className="space-y-4">
              {budgetItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                  <div>
                    <h4 className="font-semibold mb-1">{item.category}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="text-xl font-bold text-primary">{item.amount}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Key insights */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-primary/10 border-primary/30">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Growth Targets
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Organic leads: +6% YoY growth (84 leads in 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>LinkedIn: New channel launch (6 leads target)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>SDR pipeline: €800K+ monthly target</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-accent" />
                Cost Efficiency
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>LinkedIn CPL target: ≤€300</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Google Display CPL: €160 (SaaS benchmark)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Research program: 4X cheaper than traditional marketing</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
