"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCompany } from "@/lib/company-context";
import { useRouter } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function LoginPage() {
  const { setCompanyName } = useCompany();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Accept any login credentials for now
    if (email && password) {
      // Extract company name from email domain or use a default
      const domain = email.split('@')[1];
      const companyName = domain ? domain.split('.')[0] : "Company";
      setCompanyName(companyName);
      
      // Simulate a brief loading period
      setTimeout(() => {
        router.push("/upload");
      }, 500);
    }
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
              disabled={isLoading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 rounded px-4 py-2 font-semibold transition"
            >
              {isLoading ? "Logging in..." : "Login"}
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