"use client"

import { Inter } from "next/font/google"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { WaitlistForm } from "@/components/waitlist-form"
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo"
import { HeroBadgeBasic } from "@/components/ui/hero-badge-demo"
import { FeaturesSection } from "@/components/features-section"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Countdown to a future date (30 days from now for demo)
    const targetDate = new Date(2025, 7, 10)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])



  return (
    <div className={`${inter.className} min-h-screen bg-white text-black`}>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <div className="mb-10">
            <HeroBadgeBasic />
          </div>
          <div className="relative inline-block">
            <h1 className="mb-6 text-6xl font-light tracking-tight md:text-8xl relative z-10">
              nagi
            </h1>
          </div>
          <p className="mb-12 text-xl font-light text-gray-600 md:text-2xl relative z-10">
            AI search visibility for marketing teams
          </p>
        </div>
        
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={4}
          className="absolute inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        />
      </section>
      <div className="flex flex-col items-center justify-center gap-16 pt-24">
        {/* Features Section - FIRST */}
        <FeaturesSection />

        <LogoCarouselDemo />

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 px-6 w-full relative overflow-hidden">
          <div className="max-w-container mx-auto relative">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl shadow-glow animate-fade-in"></div>
            
            {/* Content with animation */}
            <div className="relative z-10 py-12 px-8 animate-scale-in">
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <motion.section
          id="countdown"
          className="pb-24 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Tom Image and Description */}
            <motion.div
              className="mb-8 flex items-center justify-center gap-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <Image 
                src="/nagi-logo.svg" 
                alt="Nagi" 
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-2">Nagi AI, your visibility assistant</p>
                <p className="text-gray-600">
                  Start tracking your AI search presence in ...
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg sm:max-w-2xl mx-auto mb-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { label: "days", value: timeLeft.days },
                { label: "hours", value: timeLeft.hours },
                { label: "minutes", value: timeLeft.minutes },
                { label: "seconds", value: timeLeft.seconds },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={fadeInUp}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl text-orange-300 font-light">{item.value}</div>
                  <div className="text-sm sm:text-base text-gray-500 uppercase mt-2">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>


      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-light tracking-tight">nagi</h3>
                <p className="text-sm text-gray-600 mt-2">AI search visibility for marketing teams</p>
              </div>
              <p className="text-xs text-gray-400">© 2025 nagi. track, understand, dominate.</p>
            </div>
            
            {/* Product Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Early Access</a></li>
                <li><a href="#waitlist" className="text-sm text-gray-600 hover:text-gray-900">Join Waitlist</a></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://x.com/SagarCK04" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">sagar</a></li>
                <li><a href="https://x.com/eedrareti" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">reti</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
