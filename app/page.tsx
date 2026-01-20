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
    
<main className="p-6 md:p-10 max-w-4xl mx-auto">
  <h1 className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-6">
    Utilization Impact Calculator
  </h1>

  <div className="bg-white rounded-2xl shadow border border-brand.panelBorder p-6">
    {/* sliders */}
  </div>

  <div className="mt-6">
    <ResultsCharts scenarios={scenarios} />
  </div>

  <PDFExportButton />
</main>
  );
}
