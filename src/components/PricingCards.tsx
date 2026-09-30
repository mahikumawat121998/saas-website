"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Simple pricing. No surprises.
        </h2>
        <p className="text-zinc-500 text-lg">
          Choose a plan that fits your salon&apos;s size and goals.
        </p>
        
        <div className="inline-flex items-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent p-1 mt-8">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-md text-sm font-bold transition-all border ${!isYearly ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white shadow-sm' : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-md text-sm font-bold transition-all flex items-center border ${isYearly ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white shadow-sm' : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
          >
            Yearly <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-1.5 uppercase ${isYearly ? 'bg-[#5b3af7] text-white' : 'bg-[#5b3af7]/10 text-[#5b3af7]'}`}>Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
         {/* Starter */}
         <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm flex flex-col h-full hover:border-[#5b3af7]/30 transition-colors">
           <div className="flex items-center justify-between mb-2">
             <h3 className="font-bold text-2xl text-zinc-900 dark:text-white">Starter</h3>
             <span className="bg-green-50 text-green-600 border border-green-200 dark:border-green-800/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">1 Month Free</span>
           </div>
           <div className="flex items-end gap-1 mb-2 mt-4">
             <span className="text-5xl font-bold text-zinc-900 dark:text-white">{isYearly ? '₹9,990' : '₹999'}</span>
             <span className="text-zinc-500 mb-2 font-medium">{isYearly ? '/yr' : '/mo'}</span>
           </div>
           <p className="text-sm text-zinc-500 mb-8 mt-2">For small salons with up to 3 staff</p>
           <ul className="space-y-4 mb-10 flex-1">
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Appointments</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Customers</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Billing & Payments</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> 3 Staff Members</li>
           </ul>
           <Link href="/#get-started" className="w-full">
             <Button variant="outline" className="w-full h-12 rounded-full font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50">Get Started</Button>
           </Link>
         </div>

         {/* Growth */}
         <div className="bg-white dark:bg-zinc-950 rounded-3xl border-2 border-[#5b3af7] p-8 shadow-xl flex flex-col relative transform md:-translate-y-4 h-[calc(100%+2rem)]">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5b3af7] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
             Most Popular
           </div>
           <h3 className="font-bold text-2xl mb-2 text-[#5b3af7]">Growth</h3>
           <div className="flex items-end gap-1 mb-2 mt-4">
             <span className="text-5xl font-bold text-zinc-900 dark:text-white">{isYearly ? '₹19,990' : '₹1,999'}</span>
             <span className="text-zinc-500 mb-2 font-medium">{isYearly ? '/yr' : '/mo'}</span>
           </div>
           <p className="text-sm text-zinc-500 mb-8 mt-2">For growing salons with up to 10 staff</p>
           <ul className="space-y-4 mb-10 flex-1">
             <li className="flex items-start gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-[#5b3af7] shrink-0" /> Everything in Starter</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-[#5b3af7] shrink-0" /> WhatsApp Notifications</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-[#5b3af7] shrink-0" /> Advanced Reports</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-[#5b3af7] shrink-0" /> 10 Staff Members</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-[#5b3af7] shrink-0" /> Inventory Management</li>
           </ul>
           <Link href="/#get-started" className="w-full mt-auto">
             <Button className="w-full h-12 rounded-full font-bold bg-[#5b3af7] hover:bg-[#4b2ce0] text-white shadow-md">Get Started</Button>
           </Link>
         </div>

         {/* Pro */}
         <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm flex flex-col h-full hover:border-[#5b3af7]/30 transition-colors">
           <h3 className="font-bold text-2xl mb-2 text-zinc-900 dark:text-white">Pro</h3>
           <div className="flex items-end gap-1 mb-2 mt-4">
             <span className="text-5xl font-bold text-zinc-900 dark:text-white">{isYearly ? '₹39,990' : '₹3,999'}</span>
             <span className="text-zinc-500 mb-2 font-medium">{isYearly ? '/yr' : '/mo'}</span>
           </div>
           <p className="text-sm text-zinc-500 mb-8 mt-2">For established salons & chains</p>
           <ul className="space-y-4 mb-10 flex-1">
             <li className="flex items-start gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Everything in Growth</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Multi-location Support</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Dedicated Support</li>
             <li className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0" /> Unlimited Staff Members</li>
           </ul>
           <Link href="/#get-started" className="w-full">
             <Button variant="outline" className="w-full h-12 rounded-full font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50">Get Started</Button>
           </Link>
         </div>
      </div>
    </>
  );
}
