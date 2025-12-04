import { Card } from "@/components/ui/card";
import { TrendingUp, Target } from "lucide-react";
import { PipelineBreakdownChart } from "@/components/charts/PipelineBreakdownChart";

export const PipelineTargets = () => {
  const channels = [
    {
      name: "SDR 12 Months",
      target: 6840000,
      notes: "1 Additional SDR. 6 Opps per month pure outbound = €660k per mth pipeline. Q4 2025 Run Rate €500k pm. Av Deal size €95k"
    },
    {
      name: "AE Generated 12 Months",
      target: 3960000,
      notes: "Based on 3 qualified opps per month from 5 sales reps @110k"
    },
    {
      name: "Marketing 12 Months",
      target: 8488720,
      notes: "on 2025 Forecast. Incremental Research Project, improved organic - new site + brand refresh"
    },
    {
      name: "Partnerships 12 Months",
      target: 5195360,
      notes: "2025 Pipeline €1.6m. TA €3.8M pipe based on 530k ARR to SoftCo. Risk Xelix partnership winding down. Target onboard 3 new ptrs by end Q1 2026"
    }
  ];

  const formatCurrency = (value: number) => {
    return `€${(value / 1000000).toFixed(2)}M`;
  };

  const formatCurrencyShort = (value: number) => {
    if (value >= 1000000) {
      return `€${(value / 1000000).toFixed(2)}M`;
    }
    return `€${(value / 1000).toFixed(0)}K`;
  };

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Targeted Outcomes - <span className="text-primary">Pipeline</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              2026 Revenue targets and channel pipeline requirements
            </p>
          </div>

          {/* Top-level targets */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">ARR Target</h3>
                  <div className="text-3xl font-bold text-primary">€3.8M</div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Annual Recurring Revenue goal for 2026</div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Pipeline Required</h3>
                  <div className="text-3xl font-bold text-accent">€27.14M</div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Based on 14% win rate of pipeline</div>
            </Card>
          </div>

          {/* Pipeline breakdown */}
          <Card className="p-6 bg-card border-border mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Current Pipeline (end Nov)</div>
                <div className="text-2xl font-bold">{formatCurrency(8910000)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Net Pipeline Required</div>
                <div className="text-2xl font-bold text-warning">{formatCurrency(18200000)}</div>
              </div>
            </div>
          </Card>

          {/* Visualization */}
          <PipelineBreakdownChart />

          {/* Channel targets */}
          <Card className="p-6 bg-card border-border mb-8 mt-8">
            <h3 className="font-semibold text-xl mb-6">2026 Pipeline by Channel</h3>
            <div className="space-y-4">
              {channels.map((channel, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{channel.name}</h4>
                    <span className="text-xl font-bold text-primary">{formatCurrency(channel.target)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{channel.notes}</p>
                </div>
              ))}
            </div>

          </Card>
        </div>
      </div>
    </section>
  );
};
