import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

export const IndustryVolumeChart = () => {
  const oppsData = [
    { name: 'Manufacturing', pre: 39, post: 28 },
    { name: 'Transport & Logistics', pre: 4, post: 4 },
    { name: 'Media & Telecom', pre: 4, post: 2 },
    { name: 'Health Services', pre: 7, post: 7 },
    { name: 'Natural Resources', pre: 7, post: 11 },
    { name: 'Financial Services', pre: 9, post: 5 },
  ];

  const winsData = [
    { name: 'Manufacturing', pre: 8, post: 4 },
    { name: 'Transport & Logistics', pre: 3, post: 0 },
    { name: 'Media & Telecom', pre: 1, post: 2 },
    { name: 'Health Services', pre: 2, post: 2 },
    { name: 'Natural Resources', pre: 3, post: 2 },
    { name: 'Financial Services', pre: 0, post: 0 },
  ];

  const tooltipStyle = {
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '0.5rem',
    color: 'hsl(var(--foreground))'
  };

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-lg mb-6">Volume by Industry</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Opportunities Chart */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">Opportunities</h4>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={oppsData}>
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
              />
              <Tooltip 
                contentStyle={tooltipStyle}
                formatter={(value, name) => [value, name === 'pre' ? "Jan '23 - July '24" : "July '24 - Nov '25"]}
              />
              <Legend 
                formatter={(value) => value === 'pre' ? "Jan '23 - July '24" : "July '24 - Nov '25"}
              />
              <Bar dataKey="pre" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="post" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Wins Chart */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">Wins</h4>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={winsData}>
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
              />
              <Tooltip 
                contentStyle={tooltipStyle}
                formatter={(value, name) => [value, name === 'pre' ? "Jan '23 - July '24" : "July '24 - Nov '25"]}
              />
              <Legend 
                formatter={(value) => value === 'pre' ? "Jan '23 - July '24" : "July '24 - Nov '25"}
              />
              <Bar dataKey="pre" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="post" fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
