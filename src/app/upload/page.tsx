"use client";
import { UploadCard } from "@/components/UploadCard";
import { uploadBuckets } from "@/lib/dummyData";
import React from "react";

const descriptions = [
  "Facility register CSV file.",
  "Utility and fuel bills (PDF, images).",
  "Water and waste log files.",
  "HR snapshot CSV file.",
  "Board roster CSV file.",
  "Policy PDFs and ISO 14065 verifier letter.",
  "ACX trade receipt PDF.",
];

const factorOptions = [
  "GHG Protocol",
  "ISO 14064-1",
  "DEFRA 2023",
  "ADNOC Local Factors",
];

export default function UploadPage() {
  const [factor, setFactor] = React.useState(factorOptions[0]);
  return (
    <div className="min-h-screen bg-primary-50 py-10 px-4">
      <div className="max-w-5xl mx-auto mb-8 bg-white border border-primary-200 rounded-lg p-4">
        <label className="block text-sm font-medium mb-1 text-primary-700">Factor Library</label>
        <select
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-500"
          value={factor}
          onChange={e => setFactor(e.target.value)}
        >
          {factorOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploadBuckets.map((bucket, i) => (
          <UploadCard
            key={bucket.id}
            title={bucket.name}
            description={descriptions[i]}
          />
        ))}
      </div>
    </div>
  );
} 