"use client";
import * as React from "react";
import { Switch } from "@/components/ui/switch";

export function LanguageToggle() {
  const [isArabic, setIsArabic] = React.useState(false);
  return (
    <div className="flex items-center gap-2">
      <Switch checked={isArabic} onCheckedChange={setIsArabic} id="lang-toggle" />
      <label htmlFor="lang-toggle" className="text-sm">{isArabic ? "AR" : "EN"}</label>
    </div>
  );
} 