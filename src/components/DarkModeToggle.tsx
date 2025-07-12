"use client";
import * as React from "react";
import { Switch } from "@/components/ui/switch";

export function DarkModeToggle() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} id="dark-mode" />
      <label htmlFor="dark-mode" className="text-sm">Dark mode</label>
    </div>
  );
} 