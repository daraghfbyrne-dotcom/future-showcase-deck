import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const ERPChart = () => {
  const data = [
    { name: 'Oracle', prePeriod: 26, postPeriod: 27, status: 'strong' },
    { name: 'Infor', prePeriod: 25, postPeriod: 27, status: 'strong' },
    { name: 'JD Edwards', prePeriod: 38, postPeriod: 33, status: 'strong' },
    { name: 'SAP', prePeriod: 21, postPeriod: 13, status: 'declining' },
    { name: 'Dynamics', prePeriod: 9, postPeriod: 20, status: 'weak' },
    { name: 'Other ERPs', prePeriod: 8, postPeriod: 4, status: 'avoid' },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Win Rate Comparison by ERP</h3>
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
