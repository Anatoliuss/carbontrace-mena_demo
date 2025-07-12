"use client";
import React, { useState } from "react";
import { useUploads } from "@/context/UploadsContext";
import { StatusChip } from "@/components/uploads/StatusChip";
import { DialogAER } from "@/components/uploads/DialogAER";
import { DialogRisk } from "@/components/uploads/DialogRisk";
import { DialogCRF } from "@/components/uploads/DialogCRF";
import { DialogCredit } from "@/components/uploads/DialogCredit";
import { DialogADX } from "@/components/uploads/DialogADX";
import { toast } from "sonner";
import * as FileSaver from "file-saver";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  { key: "aer", label: "Annual Emissions Report", Dialog: DialogAER },
  { key: "risk", label: "Climate-Risk Adaptation Plan", Dialog: DialogRisk },
  { key: "crf", label: "GHG Inventory CRF", Dialog: DialogCRF },
  { key: "credit", label: "Carbon-Credit Statement", Dialog: DialogCredit },
  { key: "adx", label: "ADX 31-KPI ESG Disclosure", Dialog: DialogADX },
];

export default function ReportsPage() {
  const { isReady, setExtra } = useUploads();
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const handleGenerate = (key: string) => {
    toast("Report generated successfully!");
    FileSaver.saveAs(new Blob(["placeholder"], { type: "application/pdf" }), `${key}.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {reports.map(({ key, label, Dialog }) => (
          <Card key={key} className="flex items-center gap-4 justify-between p-5 border-2 border-accent-500 bg-accent-50">
            <div className="flex items-center gap-3">
              <StatusChip status={isReady(key as any) ? "ready" : "pending"} />
              <span className="font-semibold text-primary-700">{label}</span>
            </div>
            <Button
              className="bg-primary-500 text-white hover:bg-primary-600 rounded px-4 py-2 font-semibold transition border-2 border-primary-900"
              style={{ zIndex: 10 }}
              onClick={() => {
                if (isReady(key as any)) {
                  handleGenerate(key);
                } else {
                  setOpenDialog(key);
                }
              }}
            >
              Generate
            </Button>
            <Dialog
              open={openDialog === key}
              onClose={() => setOpenDialog(null)}
              onSave={values => {
                setExtra(key as any, values);
                setOpenDialog(null);
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
} 