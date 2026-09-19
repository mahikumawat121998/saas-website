import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | SalonNO - Modern Salon Management",
  description: "Simple, transparent pricing for salons of all sizes. Choose the perfect plan for your business.",
};

const tiers = [
  {
    name: "Basic",
    description: "For independent stylists and small salons.",
    price: "₹999",
    period: "/month",
    features: [
      "Up to 3 Staff Members",
      "Unlimited Appointments",
      "Basic POS & Billing",
      "Standard Support",
    ],
    missingFeatures: [
      "WhatsApp Reminders",
      "Advanced Analytics",
      "Inventory Management"
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing salons that need more power.",
    price: "₹1,999",
    period: "/month",
    features: [
      "Up to 10 Staff Members",
      "Automated WhatsApp Reminders",
      "Advanced Inventory Management",
      "Staff Commission Tracking",
      "Real-time Analytics Dashboard",
      "Priority Support"
    ],
    missingFeatures: [],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large salon chains and franchises.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Staff & Locations",
      "Custom Brand App",
      "API Access",
      "Dedicated Account Manager",
      "Custom Reports",
      "24/7 Phone Support"
    ],
    missingFeatures: [],
    cta: "Contact Sales",
    highlighted: false,
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="pt-32 pb-16 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-white">
          Simple, transparent pricing.
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          No hidden fees. No surprise charges. Choose the plan that fits your salon&apos;s size and growth.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,58,247,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 border ${tier.highlighted ? 'bg-zinc-100 dark:bg-zinc-900 border-primary shadow-[0_0_40px_-10px_rgba(91,58,247,0.3)] transform md:-translate-y-4' : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800'}`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">{tier.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 h-10">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-zinc-900 dark:text-white">{tier.price}</span>
                <span className="text-zinc-500 dark:text-zinc-500 font-medium">{tier.period}</span>
              </div>
              
              <Link 
                href={tier.name === "Enterprise" ? "/contact" : "https://app.salonno.com/register"}
                className={`block w-full text-center py-3 px-4 rounded-full font-semibold transition-all ${tier.highlighted ? 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02]' : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200'}`}
              >
                {tier.cta}
              </Link>
              
              <div className="mt-8 space-y-4">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
                {tier.missingFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start opacity-50">
                    <X className="w-5 h-5 text-zinc-500 dark:text-zinc-500 shrink-0 mr-3" />
                    <span className="text-zinc-500 dark:text-zinc-500 text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Frequently asked questions</h2>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Can I switch plans later?</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade, we&apos;ll simply prorate the difference for the rest of your billing cycle.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Do you charge per transaction?</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">No. SalonNO does not take any cut of your sales or charge per transaction. Standard payment gateway fees (like Razorpay) apply if you use them to collect online payments.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Is there a free trial?</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Yes, we offer a 14-day free trial on our Basic and Pro plans. No credit card is required to sign up.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
