import { Metadata } from "next";
import Link from "next/link";
import { Scissors, Store, Building2, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | SalonNO - Modern Salon Management",
  description: "Discover how SalonNO solves unique challenges for independent stylists, growing salons, and large franchises.",
};

const solutions = [
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: "For Independent Stylists",
    subtitle: "Look big, stay agile.",
    description: "You're a one-person show, which means your time is your most valuable asset. Stop wasting it on manual scheduling and WhatsApp back-and-forths.",
    benefits: [
      "24/7 Professional Online Booking Page",
      "Automated appointment reminders",
      "Simple, fast checkout with UPI",
      "Client history at your fingertips"
    ]
  },
  {
    icon: <Store className="w-10 h-10 text-primary" />,
    title: "For Growing Salons",
    subtitle: "Scale without the chaos.",
    description: "When you have 2 to 10 staff members, managing schedules, calculating commissions, and retaining customers becomes a full-time job. We automate it.",
    benefits: [
      "Advanced staff scheduling & shifts",
      "Automated commission calculations",
      "WhatsApp CRM for customer retention",
      "Inventory alerts so you never run out"
    ]
  },
  {
    icon: <Building2 className="w-10 h-10 text-primary" />,
    title: "For Chains & Franchises",
    subtitle: "Centralized control.",
    description: "Running multiple locations requires standardizing operations and having real-time visibility into every branch's performance from a single dashboard.",
    benefits: [
      "Multi-location performance dashboards",
      "Standardized service menus across branches",
      "Centralized customer database",
      "Granular role-based access control"
    ]
  }
];

const problems = [
  { issue: "No-shows and late cancellations costing you money.", solution: "Automated SMS/WhatsApp reminders." },
  { issue: "Spending hours calculating staff commissions.", solution: "Instant, accurate payroll reports." },
  { issue: "Losing track of client preferences and history.", solution: "Detailed digital client profiles." },
  { issue: "Running out of essential hair color or products.", solution: "Real-time low stock alerts." },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 text-center px-4 sm:px-6 lg:px-8 border-b border-zinc-200 dark:border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,58,247,0.15)_0%,rgba(0,0,0,0)_50%)]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Spend less time managing, <br className="hidden md:block" />
            <span className="text-primary">more time styling.</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
            Whether you&apos;re an independent stylist or running a 10-location franchise, SalonNO is built to solve your biggest headaches.
          </p>
        </div>
      </section>

      {/* Solutions by Business Type */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{solution.subtitle}</h3>
                  <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">{solution.title}</h2>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                </div>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-4" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-square md:aspect-auto md:h-[500px] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl relative overflow-hidden flex items-center justify-center group hover:border-primary/30 transition-colors">
                  {/* Abstract placeholder for UI representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,58,247,0.1)_0%,rgba(0,0,0,0)_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-zinc-700 font-mono text-sm relative z-10 flex flex-col items-center gap-4">
                    {solution.icon}
                    Dashboard UI Placeholder
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problems Solved */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Problems we fix instantly.</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Stop doing things the hard way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((prob, i) => (
              <div key={i} className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between h-full group hover:border-primary/50 transition-colors">
                <div className="flex items-start mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-500/80 shrink-0 mr-4 mt-1" />
                  <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-snug">{prob.issue}</p>
                </div>
                <div className="flex items-center text-primary font-medium">
                  <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                  {prob.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(91,58,247,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Let&apos;s grow your salon together.</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
            Join the modern salon owners who are streamlining their business with SalonNO.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://app.salonno.com/register" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(91,58,247,0.5)]">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
