import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { StagewiseToolbar } from "@stagewise/toolbar-next"
import ReactPlugin from "@stagewise-plugins/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nagi AI",
  description: "Track, understand, and improve your brand visibility in AI-powered search platforms like ChatGPT, Perplexity, Claude, and Gemini",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
        <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      </body>
    </html>
  )
}
