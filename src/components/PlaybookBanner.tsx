"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function PlaybookBanner() {
  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-900 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#5b3af7]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-16 relative z-10 shadow-2xl backdrop-blur-sm">
        
        {/* Left Side: Content */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest mb-6 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Download className="w-4 h-4 mr-2" /> Free Download
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
            The 2026 Salon <br className="hidden md:block"/> Growth Playbook
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg">
            A comprehensive 30-page PDF guide on optimizing your pricing, managing staff retention, and leveraging digital tools to double your revenue this year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full px-8 py-5 flex-1 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-inner"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white font-bold rounded-full px-8 py-5 shadow-[0_0_40px_-10px_rgba(91,58,247,0.8)] hover:bg-[#4b2ce0] transition-colors shrink-0"
            >
              Get the Guide
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: 3D Book Animation */}
        <motion.div 
          className="w-full md:w-[40%] perspective-[1000px] flex justify-center items-center relative"
          initial={{ opacity: 0, y: 40, rotateY: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: -5 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            className="w-64 h-[22rem] bg-zinc-950 rounded-r-3xl rounded-l-md border border-zinc-800 flex flex-col items-center justify-center shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden"
            whileHover={{ rotateY: 0, scale: 1.05, rotateX: 2, rotateZ: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
             {/* Book Binding/Spine Line */}
             <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-zinc-900 to-zinc-800 border-r border-zinc-700/50"></div>
             
             {/* Glowing header accent */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400"></div>
             
             {/* Center Graphic */}
             <div className="p-8 text-center relative z-10 w-full h-full flex flex-col justify-center items-center">
               <motion.div 
                 className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 <Download className="w-8 h-8 text-primary" />
               </motion.div>
               <h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">Salon Growth<br/>Playbook</h3>
               <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase mt-2">2026 Edition</p>
             </div>
             
             {/* Decorative bottom corner element */}
             <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border-4 border-primary/20 flex items-center justify-center">
               <motion.div 
                 className="w-6 h-6 rounded-full bg-primary"
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
