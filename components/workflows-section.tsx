"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, ArrowRight, Wallet, Code2, Bot, Puzzle, Shield } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "JavaScript / TypeScript SDK",
    title: "Integrate billing in 5 lines of code",
    icon: ArrowRight,
    mockup: "jssdk",
  },
  {
    id: 2,
    category: "React SDK",
    title: "Drop-in checkout, pricing tables, and portals",
    icon: Plus,
    mockup: "reactsdk",
  },
  {
    id: 3,
    category: "Checkout Widget",
    title: "Wallet connect + stablecoin payment in one component",
    icon: ArrowRight,
    mockup: "checkout",
  },
  {
    id: 4,
    category: "Payment MCP",
    title: "Let AI agents manage billing autonomously",
    icon: ArrowRight,
    mockup: "mcp",
  },
  {
    id: 5,
    category: "Multi-Chain Support",
    title: "Deploy on Ethereum, Base, Polygon, Arbitrum, and more",
    icon: ArrowRight,
    mockup: "multichain",
  },
  {
    id: 6,
    category: "Smart Contracts",
    title: "Audited subscription and escrow contracts",
    icon: ArrowRight,
    mockup: "contracts",
  },
  {
    id: 7,
    category: "REST & GraphQL API",
    title: "Full programmatic control over billing infrastructure",
    icon: ArrowRight,
    mockup: "api",
  },
]

function JsSdkMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 font-mono text-[11px]">
      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
        <Code2 className="w-3.5 h-3.5" />
        <span>galactic.ts</span>
      </div>
      <div>
        <span className="text-purple-400">import</span>
        <span className="text-zinc-400"> {"{"} Galactic {"}"} </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> &apos;@galactic/sdk&apos;</span>
      </div>
      <div className="mt-1">
        <span className="text-purple-400">const</span>
        <span className="text-amber-300"> client</span>
        <span className="text-zinc-400"> = </span>
        <span className="text-cyan-300">Galactic</span>
        <span className="text-zinc-400">(</span>
        <span className="text-green-400">&apos;sk_live_...&apos;</span>
        <span className="text-zinc-400">)</span>
      </div>
      <div className="mt-1">
        <span className="text-purple-400">const</span>
        <span className="text-amber-300"> allowed</span>
        <span className="text-zinc-400"> = </span>
        <span className="text-purple-400">await</span>
        <span className="text-cyan-300"> client</span>
        <span className="text-zinc-400">.checkEntitlement(</span>
      </div>
      <div className="pl-4">
        <span className="text-green-400">&apos;api_access&apos;</span>
        <span className="text-zinc-400">, wallet)</span>
      </div>
    </div>
  )
}

function ReactSdkMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 font-mono text-[11px]">
      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
        <span>PricingTable.tsx</span>
      </div>
      <div>
        <span className="text-zinc-400">&lt;</span>
        <span className="text-cyan-300">GalacticPricing</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">chain</span>
        <span className="text-zinc-400">=</span>
        <span className="text-green-400">&quot;base&quot;</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">currency</span>
        <span className="text-zinc-400">=</span>
        <span className="text-green-400">&quot;USDC&quot;</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">theme</span>
        <span className="text-zinc-400">=</span>
        <span className="text-green-400">&quot;dark&quot;</span>
      </div>
      <div>
        <span className="text-zinc-400">/&gt;</span>
      </div>
    </div>
  )
}

function CheckoutMockup() {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="w-full max-w-[200px] bg-zinc-900 rounded-xl border border-zinc-700 p-4">
        <div className="text-center mb-3">
          <Wallet className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
          <div className="text-zinc-300 text-xs font-medium">Pay with wallet</div>
        </div>
        <div className="bg-zinc-800/50 rounded-lg px-3 py-2 text-center mb-2">
          <span className="text-white text-sm font-semibold">500 USDC</span>
        </div>
        <div className="bg-indigo-500/20 rounded-lg px-3 py-1.5 text-center">
          <span className="text-indigo-300 text-[10px]">Connect Wallet</span>
        </div>
      </div>
    </div>
  )
}

function McpMockup() {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="text-center">
        <Bot className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
        <div className="text-zinc-300 text-xs font-medium mb-1">Payment MCP</div>
        <div className="text-zinc-500 text-[10px]">AI-native billing API</div>
      </div>
    </div>
  )
}

function MultichainMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {["ETH", "BASE", "MATIC", "ARB"].map((chain) => (
          <div key={chain} className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30">
            <span className="text-[10px] text-zinc-400 font-medium">{chain}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContractsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Shield className="w-16 h-16 text-emerald-400/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] text-emerald-400 font-bold">✓</span>
        </div>
      </div>
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-zinc-800/50 rounded-lg px-4 py-2 border border-zinc-700/50">
        <span className="text-xs font-mono text-indigo-400">GALACTIC API</span>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "jssdk":
      return <JsSdkMockup />
    case "reactsdk":
      return <ReactSdkMockup />
    case "checkout":
      return <CheckoutMockup />
    case "mcp":
      return <McpMockup />
    case "multichain":
      return <MultichainMockup />
    case "contracts":
      return <ContractsMockup />
    case "api":
      return <ApiMockup />
    default:
      return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Indigo indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-sm text-zinc-400">SDKs & developer tools</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Integrate in minutes,
              <br />
              scale to millions
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            SDKs for every language, plug-and-play UI components, Payment MCP server, and a powerful API — everything you need to monetize your dApp.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {carouselCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    {/* Fade overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer - refactored for proper icon alignment */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                        <p className="text-sm text-zinc-200 leading-snug">{card.title}</p>
                      </div>
                      {/* Icon button - fixed size, vertically centered */}
                      <button className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 transition-colors">
                        <card.icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= carouselCards.length - 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
