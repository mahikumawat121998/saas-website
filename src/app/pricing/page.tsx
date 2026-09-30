import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PricingCards } from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing | SalonNO - Modern Salon Management",
  description: "Simple, transparent pricing for salons of all sizes. Choose the perfect plan for your business.",
};


export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <section className="pt-32 pb-24 bg-white dark:bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center tracking-tight">Frequently asked questions</h2>
        <div className="space-y-4">
          <details className="group bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 open:bg-white dark:open:bg-zinc-900/80 open:ring-1 open:ring-primary/20 open:shadow-lg transition-all duration-300 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg text-zinc-900 dark:text-white list-none marker:hidden">
              Can I switch plans later?
              <span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary">
                <ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50 animate-in fade-in slide-in-from-top-2 duration-300">
              Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade, we&apos;ll simply prorate the difference for the rest of your billing cycle.
            </p>
          </details>
          
          <details className="group bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 open:bg-white dark:open:bg-zinc-900/80 open:ring-1 open:ring-primary/20 open:shadow-lg transition-all duration-300 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg text-zinc-900 dark:text-white list-none marker:hidden">
              Do you charge per transaction?
              <span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary">
                <ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50 animate-in fade-in slide-in-from-top-2 duration-300">
              No. SalonNO does not take any cut of your sales or charge per transaction. Standard payment gateway fees (like Razorpay) apply if you use them to collect online payments.
            </p>
          </details>
          
          <details className="group bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 open:bg-white dark:open:bg-zinc-900/80 open:ring-1 open:ring-primary/20 open:shadow-lg transition-all duration-300 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg text-zinc-900 dark:text-white list-none marker:hidden">
              Is there a free trial?
              <span className="transition-transform duration-300 group-open:rotate-180 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary">
                <ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50 animate-in fade-in slide-in-from-top-2 duration-300">
              Yes, we offer 1 month free of cost on our Starter plan. No credit card is required to sign up.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
