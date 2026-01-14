import { Link } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  Users, 
  Briefcase, 
  LineChart,
  Rocket,
  Palette,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const navigationItems = [
  {
    title: "Strategy Overview",
    description: "ICP, market analysis & strategic pillars",
    icon: Target,
    href: "/strategy"
  },
  {
    title: "Pipeline Targets",
    description: "2026 pipeline goals & metrics",
    icon: LineChart,
    href: "/pipeline-targets"
  },
  {
    title: "Demand & Lead Generation",
    description: "Q1 campaigns & channel strategy",
    icon: TrendingUp,
    href: "/demand-lead-gen"
  },
  {
    title: "Events Strategy",
    description: "Conferences, dinners & webinars",
    icon: Calendar,
    href: "/events-strategy"
  },
  {
    title: "Analyst Relations",
    description: "Research program & analyst engagement",
    icon: Briefcase,
    href: "/analyst-strategy"
  },
  {
    title: "Partners Strategy",
    description: "Partner ecosystem & enablement",
    icon: Users,
    href: "/partners-strategy"
  },
  {
    title: "2026 Objectives",
    description: "Key objectives & success metrics",
    icon: Target,
    href: "/objectives-2026"
  },
  {
    title: "Play Bigger",
    description: "Category leadership framework",
    icon: Rocket,
    href: "/play-bigger"
  },
  {
    title: "Brand Refresh",
    description: "Brand evolution & guidelines",
    icon: Palette,
    href: "/brand-refresh"
  },
  {
    title: "Customer Advisory Board",
    description: "CAB strategy & engagement",
    icon: MessageSquare,
    href: "/cab"
  },
  {
    title: "Capacity Plan",
    description: "Q1 workstreams & resourcing",
    icon: Briefcase,
    href: "/capacity-plan"
  }
];

const Introduction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <span className="text-sm font-medium text-primary">FY2026 Strategic Plan</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Marketing, Partnerships
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                & Analyst Relations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              2026 Strategy, Objectives & Plan
            </p>
            
            <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.25s" }}>
              SoftCo • Confidential
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-primary/50 hover:shadow-lg transition-all hover-scale bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
