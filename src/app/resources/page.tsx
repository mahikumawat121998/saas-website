import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, HelpCircle, Video, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Guides | SalonNO",
  description: "Learn how to grow your salon business with our guides, tutorials, and industry insights.",
};

const categories = [
  {
    icon: <HelpCircle className="w-8 h-8 text-primary" />,
    title: "Help Center",
    description: "Step-by-step guides on how to set up and use SalonNO to its full potential.",
    link: "/contact"
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: "Video Tutorials",
    description: "Visual walkthroughs of our most popular features and tools.",
    link: "/contact"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Industry Blog",
    description: "Expert advice on marketing, staff retention, and increasing your salon's revenue.",
    link: "#blog"
  }
];

const articles = [
  {
    category: "Marketing",
    title: "How to increase your salon bookings by 30% using WhatsApp",
    readTime: "5 min read",
  },
  {
    category: "Operations",
    title: "The ultimate guide to setting up salon commission structures",
    readTime: "8 min read",
  },
  {
    category: "Growth",
    title: "Why retaining existing clients is cheaper than finding new ones",
    readTime: "4 min read",
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 text-center px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-200 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,58,247,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-white max-w-4xl mx-auto">
            Resources <span className="text-primary">&</span> Guides
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to master SalonNO and grow your salon business.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.link} className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-3xl p-8 hover:border-primary/50 transition-colors group flex flex-col items-start">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{cat.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-1">{cat.description}</p>
              <div className="flex items-center text-primary font-medium group-hover:underline">
                Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Asset / Download */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <Download className="w-4 h-4 mr-2" /> Free Download
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">The 2026 Salon Growth Playbook</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
              A comprehensive 30-page PDF guide on optimizing your pricing, managing staff retention, and leveraging digital tools to double your revenue this year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full px-6 py-4 flex-1 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white font-semibold rounded-full px-8 py-4 hover:bg-primary/90 transition-colors shrink-0">
                Get the Guide
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-[3/4] bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
             <div className="p-8 text-center">
               <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Salon Growth<br/>Playbook</h3>
               <p className="text-zinc-500 dark:text-zinc-500 text-sm">2026 Edition</p>
             </div>
             <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border-4 border-primary/20 flex items-center justify-center">
               <div className="w-8 h-8 rounded-full bg-primary"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Latest from the blog</h2>
          <Link href="#blog" className="text-primary hover:underline font-medium flex items-center">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href="#blog" className="group flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden flex items-center justify-center border-b border-zinc-200 dark:border-zinc-900">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(91,58,247,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
                 <BookOpen className="w-12 h-12 text-zinc-800" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{article.category}</span>
                  <span className="text-zinc-500 dark:text-zinc-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                  Read article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
