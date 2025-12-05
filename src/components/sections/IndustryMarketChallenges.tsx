import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Factory, Radio, Heart, UtensilsCrossed, Mountain, Landmark, TrendingUp, AlertTriangle } from "lucide-react";

const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    trends: [
      { title: "Advanced cost accounting & profitability analytics", description: "Heavy use of real-time costing, variance analysis, and product-line profitability as margins tighten." },
      { title: "Greater investment in automation / digital finance", description: "FP&A, procurement-to-pay, and close processes increasingly automated (AP automation, RPA, AI forecasting)." },
      { title: "Scenario modelling for supply-chain volatility", description: "Finance teams now run more frequent scenario planning around material costs, FX, logistics disruptions." },
      { title: "Sustainability reporting & carbon-cost modelling", description: "Emissions accounting and cost attribution to ESG programs are becoming standard." }
    ],
    challenges: [
      { title: "Volatile input costs → difficult forecasting", description: "Raw-material price swings make budgets difficult and shorten planning cycles." },
      { title: "Inventory valuation risk", description: "Carrying excess inventory or write-downs due to demand shifts affects financial accuracy." },
      { title: "Legacy ERP systems slowing automation", description: "Many manufacturers have fragmented systems causing slow reporting and manual work." },
      { title: "Capital constraints for modernization", description: "Finance must justify ROI on automation, robotics, and plant upgrades." }
    ]
  },
  {
    id: "media-telecom",
    name: "Media, Telecom & Communications",
    icon: Radio,
    trends: [
      { title: "Shift from CAPEX-heavy to OPEX subscription models", description: "Cloud migration and network-as-a-service change how finance budgets, depreciates, and measures ROI." },
      { title: "Customer lifetime value (CLV) and churn analytics", description: "Finance increasingly partners with marketing to model revenue stability and subscriber churn." },
      { title: "Data-driven pricing & monetization models", description: "Ad revenue, streaming revenue, and data monetization require sophisticated modelling." },
      { title: "Focus on cybersecurity investment justification", description: "Finance assesses ROI for cyber spend and regulatory-driven controls." }
    ],
    challenges: [
      { title: "High capital intensity + uncertain monetization", description: "5G and fibre build-out demand billions in investment with slow returns." },
      { title: "Revenue leakage and billing complexity", description: "Bundled products and promotions cause billing disputes and leakage." },
      { title: "Erosion of traditional revenue streams", description: "Finance must plan for declining linear TV, SMS/voice revenues, etc." },
      { title: "Rapid tech obsolescence impacts depreciation", description: "Assets become obsolete faster than accounting cycles assume." }
    ]
  },
  {
    id: "health-services",
    name: "Health Services",
    icon: Heart,
    trends: [
      { title: "Value-based care financial modelling", description: "Moving from fee-for-service to outcome-based payments requires new costing and revenue models." },
      { title: "Increased use of predictive analytics for staffing and demand", description: "Finance teams use AI to forecast patient volumes and optimise labor budgets (largest cost line)." },
      { title: "Investment in digital health platforms", description: "Telehealth economics, digital triage and virtual care drive new budgeting categories." },
      { title: "More advanced revenue cycle management (RCM)", description: "Automation in claims, billing, reimbursement modelling." }
    ],
    challenges: [
      { title: "Rising cost of labor & medical supplies", description: "Hard to control margins when wage inflation and drug costs surge." },
      { title: "Complex reimbursement rules", description: "High administrative cost due to insurers, government programs, coding errors." },
      { title: "Aging infrastructure & capex needs", description: "Facilities require upgrades, but capital is often tight." },
      { title: "Financial risk under new care models", description: "Poor care outcomes or readmissions directly affect revenue in value-based contracts." }
    ]
  },
  {
    id: "food-hospitality-retail",
    name: "Food, Hospitality & Retail",
    icon: UtensilsCrossed,
    trends: [
      { title: "Real-time margin management & SKU profitability", description: "Finance increasingly uses granular data to adjust pricing and promotions dynamically." },
      { title: "Automation of store-level financial operations", description: "AI-driven forecasting for demand, labor scheduling, and shrinkage reduction." },
      { title: "Investment in omnichannel and e-commerce analytics", description: "Finance must evaluate digital vs physical costs and allocate shared overhead." },
      { title: "Focus on sustainability and traceability cost accounting", description: "Carbon reporting, packaging changes, and supply-chain transparency add new reporting needs." }
    ],
    challenges: [
      { title: "Thin and volatile margins", description: "Commodity price swings dramatically impact Cost of Goods Sold (COGS)." },
      { title: "High labor turnover → unpredictable payroll", description: "Budgeting and scheduling become harder with staffing instability." },
      { title: "Inventory shrinkage / wastage", description: "Requires advanced controls and loss-prevention analytics." },
      { title: "Capex allocation across digital + physical stores", description: "Finance struggles to balance investment in online platforms vs brick-and-mortar." }
    ]
  },
  {
    id: "natural-resources",
    name: "Natural Resources",
    icon: Mountain,
    trends: [
      { title: "Advanced commodity risk modelling", description: "Treasury and FP&A use hedging strategies, sensitivity analysis, and long-range forecasting." },
      { title: "ESG cost attribution and sustainability accounting", description: "Finance quantifies emissions reduction, rehabilitation liabilities, and social investments." },
      { title: "Automation and digital mine budgeting", description: "Autonomous equipment and IoT demand new financial planning for tech-heavy operations." },
      { title: "Strategic capital portfolio management", description: "Long-cycle projects require strong discounted cash-flow modelling and capital discipline." }
    ],
    challenges: [
      { title: "Commodity price volatility → unstable revenue", description: "Makes long-term forecasting and budgeting difficult." },
      { title: "High regulatory and compliance costs", description: "Environmental, community, and safety obligations add heavy financial reporting burdens." },
      { title: "Cost overruns in large capital projects", description: "Multi-year capex projects often exceed budget due to geopolitical or geological complexity." },
      { title: "Access to capital in ESG-sensitive markets", description: "Financing becomes harder for carbon-intensive industries." }
    ]
  },
  {
    id: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    trends: [
      { title: "Automation of finance operations (RPA, AI in regulatory reporting)", description: "AI increasingly generates forecasts, reconciliations, and compliance outputs." },
      { title: "Real-time risk and capital analytics", description: "Finance integrates risk modelling with business forecasting (stress tests, Basel, liquidity)." },
      { title: "Embedded finance & new revenue models", description: "FP&A teams evaluate partnerships with fintechs, open banking, and new fee structures." },
      { title: "ESG reporting maturity", description: "Standardized climate and sustainability disclosures." }
    ],
    challenges: [
      { title: "Ongoing regulatory cost pressure", description: "AML/KYC, climate disclosures, capital rules → continued burden on finance." },
      { title: "Legacy systems and fragmented data", description: "Makes regulatory reporting harder; transformation is expensive." },
      { title: "Margin pressure from competition", description: "Interest-rate changes and fintechs compress fee and loan margins." },
      { title: "Cyber-risk quantification", description: "Finance must model financial exposures from cyber events — a new discipline." }
    ]
  }
];

