import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sparkles, Euro, TrendingUp, Users, MapPin, Database, Mail, Phone, FileText, ChevronRight, Lightbulb, Target, CheckCircle2 } from "lucide-react";
import oracleLogo from "@/assets/oracle-logo.png";
import jdeLogo from "@/assets/jde-logo.png";

const EventsStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-accent/5 to-secondary/20 relative overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Events Strategy Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-success/30 via-accent/20 to-success/30 border-2 border-success/50 mb-8 shadow-xl">
              <Calendar className="w-7 h-7 text-success animate-pulse" />
              <span className="text-2xl font-bold text-success tracking-wide">2026 EVENTS STRATEGY</span>
              <Sparkles className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-accent">Pipeline Growth</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Strategic events program delivering <span className="text-foreground font-semibold">measurable pipeline value</span> through executive dinners and industry conferences
            </p>
          </div>

          {/* Key Points Summary */}
          <Card className="mb-10 bg-gradient-to-r from-success/5 to-accent/5 border-success/20">
            <CardContent className="py-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-success" />
                Key Points Summary
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span><strong>€2.71M pipeline</strong> from events (+38% YoY growth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span><strong>12 Executive Dinners</strong> across NA & Europe (3 per quarter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span><strong>6 Major Conferences:</strong> SSOW, Gartner Finance Xpo, Deloitte SSC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span><strong>ERP Events:</strong> Exploring Oracle, Infor & JD Edwards conferences</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Total Pipeline Value - CENTERED */}
          <Card className="p-8 mb-10 bg-gradient-to-r from-success/20 via-success/15 to-success/20 border-2 border-success/50 shadow-2xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-success/30 flex items-center justify-center mb-4">
                <Euro className="w-8 h-8 text-success" />
              </div>
              <p className="text-lg text-muted-foreground mb-2">Total Pipeline Value from Events</p>
              <p className="text-5xl md:text-6xl font-bold text-success">€2.71m <span className="text-2xl font-semibold text-success/80">(+38% yoy)</span></p>
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
          </Card>

          {/* ERP-Specific Events */}
          <Card className="p-6 bg-card border-2 border-accent/30">
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
        </div>
      </div>
    </div>
  );
};

export default EventsStrategy;
