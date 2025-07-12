"use client";
import * as React from "react";
import { uploadBuckets } from "@/lib/dummyData";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as FileSaver from "file-saver";

const reports = [
  { key: "aer", label: "Annual Emissions Report", formats: ["PDF", "XML"] },
  { key: "risk", label: "Climate-Risk Adaptation Plan", formats: ["PDF"] },
  { key: "crf", label: "GHG Inventory CRF", formats: ["XLSX", "XML"] },
  { key: "credit", label: "Carbon-Credit Statement", formats: ["PDF", "JSON"] },
  { key: "adx", label: "ADX 31-KPI ESG Disclosure", formats: ["PDF"] },
];

export default function ReviewPage() {
  const handleGenerate = () => {
    toast("Reports generated successfully!");
  };
  const handleDownload = (title: string, format: string) => {
    FileSaver.saveAs(new Blob(["placeholder"], { type: "application/octet-stream" }), `${title}.${format.toLowerCase()}`);
  };
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-primary-50 border border-primary-200 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Review & Download</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-slate-200">
              <th className="py-2">Input Bucket</th>
              <th>Files</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {uploadBuckets.map(bucket => (
              <tr key={bucket.id} className="border-b border-slate-100">
                <td className="py-2 font-medium">{bucket.name}</td>
                <td>{bucket.files.length > 0 ? bucket.files.join(", ") : <span className="text-slate-400">No files</span>}</td>
                <td>
                  {bucket.status === "uploaded" ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <ExclamationCircleIcon className="h-5 w-5 text-slate-400" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-6">
          <Button onClick={handleGenerate} className="bg-primary-500 text-white hover:bg-primary-600">
            Generate Reports
          </Button>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Download Your Reports</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reports.map(card => (
              <div key={card.key} className="bg-white border border-primary-200 rounded-lg shadow p-4 flex flex-col gap-2">
                <div className="font-semibold text-primary-700">{card.label}</div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {card.formats.map(format => (
                    <Button
                      key={format}
                      className="bg-primary-500 text-white hover:bg-primary-600 px-3 py-1 text-xs"
                      onClick={() => handleDownload(card.label, format)}
                    >
                      Download {format}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 