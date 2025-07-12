"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCompany } from "@/lib/company-context";
import { useRouter } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function WelcomePage() {
  const { setCompanyName } = useCompany();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [greeted, setGreeted] = React.useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompanyName("Company");
    setGreeted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md mx-auto p-6 bg-primary-50 border border-primary-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Login to CarbonTrace MENA</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {greeted && (
              <div className="text-center text-lg font-semibold text-accent-600 mb-2">
                Welcome, Company !
              </div>
            )}
            <button
              type="submit"
              className="bg-primary-500 text-white hover:bg-primary-600 rounded px-4 py-2 font-semibold transition"
            >
              {greeted ? "Continue to Upload" : "Login"}
            </button>
          </form>
          <div className="flex justify-end items-center mt-6">
            <LanguageToggle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 