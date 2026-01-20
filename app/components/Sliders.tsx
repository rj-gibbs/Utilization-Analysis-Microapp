"use client";
export const Slider = ({ label, value, onChange, min, max, step }: any) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-brand-blue font-semibold">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
    <input type="range" value={value} min={min} max={max} step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-brand-pink" />
  </div>
);
