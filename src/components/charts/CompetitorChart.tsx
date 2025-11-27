import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const CompetitorChart = () => {
  const data = [
    { name: 'Medius', pre: 75.0, post: 85.7, change: 10.7 },
    { name: 'Concur', pre: 72.7, post: 100, change: 27.3 },
    { name: 'Coupa', pre: 62.5, post: 85.7, change: 23.2 },
    { name: 'Esker', pre: 33.3, post: 100, change: 66.7 },
    { name: 'Basware', pre: 20.0, post: 85.7, change: 65.7 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Competitor Loss Rate</h3>
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
            label={{ value: 'Loss Rate (%)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => value === 'pre' ? "Jan '23 - June '24" : "July '24 - Nov '25"}
          />
          <Bar dataKey="pre" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="post" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-muted-foreground text-center">
        Higher loss rates indicate deteriorating competitive position
      </div>
    </Card>
  );
};
