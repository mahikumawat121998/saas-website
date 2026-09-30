import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, HelpCircle, Video, ArrowRight } from "lucide-react";
import { PlaybookBanner } from "@/components/PlaybookBanner";

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
    slug: "increase-salon-bookings-whatsapp",
    image: "/images/blog_marketing.jpg"
  },
  {
    category: "Operations",
    title: "The ultimate guide to setting up salon commission structures",
    readTime: "8 min read",
    slug: "salon-commission-structures",
    image: "/images/blog_operations.jpg"
  },
  {
    category: "Growth",
    title: "Why retaining existing clients is cheaper than finding new ones",
    readTime: "4 min read",
    slug: "client-retention-vs-acquisition",
    image: "/images/blog_growth.jpg"
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

      <PlaybookBanner />

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
            <Link key={index} href={`/resources/blog/${article.slug}`} className="group flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="w-full flex justify-center pt-6 px-4 sm:px-6">
                <div className="w-[80%] h-48 sm:h-56 relative overflow-hidden flex items-center justify-center rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgba(91,58,247,0.15)] transition-all duration-500">
                   <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="absolute inset-0 bg-[#5b3af7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>
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
