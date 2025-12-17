import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, TrendingUp, Target, CheckCircle2, RotateCcw, Save } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

interface ActionItem {
  id: string;
  text: string;
  category: "sales" | "marketing";
}

interface StageData {
  id: string;
  transition: string;
  shortName: string;
  y2023: string;
  y2024: string;
  y2025: string;
  average: string;
  indexAvg: string;
  target: string;
  indexTarget: string;
  actions: ActionItem[];
}

const pipelineData: StageData[] = [
  {
    id: "1-2",
    transition: "1 → 2",
    shortName: "Marketing Lead → Sales Lead",
    y2023: "30.60%",
    y2024: "24.50%",
    y2025: "30.90%",
    average: "28.70%",
    indexAvg: "",
    target: "",
    indexTarget: "154%",
    actions: [],
  },
  {
    id: "2-3",
    transition: "2 → 3",
    shortName: "Sales Lead → Qualified",
    y2023: "33.00%",
    y2024: "28.20%",
    y2025: "25.90%",
    average: "29.00%",
    indexAvg: "29.0",
    target: "32%",
    indexTarget: "20.8",
    actions: [
      { id: "2-3-s1", text: "Share recording & deck same day (Allego - Digital Sales Room)", category: "sales" },
      { id: "2-3-s2", text: "Drive timeline - schedule follow up on the call", category: "sales" },
      { id: "2-3-s3", text: "Identify key stakeholders", category: "sales" },
      { id: "2-3-s4", text: "Personal invite to upcoming events (webinar, dinner, conference)", category: "sales" },
      { id: "2-3-m1", text: "RFP Template", category: "marketing" },
      { id: "2-3-m2", text: "Landing pages", category: "marketing" },
      { id: "2-3-m3", text: "Change Events (Scale/growth, Cost, Fraud, AI, Einvoicing, ERP)", category: "marketing" },
      { id: "2-3-m4", text: "Relevant Case Studies by ERP", category: "marketing" },
      { id: "2-3-m5", text: "ROI Calculator", category: "marketing" },
      { id: "2-3-m6", text: "Art of the possible opportunity campaign", category: "marketing" },
    ],
  },
  {
    id: "3-4",
    transition: "3 → 4",
    shortName: "Qualified → Demo",
    y2023: "77.50%",
    y2024: "65.70%",
    y2025: "62.70%",
    average: "68.60%",
    indexAvg: "19.9",
    target: "67%",
    indexTarget: "13.9",
    actions: [],
  },
  {
    id: "4-5",
    transition: "4 → 5",
    shortName: "Demo → In-Context Demo",
    y2023: "54.70%",
    y2024: "53.60%",
    y2025: "46.20%",
    average: "51.50%",
    indexAvg: "10.2",
    target: "54%",
    indexTarget: "7.5",
    actions: [
      { id: "4-5-s1", text: "Price: High Price, High discount vs competitive price, low discount", category: "sales" },
      { id: "4-5-s2", text: "Improve Demo quality", category: "sales" },
      { id: "4-5-s3", text: "Interactive demo", category: "sales" },
      { id: "4-5-s4", text: "Post Demo: SoftCo Digital Sales Room App", category: "sales" },
      { id: "4-5-m1", text: "Secret Shopper - Greg Roche", category: "marketing" },
      { id: "4-5-m2", text: "Video Follow ups (Short video explainers - AI, Capture, Translator)", category: "marketing" },
    ],
  },
  {
    id: "5-6",
    transition: "5 → 6",
    shortName: "In-Context Demo → Quotation",
    y2023: "66.00%",
    y2024: "81.10%",
    y2025: "75.00%",
    average: "74.00%",
    indexAvg: "7.6",
    target: "80%",
    indexTarget: "6.0",
    actions: [
      { id: "5-6-s1", text: "Utilize PwC more, bring them in sooner", category: "sales" },
      { id: "5-6-s2", text: "ROI Calculator - High level", category: "sales" },
      { id: "5-6-s3", text: "ROI Calculator - Detailed analysis", category: "sales" },
      { id: "5-6-s4", text: "Face To Face Engagement", category: "sales" },
      { id: "5-6-m1", text: "Pre-canned webinars (ROI, Implementation)", category: "marketing" },
      { id: "5-6-m2", text: "Success Stories", category: "marketing" },
      { id: "5-6-m3", text: "Videos", category: "marketing" },
      { id: "5-6-m4", text: "Events", category: "marketing" },
    ],
  },
  {
    id: "6-7",
    transition: "6 → 7",
    shortName: "Quotation → Negotiation",
    y2023: "77.40%",
    y2024: "53.30%",
    y2025: "50.00%",
    average: "60.20%",
    indexAvg: "4.6",
    target: "60%",
    indexTarget: "3.6",
    actions: [],
  },
  {
    id: "7-8",
    transition: "7 → 8",
    shortName: "Negotiation → Provisional Approval",
    y2023: "70.80%",
    y2024: "68.80%",
    y2025: "77.80%",
    average: "72.50%",
    indexAvg: "3.3",
    target: "77%",
    indexTarget: "2.8",
    actions: [],
  },
  {
    id: "8-9",
    transition: "8 → 9",
    shortName: "Provisional Approval → Awaiting Order",
    y2023: "76.50%",
    y2024: "81.80%",
    y2025: "100.00%",
    average: "86.10%",
    indexAvg: "2.8",
    target: "100%",
    indexTarget: "2.8",
    actions: [],
  },
];

