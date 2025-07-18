"use client";
import * as React from "react";
import { Switch } from "@/components/ui/switch";

export function DarkModeToggle() {
  const [enabled, setEnabled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Initialize from localStorage and system preference
  React.useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setEnabled(savedTheme === 'true');
    } else {
      // Use system preference as fallback
      setEnabled(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkMode', 'false');
    }
  }, [enabled, mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Switch checked={false} onCheckedChange={() => {}} id="dark-mode" disabled />
        <label htmlFor="dark-mode" className="text-sm">Dark mode</label>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} id="dark-mode" />
      <label htmlFor="dark-mode" className="text-sm">Dark mode</label>
    </div>
  );
} 