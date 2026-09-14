import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, Receipt, BarChart, Calendar, Users, FileText, Settings, Smartphone, Bell, IndianRupee, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-10 max-w-3xl lg:max-w-xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Modern Salon Management Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Run your salon. <br className="hidden md:block" />
                Grow your business.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                SalonOS brings appointments, customers, staff, billing, payments and business insights into one simple platform.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base h-12 px-8">
                  Start Free <span className="ml-2">→</span>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base h-12 px-8">
                  Book a Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No Setup Fee</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Cancel Anytime</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 24/7 Support</span>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="flex-1 w-full lg:w-auto relative z-10">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-square max-w-3xl mx-auto">
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-multiply" />
                
                <div className="absolute inset-0 bg-white dark:bg-zinc-950 rounded-2xl border shadow-2xl overflow-hidden flex flex-col">
                  {/* Fake Browser/App Header */}
                  <div className="h-12 border-b flex items-center px-4 gap-2 bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mx-auto w-1/2 h-6 bg-background rounded-md border text-xs flex items-center justify-center text-muted-foreground">app.salonos.com</div>
                  </div>
                  {/* Mockup Body Content */}
                  <div className="flex-1 p-6 flex flex-col gap-6 bg-background/50 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-xl">Good morning, Priya 👋</h3>
                        <p className="text-sm text-muted-foreground">Here&apos;s what&apos;s happening at your salon today.</p>
                      </div>
                    </div>
                    {/* Mockup Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl border bg-card shadow-sm">
                        <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
                        <div className="font-bold text-2xl">₹24,850</div>
                        <div className="text-xs text-green-500 mt-1">+12%</div>
                      </div>
                      <div className="p-4 rounded-xl border bg-card shadow-sm">
                        <div className="text-xs text-muted-foreground mb-1">Appointments</div>
                        <div className="font-bold text-2xl">38</div>
                        <div className="text-xs text-green-500 mt-1">+8%</div>
                      </div>
                      <div className="p-4 rounded-xl border bg-card shadow-sm">
                        <div className="text-xs text-muted-foreground mb-1">New Customers</div>
                        <div className="font-bold text-2xl">7</div>
                        <div className="text-xs text-green-500 mt-1">+25%</div>
                      </div>
                    </div>
                    
                    {/* Decorative fade for bottom of mockup */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Header */}
            <div className="lg:w-1/3 flex flex-col items-start text-left">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 font-medium">
                The Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                Your salon is busy.<br />
                Your software shouldn&apos;t be.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stop juggling WhatsApp messages, manual billing and spreadsheets. SalonOS helps you stay organized, save time and focus on what matters — your customers.
              </p>
            </div>
            
            {/* Right Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-2xl p-6 border shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">Too many<br />WhatsApp messages</h3>
                <p className="text-muted-foreground">Manage appointments and customer communication in one place.</p>
              </div>
              <div className="bg-background rounded-2xl p-6 border shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Receipt className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">Manual billing</h3>
                <p className="text-muted-foreground mt-auto">Create invoices and track payments instantly.</p>
              </div>
              <div className="bg-background rounded-2xl p-6 border shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">No idea how your<br />salon is performing</h3>
                <p className="text-muted-foreground mt-auto">See revenue, staff performance and customer trends from one dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Features */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 font-medium">
                Everything in One Place
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Everything your salon needs. <span className="text-primary">One place.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                From booking to billing, SalonOS gives you the tools to run your salon smoothly and efficiently.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Appointments</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Online and staff-managed bookings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Customers</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Customer profiles, history and preferences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Staff</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Schedules, attendance, performance & commissions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-primary flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Services</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Manage your services, packages and pricing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Invoices</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Create and track invoices in seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Payments</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">UPI, cards, and more. Get paid faster.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Reports</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Understand your business with real-time insights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Reminders</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Bring customers back with automated messages.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Graphic */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px]" />
              <div className="relative border rounded-2xl bg-zinc-50 dark:bg-zinc-900 shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8">
                 <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-xl border shadow-sm p-4 flex flex-col gap-4 relative">
                   <div className="h-8 w-1/3 bg-muted rounded-md" />
                   <div className="flex gap-4 flex-1">
                     <div className="w-1/4 flex flex-col gap-2">
                       <div className="h-6 bg-muted rounded-md" />
                       <div className="h-6 bg-muted rounded-md" />
                       <div className="h-6 bg-primary/20 rounded-md" />
                       <div className="h-6 bg-muted rounded-md" />
                     </div>
                     <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-bold">Appointments</span>
                          <div className="h-6 w-24 bg-primary text-[10px] text-white rounded-md flex items-center justify-center">+ New Appointment</div>
                        </div>
                        <div className="flex-1 space-y-2 mt-2">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="flex justify-between p-2 border rounded-md text-xs">
                              <span>10:00 AM</span>
                              <span className="font-medium">Customer {i}</span>
                              <span className="text-green-600 bg-green-50 px-2 rounded-full">Confirmed</span>
                            </div>
                          ))}
                        </div>
                     </div>
                   </div>
                   
                   {/* Mobile Mockup overlay */}
                   <div className="absolute right-4 bottom-4 w-40 h-72 bg-white dark:bg-zinc-950 rounded-3xl border-4 border-zinc-800 shadow-2xl p-3 flex flex-col">
                     <div className="text-[10px] font-bold text-center mb-2">SalonOS</div>
                     <div className="text-xs font-bold mb-2">Good Morning, Priya 👋</div>
                     <div className="flex-1 space-y-2">
                       {[1,2,3].map(i => (
                          <div key={i} className="p-2 border rounded-md text-[10px] flex justify-between bg-zinc-50 dark:bg-zinc-900">
                            <span>10:00</span>
                            <span className="font-bold">Haircut</span>
                          </div>
                        ))}
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Mockups */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-white dark:bg-zinc-950 p-4 border rounded-xl shadow-sm flex flex-col gap-2 sm:col-span-2">
                 <div className="text-sm font-medium">Revenue</div>
                 <div className="text-2xl font-bold flex items-center gap-2">₹84,520 <span className="text-sm text-green-500 font-medium">+12%</span></div>
                 <div className="h-24 mt-2 w-full bg-gradient-to-t from-primary/10 to-transparent rounded border-b-2 border-primary relative overflow-hidden">
                    <svg className="absolute bottom-0 w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0 100 L0 80 Q 25 50 50 70 T 100 30 L100 100 Z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M0 80 Q 25 50 50 70 T 100 30" fill="transparent" stroke="currentColor" strokeWidth="2" />
                    </svg>
                 </div>
               </div>
               <div className="bg-white dark:bg-zinc-950 p-4 border rounded-xl shadow-sm flex flex-col gap-2">
                 <div className="text-sm font-medium border-b pb-2">Service Breakdown</div>
                 <div className="flex items-center justify-center flex-1 py-4">
                   <div className="w-20 h-20 rounded-full border-[12px] border-primary border-r-blue-400 border-t-pink-400 border-l-orange-400"></div>
                 </div>
               </div>
               <div className="bg-white dark:bg-zinc-950 p-4 border rounded-xl shadow-sm flex flex-col gap-2">
                 <div className="text-sm font-medium border-b pb-2">Staff Performance</div>
                 <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between text-xs"><span>Priya</span><span className="font-bold">₹15,800</span></div>
                    <div className="flex justify-between text-xs"><span>Neha</span><span className="font-bold">₹8,420</span></div>
                 </div>
               </div>
            </div>
            
            {/* Right Text */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-4 font-medium">
                Powerful Dashboard
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Know your salon <br />
                at a glance.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a clear view of your revenue, appointments, staff performance and more — all in one place.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Revenue</span>
                  <span className="font-bold text-lg">₹84,520</span>
                  <span className="text-xs text-green-500">+12%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Appointments</span>
                  <span className="font-bold text-lg">38</span>
                  <span className="text-xs text-green-500">+8%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">New Customers</span>
                  <span className="font-bold text-lg">7</span>
                  <span className="text-xs text-green-500">+25%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Completed</span>
                  <span className="font-bold text-lg">31</span>
                  <span className="text-xs text-green-500">+110%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localization Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600 mb-4 font-medium">
                Built for Indian Salons
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Made for the way <br />
                Indian salons work.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From UPI payments to GST billing, SalonOS is designed for Indian salon owners and their unique needs.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                   <Smartphone className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm">UPI Payments</h4>
                   <p className="text-xs text-muted-foreground mt-1">Quick and secure</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                   <Receipt className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm">GST-ready Billing</h4>
                   <p className="text-xs text-muted-foreground mt-1">Compliant and easy</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                   <MessageCircle className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm">WhatsApp Notifications</h4>
                   <p className="text-xs text-muted-foreground mt-1">Keep customers informed</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                   <IndianRupee className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm">Indian ₹ Pricing</h4>
                   <p className="text-xs text-muted-foreground mt-1">Simple and transparent</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                   <Users className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm">Staff Commissions</h4>
                   <p className="text-xs text-muted-foreground mt-1">Motivate your team</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-lg bg-purple-50 text-primary flex items-center justify-center shrink-0">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-sm">Multi-tenant</h4>
                   <p className="text-xs text-muted-foreground mt-1">For growing salon chains</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 font-medium">
              Simple Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple pricing. No surprises.
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose a plan that fits your salon&apos;s size and goals.
            </p>
            
            <div className="inline-flex items-center rounded-full border bg-background p-1 mt-8">
              <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">Monthly</button>
              <button className="px-6 py-2 rounded-full text-muted-foreground hover:text-foreground text-sm font-medium">Yearly <span className="text-xs text-green-500 ml-1">Save 20%</span></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Starter */}
             <div className="bg-background rounded-2xl border p-8 shadow-sm flex flex-col">
               <h3 className="font-bold text-xl mb-2">Starter</h3>
               <div className="flex items-end gap-1 mb-2">
                 <span className="text-4xl font-bold">₹999</span>
                 <span className="text-muted-foreground mb-1">/month</span>
               </div>
               <p className="text-sm text-muted-foreground mb-6">For small salons with up to 3 staff</p>
               <ul className="space-y-3 mb-8 flex-1">
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Appointments</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Customers</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Billing & Payments</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> 3 Staff Members</li>
               </ul>
               <Button variant="outline" className="w-full">Get Started</Button>
             </div>

             {/* Growth */}
             <div className="bg-background rounded-2xl border-2 border-primary p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                 Most Popular
               </div>
               <h3 className="font-bold text-xl mb-2 text-primary">Growth</h3>
               <div className="flex items-end gap-1 mb-2">
                 <span className="text-4xl font-bold">₹1,999</span>
                 <span className="text-muted-foreground mb-1">/month</span>
               </div>
               <p className="text-sm text-muted-foreground mb-6">For growing salons with up to 10 staff</p>
               <ul className="space-y-3 mb-8 flex-1">
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Everything in Starter</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> WhatsApp Notifications</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Advanced Reports</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> 10 Staff Members</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Inventory Management</li>
               </ul>
               <Button className="w-full">Get Started</Button>
             </div>

             {/* Pro */}
             <div className="bg-background rounded-2xl border p-8 shadow-sm flex flex-col">
               <h3 className="font-bold text-xl mb-2">Pro</h3>
               <div className="flex items-end gap-1 mb-2">
                 <span className="text-4xl font-bold">₹3,999</span>
                 <span className="text-muted-foreground mb-1">/month</span>
               </div>
               <p className="text-sm text-muted-foreground mb-6">For established salons & chains</p>
               <ul className="space-y-3 mb-8 flex-1">
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Everything in Growth</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Multi-location Support</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Dedicated Support</li>
                 <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500" /> Unlimited Staff Members</li>
               </ul>
               <Button variant="outline" className="w-full">Get Started</Button>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-12">
             <div className="lg:w-1/3">
               <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-4 font-medium">
                 Trusted By Salon Owners
               </div>
               <h2 className="text-3xl font-bold tracking-tight mb-4">Built for ambitious<br />salon owners.</h2>
               <p className="text-muted-foreground">Join a growing community of salon owners who are growing their business with SalonOS.</p>
             </div>
             <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-6 rounded-2xl border">
                  <p className="text-sm mb-6 text-foreground italic">&quot;SalonOS saved us hours every week managing appointments and payments. The dashboard is super easy to use!&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"><Image src="https://ui-avatars.com/api/?name=Priya+Sharma&background=random" width={40} height={40} alt="Avatar" /></div>
                    <div>
                      <div className="font-bold text-sm">Priya Sharma</div>
                      <div className="text-xs text-muted-foreground">Owner, Glow Beauty Salon</div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 p-6 rounded-2xl border md:translate-y-8">
                  <p className="text-sm mb-6 text-foreground italic">&quot;The WhatsApp reminders and customer management features have helped us bring back so many regular clients.&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"><Image src="https://ui-avatars.com/api/?name=Rahul+Mehta&background=random" width={40} height={40} alt="Avatar" /></div>
                    <div>
                      <div className="font-bold text-sm">Rahul Mehta</div>
                      <div className="text-xs text-muted-foreground">Owner, Looks Salon</div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-white dark:bg-black pb-24">
         <div className="container mx-auto px-4">
            <div className="bg-zinc-950 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Your salon deserves better software.</h2>
                <p className="text-zinc-400">Start managing your salon smarter today.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90">Start Free <span className="ml-2">→</span></Button>
                <Button variant="outline" className="rounded-full text-zinc-950">Book a Demo</Button>
              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-white dark:bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="font-bold tracking-tight text-sm">SalonOS</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Home</a>
            <a href="#" className="hover:text-foreground">Features</a>
            <a href="#" className="hover:text-foreground">Pricing</a>
            <a href="#" className="hover:text-foreground">Solutions</a>
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2026 SalonOS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
