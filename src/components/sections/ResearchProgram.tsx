import { Card } from "@/components/ui/card";
import { BookOpen, BarChart3, Award, Lightbulb, Quote, Target, TrendingUp, Zap, Users, MapPin, Calendar, CheckCircle, HelpCircle, Sparkles } from "lucide-react";

export const ResearchProgram = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 mb-8 shadow-lg">
              <Lightbulb className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-xl font-bold text-primary tracking-wide">FLAGSHIP INITIATIVE</span>
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              2026 Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Program</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Positioning SoftCo as the <span className="text-foreground font-semibold">defining authority</span> in complex P2P/AP transformation and AI-powered automation
            </p>
          </div>

          {/* Play Bigger Alignment Banner */}
          <Card className="p-6 md:p-8 mb-12 bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 border-2 border-primary/40 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-primary">Aligned to Play Bigger Strategy</h3>
                <p className="text-sm text-muted-foreground">Category Creation Through Thought Leadership</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              This research program is the <span className="font-semibold text-primary">cornerstone of our category creation strategy</span>. 
              By producing original, data-driven research, we define the conversation around complex AP automation—making SoftCo 
              the default reference point and forcing competitors to respond to <em>our</em> narrative.
            </p>
          </Card>

          {/* Independent Stats Quote Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card/80 backdrop-blur border-border hover:border-primary/30 transition-all">
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                "Companies that produce original research are <span className="text-primary font-semibold">48% more likely</span> to be seen as industry leaders and experience <span className="text-primary font-semibold">3x higher engagement</span> rates."
              </blockquote>
              <cite className="text-sm text-muted-foreground">— Edelman-LinkedIn B2B Thought Leadership Impact Study</cite>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur border-border hover:border-accent/30 transition-all">
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                "Original research drives <span className="text-accent font-semibold">7x more backlinks</span> than other content types and generates <span className="text-accent font-semibold">sustained organic traffic</span> for 24+ months."
              </blockquote>
              <cite className="text-sm text-muted-foreground">— BuzzSumo Content Research Analysis</cite>
            </Card>
          </div>

          {/* Why This Matters Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">63%</div>
              <div className="text-xs md:text-sm text-muted-foreground">of B2B buyers say thought leadership builds trust</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">54%</div>
              <div className="text-xs md:text-sm text-muted-foreground">of decision-makers spend 1+ hr/week on thought leadership</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="text-3xl md:text-4xl font-bold text-success mb-1">47%</div>
              <div className="text-xs md:text-sm text-muted-foreground">have awarded business based on thought leadership</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">75%</div>
              <div className="text-xs md:text-sm text-muted-foreground">of C-suite say it influences vendor selection</div>
            </div>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pipeline Generation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Accelerates commercial growth & pipeline creation, arming sales with authoritative data
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">8,320%</span>
                <span className="text-sm text-muted-foreground">ROI</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-accent/30 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Brand Authority</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Elevates SoftCo from vendor to industry authority – strengthening PR & analyst relations
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">4X</span>
                <span className="text-sm text-muted-foreground">Cheaper than paid media</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-success/30 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Differentiation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sets us apart in saturated AP/P2P content landscape with non-generic, data-driven insights
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-success">12</span>
                <span className="text-sm text-muted-foreground">Months of content fuel</span>
              </div>
            </Card>
          </div>

          {/* 12-Month Activation Plan */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h3 className="font-bold text-2xl">12-Month Activation Plan</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full" />
                <h4 className="font-bold mb-3 text-primary text-lg">Brand Refresh</h4>
                <p className="text-muted-foreground">
                  Showcase "AI-powered P2P & AP automation, tailored to perfection" through flagship research that defines the category
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-accent/20 rounded-full" />
                <h4 className="font-bold mb-3 text-accent text-lg">Full-Year Content Engine</h4>
                <p className="text-muted-foreground">
                  Fuels integrated marketing with 12 months of high-value content: reports, webinars, social, PR, and sales enablement
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-success to-success/20 rounded-full" />
                <h4 className="font-bold mb-3 text-success text-lg">Category Creation</h4>
                <p className="text-muted-foreground">
                  Directly executes "Play Bigger" strategy—defining and owning the complex AP automation category space
                </p>
              </div>
            </div>
          </Card>

          {/* Events Strategy Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">2026 EVENTS STRATEGY</span>
              </div>
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Bringing the Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">to Life</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All conferences and events will leverage content from our flagship research initiative—ensuring consistent category leadership messaging across every touchpoint
              </p>
            </div>

            {/* Research Content Integration Banner */}
            <Card className="p-5 mb-8 bg-gradient-to-r from-accent/15 to-primary/15 border-2 border-accent/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground">
                  <span className="font-semibold text-accent">Powered by Flagship Research:</span> Every event presentation, dinner discussion, and conference appearance will be anchored in our original research—reinforcing SoftCo's position as the defining voice in complex AP automation.
                </p>
              </div>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Committed: Executive Dinners */}
              <Card className="p-6 bg-card border-2 border-success/30 hover:border-success/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Executive Dinners</h4>
                      <p className="text-sm text-muted-foreground">C-Suite Relationship Building</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 border border-success/40">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm font-semibold text-success">COMMITTED</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Intimate, high-value events positioning SoftCo as a trusted advisor to CFOs and finance leaders in our target markets.
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-success">12</span>
                  <span className="text-lg text-muted-foreground">dinners across 2026</span>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Regional Coverage</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['UK', 'Ireland', 'EU', 'USA', 'Canada'].map((region) => (
                      <span key={region} className="px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium border border-success/20">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Under Exploration: Industry Conferences */}
              <Card className="p-6 bg-card border-2 border-warning/30 hover:border-warning/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning/20 to-warning/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-warning" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Industry Conferences</h4>
                      <p className="text-sm text-muted-foreground">Strategic Event Opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/20 border border-warning/40">
                    <HelpCircle className="w-4 h-4 text-warning" />
                    <span className="text-sm font-semibold text-warning">EXPLORING</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Evaluating strategic fit with our ERP-first and industry-focused positioning to ensure maximum ROI and audience alignment.
                </p>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">SSOW / SSON Events</span>
                      <span className="text-xs px-2 py-1 rounded bg-warning/20 text-warning">Under Review</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Shared Services & Outsourcing conferences</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Gartner CFO Conferences</span>
                      <span className="text-xs px-2 py-1 rounded bg-warning/20 text-warning">Under Review</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Premier CFO & finance leadership events</p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Selection Criteria:</span> Alignment with target industries (Manufacturing, Distribution, Food & Hospitality) and ERP ecosystems (Oracle, Infor, JD Edwards)
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
