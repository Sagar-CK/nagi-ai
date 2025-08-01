"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { floatOnHover, scaleOnHover, driftOnHover, carouselSlideOnHover } from "@/lib/animations"
import { 
  MagnifyingGlass, 
  Terminal, 
  Users, 
  Lightbulb, 
  TrendUp, 
  TrendDown, 
  ChartBar, 
  ChartLineUp 
} from "@phosphor-icons/react"

const features = [
  {
    name: "AI Search Tracking",
    description: "Monitor how and where your brand appears in AI-generated responses across ChatGPT, Perplexity, Claude, and Gemini.",
    Icon: MagnifyingGlass,
    href: "#",
    cta: "Start tracking",
    className: "col-span-3 lg:col-span-2",
    background: (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-orange-900/20 dark:to-purple-900/20"
        initial="initial"
        whileHover="hover"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden">
          <div className="transform rotate-12 scale-110">
            <div className="flex flex-col gap-6">
              {/* First row - Interleaved logos and stats */}
              <motion.div 
                className="flex gap-8"
                variants={carouselSlideOnHover}
              >
                <Image src="/chatgpt.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-orange-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <TrendUp className="w-full h-full text-orange-600" />
                </div>
                <Image src="/perplexity.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <ChartBar className="w-full h-full text-purple-600" />
                </div>
                <Image src="/claude.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <ChartLineUp className="w-full h-full text-emerald-600" />
                </div>
                <Image src="/gemini.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-pink-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <MagnifyingGlass className="w-full h-full text-pink-600" />
                </div>
                {/* Duplicate for seamless loop */}
                <Image src="/chatgpt.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-orange-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <TrendUp className="w-full h-full text-orange-600" />
                </div>
                <Image src="/perplexity.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <ChartBar className="w-full h-full text-purple-600" />
                </div>
              </motion.div>
              
              {/* Second row - Interleaved logos and stats */}
              <motion.div 
                className="flex gap-8"
                variants={carouselSlideOnHover}
                style={{ animationDelay: '0.5s' }}
              >
                <div className="w-14 h-14 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <TrendDown className="w-full h-full text-cyan-600" />
                </div>
                <Image src="/grok.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-indigo-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <ChartBar className="w-full h-full text-indigo-600" />
                </div>
                <Image src="/meta.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-rose-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <ChartLineUp className="w-full h-full text-rose-600" />
                </div>
                <Image src="/mistral.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-teal-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <MagnifyingGlass className="w-full h-full text-teal-600" />
                </div>
                <Image src="/qwen.png" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                {/* Duplicate for seamless loop */}
                <div className="w-14 h-14 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <TrendDown className="w-full h-full text-cyan-600" />
                </div>
                <Image src="/grok.svg" alt="" width={56} height={56} className="w-14 h-14 opacity-60 flex-shrink-0" />
                <div className="w-14 h-14 bg-indigo-400/20 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                  <ChartBar className="w-full h-full text-indigo-600" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    name: "Prompt-Level Insights",
    description: "Identify the exact prompts and contexts that trigger your brand mentions. Understand user intent behind searches.",
    Icon: Terminal,
    href: "#",
    cta: "View insights",
    className: "col-span-3 lg:col-span-1",
    background: (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20"
        initial="initial"
        whileHover="hover"
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden -translate-y-4 scale-90">
          {/* Terminal-like background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Floating terminal windows */}
          <div className="relative w-full h-full flex items-center justify-center -translate-y-10 scale-90">
            <div className="relative">
              <div className="bg-black/80 rounded-lg p-4 backdrop-blur-sm shadow-lg border border-emerald-500/20">
                <div className="space-y-2">
                  {/* Terminal header */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  {/* Terminal content */}
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">›</span>
                      <div className="h-2 bg-green-400/60 rounded w-24"></div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="h-1.5 bg-gray-400/60 rounded w-16"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">›</span>
                      <div className="h-2 bg-green-400/60 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating insight badges */}
              <motion.div 
                className="absolute -top-6 -right-4 bg-yellow-200/80 dark:bg-yellow-600/40 rounded-lg px-3 py-2 transform rotate-12 shadow-sm"
                variants={floatOnHover}
              >
                <div className="text-xs font-mono">
                  <div className="h-1.5 bg-yellow-600/60 rounded w-12"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-6 bg-emerald-200/80 dark:bg-emerald-600/40 rounded-lg px-3 py-2 transform -rotate-6 shadow-sm"
                variants={driftOnHover}
              >
                <div className="text-xs font-mono">
                  <div className="h-1.5 bg-emerald-600/60 rounded w-16"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    name: "Competitor Benchmarking",
    description: "Understand how your visibility compares to competitors. See where they win and identify opportunities to outrank them.",
    Icon: Users,
    href: "#",
    cta: "Compare now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20"
        initial="initial"
        whileHover="hover"
      >
        <div className="absolute inset-0 flex items-center justify-center -translate-y-10 scale-80">
          <div className="space-y-3">
            {/* Competitor comparison bars */}
            <motion.div 
              className="flex items-end gap-2"
              variants={scaleOnHover}
            >
              <div className="bg-orange-500/30 rounded-t-lg" style={{ width: '40px', height: '60px' }}></div>
              <div className="bg-purple-500/40 rounded-t-lg" style={{ width: '40px', height: '80px' }}></div>
              <div className="bg-emerald-500/20 rounded-t-lg" style={{ width: '40px', height: '50px' }}></div>
            </motion.div>
            
            {/* Ranking arrows */}
            <motion.div 
              className="flex justify-center gap-4"
              variants={floatOnHover}
            >
              <TrendUp className="w-5 h-5 text-green-500" />
              <TrendDown className="w-5 h-5 text-red-500" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    ),
  },
  {
    name: "Content Ideation Engine",
    description: "Generate new content ideas tailored to prompts where your brand is missing. AI-powered suggestions for maximum impact.",
    Icon: Lightbulb,
    href: "#",
    cta: "Get ideas",
    className: "col-span-3 lg:col-span-2",
    background: (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20"
        initial="initial"
        whileHover="hover"
      >
        <div className="absolute inset-0 flex items-center justify-center -translate-y-10 scale-90">
          <div className="relative">
            {/* Central lightbulb with radiating ideas */}
            <motion.div 
              className="relative"
              variants={scaleOnHover}
            >
              <div className="bg-yellow-200/40 dark:bg-yellow-600/20 rounded-full w-24 h-24 flex items-center justify-center">
                <Lightbulb className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
              </div>
              
              {/* Radiating idea bubbles */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-white/60 dark:bg-black/40 rounded-lg p-3 backdrop-blur-sm"
                variants={floatOnHover}
              >
                <div className="w-20 space-y-1">
                  <div className="h-1.5 bg-indigo-400/60 rounded w-full"></div>
                  <div className="h-1.5 bg-indigo-300/40 rounded w-3/4"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white/60 dark:bg-black/40 rounded-lg p-3 backdrop-blur-sm"
                variants={driftOnHover}
              >
                <div className="w-20 space-y-1">
                  <div className="h-1.5 bg-cyan-400/60 rounded w-full"></div>
                  <div className="h-1.5 bg-cyan-300/40 rounded w-2/3"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-0 -left-16 bg-white/60 dark:bg-black/40 rounded-lg p-3 backdrop-blur-sm"
                variants={floatOnHover}
                style={{ animationDelay: '0.2s' }}
              >
                <div className="w-20 space-y-1">
                  <div className="h-1.5 bg-purple-400/60 rounded w-full"></div>
                  <div className="h-1.5 bg-purple-300/40 rounded w-4/5"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-light tracking-tight mb-6 md:text-4xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Track, understand, and dominate AI search
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto md:text-xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Turn AI search visibility into actionable insights. Create content that ranks and capture high-intent traffic.
          </motion.p>
        </motion.div>
        
        <BentoGrid className="mb-16">
          {features.map((feature) => (
            <BentoCard
              key={feature.name}
              name={feature.name}
              description={feature.description}
              Icon={feature.Icon}
              href={feature.href}
              cta={feature.cta}
              className={feature.className}
              background={feature.background}
            />
          ))}
        </BentoGrid>

      </div>
    </section>
  )
}