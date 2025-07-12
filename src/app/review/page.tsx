"use client";
import * as React from "react";
import { uploadBuckets } from "@/lib/dummyData";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ReviewPage() {
  const handleGenerate = () => {
    toast("Reports generated successfully!");
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-primary-50 border border-primary-200 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Review Uploaded Data</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-slate-200 dark:border-slate-700">
              <th className="py-2">Input Bucket</th>
              <th>Files</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {uploadBuckets.map(bucket => (
              <tr key={bucket.id} className="border-b border-slate-100 dark:border-slate-700">
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
      </div>
    </div>
  );
} 