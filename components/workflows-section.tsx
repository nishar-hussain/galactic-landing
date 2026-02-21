"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Plus, Code2, Shield, Key, GitBranch, Scale, Activity } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "TypeScript SDK",
    title: "Issue and manage capabilities in 5 lines of code",
    icon: ArrowRight,
    mockup: "tssdk",
  },
  {
    id: 2,
    category: "React SDK",
    title: "Drop-in capability gating and delegation UI components",
    icon: Plus,
    mockup: "reactsdk",
  },
  {
    id: 3,
    category: "Receipt Verifier",
    title: "Validate dual-signed usage receipts before settlement",
    icon: ArrowRight,
    mockup: "verifier",
  },
  {
    id: 4,
    category: "Agent SDK",
    title: "Bounded delegation for autonomous AI agents",
    icon: ArrowRight,
    mockup: "agentsdk",
  },
  {
    id: 5,
    category: "Nonce Manager",
    title: "Monotonic nonce tracking and batch optimization",
    icon: ArrowRight,
    mockup: "nonce",
  },
  {
    id: 6,
    category: "Settlement Batcher",
    title: "Batch thousands of off-chain receipts into single tx",
    icon: ArrowRight,
    mockup: "batcher",
  },
  {
    id: 7,
    category: "Dispute CLI",
    title: "Challenge settlements and manage economic bonds",
    icon: ArrowRight,
    mockup: "dispute",
  },
]

function TsSdkMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 font-mono text-[11px]">
      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
        <Code2 className="w-3.5 h-3.5" />
        <span>capability.ts</span>
      </div>
      <div>
        <span className="text-purple-400">import</span>
        <span className="text-zinc-400"> {"{"} Galactic {"}"} </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> &apos;@galactic/sdk&apos;</span>
      </div>
      <div className="mt-1">
        <span className="text-purple-400">const</span>
        <span className="text-amber-300"> cap</span>
        <span className="text-zinc-400"> = </span>
        <span className="text-purple-400">await</span>
        <span className="text-cyan-300"> galactic</span>
        <span className="text-zinc-400">.issue({"{"}</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">permission</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">&apos;AI_INFER&apos;</span>
        <span className="text-zinc-400">,</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">units</span>
        <span className="text-zinc-400">: </span>
        <span className="text-amber-300">10000</span>
        <span className="text-zinc-400">,</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">expiry</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">&apos;30d&apos;</span>
        <span className="text-zinc-400"> {"}"})</span>
      </div>
    </div>
  )
}

function ReactSdkMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 font-mono text-[11px]">
      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
        <span>CapabilityGate.tsx</span>
      </div>
      <div>
        <span className="text-zinc-400">&lt;</span>
        <span className="text-cyan-300">CapabilityGate</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">permission</span>
        <span className="text-zinc-400">=</span>
        <span className="text-green-400">&quot;AI_INFER&quot;</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">minUnits</span>
        <span className="text-zinc-400">={"{"}</span>
        <span className="text-amber-300">100</span>
        <span className="text-zinc-400">{"}"}</span>
      </div>
      <div className="pl-4">
        <span className="text-amber-300">fallback</span>
        <span className="text-zinc-400">={"{"}</span>
        <span className="text-cyan-300">&lt;UpgradePrompt /&gt;</span>
        <span className="text-zinc-400">{"}"}</span>
      </div>
      <div>
        <span className="text-zinc-400">/&gt;</span>
      </div>
    </div>
  )
}

function VerifierMockup() {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="text-center">
        <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
        <div className="text-zinc-300 text-xs font-medium mb-1">Receipt Verifier</div>
        <div className="text-zinc-500 text-[10px]">Dual-signature validation</div>
      </div>
    </div>
  )
}

function AgentSdkMockup() {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="text-center">
        <Key className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
        <div className="text-zinc-300 text-xs font-medium mb-1">Agent SDK</div>
        <div className="text-zinc-500 text-[10px]">Bounded capability slices</div>
      </div>
    </div>
  )
}

function NonceMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1">
          {[1245, 1246, 1247].map((n) => (
            <div key={n} className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30">
              <span className="text-[10px] text-zinc-400 font-mono">{n}</span>
            </div>
          ))}
        </div>
        <span className="text-[10px] text-zinc-500">monotonic ↑</span>
      </div>
    </div>
  )
}

function BatcherMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <GitBranch className="w-10 h-10 text-purple-400 mx-auto mb-2" />
        <div className="text-zinc-300 text-xs font-medium mb-1">Settlement Batcher</div>
        <div className="text-zinc-500 text-[10px]">1000s receipts → 1 tx</div>
      </div>
    </div>
  )
}

function DisputeMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <Scale className="w-10 h-10 text-amber-400 mx-auto mb-2" />
        <div className="text-zinc-300 text-xs font-medium mb-1">Dispute CLI</div>
        <div className="text-zinc-500 text-[10px]">Challenge & bond mgmt</div>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "tssdk":
      return <TsSdkMockup />
    case "reactsdk":
      return <ReactSdkMockup />
    case "verifier":
      return <VerifierMockup />
    case "agentsdk":
      return <AgentSdkMockup />
    case "nonce":
      return <NonceMockup />
    case "batcher":
      return <BatcherMockup />
    case "dispute":
      return <DisputeMockup />
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
              <span className="text-sm text-zinc-400">Protocol SDKs & developer tools</span>
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
            SDKs for every language, capability gating components, receipt verification, agent delegation tools, and settlement batchers — everything for the autonomous economy.
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

                  {/* Card footer */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                        <p className="text-sm text-zinc-200 leading-snug">{card.title}</p>
                      </div>
                      {/* Icon button */}
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
