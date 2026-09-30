"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

type Solution = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
};

export function AnimatedSolutions({ solutions }: { solutions: Solution[] }) {
  return (
    <div className="space-y-32">
      {solutions.map((solution, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <motion.div 
            key={index} 
            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Text Content */}
            <div className="w-full lg:w-[40%] shrink-0 space-y-6 relative">
              <motion.div 
                className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {solution.icon}
              </motion.div>
              <div>
                <motion.h3 
                  className="text-primary font-bold tracking-widest uppercase text-xs mb-3"
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {solution.subtitle}
                </motion.h3>
                <motion.h2 
                  className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight"
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {solution.title}
                </motion.h2>
                <motion.p 
                  className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {solution.description}
                </motion.p>
              </div>
              <ul className="space-y-4">
                {solution.benefits.map((benefit, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center text-zinc-700 dark:text-zinc-300 font-medium"
                    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4 drop-shadow-[0_0_10px_rgba(91,58,247,0.5)]" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Image / Graphic Content */}
            <motion.div 
              className="w-full lg:flex-1 min-w-0"
              initial={{ opacity: 0, scale: 0.9, rotateY: isReversed ? -15 : 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <div className="aspect-video md:aspect-[4/3] lg:h-[480px] w-full bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center group shadow-2xl">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating UI Element (Creativity touch) */}
                <motion.div 
                  className="absolute bottom-8 right-8 left-8 p-6 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">Optimized Workflow</div>
                    <div className="text-white/70 text-sm">Powered by SalonNO</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
