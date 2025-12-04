import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { range: "3k–20k", prePeriod: 17.2, postPeriod: 36.8, change: 19.6, target: true },
  { range: "20k–30k", prePeriod: 25.0, postPeriod: 17.6, change: -7.4, target: true },
  { range: "30k–45k", prePeriod: 10.0, postPeriod: 6.7, change: -3.3, target: false },
  { range: "45k–60k", prePeriod: 15.4, postPeriod: 5.9, change: -9.5, target: false },
  { range: "60k–120k", prePeriod: 28.6, postPeriod: 17.4, change: -11.2, target: true },
  { range: "120k–1.8m", prePeriod: 33.3, postPeriod: 0.0, change: -33.3, target: false },
];

const tooltipStyle = {
  backgroundColor: 'hsl(var(--card))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '8px',
  padding: '12px',
};

export const InvoiceVolumeChart = () => {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-4 text-center">Win Rate by Invoice Volume (P/A)</h3>
      <p className="text-sm text-muted-foreground text-center mb-4">
        Pre-July 2024: Jan 2023 → June 2024 | Post-July 2024: July 2024 → Nov 2025
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="range" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={tooltipStyle}
            formatter={(value: number) => [`${value}%`, '']}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend />
          <Bar 
            dataKey="prePeriod" 
            name="Jan 2023 → June 2024"
            fill="hsl(var(--chart-2))" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="postPeriod" 
            name="July 2024 → Nov 2025"
            fill="hsl(var(--primary))" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
