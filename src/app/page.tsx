"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, CheckCircle2, LayoutDashboard, Calendar, Users, 
  Settings, MessageCircle, FileText, Receipt, BarChart, Bell, 
  Menu, X, Smartphone, IndianRupee, ShieldCheck, PlayCircle, Star,
  Grid, Clock, UserCircle, CalendarOff, Shield, Scissors, CreditCard,
  Package, MapPin, Search, Moon, SlidersHorizontal, TrendingUp, Home as HomeIcon, MoreHorizontal
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-0 overflow-hidden bg-white dark:bg-black min-h-[80vh] flex items-center">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <StaggerContainer className="flex-1 text-center lg:text-left z-10 max-w-3xl lg:max-w-xl mx-auto">
              <StaggerItem className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Modern Salon Management Platform
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                  Run your salon. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b3af7] to-[#3b82f6]">Grow your business.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  SalonNO brings appointments, customers, staff, billing, payments and business insights into one simple platform.
                </p>
              </StaggerItem>
              
              <StaggerItem className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full sm:w-auto rounded-full text-base font-semibold h-12 px-8 bg-[#5b3af7] hover:bg-[#4b2ce0] text-white shadow-md">
                  Start Free <span className="ml-2">→</span>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base font-semibold h-12 px-8 border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 text-zinc-900 dark:text-white">
                  Book a Demo
                </Button>
              </StaggerItem>

              <StaggerItem className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No Setup Fee</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Cancel Anytime</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 24/7 Support</span>
              </StaggerItem>
            </StaggerContainer>

            {/* Right Dashboard Mockup */}
            <FadeIn delay={0.2} direction="up" className="flex-1 w-full lg:w-auto relative z-10">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] max-w-4xl mx-auto lg:ml-auto">
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
                
                {/* Mockup Container */}
                <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden flex text-[6px]">
                  {/* Sidebar */}
                  <div className="w-[100px] bg-white dark:bg-zinc-950 border-r flex flex-col pt-3 shrink-0">
                     {/* Logo */}
                     <div className="flex items-center gap-1.5 px-3 mb-4">
                        <div className="relative flex items-center justify-center">
                           <Scissors className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        </div>
                        <div className="leading-none text-[7px] text-zinc-900 font-bold">SalonNO<br/><span className="text-[5px] text-zinc-500 font-normal">Management Suite</span></div>
                     </div>
                     {/* Menu */}
                     <div className="flex-1 overflow-hidden px-2 space-y-0.5 font-medium text-zinc-600">
                        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#f0ecfc] text-[#5b3af7] rounded font-bold"><Grid className="w-3 h-3" /> Dashboard</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><Calendar className="w-3 h-3" /> Calendar</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><Clock className="w-3 h-3" /> Appointments</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><Users className="w-3 h-3" /> Customers</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><UserCircle className="w-3 h-3" /> Staff</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><CheckCircle2 className="w-3 h-3" /> Attendance</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><CalendarOff className="w-3 h-3" /> Leave</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><Shield className="w-3 h-3" /> Roles</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><Scissors className="w-3 h-3" /> Services</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><CreditCard className="w-3 h-3" /> POS</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><FileText className="w-3 h-3" /> Invoices</div>
                        <div className="flex items-center gap-1.5 px-2 py-1.5"><Package className="w-3 h-3" /> Inventory</div>
                     </div>
                     <div className="p-2 border-t mt-auto">
                        <div className="flex items-center gap-1.5 bg-zinc-100 p-1.5 rounded-lg">
                           <div className="w-5 h-5 bg-[#c8b2ff] text-[#5b3af7] rounded-full flex items-center justify-center text-[7px] font-bold shrink-0">OW</div>
                           <div className="leading-none text-[6px] text-zinc-900 font-bold">owner<br/><span className="text-[4px] text-zinc-500 font-normal">OWNER</span></div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Main area */}
                  <div className="flex-1 flex flex-col overflow-hidden bg-[#f4f7f6]">
                    {/* Top Header */}
                    <div className="h-10 bg-white border-b flex items-center justify-between px-4 shrink-0">
                       <div className="flex items-center gap-2 text-zinc-600 font-medium">
                          <span className="text-zinc-900 font-bold text-[8px]">Beauty Lounge (Super Admin)</span>
                          <span className="text-zinc-300">|</span>
                          <span className="flex items-center gap-1 text-zinc-700 font-bold"><MapPin className="w-2.5 h-2.5 text-red-500" /> Rajapark Outlet ▾</span>
                       </div>
                       <div className="flex-1 max-w-sm px-4">
                          <div className="bg-zinc-50 border rounded-full px-2 py-1 flex items-center gap-1.5 text-zinc-400">
                             <Search className="w-2.5 h-2.5" /> Search customers, appointments... <span className="ml-auto text-[5px]">⌘K</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="bg-[#5b3af7] text-white px-2 py-1 rounded-full font-bold shadow-sm">+ Add New Service</div>
                          <Moon className="w-3 h-3 text-zinc-600" />
                          <div className="relative">
                             <Bell className="w-3 h-3 text-zinc-600" />
                             <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full flex items-center justify-center text-white text-[5px] border border-white">6</div>
                          </div>
                          <div className="w-5 h-5 bg-[#c8b2ff] text-[#5b3af7] rounded-full flex items-center justify-center font-bold text-[7px] shrink-0 border border-purple-200">OW</div>
                       </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col gap-4 overflow-hidden">
                       {/* Greeting */}
                       <div className="flex justify-between items-end shrink-0">
                          <div>
                            <h2 className="text-[14px] font-bold text-zinc-900 leading-tight">Good Morning, Rahul 👋</h2>
                            <p className="text-zinc-500 mt-0.5 text-[7px]">Monday, 27 July 2025 • Today looks busy. You have <span className="font-bold text-zinc-900">24 appointments</span>.</p>
                          </div>
                          <div className="flex items-center gap-1 border bg-white px-2 py-1.5 rounded-md text-zinc-700 font-bold text-[7px] shadow-sm">
                             <SlidersHorizontal className="w-2.5 h-2.5" /> Customize Dashboard
                          </div>
                       </div>
                       
                       {/* 4 Cards */}
                       <div className="grid grid-cols-4 gap-3 shrink-0">
                          <div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm flex flex-col relative overflow-hidden">
                             <div className="w-6 h-6 bg-[#f0ecfc] text-[#5b3af7] rounded-lg flex items-center justify-center text-[10px] font-bold mb-3">$</div>
                             <div className="text-zinc-500 font-medium mb-1">Today&apos;s Revenue</div>
                             <div className="text-[16px] font-bold text-zinc-900 leading-none">₹3,420</div>
                             <div className="text-[6px] font-bold text-zinc-500 flex items-center gap-0.5 mt-1.5"><TrendingUp className="w-2 h-2 text-zinc-900" /> <span className="text-zinc-900">12.5%</span> vs yesterday</div>
                             <svg className="absolute right-3 bottom-8 w-16 h-8 text-[#5b3af7]" viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0,40 L20,35 L40,45 L60,20 L80,30 L100,10" fill="none" stroke="currentColor" strokeWidth="2.5"/></svg>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm flex flex-col relative overflow-hidden">
                             <div className="w-6 h-6 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-3"><Calendar className="w-3.5 h-3.5" /></div>
                             <div className="text-zinc-500 font-medium mb-1">Appointments</div>
                             <div className="text-[16px] font-bold text-zinc-900 leading-none">24</div>
                             <div className="text-[6px] font-bold text-zinc-500 flex items-center gap-0.5 mt-1.5"><TrendingUp className="w-2 h-2 text-zinc-900" /> <span className="text-zinc-900">8.3%</span> vs yesterday</div>
                             <svg className="absolute right-3 bottom-8 w-16 h-8 text-blue-500" viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0,35 L20,30 L40,35 L60,15 L80,20 L100,5" fill="none" stroke="currentColor" strokeWidth="2.5"/></svg>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm flex flex-col relative overflow-hidden">
                             <div className="w-6 h-6 bg-green-50 text-green-500 rounded-lg flex items-center justify-center mb-3"><Users className="w-3.5 h-3.5" /></div>
                             <div className="text-zinc-500 font-medium mb-1">Staff Working</div>
                             <div className="text-[16px] font-bold text-zinc-900 leading-none flex items-center gap-2">12 / 15</div>
                             <div className="mt-1.5"><span className="inline-flex text-[5px] bg-green-50 text-green-600 font-bold px-1.5 py-0.5 rounded-sm">80% Active</span></div>
                             <div className="absolute right-3 top-4 flex -space-x-1.5">
                                <div className="w-5 h-5 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm"><Image src="https://ui-avatars.com/api/?name=A&background=random" width={20} height={20} alt="" unoptimized /></div>
                                <div className="w-5 h-5 rounded-full border-2 border-white bg-zinc-300 overflow-hidden shadow-sm"><Image src="https://ui-avatars.com/api/?name=B&background=random" width={20} height={20} alt="" unoptimized /></div>
                                <div className="w-5 h-5 rounded-full border-2 border-white bg-orange-100 text-orange-500 overflow-hidden flex items-center justify-center text-[5px] font-bold shadow-sm">+3</div>
                             </div>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm flex flex-col relative overflow-hidden">
                             <div className="w-6 h-6 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-3"><UserCircle className="w-3.5 h-3.5" /></div>
                             <div className="text-zinc-500 font-medium mb-1">New Customers</div>
                             <div className="text-[16px] font-bold text-zinc-900 leading-none">18</div>
                             <div className="text-[6px] font-bold text-zinc-500 flex items-center gap-0.5 mt-1.5"><TrendingUp className="w-2 h-2 text-zinc-900" /> <span className="text-zinc-900">20%</span> vs yesterday</div>
                             <svg className="absolute right-3 bottom-8 w-16 h-8 text-orange-500" viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0,45 L20,40 L40,25 L60,30 L80,15 L100,5" fill="none" stroke="currentColor" strokeWidth="2.5"/></svg>
                          </div>
                       </div>
                       
                       {/* Bottom row */}
                       <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
                          <div className="col-span-2 bg-white rounded-xl border border-zinc-100 shadow-sm p-4 flex flex-col overflow-hidden">
                             <div className="flex justify-between items-center mb-3 shrink-0">
                                <div className="flex items-center gap-1.5 font-bold text-[9px] text-zinc-900"><Calendar className="w-3.5 h-3.5 text-[#5b3af7]" /> Today&apos;s Schedule</div>
                                <div className="flex items-center gap-2">
                                   <div className="flex items-center border rounded-md px-1 text-zinc-500 font-bold"><span className="px-1.5 cursor-pointer">&lt;</span><span className="px-2 border-l border-r border-zinc-200 font-bold text-zinc-900">Today</span><span className="px-1.5 cursor-pointer">&gt;</span></div>
                                   <div className="border rounded-md px-2 py-0.5 text-zinc-700 font-bold">Day View ▾</div>
                                </div>
                             </div>
                             <div className="flex-1 flex flex-col gap-2 overflow-hidden pb-1">
                                <div className="flex items-center gap-2 p-2 border border-zinc-100 rounded-lg relative overflow-hidden shadow-sm shrink-0 hover:bg-zinc-50">
                                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                   <span className="w-12 text-zinc-500 font-bold pl-1 text-[7px]">09:00 AM</span>
                                   <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=J+D&background=random" width={24} height={24} alt="" unoptimized /></div>
                                   <div className="w-24"><div className="font-bold text-zinc-900 text-[8px]">John Doe</div><div className="text-[6px] text-zinc-400 mt-0.5">+91 98765 43210</div></div>
                                   <div className="w-24"><div className="font-bold text-zinc-900 text-[8px]">Haircut</div><div className="text-[6px] text-zinc-400 mt-0.5">30 min • ₹250</div></div>
                                   <div className="w-16 font-bold text-zinc-900 text-[8px]">Alex</div>
                                   <div className="w-16"><span className="bg-green-50 text-green-600 text-[6px] font-bold px-2 py-0.5 rounded-full inline-block">Confirmed</span></div>
                                   <div className="ml-auto text-zinc-300 px-1 font-bold">⋮</div>
                                </div>
                                <div className="flex items-center gap-2 p-2 border border-zinc-100 rounded-lg relative overflow-hidden shadow-sm shrink-0 hover:bg-zinc-50">
                                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                   <span className="w-12 text-zinc-500 font-bold pl-1 text-[7px]">10:00 AM</span>
                                   <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=E+W&background=random" width={24} height={24} alt="" unoptimized /></div>
                                   <div className="w-24"><div className="font-bold text-zinc-900 text-[8px]">Emma Watson</div><div className="text-[6px] text-zinc-400 mt-0.5">+91 81234 56788</div></div>
                                   <div className="w-24"><div className="font-bold text-zinc-900 text-[8px]">Hair Color</div><div className="text-[6px] text-zinc-400 mt-0.5">60 min • ₹850</div></div>
                                   <div className="w-16 font-bold text-zinc-900 text-[8px]">Sophia</div>
                                   <div className="w-16"><span className="bg-blue-50 text-blue-600 text-[6px] font-bold px-2 py-0.5 rounded-full inline-block">Checked In</span></div>
                                   <div className="ml-auto text-zinc-300 px-1 font-bold">⋮</div>
                                </div>
                                <div className="flex items-center gap-2 p-2 border border-zinc-100 rounded-lg relative overflow-hidden shadow-sm shrink-0 hover:bg-zinc-50">
                                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                                   <span className="w-12 text-zinc-500 font-bold pl-1 text-[7px]">11:30 AM</span>
                                   <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=D+S&background=random" width={24} height={24} alt="" unoptimized /></div>
                                   <div className="w-24"><div className="font-bold text-zinc-900 text-[8px]">David Smith</div><div className="text-[6px] text-zinc-400 mt-0.5">+91 99887 76655</div></div>
                                   <div className="w-24"><div className="font-bold text-zinc-900 text-[8px]">Beard Trim</div><div className="text-[6px] text-zinc-400 mt-0.5">30 min • ₹200</div></div>
                                   <div className="w-16 font-bold text-zinc-900 text-[8px]">Ryan</div>
                                   <div className="w-16"><span className="bg-[#f0ecfc] text-[#5b3af7] text-[6px] font-bold px-2 py-0.5 rounded-full inline-block">In Progress</span></div>
                                   <div className="ml-auto text-zinc-300 px-1 font-bold">⋮</div>
                                </div>
                             </div>
                          </div>
                          
                          <div className="bg-white rounded-xl border border-zinc-100 shadow-sm p-4 flex flex-col overflow-hidden">
                             <div className="flex justify-between items-center mb-3 shrink-0">
                                <div className="font-bold text-[9px] text-zinc-900">Staff Availability</div>
                                <div className="text-[#5b3af7] font-bold text-[7px]">View All</div>
                             </div>
                             <div className="flex justify-between text-[5px] text-zinc-400 mb-3 px-8 pl-16 border-b pb-1 font-bold">
                                <span>9 AM</span><span>1 PM</span><span>5 PM</span><span>9 PM</span>
                             </div>
                             <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                                <div className="flex items-center gap-2">
                                   <div className="w-5 h-5 rounded-full bg-zinc-200 shrink-0 overflow-hidden"><Image src="https://ui-avatars.com/api/?name=A+J&background=random" width={20} height={20} alt="" unoptimized /></div>
                                   <div className="w-12"><div className="font-bold text-[7px] text-zinc-900 truncate">Alex Johnson</div><div className="text-[5px] text-zinc-400 truncate mt-0.5">Senior Stylist</div></div>
                                   <div className="flex-1 h-1.5 bg-red-500 rounded-full"></div>
                                   <div className="text-[5px] bg-red-50 text-red-600 font-bold px-1.5 py-0.5 rounded-sm">Busy</div>
                                </div>
                                <div className="flex items-center gap-2">
                                   <div className="w-5 h-5 rounded-full bg-zinc-200 shrink-0 overflow-hidden"><Image src="https://ui-avatars.com/api/?name=S+M&background=random" width={20} height={20} alt="" unoptimized /></div>
                                   <div className="w-12"><div className="font-bold text-[7px] text-zinc-900 truncate">Sophia Martinez</div><div className="text-[5px] text-zinc-400 truncate mt-0.5">Color Specialist</div></div>
                                   <div className="flex-1 h-1.5 bg-green-500 rounded-full w-3/4"></div>
                                   <div className="text-[5px] bg-green-50 text-green-600 font-bold px-1.5 py-0.5 rounded-sm">Available</div>
                                </div>
                                <div className="flex items-center gap-2">
                                   <div className="w-5 h-5 rounded-full bg-zinc-200 shrink-0 overflow-hidden"><Image src="https://ui-avatars.com/api/?name=R+C&background=random" width={20} height={20} alt="" unoptimized /></div>
                                   <div className="w-12"><div className="font-bold text-[7px] text-zinc-900 truncate">Ryan Cooper</div><div className="text-[5px] text-zinc-400 truncate mt-0.5">Beard Expert</div></div>
                                   <div className="flex-1 h-1.5 bg-red-500 rounded-full w-1/2"></div>
                                   <div className="text-[5px] bg-red-50 text-red-600 font-bold px-1.5 py-0.5 rounded-sm">Busy</div>
                                </div>
                                <div className="flex items-center gap-2">
                                   <div className="w-5 h-5 rounded-full bg-zinc-200 shrink-0 overflow-hidden"><Image src="https://ui-avatars.com/api/?name=O+R&background=random" width={20} height={20} alt="" unoptimized /></div>
                                   <div className="w-12"><div className="font-bold text-[7px] text-zinc-900 truncate">Olivia Rhye</div><div className="text-[5px] text-zinc-400 truncate mt-0.5">Spa Therapist</div></div>
                                   <div className="flex-1 h-1.5 bg-green-500 rounded-full w-5/6"></div>
                                   <div className="text-[5px] bg-green-50 text-green-600 font-bold px-1.5 py-0.5 rounded-sm">Available</div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-24 bg-[#f8f9fc] dark:bg-black min-h-[40vh] flex items-center">
        <div className="w-[90%] lg:w-[80%] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Header */}
            <FadeIn className="lg:w-[40%] flex flex-col items-start text-left shrink-0">
              <div className="inline-flex items-center rounded-full bg-[#f0ecfc] px-3 py-1 text-sm text-[#5b3af7] mb-4 font-bold">
                The Problem
              </div>
              <h2 className="text-[32px] md:text-[38px] font-extrabold tracking-tight mb-5 text-[#0f0f11] dark:text-white leading-[1.1]">
                Your salon is busy.<br />
                Your software shouldn&apos;t be.
              </h2>
              <p className="text-[#71717a] text-[15px] leading-[1.7]">
                Stop juggling WhatsApp messages, manual billing and spreadsheets. SalonNO helps you stay organized, save time and focus on what matters — your customers.
              </p>
            </FadeIn>
            
            {/* Right Cards */}
            <StaggerContainer className="lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-5">
              <StaggerItem className="bg-white dark:bg-zinc-950 rounded-[20px] p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-10 h-10 rounded-[10px] bg-[#e6fcf1] dark:bg-[#e6fcf1]/10 flex items-center justify-center mb-5">
                  {/* Fake WhatsApp Icon */}
                  <svg className="w-5 h-5 text-[#00d26a]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="font-extrabold text-[15px] mb-2 text-[#0f0f11] dark:text-white leading-[1.3]">Too many<br />WhatsApp messages</h3>
                <p className="text-[#71717a] text-[13px] leading-[1.6]">Manage appointments and customer communication in one place.</p>
              </StaggerItem>
              
              <StaggerItem className="bg-white dark:bg-zinc-950 rounded-[20px] p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-10 h-10 rounded-[10px] bg-[#f0ecfc] dark:bg-[#f0ecfc]/10 flex items-center justify-center mb-5">
                  <Receipt className="w-5 h-5 text-[#5b3af7]" strokeWidth={2.5} />
                </div>
                <h3 className="font-extrabold text-[15px] mb-2 text-[#0f0f11] dark:text-white leading-[1.3]">Manual billing</h3>
                <p className="text-[#71717a] text-[13px] leading-[1.6]">Create professional invoices, accept payments instantly, and track outstanding balances.</p>
              </StaggerItem>
              
              <StaggerItem className="bg-white dark:bg-zinc-950 rounded-[20px] p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-10 h-10 rounded-[10px] bg-[#f0ecfc] dark:bg-[#f0ecfc]/10 flex items-center justify-center mb-5">
                  <BarChart className="w-5 h-5 text-[#5b3af7]" strokeWidth={2.5} />
                </div>
                <h3 className="font-extrabold text-[15px] mb-2 text-[#0f0f11] dark:text-white leading-[1.3]">No idea how your<br />salon is performing</h3>
                <p className="text-[#71717a] text-[13px] leading-[1.6]">See revenue, staff performance and customer trends from one dashboard.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
        <div className="w-[90%] lg:w-[80%] mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            
            {/* Left Features */}
            <FadeIn className="w-full lg:w-[45%] shrink-0">
              <div className="inline-flex items-center rounded-full bg-[#f0ecfc] px-3 py-1 text-sm text-[#5b3af7] mb-6 font-bold">
                Everything in One Place
              </div>
              <h2 className="text-[32px] md:text-[38px] font-extrabold tracking-tight mb-4 text-[#0f0f11] dark:text-white leading-[1.1]">
                Everything your salon needs. <span className="text-[#5b3af7]">One place.</span>
              </h2>
              <p className="text-[#71717a] text-[15px] mb-12 leading-[1.7]">
                From booking to billing, SalonNO helps you run your salon smoothly and efficiently.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Appointments</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Online and staff-managed bookings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Customers</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Customer profiles, history and preferences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <UserCircle className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Staff</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Schedules, attendance, performance & commissions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <Scissors className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Services</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Manage your services, packages and pricing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Invoices</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Create and track invoices in seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Payments</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">UPI, cards, and more. Get paid faster.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <BarChart className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Reports</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Understand your business with real-time insights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0ecfc] text-[#5b3af7] flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1.5 text-[14px] text-zinc-900 dark:text-white leading-tight">Reminders</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">Bring customers back with automated messages.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Right Graphic Mockups */}
            <FadeIn className="w-full lg:w-[55%] shrink-0 relative mt-12 lg:mt-0 min-h-[500px]">
               {/* Background Blobs */}
               <div className="absolute top-10 right-0 w-48 h-48 bg-[#f0ecfc] rounded-full blur-[40px] -z-10 mix-blend-multiply"></div>
               <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#f0ecfc] rounded-full blur-[40px] -z-10 mix-blend-multiply"></div>
               <svg className="absolute -top-10 -right-20 w-48 h-48 text-[#f0ecfc] -z-10 rotate-45" viewBox="0 0 200 200" fill="currentColor">
                 <path d="M45.7,-76.3C58.9,-69.3,69,-56.3,77.7,-42.6C86.4,-28.8,93.6,-14.4,92.5,-0.6C91.4,13.2,82,26.4,72.9,38.9C63.8,51.4,55,63.1,43.2,71C31.3,78.9,15.6,83,1,81.3C-13.6,79.7,-27.2,72.4,-38.7,63.7C-50.2,55.1,-59.6,45.2,-68.2,33.5C-76.7,21.8,-84.4,8.3,-84.8,-5.4C-85.1,-19.1,-78.2,-33.1,-68.5,-44.6C-58.8,-56.1,-46.3,-65.2,-33,-72.1C-19.6,-79,-6.2,-83.8,4.7,-81.4C15.6,-79.1,32.6,-83.3,45.7,-76.3Z" transform="translate(100 100)" />
               </svg>
               <svg className="absolute top-1/2 -left-16 w-40 h-40 text-[#f0ecfc] -z-10" viewBox="0 0 200 200" fill="currentColor">
                 <path d="M45.7,-76.3C58.9,-69.3,69,-56.3,77.7,-42.6C86.4,-28.8,93.6,-14.4,92.5,-0.6C91.4,13.2,82,26.4,72.9,38.9C63.8,51.4,55,63.1,43.2,71C31.3,78.9,15.6,83,1,81.3C-13.6,79.7,-27.2,72.4,-38.7,63.7C-50.2,55.1,-59.6,45.2,-68.2,33.5C-76.7,21.8,-84.4,8.3,-84.8,-5.4C-85.1,-19.1,-78.2,-33.1,-68.5,-44.6C-58.8,-56.1,-46.3,-65.2,-33,-72.1C-19.6,-79,-6.2,-83.8,4.7,-81.4C15.6,-79.1,32.6,-83.3,45.7,-76.3Z" transform="translate(100 100)" />
               </svg>

               {/* Desktop Mockup */}
               <div className="absolute top-0 right-16 bottom-16 left-0 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex overflow-hidden text-[9px]">
                  {/* Sidebar */}
                  <div className="w-32 bg-[#fafafa] border-r flex flex-col py-4 gap-1 px-2 shrink-0">
                     <div className="flex items-center gap-1.5 px-2 mb-6">
                        <div className="relative flex items-center justify-center">
                           <Scissors className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        </div>
                        <span className="font-extrabold text-[11px] text-zinc-900 tracking-tight">SalonNO</span>
                     </div>
                     <div className="flex items-center gap-2 px-2 py-1.5 bg-[#f0ecfc] text-[#5b3af7] rounded-md font-bold"><LayoutDashboard className="w-3 h-3"/> Dashboard</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><Calendar className="w-3 h-3"/> Appointments</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><Users className="w-3 h-3"/> Customers</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><UserCircle className="w-3 h-3"/> Staff</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><Scissors className="w-3 h-3"/> Services</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><FileText className="w-3 h-3"/> Invoices</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><CreditCard className="w-3 h-3"/> Payments</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium"><BarChart className="w-3 h-3"/> Reports</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md font-medium mt-auto"><Settings className="w-3 h-3"/> Settings</div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-6 flex flex-col bg-white">
                     <div className="flex justify-between items-center mb-6">
                        <h3 className="font-extrabold text-[16px] text-zinc-900">Appointments</h3>
                        <div className="bg-[#5b3af7] text-white px-3 py-1.5 rounded-md font-bold shadow-sm">+ New Appointment</div>
                     </div>
                     <div className="flex gap-6 border-b text-zinc-500 font-bold mb-4">
                        <span className="text-[#5b3af7] border-b-2 border-[#5b3af7] pb-2">Upcoming</span>
                        <span className="pb-2 cursor-pointer hover:text-zinc-800">Today</span>
                        <span className="pb-2 cursor-pointer hover:text-zinc-800">Completed</span>
                     </div>
                     
                     <div className="flex-1 flex flex-col">
                        {[
                          {time: '10:00', name: 'Rahul', service: 'Haircut', s1: 'Confirmed', s2: 'Confirmed', bg: 'bg-green-50 text-green-600', img: 'A'},
                          {time: '11:30', name: 'Priya', service: 'Hair Color', s1: 'Confirmed', s2: 'Confirmed', bg: 'bg-green-50 text-green-600', img: 'P'},
                          {time: '12:30', name: 'Neha', service: 'Facial', s1: 'Pending', s2: 'Pending', bg: 'bg-orange-50 text-orange-600', img: 'N'},
                          {time: '02:00', name: 'Ankit', service: 'Beard Trim', s1: 'Confirmed', s2: 'Confirmed', bg: 'bg-green-50 text-green-600', img: 'A'},
                          {time: '03:30', name: 'Simran', service: 'Manicure', s1: 'Confirmed', s2: 'Confirmed', bg: 'bg-green-50 text-green-600', img: 'S'},
                        ].map((row, i) => (
                           <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0 text-zinc-600">
                              <span className="w-12 font-medium">{row.time}</span>
                              <div className="flex items-center gap-2 w-32">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 overflow-hidden shrink-0">
                                   <Image src={`https://ui-avatars.com/api/?name=${row.img}&background=random`} width={20} height={20} alt="" unoptimized />
                                </div>
                                <span className="font-extrabold text-zinc-900 text-[10px]">{row.name}</span>
                              </div>
                              <span className="flex-1">{row.service}</span>
                              <div className="flex gap-4 w-32 justify-end">
                                <span className={`px-2 py-0.5 rounded-full font-bold text-[7px] ${row.bg}`}>{row.s1}</span>
                                <span className={`px-2 py-0.5 rounded-full font-bold text-[7px] ${row.bg}`}>{row.s2}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               
               {/* Mobile Mockup */}
               <div className="absolute -right-4 top-8 bottom-0 w-[45%] max-w-[280px] bg-white rounded-[32px] border-[6px] border-zinc-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] p-4 flex flex-col z-20">
                  <div className="w-32 h-5 bg-zinc-900 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center gap-1">
                     <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
                     <div className="w-8 h-1 bg-zinc-600 rounded-full"></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-5 mb-6">
                     <div className="flex items-center gap-1.5">
                        <div className="relative flex items-center justify-center">
                           <Scissors className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        </div>
                        <span className="font-extrabold text-[12px] text-zinc-900 tracking-tight">SalonNO</span>
                     </div>
                     <Menu className="w-4 h-4 text-zinc-800" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-6">
                     <div>
                       <h2 className="text-[18px] font-extrabold leading-tight text-zinc-900">Good Morning,<br/>Priya 👋</h2>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden shrink-0 border border-zinc-200 shadow-sm">
                        <Image src={`https://ui-avatars.com/api/?name=P&background=random`} width={32} height={32} alt="" unoptimized />
                     </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm border border-zinc-100 flex-1 flex flex-col overflow-hidden">
                     <div className="px-3 py-2 border-b bg-zinc-50/50">
                        <h4 className="font-extrabold text-[11px] text-zinc-900">Today&apos;s Appointments</h4>
                     </div>
                     <div className="flex-1 overflow-hidden flex flex-col p-2 gap-2">
                        {[
                          {time: '10:00', name: 'Rahul', service: 'Haircut'},
                          {time: '11:30', name: 'Priya', service: 'Hair Color'},
                          {time: '12:30', name: 'Neha', service: 'Facial'},
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center p-2.5 rounded-lg border border-zinc-100 bg-white shadow-sm text-[10px]">
                            <span className="font-medium text-zinc-500 w-8">{item.time}</span>
                            <span className="font-extrabold text-zinc-900 flex-1">{item.name}</span>
                            <span className="text-zinc-500">{item.service}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="h-14 mt-4 bg-white border-t -mx-4 -mb-4 rounded-b-[26px] flex justify-around items-center px-4 text-[9px] font-bold text-zinc-400">
                    <div className="flex flex-col items-center gap-1 text-[#5b3af7]">
                       <HomeIcon className="w-4 h-4" /> Home
                    </div>
                    <div className="flex flex-col items-center gap-1 hover:text-zinc-600 cursor-pointer">
                       <Calendar className="w-4 h-4" /> Appointments
                    </div>
                    <div className="flex flex-col items-center gap-1 hover:text-zinc-600 cursor-pointer">
                       <Users className="w-4 h-4" /> Customers
                    </div>
                    <div className="flex flex-col items-center gap-1 hover:text-zinc-600 cursor-pointer">
                       <MoreHorizontal className="w-4 h-4" /> More
                    </div>
                  </div>
               </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-12 bg-[#f8f9fc] dark:bg-black relative overflow-hidden">
        <div className="w-[90%] lg:w-[80%] mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Mockups */}
            <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0 w-full">
               {/* Top Left: Revenue */}
               <div className="bg-white dark:bg-zinc-950 p-5 border border-zinc-100 dark:border-zinc-800 rounded-[14px] shadow-sm flex flex-col">
                 <div className="text-[13px] font-extrabold text-[#0f0f11] mb-2">Revenue</div>
                 <div className="text-[28px] font-extrabold flex items-center gap-2 text-zinc-900 dark:text-white leading-none mb-4">
                    ₹84,520 <span className="text-[11px] text-[#00d26a] font-bold bg-[#e6fcf1] px-1.5 py-0.5 rounded-full">+12%</span>
                 </div>
                 <div className="h-24 w-full bg-gradient-to-t from-[#5b3af7]/10 to-transparent relative overflow-hidden mt-auto -mx-5 -mb-5 w-[calc(100%+40px)]">
                    <svg className="absolute bottom-0 w-full h-full text-[#5b3af7]" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0 100 L0 80 C 20 75, 30 85, 45 70 S 60 75, 75 55 S 90 60, 100 50 L100 100 Z" fill="currentColor" fillOpacity="0.1" />
                      <path d="M0 80 C 20 75, 30 85, 45 70 S 60 75, 75 55 S 90 60, 100 50" fill="transparent" stroke="currentColor" strokeWidth="2.5" />
                    </svg>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 text-[8px] text-zinc-400 font-medium">
                       <span>05</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span>
                    </div>
                 </div>
               </div>
               
               {/* Top Right: Service Breakdown */}
               <div className="bg-white dark:bg-zinc-950 p-5 border border-zinc-100 dark:border-zinc-800 rounded-[14px] shadow-sm flex flex-col">
                 <div className="text-[13px] font-extrabold text-[#0f0f11] mb-4">Service Breakdown</div>
                 <div className="flex items-center justify-between flex-1">
                   <div className="w-[84px] h-[84px] rounded-full border-[12px] border-zinc-50 relative shrink-0">
                      <svg className="absolute inset-[-12px] w-[84px] h-[84px] transform -rotate-90" viewBox="0 0 32 32">
                        <circle r="16" cx="16" cy="16" fill="none" stroke="#5b3af7" strokeWidth="10" strokeDasharray="40 100" />
                        <circle r="16" cx="16" cy="16" fill="none" stroke="#00d26a" strokeWidth="10" strokeDasharray="25 100" strokeDashoffset="-40" />
                        <circle r="16" cx="16" cy="16" fill="none" stroke="#f43f5e" strokeWidth="10" strokeDasharray="20 100" strokeDashoffset="-65" />
                        <circle r="16" cx="16" cy="16" fill="none" stroke="#c4b5fd" strokeWidth="10" strokeDasharray="15 100" strokeDashoffset="-85" />
                      </svg>
                   </div>
                   <div className="flex flex-col gap-2.5 text-[10px] font-extrabold text-[#71717a] flex-1 ml-6">
                     <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-[#5b3af7] rounded-full"></div>Hair</div><span className="text-[#0f0f11]">40%</span></div>
                     <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-[#00d26a] rounded-full"></div>Skin</div><span className="text-[#0f0f11]">25%</span></div>
                     <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-[#f43f5e] rounded-full"></div>Nails</div><span className="text-[#0f0f11]">20%</span></div>
                     <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-[#c4b5fd] rounded-full"></div>Others</div><span className="text-[#0f0f11]">15%</span></div>
                   </div>
                 </div>
               </div>
               
               {/* Bottom Left: Staff Performance Services */}
               <div className="bg-white dark:bg-zinc-950 p-5 border border-zinc-100 dark:border-zinc-800 rounded-[14px] shadow-sm flex flex-col">
                 <div className="text-[13px] font-extrabold text-[#0f0f11] mb-4">Staff Performance</div>
                 <div className="flex flex-col gap-3 flex-1 justify-center">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-50">
                      <div className="flex items-center gap-2">
                         <div className="w-[22px] h-[22px] rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=S&background=random" width={22} height={22} alt="" unoptimized /></div>
                         <div className="text-[11px] font-extrabold text-[#0f0f11]">Schäferulas</div>
                      </div>
                      <div className="text-[10px] text-[#71717a] font-medium">Beard Trim</div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                         <div className="w-[22px] h-[22px] rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=B&background=random" width={22} height={22} alt="" unoptimized /></div>
                         <div className="text-[11px] font-extrabold text-[#0f0f11]">Boyama</div>
                      </div>
                      <div className="text-[10px] text-[#71717a] font-medium">Manicure</div>
                    </div>
                 </div>
               </div>
               
               {/* Bottom Right: Staff Performance Revenue */}
               <div className="bg-white dark:bg-zinc-950 p-5 border border-zinc-100 dark:border-zinc-800 rounded-[14px] shadow-sm flex flex-col">
                 <div className="text-[13px] font-extrabold text-[#0f0f11] mb-4">Staff Performance</div>
                 <div className="flex flex-col gap-3 flex-1 justify-center">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-50">
                      <div className="flex items-center gap-2">
                         <div className="w-[22px] h-[22px] rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=P&background=random" width={22} height={22} alt="" unoptimized /></div>
                         <div className="text-[11px] font-extrabold text-[#0f0f11]">Priya</div>
                      </div>
                      <div className="text-[11px] font-extrabold text-[#0f0f11]">₹6,800</div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                         <div className="w-[22px] h-[22px] rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=N&background=random" width={22} height={22} alt="" unoptimized /></div>
                         <div className="text-[11px] font-extrabold text-[#0f0f11]">Neha</div>
                      </div>
                      <div className="text-[11px] font-extrabold text-[#0f0f11]">₹5,430</div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Right Text */}
            <div className="lg:w-[45%] lg:pl-4">
              <div className="inline-flex items-center rounded-full bg-[#f0ecfc] px-3 py-1 text-[13px] text-[#5b3af7] mb-6 font-bold">
                Powerful Dashboard
              </div>
              <h2 className="text-[32px] md:text-[38px] font-extrabold tracking-tight mb-4 leading-[1.15] text-[#0f0f11] dark:text-white">
                Know your salon <br />
                at a glance.
              </h2>
              <p className="text-[#71717a] text-[15px] mb-8 leading-[1.7] max-w-sm">
                Get a clear view of your revenue, appointments, staff performance and more — all in one place.
              </p>
              
              <div className="grid grid-cols-2 xl:flex gap-2 w-full">
                <div className="bg-white rounded-[12px] p-3 border border-zinc-100 shadow-sm flex flex-col gap-1.5 flex-1 min-w-0">
                  <span className="text-[10px] font-medium text-[#71717a] truncate">Revenue</span>
                  <span className="font-extrabold text-[15px] text-[#0f0f11] leading-none truncate">₹84,520</span>
                  <span className="text-[9px] text-[#00d26a] font-bold">+ 12%</span>
                </div>
                <div className="bg-white rounded-[12px] p-3 border border-zinc-100 shadow-sm flex flex-col gap-1.5 flex-1 min-w-0">
                  <span className="text-[10px] font-medium text-[#71717a] truncate">Appointments</span>
                  <span className="font-extrabold text-[15px] text-[#0f0f11] leading-none truncate">38</span>
                  <span className="text-[9px] text-[#00d26a] font-bold">+ 8%</span>
                </div>
                <div className="bg-white rounded-[12px] p-3 border border-zinc-100 shadow-sm flex flex-col gap-1.5 flex-1 min-w-0">
                  <span className="text-[10px] font-medium text-[#71717a] truncate">New Customers</span>
                  <span className="font-extrabold text-[15px] text-[#0f0f11] leading-none truncate">7</span>
                  <span className="text-[9px] text-[#00d26a] font-bold">+ 25%</span>
                </div>
                <div className="bg-white rounded-[12px] p-3 border border-zinc-100 shadow-sm flex flex-col gap-1.5 flex-1 min-w-0">
                  <span className="text-[10px] font-medium text-[#71717a] truncate">Completed Services</span>
                  <span className="font-extrabold text-[15px] text-[#0f0f11] leading-none truncate">31</span>
                  <span className="text-[9px] text-[#00d26a] font-bold">+ 110%</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Localization Section */}
      <section className="py-24 bg-[#f8f9fc] dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,58,247,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            
            {/* Left Column */}
            <FadeIn className="w-full lg:w-[30%] shrink-0 text-center lg:text-left">
              <div className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-3 py-1 text-[11px] text-indigo-600 mb-6 font-bold">
                Built for Indian Salons
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight text-zinc-900 dark:text-white">
                Made for the way <br className="hidden lg:block" />
                Indian salons work.
              </h2>
              <p className="text-zinc-500 text-[13px] mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0">
                From UPI payments to GST billing, SalonOS is designed for Indian salon owners and their unique needs.
              </p>
            </FadeIn>
            
            {/* Right Column Grid */}
            <StaggerContainer className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                   <Smartphone className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">UPI Payments</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Quick and secure</p>
                 </div>
               </StaggerItem>
               
               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                   <Receipt className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">GST-ready Billing</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Compliant and easy</p>
                 </div>
               </StaggerItem>
               
               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-[#e6fcf1] text-[#00d26a] flex items-center justify-center shrink-0">
                   <MessageCircle className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">WhatsApp Notifications</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Keep customers informed</p>
                 </div>
               </StaggerItem>
               
               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                   <IndianRupee className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">Indian ₹ Pricing</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Simple and transparent</p>
                 </div>
               </StaggerItem>
               
               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                   <Users className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">Staff Commissions</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Motivate your team</p>
                 </div>
               </StaggerItem>

               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                   <Bell className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">Customer Reminders</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Bring them back</p>
                 </div>
               </StaggerItem>
               
               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                   <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">Multi-tenant Management</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">For growing salon chains</p>
                 </div>
               </StaggerItem>

               <StaggerItem className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                   <CreditCard className="w-5 h-5" strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-[13px] text-zinc-900 dark:text-white leading-tight">Razorpay Integration</h4>
                   <p className="text-[11px] text-zinc-500 mt-1">Cards, UPI and more</p>
                 </div>
               </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="w-[90%] lg:w-[80%] mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
              Simple pricing. No surprises.
            </h2>
            <p className="text-zinc-500 text-lg">
              Choose a plan that fits your salon&apos;s size and goals.
            </p>
            
            <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-1 mt-8 shadow-sm">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isYearly ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center ${isYearly ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
              >
                Yearly <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-1 uppercase ${isYearly ? 'bg-green-500/20 text-green-100' : 'bg-green-50 text-green-600'}`}>Save 20%</span>
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
               <Link href="https://app.salonno.com/register" className="w-full">
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
               <Link href="https://app.salonno.com/register" className="w-full mt-auto">
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
               <Link href="https://app.salonno.com/register" className="w-full">
                 <Button variant="outline" className="w-full h-12 rounded-full font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50">Get Started</Button>
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="w-[90%] lg:w-[80%] mx-auto px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/3">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-zinc-900 dark:text-white">Built for ambitious<br />salon owners.</h2>
               <p className="text-zinc-500 text-lg leading-relaxed">Join a growing community of salon owners who are growing their business with SalonNO.</p>
             </div>
             <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                  <div className="flex text-[#5b3af7] mb-6 gap-1">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p className="text-lg mb-8 text-zinc-900 dark:text-white font-medium leading-relaxed">&quot;SalonNO saved us hours every week managing appointments and payments. The dashboard is super easy to use!&quot;</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=Priya+Sharma&background=random" width={48} height={48} alt="Avatar" unoptimized={true} /></div>
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">Priya Sharma</div>
                      <div className="text-sm text-zinc-500">Owner, Glow Beauty Salon</div>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 md:translate-y-12">
                  <div className="flex text-[#5b3af7] mb-6 gap-1">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p className="text-lg mb-8 text-zinc-900 dark:text-white font-medium leading-relaxed">&quot;The WhatsApp reminders and customer management features have helped us bring back so many regular clients.&quot;</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden shrink-0"><Image src="https://ui-avatars.com/api/?name=Rahul+Mehta&background=random" width={48} height={48} alt="Avatar" unoptimized={true} /></div>
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">Rahul Mehta</div>
                      <div className="text-sm text-zinc-500">Owner, Looks Salon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white dark:bg-black">
         <div className="w-[90%] lg:w-[80%] mx-auto px-4 lg:px-8">
            <div className="bg-[#0f0f11] text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5b3af7]/30 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Your salon deserves <br/> better software.</h2>
                <p className="text-zinc-400 text-lg">Start managing your salon smarter today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10">
                <Button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto h-14 rounded-full px-8 bg-[#5b3af7] hover:bg-[#4b2ce0] text-white font-bold text-base shadow-lg">Start Free <span className="ml-2">→</span></Button>
                <Button variant="outline" className="w-full sm:w-auto h-14 rounded-full px-8 bg-transparent text-white border-zinc-700 hover:bg-white/10 hover:text-white font-bold text-base">Book a Demo</Button>
              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 py-12 bg-white dark:bg-black">
        <div className="w-[90%] lg:w-[80%] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <Scissors className="w-6 h-6 text-primary" strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-white">SalonNO</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2026 SalonNO. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-950 rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Get Started</h3>
            <p className="text-sm text-zinc-500 mb-6">Fill out the form below and our team will get in touch with you shortly.</p>
            
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-300 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@yoursalon.com"
                  className="w-full h-11 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5b3af7]/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-300 mb-1.5">Business Query</label>
                <textarea 
                  placeholder="Tell us about your salon and what you are looking for..."
                  className="w-full min-h-[100px] p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5b3af7]/50 resize-none"
                  required
                ></textarea>
              </div>
              <Button type="button" onClick={() => {
                alert("Thanks for your interest! We'll be in touch soon.");
                setIsModalOpen(false);
              }} className="w-full h-12 mt-2 rounded-xl bg-[#5b3af7] hover:bg-[#4b2ce0] text-white font-bold text-base shadow-md">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
