import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    try {
      const { error } = await supabase.from("waitlist").insert([{ email, created_at: new Date().toISOString() }])
      if (error) throw error
      setIsSubmitted(true)
      setEmail("")
    } catch (error: unknown) {
      let code = undefined;
      let message = "";
      if (typeof error === "object" && error !== null) {
        // @ts-expect-error: supabase error shape
        code = error.code;
        // @ts-expect-error: supabase error shape
        message = error.message;
      }
      if (
        code === "23505" ||
        (typeof message === "string" && message.toLowerCase().includes("duplicate"))
      ) {
        setErrorMessage("You are already signed up! 🤘")
      } else {
        setErrorMessage("Something went wrong. Please try again later.")
      }
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-3xl font-light tracking-tight mb-6 md:text-4xl">Start tracking your AI visibility</h2>
      <p className="text-lg text-gray-600 mb-8 md:text-xl max-w-3xl mx-auto">Be the first to know when your brand appears in AI search results.</p>
      {isSubmitted ? (
        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <div className="text-gray-500 mb-4 text-2xl">🤘</div>
          <h3 className="text-lg font-light mb-2 md:text-xl">you&apos;re on the list</h3>
          <p className="text-lg text-gray-600 md:text-xl">we&apos;ll notify you when nagi launches</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="text-sm text-red-500 mb-2">{errorMessage}</div>
          )}
          <Input
            type="email"
            placeholder="your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center border-gray-300 focus:border-gray-500 focus:ring-gray-500"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-300 hover:bg-orange-400 text-white border-0"
          >
            {isLoading ? "joining..." : "join waitlist"}
          </Button>
        </form>
      )}
    </div>
  )
}
