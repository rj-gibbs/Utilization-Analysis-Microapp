"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export const PDFExportButton = () => {
  const downloadPDF = async () => {
    const elem = document.body;
    const canvas = await html2canvas(elem);
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save("utilization-impact.pdf");
  };
  return (
    
<button
  onClick={downloadPDF}
  className="mt-4 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryDark transition"
>
  Export as PDF
</button>
  );
};
