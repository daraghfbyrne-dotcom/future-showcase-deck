import { AlertTriangle, TrendingDown, Users2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyStrategy = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Win Rate Decline",
      description: "Our win engine has shifted with declining win rates and a move toward mid-market deals"
    },
    {
      icon: Award,
      title: "ERP Fit Critical",
      description: "ERP Fit is now the clearest predictor of success with true winning ecosystems emerging"
    },
    {
      icon: Users2,
      title: "Industry Concentration",
      description: "Performance concentrating in specific industries with high loss rates in others"
    },
    {
      icon: AlertTriangle,
      title: "Intensified Competition",
      description: "Competitive dynamics have intensified against 3 key competitors: Medius, Coupa, Basware"
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
              Data* from Jan 2023 – Nov 2025 reveals critical shifts in our market positioning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-secondary/50 border border-border">
            <p className="text-center text-lg font-medium">
              These insights drive our <span className="text-primary font-semibold">strategic focus</span> for 2026
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              *source HubSpot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
