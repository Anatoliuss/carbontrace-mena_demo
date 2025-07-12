"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { HomeIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { useCompany } from "@/lib/company-context";

const navLinks = [
  { href: "/welcome", label: "Welcome" },
  { href: "/upload", label: "Upload" },
  { href: "/reports", label: "Additional Information" },
  { href: "/review", label: "Review & Download" },
  { href: "/settings", label: "Settings" },
];

export function NavBar() {
  const pathname = usePathname();
  const { companyName } = useCompany();
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-primary-50 border-b border-primary-200">
      <div className="flex-1 flex justify-center">
        <div className="flex gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${pathname === link.href ? "text-primary-600" : "text-primary-900/80"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <LanguageToggle />
      </div>
    </nav>
  );
} 