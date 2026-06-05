import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Target, Handshake, BarChart3, TrendingUp, Calendar, Shield, Award,
  ClipboardCheck, AlertTriangle, CheckCircle2, Zap, ArrowRight, Layers,
  Users, Globe, Building2, Briefcase, BookOpen, MapPin
} from "lucide-react";
import TungstenPipelineTargets from "./TungstenPipelineTargets";

const BoardUpdateContent = () => {
  return (
    <div className="space-y-10">

      {/* Purpose */}
      <section id="purpose">
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Purpose of This Document</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              This document provides the board with a complete picture of SoftCo's partnership programme as it stands today — what is working, what is in progress, and the strategic direction for 2026–2029.
            </p>
            <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="font-semibold text-sm text-slate-900 mb-1">Original Strategic Objective</p>
              <p className="text-sm text-slate-700">
                Scale partner-sourced and partner-influenced ARR from a nascent channel to <span className="font-bold text-primary">&gt;30% of new ARR by 2029</span>, while enabling partners to deliver &gt;80% of implementation days — creating a capital-efficient, diversified growth engine alongside SoftCo's direct sales motion.
              </p>
              <p className="text-sm text-slate-700 mt-2">
                Given PwC have paused implementation, focus remains on driving ARR from partners.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 1 — Executive Summary</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              SoftCo's Partnership programme is at an inflection point. Foundations are in place with a structured, multi-year agreement with Tungsten Automation, active referral partnerships with Interpath and a time sensitive agreement with FlexTecs, and a technology alliance with Sage. Our PwC Partnership has changed significantly, and will now look to focus on creating a partnership with Agiloft, whilst the implementation piece has been put on hold. We continue to explore new partnerships with consultancies, adjacent technologies and ERPs.
            </p>
            <p className="text-sm text-slate-600 mb-4">Three priorities underpin the strategy:</p>
            <div className="space-y-2 mb-4">
              {[
                "Maximise returns from existing partnerships by implementing QBRs, joint business planning, and formal performance tracking.",
                "Build a scalable referral and co-sell ecosystem in 2026, targeting two new high-quality referral partners in H1 2026.",
                "Lay the foundations for VAR and SI models from 2027 onwards, building partner infrastructure iteratively.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-primary text-sm">{i + 1}.</span>
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-2">Five guiding principles:</p>
            <ul className="space-y-1">
              {[
                "Start with low-lift, high-impact models — referral first, always.",
                "Build before scaling — infrastructure and enablement must precede recruitment.",
                "Accountability over volume — a small number of well-governed partners outperforms a large, loosely managed network.",
                "Continually evaluate — replace underperformers without hesitation.",
              ].map((p, i) => (
                <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Pipeline & ARR Targets */}
      <section id="pipeline-targets">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 3 — Pipeline & ARR Targets</h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Pipeline Target</TableHead>
                  <TableHead>Win Rate</TableHead>
                  <TableHead>Partner ARR / % New</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { year: "2025", pipeline: "—", rate: "—", arr: "~€156K / 11%", notes: "2 closed won: Vibrant Foods (Interpath) & Scout Motors (Tungsten/Kofax)", highlight: true },
                  { year: "2026", pipeline: "€4.1M", rate: "18%", arr: "~€740K / ~18%", notes: "Foundation year — Tungsten ramp + 2 new referral partners" },
                  { year: "2027", pipeline: "€5.8M", rate: "22%", arr: "~€1.3M / ~22%", notes: "VAR onboarded; SI engaged; Tungsten at full ramp" },
                  { year: "2028", pipeline: "€7.5M", rate: "26%", arr: "~€2.0M / ~26%", notes: "Ecosystem maturing; VAR and SI models scaling" },
                  { year: "2029", pipeline: "€8.5M+", rate: "30%", arr: "~€2.5M+ / >30%", notes: ">30% of total new ARR from partners — VCP target achieved" },
                ].map((r, i) => (
                  <TableRow key={i} className={r.highlight ? "bg-green-50" : ""}>
                    <TableCell className="font-semibold text-slate-900">{r.year}{r.highlight && <span className="ml-1 text-xs text-green-600">(Actual)</span>}</TableCell>
                    <TableCell className="text-primary font-semibold">{r.pipeline}</TableCell>
                    <TableCell>{r.rate}</TableCell>
                    <TableCell className="text-emerald-600 font-semibold">{r.arr}</TableCell>
                    <TableCell className="text-slate-600 text-sm">{r.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <span className="font-semibold">2025 Baseline:</span> Partners contributed 11% of new customer ARR in 2025 (€156K of ~€1.54M total), driven by Vibrant Foods (€71K, Interpath) and Scout Motors (€84K, Tungsten/Kofax).
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Current Partner Pipeline */}
      <section id="current-pipeline">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Current Partner Pipeline (as at February 2026)</h3>
                <p className="text-sm text-muted-foreground">Active partner-attributed deals — upside if converted</p>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Deal</TableHead>
                  <TableHead>Partner</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Exp. Close</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { deal: "Flynn Construction — AP Automation", partner: "PwC", amount: "€252,000", stage: "5-In-Context Demo", close: "Mar 2026" },
                  { deal: "UK Deal (Under NDA)", partner: "Tungsten", amount: "€300,000+", stage: "Awaiting Briefing", close: "2026" },
                  { deal: "MTC Trains — AP Automation", partner: "Xelix", amount: "€200,000", stage: "8-Prov. Approval (89%)", close: "Apr 2027" },
                  { deal: "Armacell — P2P", partner: "Xelix", amount: "€200,000", stage: "3-Qualified", close: "Aug 2026" },
                  { deal: "Unifeeder — AP Automation", partner: "Xelix", amount: "€141,000", stage: "7-Negotiation", close: "Mar 2026" },
                  { deal: "Wonderfield Group — AP Automation", partner: "Flextecs", amount: "€120,000", stage: "3-Qualified", close: "Oct 2026" },
                  { deal: "Teleflex — AP Automation", partner: "Kofax / Tungsten", amount: "€100,000", stage: "8-Prov. Approval (89%)", close: "Nov 2026" },
                  { deal: "Ring Container — AP Automation", partner: "Kofax / Tungsten", amount: "€92,417", stage: "4-Demo", close: "May 2026" },
                  { deal: "FGS Global", partner: "Interpath", amount: "No", stage: "2-Sales Lead", close: "Nov 2026" },
                  { deal: "QIMA", partner: "Interpath", amount: "No", stage: "2-Sales Lead", close: "Apr 2027" },
                ].map((d, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-slate-900">{d.deal}</TableCell>
                    <TableCell><Badge variant="outline">{d.partner}</Badge></TableCell>
                    <TableCell className="text-primary font-semibold">{d.amount}</TableCell>
                    <TableCell className="text-slate-600 text-sm">{d.stage}</TableCell>
                    <TableCell className="text-slate-600">{d.close}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-3 flex items-center gap-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">Total (valued): ~€1.41M</Badge>
              <Badge variant="secondary">Weighted: ~€613K</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 4 — Existing Partnerships */}
      <section id="existing-partnerships">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          <h3 className="font-bold text-xl text-slate-900">Section 4 — Existing Partnerships — Current Status</h3>
        </div>
        <p className="text-slate-600 mb-6">Each relationship is at a different stage of maturity and requires different engagement.</p>

        {/* 4.1 Tungsten */}
        <Card className="shadow-sm mb-4 border-l-4 border-l-amber-500">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <h4 className="font-bold text-lg text-slate-900">4.1 Tungsten Automation — Strategic Embedded SaaS Agreement</h4>
              <Badge className="bg-amber-100 text-amber-700 border-amber-200">Anchor Partner</Badge>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Tungsten has the potential to become SoftCo's most commercially significant partner — but this will require strict governance, sustained pressure on both sides to convert opportunities, and SoftCo demonstrating consistently that we can win the deals Tungsten passes to us.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-semibold">
              To date, the Tungsten partnership has been performing below original expectations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-sm text-slate-900 mb-2">Contracted ARR Targets (Tungsten-Sourced)</p>
                <p className="text-xs text-muted-foreground mb-2">ARR to Tungsten converts at approximately 6x to SoftCo ARR</p>
                <Table>
                  <TableBody>
                    {[
                      { year: "Year 1", arr: "€115,000" },
                      { year: "Year 2", arr: "€230,000" },
                      { year: "Year 3", arr: "€322,000" },
                    ].map((r, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-sm font-medium">{r.year}</TableCell>
                        <TableCell className="text-sm font-semibold text-primary">{r.arr}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-sm text-slate-900 mb-2">Performance-Linked MDF</p>
                <p className="text-xs text-muted-foreground mb-2">Reimbursable if targets missed or Success Rate &lt;90%</p>
                <Table>
                  <TableBody>
                    {[
                      { year: "Year 1", mdf: "€150,000" },
                      { year: "Year 2", mdf: "€200,000" },
                      { year: "Year 3", mdf: "€200,000" },
                    ].map((r, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-sm font-medium">{r.year}</TableCell>
                        <TableCell className="text-sm font-semibold text-amber-600">{r.mdf}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">AE Incentive:</span> Tungsten will incentivise all AEs up to the €150K Year 1 ARR commitment — aligning their sales team to actively source and pass opportunities.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Governance:</span> QBRs, KPI dashboards, pipeline reporting, and an executive steering committee. Non-compete protections cover SoftCo's existing customer base and direct pipeline.
            </p>
          </CardContent>
        </Card>

        {/* 4.2 PwC */}
        <Card className="shadow-sm mb-4 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <h4 className="font-bold text-lg text-slate-900 mb-2">4.2 PwC — Co-Sell & Delivery Partner</h4>
            <Badge variant="outline" className="mb-3 bg-blue-50 text-blue-700 border-blue-200">Co-sell (30% referral fee) and delivery</Badge>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              The PwC partnership has been put on hold from an implementation standpoint, as opportunities for PS days have been below expectations, and they are not willing to spend resources until pipeline improves. The partnership still exists, and their Procurement Practice team continues to explore a joint opportunity with Agiloft, while the Workday Practice is identifying SoftCo as the preferred AP automation layer.
            </p>
            <p className="text-xs text-muted-foreground italic">Assessment: Positive directional signals, but PwC moves slowly. QBR cadence in place. Continued nurturing required.</p>
          </CardContent>
        </Card>

        {/* 4.3 Interpath */}
        <Card className="shadow-sm mb-4 border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <h4 className="font-bold text-lg text-slate-900 mb-2">4.3 Interpath — Referral Partner</h4>
            <Badge variant="outline" className="mb-3 bg-purple-50 text-purple-700 border-purple-200">Tier 1 Alliance Partner</Badge>
            <p className="text-sm text-slate-700 leading-relaxed">
              In 2025, Interpath elevated SoftCo to Tier 1 Alliance Partner status. The relationship has already yielded the Vibrant Foods win. Two new deals in pipeline (FGS Global, QIMA) at Sales Lead stage. Like PwC, Interpath requires ongoing relationship investment. QBR to be formalised.
            </p>
          </CardContent>
        </Card>

        {/* 4.4 FlexTecs */}
        <Card className="shadow-sm mb-4 border-l-4 border-l-teal-500">
          <CardContent className="pt-6">
            <h4 className="font-bold text-lg text-slate-900 mb-2">4.4 FlexTecs — Technology Partner</h4>
            <Badge variant="outline" className="mb-3 bg-teal-50 text-teal-700 border-teal-200">Newly Signed</Badge>
            <p className="text-sm text-slate-700 leading-relaxed">
              FlexTecs has replaced Xelix as our Mailbox and Statement Reconciliation technology partner, having officially been signed in May 2026. They are keen to immediately start sharing leads, setting up a joint announcement, GtM activities and ways of working. The length of this partnership depends on the development of our own Mailbox solution.
            </p>
          </CardContent>
        </Card>

        {/* 4.5 Sage */}
        <Card className="shadow-sm mb-4 border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <h4 className="font-bold text-lg text-slate-900 mb-2">4.5 Sage — ERP Technology Partner</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Referral agreement in place; certified on US and EU Sage Intacct marketplaces. No direct inbound referrals to date but growing engagement with Sage's construction-focused AEs since late 2025, joint executive dinner delivered, and introductions to Sage's advisory/SI ecosystem underway.
            </p>
          </CardContent>
        </Card>

        {/* 4.6 Microsoft */}
        <Card className="shadow-sm mb-4 border-l-4 border-l-cyan-500">
          <CardContent className="pt-6">
            <h4 className="font-bold text-lg text-slate-900 mb-2">4.6 Microsoft</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Pre-built F&O connector in place. A co-sell arrangement explored in 2024 via Azure migration did not yield referrals. SoftCo's return to AWS has put co-sell eligibility in doubt. Engineering and commercial leads to jointly evaluate co-sell eligibility, Azure spend implications, and realistic pipeline upside before any commitment.
            </p>
          </CardContent>
        </Card>

        {/* 4.7 Emerging */}
        <Card className="shadow-sm mb-4">
          <CardContent className="pt-6">
            <h4 className="font-bold text-lg text-slate-900 mb-3">4.7 Emerging Candidates</h4>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-sm text-slate-900">Bracket</p>
                <p className="text-sm text-slate-700">FX and Treasury technology partner with overlap in sectors. Lead swapping is underway and they are set to introduce us to an aviation customer in Malta. If lead swapping proves fruitful, the partnership will be formalised.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-sm text-slate-900">Invennt</p>
                <p className="text-sm text-slate-700">Invennt were keen on lead swapping and introduced us to a number of clients, which did not lead to any traction. Talks ended when we did not provide significant introductions their way.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5 — Enablement & Governance */}
      <section id="enablement">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 5 — Enablement & Governance Infrastructure</h3>
            </div>
            <p className="text-slate-600 mb-4">Four pillars underpin the operating model, applying across all partner types:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { num: 1, title: "Structured Partner Enablement", desc: "Formal education programme covering ICP, product overview, objection handling, and competitive differentiation. Partner Portal (target H1 2026) will be the central hub." },
                { num: 2, title: "QBRs & Joint Business Planning", desc: "QBRs currently exist only for PwC. Extended to all active partners in 2026, tracking pipeline influenced, deals converted, and conversion rates." },
                { num: 3, title: "Performance Metrics & Accountability", desc: "Partners measured across: pipeline generation, conversion rates, enablement activity, and customer satisfaction. Underperformers exited without hesitation." },
                { num: 4, title: "Partner Portal", desc: "Initially looked at for H1 2026, this has been pushed out as other priorities, such as the website launch, took preference." },
              ].map((p) => (
                <div key={p.num} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-bold text-sm text-primary mb-1">Pillar {p.num} — {p.title}</p>
                  <p className="text-sm text-slate-700">{p.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 6 — Referral Ecosystem */}
      <section id="referral-ecosystem">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 6 — Building the Referral Ecosystem (2026 Priority)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-semibold text-sm text-green-800">2026 Recruitment Target</p>
                <p className="text-sm text-green-700">Onboard 2 high-potential new referral partners by end of H1 2026</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-semibold text-sm text-blue-800">Commercial Model</p>
                <p className="text-sm text-blue-700">Referral fees of 15–20% of Year 1 SaaS ACV, payable on closed-won deals</p>
              </div>
            </div>
            <p className="font-semibold text-sm text-slate-900 mb-2">Target partner profiles:</p>
            <ul className="space-y-1 mb-4">
              {[
                "ERP consultants and implementation partners with AP/finance transformation practices",
                "Complementary technology vendors (AP-adjacent: OCR, spend analytics, statement rec)",
                "Procurement and AP advisory boutiques with CFO/Controller-level access in €200M–€2B revenue bands",
                "Finance transformation consultancies operating in Ireland, UK, Netherlands, US, and Canada",
              ].map((item, i) => (
                <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">Important Guardrail:</span> SoftCo will not pursue any partner that already has a formal referral or co-sell arrangement with a direct competitor.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 7 — Tungsten Scenario Analysis */}
      <section id="tungsten-scenario">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-amber-500 to-red-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 7 — Tungsten Scenario Analysis — 50% Delivery</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">Tungsten represents SoftCo's single largest contracted partner ARR commitment and carries inherent concentration risk.</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Contracted ARR</TableHead>
                  <TableHead>50% Scenario</TableHead>
                  <TableHead>SoftCo ARR Shortfall (approx.)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { year: "Year 1", contracted: "€115,000", half: "€57,500", shortfall: "~€345,000" },
                  { year: "Year 2", contracted: "€230,000", half: "€115,000", shortfall: "~€690,000" },
                  { year: "Year 3", contracted: "€322,000", half: "€161,000", shortfall: "~€966,000" },
                ].map((r, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-semibold">{r.year}</TableCell>
                    <TableCell>{r.contracted}</TableCell>
                    <TableCell className="text-amber-600">{r.half}</TableCell>
                    <TableCell className="text-red-600 font-semibold">{r.shortfall}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-sm text-red-700 font-semibold mt-3">Cumulative 3-Year: ~€2.0M ARR shortfall</p>
            <div className="mt-3 space-y-1">
              <p className="font-semibold text-sm text-slate-900">Mitigations in place:</p>
              {[
                "Performance-linked MDF: Tungsten reimburses MDF if targets are missed or Total Agility Success Rate drops below 90%.",
                "Non-compete protections: Tungsten cannot pursue SoftCo customers independently.",
                "Quarterly governance: QBRs and KPI dashboards will identify underperformance early.",
              ].map((m, i) => (
                <p key={i} className="text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {m}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 8 — ERP Ecosystem */}
      <section id="erp-ecosystem">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 8 — ERP Ecosystem Partnerships — Early Exploration</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              SoftCo is beginning to explore opportunities within specific ERP ecosystems where AP automation demand is strong.
            </p>
            <div className="space-y-3">
              {[
                { erp: "JD Edwards", status: "Early stage", rationale: "Significant installed base in manufacturing, distribution, and construction — sectors aligned to SoftCo's ICP." },
                { erp: "NetSuite", status: "Exploratory", rationale: "Large and growing mid-market base, but Tipalti has established strong partnerships. SoftCo must identify unaffiliated partners." },
                { erp: "Infor", status: "Early stage", rationale: "Strong presence in manufacturing, distribution, and food & beverage. Infor's AP capabilities are limited." },
                { erp: "Workday", status: "Active signal via PwC", rationale: "Workday's native AP module is widely regarded as weak, creating a clear integration opportunity." },
                { erp: "SAP (via partners)", status: "Early stage", rationale: "Tier 1 SI ecosystem locked up by Coupa and Medius. Opportunity exists with regional SAP consultancies." },
              ].map((e, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold text-sm text-slate-900">{e.erp}</p>
                    <Badge variant="secondary" className="text-xs">{e.status}</Badge>
                  </div>
                  <p className="text-sm text-slate-600">{e.rationale}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 9 — Competitive Landscape */}
      <section id="competitive-landscape">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 9 — Competitive Partner Landscape</h3>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Competitor</TableHead>
                    <TableHead>Programme Maturity</TableHead>
                    <TableHead>Key SI / Reseller</TableHead>
                    <TableHead>SoftCo Implication</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { comp: "Coupa", maturity: "Very mature — 'Partner Xchange'", si: "Deloitte, Infosys, Accenture, KPMG, EY", imp: "Locks in Tier 1 SIs. Target boutique/regional specialists." },
                    { comp: "Basware", maturity: "Established", si: "CGI, Extropy (US), Arcplace", imp: "Open ecosystem pitch overlaps SoftCo's positioning." },
                    { comp: "Medius", maturity: "Growing — SAP Silver Partner", si: "SAP, Microsoft Dynamics", imp: "SoftCo can differentiate on ERP-agnostic breadth." },
                    { comp: "Esker", maturity: "Well-developed — portal", si: "Regional SIs across EU & Americas", imp: "Closest in design to SoftCo's 2026 plan — useful benchmark." },
                    { comp: "Tipalti", maturity: "Active and growing", si: "RSM, NoBlue2 (UK/IE)", imp: "Target unaffiliated regional firms." },
                  ].map((c, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-semibold text-slate-900">{c.comp}</TableCell>
                      <TableCell className="text-sm">{c.maturity}</TableCell>
                      <TableCell className="text-sm text-slate-600">{c.si}</TableCell>
                      <TableCell className="text-sm text-slate-600">{c.imp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-sm text-slate-900">Key conclusions:</p>
              {[
                "The Tier 1 SI market is effectively closed. SoftCo should not pursue them.",
                "The opportunity lies in regional boutique AP specialists and mid-market ERP consultancies.",
                "Tipalti has already secured RSM and NoBlue2 — map which regional firms remain unaffiliated.",
              ].map((c, i) => (
                <p key={i} className="text-sm text-slate-700 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {c}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 10 — Tiering Framework */}
      <section id="tiering-framework">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 10 — Partner Tiering Framework</h3>
              <Badge variant="outline" className="text-xs">PROPOSED</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-3">
              {[
                { tier: "🥉 Bronze", profile: "New or niche; early-stage; minimal pipeline", benefits: "Deal registration; website listing", color: "bg-amber-50 border-amber-200" },
                { tier: "🥈 Silver", profile: "Actively engaged; generating qualified leads", benefits: "Co-marketing; limited MDF; QBR participation", color: "bg-slate-100 border-slate-300" },
                { tier: "🥇 Gold", profile: "Consistent pipeline contributor; deep product knowledge", benefits: "Priority lead routing; co-funded campaigns; roadmap previews; beta access", color: "bg-yellow-50 border-yellow-300" },
              ].map((t, i) => (
                <div key={i} className={`p-4 rounded-lg border text-center ${t.color}`}>
                  <p className="text-xl font-bold mb-2">{t.tier}</p>
                  <p className="text-sm text-slate-700 mb-2">{t.profile}</p>
                  <p className="text-xs text-muted-foreground">{t.benefits}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">Progression reviewed annually. Partners stagnating for more than two consecutive quarters subject to performance review.</p>
          </CardContent>
        </Card>
      </section>

      {/* Section 11 — Resourcing */}
      <section id="resourcing">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 11 — Resourcing</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              The partnership function currently sits with the CMO at 10–15% of their capacity, supported by 0.5 of a junior executive. This is sufficient to manage existing partner relationships and execute the 2026 referral recruitment plan at current scale. It is <span className="font-semibold">not</span> sufficient to support a full VAR or SI model, or manage 8+ active partners simultaneously.
            </p>
            <p className="text-sm text-slate-600 mt-2">
              A resourcing proposal will be brought to the board ahead of the 2027 planning cycle. In the interim, AI tooling will be used to maximise the current team's output.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 12 — Risk Register */}
      <section id="risk-register">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-red-500 to-red-700 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 12 — Risk Register</h3>
            </div>
            <div className="space-y-3">
              {[
                { risk: "Tungsten Underperformance", impact: "Cumulative 3-year shortfall at 50% delivery: ~€2M ARR", mitigation: "Performance-linked MDF; QBRs identify underperformance early" },
                { risk: "Partners Fail to Generate Pipeline", impact: "Slower ARR growth; risk to >30% contribution by 2029", mitigation: "Rigorous ICP-fit qualification; swift replacement of low performers" },
                { risk: "Channel Conflict with Direct Sales", impact: "Internal friction; disputed deals", mitigation: "Clear rules of engagement; deal registration in HubSpot" },
                { risk: "Xelix Competitive Cliff Edge", impact: "Partnership dissolves as Xelix builds competing solution. €541K pipeline at risk", mitigation: "Extract maximum value; evaluate Flextecs as replacement" },
                { risk: "Quality Issues in Partner-Led Deals", impact: "Reputational damage", mitigation: "Certification programme; CSAT tracking on all partner projects" },
                { risk: "Resourcing Constraint", impact: "CMO + 0.5 exec insufficient for 8+ partners", mitigation: "Dedicated partnerships hire scoped for 2027" },
                { risk: "Partner Financial / Compliance Risk", impact: "Reputational or legal exposure", mitigation: "Financial stability checks; IP protection clauses; exit clauses" },
              ].map((r, i) => (
                <div key={i} className="p-3 rounded-lg bg-red-50/50 border border-red-100">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900">{r.risk}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{r.impact}</p>
                      <p className="text-xs text-green-700 mt-1"><span className="font-semibold">Mitigation:</span> {r.mitigation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 13 — Execution Roadmap */}
      <section id="execution-roadmap">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 13 — Execution Roadmap</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  phase: "H1 2026",
                  items: [
                    "Onboard 2 new referral partners",
                    "Launch partner portal (H1 end)",
                    "Roll out structured enablement programme",
                    "Formalise Tungsten joint GTM",
                    "Close Xelix pipeline (MTC Trains priority)",
                  ],
                  color: "border-t-green-500",
                },
                {
                  phase: "H2 2026",
                  items: [
                    "Recruit SI partner (referral-led entry)",
                    "Bronze/Silver/Gold tiering live",
                    "VAR recruitment scoped",
                    "Dedicated partnerships hire planning",
                  ],
                  color: "border-t-blue-500",
                },
                {
                  phase: "2027+",
                  items: [
                    "Onboard 1 VAR (late 2026/early 2027)",
                    "Expand SI delivery model",
                    "Dedicated partnerships hire in place",
                    ">30% partner ARR by 2029",
                  ],
                  color: "border-t-purple-500",
                },
              ].map((p, i) => (
                <div key={i} className={`p-4 rounded-lg bg-slate-50 border border-slate-200 border-t-4 ${p.color}`}>
                  <p className="font-bold text-sm text-slate-900 mb-3">{p.phase}</p>
                  <ul className="space-y-2">
                    {p.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 14 — Active Partner Outreach */}
      <section id="partner-outreach">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full" />
              <h3 className="font-bold text-xl text-slate-900">Section 14 — Active Partner Outreach — Current Campaign</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              SoftCo is running a structured outreach campaign targeting potential partners across two tracks.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-teal-500" />
                  Manual Outreach — 15 Companies
                </h4>
                <div className="space-y-1">
                  {[
                    { name: "Armanino", type: "CPA & Advisory", region: "US — West" },
                    { name: "Assoc. for Corporate Growth", type: "M&A Network", region: "US — Midwest" },
                    { name: "Bishop Fleming", type: "Chartered Accountants", region: "UK — South West" },
                    { name: "Codestone Group", type: "SAP / ERP Consultancy", region: "UK — South" },
                    { name: "Connor Group", type: "Finance Advisory", region: "US — West" },
                    { name: "Embark", type: "CFO / Finance Consulting", region: "US — South" },
                    { name: "Inlumi", type: "CFO Digital Transformation", region: "Netherlands" },
                    { name: "Jade Global", type: "ERP / IT Consultancy", region: "US — West" },
                    { name: "Moss Adams", type: "CPA & Advisory", region: "US — West" },
                    { name: "ScottMadden", type: "Management Consulting", region: "US — South" },
                    { name: "Siegfried Advisory", type: "Finance & Tax Advisory", region: "US — East" },
                    { name: "Syntax", type: "SAP / Oracle Cloud", region: "Canada" },
                    { name: "Trimble", type: "Technology / Construction ERP", region: "US — West" },
                    { name: "Vistage", type: "CEO Peer Advisory", region: "US — West" },
                    { name: "West Monroe", type: "Digital Consulting", region: "US — Midwest" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded text-xs hover:bg-slate-50">
                      <span className="font-medium text-slate-900">{c.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">{c.type}</span>
                        <Badge variant="secondary" className="text-[10px]">{c.region}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Automated Outreach — 8 Companies
                </h4>
                <div className="space-y-1">
                  {[
                    { name: "Cadran", type: "Oracle ERP / JD Edwards", region: "Netherlands" },
                    { name: "Dajon UK", type: "AP / Data Management", region: "UK — London" },
                    { name: "De Novo Solutions", type: "Oracle Cloud ERP", region: "UK — Wales" },
                    { name: "DWS", type: "Oracle JD Edwards", region: "Netherlands" },
                    { name: "Envisage", type: "ERP Consulting", region: "UK" },
                    { name: "QX Global", type: "Finance BPO & AP", region: "UK" },
                    { name: "Spendlink", type: "Spend Management", region: "UK" },
                    { name: "Version1", type: "Oracle / Digital Transformation", region: "Ireland — Dublin" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded text-xs hover:bg-slate-50">
                      <span className="font-medium text-slate-900">{c.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">{c.type}</span>
                        <Badge variant="secondary" className="text-[10px]">{c.region}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span><span className="font-semibold">Geographic Alignment:</span> 13 in North America, 7 in UK, 2 in Netherlands, 1 in Ireland — aligned with SoftCo's four priority markets.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  );
};

export default BoardUpdateContent;
