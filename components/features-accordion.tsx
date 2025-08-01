"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

const features = [
  {
    id: "intelligent-automation",
    title: "Intelligent Automation",
    description:
      "AI-powered workflows that adapt to your work patterns and automate repetitive tasks, allowing you to focus on high-value activities.",
    gifPlaceholder: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "contextual-assistance",
    title: "Contextual Assistance",
    description:
      "Smart AI agents that understand your context and provide relevant suggestions, insights, and support exactly when you need them.",
    gifPlaceholder: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "knowledge-synthesis",
    title: "Knowledge Synthesis",
    description:
      "Automatically connect information across your tools and documents, creating a unified knowledge base that grows smarter over time.",
    gifPlaceholder: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "collaborative-intelligence",
    title: "Collaborative Intelligence",
    description:
      "AI-enhanced collaboration tools that help teams work together more effectively, with intelligent meeting summaries and action item tracking.",
    gifPlaceholder: "/placeholder.svg?height=300&width=500",
  },
]

export function FeaturesAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {features.map((feature) => (
        <AccordionItem key={feature.id} value={feature.id} className="border-gray-200">
          <AccordionTrigger className="text-left text-xl font-light hover:no-underline">
            {feature.title}
          </AccordionTrigger>
          <AccordionContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={feature.gifPlaceholder || "/placeholder.svg"}
                  alt={`${feature.title} demonstration`}
                  className="rounded-lg border border-gray-200 w-full max-w-md h-auto"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
