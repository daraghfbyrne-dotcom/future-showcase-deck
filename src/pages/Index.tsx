import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Target, Users, Calendar, DollarSign, Zap } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/Navigation";
import { WhyStrategy } from "@/components/sections/WhyStrategy";
import { ERPAnalysis } from "@/components/sections/ERPAnalysis";
import { IndustryAnalysis } from "@/components/sections/IndustryAnalysis";
import { SizeAnalysis } from "@/components/sections/SizeAnalysis";
import { CompetitorAnalysis } from "@/components/sections/CompetitorAnalysis";
import { StrategicPillars } from "@/components/sections/StrategicPillars";
import { ResearchProgram } from "@/components/sections/ResearchProgram";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        <WhyStrategy />
        
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-5xl md:text-6xl animate-fade-in">
                  What the Data <span className="text-primary">Tells Us</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a 
                  href="#analysis" 
                  className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">ERP</h3>
                    <p className="text-sm text-muted-foreground mt-1">Win patterns by system</p>
                  </div>
                </a>
                
                <a 
                  href="#industry" 
                  className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Industry</h3>
                    <p className="text-sm text-muted-foreground mt-1">Performance by vertical</p>
                  </div>
                </a>
                
                <a 
                  href="#size" 
                  className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Company Size</h3>
                    <p className="text-sm text-muted-foreground mt-1">Sweet spot analysis</p>
                  </div>
                </a>
                
                <a 
                  href="#competitors" 
                  className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Competitors</h3>
                    <p className="text-sm text-muted-foreground mt-1">Competitive landscape</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <ERPAnalysis />
        <IndustryAnalysis />
        <SizeAnalysis />
        <CompetitorAnalysis />
        <StrategicPillars />
        <ResearchProgram />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">SoftCo 2026 Strategy • Confidential</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
