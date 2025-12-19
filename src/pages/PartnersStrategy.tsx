import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import PartnerHero from "@/components/partners/PartnerHero";
import PartnershipTypes from "@/components/partners/PartnershipTypes";
import ARRContribution from "@/components/partners/ARRContribution";
import StrategyPhases from "@/components/partners/StrategyPhases";
import FourPillars from "@/components/partners/FourPillars";
import IncentivesTable from "@/components/partners/IncentivesTable";
import PartnerTiering from "@/components/partners/PartnerTiering";
import KPIsByPartnerType from "@/components/partners/KPIsByPartnerType";
import ResourcesRequired from "@/components/partners/ResourcesRequired";
import RisksBlockers from "@/components/partners/RisksBlockers";
import PartnerStatusUpdates from "@/components/partners/PartnerStatusUpdates";
import Conclusion from "@/components/partners/Conclusion";

const sections = [
  { id: "partner-overview", label: "Overview" },
  { id: "partnership-types", label: "Partnership Types" },
  { id: "arr-contribution", label: "ARR Timeline" },
  { id: "strategy-phases", label: "Strategy Phases" },
  { id: "four-pillars", label: "Four Pillars" },
  { id: "incentives", label: "Incentives" },
  { id: "tiering", label: "Tiering" },
  { id: "kpis", label: "KPIs" },
  { id: "resources", label: "Resources" },
  { id: "risks", label: "Risks" },
  { id: "partner-status", label: "Status Updates" },
  { id: "conclusion", label: "Conclusion" },
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
        <FourPillars />
        <IncentivesTable />
        <PartnerTiering />
        <KPIsByPartnerType />
        <ResourcesRequired />
        <RisksBlockers />
        <PartnerStatusUpdates />
        <Conclusion />
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
