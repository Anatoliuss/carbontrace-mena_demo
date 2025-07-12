"use client";
import React, { createContext, useContext, useState } from "react";

export type UploadKey =
  | "facility"
  | "utility"
  | "water"
  | "hr"
  | "board"
  | "acx";

export type ReportKey =
  | "aer"
  | "risk"
  | "crf"
  | "credit"
  | "adx";

interface UploadsContextType {
  uploads: Partial<Record<UploadKey, string>>;
  setUpload: (key: UploadKey, fileName: string) => void;
  extra: Partial<Record<ReportKey, any>>;
  setExtra: (key: ReportKey, value: any) => void;
  isReady: (report: ReportKey) => boolean;
}

const UploadsContext = createContext<UploadsContextType | undefined>(undefined);

export function UploadsProvider({ children }: { children: React.ReactNode }) {
  const [uploads, setUploads] = useState<Partial<Record<UploadKey, string>>>({});
  const [extra, setExtraState] = useState<Partial<Record<ReportKey, any>>>({});

  const setUpload = (key: UploadKey, fileName: string) => {
    setUploads(u => ({ ...u, [key]: fileName }));
  };
  const setExtra = (key: ReportKey, value: any) => {
    setExtraState(e => ({ ...e, [key]: value }));
  };
  // Dummy logic: all uploads present and extra present for each report
  const isReady = (report: ReportKey) => {
    switch (report) {
      case "aer":
        return !!uploads.facility && !!uploads.utility && !!uploads.hr && !!extra.aer;
      case "risk":
        return !!uploads.facility && !!uploads.utility && !!extra.risk;
      case "crf":
        return !!uploads.facility && !!uploads.utility && !!extra.crf;
      case "credit":
        return !!uploads.acx && !!extra.credit;
      case "adx":
        return !!uploads.board && !!extra.adx;
      default:
        return false;
    }
  };
  return (
    <UploadsContext.Provider value={{ uploads, setUpload, extra, setExtra, isReady }}>
      {children}
    </UploadsContext.Provider>
  );
}

export function useUploads() {
  const ctx = useContext(UploadsContext);
  if (!ctx) throw new Error("useUploads must be used within UploadsProvider");
  return ctx;
} 