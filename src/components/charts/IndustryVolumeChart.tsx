import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const IndustryVolumeChart = () => {
  const data = [
    { name: 'Manufacturing', preOpps: 39, postOpps: 28, preWins: 8, postWins: 4 },
    { name: 'Transport & Logistics', preOpps: 4, postOpps: 4, preWins: 3, postWins: 0 },
    { name: 'Media & Telecom', preOpps: 4, postOpps: 2, preWins: 1, postWins: 2 },
    { name: 'Health Services', preOpps: 7, postOpps: 7, preWins: 2, postWins: 2 },
    { name: 'Natural Resources', preOpps: 7, postOpps: 11, preWins: 3, postWins: 2 },
    { name: 'Financial Services', preOpps: 9, postOpps: 5, preWins: 0, postWins: 0 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Volume by Industry</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            type="number"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            label={{ value: 'Count', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            dataKey="name" 
            type="category"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            width={150}
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
          <Bar dataKey="preOpps" fill="hsl(var(--muted))" radius={[0, 4, 4, 0]} />
          <Bar dataKey="postOpps" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} />
          <Bar dataKey="preWins" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
          <Bar dataKey="postWins" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
