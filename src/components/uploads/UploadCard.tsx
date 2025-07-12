"use client";
import React, { useRef } from "react";
import { useUploads } from "@/context/UploadsContext";
import { StatusChip } from "./StatusChip";

interface UploadCardProps {
  label: string;
  uploadKey: Parameters<ReturnType<typeof useUploads>["setUpload"]>[0];
}

export function UploadCard({ label, uploadKey }: UploadCardProps) {
  const { uploads, setUpload } = useUploads();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUpload(uploadKey, e.dataTransfer.files[0].name);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUpload(uploadKey, e.target.files[0].name);
    }
  };
  return (
    <div className="bg-white border border-primary-200 rounded-lg p-4 flex flex-col gap-2 items-center shadow">
      <div className="font-semibold text-primary-700 mb-2 flex items-center gap-2">
        {label}
        <StatusChip status={uploads[uploadKey] ? "ready" : "pending"} />
      </div>
      <div
        className="w-full border-2 border-dashed border-primary-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer min-h-[80px] bg-primary-50 hover:bg-primary-100 transition"
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChange}
        />
        {uploads[uploadKey] ? (
          <span className="text-green-600 font-medium">{uploads[uploadKey]}</span>
        ) : (
          <span className="text-slate-400">Drag & drop or click to upload</span>
        )}
      </div>
    </div>
  );
} 