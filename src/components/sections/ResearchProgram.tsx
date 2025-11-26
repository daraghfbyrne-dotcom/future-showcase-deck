import { Card } from "@/components/ui/card";
import { BookOpen, BarChart3, Award, Lightbulb } from "lucide-react";

export const ResearchProgram = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Flagship Initiative</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              2026 Research <span className="text-primary">Program</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Positioning SoftCo as the defining authority in complex P2P/AP transformation and AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pipeline Generation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Accelerates commercial growth & pipeline creation, arming sales with authoritative data
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">8,320%</span>
                <span className="text-sm text-muted-foreground">ROI</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-accent/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Brand Authority</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Elevates SoftCo from vendor to industry authority – strengthening PR & analyst relations
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent">4X</span>
                <span className="text-sm text-muted-foreground">Cheaper</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-success/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Differentiation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sets us apart in saturated AP/P2P content landscape with non-generic, data-driven insights
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-success">12</span>
                <span className="text-sm text-muted-foreground">Months</span>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <h3 className="font-semibold text-xl mb-4">12-Month Activation Plan</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Brand Refresh</h4>
                <p className="text-sm text-muted-foreground">
                  Showcase "AI-powered P2P & AP automation, tailored to perfection" through flagship research
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Full-Year Content</h4>
                <p className="text-sm text-muted-foreground">
                  Fuels integrated marketing engine with 12 months of high-value content activation
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-success">Category Creation</h4>
                <p className="text-sm text-muted-foreground">
                  Aligns with "Play Bigger" strategy to define and own our category space
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
