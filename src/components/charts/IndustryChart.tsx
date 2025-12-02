import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const IndustryChart = () => {
  const data = [
    { name: 'Manufacturing', prePeriod: 20, postPeriod: 14 },
    { name: 'Transport & Logistics', prePeriod: 75, postPeriod: 0 },
    { name: 'Media & Telecom', prePeriod: 25, postPeriod: 100 },
    { name: 'Health Services', prePeriod: 29, postPeriod: 29 },
    { name: 'Natural Resources', prePeriod: 43, postPeriod: 18 },
    { name: 'Financial Services', prePeriod: 0, postPeriod: 0 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Win Rate Comparison by Industry</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
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
            formatter={(value) => [`${value}%`, '']}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => value === 'prePeriod' ? "Jan '23 - July '24" : "July '24 - Nov '25"}
          />
          <Bar dataKey="prePeriod" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="postPeriod" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
