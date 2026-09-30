"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 py-12 bg-white dark:bg-black w-full mt-auto">
      <div className="w-[90%] lg:w-[80%] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <Scissors className="w-6 h-6 text-primary" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-white">SalonNO</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium text-zinc-500">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
          <Link href="/features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</Link>
          <Link href="/solutions" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Solutions</Link>
          <Link href="/resources" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Resources</Link>
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 SalonNO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
