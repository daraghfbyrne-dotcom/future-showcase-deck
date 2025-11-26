import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calendar, Users } from "lucide-react";
import { BudgetAllocationChart } from "@/components/charts/BudgetAllocationChart";

export const BudgetOverview = () => {
  const leadGenTools = [
    { name: "6Sense", cost: 9332 },
    { name: "ZoomInfo", cost: 24996 },
    { name: "Capterra", cost: 6000 },
    { name: "Gong", cost: 47592 },
    { name: "Clay", cost: 21000 },
    { name: "Allego", cost: 30000 },
    { name: "Hubspot", cost: 33000 },
    { name: "LinkedIn Navigator", cost: 25200 },
    { name: "Source Forge / G2", cost: 15996 },
    { name: "Google Ads / PPC", cost: 42000 },
    { name: "Social PPC", cost: 48000 },
    { name: "Webinar Tech", cost: 2400 },
    { name: "Content Syndication", cost: 60000 },
    { name: "Salesforce", cost: 11000 },
    { name: "Salesforce Implementation", cost: 8000 },
    { name: "Walnut.io", cost: 9000 },
    { name: "Gifts & Incentives", cost: 12000 },
  ];

  const conferences = [
    { name: "Executive Dinners (Q1-Q4)", cost: 42000 },
    { name: "SSOW USA Conference", cost: 45000 },
    { name: "SSOW Europe Conferences (2x)", cost: 95000 },
    { name: "Gartner Finance Xpo USA", cost: 65928 },
    { name: "Gartner Finance Xpo EMEA", cost: 71300 },
    { name: "Deloitte SSC Conference", cost: 44000 },
    { name: "Other Events", cost: 60000 },
    { name: "Logistics & Travel", cost: 87140 },
  ];

  const marketingBrand = [
    { name: "Research Project", cost: 120000 },
    { name: "Collateral", cost: 36000 },
    { name: "Community Sponsorships", cost: 49992 },
    { name: "Customer Gifts", cost: 30000 },
    { name: "Customer Entertainment", cost: 42000 },
    { name: "Blog Writing", cost: 9000 },
    { name: "Lovable Platform", cost: 1800 },
    { name: "Graphic Design", cost: 6000 },
    { name: "SEM - SEO & GEO", cost: 4800 },
    { name: "Video Production", cost: 30000 },
    { name: "Customer Advisory Board", cost: 45000 },
    { name: "Partner MDF / Incentives", cost: 30000 },
  ];

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `€${(value / 1000000).toFixed(2)}M`;
    }
    return `€${value.toLocaleString()}`;
  };

  const totalLeadGen = leadGenTools.reduce((sum, item) => sum + item.cost, 0);
  const totalConferences = conferences.reduce((sum, item) => sum + item.cost, 0);
  const totalMarketingBrand = marketingBrand.reduce((sum, item) => sum + item.cost, 0);
  const grandTotal = totalLeadGen + totalConferences + totalMarketingBrand;

  return (
    <section id="budget" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              2026 Budget <span className="text-primary">Overview</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive marketing investment breakdown
            </p>
          </div>

          {/* Total Budget Highlight */}
          <div className="mb-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold mb-2">{formatCurrency(grandTotal)}</div>
              <div className="text-lg text-muted-foreground">Total 2026 Marketing Budget</div>
            </Card>
          </div>

          {/* Budget visualization chart */}
          <BudgetAllocationChart />

          {/* Lead Generation Tools & Tech */}
          <Card className="p-8 bg-card border-border mb-8">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              Lead Generation Tools & Technology
              <span className="ml-auto text-2xl font-bold text-primary">{formatCurrency(totalLeadGen)}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {leadGenTools.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm">{item.name}</span>
                  <span className="font-semibold">{formatCurrency(item.cost)}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Conferences & Events */}
          <Card className="p-8 bg-card border-border mb-8">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              Conferences & Events
              <span className="ml-auto text-2xl font-bold text-accent">{formatCurrency(totalConferences)}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {conferences.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm">{item.name}</span>
                  <span className="font-semibold">{formatCurrency(item.cost)}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Brand & Marketing */}
          <Card className="p-8 bg-card border-border mb-8">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
              Brand, Content & Customer Programs
              <span className="ml-auto text-2xl font-bold text-success">{formatCurrency(totalMarketingBrand)}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {marketingBrand.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm">{item.name}</span>
                  <span className="font-semibold">{formatCurrency(item.cost)}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Budget Summary */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-primary/10 border-primary/30">
              <h3 className="font-semibold text-lg mb-4">Lead Gen & Tech</h3>
              <div className="text-3xl font-bold text-primary mb-2">{formatCurrency(totalLeadGen)}</div>
              <div className="text-sm text-muted-foreground">
                {((totalLeadGen / grandTotal) * 100).toFixed(1)}% of total budget
              </div>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-lg mb-4">Events & Conferences</h3>
              <div className="text-3xl font-bold text-accent mb-2">{formatCurrency(totalConferences)}</div>
              <div className="text-sm text-muted-foreground">
                {((totalConferences / grandTotal) * 100).toFixed(1)}% of total budget
              </div>
            </Card>

            <Card className="p-6 bg-success/10 border-success/30">
              <h3 className="font-semibold text-lg mb-4">Brand & Content</h3>
              <div className="text-3xl font-bold text-success mb-2">{formatCurrency(totalMarketingBrand)}</div>
              <div className="text-sm text-muted-foreground">
                {((totalMarketingBrand / grandTotal) * 100).toFixed(1)}% of total budget
              </div>
            </Card>
          </div>

          {/* Key insights */}
          <Card className="mt-8 p-6 bg-primary/10 border-primary/30">
            <h3 className="font-semibold text-lg mb-4">Budget Highlights</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Research Project (€120K)</strong> – Flagship thought leadership initiative for 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Major Conferences (€286K)</strong> – SSOW (2x), Gartner (2x), Deloitte SSC</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Executive Dinners (€42K)</strong> – 12 intimate dinners across IRE, UK, and North America</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Sales Tech Stack (€193K)</strong> – Gong, HubSpot, ZoomInfo, Salesforce, and enablement tools</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