const crossIndustryInsights = {
  trends: [
    "Automation of finance tasks",
    "Real-time data & analytics for forecasting",
    "Scenario planning due to volatility",
    "ESG & sustainability reporting",
    "Shift from traditional budgeting to continuous planning"
  ],
  challenges: [
    "Cost volatility (materials, labor, energy)",
    "Talent shortages in finance (analytics, digital skills)",
    "Legacy systems slowing digital transformation",
    "Increasing regulatory demands",
    "Margin compression and capital constraints"
  ]
};

export const IndustryMarketChallenges = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">Market Intelligence</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industry Market Challenges
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Finance department trends and challenges across our target industries
          </p>
        </div>

        {/* Cross-Industry Summary */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">Cross-Industry Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Biggest Trends</h4>
              </div>
              <ul className="space-y-2">
                {crossIndustryInsights.trends.map((trend, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {trend}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-secondary" />
                <h4 className="font-semibold text-foreground">Most Common Challenges</h4>
              </div>
              <ul className="space-y-2">
                {crossIndustryInsights.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Industry Tabs */}
        <Tabs defaultValue="manufacturing" className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-muted/50 p-2 mb-6">
            {industries.map((industry) => (
              <TabsTrigger 
                key={industry.id} 
                value={industry.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <industry.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{industry.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Trends Column */}
                <Card className="p-6 border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">Finance Trends</h3>
                  </div>
                  <div className="space-y-4">
                    {industry.trends.map((trend, index) => (
                      <div key={index} className="border-l-2 border-primary/30 pl-4">
                        <h4 className="font-semibold text-foreground text-sm mb-1">{trend.title}</h4>
                        <p className="text-muted-foreground text-sm">{trend.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Challenges Column */}
                <Card className="p-6 border-secondary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <AlertTriangle className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">Finance Challenges</h3>
                  </div>
                  <div className="space-y-4">
                    {industry.challenges.map((challenge, index) => (
                      <div key={index} className="border-l-2 border-secondary/30 pl-4">
                        <h4 className="font-semibold text-foreground text-sm mb-1">{challenge.title}</h4>
                        <p className="text-muted-foreground text-sm">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
