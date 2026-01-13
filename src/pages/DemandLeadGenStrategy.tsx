import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
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
  CheckCircle2
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
          <div className="max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Q1 2026 Campaign Calendar</h2>
                  <p className="text-sm text-muted-foreground">Active campaigns running through Q1</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Content Campaigns */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Content Campaigns
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">eInvoicing Webinar, Blogs & Whitepaper</span>
                        <Badge variant="outline" className="text-xs">Ongoing</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">2nd week January → End Q1</p>
                    </div>
                    <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">SourceForge Marketplace</span>
                        <Badge variant="outline" className="text-xs">Ongoing</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">2nd last week January → End March</p>
                    </div>
                  </div>
                </div>

                {/* Executive Dinners */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Executive Dinners
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Dublin Executive Dinner</span>
                        <Badge className="bg-accent/20 text-accent border-0">10 Prospects</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">January 29th</p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">London Executive Dinner (UK)</span>
                        <Badge className="bg-accent/20 text-accent border-0">Executive</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">February 25th</p>
                    </div>
                  </div>
                </div>

                {/* Webinars */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5 text-warning" />
                    Webinars
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-warning/5 rounded-lg p-4 border border-warning/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">January Webinar</span>
                      </div>
                      <p className="text-sm text-muted-foreground">January 21st</p>
                    </div>
                    <div className="bg-warning/5 rounded-lg p-4 border border-warning/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">eInvoicing Webinar with PwC</span>
                        <Badge variant="outline" className="text-xs">Customers & Prospects</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">February 26th</p>
                    </div>
                    <div className="bg-warning/5 rounded-lg p-4 border border-warning/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">March Webinar</span>
                      </div>
                      <p className="text-sm text-muted-foreground">March 19th</p>
                    </div>
                  </div>
                </div>

                {/* Conferences & Events */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-success" />
                    Conferences & Events
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">SSOW Orlando</span>
                        <Badge className="bg-success/20 text-success border-0">Conference</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">March 17th - 19th</p>
                    </div>
                    <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Lumenia HeadtoHead Birmingham</span>
                        <Badge className="bg-success/20 text-success border-0">Conference</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">March 24th - 25th</p>
                    </div>
                  </div>
                </div>

                {/* Sales Campaigns */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Sales Campaigns
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4 border border-dashed">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-muted-foreground">SDR Campaigns</span>
                        <Badge variant="outline" className="text-xs">TBD</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground italic">Space reserved for SDR campaign details</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">AE Target Account Outreach</span>
                        <Badge variant="outline" className="text-xs">Ongoing</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">2nd week January → End March</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DemandLeadGenStrategy;
