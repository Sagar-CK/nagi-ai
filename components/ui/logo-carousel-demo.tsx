"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Array with AI platforms and relevant marketing/SEO tools
const allLogos = [
  { name: "ChatGPT", id: 1, img: "/chatgpt.svg" },
  { name: "Perplexity", id: 2, img: "/perplexity.svg" },
  { name: "Claude", id: 3, img: "/claude.svg" },
  { name: "Gemini", id: 4, img: "/gemini.svg" },
  { name: "Grok", id: 5, img: "/grok.svg" },
  { name: "Meta", id: 6, img: "/meta.svg" },
  { name: "Mistral", id: 7, img: "/mistral.svg" },
  { name: "Qwen", id: 8, img: "/qwen.png" },
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-tight mb-6 md:text-4xl">
            Track your brand across all AI platforms
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto md:text-xl">
            Monitor visibility in ChatGPT, Perplexity, Claude, Gemini and more
          </p>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
}