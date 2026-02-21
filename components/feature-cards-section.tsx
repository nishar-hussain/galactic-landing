"use client"

import { motion } from "framer-motion"
import { ChevronRight, Plus } from "lucide-react"

const featureCards = [
  {
    title: "Consumable permission states with four-component structure",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg p-6">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <span className="text-indigo-400 text-xs font-bold">ID</span>
            </div>
            <span className="text-zinc-300 text-sm font-medium">Identity</span>
            <span className="text-zinc-500 text-xs ml-auto font-mono">issuer + owner</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">⚡</span>
            </div>
            <span className="text-zinc-300 text-sm font-medium">Permission</span>
            <span className="text-zinc-500 text-xs ml-auto font-mono">AI_INFER</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-amber-400 text-xs font-bold">#</span>
            </div>
            <span className="text-zinc-300 text-sm font-medium">Accounting</span>
            <span className="text-zinc-500 text-xs ml-auto font-mono">8420/10000</span>
          </div>
          <div className="mt-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="text-[10px] text-zinc-500 mb-1">Lifecycle</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-emerald-400 text-sm font-medium">Active</span>
              <span className="text-zinc-500 text-xs ml-auto">→ Consumed / Revoked / Expired</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "12 universal monetization models from one primitive",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">Prepaid Credits</span>
              <span className="text-indigo-400 text-xs">Fixed units ↓</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-700 rounded-full">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: "35%" }} />
            </div>
          </div>
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">Subscription</span>
              <span className="text-emerald-400 text-xs">∞ until expiry</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-700 rounded-full">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">Periodic Allowance</span>
              <span className="text-amber-400 text-xs">Renews each interval</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-700 rounded-full">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: "68%" }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Proof of Service — off-chain execution, on-chain settlement",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-zinc-300 text-xs">Provider signs receipt</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-zinc-300 text-xs">User co-signs authorization</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300 text-xs">Batch settle via monotonic nonce</span>
          </div>
          <div className="mt-2 text-center">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              1,247 receipts batched → 1 tx
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              The Capability Primitive
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                The fundamental unit of the protocol — a consumable authorization contract defined by Identity, Permission, Accounting, and Lifecycle. Usage is irreversible. Consumption is monotonic.{" "}
                <a href="#" className="text-white inline-flex items-center gap-1 hover:underline">
                  Read the spec <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 360",
                  borderRadius: "30px",
                  height: "360px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full flex"
                  style={{
                    maskImage: "linear-gradient(#000 70%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(#000 70%, transparent 90%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex items-center justify-between w-full"
                  style={{ padding: "0 24px 40px", gap: "16px" }}
                >
                  <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
