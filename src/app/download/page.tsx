"use client";
import * as React from "react";
import { reportCards } from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import * as FileSaver from "file-saver";
import {
  DocumentChartBarIcon,
  ShieldCheckIcon,
  TableCellsIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ReactNode> = {
  DocumentChartBarIcon: <DocumentChartBarIcon className="h-7 w-7 text-primary" />,
  ShieldCheckIcon: <ShieldCheckIcon className="h-7 w-7 text-primary" />,
  TableCellsIcon: <TableCellsIcon className="h-7 w-7 text-primary" />,
  CurrencyDollarIcon: <CurrencyDollarIcon className="h-7 w-7 text-primary" />,
  ChartBarIcon: <ChartBarIcon className="h-7 w-7 text-primary" />,
};

export default function DownloadPage() {
  const handleDownload = (title: string, format: string) => {
    FileSaver.saveAs(new Blob(["placeholder"], { type: "application/octet-stream" }), `${title}.${format.toLowerCase()}`);
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reportCards.map(card => (
            <div key={card.title} className="bg-primary-50 border border-primary-200 rounded-lg shadow p-5 flex flex-col gap-3 items-start">
              {iconMap[card.icon]}
              <div className="font-semibold text-lg">{card.title}</div>
              <div className="text-slate-500 text-sm mb-2">{card.description}</div>
              <div className="flex gap-2 flex-wrap">
                {card.formats.map(format => (
                  <Button
                    key={format}
                    className="bg-primary-500 text-white hover:bg-primary-600 px-3 py-1 text-xs"
                    onClick={() => handleDownload(card.title, format)}
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
  );
} 