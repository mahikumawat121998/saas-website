import { Metadata } from "next";
import Link from "next/link";
import { Heart, Target, Zap, Shield, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | SalonNO",
  description: "Learn about our mission to empower independent salon owners with modern, easy-to-use software.",
};

const values = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Radically Simple",
    description: "Software shouldn't require a manual. We design every feature to be intuitive, fast, and easy to use from day one."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Data-Driven Empowerment",
    description: "We believe that salon owners deserve the same powerful analytics that big tech companies use to grow their business."
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Customer Obsessed",
    description: "Your success is our success. We build features based on your feedback and our support team is always ready to help."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Uncompromising Reliability",
    description: "Your business relies on us. We take that seriously with bank-level security, fast load times, and guaranteed uptime."
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-center px-4 sm:px-6 lg:px-8 border-b border-zinc-200 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,58,247,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-zinc-900 dark:text-white leading-tight">
            We&apos;re on a mission to empower <span className="text-primary">salon owners.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            SalonNO was built because we believe the beauty and wellness industry deserves better software. Software that works as hard as you do.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest">
              <Users className="w-4 h-4 mr-2" /> Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              From messy Excel sheets to a modern platform.
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                A few years ago, we noticed a recurring pattern: incredibly talented stylists and salon owners were spending hours every evening wrestling with pen-and-paper appointment books, confusing Excel spreadsheets, and scattered WhatsApp messages.
              </p>
              <p>
                They were artists trying to run a business, but the tools available to them were either too complicated, too expensive, or just didn&apos;t understand how an Indian salon actually operates.
              </p>
              <p>
                We built SalonNO to fix that. We wanted to create a platform that handles the heavy lifting—billing, GST, inventory, and reminders—so you can get back to doing what you love: making people look and feel beautiful.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/5] bg-zinc-50 dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-900 relative overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              {/* Decorative Abstract Element */}
              <div className="relative z-10 w-full h-full border border-primary/20 rounded-2xl flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-black/50 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Built for You</h3>
                <p className="text-zinc-500 dark:text-zinc-500">Designed specifically for the unique needs of the modern salon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The principles that guide every feature we build and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-900 rounded-3xl p-10 hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(91,58,247,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Join our journey.</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            We are constantly evolving and building new tools to help you succeed. Try SalonNO today and see the difference.
          </p>
          <Link href="https://app.salonno.com/register" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(91,58,247,0.5)]">
            Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
