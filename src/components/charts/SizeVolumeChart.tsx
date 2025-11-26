import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const SizeVolumeChart = () => {
  const data = [
    { range: '€50-150M', preOpps: 28, postOpps: 24, preWins: 7, postWins: 5 },
    { range: '€100-300M', preOpps: 38, postOpps: 32, preWins: 6, postWins: 5 },
    { range: '€300-600M', preOpps: 34, postOpps: 28, preWins: 6, postWins: 5 },
    { range: '€600M-1B', preOpps: 21, postOpps: 18, preWins: 4, postWins: 2 },
    { range: '€1B+', preOpps: 10, postOpps: 7, preWins: 2, postWins: 1 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Volume by Company Size</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="range" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            label={{ value: 'Count', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => {
              const labels: Record<string, string> = {
                'preOpps': "Jan '23 - July '24 Opportunities",
                'postOpps': "July '24 - Nov '25 Opportunities",
                'preWins': "Jan '23 - July '24 Wins",
                'postWins': "July '24 - Nov '25 Wins"
              };
              return labels[value] || value;
            }}
          />
          <Bar dataKey="preOpps" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="postOpps" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="preWins" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="postWins" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
