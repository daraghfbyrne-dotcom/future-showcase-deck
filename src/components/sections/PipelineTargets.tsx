import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Calendar } from "lucide-react";

export const PipelineTargets = () => {
  return (
    <section id="outcomes" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Commercial Targets
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              4. Targeted Outcomes - <span className="text-primary">Pipeline</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Current Pipeline (end Nov)</h3>
              </div>
              <p className="text-3xl font-bold text-primary">€8.91m</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Net Pipeline Required</h3>
              </div>
              <p className="text-3xl font-bold text-accent">€18.2M</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chart-4/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-chart-4" />
                </div>
                <h3 className="font-semibold text-lg">Avg Monthly Pipeline Required</h3>
              </div>
              <p className="text-3xl font-bold text-chart-4">€2.3M</p>
              <p className="text-sm text-muted-foreground mt-1">(2x yoy)</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
