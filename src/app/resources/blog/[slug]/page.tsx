import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock database for our 3 articles
const BLOG_POSTS = {
  "increase-salon-bookings-whatsapp": {
    title: "How to increase your salon bookings by 30% using WhatsApp",
    category: "Marketing",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    author: "Neha Sharma",
    authorRole: "Marketing Expert",
    content: `
      <h2>The Power of WhatsApp in Salon Marketing</h2>
      <p>In today's fast-paced digital world, WhatsApp has become the preferred communication channel for most consumers. For salon owners in India, it represents an untapped goldmine for marketing and client retention.</p>
      
      <h3>1. Automated Appointment Reminders</h3>
      <p>No-shows are the biggest revenue leak for salons. By integrating WhatsApp to send automated appointment reminders 24 hours and 2 hours before the booking, you can reduce no-shows by up to 80%.</p>
      
      <h3>2. Targeted Broadcast Campaigns</h3>
      <p>Instead of generic SMS blasts, use WhatsApp broadcasts to send personalized offers. Have a slow Tuesday? Send a flash 20% discount offer only to clients who haven't visited in the last 60 days. The conversion rate on WhatsApp is significantly higher than email or SMS.</p>
      
      <h3>3. Post-Appointment Follow-ups</h3>
      <p>Automate a message to go out 3 days after a hair color service, asking how their color is holding up and recommending a color-protecting shampoo. This not only shows you care but subtly drives retail sales.</p>
      
      <h2>Getting Started</h2>
      <p>Using a tool like SalonNO makes WhatsApp marketing seamless. Our built-in CRM automatically segments your clients and triggers WhatsApp messages at exactly the right time, so you can focus on what you do best—delivering great services.</p>
    `
  },
  "salon-commission-structures": {
    title: "The ultimate guide to setting up salon commission structures",
    category: "Operations",
    date: "Oct 05, 2026",
    readTime: "8 min read",
    author: "Rajesh Kumar",
    authorRole: "Operations Director",
    content: `
      <h2>Finding the Right Balance</h2>
      <p>Setting up the perfect commission structure is a balancing act between keeping your staff motivated and maintaining a healthy profit margin for your salon business.</p>
      
      <h3>The Tiered Commission Model</h3>
      <p>The most successful salons use a tiered commission structure based on performance. For example:</p>
      <ul>
        <li>Up to ₹50,000 in services: 35% commission</li>
        <li>₹50,001 to ₹1,00,000: 40% commission</li>
        <li>Over ₹1,00,000: 45% commission</li>
      </ul>
      <p>This incentivizes your team to push for higher service volumes and upsells.</p>
      
      <h3>Retail Product Commissions</h3>
      <p>Retail sales are pure profit. Always separate service commission from retail commission. Offering a flat 10% to 15% on retail products encourages stylists to educate clients on home care.</p>
      
      <h3>Deducting Product Costs (Backbar)</h3>
      <p>Before calculating commission, it's crucial to deduct a standard 'backbar fee' (usually 10-15%) to cover the cost of raw materials (color tubes, keratin solutions, etc.). This ensures the business doesn't take a loss on highly material-intensive services.</p>
      
      <h2>Automating Payroll</h2>
      <p>Calculating these tiers manually at the end of every month is a nightmare. Using modern salon software like SalonNO automates this entirely, tracking individual staff performance and calculating complex commissions with a single click.</p>
    `
  },
  "client-retention-vs-acquisition": {
    title: "Why retaining existing clients is cheaper than finding new ones",
    category: "Growth",
    date: "Sep 28, 2026",
    readTime: "4 min read",
    author: "Priya Patel",
    authorRole: "Growth Strategist",
    content: `
      <h2>The Mathematics of Client Retention</h2>
      <p>Did you know it costs 5 times more to attract a new client than to keep an existing one? Despite this, most salons spend 80% of their marketing budget on acquiring new customers.</p>
      
      <h3>The Value of a Loyal Customer</h3>
      <p>A returning customer doesn't just spend money today; they represent a "Lifetime Value" (LTV). A client who visits every month for a ₹2,000 haircut and color is worth ₹24,000 a year. Losing them to a competitor means losing guaranteed recurring revenue.</p>
      
      <h3>Strategies to Boost Retention</h3>
      <ul>
        <li><strong>Pre-booking:</strong> Always ask the client to book their next appointment before they leave the chair.</li>
        <li><strong>Loyalty Programs:</strong> Implement a simple points system. For example, "Earn 1 point for every ₹100 spent. 100 points = Free Hair Spa."</li>
        <li><strong>Personalized Experiences:</strong> Remember their birthday, their favorite beverage, and how they like their hair parted. Small details build unshakable loyalty.</li>
      </ul>
      
      <h2>Tracking Retention</h2>
      <p>You can't improve what you don't measure. Use your salon management software to track your retention rate. If less than 60% of first-time clients return for a second visit, you have a retention problem that needs immediate attention.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];
  
  if (!post) {
    return {
      title: "Post Not Found | SalonNO Blog"
    };
  }

  return {
    title: `${post.title} | SalonNO Blog`,
    description: post.content.substring(0, 150).replace(/<[^>]+>/g, '') + '...',
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Article Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,58,247,0.05)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/resources" className="inline-flex items-center text-zinc-500 hover:text-primary transition-colors font-medium mb-8 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">{post.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-zinc-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-zinc-200 dark:border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-bold">{post.author}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-10 px-4 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-2 text-zinc-500 hover:text-primary hover:border-primary transition-colors text-sm font-medium"><Share2 className="w-4 h-4" /> Share Article</button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div 
            className="blog-content max-w-none text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-zinc-900 dark:[&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-zinc-900 dark:[&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li>strong]:text-zinc-900 dark:[&>ul>li>strong]:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Ready to implement this in your salon?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Join thousands of salons growing their business with SalonNO.</p>
            <Link href="/#get-started" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
