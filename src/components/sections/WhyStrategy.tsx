import { AlertTriangle, TrendingDown, Users2, Award, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyStrategy = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Win Rate Decline",
      description: "Win rates declined overall — Period 1 (Jan '23–Jun '24): 20.6% → Period 2 (Jul '24–Nov '25): 14.8%"
    },
    {
      icon: Award,
      title: "Sweetspots Shifted",
      description: "Pre-2024 strength in 250m–499m and 1b–5b collapsed. New sweetspot: 500m–1b and 5b+. Invoice volume shifted toward 3k–20k and 60k–120k."
    },
    {
      icon: Users2,
      title: "Industry Pattern Destabilized",
      description: "Manufacturing still high volume but win rates falling. Retail & Services collapsed to 0%. New bright spots: Media/Telco, Health."
    },
    {
      icon: AlertTriangle,
      title: "Competitive Pressure Intensified",
      description: "Medius, Coupa, Basware increased presence—especially in SAP and enterprise deals. Concur declined in relevance."
    },
    {
      icon: BarChart3,
      title: "Large-Volume Pipeline Leakage",
      description: ">120k invoice volumes produce pipeline but 0 wins in Period 2. High pipeline leakage in large-volume opportunities."
    }
  ];

  return (
    <section id="why" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Why We Need a <span className="text-primary">New Strategy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data* shows a material shift in where we win, where we lose, and who we should pursue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                      <p className="text-muted-foreground text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-secondary/50 border border-border">
            <p className="text-center text-lg font-medium">
              <strong>Conclusion:</strong> The business has evolved into a different fit profile than the one the GTM is still optimised for.
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            *source HubSpot
          </p>
        </div>
      </div>
    </section>
  );
};
