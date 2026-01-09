import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Palette, Globe, FileText, Camera, Megaphone, CheckCircle2, Clock, AlertTriangle, Server, Code, Rocket, Users, Building, Monitor, Target } from "lucide-react";

const rolloutPhases = [
  {
    phase: "Phase 0: Website Foundations",
    timeline: "Aug - Oct 2025",
    status: "Complete",
    tasks: [
      "Review AWS current instance and decide if we want to move forward with this or create a new instance",
      "Review Current tech Stack",
      "Research on what can we build with Elementor Pro without slowing down the website",
      "Review what things we need to do for our new website to be secure",
      "Finish CloudFlare setup",
      "Review what pages to keep or delete",
      "Review what plugins to keep or delete",
      "Find some inspo for Knowledge Center",
      "Tech Stack for New Website",
      "Review if any code is necessary to be exported for new website",
      "Review what is missing in current website regarding SEO and what should be added in new website",
      "Find some menu recommendations",
      "Find the quickest and best way to implement Advanced Search",
    ],
  },
  {
    phase: "Phase 1: Brand Identity Finalisation",
    timeline: "Oct - Dec 2025",
    status: "In Progress",
    tasks: [
      "Internal alignment on what \"good copy\" looks like (guidance doc / samples)",
      "Draft key page types & expected structure (marketing + James)",
      "Current Site Structure Review & finalise New Sitemap",
      "Draft early copy wireframes for high-impact pages (AP, Why SoftCo, Homepage)",
      "Brand Brief Sign Off & delivery",
      "Map and assign brand (audit cross-functionally)",
      "Final brand identity concept from Squaredot",
      "Review & sign-off from CMO/CEO",
    ],
  },
  {
    phase: "Phase 2: Content & Collateral Prep",
    timeline: "Nov - Dec 2025",
    status: "In Progress",
    tasks: [
      "SquareDot to deliver Brand Guidelines",
      "Finalize sitemap (list of 22 templates) with SquareDot",
      "Squaredot delivers collateral templates (PPT, Case Study, Social etc)",
      "Confirm sales decks, email templates, business cards, email signatures",
      "Begin updating PDFs/whitepapers with new brand",
      "Start social profile refresh prep (covers, bios)",
      "Prepare old case study videos - ID what rushes exist",
    ],
  },
  {
    phase: "Phase 3: Website Development Prep & Configuration",
    timeline: "Dec 2025 - Jan 2026",
    status: "Planned",
    tasks: [
      "Set up dev and staging environments",
      "Squaredot to deliver Figma templates (ETA: Jan 5)",
      "Install WordPress on the new test Instance",
      "All configuration in the instance including Apache, Load Balancers etc.",
      "Export all posts in the new website",
      "Install Yoast SEO Plugin",
      "Install WP Rocket Plugin",
      "Install WPML Plugin",
      "Configure all settings regarding the 3 plugins for new Website",
      "Export all Pages in the new Website",
      "Configure WordPress so that it has the same URL like we do in our current Website",
      "Make sure all Meta titles and descriptions are green color in the new website",
      "Implementation of Advanced Search",
      "Implementation of Knowledge Center",
      "Make the website responsive for Desktop, Tablet and Mobile",
      "Optimize whole Website before launch",
      "Follow these rules for Image and Icons",
      "All images should be WebP format and icons with logos will be SVG format",
      "Implementation of Security in the new Website",
      "Connection between CloudFlare and new Website (CDN)",
      "Cookies in New Website",
      "Provision server & configure instance (New Instance, Load Balancer)",
      "Apply SEO/meta/Schema config rules",
      "Implement site security",
    ],
  },
  {
    phase: "Phase 4: Build & Integrate",
    timeline: "Jan - Feb 2026",
    status: "Planned",
    tasks: [
      "Build site in WordPress with Elementor + Figma templates",
      "Content integrated & styled (Jan 13–Feb 3)",
      "Ensure mobile responsiveness & accessibility",
      "Implement Knowledge Center & Advanced Search",
      "Internal QA + SEO Checks (Feb 3–7)",
      "Cookie compliance & final security review",
      "Optimize speed (WebP, SVGs, caching)",
    ],
  },
  {
    phase: "Phase 5: UAT, Final Approvals & Go-Live",
    timeline: "Feb 2026",
    status: "Planned",
    tasks: [
      "UAT (internal team testing) Feb 10–17",
      "Final tweaks, image optimization (WebP, SVG)",
      "CEO/CMO sign-off",
      "Website goes live (week of Feb 24)",
    ],
  },
  {
    phase: "Phase 6: Brand Rollout Beyond Website",
    timeline: "Feb - Mar 2026",
    status: "Planned",
    tasks: [
      "Digital: Social media profile updates (Jan)",
      "Digital ad refresh (Dec–Jan)",
      "Digital: Intranet rebrand (Jan)",
      "Digital: Future webinars/success stories (from Feb onward)",
      "Marketing Collateral: Flyers/posters for events (Feb)",
      "Marketing Collateral: Event booths & banners (print ready Feb)",
      "Physical Assets: Office signage (install Feb)",
      "Physical Assets: Office decals (Feb)",
      "Physical Assets: Branded merch (Feb–Mar, phased)",
      "SoftCo Solution Interfaces: Update UI branding across portals and demo systems (Feb–Mar)",
      "Ops: Implementation decks + PDFs + CS decks (Jan–Feb rollout)",
      "Analyst / Marketplaces: Update analyst reports & marketplace listings (Feb–Mar)",
      "Sponsorships: Ensure partners/events use updated brand (Feb onward)",
    ],
  },
];

