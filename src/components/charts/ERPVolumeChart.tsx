import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const ERPVolumeChart = () => {
  const data = [
    { name: 'Oracle', preOpps: 19, postOpps: 15, preWins: 5, postWins: 4 },
    { name: 'Infor', preOpps: 12, postOpps: 11, preWins: 3, postWins: 3 },
    { name: 'JD Edwards', preOpps: 8, postOpps: 6, preWins: 3, postWins: 2 },
    { name: 'SAP', preOpps: 19, postOpps: 23, preWins: 4, postWins: 3 },
    { name: 'Dynamics', preOpps: 11, postOpps: 10, preWins: 1, postWins: 2 },
    { name: 'Other ERPs', preOpps: 36, postOpps: 23, preWins: 3, postWins: 1 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Volume by ERP System</h3>
      <ResponsiveContainer width="100%" height={400}>
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
          <Bar dataKey="preOpps" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="postOpps" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="preWins" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="postWins" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
