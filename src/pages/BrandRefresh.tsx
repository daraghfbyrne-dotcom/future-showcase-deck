import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Globe, FileText, Camera, Megaphone, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const brandRefreshPhases = [
  {
    phase: "Phase 1: Foundation",
    timeline: "January - February",
    status: "In Progress",
    items: [
      "Brand strategy & positioning workshop",
      "Visual identity system development",
      "Brand guidelines documentation",
      "Logo refinement & usage rules",
    ],
  },
  {
    phase: "Phase 2: Digital Rollout",
    timeline: "February - March",
    status: "Planned",
    items: [
      "Website redesign & build",
      "Social media template refresh",
      "Email template updates",
      "Digital advertising assets",
    ],
  },
  {
    phase: "Phase 3: Collateral & Events",
    timeline: "March - April",
    status: "Planned",
    items: [
      "Sales collateral refresh",
      "Event booth & materials design",
      "PR asset kit creation",
      "Internal brand rollout",
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

const teamAllocation = [
  { name: "Paul", role: "Project Lead", days: 10 },
  { name: "Blendi", role: "Web Development", days: 30 },
  { name: "Oisin", role: "Copywriting", days: 35 },
  { name: "Enes", role: "Design", days: 20 },
  { name: "John", role: "Digital Marketing", days: 20 },
  { name: "Freelance Designer", role: "Design Support", days: 20 },
  { name: "Oisin Contractor", role: "Copy Support", days: 15 },
];

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
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Q1 2026 Priority</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Brand Refresh
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive brand evolution to position SoftCo as the category leader in P2P automation and AI-powered finance transformation.
          </p>
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

      {/* Timeline */}
      <section className="py-12 px-6 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-display font-semibold mb-6">Project Timeline</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {brandRefreshPhases.map((phase, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                    {getStatusBadge(phase.status)}
                  </div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {getStatusIcon(phase.status)}
                    {phase.phase}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
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
