import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  RefreshCw, Target, Handshake, BarChart3, TrendingUp, Calendar, 
  Shield, Award, ClipboardCheck, AlertTriangle, CheckCircle2, Users,
  Zap, ArrowRight, DollarSign, Layers
} from "lucide-react";

const UpdatedPartnershipStrategy = () => {
  return (
    <section id="updated-strategy" className="space-y-10">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">UPDATED PARTNERSHIP STRATEGY</h2>
          <p className="text-sm text-muted-foreground">18th February 2026</p>
        </div>
        <Badge variant="outline" className="ml-auto border-primary/40 text-primary bg-primary/5">
          <RefreshCw className="w-3 h-3 mr-1" /> Updated
        </Badge>
      </div>

      {/* 1. Executive Summary */}
      <Card className="border-primary/20 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">1. Executive Summary</h3>
              <p className="text-slate-700 leading-relaxed">
                This strategy rebuilds SoftCo's partnership model for 2026–2029. The objective is to create a 
                predictable, scalable partner-led pipeline engine that delivers <span className="font-semibold text-primary">≥30% of new ARR via partners by 2029</span>, 
                in alignment with VCP.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Key Principles */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">2. Key Principles</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Revenue First", desc: "Partnerships must generate measurable pipeline and ARR" },
              { title: "Concentrated Before Diversified", desc: "Focus on anchor partners before expanding breadth" },
              { title: "Low-Lift First", desc: "Referral continues and target co-sell begin formally in 2026" },
              { title: "Governance Over Goodwill", desc: "QBR cadence, KPIs, and deal rules are mandatory" },
              { title: "Scalable Infrastructure", desc: "Portal, certification, dashboards before scale" },
              { title: "Replace Underperformance Quickly", desc: "No passive partnerships" },
            ].map((p, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <p className="font-semibold text-sm text-slate-900 mb-1">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 3. Types of ARR Partnerships */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Handshake className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">3. Types of ARR Partnerships</h3>
          </div>
          <div className="space-y-3">
            {[
              { type: "Referral", timing: "2026–", detail: "Sourced/Influenced with particular focus on tier 3 advisory", color: "bg-green-50 border-green-200 text-green-700" },
              { type: "Co-Sell", timing: "2026–", detail: "Joint pipeline motion", color: "bg-blue-50 border-blue-200 text-blue-700" },
              { type: "OEM-Out", timing: "Ongoing", detail: "Ongoing structured exploration", color: "bg-purple-50 border-purple-200 text-purple-700" },
              { type: "VAR", timing: "H1 2027–", detail: "Resale motion – If Product Ready / Explore modules e.g. SLM / AI Mailbox", color: "bg-amber-50 border-amber-200 text-amber-700" },
              { type: "SI (Referral-first)", timing: "2026–", detail: "Vertical GTM leverage", color: "bg-cyan-50 border-cyan-200 text-cyan-700" },
            ].map((p, i) => (
              <div key={i} className={`flex items-center gap-4 p-3 rounded-lg border ${p.color}`}>
                <Badge variant="outline" className="font-semibold shrink-0">{p.type}</Badge>
                <span className="text-sm flex-1">{p.detail}</span>
                <Badge variant="secondary" className="text-xs shrink-0">{p.timing}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 4. Alignment to VCP */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">4. Alignment to VCP</h3>
          </div>
          <p className="text-slate-700 leading-relaxed">
            The strategy supports VCP targets of <span className="font-semibold text-primary">≥30% ARR partner contribution by 2029</span> and 
            improved close rates trending toward <span className="font-semibold text-primary">30%</span>.
          </p>
        </CardContent>
      </Card>

      {/* 5. 4-Year Pipeline Targets */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">5. 4-Year Pipeline Targets (Base Planning)</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Partner Pipeline</TableHead>
                <TableHead>Win Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { year: "2026", pipeline: "€4.1M", rate: "18%" },
                { year: "2027", pipeline: "€5.8M", rate: "22%" },
                { year: "2028", pipeline: "€7.5M", rate: "26%" },
                { year: "2029", pipeline: "€8.5M+", rate: "30%" },
              ].map((r, i) => (
                <TableRow key={i}>
                  <TableCell className="font-semibold">{r.year}</TableCell>
                  <TableCell className="text-primary font-semibold">{r.pipeline}</TableCell>
                  <TableCell>{r.rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 6. Detailed Strategy (Phased) */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Layers className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">6. Detailed Strategy (Phased)</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { phase: "Phase 1 – 2026", title: "Stabilise & Execute", detail: "Tungsten-led engine, Maximize PwC & onboard 3 new referral partners", color: "border-l-green-500" },
              { phase: "Phase 2 – 2027", title: "Controlled Expansion", detail: "Introduce VAR H1 2027", color: "border-l-blue-500" },
              { phase: "Phase 3 – 2028", title: "Optimisation & Diversification", detail: "Broaden partner mix, optimize performance", color: "border-l-purple-500" },
              { phase: "Phase 4 – 2029", title: "VCP Realisation", detail: "≥30% ARR from partners", color: "border-l-amber-500" },
            ].map((p, i) => (
              <div key={i} className={`p-4 rounded-lg bg-slate-50 border border-slate-200 border-l-4 ${p.color}`}>
                <p className="font-bold text-sm text-slate-900">{p.phase}</p>
                <p className="font-semibold text-sm text-slate-700">{p.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{p.detail}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 7. 2026 Specific Strategy */}
      <Card className="border-primary/20 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">7. 2026 Specific Strategy</h3>
            <Badge className="bg-primary/10 text-primary border-primary/20">Target: €4.1M Pipeline</Badge>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="font-semibold text-sm text-slate-900 mb-2">Tungsten Target: €3.8M pipeline across three streams:</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Mid-Market Motion</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> APS / MarkView / ReadSoft Direct Base</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Lapsed / Churned Support Base</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-sm text-blue-800">PwC</p>
              <p className="text-sm text-blue-700">Win Workday Lighthouse Customer & understand Agiloft potential</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-sm text-green-800">Diversification</p>
              <p className="text-sm text-green-700">Onboard 3 referral partners by end Q1 2026</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 8. Scenario Modelling */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">8. Scenario Modelling – Base vs Upside</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Base Case */}
            <div>
              <h4 className="font-semibold text-sm text-slate-700 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" /> Base Case (Controlled Growth)
              </h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Year</TableHead>
                    <TableHead className="text-xs">Pipeline</TableHead>
                    <TableHead className="text-xs">Win Rate</TableHead>
                    <TableHead className="text-xs">ARR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { year: "2026", pipeline: "€4.1M", rate: "18%", arr: "€738K" },
                    { year: "2027", pipeline: "€5.8M", rate: "22%", arr: "€1.28M" },
                    { year: "2028", pipeline: "€7.5M", rate: "26%", arr: "€1.95M" },
                    { year: "2029", pipeline: "€8.5M", rate: "30%", arr: "€2.55M" },
                  ].map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs font-semibold">{r.year}</TableCell>
                      <TableCell className="text-xs">{r.pipeline}</TableCell>
                      <TableCell className="text-xs">{r.rate}</TableCell>
                      <TableCell className="text-xs font-semibold text-primary">{r.arr}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* Upside Case */}
            <div>
              <h4 className="font-semibold text-sm text-slate-700 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" /> Upside Case (Acceleration Engine)
              </h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Year</TableHead>
                    <TableHead className="text-xs">Pipeline</TableHead>
                    <TableHead className="text-xs">Win Rate</TableHead>
                    <TableHead className="text-xs">ARR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { year: "2026", pipeline: "€5.0M", rate: "20%", arr: "€1.0M" },
                    { year: "2027", pipeline: "€7.0M", rate: "25%", arr: "€1.75M" },
                    { year: "2028", pipeline: "€9.0M", rate: "28%", arr: "€2.52M" },
                    { year: "2029", pipeline: "€10M+", rate: "30%", arr: "€3.0M+" },
                  ].map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs font-semibold">{r.year}</TableCell>
                      <TableCell className="text-xs">{r.pipeline}</TableCell>
                      <TableCell className="text-xs">{r.rate}</TableCell>
                      <TableCell className="text-xs font-semibold text-green-600">{r.arr}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 9. Partner Tiering Framework */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">9. Partner Tiering Framework</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-center">
              <p className="text-2xl font-bold text-amber-700 mb-1">🥉 Bronze</p>
              <p className="text-sm text-slate-600">Entry-level, low pipeline contribution</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-100 border border-slate-300 text-center">
              <p className="text-2xl font-bold text-slate-600 mb-1">🥈 Silver</p>
              <p className="text-sm text-slate-600">Active contributor with QBR participation</p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-center">
              <p className="text-2xl font-bold text-yellow-700 mb-1">🥇 Gold</p>
              <p className="text-sm text-slate-600">Strategic pipeline engine with MDF and roadmap access</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 10. Proposed KPIs by Partner Type */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <ClipboardCheck className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">10. Proposed KPIs by Partner Type</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { type: "Referral", kpis: "Referrals/month, pipeline value, conversion rate, ARR influenced" },
              { type: "Co-Sell", kpis: "Joint opportunities, win rate vs direct, ARR booked jointly" },
              { type: "VAR", kpis: "Deal registrations, certifications, margin retention" },
              { type: "OEM-Out", kpis: "Embedded ARR, volume consumption, renewal rate" },
            ].map((k, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Badge variant="outline" className="mb-2 font-semibold">{k.type}</Badge>
                <p className="text-sm text-slate-700">{k.kpis}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 11. Partner Risks & Mitigation */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">11. Partner Risks & Mitigation</h3>
          </div>
          <div className="space-y-3">
            {[
              { risk: "Over-reliance on Tungsten", mitigation: "Diversify via 3 new partners" },
              { risk: "Xelix wind-down", mitigation: "Managed transition and replacement – Flextecs / Fiscal Tech" },
              { risk: "Enablement delays", mitigation: "Establish solution via AI" },
              { risk: "Channel conflict", mitigation: "Enforce deal registration rules" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-red-50/50 border border-red-100">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <div className="flex-1">
                  <span className="font-semibold text-sm text-slate-900">{r.risk}</span>
                  <span className="text-sm text-muted-foreground"> — {r.mitigation}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 12. Conclusion */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">12. Conclusion</h3>
              <p className="text-slate-700 leading-relaxed">
                2026 is execution-focused and Tungsten-led. 2027–2029 is controlled diversification toward ≥30% ARR via partners. 
                We commit publicly to the <span className="font-semibold text-primary">Base Case</span> while operating toward 
                the <span className="font-semibold text-accent">Upside Case</span>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UpdatedPartnershipStrategy;