const assetCategories = [
  {
    category: "Digital Assets",
    items: [
      "Email Templates (update tone + visual identity post-brand book)",
      "Social Media Profiles (refresh imagery, bios, cover images)",
      "Digital Ads (align with new brand visuals)",
      "Intranet (apply new brand)",
      "PDFs, Whitepapers, Case Studies, eBooks (migrate gradually)",
      "Testimonial Videos (rebrand intros/outros, overlays)",
      "Future Webinars & Success Stories (produce in new style)",
    ],
  },
  {
    category: "Marketing Collateral",
    items: [
      "Sales Decks (update templates in line with collateral delivery)",
      "Infographics (new design style)",
      "Event Booths & Banners (design and print lead time)",
      "Business Cards (new design ready by Jan)",
      "Email Signatures (roll out company-wide with brand launch)",
      "Flyers & Posters (ready for events)",
    ],
  },
  {
    category: "Commercial Collateral",
    items: [
      "Contracts, proposals, SOWs, invoices (branded templates in PDF)",
      "Customer onboarding packs (welcome email sequences, PDF guides)",
      "Sales Playbook",
    ],
  },
  {
    category: "Physical Assets",
    items: [
      "Office Signage external x 3",
      "Office Signage internal x 3",
      "Branded stationery (e.g., notebooks, pens)",
      "Branded Merchandise",
      "Event Displays",
      "Office decals",
    ],
  },
  {
    category: "SoftCo Solution Digital Imaging",
    items: [
      "SoftCo Interface",
      "Success Portal",
      "Knowledge Hub",
      "Customer Support Portal",
      "Demo systems",
    ],
  },
  {
    category: "Ops Collateral",
    items: [
      "Implementation team decks",
      "Implementation pdfs",
      "Customer Success decks",
    ],
  },
  {
    category: "Analyst / Marketplace Digital Imaging",
    items: [
      "Analyst Reports",
      "All listings (Capterra etc)",
    ],
  },
  {
    category: "Events Collateral",
    items: [
      "Sponsorship",
      "Activations (RoboDog)",
      "Pull Ups",
      "Stands",
    ],
  },
];

const deliverables = [
  {
    category: "Visual Identity",
    icon: Palette,
    items: ["Logo system", "Color palette", "Typography", "Iconography", "Photography style"],
  },
  {
    category: "Digital Assets",
    icon: Globe,
    items: ["Website", "Social templates", "Email signatures", "Banner ads", "Landing pages"],
  },
  {
    category: "Documentation",
    icon: FileText,
    items: ["Brand guidelines", "Tone of voice", "Messaging framework", "Boilerplate copy"],
  },
  {
    category: "Marketing Collateral",
    icon: Camera,
    items: ["Brochures", "One-pagers", "Presentations", "Case study templates"],
  },
  {
    category: "Communications",
    icon: Megaphone,
    items: ["PR kit", "Media assets", "Internal comms", "Launch plan"],
  },
];

const projectLeadership = [
  { name: "Daragh (CMO)", role: "Executive Sponsor" },
  { name: "John (Marketing Manager)", role: "Project Lead" },
];

