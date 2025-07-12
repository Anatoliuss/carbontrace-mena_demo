"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";

interface UploadCardProps {
  title: string;
  description: string;
}

export function UploadCard({ title, description }: UploadCardProps) {
  const [file, setFile] = React.useState<File | null>(null);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DocumentArrowUpIcon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="border-2 border-dashed border-primary rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer min-h-[120px] bg-slate-50 dark:bg-slate-900"
          onDrop={onDrop}
          onDragOver={e => e.preventDefault()}
          onClick={() => document.getElementById(title + "-input")?.click()}
        >
          <input
            id={title + "-input"}
            type="file"
            className="hidden"
            onChange={onChange}
          />
          {file ? (
            <div className="flex flex-col items-center">
              <span className="text-green-600 font-medium">1 file uploaded</span>
              <span className="truncate text-xs mt-1">{file.name}</span>
            </div>
          ) : (
            <span className="text-slate-400">Drag & drop or click to upload</span>
          )}
        </div>
        <p className="text-xs text-slate-500 mt-2">{description}</p>
      </CardContent>
    </Card>
  );
} 