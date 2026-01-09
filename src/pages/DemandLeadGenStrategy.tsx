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
                <div className="ml-16">
                  <h4 className="font-medium mb-3">Plan Focus</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Conversion-first website post brand refresh
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      SEO foundation in Q1; scale from Q2
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Authority via thought leadership, customer proof, and BOF pages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Core conversion assets embedded on high-intent pages: ROI calculator, Interactive demo, Case studies
                    </li>
                  </ul>
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
                <div className="ml-16">
                  <h4 className="font-medium mb-3">Plan Focus</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Consistent cadence
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Pain-led topics aligned to buyer problems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Single primary CTA per webinar: ROI calculator or Interactive demo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Webinar content reused across PPC, Organic, and Nurture
                    </li>
                  </ul>
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
                      <h3 className="font-semibold text-xl">3. PPC (High-Intent Only)</h3>
                      <Badge variant="secondary">~16 SQLs</Badge>
                    </div>
                    <p className="text-muted-foreground">Capture existing demand</p>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className="font-medium mb-3">Plan Focus</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      LinkedIn as primary channel
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Promotion of: Webinars, Case studies, ROI calculator, Interactive demo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Tight cost controls and clear stop/scale rules
                    </li>
                  </ul>
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
          <div className="max-w-5xl mx-auto">
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
        </div>
      </main>
    </div>
  );
};

export default DemandLeadGenStrategy;
