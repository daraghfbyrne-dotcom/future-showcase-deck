import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Radio, Heart, UtensilsCrossed, Mountain, Landmark } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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

export const ProspectMarketConditions = () => {
  return (
    <section id="market-conditions" className="py-16 px-4 md:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">Market Intelligence</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prospect Market Conditions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Finance department maturity model across target industries
          </p>
        </div>

        {/* Maturity Level Legend */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <h3 className="font-display text-lg font-bold text-foreground mb-4 text-center">Finance Department Maturity Levels</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {maturityLevels.map((level) => (
              <div key={level.level} className={`px-4 py-2 rounded-lg border ${getLevelColor(level.level)}`}>
                <span className="font-bold">{level.level}</span>
                <span className="mx-2">—</span>
                <span className="font-semibold">{level.name}</span>
                <span className="text-xs ml-2 opacity-75 hidden sm:inline">({level.description})</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Maturity Table */}
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
      </div>
    </section>
  );
};
