import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CalendarDays, ReceiptIndianRupee, Users, TrendingUp, Sparkles, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Features | SalonNO - Modern Salon Management",
  description: "Explore the comprehensive features of SalonNO. Everything you need to run your salon efficiently in one platform.",
};

const features = [
  {
    icon: <CalendarDays className="w-8 h-8 text-primary" />,
    title: "Smart Appointments",
    description: "Effortlessly manage your calendar. Allow customers to book online 24/7, reduce no-shows with automated reminders, and handle walk-ins smoothly.",
    highlights: ["Online Booking Page", "Drag-and-Drop Calendar", "Automated Reminders"]
  },
  {
    icon: <ReceiptIndianRupee className="w-8 h-8 text-primary" />,
    title: "Billing & GST Ready",
    description: "Generate professional invoices in seconds. Fully compliant with Indian GST laws, and integrates seamlessly with UPI and digital payments.",
    highlights: ["UPI Integration", "GST Invoicing", "Daily Sales Reports"]
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: "Customer Retention (CRM)",
    description: "Turn first-time visitors into loyal regulars. Track preferences, purchase history, and send personalized WhatsApp updates.",
    highlights: ["WhatsApp Integration", "Client History", "Membership Plans"]
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Staff & Attendance",
    description: "Manage your team efficiently. Track attendance, calculate commissions accurately, and monitor individual staff performance.",
    highlights: ["Biometric/Pin Login", "Commission Tracking", "Shift Management"]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with clear, actionable insights. Know your most popular services, peak hours, and top-performing staff.",
    highlights: ["Revenue Dashboards", "Inventory Alerts", "Exportable Reports"]
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Inventory Management",
    description: "Never run out of essential products. Track usage, get low-stock alerts, and manage retail product sales effortlessly.",
    highlights: ["Low Stock Alerts", "Supplier Tracking", "Retail POS"]
  }
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-zinc-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,58,247,0.15)_0%,rgba(0,0,0,0)_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-zinc-900 dark:text-white">
            Everything your salon needs. <br />
            <span className="text-primary">In one place.</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
            SalonNO replaces your appointment book, billing software, and Excel sheets with one beautiful, easy-to-use platform designed specifically for Indian salons.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://app.salonno.com/register" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(91,58,247,0.5)]">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-3xl p-8 hover:border-primary/50 transition-colors group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-zinc-200 dark:border-white/5">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Ready to upgrade your salon?</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            Join hundreds of salon owners who are saving time, increasing revenue, and delighting their customers with SalonNO.
          </p>
          <Link href="https://app.salonno.com/register" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(91,58,247,0.5)]">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
