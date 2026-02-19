import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import PartnerHero from "@/components/partners/PartnerHero";
import PartnershipTypes from "@/components/partners/PartnershipTypes";
import ARRContribution from "@/components/partners/ARRContribution";
import StrategyPhases from "@/components/partners/StrategyPhases";
import Conclusion from "@/components/partners/Conclusion";
import UpdatedPartnershipStrategy from "@/components/partners/UpdatedPartnershipStrategy";

const sections = [
  { id: "partner-overview", label: "Overview" },
  { id: "partnership-types", label: "Partnership Types" },
  { id: "arr-contribution", label: "ARR Timeline" },
  { id: "strategy-phases", label: "Strategy Phases" },
  { id: "conclusion", label: "Conclusion" },
  { id: "updated-strategy", label: "Updated Strategy (Feb '26)" },
];

const PartnersStrategy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SectionNav sections={sections} />

      <main className="container mx-auto px-4 pt-32 pb-8 space-y-16">
        <PartnerHero />
        <PartnershipTypes />
        <ARRContribution />
        <StrategyPhases />
        <Conclusion />
        <UpdatedPartnershipStrategy />
      </main>

      <footer className="border-t border-slate-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          SoftCo Partners Strategy 2025-2026
        </div>
      </footer>
    </div>
  );
};

export default PartnersStrategy;
