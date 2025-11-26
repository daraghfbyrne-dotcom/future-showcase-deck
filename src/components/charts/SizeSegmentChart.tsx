import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from "@/components/ui/card";

export const SizeSegmentChart = () => {
  const data = [
    { range: '€50-150M', preRate: 25, postRate: 21, target: true },
    { range: '€100-300M', preRate: 16, postRate: 16, target: true },
    { range: '€300-600M', preRate: 18, postRate: 18, target: true },
    { range: '€600M-1B', preRate: 19, postRate: 11, target: false },
    { range: '€1B+', preRate: 20, postRate: 14, target: false },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Win Rate by Company Size</h3>
      <div className="mb-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">Target Segments (€50M-€600M)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPre" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--muted))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--muted))" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorPost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="range" 
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
            formatter={(value) => value === 'preRate' ? "Jan '23 - July '24" : "July '24 - Nov '25"}
          />
          <Area 
            type="monotone" 
            dataKey="preRate" 
            stroke="hsl(var(--muted))" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorPre)" 
          />
          <Area 
            type="monotone" 
            dataKey="postRate" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorPost)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
