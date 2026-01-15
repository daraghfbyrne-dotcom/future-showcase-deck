import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Target, 
  Globe, 
  Video, 
  MousePointerClick, 
  Star, 
  Mail, 
  Calculator,
  Play,
  FileText,
  Calendar,
  TrendingUp,
  Zap,
  CheckCircle2,
  Users,
  Megaphone,
  Rocket,
  BarChart3,
  Layout,
  MessageSquare,
  CircleDot
} from "lucide-react";
import { CardContent } from "@/components/ui/card";

const DemandLeadGenStrategy = () => {
  const sqlTargets = [
    { channel: "Organic", target: "~97", role: "Scalable, compounding demand" },
    { channel: "Webinars", target: "~32", role: "Mid-funnel qualification" },
    { channel: "PPC", target: "~16", role: "High-intent capture" },
    { channel: "Review Sites (SourceForge)", target: "Included in PPC/High-Intent", role: "Comparison-stage demand" },
    { channel: "Marketing Automation", target: "~9–10", role: "Monetise latent intent" },
  ];

  const conversionAssets = [
    {
      icon: Calculator,
      name: "ROI Calculator",
      description: "Positions SoftCo on quantified value, not features. Primary BOF conversion for financially-minded buyers.",
      usage: "Used across Organic, PPC, Review Sites, and Nurture"
    },
    {
      icon: Play,
      name: "Interactive Product Demo / FDD Demo",
      description: "Self-serve product experience for high-intent accounts. Reduces friction to evaluation.",
      usage: "PPC destination, Post-webinar CTA, Review-site follow-up asset"
    },
    {
      icon: FileText,
      name: "Case Studies & Proof Points",
      description: "Embedded across BOF pages, nurture, and sales-adjacent journeys.",
      usage: "Used throughout buyer journey"
    }
  ];

  const phases = [
    {
      quarter: "Q1",
      title: "Foundation",
      activities: "Brand launch, website rebuild, SEO reset, initial webinar cadence"
    },
    {
      quarter: "Q2",
      title: "Scale",
      activities: "Automation live, conversion assets fully embedded, PPC + SourceForge optimised"
    },
    {
      quarter: "Q3–Q4",
      title: "Optimise",
      activities: "Focus on conversion lift, efficiency, and scaling proven motions"
    }
  ];

  // Q1 2026 Campaigns Data
  const campaigns = [
    {
      name: "Brand Refresh + Sales Enablement",
      tier: "1",
      objective: "Launch SoftCo's refreshed brand and fully enable Sales with updated positioning and collateral",
      audience: "Market, customers, partners, internal teams",
      status: "defined",
      owner: "John",
      deliverables: ["New website", "Core sales collateral", "Visual identity rollout", "Sales enablement assets", "Internal & external launch plan"],
      teamOwners: { content: "Oisin", web: "Blendi", design: "Enes" }
    },
    {
      name: "E-Invoicing GTM",
      tier: "1",
      objective: "Generate pipeline for E-Invoicing and establish GTM best practice",
      audience: "Finance & AP leaders",
      status: "defined",
      owner: "John",
      enablementSpine: ["GTM pitch deck", "Datasheet", "Talk track", "Objection handling"],
      marketActivation: ["Dedicated landing page", "Blog series", "Webinar", "Email nurture", "LinkedIn promotion"]
    },
    {
      name: "Analytics GTM",
      tier: "1b",
      objective: "Pilot a structured GTM motion for Analytics and support pipeline creation",
      audience: "Data-driven finance teams",
      status: "defined",
      owner: "John",
      q1Focus: ["GTM process and enablement first", "Controlled activation to test messaging"]
    },
    {
      name: "iPaaS GTM",
      tier: "1b",
      objective: "Establish a repeatable GTM process for iPaaS and support complex Sales conversations",
      audience: "IT & Finance stakeholders",
      status: "defined",
      owner: "John",
      q1Focus: ["Enablement over scale", "Early proof development"]
    },
    {
      name: "Compliance & Audit",
      tier: "2",
      objective: "Generate incremental pipeline and support Sales opportunities",
      audience: "Compliance, Audit & Finance teams",
      status: "defined",
      owner: "John",
      marketActivation: ["Blog series", "Landing page", "Webinar", "Email nurture"]
    },
    {
      name: "AP Automation Differentiation",
      tier: "3",
      objective: "Always-on pipeline generation and TOF awareness",
      audience: "Broad AP & Finance audience",
      status: "in-market",
      owner: "John",
      marketActivation: ["Core narrative", "Video snippets", "Social & Display", "Retargeting support for Tier 1 campaigns"]
    }
  ];

  const webinars = [
    {
      month: "January",
      date: "21st January",
      title: "2026 Guide to Evaluating AP Automation Before You Commit",
      status: "Live promotion in market",
      purpose: "Support brand authority post-rebrand. Establish AP automation evaluation framework. Feed TOF and early-stage pipeline."
    },
    {
      month: "February/March",
      campaign: "E-Invoicing (Tier 1)",
      title: "The e-Invoicing Tipping Point: What's Changing and Why It Matters to AP",
      purpose: "Drive pipeline and position SoftCo as an authority on regulatory and operational change."
    },
    {
      month: "February/March",
      campaign: "Analytics (Tier 1b)",
      title: "From Invoice Data to Insight: How AP Analytics Drive Better Decisions",
      purpose: "Support the Analytics GTM pilot and enable Sales-led conversations."
    },
    {
      month: "February/March",
      campaign: "Compliance & Audit (Tier 2)",
      title: "Staying Compliant as You Automate: AP Audit and Control Best Practices",
      purpose: "Generate incremental pipeline and support active sales opportunities."
    },
    {
      month: "February/March",
      campaign: "iPaaS (Tier 1b)",
      title: "AP Automation and ERPs: Lessons from Real Implementations",
      purpose: "Establish credibility for iPaaS and support multi-stakeholder sales cycles."
    }
  ];

  const teamRoles = [
    { name: "John", role: "Marketing Manager", responsibilities: "Campaign ownership, prioritisation, Sales alignment, final sign-off" },
    { name: "Oisin", role: "Content Manager", responsibilities: "Campaign narrative, blogs, thought leadership, webinar content" },
    { name: "Blendi", role: "Web Developer", responsibilities: "Campaign landing pages, website updates, technical delivery" },
    { name: "Enes", role: "Graphic Designer", responsibilities: "Visual identity, social assets, datasheets, video graphics" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "defined":
        return <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">🟡 Defined</Badge>;
      case "enablement":
        return <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">🔵 Enablement Building</Badge>;
      case "in-market":
        return <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30">🟣 In Market</Badge>;
      case "optimising":
        return <Badge className="bg-green-500/20 text-green-600 border-green-500/30">🟢 Optimising</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "1":
        return <Badge className="bg-primary text-primary-foreground">Tier 1</Badge>;
      case "1b":
        return <Badge className="bg-accent text-accent-foreground">Tier 1b</Badge>;
      case "2":
        return <Badge variant="secondary">Tier 2</Badge>;
      case "3":
        return <Badge variant="outline">Tier 3</Badge>;
      default:
        return <Badge variant="outline">Tier {tier}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <Badge variant="outline" className="mb-4">2026 Strategy</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Demand & Lead Gen <span className="text-primary">Strategy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Marketing-owned SQL generation through a connected execution system
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="strategy" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-auto grid-cols-2">
                <TabsTrigger value="strategy" className="px-6">Strategy Overview</TabsTrigger>
                <TabsTrigger value="campaigns" className="px-6">Campaigns – Q1 2026</TabsTrigger>
              </TabsList>
            </div>

            {/* Strategy Overview Tab */}
            <TabsContent value="strategy">
              {/* Key Points Summary */}
              <div className="max-w-5xl mx-auto mb-16">
                <KeyPointsSummary
                  points={[
                    "~155 SQLs annual target across all marketing-owned channels",
                    "Organic demand is the primary scalable engine (~97 SQLs)",
                    "Core conversion assets: ROI Calculator, Interactive Demo, Case Studies",
                    "Q1 Foundation → Q2 Scale → Q3-Q4 Optimize phased approach"
                  ]}
                />
              </div>

              {/* SQL Targets Table */}
              <div className="max-w-5xl mx-auto mb-16">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">2026 Marketing SQL Targets</h2>
                      <p className="text-sm text-muted-foreground">Marketing-Owned</p>
                    </div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Channel</TableHead>
                        <TableHead>Annual SQL Target</TableHead>
                        <TableHead>Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sqlTargets.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.channel}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{row.target}</Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{row.role}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-primary/5 font-semibold">
                        <TableCell>Total</TableCell>
                        <TableCell>
                          <Badge className="bg-primary text-primary-foreground">~155 SQLs</Badge>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>

              {/* Demand Engine Overview */}
              <div className="max-w-5xl mx-auto mb-16">
                <Card className="p-8 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Demand Engine Overview</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Marketing demand operates as a connected execution system:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-background rounded-lg p-4 border">
                      <div className="font-semibold mb-1">Organic + PR</div>
                      <p className="text-sm text-muted-foreground">Create trust and inbound intent</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <div className="font-semibold mb-1">Webinars</div>
                      <p className="text-sm text-muted-foreground">Convert interest into qualified engagement</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <div className="font-semibold mb-1">PPC + Review Sites</div>
                      <p className="text-sm text-muted-foreground">Capture buyers already in market</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <div className="font-semibold mb-1">Conversion Assets</div>
                      <p className="text-sm text-muted-foreground">ROI calculator, interactive demo accelerate qualification</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <div className="font-semibold mb-1">Marketing Automation</div>
                      <p className="text-sm text-muted-foreground">Monetises non-immediate intent</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Core Conversion Assets */}
              <div className="max-w-5xl mx-auto mb-16">
                <h2 className="font-display text-2xl font-bold text-center mb-2">Core Conversion Assets</h2>
                <p className="text-center text-muted-foreground mb-8">Shared across all channels — the primary SQL accelerators in 2026</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {conversionAssets.map((asset, index) => {
                    const Icon = asset.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{asset.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{asset.description}</p>
                        <Badge variant="outline" className="text-xs">{asset.usage}</Badge>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Channel Execution Plans */}
              <div className="max-w-5xl mx-auto mb-16">
                <h2 className="font-display text-3xl font-bold text-center mb-2">Channel Execution Plans</h2>
                <p className="text-center text-muted-foreground mb-12">High-level strategy by channel</p>
                
                <div className="space-y-8">
                  {/* 1. Organic Demand */}
                  <Card className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-xl">1. Organic Demand</h3>
                          <Badge>~97 SQLs</Badge>
                        </div>
                        <p className="text-muted-foreground">Primary scalable demand engine</p>
                      </div>
                    </div>
                    <div className="ml-16 space-y-6">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Personalized, Persona-Driven Landing Pages
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Build tailored landing experiences for each core persona, aligning messaging, proof points, and CTAs to specific pains, use cases, and buying stages to lift conversion rates.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Technical SEO Overhaul During Rebuild
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Execute a full technical SEO refresh focused on fast load times, clean and scalable code, structured data optimized for LLM discovery, WCAG-compliant accessibility, and strengthened internal linking to improve crawlability, rankings, and UX.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Authority & Trust Building (E-E-A-T)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Embed expert commentary from our new copywriter, supported by case studies, customer stories, and measurable proof points across priority pages to reinforce credibility, improve E-E-A-T signals, and drive higher-intent conversions.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* 2. Webinars */}
                  <Card className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Video className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-xl">2. Webinars</h3>
                          <Badge variant="secondary">~32 SQLs</Badge>
                        </div>
                        <p className="text-muted-foreground">Mid-funnel qualification and intent escalation</p>
                      </div>
                    </div>
                    <div className="ml-16 space-y-6">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          Strategic Webinar Themes
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Deliver a mix of thought leadership, technology deep dives, and AP best practices, alongside partner-led webinars with Interpath, PwC, and Tungsten to add external credibility, expand reach, and attract higher-quality audiences.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          New Webinar Platform: Contrast
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Launch webinars on Contrast to automatically generate high-impact social video shorts, extending reach, fueling always-on social distribution, and increasing post-event engagement.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          Personalized, Automated Follow-Up
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Deploy persona-based, automated post-webinar follow-ups with tailored content, clips, and CTAs to accelerate nurturing, re-engagement, and pipeline influence.
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* 3. PPC */}
                  <Card className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                        <MousePointerClick className="w-6 h-6 text-warning" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-xl">3. PPC (Full-Funnel)</h3>
                          <Badge variant="secondary">~16 SQLs</Badge>
                        </div>
                        <p className="text-muted-foreground">Scale the proven full-funnel PPC framework</p>
                      </div>
                    </div>
                    <div className="ml-16 space-y-6">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-warning" />
                          Scale the Proven Full-Funnel PPC Framework
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Expand the TOF / MOF / BOF structure established in Q4, building on early performance gains, including the first webinar-sourced leads, to drive consistent pipeline impact.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-muted/30 rounded-lg p-4 border">
                          <h5 className="font-medium text-sm mb-2">Top-of-Funnel</h5>
                          <p className="text-xs text-muted-foreground mb-2">Brand Awareness at Scale</p>
                          <p className="text-xs text-muted-foreground">
                            Run quarterly, themed awareness campaigns targeting 35,000+ finance leaders across the US & UK, using video-first formats to maximize reach and recall.
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">KPIs: CPM, Reach</Badge>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 border">
                          <h5 className="font-medium text-sm mb-2">Mid-Funnel</h5>
                          <p className="text-xs text-muted-foreground mb-2">Webinar & Event Activation</p>
                          <p className="text-xs text-muted-foreground">
                            Promote webinars, conferences, and high-value mid-funnel assets to segmented finance audiences, optimized to deliver high-quality registrations at efficient costs.
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">KPIs: CPM, CPL</Badge>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 border">
                          <h5 className="font-medium text-sm mb-2">Bottom-of-Funnel</h5>
                          <p className="text-xs text-muted-foreground mb-2">Conversion & Retargeting</p>
                          <p className="text-xs text-muted-foreground">
                            Capture demand from high-intent visitors, engaged audiences, and open opportunities, with a focus on demo requests and SQL-ready leads.
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">KPI: Cost per Lead</Badge>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-3">Always-On Visibility Across Warm Audiences</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Maintain continuous presence via Google Display, Discovery, and YouTube to re-engage past visitors, reinforce brand authority, and efficiently fuel mid-funnel webinar demand.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4 text-warning" />
                              Retargeting Campaigns (Primary Focus)
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              Serve tailored creative to past website visitors and high-intent segments to strengthen recall and guide prospects back into demo and content journeys.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <Play className="w-4 h-4 text-warning" />
                              Webinar Promotion via Discovery & YouTube In-Feed
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              Amplify webinars and key mid-funnel assets across high-engagement Google surfaces, reaching audiences already familiar with SoftCo's brand and solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 4. Review Sites */}
                  <Card className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-success" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-xl">4. Review Sites — SourceForge (Primary)</h3>
                        </div>
                        <p className="text-muted-foreground">Capture comparison-stage buyers already evaluating AP automation solutions</p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <h4 className="font-medium mb-3">Plan Focus</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          SourceForge as primary review-site channel
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Fixed-cost, low-risk demand capture
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Named buyer intent routed into: Direct qualification where ready, Fast-track nurture where not
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Key follow-up assets: ROI calculator, Interactive demo, Customer proof
                        </li>
                      </ul>
                    </div>
                  </Card>

                  {/* 5. Marketing Automation */}
                  <Card className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-xl">5. Marketing Automation & Nurture</h3>
                          <Badge variant="secondary">~9–10 SQLs</Badge>
                        </div>
                        <p className="text-muted-foreground">Monetise non-immediate and returning intent</p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <h4 className="font-medium mb-3">Plan Focus</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Lead scoring aligned to marketing SQL criteria
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          High-intent nurtures for: Review-site visitors, Multiple webinar attendees, ROI calculator users
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Lower-intent journeys focused on education → conversion
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Pacing & Phasing */}
              <div className="max-w-5xl mx-auto mb-16">
                <Card className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Pacing & Phasing</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {phases.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant={index === 0 ? "default" : "secondary"} className="text-lg px-3 py-1">
                            {phase.quarter}
                          </Badge>
                          <span className="font-semibold">{phase.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{phase.activities}</p>
                        {index < phases.length - 1 && (
                          <div className="hidden md:block absolute top-4 -right-3">
                            <TrendingUp className="w-5 h-5 text-muted-foreground/30" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Q1 Campaign Calendar */}
              <div className="w-full max-w-7xl mx-auto">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold">Q1 2026 Campaign Calendar</h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs py-0">E-Invoicing</Badge>
                      <Badge className="bg-accent/10 text-accent border-accent/20 text-xs py-0">Compliance & Audit</Badge>
                      <Badge className="bg-success/10 text-success border-success/20 text-xs py-0">Automation & Time Savings</Badge>
                    </div>
                  </div>

                  {/* Timeline Table */}
                  <div className="overflow-x-auto">
                    <Table className="text-sm">
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold text-xs py-2 w-[220px]">Activity</TableHead>
                          <TableHead className="font-semibold text-xs text-center py-2">January</TableHead>
                          <TableHead className="font-semibold text-xs text-center py-2">February</TableHead>
                          <TableHead className="font-semibold text-xs text-center py-2">March</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Marketing Section Header */}
                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={4} className="font-bold text-xs text-primary py-1.5">
                            Marketing (Paid & Organic Social + Google Display)
                          </TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="text-xs py-1.5">eInvoicing Content</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-primary/10 rounded px-1.5 py-0.5 text-xs">Blogs & Whitepaper (2nd wk)</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-primary/10 rounded px-1.5 py-0.5 text-xs">Ongoing</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-primary/10 rounded px-1.5 py-0.5 text-xs">Through End</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Compliance & Audit</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs">Launch</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs">Ongoing</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs">Ongoing</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Automation & Time Savings</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs">Launch</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs">Ongoing</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs">Ongoing</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">SourceForge Marketplace</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="text-xs text-muted-foreground">2nd last wk</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">Through End</span>
                          </TableCell>
                        </TableRow>

                        {/* Webinars Section Header */}
                        <TableRow className="bg-warning/5">
                          <TableCell colSpan={4} className="font-bold text-xs text-warning py-1.5">
                            Webinars
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Webinar</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-warning/10 rounded px-1.5 py-0.5 text-xs font-medium">21st</span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-warning/10 rounded px-1.5 py-0.5 text-xs font-medium">19th</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">eInvoicing Webinar with PwC</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-warning/10 rounded px-1.5 py-0.5 text-xs font-medium">26th (Cust & Pros)</span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                        </TableRow>

                        {/* Events Section Header */}
                        <TableRow className="bg-accent/5">
                          <TableCell colSpan={4} className="font-bold text-xs text-accent py-1.5">
                            Executive Dinners & Conferences
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Dublin Executive Dinner</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs font-medium">29th (10 Prospects)</span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">London Executive Dinner</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs font-medium">25th</span>
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">New York Executive Dinner</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs font-medium">12th</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">SSOW Orlando</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs font-medium">17th - 19th</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Lumenia HeadtoHead Birmingham</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center text-muted-foreground py-1.5">—</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs font-medium">24th - 25th</span>
                          </TableCell>
                        </TableRow>

                        {/* SDR Section Header */}
                        <TableRow className="bg-muted/50">
                          <TableCell colSpan={4} className="font-bold text-xs py-1.5">
                            SDR Campaigns
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">E-Invoicing Outreach</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-primary/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-primary/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-primary/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Compliance & Audit Outreach</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-accent/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Automation & Time Savings Outreach</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-success/10 rounded px-1.5 py-0.5 text-xs">Active</span>
                          </TableCell>
                        </TableRow>

                        {/* AE Section Header */}
                        <TableRow className="bg-muted/50">
                          <TableCell colSpan={4} className="font-bold text-xs py-1.5">
                            AE Outreach
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-xs py-1.5">Target Account Outreach</TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">From 2nd wk</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">Ongoing</span>
                          </TableCell>
                          <TableCell className="text-center py-1.5">
                            <span className="bg-muted rounded px-1.5 py-0.5 text-xs">Through End</span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Campaigns – Q1 2026 Tab */}
            <TabsContent value="campaigns">
              {/* Purpose Section */}
              <div className="max-w-5xl mx-auto mb-12">
                <Card className="p-8 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Purpose of This Tab</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>Clear visibility on what campaigns are running</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>Confidence in roles & responsibilities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>A shared view of priorities, sequencing, and status</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>A repeatable campaign operating model for GTM</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    All campaigns — regardless of size — follow the same framework.
                  </p>
                </Card>
              </div>

              {/* Campaign Framework */}
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="font-display text-2xl font-bold text-center mb-8">🧱 Campaign Framework</h2>
                <p className="text-center text-muted-foreground mb-8">Used for Every Campaign</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 1. Campaign Definition */}
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                      <h3 className="font-semibold text-lg">Campaign Definition</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Campaign Name</li>
                      <li>• Tier (1 / 1b / 2 / 3)</li>
                      <li>• Objective (brand, enablement, pipeline)</li>
                      <li>• Primary Audience / ICP</li>
                      <li>• Core Narrative</li>
                      <li>• Primary CTA</li>
                      <li>• Success Metrics</li>
                      <li className="font-medium text-foreground pt-2">Campaign Owner: John</li>
                      <li className="text-xs">(Single point of accountability)</li>
                    </ul>
                  </Card>

                  {/* 2. Sales Enablement Spine */}
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">2</div>
                      <h3 className="font-semibold text-lg">Sales Enablement Spine</h3>
                    </div>
                    <Badge variant="outline" className="mb-4 text-xs">Mandatory for Tier 1 & 1b</Badge>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• GTM pitch deck / modular slides</li>
                      <li>• Datasheet</li>
                      <li>• Talk track</li>
                      <li>• Objection handling</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      Purpose: Ensure Sales is enabled before market activation.
                    </p>
                  </Card>

                  {/* 3. Market Activation */}
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning font-bold">3</div>
                      <h3 className="font-semibold text-lg">Market Activation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Campaigns are activated through:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dedicated landing page</li>
                      <li>• Blogs</li>
                      <li>• Social media & video assets</li>
                      <li>• Webinar (where applicable)</li>
                      <li>• Email nurture</li>
                      <li>• Paid activation (LinkedIn / Display)</li>
                    </ul>
                  </Card>

                  {/* 4. Proof & Momentum */}
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success font-bold">4</div>
                      <h3 className="font-semibold text-lg">Proof & Momentum</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Case study or customer quote</li>
                      <li>• Internal POV or data</li>
                      <li>• Sales feedback</li>
                    </ul>
                  </Card>

                  {/* 5. Campaign Status */}
                  <Card className="p-6 md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">5</div>
                      <h3 className="font-semibold text-lg">Campaign Status</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Each campaign has one status at any time:</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">🟡 Defined</Badge>
                      <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">🔵 Enablement Building</Badge>
                      <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30">🟣 In Market</Badge>
                      <Badge className="bg-green-500/20 text-green-600 border-green-500/30">🟢 Optimising</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Tier Definitions */}
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="font-display text-2xl font-bold text-center mb-6">🧭 Q1 2026 Campaign Priorities</h2>
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Tier Definitions</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <Badge className="bg-primary text-primary-foreground mb-2">Tier 1</Badge>
                      <p className="text-sm text-muted-foreground">Business-critical, must deliver in Q1</p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                      <Badge className="bg-accent text-accent-foreground mb-2">Tier 1b</Badge>
                      <p className="text-sm text-muted-foreground">Strategic GTMs (process first, scale later)</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg border">
                      <Badge variant="secondary" className="mb-2">Tier 2</Badge>
                      <p className="text-sm text-muted-foreground">Pipeline expansion</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border">
                      <Badge variant="outline" className="mb-2">Tier 3</Badge>
                      <p className="text-sm text-muted-foreground">Always-on pipeline feed</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Campaign Overview */}
              <div className="max-w-6xl mx-auto mb-12">
                <h2 className="font-display text-2xl font-bold text-center mb-8">🚀 Q1 2026 Campaign Overview</h2>
                
                <div className="space-y-6">
                  {campaigns.map((campaign, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-muted-foreground">{index + 1}.</span>
                          <div>
                            <h3 className="font-semibold text-xl">{campaign.name}</h3>
                            <p className="text-sm text-muted-foreground">{campaign.objective}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTierBadge(campaign.tier)}
                          {getStatusBadge(campaign.status)}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm mb-2">
                            <span className="font-medium">Primary Audience:</span>{" "}
                            <span className="text-muted-foreground">{campaign.audience}</span>
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Owner:</span>{" "}
                            <span className="text-muted-foreground">{campaign.owner}</span>
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          {campaign.deliverables && (
                            <div>
                              <p className="text-sm font-medium mb-1">Key Deliverables:</p>
                              <div className="flex flex-wrap gap-1">
                                {campaign.deliverables.map((d, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">{d}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {campaign.enablementSpine && (
                            <div>
                              <p className="text-sm font-medium mb-1">Enablement Spine:</p>
                              <div className="flex flex-wrap gap-1">
                                {campaign.enablementSpine.map((e, i) => (
                                  <Badge key={i} variant="outline" className="text-xs bg-accent/10">{e}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {campaign.marketActivation && (
                            <div>
                              <p className="text-sm font-medium mb-1">Market Activation:</p>
                              <div className="flex flex-wrap gap-1">
                                {campaign.marketActivation.map((m, i) => (
                                  <Badge key={i} variant="outline" className="text-xs bg-warning/10">{m}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {campaign.q1Focus && (
                            <div>
                              <p className="text-sm font-medium mb-1">Q1 Focus:</p>
                              <div className="flex flex-wrap gap-1">
                                {campaign.q1Focus.map((f, i) => (
                                  <Badge key={i} variant="outline" className="text-xs bg-primary/10">{f}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {campaign.teamOwners && (
                            <div>
                              <p className="text-sm font-medium mb-1">Team Owners:</p>
                              <p className="text-xs text-muted-foreground">
                                Content: {campaign.teamOwners.content} • Web: {campaign.teamOwners.web} • Design: {campaign.teamOwners.design}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Webinar Alignment */}
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="font-display text-2xl font-bold text-center mb-8">🎥 Webinar Alignment – Q1 2026</h2>
                
                <div className="space-y-6">
                  {/* January Confirmed */}
                  <Card className="p-6 border-warning/30 bg-warning/5">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-warning text-warning-foreground">January (Confirmed)</Badge>
                      <span className="text-sm text-muted-foreground">21st January</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{webinars[0].title}</h3>
                    <Badge variant="outline" className="mb-3 text-xs">Live promotion in market</Badge>
                    <p className="text-sm text-muted-foreground">{webinars[0].purpose}</p>
                  </Card>

                  {/* February & March */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">February & March – Working Webinar Titles by Campaign</h3>
                    <div className="space-y-4">
                      {webinars.slice(1).map((webinar, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{webinar.campaign}</Badge>
                          </div>
                          <h4 className="font-medium mb-1">{webinar.title}</h4>
                          <p className="text-sm text-muted-foreground">{webinar.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Webinar Execution Principle */}
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-4">Webinar Execution Principle</h3>
                    <p className="text-lg font-medium text-primary mb-4">Webinars are campaign assets, not standalone events.</p>
                    <p className="text-sm text-muted-foreground mb-3">Each webinar must:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Have a dedicated landing page
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Be supported by blogs and social promotion
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Generate short video clips (Contrast + YouTube)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Feed an email nurture sequence
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* Team Roles */}
              <div className="max-w-5xl mx-auto mb-12">
                <h2 className="font-display text-2xl font-bold text-center mb-8">👥 Team Roles & Responsibilities</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {teamRoles.map((member, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.responsibilities}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* How This Tab Is Used */}
              <div className="max-w-5xl mx-auto">
                <Card className="p-8 bg-muted/30 border-2">
                  <h2 className="font-display text-2xl font-bold mb-6">✅ How This Tab Is Used</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CircleDot className="w-5 h-5 text-primary" />
                      <span className="font-medium">This is the single source of truth for campaigns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CircleDot className="w-5 h-5 text-primary" />
                      <span>Campaign status is updated weekly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CircleDot className="w-5 h-5 text-primary" />
                      <span>Scope changes must be reflected here</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <CircleDot className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">If it's not in this tab, it's not a priority</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DemandLeadGenStrategy;
