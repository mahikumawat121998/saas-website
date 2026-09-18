"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-background/90 backdrop-blur-md">
      <div className="w-[90%] lg:w-[80%] mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Lotus Logo Placeholder */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-3 h-5 bg-primary/60 rounded-full transform -rotate-45 -translate-x-1 translate-y-0.5"></div>
            <div className="absolute w-3 h-5 bg-primary/80 rounded-full transform rotate-45 translate-x-1 translate-y-0.5"></div>
            <div className="absolute w-3.5 h-6 bg-primary rounded-full z-10"></div>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">SalonOS</span>
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
          <Link href="https://app.blogcube.site/login" className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Login
          </Link>
          <Link href="https://app.blogcube.site/register">
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
          
          <Link href="https://app.blogcube.site/login" className="text-lg font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </Link>
          <Link href="https://app.blogcube.site/register" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="rounded-full w-full mt-2" size="lg">Start Free</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
