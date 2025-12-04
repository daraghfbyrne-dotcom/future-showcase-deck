import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const CompetitorChart = () => {
  const data = [
    { name: 'Medius', pre: 7, post: 8 },
    { name: 'Coupa', pre: 4, post: 8 },
    { name: 'Tipalti', pre: 3, post: 6 },
    { name: 'Esker', pre: 3, post: 5 },
    { name: 'Basware', pre: 2, post: 5 },
    { name: 'Concur', pre: 9, post: 3 },
    { name: 'Stampli', pre: 3, post: 3 },
    { name: 'AvidXchange', pre: 3, post: 3 },
    { name: 'Yooz', pre: 4, post: 3 },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Competitor Mentions Comparison</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
            angle={-45}
            textAnchor="end"
            height={80}
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
            labelFormatter={(label) => label}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value) => value === 'pre' ? "Jan '23 - June '24" : "July '24 - Nov '25"}
          />
          <Bar dataKey="pre" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Jan '23 - June '24" />
          <Bar dataKey="post" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="July '24 - Nov '25" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-muted-foreground text-center">
        Increasing competitive mentions indicate intensifying market competition
      </div>
    </Card>
  );
};
