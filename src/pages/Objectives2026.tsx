import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, Target, Lightbulb, BarChart3, Users, Calendar as CalendarIcon, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Navigation } from "@/components/Navigation";

type RAGStatus = 'red' | 'amber' | 'green' | 'not-started';

const Objectives2026 = () => {
  const [goalStatuses, setGoalStatuses] = useState<Record<string, RAGStatus>>({});
  const [goalDates, setGoalDates] = useState<Record<string, Date | undefined>>({});
  const [initiativeStatuses, setInitiativeStatuses] = useState<Record<string, RAGStatus>>({});
  const [initiativeDates, setInitiativeDates] = useState<Record<string, Date | undefined>>({});
  const [kpiStatuses, setKpiStatuses] = useState<Record<string, RAGStatus>>({});
  const [kpiDates, setKpiDates] = useState<Record<string, Date | undefined>>({});

  const lessonsLearned = [
    "Revenue accountability. Immediate improvement needed to provide visibility into role / value of all channels.",
    "Need to automate tasks. Too much manual work – eg Data collection & reporting for board.",
    "Things take longer than anticipated – be realistic with what's possible.",
    "Resources – unless we resource properly, we cannot achieve our goals. Capacity plan to be delivered."
  ];

  const strategicGoals = [
    {
      id: "gtm",
      title: "GTM & Alignment",
      icon: Target,
      color: "bg-blue-500",
      description: "Deliver a focused go-to-market strategy that generates pipeline and converts it into pipeline & sales across priority segments. Ensure marketing supports both new logo acquisition and expansion (upsell / cross-sell) to protect the €21m.",
      initiatives: [
        { id: "gtm-1", title: "Segment & ICP Focus", description: "Define priority verticals/ICP segments and create tailored playbooks and collateral." },
        { id: "gtm-2", title: "Sales & Product Alignment", description: "Run monthly GTM planning sessions with Sales and Product to ensure alignment to Pragmatic Framework; deliver quarterly sales enablement programmes (pitch decks, battle cards)." },
        { id: "gtm-3", title: "Customer Protection & Expansion Programme", description: "Launch customer marketing campaigns, customer communications plan to drive cross-sell/upsell & generate account management pipeline, launch & run successful CABs." },
        { id: "gtm-4", title: "Improve Win Rate", description: "Devise a programme on how marketing can help sales move opps through the pipeline." }
      ],
      dependencies: {
        department: "Sales, Product (Pragmatic framework)",
        ask: "Collaborate on ICP definition, messaging and sales enablement; ensure product readiness aligns with marketing campaigns and sales targets.",
        deliveryDate: "Ongoing (monthly alignment)"
      }
    },
    {
      id: "brand",
      title: "Brand, Positioning & Analyst Relations",
      icon: Lightbulb,
      color: "bg-purple-500",
      description: "Build brand awareness & successfully launch SoftCo's new positioning, develop & implement PR strategy and secure inclusion in key analyst reports.",
      initiatives: [
        { id: "brand-1", title: "Brand Awareness", description: "Launch our refreshed brand positioning." },
        { id: "brand-2", title: "Thought-Leadership & Content", description: "Improve volume and quality of thought-leadership content (whitepapers, research reports, webinars, videos, customer success stories & major research project)." },
        { id: "brand-3", title: "Analyst & PR", description: "Establish PR & Analyst Relations programme and secure inclusion in analyst/vendor reports." }
      ],
      dependencies: {
        department: "Product, Finance",
        ask: "Product must provide roadmap insights for messaging; Finance to allocate budget for brand campaigns and PR/AR activities.",
        deliveryDate: "Early Q1 2026 for brand positioning; ongoing for AR engagements"
      }
    },
    {
      id: "pipeline",
      title: "Pipeline Growth & Demand Generation",
      icon: BarChart3,
      color: "bg-green-500",
      description: "Build an AI performance-led marketing engine that delivers €11.6m of qualified pipeline (€7.5m marketing, €4.1m partnerships), reduces CAC and CPL, and employs robust automation and analytics.",
      initiatives: [
        { id: "pipeline-1", title: "Pipeline Generation", description: "Deliver €7.5m in qualified pipeline sourced via marketing & €4.1m via partnerships with improved sales lead-to-opportunity & opportunity-to-win conversion." },
        { id: "pipeline-2", title: "Cost & Efficiency Optimisation", description: "Conduct quarterly reviews with Finance to optimise cost and efficiency." },
        { id: "pipeline-3", title: "Integrated Demand Generation", description: "Execute integrated demand generation programme including digital, field events, and implement nurture flows." }
      ],
      dependencies: {
        department: "IT & Finance & Data",
        ask: "Support implementation of marketing automation and analytics; ensure data integration between CRM, marketing and finance systems.",
        deliveryDate: "Q2 2026 for automation go-live"
      }
    },
    {
      id: "partnerships",
      title: "Partnerships & Ecosystem Expansion",
      icon: Users,
      color: "bg-orange-500",
      description: "Develop a structured partner programme that recruits, enables and markets through referral and reseller partners.",
      initiatives: [
        { id: "partnerships-1", title: "Partner Recruitment & Onboarding", description: "Launch a tiered referral/reseller programme; recruit and onboard new strategic partners." },
        { id: "partnerships-2", title: "Partner Marketing & Lead Generation", description: "Develop co-marketing programmes (joint campaigns, content, events)." },
        { id: "partnerships-3", title: "Governance & Joint Planning", description: "Conduct quarterly business reviews (QBRs) and annual joint business plans with partners; monitor performance through clear KPIs and incentives; ensure partners contribute €4.1m in pipeline." }
      ],
      dependencies: {
        department: "Operations, Product",
        ask: "Operations to support partner onboarding planning, certification and portal design; Product to deliver partner-ready documentation and training materials.",
        deliveryDate: "Q1–Q3 2026 (rolling)"
      }
    }
  ];

  const kpis = [
    { id: "kpi-1", metric: "Total Qualified Pipeline", target: "€11.5m from marketing & Partnerships" },
    { id: "kpi-2", metric: "Lead to Qualified Conversion", target: "32% conversion from Sales Lead to Qualified" },
    { id: "kpi-3", metric: "Brand & Traffic Growth", target: "Branded search share ≥15%, organic traffic ≥15%; CPL reduced by ≥5%" },
    { id: "kpi-4", metric: "Analyst Inclusion", target: "1 additional analyst report; improved positioning in all existing reports; 6 customer success stories published" },
    { id: "kpi-5", metric: "Partner Recruitment", target: "3 new partners recruited and onboarded; partner-generated pipeline ≥17% of total" },
    { id: "kpi-6", metric: "Net Revenue Retention", target: ">120%" },
    { id: "kpi-7", metric: "Pipeline Conversion to Won", target: "Improvement from 14% to 18% (dependency Sales)" }
  ];

  const okrs = [
    {
      id: "okr-gtm",
      objective: "Deliver a focused, high-impact GTM that drives revenue growth and protects the customer base",
      alignedGoal: "GTM & Alignment",
      color: "bg-blue-500",
      keyResults: [
        { type: "Lagging", result: "Increase Sales Lead → Qualified conversion rate to 32% by Q4 2026" },
        { type: "Leading", result: "Deliver 4 product GTM playbooks & sales enablement kits, achieving ≥80% usage by Sales" },
        { type: "Leading", result: "Deliver Account Management pipeline contribution from marketing (aligned with Sales AM forecast)" },
        { type: "Leading", result: "Run two successful Customer Advisory Boards (CABs) with ≥70% satisfaction rates" }
      ]
    },
    {
      id: "okr-brand",
      objective: "Launch and embed SoftCo's refreshed brand to increase visibility and market perception",
      alignedGoal: "Brand & Positioning",
      color: "bg-purple-500",
      keyResults: [
        { type: "Lagging", result: "Increase branded search share by ≥15% and organic traffic by ≥15% YoY" },
        { type: "Leading", result: "Launch full brand refresh by end of Q1 2026 and ensure 100% migration across digital channels and sales collateral" },
        { type: "Leading", result: "Publish 6 customer success stories, including quantified customer impact metrics" }
      ]
    },
    {
      id: "okr-pipeline",
      objective: "Build an AI-led demand generation engine that delivers predictable pipeline",
      alignedGoal: "Pipeline Growth & Demand",
      color: "bg-green-500",
      keyResults: [
        { type: "Lagging", result: "Generate €7.5M in qualified marketing-sourced pipeline at required conversion rates" },
        { type: "Leading", result: "Reduce CPL by ≥5%" },
        { type: "Leading", result: "Deploy 4 automated nurture flows and a real-time performance dashboard by end Q2 2026" },
        { type: "Leading", result: "Improve SL → Opportunity conversion to 32% (target aligned with Sales)" }
      ]
    },
    {
      id: "okr-customer",
      objective: "Strengthen customer advocacy and expansion performance",
      alignedGoal: "Customer Protection & Expansion",
      color: "bg-teal-500",
      keyResults: [
        { type: "Lagging", result: "Support achievement of NRR >120% by generating expansion pipeline (joint with Sales)" },
        { type: "Lagging", result: "Complete 2 CABs by year end" },
        { type: "Leading", result: "Execute 3 cross-sell/upsell campaigns with ≥10% conversion to qualified opportunities" }
      ]
    },
    {
      id: "okr-partnerships",
      objective: "Build a scalable partner ecosystem that contributes predictable pipeline",
      alignedGoal: "Partnerships & Ecosystem",
      color: "bg-orange-500",
      keyResults: [
        { type: "Lagging", result: "Deliver €4.1M partner-sourced pipeline (≥19% of total pipeline including Tungsten)" },
        { type: "Leading", result: "Recruit and onboard ≥3 new strategic referral partners by Q3 2026" }
      ]
    },
    {
      id: "okr-partners-enable",
      objective: "Enable partners to market, sell, and co-deliver with SoftCo",
      alignedGoal: "Partner Recruitment & Enablement",
      color: "bg-amber-500",
      keyResults: [
        { type: "Leading", result: "Launch Partner Portal (training, deal reg, co-marketing assets) by end of Q2 2026" },
        { type: "Leading", result: "Execute 4 co-marketing initiatives (webinars, case studies, events)" },
        { type: "Leading", result: "Increase partners contributing closed-won ARR to ≥14% incl TA" }
      ]
    },
    {
      id: "okr-ar",
      objective: "Strengthen SoftCo's reputation as the AP automation leader",
      alignedGoal: "Brand, Positioning & Analyst Relations",
      color: "bg-indigo-500",
      keyResults: [
        { type: "Lagging", result: "Secure inclusion in one additional major analyst report and improve positioning in all existing reports" },
        { type: "Leading", result: "Conduct ≥6 analyst briefings supported by evidence packs and customer proof points" },
        { type: "Leading", result: "Publish 6 high-quality thought leadership assets (whitepapers, reports, op-eds)" },
        { type: "Leading", result: "Build a measurable PR strategy" }
      ]
    }
  ];

  const additionalDependencies = [
    {
      outcome: "Customer Advocacy & References Programme",
      department: "Operations",
      ask: "Provide detail so Marketing can develop case studies with quantified customer value metrics (e.g., time/cost savings) and align marketing campaigns to help customers achieve these metrics",
      deliveryDate: "Q1–Q3 2026 (rolling)"
    },
    {
      outcome: "Improve Pipeline Conversion to Win",
      department: "Sales",
      ask: "Focus on moving opportunities through the pipeline. Do not ignore pipeline opportunities & ensure timely follow up",
      deliveryDate: "Ongoing"
    }
  ];

  const getStatusColor = (status: RAGStatus) => {
    switch (status) {
      case 'green': return 'bg-green-500';
      case 'amber': return 'bg-amber-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status: RAGStatus) => {
    switch (status) {
      case 'green': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'amber': return <AlertTriangle className="h-4 w-4 text-amber-600" />;
      case 'red': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return null;
    }
  };

  const calculateGoalProgress = (goalId: string) => {
    const goal = strategicGoals.find(g => g.id === goalId);
    if (!goal) return 0;
    const greenCount = goal.initiatives.filter(i => initiativeStatuses[i.id] === 'green').length;
    return Math.round((greenCount / goal.initiatives.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">2026 Strategic Objectives</h1>
          <p className="text-muted-foreground text-lg">Marketing Department</p>
        </div>

        {/* Vision Statement */}
        <Card className="mb-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-xl">Vision Statement for 2026</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              With an AI-first mindset, become a data-driven growth engine that positions SoftCo as the AP automation leader, 
              delivers predictable pipeline, grows a trusted partner ecosystem, and influences market perception through a 
              well-developed and executed PR & analyst relations plan.
            </p>
          </CardContent>
        </Card>

        {/* Lessons Learned */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              Lessons Learned from 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {lessonsLearned.map((lesson, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-foreground">{lesson}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Strategic Goals */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Strategic Goals for 2026</h2>
          <div className="space-y-4">
            {strategicGoals.map((goal) => (
              <Collapsible key={goal.id}>
                <Card>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${goal.color}`}>
                          <goal.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-lg">{goal.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={calculateGoalProgress(goal.id)} className="w-32 h-2" />
                            <span className="text-sm text-muted-foreground">{calculateGoalProgress(goal.id)}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Select
                            value={goalStatuses[goal.id] || 'not-started'}
                            onValueChange={(value: RAGStatus) => {
                              setGoalStatuses(prev => ({ ...prev, [goal.id]: value }));
                            }}
                          >
                            <SelectTrigger className="w-28" onClick={(e) => e.stopPropagation()}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="not-started">Not Started</SelectItem>
                              <SelectItem value="green">Green</SelectItem>
                              <SelectItem value="amber">Amber</SelectItem>
                              <SelectItem value="red">Red</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className={`w-4 h-4 rounded-full ${getStatusColor(goalStatuses[goal.id] || 'not-started')}`} />
                        </div>
                        <Popover>
                          <PopoverTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <Button variant="outline" size="sm">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {goalDates[goal.id] ? format(goalDates[goal.id]!, 'dd/MM/yy') : 'Date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="end">
                            <Calendar
                              mode="single"
                              selected={goalDates[goal.id]}
                              onSelect={(date) => setGoalDates(prev => ({ ...prev, [goal.id]: date }))}
                            />
                          </PopoverContent>
                        </Popover>
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-6">{goal.description}</p>
                      
                      <h4 className="font-semibold text-foreground mb-3">Key Initiatives</h4>
                      <div className="space-y-3 mb-6">
                        {goal.initiatives.map((initiative) => (
                          <div key={initiative.id} className="flex items-start justify-between gap-4 p-3 bg-muted/50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{initiative.title}</p>
                              <p className="text-sm text-muted-foreground mt-1">{initiative.description}</p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <Select
                                value={initiativeStatuses[initiative.id] || 'not-started'}
                                onValueChange={(value: RAGStatus) => {
                                  setInitiativeStatuses(prev => ({ ...prev, [initiative.id]: value }));
                                }}
                              >
                                <SelectTrigger className="w-28">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="not-started">Not Started</SelectItem>
                                  <SelectItem value="green">Green</SelectItem>
                                  <SelectItem value="amber">Amber</SelectItem>
                                  <SelectItem value="red">Red</SelectItem>
                                </SelectContent>
                              </Select>
                              <div className={`w-4 h-4 rounded-full ${getStatusColor(initiativeStatuses[initiative.id] || 'not-started')}`} />
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <CalendarIcon className="h-4 w-4" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="end">
                                  <Calendar
                                    mode="single"
                                    selected={initiativeDates[initiative.id]}
                                    onSelect={(date) => setInitiativeDates(prev => ({ ...prev, [initiative.id]: date }))}
                                  />
                                </PopoverContent>
                              </Popover>
                              {initiativeDates[initiative.id] && (
                                <Badge variant="outline" className="text-xs">
                                  {format(initiativeDates[initiative.id]!, 'dd/MM')}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Dependencies</h4>
                        <div className="grid gap-2 text-sm">
                          <div><span className="font-medium">Department:</span> {goal.dependencies.department}</div>
                          <div><span className="font-medium">Ask:</span> {goal.dependencies.ask}</div>
                          <div><span className="font-medium">Delivery Date:</span> {goal.dependencies.deliveryDate}</div>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Success Metrics (KPIs)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {kpis.map((kpi) => (
                <div key={kpi.id} className="flex items-center justify-between gap-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{kpi.metric}</p>
                    <p className="text-sm text-muted-foreground">{kpi.target}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select
                      value={kpiStatuses[kpi.id] || 'not-started'}
                      onValueChange={(value: RAGStatus) => {
                        setKpiStatuses(prev => ({ ...prev, [kpi.id]: value }));
                      }}
                    >
                      <SelectTrigger className="w-28">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="not-started">Not Started</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="amber">Amber</SelectItem>
                        <SelectItem value="red">Red</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(kpiStatuses[kpi.id] || 'not-started')}`} />
                    {getStatusIcon(kpiStatuses[kpi.id] || 'not-started')}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {kpiDates[kpi.id] ? format(kpiDates[kpi.id]!, 'dd/MM/yy') : 'Date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar
                          mode="single"
                          selected={kpiDates[kpi.id]}
                          onSelect={(date) => setKpiDates(prev => ({ ...prev, [kpi.id]: date }))}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 2026 OKRs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            2026 OKRs (Objectives & Key Results)
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {okrs.map((okr) => (
              <Card key={okr.id} className="border-l-4" style={{ borderLeftColor: `var(--${okr.color.replace('bg-', '')})` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${okr.color}`}>
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-semibold leading-tight">{okr.objective}</CardTitle>
                      <Badge variant="outline" className="mt-2 text-xs">{okr.alignedGoal}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {okr.keyResults.map((kr, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Badge 
                          variant={kr.type === "Lagging" ? "default" : "secondary"} 
                          className={`text-xs flex-shrink-0 ${kr.type === "Lagging" ? "bg-blue-600" : "bg-slate-500"}`}
                        >
                          {kr.type}
                        </Badge>
                        <span className="text-muted-foreground">{kr.result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Dependencies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Additional Cross-Department Dependencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {additionalDependencies.map((dep, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{dep.outcome}</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Required:</span> {dep.department}</p>
                    <p><span className="font-medium">Ask:</span> {dep.ask}</p>
                    <Badge variant="outline" className="mt-2">{dep.deliveryDate}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Objectives2026;
