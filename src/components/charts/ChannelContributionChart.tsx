import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';

const channelData = [
  { name: 'Marketing', value: 7500000, percentage: 35.5, color: 'hsl(var(--success))' },
  { name: 'SDR', value: 6000000, percentage: 28.4, color: 'hsl(var(--primary))' },
  { name: 'Partnerships', value: 4100000, percentage: 19.4, color: 'hsl(var(--chart-4))' },
  { name: 'AE Generated', value: 3500000, percentage: 16.6, color: 'hsl(var(--accent))' },
];

const formatValue = (value: number) => `€${(value / 1000000).toFixed(1)}M`;

export const ChannelContributionChart = () => {
  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={channelData}
          layout="vertical"
          margin={{ top: 10, right: 80, left: 100, bottom: 10 }}
        >
          <XAxis 
            type="number" 
            tickFormatter={(value) => `€${(value / 1000000).toFixed(0)}M`}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={13}
            width={90}
          />
          <Bar 
            dataKey="value" 
            radius={[0, 4, 4, 0]}
            barSize={36}
          >
            {channelData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList 
              dataKey="percentage" 
              position="right" 
              formatter={(value: number) => `${value}%`}
              style={{ fill: 'hsl(var(--foreground))', fontWeight: 600, fontSize: 14 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
