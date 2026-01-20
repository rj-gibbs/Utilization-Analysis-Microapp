"use client";
import { useState } from "react";
import { Slider } from "./components/Sliders";
import { ResultsCharts } from "./components/ResultsCharts";
import { PDFExportButton } from "./components/PDFExportButton";
import { calcScenarioImpact } from "./utils/calculations";
import { defaultSensitivity } from "./utils/sensitivity";

export default function Home() {
  const [fte, setFte] = useState(5000);
  const [rate, setRate] = useState(250);
  const [util, setUtil] = useState(82);
  const [discount, setDiscount] = useState(90);

  const inputs = { fte, rate, utilCurrent: util, discount, losMix: { audit: 0.5, tax: 0.25, advisory: 0.25 } };
  const scenarios = calcScenarioImpact(inputs, defaultSensitivity);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-brand-pink mb-8">Utilization Impact Calculator 🎉</h1>
      <div className="bg-white rounded-2xl shadow p-6">
        <Slider label="Billable FTEs" value={fte} min={1000} max={20000} step={100} onChange={setFte} />
        <Slider label="Avg Rate ($)" value={rate} min={100} max={500} step={10} onChange={setRate} />
        <Slider label="Current Utilization (%)" value={util} min={70} max={100} step={0.5} onChange={setUtil} />
        <Slider label="Discount (%)" value={discount} min={70} max={100} step={1} onChange={setDiscount} />
      </div>
      <div className="mt-6">
        <ResultsCharts scenarios={scenarios} />
      </div>
      <PDFExportButton />
    </main>
  );
}
