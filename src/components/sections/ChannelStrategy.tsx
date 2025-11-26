import { Card } from "@/components/ui/card";
import { Globe, Linkedin, MonitorPlay, Target, Users } from "lucide-react";
import { ChannelPerformanceChart } from "@/components/charts/ChannelPerformanceChart";

export const ChannelStrategy = () => {
  const channels = [
    {
      icon: Globe,
      name: "Organic / SEO",
      leads2025: 74,
      pipeline2025: "€2.34M",
      leads2026: 84,
      pipeline2026: "€3.02M",
      growth: "+6%",
      color: "primary"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      leads2025: 0,
      pipeline2025: "€0",
      leads2026: 6,
      pipeline2026: "TBD",
      growth: "New",
      color: "accent"
    },
    {
      icon: MonitorPlay,
      name: "Google Display",
      leads2025: 0,
      pipeline2025: "€0",
      leads2026: 6,
      pipeline2026: "TBD",
      growth: "New",
      color: "success"
    },
    {
      icon: Target,
      name: "PPC",
      leads2025: 29,
      pipeline2025: "€450K",
      leads2026: 24,
      pipeline2026: "€275K",
      growth: "-17%",
      color: "warning"
    }
  ];

  return (
    <section id="channels" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Channel <span className="text-primary">Strategy</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Multi-channel approach targeting high-intent buyers
            </p>
          </div>

          <ChannelPerformanceChart />

          <div className="grid md:grid-cols-2 gap-6 mb-12 mt-8">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${channel.color}/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-${channel.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{channel.name}</h3>
                      <div className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                        channel.growth === "New" ? "bg-success/20 text-success" :
                        channel.growth.startsWith("+") ? "bg-success/20 text-success" :
                        "bg-warning/20 text-warning"
                      }`}>
                        {channel.growth}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">2025 Performance</div>
                      <div className="text-lg font-semibold">{channel.leads2025} Leads</div>
                      <div className="text-sm text-muted-foreground">{channel.pipeline2025}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">2026 Target</div>
                      <div className="text-lg font-semibold">{channel.leads2026} Leads</div>
                      <div className="text-sm text-muted-foreground">{channel.pipeline2026}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-primary/10 border-primary/30 mb-12">
            <h3 className="font-semibold text-xl mb-6">Key Channel Initiatives</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Organic & SEO
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Launch rebrand with fully rebuilt, conversion-first website. Technical SEO overhaul during rebuild.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                  <li>• New copywriter focusing 80% on web content</li>
                  <li>• Fast load times, clean code, structured data for LLMs</li>
                  <li>• Authority building through expert commentary and case studies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-accent" />
                  LinkedIn Full-Funnel
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Scale proven TOF/MOF/BOF structure built in Q4 2024
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                  <li>• Top-of-Funnel: Brand awareness campaigns (35K+ finance leaders)</li>
                  <li>• Mid-Funnel: Webinar & event promotion</li>
                  <li>• Bottom-of-Funnel: Conversion & retargeting (SQL-ready leads)</li>
                  <li>• Budget: €4K/month, CPL ≤ €300</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-success" />
                  SDR Strategy
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Increased headcount targeting €800K+ monthly pipeline
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                  <li>• Full outbound campaign plan (themes, reengagement, dinners)</li>
                  <li>• Sniper prospecting into look-alike accounts</li>
                  <li>• Data enrichment using Clay to reduce admin time</li>
                  <li>• Gong Engage for best practice sharing & tracking</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
