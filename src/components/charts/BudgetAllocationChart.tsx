import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from "@/components/ui/card";

export const BudgetAllocationChart = () => {
  const data = [
    { name: 'Lead Gen & Tech', value: 405516, percentage: 30.4 },
    { name: 'Conferences & Events', value: 510368, percentage: 38.3 },
    { name: 'Brand & Content', value: 404592, percentage: 30.3 },
    { name: 'Misc & Other', value: 13800, percentage: 1.0 },
  ];

  const COLORS = [
    'hsl(var(--primary))',
    'hsl(var(--accent))',
    'hsl(var(--success))',
    'hsl(var(--chart-4))',
  ];

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `€${(value / 1000000).toFixed(2)}M`;
    }
    return `€${(value / 1000).toFixed(0)}K`;
  };

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Budget Allocation Breakdown</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value: number) => formatCurrency(value)}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value, entry: any) => `${value} (${entry.payload.percentage.toFixed(1)}%)`}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-primary">€1.33M</div>
        <div className="text-sm text-muted-foreground">Total 2026 Marketing Budget</div>
      </div>
    </Card>
  );
};
