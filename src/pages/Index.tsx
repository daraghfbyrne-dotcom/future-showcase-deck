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
import { PipelineTargets } from "@/components/sections/PipelineTargets";
// import { ChannelStrategy } from "@/components/sections/ChannelStrategy";
import { EventsCalendar } from "@/components/sections/EventsCalendar";
// import { BudgetOverview } from "@/components/sections/BudgetOverview";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        <WhyStrategy />
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display font-bold text-5xl md:text-6xl">
                What the Data <span className="text-primary">Tells Us</span>
              </h2>
            </div>
          </div>
        </section>
        
        <ERPAnalysis />
        <IndustryAnalysis />
        <SizeAnalysis />
        <CompetitorAnalysis />
        <StrategicPillars />
        <ResearchProgram />
        <PipelineTargets />
        {/* <ChannelStrategy /> */}
        <EventsCalendar />
        {/* <BudgetOverview /> */}
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