const PipelineConversion = () => {
  const [opportunityName, setOpportunityName] = useState("");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([]);

  // Load saved opportunities on mount
  useEffect(() => {
    const saved = localStorage.getItem("pipeline-opportunities");
    if (saved) {
      setSavedOpportunities(JSON.parse(saved));
    }
  }, []);

  // Load checklist for selected opportunity
  const loadOpportunityChecklist = (name: string) => {
    setOpportunityName(name);
    const saved = localStorage.getItem(`pipeline-checklist-${name}`);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    } else {
      setCheckedItems({});
    }
  };

  const handleCheckChange = (actionId: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [actionId]: checked,
    }));
  };

  const saveChecklist = () => {
    if (!opportunityName.trim()) {
      toast.error("Please enter an opportunity name");
      return;
    }
    localStorage.setItem(`pipeline-checklist-${opportunityName}`, JSON.stringify(checkedItems));
    
    // Save to list of opportunities
    const updatedList = savedOpportunities.includes(opportunityName)
      ? savedOpportunities
      : [...savedOpportunities, opportunityName];
    setSavedOpportunities(updatedList);
    localStorage.setItem("pipeline-opportunities", JSON.stringify(updatedList));
    
    toast.success(`Checklist saved for "${opportunityName}"`);
  };

  const resetChecklist = () => {
    setCheckedItems({});
    toast.info("Checklist reset");
  };

  const getTotalActions = () => {
    return pipelineData.reduce((sum, stage) => sum + stage.actions.length, 0);
  };

  const getCheckedCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Strategy
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-display font-semibold text-lg">Pipeline Conversion</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{getCheckedCount()} / {getTotalActions()} actions completed</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Opportunity Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Opportunity Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[250px]">
                <label className="text-sm font-medium mb-2 block">Opportunity Name</label>
                <Input
                  placeholder="Enter opportunity name..."
                  value={opportunityName}
                  onChange={(e) => setOpportunityName(e.target.value)}
                />
              </div>
              <Button onClick={saveChecklist} className="gap-2">
                <Save className="h-4 w-4" />
                Save Progress
              </Button>
              <Button variant="outline" onClick={resetChecklist} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
            {savedOpportunities.length > 0 && (
              <div className="mt-4">
                <label className="text-sm font-medium mb-2 block text-muted-foreground">Saved Opportunities:</label>
                <div className="flex flex-wrap gap-2">
                  {savedOpportunities.map((opp) => (
                    <Button
                      key={opp}
                      variant={opportunityName === opp ? "default" : "outline"}
                      size="sm"
                      onClick={() => loadOpportunityChecklist(opp)}
                    >
                      {opp}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Win Rate Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Current Win Rate (3-Year Avg)</p>
                <p className="text-4xl font-bold text-amber-600">9.8%</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Target Win Rate</p>
                <p className="text-4xl font-bold text-emerald-600">13.4%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Data Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pipeline Stage Conversion Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[200px]">Transition</TableHead>
                    <TableHead className="text-center">2023</TableHead>
                    <TableHead className="text-center">2024</TableHead>
                    <TableHead className="text-center">2025</TableHead>
                    <TableHead className="text-center font-bold bg-primary/10">3-Year Avg</TableHead>
                    <TableHead className="text-center">Index (Avg)</TableHead>
                    <TableHead className="text-center font-bold bg-emerald-500/10">Target</TableHead>
                    <TableHead className="text-center">Index (Target)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pipelineData.map((stage) => (
                    <TableRow key={stage.id}>
                      <TableCell className="font-medium">
                        <span className="text-primary font-semibold">{stage.transition}</span>
                        <span className="text-muted-foreground ml-2">({stage.shortName})</span>
                      </TableCell>
                      <TableCell className="text-center">{stage.y2023}</TableCell>
                      <TableCell className="text-center">{stage.y2024}</TableCell>
                      <TableCell className="text-center">{stage.y2025}</TableCell>
                      <TableCell className="text-center font-bold bg-primary/10">{stage.average}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{stage.indexAvg}</TableCell>
                      <TableCell className="text-center font-bold bg-emerald-500/10">{stage.target}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{stage.indexTarget}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-semibold">
                    <TableCell colSpan={4} className="text-right">Win Rate</TableCell>
                    <TableCell className="text-center bg-primary/15 font-bold">9.8%</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-center bg-emerald-500/15 font-bold">13.4%</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Actions Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Actions to Improve Conversion
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Check off actions as you complete them for each opportunity
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={["2-3", "4-5", "5-6"]} className="space-y-4">
              {pipelineData
                .filter((stage) => stage.actions.length > 0)
                .map((stage) => {
                  const stageCheckedCount = stage.actions.filter((a) => checkedItems[a.id]).length;
                  return (
                    <AccordionItem
                      key={stage.id}
                      value={stage.id}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4 text-left">
                          <span className="text-primary font-bold">{stage.transition}</span>
                          <span className="font-medium">{stage.shortName}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {stageCheckedCount}/{stage.actions.length} done
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          {/* Sales Actions */}
                          <div>
                            <h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary"></span>
                              Sales Actions
                            </h4>
                            <div className="space-y-3">
                              {stage.actions
                                .filter((a) => a.category === "sales")
                                .map((action) => (
                                  <div key={action.id} className="flex items-start gap-3">
                                    <Checkbox
                                      id={action.id}
                                      checked={checkedItems[action.id] || false}
                                      onCheckedChange={(checked) =>
                                        handleCheckChange(action.id, checked as boolean)
                                      }
                                    />
                                    <label
                                      htmlFor={action.id}
                                      className={`text-sm cursor-pointer leading-tight ${
                                        checkedItems[action.id]
                                          ? "text-muted-foreground line-through"
                                          : ""
                                      }`}
                                    >
                                      {action.text}
                                    </label>
                                  </div>
                                ))}
                            </div>
                          </div>
                          {/* Marketing Actions */}
                          <div>
                            <h4 className="font-semibold text-sm text-emerald-600 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                              Marketing Actions
                            </h4>
                            <div className="space-y-3">
                              {stage.actions
                                .filter((a) => a.category === "marketing")
                                .map((action) => (
                                  <div key={action.id} className="flex items-start gap-3">
                                    <Checkbox
                                      id={action.id}
                                      checked={checkedItems[action.id] || false}
                                      onCheckedChange={(checked) =>
                                        handleCheckChange(action.id, checked as boolean)
                                      }
                                    />
                                    <label
                                      htmlFor={action.id}
                                      className={`text-sm cursor-pointer leading-tight ${
                                        checkedItems[action.id]
                                          ? "text-muted-foreground line-through"
                                          : ""
                                      }`}
                                    >
                                      {action.text}
                                    </label>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PipelineConversion;