const teamAllocation = [
  { name: "Paul", role: "ESG & Consult", days: 10 },
  { name: "Blendi", role: "Web Development", days: 30 },
  { name: "Oisin", role: "Content", days: 35 },
  { name: "Enes", role: "Design", days: 20 },
  { name: "John", role: "Digital Marketing", days: 20 },
  { name: "Freelance Designer", role: "Design Support", days: 20 },
  { name: "Freelance Copywriter", role: "Copy Support", days: 15 },
];

const getPhaseIcon = (phase: string) => {
  if (phase.includes("Foundations")) return Server;
  if (phase.includes("Identity")) return Palette;
  if (phase.includes("Content")) return FileText;
  if (phase.includes("Development")) return Code;
  if (phase.includes("Build")) return Monitor;
  if (phase.includes("UAT")) return Rocket;
  if (phase.includes("Rollout")) return Building;
  return Globe;
};

const BrandRefresh = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="h-4 w-4 text-amber-500" />;
      case "Planned":
        return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      case "Complete":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Badge className="bg-amber-500/20 text-amber-600 border-amber-500/30">In Progress</Badge>;
      case "Planned":
        return <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">Planned</Badge>;
      case "Complete":
        return <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Complete</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Q1 2026 Priority</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Brand & Website Roll Out
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Comprehensive brand evolution to position SoftCo as the category leader in P2P automation and AI-powered finance transformation.
          </p>

          {/* Key Points Summary */}
          <KeyPointsSummary
            points={[
              "7 Phases: From foundations (Aug '25) to full rollout (Mar '26)",
              "Website live: Week of Feb 24, 2026 after UAT sign-off",
              "8 Asset Categories: Digital, Marketing, Commercial, Physical, Solution UI & more",
              "150 days effort with dedicated team + freelance support"
            ]}
          />
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-display font-semibold mb-6">Key Objectives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">Category Leader</div>
                <p className="text-muted-foreground">Position SoftCo as the definitive category king in P2P automation</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">Modern Identity</div>
                <p className="text-muted-foreground">Refresh visual identity to reflect innovation and AI leadership</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">Unified Voice</div>
                <p className="text-muted-foreground">Establish consistent messaging across all touchpoints</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Project Phases */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-display font-semibold mb-6">Project Phases & Tasks</h2>
          <Accordion type="multiple" className="space-y-3">
            {rolloutPhases.map((phase, index) => {
              const PhaseIcon = getPhaseIcon(phase.phase);
              return (
                <AccordionItem key={index} value={phase.phase} className="border rounded-lg px-4 bg-card/30">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 w-full pr-4">
                      <PhaseIcon className="h-5 w-5 text-primary shrink-0" />
                      <div className="flex flex-col items-start text-left flex-1">
                        <span className="font-semibold">{phase.phase}</span>
                        <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(phase.status)}
                        {getStatusBadge(phase.status)}
                        <Badge variant="outline" className="ml-2">{phase.tasks.length} tasks</Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <ul className="space-y-2 pl-9">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${phase.status === "Complete" ? "text-green-500" : "text-primary/50"}`} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-display font-semibold mb-6">Assets to Update</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {assetCategories.map((category, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 shrink-0" />
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

      {/* Deliverables */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-display font-semibold mb-6">Deliverables by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((category, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
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

      {/* Team Allocation */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-display font-semibold mb-6">Team Allocation</h2>
          
          {/* Project Leadership */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {projectLeadership.map((leader, index) => (
              <Card key={index} className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="py-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">{leader.name}</div>
                    <div className="text-sm text-muted-foreground">{leader.role}</div>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">{leader.role}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Team Member</th>
                      <th className="text-left py-3 px-4 font-semibold">Role</th>
                      <th className="text-right py-3 px-4 font-semibold">Days Allocated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamAllocation.map((member, index) => (
                      <tr key={index} className="border-b border-border/50 last:border-0">
                        <td className="py-3 px-4 font-medium">{member.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{member.role}</td>
                        <td className="py-3 px-4 text-right">
                          <Badge variant="outline">{member.days} days</Badge>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-primary/5">
                      <td className="py-3 px-4 font-bold" colSpan={2}>Total Effort</td>
                      <td className="py-3 px-4 text-right">
                        <Badge className="bg-primary text-primary-foreground">150 days</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BrandRefresh;