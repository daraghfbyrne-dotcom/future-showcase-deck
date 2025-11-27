import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const CompetitorChart = () => {
  const data = [
    { name: 'Medius', pre: 25.0, post: 14.3, change: -10.7 },
    { name: 'Concur', pre: 27.3, post: 0, change: -27.3 },
    { name: 'Coupa', pre: 37.5, post: 14.3, change: -23.2 },
    { name: 'Esker', pre: 66.7, post: 0, change: -66.7 },
    { name: 'Basware', pre: 80.0, post: 14.3, change: -65.7 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Competitor Win Rate</h3>
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
            label={{ value: 'Win Rate (%)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value) => [`${value}%`, '']}
            labelFormatter={(label) => label}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => value === 'pre' ? "Jan '23 - June '24" : "July '24 - Nov '25"}
          />
          <Bar dataKey="pre" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Jan '23 - June '24" />
          <Bar dataKey="post" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} name="July '24 - Nov '25" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-muted-foreground text-center">
        Declining win rates indicate deteriorating competitive position
      </div>
    </Card>
  );
};
