import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card } from "@/components/ui/card";

export const CompetitorChart = () => {
  const data = [
    { name: 'Medius', pre: 7, post: 8, change: 14 },
    { name: 'Coupa', pre: 4, post: 8, change: 100 },
    { name: 'Basware', pre: 2, post: 5, change: 150 },
    { name: 'Tipalti', pre: 3, post: 6, change: 100 },
    { name: 'Esker', pre: 3, post: 5, change: 67 },
    { name: 'Concur', pre: 9, post: 3, change: -67 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Competitive Mentions Trend</h3>
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
            label={{ value: 'Mentions', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
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
            formatter={(value) => value === 'pre' ? 'Pre-July 2024' : 'Post-July 2024'}
          />
          <Bar dataKey="pre" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="post" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-muted-foreground text-center">
        Rising mentions indicate increased competitive pressure
      </div>
    </Card>
  );
};
