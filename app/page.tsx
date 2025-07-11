"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@supabase/supabase-js"
import Image from "next/image"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown to a future date (30 days from now for demo)
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  useEffect(() => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from("waitlist").insert([{ email, created_at: new Date().toISOString() }])
      if (error) throw error
      setIsSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col gap-y-10 md:gap-y-20">
      {/* Header */}
      <header className="absolute w-full border-b border-gray-100 py-4 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Sakura Tree SVG Word Art */}
            <span className="text-2xl font-bold text-pink-400" aria-label="sakura tree">
              {/* Simple Sakura Tree SVG */}
              ❀
            </span>
            <span className="text-xl font-semibold">nagi <span className="text-pink-400">ai</span></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 min-h-[100svh] items-center justify-center px-2 sm:px-6 text-center relative">
        <div className="relative flex flex-col items-center justify-center w-full max-w-2xl min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] mx-auto">
          {/* Flower ASCII Art as background */}
          <pre
            className="absolute inset-0 flex flex-col justify-center items-center w-full h-full text-[8px] xs:text-xs sm:text-base md:text-lg leading-3 sm:leading-4 text-pink-400 font-mono whitespace-pre mt-8 sm:mt-10 opacity-80 pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            {`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠒⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⠀⠀⠀⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢴⠾⠑⢦⡞⠃⠀⠀⠀⠀⠀⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣯⠌⠀⠀⠀⢳⠀⠀⠀⠀⠀⢠⠧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢇⠀⢀⡔⠋⠻⠚⣆⢀⣀⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡝⠆⠀⠀⠀⠁⡧⠆⠈⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠉⠉⠉⠒⠢⢄⡀⠀⠀⠀⠀⠀⢹⣼⡀⢀⣀⠜⠃⠀⠀⢺⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⢠⡿⠄⠀⠀⠀⠀⢀⡷⡒⠒⠲⢤⡀⠀⢀⣠⢀⣀⣠⠀⠀⠀⠀
⠀⠀⠀⠀⢠⠋⠀⢠⠀⠀⠀⠙⣆⣀⡤⠤⠤⣄⡀⠀⠀⠈⢦⡀⡀⠀⠀⠀⢀⡏⢀⣴⠟⠁⠀⠀⠀⠀⢀⡜⠀⠀⡄⠀⠀⢙⡞⠁⠀⠀⢀⠈⢦⠀⠀⠀
⠀⠀⠀⠀⡇⠀⠀⠨⡄⠀⠀⢀⠜⠃⠀⠀⠀⠈⠉⣱⡆⠀⠀⠉⠓⠲⠶⠶⣮⣠⡾⠃⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠰⡀⠀⢸⠀⢠⢀⠔⠁⠀⠈⣶⠀⠀
⠀⠀⠀⠀⢳⡀⠀⠀⣰⣤⣄⡌⣄⢀⢀⠠⠒⠁⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡟⣿⠉⠀⠀⠀⠀⠀⠀⢀⡴⠼⠦⠄⡀⠡⣰⣼⠻⣾⠟⣀⠀⢀⡼⠈⠀⠀
⠀⠀⢀⡔⠋⠉⠓⢺⢽⡝⣦⣺⢁⣴⡊⠀⣀⠀⠀⣰⠛⠀⠀⠀⠀⠀⠀⢰⡿⠃⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠱⡯⡖⠛⡤⣺⡟⠋⠉⠙⠢⡀⠀
⠀⢠⠯⠀⠀⠀⠀⢈⡯⢮⣏⣸⣗⠛⠏⠉⠀⠉⠙⢦⡀⠀⠀⠀⠀⠀⢠⣻⠋⠀⠀⠀⠀⠀⠀⠀⣞⠁⠀⠉⠁⠀⣨⠽⠛⢿⢿⣽⠓⠟⢄⡀⠀⠀⢳⡀
⠠⣞⠒⠀⠈⠉⠉⠀⠷⡜⢱⠙⡴⣧⡒⠠⢀⠀⠀⠀⣧⠀⠀⠀⠀⢠⣷⠃⠀⠀⢀⣀⣤⣴⡶⠿⠛⠳⢤⣀⠀⡰⠁⠀⠀⠆⠀⠙⡆⠀⠀⠈⠁⢀⣘⡤
⠀⠀⠑⣅⡄⠀⠀⣀⡴⠁⠌⠹⣀⠀⠀⠀⠀⠀⠀⣸⠀⠀⢀⡴⣣⣷⣶⡾⠽⠿⣫⠭⠤⢤⡀⠀⠀⠀⠈⠉⢳⠀⠀⠸⠀⠀⠀⣸⠦⠤⠤⠔⠊⠀⠀
⠀⠀⠀⠀⠉⠉⡏⠀⠀⣘⠀⠀⠀⠙⣦⢄⣠⣀⡴⠋⠁⢀⡴⣿⠟⠉⠁⠀⠀⠀⠀⡇⠀⠀⠀⠈⢢⡄⠀⠀⠀⠈⢮⡂⡀⠀⢀⡴⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠳⡠⡀⠃⠀⠀⢀⡜⡞⣆⠀⠀⢀⣤⢞⡵⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⢦⠦⠔⠒⠉⠀⡟⢸⠒⣋⡥⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⣩⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣖⠋⣡⡔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⠃⣴⠗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠏⣸⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⠃⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠞⠁⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣴⣫⠤⠖⠋                                                       
 `}
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-none block bounce-arrow">↓</span>
          </pre>
          {/* Deep radial blur background behind heading and subtitle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] xs:w-[320px] xs:h-[320px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] pointer-events-none z-10" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(255,255,255,0) 55%)', filter: 'blur(60px)' }} />
          {/* Heading and subtitle (no card styles) */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold mb-3 sm:mb-4 tracking-tight drop-shadow- w-full">nagi <span className="text-pink-400">ai</span></h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-black font-light mb-0 w-full">the next big ai company</p>
          </div>
        </div>
      </section>



      {/* Hyped by VCs Section */}
      <section className="py-2 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">hyped by vcs at</h2>
          <div className="flex flex-row justify-center items-center gap-8">
            <Image src="/ef.webp" alt="Entrepreneur First" width={50} height={50} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-1000 ease-in-out" />
            <Image src="/projecteurope.jpg" alt="Project Europe" width={50} height={50} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-1000 ease-in-out" />
            <Image src="/yc.png" alt="Y Combinator" width={50} height={50} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-1000 ease-in-out" />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-8 px-6 bg-pink-50/60">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">secure your spot</h2>
          <p className="text-sm text-gray-600 mb-4">early access is limited. don’t miss out on the next big thing in ai.</p>
          {isSubmitted ? (
            <div className="bg-white rounded-lg p-6 border border-pink-200">
              <div className="text-pink-400 mb-2 text-lg">🤘</div>
              <h3 className="text-xs font-semibold mb-1">welcome to the journey</h3>
              <p className="text-xs text-gray-600">we&apos;ll be in touch soon</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center border-gray-300 focus:border-pink-400 focus:ring-pink-400"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-400 hover:bg-pink-500 text-white border-0"
              >
                {isSubmitting ? "joining..." : "join waitlist"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-8 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-2">
            {[
              { label: "days", value: timeLeft.days },
              { label: "hours", value: timeLeft.hours },
              { label: "minutes", value: timeLeft.minutes },
              { label: "seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-md p-2">
                <div className="text-xl font-bold text-pink-400">{item.value}</div>
                <div className="text-xs text-gray-500 uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="py-6 px-6 border-t border-gray-100 text-center text-xs text-gray-400">
        © 2025 nagi ai. crafted with intention.
        <div className="flex flex-row  justify-center items-center gap-2">
          <a href="https://x.com/SagarCK04" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">sagar</a>
          <a href="https://x.com/eedrareti" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">reti</a>
        </div>
      </footer>
    </div>
  )
}
