import { TrendingUp, Target, Users, Zap, FileText, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { KeyPointsSummary } from "@/components/KeyPointsSummary";
import { WhyStrategy } from "@/components/sections/WhyStrategy";
import { ProspectMarketConditions } from "@/components/sections/ProspectMarketConditions";
import { ERPAnalysis } from "@/components/sections/ERPAnalysis";
import { IndustryAnalysis } from "@/components/sections/IndustryAnalysis";
import { IndustryMarketChallenges } from "@/components/sections/IndustryMarketChallenges";
import { SizeAnalysis } from "@/components/sections/SizeAnalysis";
import { InvoiceVolumeAnalysis } from "@/components/sections/InvoiceVolumeAnalysis";
import { CompetitorAnalysis } from "@/components/sections/CompetitorAnalysis";
import { StrategicPillars } from "@/components/sections/StrategicPillars";
import { PipelineConversion } from "@/components/sections/PipelineConversion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Key Points Summary */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <KeyPointsSummary
              points={[
                "Win Rate Shift: Data reveals material changes in where we win and lose",
                "ERP Sweet Spots: Oracle Cloud, JD Edwards, and Microsoft show highest win rates",
                "Size Focus: €250M-€1BN revenue companies are our optimal target segment",
                "Strategic Pillars: Focus on Category Leadership, Pipeline Growth & Partner Ecosystem"
              ]}
            />
          </div>
        </section>
        
        <WhyStrategy />
        <ProspectMarketConditions />
        
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-5xl md:text-6xl animate-fade-in">
                  Data Points <span className="text-primary">Analysed</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <a 
                  href="#analysis" 
                  className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">ERP</h3>
                    <p className="text-xs text-muted-foreground mt-1">Win patterns by system</p>
                  </div>
                </a>
                
                <a 
                  href="#industry" 
                  className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">Industry</h3>
                    <p className="text-xs text-muted-foreground mt-1">Performance by vertical</p>
                  </div>
                </a>
                
                <a 
                  href="#size" 
                  className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">Company Size</h3>
                    <p className="text-xs text-muted-foreground mt-1">Sweet spot analysis</p>
                  </div>
                </a>
                
                <a 
                  href="#invoice-volume" 
                  className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">Invoice Volume</h3>
                    <p className="text-xs text-muted-foreground mt-1">Win patterns by volume</p>
                  </div>
                </a>
                
                <a 
                  href="#competitors" 
                  className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all hover-scale"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">Competitors</h3>
                    <p className="text-xs text-muted-foreground mt-1">Competitive landscape</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <ERPAnalysis />
        <IndustryAnalysis />
        <IndustryMarketChallenges />
        <SizeAnalysis />
        <InvoiceVolumeAnalysis />
        <CompetitorAnalysis />
        <StrategicPillars />
        <PipelineConversion />
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
