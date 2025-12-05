import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Factory, Radio, Heart, UtensilsCrossed, Mountain, Landmark, TrendingUp, AlertTriangle, Layers } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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

const maturityLevels = [
  { level: "L1", name: "Foundation", description: "Manual, Reactive" },
  { level: "L2", name: "Control", description: "Standardized, Compliance-Focused" },
  { level: "L3", name: "Integrate", description: "Data-Driven, Forward-Looking" },
  { level: "L4", name: "Optimize", description: "Automation-First, Strategic" },
  { level: "L5", name: "Transform", description: "AI-Driven, Autonomous, ESG-Integrated" }
];

const maturityData = [
  {
    sector: "Manufacturing",
    icon: Factory,
    levels: {
      L1: "Manual costing; slow close; limited visibility into inventory & production cost drivers",
      L2: "Standard costing in place; monthly variance review; partial ERP use",
      L3: "Real-time dashboards for cost & production; S&OP tied to finance",
      L4: "Predictive cost modelling; automated variance analysis; digital twins in planning",
      L5: "AI-driven S&OP; autonomous forecasting; full carbon-cost integration"
    }
  },
  {
    sector: "Media / Telco",
    icon: Radio,
    levels: {
      L1: "Billing errors; manual revenue recognition; siloed data",
      L2: "Automated billing; revenue assurance emerging; compliance focus",
      L3: "CLV & churn analytics; integrated revenue models; BI dashboards",
      L4: "Dynamic pricing; near-real-time revenue assurance; automated financial workflows",
      L5: "AI-based monetization; real-time fraud detection; autonomous forecasting"
    }
  },
  {
    sector: "Health Services",
    icon: Heart,
    levels: {
      L1: "Manual claims; high denial rates; limited patient-cost insights",
      L2: "RCM tools implemented; standardized controls; reduced errors",
      L3: "Predictive patient-volume forecasting; integrated clinical & financial data",
      L4: "Cost-to-serve analytics; linking outcomes to financials; automation in claims",
      L5: "AI-driven outcome-based financial modelling; autonomous reimbursement forecasting"
    }
  },
  {
    sector: "Retail, Food & Hospitality",
    icon: UtensilsCrossed,
    levels: {
      L1: "Manual stock counts; store-level financials delayed; margins unclear",
      L2: "POS → ERP integration; weekly or daily margin reporting",
      L3: "SKU-level profitability; demand forecasting for labor & inventory",
      L4: "Dynamic pricing & promo optimization; shrinkage/waste analytics",
      L5: "Real-time omnichannel profitability; automated replenishment tied to financial plans"
    }
  },
  {
    sector: "Natural Resources",
    icon: Mountain,
    levels: {
      L1: "Manual capex reporting; limited project financial visibility",
      L2: "Structured capex workflows; cost control discipline; basic compliance",
      L3: "Integrated mine/field data; predictive maintenance inputs in planning",
      L4: "Advanced commodity-risk modelling; automated capex forecasting",
      L5: "AI-based commodity scenarios; ESG/community impact fully embedded in financial planning"
    }
  },
  {
    sector: "Financial Services",
    icon: Landmark,
    levels: {
      L1: "Spreadsheet-driven regulatory reports; fragmented risk data",
      L2: "Automated regulatory templates; standardized compliance",
      L3: "Integrated risk + finance data; embedded stress testing",
      L4: "Real-time liquidity & risk dashboards; regulatory automation; advanced FP&A",
      L5: "Autonomous regulatory reporting; AI-driven capital optimization; continuous forecasting"
    }
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

const getLevelColor = (level: string) => {
  switch (level) {
    case "L1": return "bg-red-500/10 text-red-600 border-red-500/20";
    case "L2": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    case "L3": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
    case "L4": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    case "L5": return "bg-primary/10 text-primary border-primary/20";
    default: return "bg-muted text-muted-foreground";
  }
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
            Finance department trends, challenges, and maturity across our target industries
          </p>
        </div>

        {/* Main View Tabs */}
        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="challenges" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Trends & Challenges
            </TabsTrigger>
            <TabsTrigger value="maturity" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Maturity Model
            </TabsTrigger>
          </TabsList>

          {/* Trends & Challenges Tab */}
          <TabsContent value="challenges">
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
          </TabsContent>

          {/* Maturity Model Tab */}
          <TabsContent value="maturity">
            <Card className="p-6 mb-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Finance Department Maturity Model</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {maturityLevels.map((level) => (
                  <div key={level.level} className={`px-4 py-2 rounded-lg border ${getLevelColor(level.level)}`}>
                    <span className="font-bold">{level.level}</span>
                    <span className="mx-2">—</span>
                    <span className="font-semibold">{level.name}</span>
                    <span className="text-xs ml-2 opacity-75">({level.description})</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-border">
              <ScrollArea className="w-full">
                <div className="min-w-[1200px]">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-[180px] font-bold text-foreground">Sector</TableHead>
                        {maturityLevels.map((level) => (
                          <TableHead key={level.level} className="min-w-[200px]">
                            <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${getLevelColor(level.level)}`}>
                              {level.level} — {level.name}
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maturityData.map((row, index) => (
                        <TableRow key={index} className="hover:bg-muted/30">
                          <TableCell className="font-semibold">
                            <div className="flex items-center gap-2">
                              <row.icon className="h-4 w-4 text-primary" />
                              {row.sector}
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.levels.L1}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.levels.L2}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.levels.L3}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.levels.L4}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.levels.L5}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
