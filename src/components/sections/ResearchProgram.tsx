import { Card } from "@/components/ui/card";
import { BookOpen, BarChart3, Award, Lightbulb, Quote, Target, TrendingUp, Zap, Users, MapPin, Calendar, CheckCircle, Sparkles, Euro, Database, Mail, Phone, ClipboardCheck, ArrowRight, FileText, ChevronRight } from "lucide-react";
import oracleLogo from "@/assets/oracle-logo.png";
import jdeLogo from "@/assets/jde-logo.png";

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
              2026/27 Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Program</span>
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
            </div>

            {/* Total Pipeline Value */}
            <Card className="p-6 mb-8 bg-gradient-to-r from-success/15 via-primary/10 to-accent/15 border-2 border-success/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <Euro className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Pipeline Value from Events</p>
                  <p className="text-3xl md:text-4xl font-bold text-success">€3.48m <span className="text-lg font-semibold text-success/80">(+38% yoy)</span></p>
                </div>
              </div>
            </Card>

            {/* Key Improvements Banner */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="font-semibold text-primary mb-1">New Process</p>
                <p className="text-sm text-muted-foreground">Executive Dinners & prospect management</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <p className="font-semibold text-accent mb-1">Tightened Follow-up</p>
                <p className="text-sm text-muted-foreground">Process & expectations for 2026</p>
              </div>
              <div className="p-4 rounded-lg bg-success/10 border border-success/20 text-center">
                <p className="font-semibold text-success mb-1">3 Dinners / Quarter</p>
                <p className="text-sm text-muted-foreground">North America + Europe ×2</p>
              </div>
            </div>

            {/* Executive Dinners Section */}
            <Card className="p-6 mb-8 bg-card border-2 border-success/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">SoftCo Private Dinners</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <p className="font-bold text-success mb-2">Q1 2026</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> London</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> USA</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Ireland</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <p className="font-bold text-success mb-2">Q2 2026</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> EU</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Manchester</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Chicago</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <p className="font-bold text-success mb-2">Q3 2026</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Poland</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Glasgow</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Boston</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                  <p className="font-bold text-success mb-2">Q4 2026</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Ireland</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> UK</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Canada</p>
                  </div>
                </div>
              </div>

              {/* Executive Dinner Campaign Flow */}
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h5 className="font-bold text-foreground">Executive Dinner Campaign Flow</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="relative p-4 rounded-lg bg-primary text-primary-foreground">
                    <p className="font-bold mb-2">Stage 1</p>
                    <p className="text-sm font-semibold mb-2">Database Cleanse & Prospect ID</p>
                    <p className="text-xs opacity-90 mb-1"><span className="font-medium">Goal:</span> Clean, targeted contact list</p>
                    <p className="text-xs opacity-90 mb-3"><span className="font-medium">Owner:</span> SDR Team</p>
                    <div className="flex items-center gap-2 text-xs opacity-80">
                      <FileText className="w-3 h-3" />
                      <span>Audit CRM, identify ICP prospects</span>
                    </div>
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-success" />
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg bg-primary text-primary-foreground">
                    <p className="font-bold mb-2">Stage 2</p>
                    <p className="text-sm font-semibold mb-2">Content & Email Creation</p>
                    <p className="text-xs opacity-90 mb-1"><span className="font-medium">Goal:</span> Value-led communication</p>
                    <p className="text-xs opacity-90 mb-3"><span className="font-medium">Owner:</span> SDR Team</p>
                    <div className="flex items-center gap-2 text-xs opacity-80">
                      <Mail className="w-3 h-3" />
                      <span>Messaging, templates, RSVP forms</span>
                    </div>
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-success" />
                    </div>
                  </div>
                  <div className="relative p-4 rounded-lg bg-primary text-primary-foreground">
                    <p className="font-bold mb-2">Stage 3</p>
                    <p className="text-sm font-semibold mb-2">Email Sequence & Follow-Up</p>
                    <p className="text-xs opacity-90 mb-1"><span className="font-medium">Goal:</span> Secure qualified responses</p>
                    <p className="text-xs opacity-90 mb-3"><span className="font-medium">Owner:</span> SDR & Marketing</p>
                    <div className="flex items-center gap-2 text-xs opacity-80">
                      <Phone className="w-3 h-3" />
                      <span>3-4 stage sequence, follow-up calls</span>
                    </div>
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-success" />
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                    <p className="font-bold mb-2">Stage 4</p>
                    <p className="text-sm font-semibold mb-2">Confirmation & Attendance</p>
                    <p className="text-xs opacity-90 mb-1"><span className="font-medium">Goal:</span> Maximize attendance</p>
                    <p className="text-xs opacity-90 mb-3"><span className="font-medium">Owner:</span> SDR Team</p>
                    <div className="flex items-center gap-2 text-xs opacity-80">
                      <Calendar className="w-3 h-3" />
                      <span>Reminders, re-confirm, waiting list (~20% drop-off)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Conferences & Events */}
            <Card className="p-6 mb-8 bg-card border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Industry Conferences</h4>
                  <p className="text-sm text-muted-foreground">Strategic events aligned to ICP and target markets</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#0096D6]/5 border border-[#0096D6]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-[#0096D6]">ss<span className="text-[#E91388]">o</span>n</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-[#0096D6]/20 text-[#0096D6] font-medium">SSOW</span>
                  </div>
                  <p className="font-semibold text-foreground mb-1">USA</p>
                  <p className="text-sm text-muted-foreground">March • Orlando</p>
                  <p className="text-sm font-medium mt-2 text-[#0096D6]">3 SLs • €330,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#0096D6]/5 border border-[#0096D6]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-[#0096D6]">ss<span className="text-[#E91388]">o</span>n</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-[#0096D6]/20 text-[#0096D6] font-medium">SSOW</span>
                  </div>
                  <p className="font-semibold text-foreground mb-1">Europe</p>
                  <p className="text-sm text-muted-foreground">May • Lisbon</p>
                  <p className="text-sm font-medium mt-2 text-[#0096D6]">3 SLs • €330,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#002F5F]/5 border border-[#002F5F]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-[#002F5F]">Gartner</span>
                  </div>
                  <p className="font-semibold text-foreground mb-1">Finance Xpo™</p>
                  <p className="text-sm text-muted-foreground">May • Maryland</p>
                  <p className="text-sm font-medium mt-2 text-[#002F5F]">3 SLs • €330,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#002F5F]/5 border border-[#002F5F]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-[#002F5F]">Gartner</span>
                  </div>
                  <p className="font-semibold text-foreground mb-1">Finance Xpo™</p>
                  <p className="text-sm text-muted-foreground">June • London</p>
                  <p className="text-sm font-medium mt-2 text-[#002F5F]">3 SLs • €330,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#0096D6]/5 border border-[#0096D6]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-[#0096D6]">ss<span className="text-[#E91388]">o</span>n</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-[#0096D6]/20 text-[#0096D6] font-medium">SSOW</span>
                  </div>
                  <p className="font-semibold text-foreground mb-1">Europe</p>
                  <p className="text-sm text-muted-foreground">September • Amsterdam</p>
                  <p className="text-sm font-medium mt-2 text-[#0096D6]">2 SLs • €220,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#86BC25]/5 border border-[#86BC25]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-[#86BC25]">Deloitte</span>
                  </div>
                  <p className="font-semibold text-foreground mb-1">SSC Conference</p>
                  <p className="text-sm text-muted-foreground">September • TBC</p>
                  <p className="text-sm font-medium mt-2 text-[#86BC25]">3 SLs • €330,000</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-primary">Total from Conferences:</span> €1,650,000 pipeline • 17 SLs
                </p>
              </div>
            </Card>

            {/* ERP-Specific Events */}
            <Card className="p-6 mb-8 bg-card border-2 border-accent/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">ERP-Specific Events</h4>
                    <p className="text-sm text-muted-foreground">Aligned to Oracle, Infor & JD Edwards ecosystems</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-semibold text-amber-600">EXPLORING</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#C74634]/5 border border-[#C74634]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={oracleLogo} alt="Oracle" className="h-6 object-contain" />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">O5Live Conference & Expo 2026</li>
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">UKOUG Conference (UK & Ireland)</li>
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">Oracle AI World</li>
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">BLUEPRINT 4D 2026</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-[#007DB8]/5 border border-[#007DB8]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-[#007DB8]">infor</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 rounded bg-[#007DB8]/5 border border-[#007DB8]/10">Infor inPOWER 2026</li>
                    <li className="p-2 rounded bg-[#007DB8]/5 border border-[#007DB8]/10">SUN Conference 2026</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-[#C74634]/5 border border-[#C74634]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={jdeLogo} alt="JD Edwards" className="h-6 object-contain" />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">JD Edwards INFOCUS 2026</li>
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">JD Edwards Nordic Conference</li>
                    <li className="p-2 rounded bg-[#C74634]/5 border border-[#C74634]/10">TUG CONNECTS 2026</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Executive Dinner Campaign Flow */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h4 className="font-bold text-xl">Executive Dinner Campaign Flow</h4>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {/* Stage 1 */}
                <div className="relative">
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground h-full">
                    <p className="font-bold mb-2">Stage 1</p>
                    <p className="text-sm font-medium mb-3">Database Cleanse & Prospect ID</p>
                    <div className="space-y-2 text-xs opacity-90">
                      <p><span className="font-semibold">Goal:</span> Clean, targeted contact list</p>
                      <p><span className="font-semibold">Owner:</span> SDR Team</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-primary-foreground/20">
                      <Database className="w-4 h-4 mb-1" />
                      <p className="text-xs">Audit CRM, identify ICP prospects</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-success" />
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="relative">
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground h-full">
                    <p className="font-bold mb-2">Stage 2</p>
                    <p className="text-sm font-medium mb-3">Content & Email Creation</p>
                    <div className="space-y-2 text-xs opacity-90">
                      <p><span className="font-semibold">Goal:</span> Value-led communication</p>
                      <p><span className="font-semibold">Owner:</span> SDR Team</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-primary-foreground/20">
                      <Mail className="w-4 h-4 mb-1" />
                      <p className="text-xs">Messaging, templates, RSVP forms</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-success" />
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="relative">
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground h-full">
                    <p className="font-bold mb-2">Stage 3</p>
                    <p className="text-sm font-medium mb-3">Email Sequence & Follow-Up</p>
                    <div className="space-y-2 text-xs opacity-90">
                      <p><span className="font-semibold">Goal:</span> Secure qualified responses</p>
                      <p><span className="font-semibold">Owner:</span> SDR & Marketing</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-primary-foreground/20">
                      <Phone className="w-4 h-4 mb-1" />
                      <p className="text-xs">3-4 stage sequence, follow-up calls</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-success" />
                  </div>
                </div>

                {/* Stage 4 */}
                <div>
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground h-full">
                    <p className="font-bold mb-2">Stage 4</p>
                    <p className="text-sm font-medium mb-3">Confirmation & Attendance</p>
                    <div className="space-y-2 text-xs opacity-90">
                      <p><span className="font-semibold">Goal:</span> Maximize attendance</p>
                      <p><span className="font-semibold">Owner:</span> SDR Team</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-primary-foreground/20">
                      <ClipboardCheck className="w-4 h-4 mb-1" />
                      <p className="text-xs">Reminders, re-confirm, waiting list (~20% drop-off)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
