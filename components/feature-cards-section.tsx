"use client"

import { motion } from "framer-motion"
import { ChevronRight, Plus } from "lucide-react"

const featureCards = [
  {
    title: "Stablecoin subscriptions on any EVM chain",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg p-6">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-xs font-bold">$</span>
            </div>
            <span className="text-zinc-300 text-sm font-medium">USDC</span>
            <span className="text-emerald-400 text-xs ml-auto">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-xs font-bold">₮</span>
            </div>
            <span className="text-zinc-300 text-sm font-medium">USDT</span>
            <span className="text-emerald-400 text-xs ml-auto">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-amber-400 text-xs font-bold">◈</span>
            </div>
            <span className="text-zinc-300 text-sm font-medium">DAI</span>
            <span className="text-emerald-400 text-xs ml-auto">Active</span>
          </div>
          <div className="mt-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="text-[10px] text-zinc-500 mb-1">Monthly recurring</div>
            <div className="text-white text-lg font-semibold">$24,500 <span className="text-zinc-500 text-sm font-normal">USDC</span></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Usage metering & smart entitlements",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">API Calls</span>
              <span className="text-zinc-300 text-xs">82,340 / 100,000</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-700 rounded-full">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: "82%" }} />
            </div>
          </div>
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">Seats</span>
              <span className="text-zinc-300 text-xs">18 / 25</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-700 rounded-full">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "72%" }} />
            </div>
          </div>
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-xs">Credits</span>
              <span className="text-amber-400 text-xs">23 remaining</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-700 rounded-full">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: "23%" }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "On-chain recurring payments — sign once, auto renew",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300 text-xs">Auto-pull via ERC20 allowance</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-zinc-300 text-xs">Superfluid streaming</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/30">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-zinc-300 text-xs">Account abstraction flow</span>
          </div>
          <div className="mt-2 text-center">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Next renewal in 14 days
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
              Crypto-native billing infrastructure
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Galactic replaces Stripe for Web3. Charge in stablecoins, meter usage on-chain, gate features by subscription, and let AI agents manage billing autonomously.{" "}
                <a href="#" className="text-white inline-flex items-center gap-1 hover:underline">
                  View documentation <ChevronRight className="w-4 h-4" />
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
