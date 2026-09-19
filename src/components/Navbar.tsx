"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Scissors } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-background/90 backdrop-blur-md">
      <div className="w-[90%] lg:w-[80%] mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Scissors Logo */}
          <div className="relative flex items-center justify-center">
            <Scissors className="w-8 h-8 text-primary" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">SalonNO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
          <Link href="/features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</Link>
          <Link href="/solutions" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Solutions</Link>
          <Link href="/resources" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 group">
            Resources
            <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            }} 
            className="p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>
          <Link href="https://app.salonno.com/login" className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Login
          </Link>
          <Link href="https://app.salonno.com/register">
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium shadow-sm">Start Free</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            }} 
            className="p-2 text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
          
          <Link href="https://app.salonno.com/login" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </Link>
          <Link href="https://app.salonno.com/register" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="rounded-full w-full mt-2" size="lg">Start Free</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
