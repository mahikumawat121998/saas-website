"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">SalonOS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            Resources
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://app.blogcube.site/login" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
            Login
          </Link>
          <Button className="rounded-full px-6 whitespace-nowrap">Start Free</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-6 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/features" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/solutions" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
          <Link href="/resources" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
          <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          
          <div className="h-px bg-border my-2" />
          
          <Link href="https://app.blogcube.site/login" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </Link>
          <Button className="rounded-full w-full mt-2" size="lg">Start Free</Button>
        </div>
      )}
    </nav>
  );
}
