import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const PipelineChart = () => {
  const data = [
    { quarter: 'Q1', events: 330000, dinners: 330000 },
    { quarter: 'Q2', events: 990000, dinners: 330000 },
    { quarter: 'Q3', events: 880000, dinners: 330000 },
    { quarter: 'Q4', events: 440000, dinners: 330000 },
  ];

  const formatCurrency = (value: number) => {
    return `€${(value / 1000).toFixed(0)}K`;
  };

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Quarterly Pipeline Targets</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="quarter" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            tickFormatter={formatCurrency}
            label={{ value: 'Pipeline Value', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value: number) => formatCurrency(value)}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => value === 'events' ? 'Major Events' : 'Executive Dinners'}
          />
          <Bar dataKey="events" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} />
          <Bar dataKey="dinners" stackId="a" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-primary">€2.97M</div>
        <div className="text-sm text-muted-foreground">Total Annual Pipeline Target</div>
      </div>
    </Card>
  );
};
