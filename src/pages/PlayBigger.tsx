import { Navigation } from "@/components/Navigation";
import { ResearchProgram } from "@/components/sections/ResearchProgram";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Brain, 
  Crown, 
  Quote, 
  Cloud, 
  Car, 
  Home, 
  Megaphone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Shield,
  AlertTriangle,
  Zap,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  FileCheck,
  Settings,
  Database,
  Calendar,
  Scale,
  Award
} from "lucide-react";

const PlayBigger = () => {
  const categoryPrinciples = [
    {
      icon: Target,
      title: "Define the Problem",
      description: "Category kings don't just build products - they identify and articulate a problem the world didn't know it had."
    },
    {
      icon: Brain,
      title: "Design the Category",
      description: "They create a new mental category in people's minds, positioning themselves as the only logical solution."
    },
    {
      icon: Crown,
      title: "Dominate the Economics",
      description: "Category kings capture 76% of the total market value, leaving competitors to fight over the remaining 24%."
    }
  ];

  const authorQuotes = [
    {
      quote: "Category kings don't play the game better. They create a new game and become the only logical choice.",
      author: "Christopher Lochhead",
      role: "Co-author, Play Bigger"
    },
    {
      quote: "The most exciting companies give us different, not just better.",
      author: "Play Bigger",
      role: "Core Principle"
    },
    {
      quote: "76% of market value goes to the market leader. That's peer reviewed data we published in the Harvard Business Review.",
      author: "Al Ramadan",
      role: "Co-author, Play Bigger"
    }
  ];

  const successStories = [
    {
      icon: Cloud,
      company: "Salesforce",
      category: "Cloud CRM",
      value: "Created a $200B+ market, now worth over $300B",
      insight: "Didn't compete with Siebel - redefined CRM as cloud-first"
    },
    {
      icon: Car,
      company: "Uber",
      category: "Ridesharing",
      value: "Built a $150B+ category from zero",
      insight: "Didn't compete with taxis - created a new category of transportation"
    },
    {
      icon: Home,
      company: "Airbnb",
      category: "Home Sharing",
      value: "Worth more than Marriott, Hilton, and Hyatt combined at IPO",
      insight: "Didn't compete with hotels - created an entirely new way to travel"
    },
    {
      icon: Megaphone,
      company: "HubSpot",
      category: "Inbound Marketing",
      value: "Grew from startup to $30B+ company",
      insight: "Named and evangelized 'Inbound Marketing' before selling software"
    }
  ];

  const categoryLifecycle = [
    {
      phase: "1",
      title: "Define",
      description: "Many companies swarm around a problem. The one that anchors the problem in people's minds becomes the thought leader."
    },
    {
      phase: "2",
      title: "Develop",
      description: "The number of companies dives as a king emerges, entrenching its product as the definitive solution to the problem."
    },
    {
      phase: "3",
      title: "Dominate",
      description: "The category king, now controlling 76% of the category economics, reaps the rewards for years to come."
    }
  ];

  const opportunityReasons = [
    {
      icon: AlertTriangle,
      title: "Feature Fatigue",
      description: "Most vendors promise tech benefits (efficiency, accuracy, control) but never commit to measurable business outcomes."
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Buyers fear overhype and under-delivery. A guarantee reduces perceived risk and differentiates from feature-only competitors."
    },
    {
      icon: Megaphone,
      title: "Category Narrative",
      description: "A clear, quantifiable promise becomes THE category narrative: \"Guaranteed AP savings or your money back.\""
    }
  ];

  const competitorGaps = [
    "Minimum touchless rate",
    "Minimum reduction in manual work",
    "Minimum accuracy rate",
    "Processing cycle time improvement"
  ];

  const whyCompetitorsAvoid = [
    "OCR/AI is unpredictable",
    "Supplier behaviour varies",
    "Exceptions require human involvement",
    "AP data is messy"
  ];

  const strategicOptions = [
    {
      recommended: true,
      type: "Flagship",
      title: "Guaranteed Touchless AP™",
      description: "\"Achieve a minimum of X% fully touchless invoice processing in 90 days post go-live - guaranteed.\"",
      benefits: [
        "Dramatically reduced AP workload",
        "Predictable, measurable ROI",
        "Consistently lower cost per invoice",
        "CFO-level outcome, not just software features"
      ]
    },
    {
      recommended: false,
      type: "ROI-Focused",
      title: "Guaranteed Straight-Through Savings",
      description: "\"We guarantee your STP rate will reach X% - or we refund part of your subscription.\"",
      benefits: [
        "Directly tied to ROI conversation",
        "Clear financial commitment",
        "Subscription-linked accountability",
        "Quantifiable cost savings"
      ]
    },
    {
      recommended: false,
      type: "Speed-to-Value",
      title: "Zero-Touch AP in 30 Days",
      description: "\"Your AP team will process invoices without manual intervention within 30 days - or onboarding is free.\"",
      benefits: [
        "Addresses implementation fear",
        "Fast time-to-value promise",
        "Risk-free onboarding",
        "Immediate productivity gains"
      ]
    }
  ];

  const safeguards = [
    {
      icon: Database,
      title: "1. Data Quality Requirements",
      items: [
        "Customer must provide clean, legible invoices (digital or scanned within reasonable quality)",
        "Customer must adhere to a mutually agreed invoice format or supplier data policy",
        "Historical data used for baselining must be complete and accurate"
      ]
    },
    {
      icon: TrendingUp,
      title: "2. Minimum Volume Thresholds",
      items: [
        "Guarantee only applies if customer processes a minimum number of invoices per month (e.g., 300-500+)",
        "Guarantees may vary by invoice volume and complexity"
      ]
    },
    {
      icon: Users,
      title: "3. Supplier Participation",
      items: [
        "Supplier-side responsiveness (e.g., PO accuracy, timely submission) must meet minimum criteria",
        "Customer must use approved supplier onboarding workflows or portal features",
        "Customer agrees not to bypass the system (e.g., sending invoices directly to AP emails)"
      ]
    },
    {
      icon: Settings,
      title: "4. Customer Workflow Compliance",
      items: [
        "AP team must follow our recommended workflow configuration (no custom workflows without approval)",
        "No manual interventions unless instructed by the platform",
        "Customer must complete implementation and training steps by specified deadlines"
      ]
    },
    {
      icon: FileCheck,
      title: "5. System Integration Stability",
      items: [
        "Required ERP or finance system integrations must be supported and stable",
        "Customer IT must ensure needed access, configurations, and data flows within agreed timelines"
      ]
    },
    {
      icon: AlertTriangle,
      title: "6. Scope Limitations",
      items: [
        "Non-standard invoices (handwritten, multi-page unstructured, unsupported foreign-language formats)",
        "Exception-heavy invoices (mismatched POs, missing data, approval disputes)",
        "Invoices requiring manual validation due to compliance/audit needs"
      ]
    },
    {
      icon: Target,
      title: "7. Baseline Measurement",
      items: [
        "Jointly agreed baseline for straight-through processing, cost per invoice, cycle time, and error rate",
        "Clear before/after measurement framework using the platform's analytics"
      ]
    },
    {
      icon: Calendar,
      title: "8. Timeframe Restrictions",
      items: [
        "Implementation must be signed off",
        "System must be live",
        "Users must be trained",
        "Minimum usage period (e.g., 30 or 60 days) must have elapsed"
      ]
    },
    {
      icon: Scale,
      title: "9. Commercial Fair Use",
      items: [
        "Guarantee cannot apply if customer reduces invoice volumes, changes workflows, or stops using the system",
        "Guarantee cannot stack with other promotional discounts unless specified"
      ]
    },
    {
      icon: Award,
      title: "10. Remedy Structure",
      items: [
        "Service credits",
        "Contract extension at no cost",
        "Partial refund up to a defined cap",
        "Note: Not a full refund unless explicitly part of the guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section - Category Design Framework */}
        <section className="container mx-auto px-6 mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Category Design Framework
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              Play Bigger
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              How Pirates, Dreamers, and Innovators Create and Dominate Markets
            </p>
            <p className="text-sm text-muted-foreground">
              By Christopher Lochhead, Al Ramadan, Dave Peterson & Kevin Maney
            </p>
          </div>

          {/* Key Points Summary */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Key Points Summary
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span><strong>76% Rule:</strong> Category kings capture 76% of total market value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span><strong>Different, Not Better:</strong> Create new categories rather than competing on features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span><strong>SoftCo Opportunity:</strong> "Guaranteed Touchless AP™" as our category-defining offering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span><strong>10 Safeguards:</strong> Structured approach to deliver on guarantees with controlled risk</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* What is Category Design */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">What is Category Design?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Category Design is a discipline of creating and monetizing new markets in a noisy world. 
                  It's the strategic practice of defining a new problem, naming a category around it, 
                  and positioning your company as the definitive solution.
                </p>
                <p className="text-muted-foreground">
                  The most successful companies don't just build better products - they create entirely 
                  new categories of products and services that didn't exist before.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground mt-6">
                  They don't give us better. They give us different.
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Core Insight */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">The Core Insight</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Companies and products live within containers in our minds called categories. 
              Our brains use these to cope with an over-stimulated world. Category designers 
              leverage these mental shortcuts to change user behavior and purchase decisions.
            </p>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="py-12 text-center">
                <div className="text-6xl font-bold mb-4">76%</div>
                <p className="text-lg opacity-90 max-w-xl mx-auto">
                  of the total market value in any category goes to the category king - 
                  leaving all other competitors to fight over the remaining 24%.
                </p>
                <p className="text-sm opacity-70 mt-4">
                  - Harvard Business Review, peer-reviewed research by Play Bigger authors
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Category Design Playbook */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Category Design Playbook</h2>
            <p className="text-muted-foreground">
              Three fundamental principles that separate category kings from everyone else
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categoryPrinciples.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Words from the Authors */}
        <section className="bg-muted/50 py-16 mb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Words from the Authors</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {authorQuotes.map((item, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-primary/40 mb-4" />
                    <p className="text-foreground italic mb-4">"{item.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-sm">{item.author}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Category Kings in Action</p>
            <p className="text-sm text-muted-foreground mt-2">
              Companies that didn't compete - they created entirely new categories and dominated them
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <story.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{story.company}</h3>
                        <Badge variant="secondary" className="text-xs">{story.category}</Badge>
                      </div>
                      <p className="text-primary font-medium text-sm mb-2">{story.value}</p>
                      <p className="text-muted-foreground text-sm">
                        <span className="font-medium">Key insight:</span> {story.insight}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why This Matters for SoftCo */}
        <section className="container mx-auto px-6 mb-20">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Why This Matters for SoftCo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                The AP automation market is crowded with vendors making similar promises. 
                By designing a new category - <span className="font-semibold text-primary">Guaranteed Touchless AP</span> - 
                SoftCo can escape the feature comparison trap and become the only logical choice 
                for companies who want outcomes, not just software.
              </p>
              <Button className="gap-2">
                See Our Category Strategy <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* The Category Lifecycle */}
        <section className="container mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">The Category Lifecycle</h2>
          <p className="text-center text-muted-foreground mb-12">
            Every category goes through three distinct phases
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categoryLifecycle.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SoftCo Category King Strategy */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">SoftCo</Badge>
            <h2 className="text-3xl font-bold mb-2">Category King Strategy</h2>
            <div className="text-4xl md:text-5xl font-bold text-primary my-6">
              Guaranteed<br />Touchless AP™
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform SoftCo from a software vendor into an outcomes partner 
              with a category-defining guarantee that competitors cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">X%</div>
                <p className="text-sm text-muted-foreground">Guaranteed Touchless Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">90 Days</div>
                <p className="text-sm text-muted-foreground">Post Go-Live Timeline</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">ROI</div>
                <p className="text-sm text-muted-foreground">Tied to Measurable Outcomes</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">The Opportunity</h2>
            <p className="text-xl text-muted-foreground">
              Why a Guarantee is a Category King Play
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              A strong, outcome-based guarantee helps you own a space in customers' minds that no competitor can take.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {opportunityReasons.map((reason, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto mt-8 bg-muted/50">
            <CardContent className="py-6 text-center">
              <Quote className="w-6 h-6 text-primary/40 mx-auto mb-2" />
              <p className="italic text-muted-foreground">
                "A category must have a distinct problem framing + unique promise that forces the market to follow."
              </p>
              <p className="text-sm font-medium mt-2">Play Bigger Framework</p>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">
            <span className="font-medium">Category Design Principles:</span> A guarantee transforms SoftCo from "software vendor" to "business outcomes partner"
          </p>
        </section>

        {/* Competitive Analysis */}
        <section className="bg-muted/50 py-16 mb-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Competitive Analysis</h2>
              <p className="text-xl text-muted-foreground">Market Scan</p>
              <p className="text-sm text-muted-foreground mt-2">
                What competitors currently do across the AP automation landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-destructive" />
                    No Vendor Publicly Guarantees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {competitorGaps.map((gap, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                        {gap}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Why Competitors Avoid Guarantees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {whyCompetitorsAvoid.map((reason, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 text-yellow-500/60 flex-shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    This Is Why a Guarantee Is Category-Defining
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    It signals operational confidence and shared risk, not just software.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategic Options */}
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Strategic Options</h2>
            <p className="text-xl text-muted-foreground">High-Level Propositions</p>
            <p className="text-sm text-muted-foreground mt-2">
              Three refined propositions that tie ROI + touchless processing into a unified category narrative
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {strategicOptions.map((option, index) => (
              <Card key={index} className={option.recommended ? "border-primary border-2 relative" : ""}>
                {option.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Recommended</Badge>
                )}
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{option.type}</Badge>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="italic">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium mb-3">Benefits</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Category Narrative */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Play Bigger Framework</Badge>
              <h2 className="text-3xl font-bold">The Category Narrative</h2>
              <p className="text-muted-foreground mt-2">The story SoftCo can own in the market</p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Category Name</p>
                  <p className="text-2xl font-bold text-primary">Guaranteed Touchless AP™</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem Definition</p>
                  <p className="text-lg">
                    "AP automation promises touchless processing — but most vendors deliver more exceptions, 
                    more human effort, and inconsistent results."
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">New Solution Space</p>
                  <p className="text-lg">
                    An AP automation platform that guarantees measurable automation outcomes - not just technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="py-6">
                  <p className="text-sm font-medium text-muted-foreground mb-2">POV Statement</p>
                  <p className="text-2xl font-bold mb-4">"Automation isn't automation unless it's guaranteed."</p>
                  <p className="text-muted-foreground">
                    AP teams deserve predictable, measurable straight-through processing tied directly to ROI - 
                    not vague promises or dashboards that look good but don't move the needle.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="py-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">What SoftCo Owns</p>
                  <p className="text-lg">
                    The shift from automation features → to <span className="font-bold text-primary">automation certainty</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Risk Mitigation</h2>
              <p className="text-xl text-muted-foreground">Safeguards & Caveats</p>
              <p className="text-sm text-muted-foreground mt-2">
                These safeguards ensure the guarantee is fair, measurable, and viable
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {safeguards.map((safeguard, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <safeguard.icon className="w-5 h-5 text-primary" />
                      {safeguard.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {safeguard.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Program Section */}
        <ResearchProgram />
      </main>
    </div>
  );
};

export default PlayBigger;
