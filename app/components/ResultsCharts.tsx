"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Scenario = { delta: number; amount: number };

export const ResultsCharts = ({ scenarios = [] as Scenario[] }) => {
  // Format data for Recharts
  const data = scenarios.map((s) => ({
    name: `+${(s.delta * 100).toFixed(1)} pts`,
    value: Math.round(s.amount),
  }));

  // Guard for empty/zero data
  const hasSignal = data.some((d) => Math.abs(d.value) > 0);

  if (!hasSignal) {
    return (
      <div className="w-full h-72 bg-white rounded-xl p-6 shadow flex items-center justify-center text-gray-600">
        Adjust inputs to see the projected revenue impact →
      </div>
    );
  }

  // Provide space for Y-axis labels and chart edges
  const margin = { top: 16, right: 24, bottom: 8, left: 32 };

  return (
    <div className="w-full h-80 bg-white rounded-xl p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#4B5563", fontSize: 12 }}
            tickMargin={8}
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={{ stroke: "#E5E7EB" }}
          />
          <YAxis
            width={72}  // <- ensures labels aren’t cut off
            tick={{ fill: "#4B5563", fontSize: 12 }}
            tickFormatter={(v) =>
              v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` :
              v >= 1_000 ? `$${(v / 1_000).toFixed(0)}k` : `$${v}`
            }
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={{ stroke: "#E5E7EB" }}
          />
          <Tooltip
            formatter={(v: number) => `$${v.toLocaleString()}`}
            labelStyle={{ color: "#111827" }}
            contentStyle={{ borderRadius: 12, borderColor: "#E5E7EB" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"   // neutral, professional blue
            strokeWidth={3}
            dot={{ r: 3, stroke: "#2563EB", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
