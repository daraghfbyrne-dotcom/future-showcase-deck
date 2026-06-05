import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import PartnerHero from "@/components/partners/PartnerHero";
import BoardUpdateContent from "@/components/partners/BoardUpdateContent";

const sections = [
  { id: "purpose", label: "Purpose" },
  { id: "executive-summary", label: "Executive Summary" },
  { id: "pipeline-targets", label: "Pipeline & ARR" },
  { id: "current-pipeline", label: "Current Pipeline" },
  { id: "existing-partnerships", label: "Existing Partnerships" },
  { id: "erp-ecosystem", label: "ERP Ecosystem" },
  { id: "competitive-landscape", label: "Competitive Landscape" },
  { id: "risk-register", label: "Risks" },
  { id: "execution-roadmap", label: "Roadmap" },
  { id: "partner-outreach", label: "Outreach" },
];

const PartnersStrategy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SectionNav sections={sections} />

      <main className="container mx-auto px-4 pt-32 pb-8 space-y-16">
        <PartnerHero />
        <BoardUpdateContent />
      </main>

      <footer className="border-t border-slate-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          SoftCo Partnership Strategy 2026–2029 | Board Update | Confidential
        </div>
      </footer>
    </div>
  );
};

export default PartnersStrategy;
