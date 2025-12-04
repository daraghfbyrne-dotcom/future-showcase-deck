import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const SizeSegmentChart = () => {
  const data = [
    { range: '€500m–1b', winRate: 29.5, target: true },
    { range: '€250m–499m', winRate: 27.0, target: true },
    { range: '€5b+', winRate: 26.3, target: true },
    { range: '€1b–5b', winRate: 16.2, target: false },
    { range: '€50m–99m', winRate: 10.5, target: false },
    { range: '€5m–49m', winRate: 10.0, target: false },
    { range: '€100m–249m', winRate: 9.5, target: false },
    { range: '€0–5m', winRate: 0.0, target: false },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Win Rate by Company Size (Jan '23 - Nov '25)</h3>
      <div className="mb-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">Target Segments</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground" />
          <span className="text-muted-foreground">Non-Target Segments</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="range" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            label={{ value: 'Win Rate (%)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value) => [`${value}%`, 'Win Rate']}
          />
          <Bar dataKey="winRate" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.target ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
