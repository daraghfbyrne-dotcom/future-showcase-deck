import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const SizeVolumeChart = () => {
  const dealsData = [
    { range: '€500m–1b', deals: 44, target: true },
    { range: '€250m–499m', deals: 37, target: true },
    { range: '€1b–5b', deals: 37, target: false },
    { range: '€100m–249m', deals: 42, target: false },
    { range: '€5m–49m', deals: 30, target: false },
    { range: '€5b+', deals: 19, target: true },
    { range: '€50m–99m', deals: 19, target: false },
    { range: '€0–5m', deals: 12, target: false },
  ];

  const winsData = [
    { range: '€500m–1b', wins: 13, target: true },
    { range: '€250m–499m', wins: 10, target: true },
    { range: '€1b–5b', wins: 6, target: false },
    { range: '€5b+', wins: 5, target: true },
    { range: '€100m–249m', wins: 4, target: false },
    { range: '€5m–49m', wins: 3, target: false },
    { range: '€50m–99m', wins: 2, target: false },
    { range: '€0–5m', wins: 0, target: false },
  ];

  const tooltipStyle = {
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '0.5rem',
    color: 'hsl(var(--foreground))'
  };

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Volume by Company Size (Jan '23 - Nov '25)</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">Deals</h4>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={dealsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="range" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="deals" radius={[4, 4, 0, 0]}>
                {dealsData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.target ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-2))'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">Wins</h4>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={winsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="range" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="wins" radius={[4, 4, 0, 0]}>
                {winsData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.target ? 'hsl(var(--chart-4))' : 'hsl(var(--chart-5))'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
