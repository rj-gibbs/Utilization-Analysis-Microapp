"use client";

export const Slider = ({ label, value, onChange, min, max, step }: any) => (
  <div className="mb-5">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-brand.grayText">{label}</span>
      <span className="px-2 py-0.5 text-sm font-semibold rounded bg-gray-100 text-gray-700">
        {value}
      </span>
    </div>
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-brand-primary"
    />
  </div>
);
