import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const PipelineBreakdownChart = () => {
  const data = [
    { name: 'SDR', value: 6840000, color: 'hsl(var(--primary))' },
    { name: 'Marketing', value: 8488720, color: 'hsl(var(--accent))' },
    { name: 'Partnerships', value: 5195360, color: 'hsl(var(--success))' },
    { name: 'AE Generated', value: 3960000, color: 'hsl(var(--chart-4))' },
  ];

  const formatCurrency = (value: number) => {
    return `€${(value / 1000000).toFixed(2)}M`;
  };

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Pipeline Contribution by Channel</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
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
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-primary">€24.48M</div>
        <div className="text-sm text-muted-foreground">Total Pipeline Target</div>
      </div>
    </Card>
  );
};
