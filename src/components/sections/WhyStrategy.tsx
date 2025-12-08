import { AlertTriangle, TrendingDown, Award, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyStrategy = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Win Rate Decline"
    },
    {
      icon: Award,
      title: "Sweetspots Shifted"
    },
    {
      icon: AlertTriangle,
      title: "Competitive Pressure Intensified"
    },
    {
      icon: BarChart3,
      title: "Large-Volume Pipeline Leakage"
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{challenge.title}</h3>
                  </div>
                </Card>
              );
            })}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-2">
            *source HubSpot
          </p>
        </div>
      </div>
    </section>
  );
};
