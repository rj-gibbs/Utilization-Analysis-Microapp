"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
export const ResultsCharts = ({ scenarios }: any) => {
  const data = scenarios.map((s: any) => ({ name: `+${(s.delta * 100).toFixed(1)} pts`, value: Math.round(s.amount) }));
  return (
    <div className="w-full h-72 bg-white rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(v:any) => `$${Number(v).toLocaleString()}`} />
          <Line type="monotone" dataKey="value" stroke="#FF6BCE" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
