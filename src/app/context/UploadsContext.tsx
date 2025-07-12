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

export interface UploadsContextType {
  uploads: Record<UploadKey, string[]>;
  setUpload: (key: UploadKey, files: string[]) => void;
  extra: Record<ReportKey, any>;
  setExtra: (key: ReportKey, value: any) => void;
}

const UploadsContext = createContext<UploadsContextType | undefined>(undefined);

const defaultUploads: Record<UploadKey, string[]> = {
  facility: [],
  utility: [],
  water: [],
  hr: [],
  board: [],
  acx: [],
};

const defaultExtra: Record<ReportKey, any> = {
  aer: {},
  risk: {},
  crf: {},
  credit: {},
  adx: {},
};

export function UploadsProvider({ children }: { children: React.ReactNode }) {
  const [uploads, setUploads] = useState(defaultUploads);
  const [extra, setExtraState] = useState(defaultExtra);

  const setUpload = (key: UploadKey, files: string[]) => {
    setUploads(prev => ({ ...prev, [key]: files }));
  };
  const setExtra = (key: ReportKey, value: any) => {
    setExtraState(prev => ({ ...prev, [key]: value }));
  };

  return (
    <UploadsContext.Provider value={{ uploads, setUpload, extra, setExtra }}>
      {children}
    </UploadsContext.Provider>
  );
}

export function useUploads() {
  const ctx = useContext(UploadsContext);
  if (!ctx) throw new Error("useUploads must be used within UploadsProvider");
  return ctx;
} 