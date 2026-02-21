"use client"

import { motion } from "framer-motion"
import { ChevronRight, Check, Shield, Eye, Users } from "lucide-react"

const capabilityOps = [
  { name: "issue_capability", isAgent: true, selected: true, icon: "◇" },
  { name: "delegate_slice", isAgent: true, selected: false, icon: "◉" },
  { name: "consume_units", isAgent: true, selected: false, icon: "◈" },
  { name: "verify_receipt", isAgent: true, selected: false, icon: "○" },
  { name: "revoke_capability", isAgent: true, selected: false, icon: "◎" },
  { name: "check_balance", isAgent: false, selected: false, icon: "◆" },
]

export function AISection() {
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
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-zinc-400 text-sm">Delegation & Agent Autonomy</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Controlled autonomy for software agents
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Bounded Delegation.</span> Grant limited economic authority to AI agents
            without transferring ownership. Agents receive capability slices — cryptographically bounded to a delegated budget.
          </motion.p>

          {/* Learn more button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            Explore Delegation
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Capability Ops dropdown mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                {/* Glass overlay effect */}
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Input field */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Select capability operation...</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {capabilityOps.map((op, index) => (
                    <div
                      key={op.name}
                      style={
                        op.selected
                          ? {
                            transform: "scale(1.04) rotateX(17deg)",
                            background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                            borderRadius: "6px",
                            height: "48px",
                            position: "relative",
                            boxShadow:
                              "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                            zIndex: 20,
                            marginLeft: "-12px",
                            marginRight: "-12px",
                          }
                          : {
                            opacity: 1 - index * 0.15,
                            height: "42px",
                          }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          gap: "12px",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400 text-lg">{op.icon}</span>
                          <span className={op.selected ? "text-white font-medium font-mono text-sm" : "text-zinc-300 font-mono text-sm"}>
                            {op.name}
                          </span>
                          {op.isAgent && (
                            <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">Protocol</span>
                          )}
                        </div>
                        {op.selected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom divider with two columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column — Hierarchical Delegation */}
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Hierarchical Delegation</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Owner → Manager Agent → Worker Agent. Each layer reduces scope. Supply Safety Rule ensures child slices never exceed parent quota.
                </p>

                {/* Delegation Flow Card */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" />
                    </svg>
                    <span className="text-zinc-500 text-sm">
                      Delegation <span className="text-zinc-300">Flow</span>
                    </span>
                  </div>

                  {/* Owner Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Owner</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm"
                        style={{ background: "#7170ff" }}
                      >
                        <span className="w-4 h-4 bg-white/30 rounded-full" />
                        <span className="text-white">Wallet</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-zinc-800/30 rounded-md px-2 py-1 text-sm text-zinc-600">
                        <span className="w-3 h-3 border border-zinc-700 rounded" />
                        10,000 units
                      </span>
                    </div>
                  </div>

                  {/* Manager Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Manager</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 bg-emerald-500/20 rounded-md px-2 py-1 text-sm text-emerald-400">
                        <span className="w-4 h-4 bg-emerald-400/30 rounded-full" />
                        Agent A
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-zinc-700">
                        <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                        5,000 slice
                      </span>
                    </div>
                  </div>

                  {/* Worker Row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-zinc-600 text-sm w-20">Worker</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 bg-amber-500/20 rounded-md px-2 py-1 text-sm text-amber-400">
                        <span className="w-4 h-4 bg-amber-400/30 rounded-full" />
                        Agent B
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-zinc-700">
                        <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                        $2.00 cap
                      </span>
                    </div>
                  </div>

                  {/* Safety Detail Card */}
                  <div className="bg-zinc-800/40 rounded-lg p-4 ml-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 h-5 bg-indigo-500/30 rounded-full flex items-center justify-center">
                        <span className="text-indigo-400 text-[10px]">⬡</span>
                      </span>
                      <span className="text-zinc-300 text-sm font-medium">Supply Safety Rule</span>
                    </div>

                    <p className="text-zinc-500 text-xs mb-2">Invariant</p>
                    <p className="text-zinc-500 text-sm mb-4">
                      Sum of child allowances ≤ parent remaining quota. No new rights created. Authority only narrows.
                    </p>

                    <p className="text-zinc-500 text-xs mb-2">Status</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1.5 bg-emerald-500/10 rounded-md px-2 py-1 text-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-emerald-400">Verified</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-zinc-700/50 rounded-md px-2 py-1 text-sm">
                        <span className="text-zinc-400 text-xs">Parent: CAP-001</span>
                      </span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-300 text-sm py-2.5 rounded-md transition-colors">
                      <Check className="w-4 h-4" />
                      View delegation tree
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column — Verification Modes */}
              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Verification Modes</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Three modes balancing security and UX — from high-security mutual receipts to passive attested measurement.
                </p>

                {/* Verification Modes Cards */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 space-y-4">
                  {/* Mutual Receipts */}
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-indigo-400" />
                      <span className="text-zinc-200 text-sm font-medium">Mutual Receipts</span>
                      <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded ml-auto">High Security</span>
                    </div>
                    <p className="text-zinc-500 text-xs">
                      Both parties sign every request. Ideal for AI inference & API calls.
                    </p>
                  </div>

                  {/* Delegated Allowance */}
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span className="text-zinc-200 text-sm font-medium">Delegated Allowance</span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded ml-auto">Optimized</span>
                    </div>
                    <p className="text-zinc-500 text-xs">
                      Sign once to grant a budget. Signature-free operations within bounds.
                    </p>
                  </div>

                  {/* Attested Measurement */}
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-amber-400" />
                      <span className="text-zinc-200 text-sm font-medium">Attested Measurement</span>
                      <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded ml-auto">Passive</span>
                    </div>
                    <p className="text-zinc-500 text-xs">
                      External watchers attest usage for storage, uptime, and passive resources.
                    </p>
                  </div>

                  {/* Nonce visualization */}
                  <div className="border-t border-zinc-700/30 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-zinc-400 text-xs font-medium">Monotonic Nonce</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247].map((n, i) => (
                        <div
                          key={n}
                          className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${i === 7
                              ? "bg-indigo-500/30 text-indigo-300 border border-indigo-500/40"
                              : "bg-zinc-800/50 text-zinc-500"
                            }`}
                        >
                          {n}
                        </div>
                      ))}
                      <span className="text-zinc-600 text-xs ml-1">→</span>
                    </div>
                    <p className="text-zinc-600 text-[10px] mt-2">newNonce must be &gt; previousNonce — irreversible</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
