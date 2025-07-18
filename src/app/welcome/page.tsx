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
  const [companyInput, setCompanyInput] = React.useState("");
  const [greeted, setGreeted] = React.useState(false);
  const [errors, setErrors] = React.useState<{email?: string; password?: string; company?: string}>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: {email?: string; password?: string; company?: string} = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    
    // Company name validation
    if (!companyInput.trim()) {
      newErrors.company = "Company name is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would be an actual authentication API call
      // For now, we'll accept any valid input as a "successful" login
      setCompanyName(companyInput);
      setGreeted(true);
      
      // Redirect to upload page after successful login
      setTimeout(() => {
        router.push('/upload');
      }, 2000);
    } catch {
      setErrors({ email: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
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
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : ''}`}
                disabled={isLoading}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary ${errors.password ? 'border-red-500' : ''}`}
                disabled={isLoading}
                required
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Company Name"
                value={companyInput}
                onChange={e => setCompanyInput(e.target.value)}
                className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary ${errors.company ? 'border-red-500' : ''}`}
                disabled={isLoading}
                required
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
            
            {greeted && (
              <div className="text-center text-lg font-semibold text-accent-600 mb-2">
                Welcome, {companyInput}! Redirecting to uploads...
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed rounded px-4 py-2 font-semibold transition"
            >
              {isLoading ? "Logging in..." : (greeted ? "Continue to Upload" : "Login")}
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