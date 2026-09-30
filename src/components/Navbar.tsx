"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Scissors } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="hidden lg:flex items-center space-x-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          {[
            { name: "Home", href: "/" },
            { name: "Features", href: "/features" },
            { name: "Pricing", href: "/pricing" },
            { name: "Solutions", href: "/solutions" },
            { name: "About", href: "/about" }
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-all px-3 py-1.5 rounded-md border ${
                  isActive 
                    ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white' 
                    : 'border-transparent hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/resources" className={`transition-all px-3 py-1.5 rounded-md border ${pathname?.startsWith('/resources') ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white' : 'border-transparent hover:text-zinc-900 dark:hover:text-white'} flex items-center gap-1 group`}>
            Resources
            <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </Link>
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
          <Link 
            href="/#get-started" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-get-started'));
              }
            }}
          >
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
          <Link 
            href="/#get-started" 
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-get-started'));
              }
            }}
          >
            <Button className="rounded-full w-full mt-2" size="lg">Start Free</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
