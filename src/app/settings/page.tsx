"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCompany } from "@/lib/company-context";

export default function SettingsPage() {
  const { companyName, setCompanyName } = useCompany();
  const [input, setInput] = React.useState(companyName);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setCompanyName(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md mx-auto p-6 bg-primary-50 border border-primary-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                value={input}
                onChange={handleNameChange}
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 