import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Zap, Users, Calendar, Mail, Phone, Linkedin } from "lucide-react";

export const PipelinePlaybook = () => {
  const q1Campaigns = [
    { campaign: "eInvoicing - Get ready!", executionBy: "Sales & SDR", frequency: "Monthly" },
    { campaign: "AI in AP in 2026 & Beyond", executionBy: "Sales & SDR", frequency: "Quarterly" },
    { campaign: "ERP Migration - Where SoftCo fits in", executionBy: "Sales & SDR", frequency: "Quarterly" },
    { campaign: "Accruals @ Month end", executionBy: "SDR", frequency: "Monthly" },
    { campaign: "Month end chaos", executionBy: "SDR", frequency: "Monthly" },
    { campaign: "Compliance - Audit", executionBy: "SDR", frequency: "Quarterly" },
    { campaign: "Manage Fraud & Risk (use stories in the news)", executionBy: "SDR", frequency: "Quarterly" },
    { campaign: "IFOL Blogs - use industry content to build (x3)", executionBy: "SDR", frequency: "Monthly" },
    { campaign: "Hiring AP headcount", executionBy: "SDR", frequency: "Weekly" },
    { campaign: "New Hires campaign", executionBy: "SDR", frequency: "Monthly" },
  ];

  const cadenceSteps = [
    { day: "Day 1", action: "Email #1 (value-led, personalised) + LinkedIn view/connection" },
    { day: "Day 2", action: "Light bump or resource email" },
    { day: "Day 3", action: "Phone call attempt #1" },
    { day: "Day 5", action: "Email #3 (case study or insight)" },
    { day: "Day 6", action: "LinkedIn message or comment/engagement" },
    { day: "Day 8", action: "Phone call attempt #2" },
    { day: "Day 10", action: "Email #4 (direct ask)" },
    { day: "Day 12-14", action: "Final breakup/soft-close email" },
  ];

  return (
    <section id="pipeline-playbook" className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
              Pipeline <span className="text-primary">Playbook 2026</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Disciplined execution and operational excellence to drive predictable pipeline growth
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="targeting">ICP & Accounts</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="execution">Execution</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">2026 Objective</CardTitle>
                      <CardDescription className="text-base mt-2">
                        Create a predictable, scalable, and high-quality pipeline engine
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-1">$2M</div>
                      <div className="text-sm text-muted-foreground">Qualified pipeline per month</div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-1">$4M</div>
                      <div className="text-sm text-muted-foreground">Close net new revenue target</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Three Core Focus Areas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-card border border-border">
                        <div className="font-medium">Pipeline Creation</div>
                      </div>
                      <div className="p-3 rounded-lg bg-card border border-border">
                        <div className="font-medium">Prompt Lead Follow-Up</div>
                      </div>
                      <div className="p-3 rounded-lg bg-card border border-border">
                        <div className="font-medium">Campaign Execution & Reporting</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Setting the Scene</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    2026 marks a pivotal year in our commercial strategy. As market dynamics evolve and buyers become more selective, our ability to execute with discipline will be a defining competitive advantage.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Our Success Depends On:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Engaging prospects earlier with more relevant, value-led messaging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Responding to inbound leads faster and with higher-quality follow-up</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Strengthening campaign execution through clear sequencing and accountability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Improving conversion rates at every stage of the funnel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Enhanced campaign reporting to understand what's working</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="targeting" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Our ICP</CardTitle>
                      <CardDescription className="text-base mt-2">
                        Ideal Customer Profile for 2026
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Revenue</div>
                      <div className="text-lg font-semibold">$300M - $1B</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Invoice Volume</div>
                      <div className="text-lg font-semibold">15,000+ (ideally 30,000+)</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Regions</div>
                      <div className="text-sm">US/Canada & Northern Europe (UK, IE, Nordics, Benelux, DE)</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">Profile</div>
                      <div className="text-sm">Multiple locations, growing, complexity, capital to invest</div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Core Industries</div>
                    <div className="flex flex-wrap gap-2">
                      {["Manufacturing", "Construction", "Retail", "Food & Beverage", "Oil/Gas/Energy", "Emerging Industries"].map((industry) => (
                        <span key={industry} className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Secondary Industries</div>
                    <div className="flex flex-wrap gap-2">
                      {["Hospitality", "Transportation", "Aviation"].map((industry) => (
                        <span key={industry} className="px-3 py-1 rounded-full bg-accent/20 text-sm">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Target Accounts & Tiering</CardTitle>
                  <CardDescription>
                    5,000 ICP accounts prioritized for maximum impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      <div className="font-semibold mb-2">Tier 1 – High Priority (Top 5-10%)</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Highest revenue potential & strong product-market fit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Named strategic accounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>AE + SDR joint coverage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>High touch, personalised engagement required</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <div className="font-semibold mb-2">Tier 2 – Mid Priority (Next 80-90%)</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>Good fit with moderate potential</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>SDR-led campaigns with AE collaboration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>Mixed personalised + standardised outreach</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>Campaign-driven engagement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="campaigns" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Q1 2026 Campaigns</CardTitle>
                  <CardDescription>
                    Structured campaign schedule for first quarter execution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 text-sm font-semibold">Campaign</th>
                          <th className="text-left py-3 px-2 text-sm font-semibold">Execution By</th>
                          <th className="text-left py-3 px-2 text-sm font-semibold">Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        {q1Campaigns.map((campaign, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                            <td className="py-3 px-2 text-sm">{campaign.campaign}</td>
                            <td className="py-3 px-2 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                campaign.executionBy.includes("Sales") 
                                  ? "bg-primary/10 text-primary" 
                                  : "bg-accent/20 text-foreground"
                              }`}>
                                {campaign.executionBy}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-sm font-medium">{campaign.frequency}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Campaign Requirements</CardTitle>
                  <CardDescription>
                    Every campaign must include these elements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Clear Objective: Meetings, attendance, awareness, expansion",
                      "Defined Audience: ICP tier, industry, segment, persona",
                      "Messaging Theme: Pain points, value propositions, narrative",
                      "Content & Assets: Case studies, guides, videos, reports",
                      "Channel Mix: Email, phone, LinkedIn, events, nurture",
                      "Role Responsibilities: Marketing, SDR, AE ownership",
                      "Cadence: Timeline and activity structure",
                      "KPIs: Meetings, responses, conversions, coverage"
                    ].map((requirement, index) => (
                      <div key={index} className="p-3 rounded-lg bg-card border border-border text-sm">
                        {requirement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="execution" className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Standard Campaign Cadence</CardTitle>
                      <CardDescription className="text-base mt-2">
                        10-14 day multi-channel sequence
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cadenceSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-accent/5 border border-border">
                        <div className="w-20 flex-shrink-0 font-semibold text-primary">{step.day}</div>
                        <div className="text-sm">{step.action}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Channels & Expectations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-5 h-5 text-primary" />
                        <div className="font-semibold">Email</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        High-quality messaging, personalisation tied to persona, industry, or known challenge
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-5 h-5 text-primary" />
                        <div className="font-semibold">Phone</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Two clear attempts per sequence; voicemails include value + next step
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Linkedin className="w-5 h-5 text-primary" />
                        <div className="font-semibold">LinkedIn</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Connection requests, post comments, shares, voice notes (optional)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Sniper Emails (High-Value Accounts)</CardTitle>
                  <CardDescription>
                    Highly personalised outreach for Tier 1 and select Tier 2 accounts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">What Good Sniper Emails Include</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Specific personalisation (role, recent news, company initiative, personal post)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>A clear problem statement based on real insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>A short, sharp value proposition (1-2 sentences)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>A simple CTA ("Worth a 10-minute conversation?")</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Written in plain, human language—no fluff, no jargon</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-semibold mb-3">When to Use Sniper Emails</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Before senior stakeholder outreach",
                        "For strategic accounts requiring high touch",
                        "To warm AEs' pipeline with targeted engagement",
                        "During ABM-style campaigns"
                      ].map((use, index) => (
                        <div key={index} className="p-2 rounded-lg bg-primary/5 border border-primary/10 text-sm">
                          {use}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3">2026 Success Formula</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="p-3 rounded-lg bg-background/50">
                    <div className="font-semibold mb-1">Prioritise</div>
                    <div className="text-muted-foreground">The right accounts</div>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <div className="font-semibold mb-1">Execute</div>
                    <div className="text-muted-foreground">Structured campaigns</div>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <div className="font-semibold mb-1">Move Fast</div>
                    <div className="text-muted-foreground">On all leads</div>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <div className="font-semibold mb-1">Measure</div>
                    <div className="text-muted-foreground">Everything</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};