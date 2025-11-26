import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const IndustryChart = () => {
  const data = [
    { name: 'Manufacturing', preRate: 20, postRate: 14 },
    { name: 'Transport & Logistics', preRate: 75, postRate: 0 },
    { name: 'Media & Telecom', preRate: 25, postRate: 100 },
    { name: 'Health Services', preRate: 29, postRate: 29 },
    { name: 'Natural Resources', preRate: 43, postRate: 18 },
    { name: 'Financial Services', preRate: 0, postRate: 0 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Win Rate by Industry</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            type="number"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            label={{ value: 'Win Rate (%)', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
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
            formatter={(value) => [`${value}%`, '']}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => value === 'preRate' ? 'Pre-July 2024' : 'Post-July 2024'}
          />
          <Bar dataKey="preRate" fill="hsl(var(--muted))" radius={[0, 4, 4, 0]} />
          <Bar dataKey="postRate" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
