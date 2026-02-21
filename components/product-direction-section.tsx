"use client"

import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24">
      {/* Gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-zinc-400 text-sm">Provider Operations & Trust</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Enterprise control plane with built-in dispute resolution
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Manage products, plans, and customers without changing protocol code.</span> Suspend users, override terms, migrate pricing — with a full audit trail and cryptographic dispute resolution.
        </p>

        {/* 3D Protocol Layer Visualization */}
        <div
          className="relative w-full mb-16"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Timeline ruler with tick marks */}
            <div className="relative h-[400px]">
              {/* Diagonal dashed line */}
              <div
                className="absolute w-[1px] bg-zinc-600/50"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  transform: "rotate(0deg)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                }}
              />

              {/* Timeline header with tick marks */}
              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-600/60"
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Protocol layer labels */}
              <div className="absolute text-zinc-500 text-sm" style={{ left: "5%", top: "80px" }}>
                CAPABILITY
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>
                MONETIZATION
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>
                VERIFICATION
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>
                DELEGATION
              </div>
              <div
                className="absolute px-3 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-sm font-medium"
                style={{ left: "58%", top: "-10px" }}
              >
                SETTLEMENT
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "72%", top: "-5px" }}>
                DISPUTE
              </div>
              <div className="absolute text-zinc-500/50 text-sm" style={{ left: "85%", top: "-25px" }}>
                ANALYTICS
              </div>

              {/* Protocol layer bars */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "5%",
                  top: "100px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <div className="w-4 h-4 rotate-45 bg-indigo-500/60" />
                <span className="text-zinc-300 text-sm font-medium">Capability state machine</span>
                <div
                  className="absolute w-5 h-5 rotate-45 border-2 border-emerald-500 bg-transparent"
                  style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                />
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "15%",
                  top: "155px",
                  width: "25%",
                  height: "44px",
                }}
              >
                <div className="w-3 h-3 rotate-45 bg-zinc-600/60" />
                <span className="text-zinc-500 text-sm">Receipt verifier</span>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "45%",
                  top: "155px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">Nonce settlement engine</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-emerald-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-emerald-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-emerald-500/60" />
                </div>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "35%",
                  top: "240px",
                  width: "28%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">Dispute arbiter</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-indigo-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-indigo-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Provider Operations */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Provider Operations</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              The business control plane — manage products, plans, and customers without changing protocol code. Revoke-and-replace, never edit.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Operations Control</h4>

              {/* Operation rows */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Suspend</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    User paused
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-zinc-300 text-xs">
                    Capabilities frozen
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Override</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Enterprise
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs">
                    Custom terms applied
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-zinc-500 text-sm w-20 pt-1">Migrate</span>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-indigo-500" />
                    Revoke old capability
                  </span>
                  <span className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-emerald-500" />
                    Issue replacement
                  </span>
                  <span className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 border border-zinc-500 bg-transparent" />
                    Clear audit history
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Dispute Resolution */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Dispute Resolution</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Challenge Window activates when settlement contradicts signed evidence. Highest Valid State Wins — economic bonds discourage fraud.
            </p>

            <div className="relative h-48">
              {/* Rejected card (back) */}
              <div
                className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Rejected — Forfeited bond
                </span>
              </div>

              {/* Challenged card (middle) */}
              <div
                className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Challenge Window — 24h remaining
                </span>
              </div>

              {/* Settled card (front) */}
              <div
                className="absolute rounded-xl bg-zinc-800/90 border border-zinc-700/50 px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-emerald-500 font-medium text-sm">Settled</span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">Rule: <span className="font-mono text-indigo-300">Highest Valid State Wins</span></p>
                <span className="text-zinc-500 text-xs">Nonce 1,247 accepted · Both bonds returned</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-800">
          {/* Left column - Feature list */}
          <div className="border-r border-zinc-800 pt-16 pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-zinc-200 mb-8 leading-tight">
              Deterministic protocol,
              <br />
              no manual intervention
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-emerald-500" />
                <span className="text-zinc-200 font-medium">Immutable capability lifecycle</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-emerald-500/50" />
                <span className="text-zinc-400">Cryptographic receipt settlement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-emerald-500/30" />
                <span className="text-zinc-500">On-chain dispute arbiter</span>
              </div>
            </div>
          </div>

          {/* Right column - Economic Intelligence */}
          <div className="pt-10 pl-10 pb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 text-zinc-400 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z" />
                </svg>
                <span>Intelligence</span>
                <span className="text-zinc-600">›</span>
                <span>Economic Metrics</span>
                <span className="ml-auto text-zinc-600">•••</span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" />
                  </svg>
                </div>

                {/* Title */}
                <div className="mb-3 relative inline-block">
                  <span className="text-zinc-200 text-lg font-medium">Economic </span>
                  <span className="relative">
                    <span className="text-zinc-200 text-lg font-medium bg-indigo-500/20 px-0.5">Intelligence</span>
                  </span>
                </div>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg px-3 py-2">
                    <span className="text-zinc-400 text-sm">Unused Liability</span>
                    <span className="text-amber-300 text-sm font-medium">$12,340</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg px-3 py-2">
                    <span className="text-zinc-400 text-sm">Burn Rate</span>
                    <span className="text-white text-sm font-medium">2.4 days to exhaustion</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg px-3 py-2">
                    <span className="text-zinc-400 text-sm">Spend Velocity</span>
                    <span className="text-emerald-300 text-sm">Normal</span>
                  </div>
                  <div className="flex items-center justify-between bg-amber-500/10 rounded-lg px-3 py-2 border border-amber-500/20">
                    <span className="text-amber-400 text-sm">Task Efficiency</span>
                    <span className="text-amber-300 text-sm font-medium">⚠ Agent loop detected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          {/* Capability Engine */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="10" cy="10" r="8" />
                <circle cx="10" cy="10" r="4" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </svg>
              <span className="text-zinc-200 font-medium">Capability Engine</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Deterministic state machine for permission lifecycle management.</p>
          </div>

          {/* Monotonic Nonces */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="10" cy="10" r="8" />
                <path d="M2 10h16M10 2a15 15 0 010 16M10 2a15 15 0 000 16" />
              </svg>
              <span className="text-zinc-200 font-medium">Monotonic Nonces</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Prevent replay attacks with strictly increasing counter-based proofs.</p>
          </div>

          {/* Cryptographic Receipts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rotate-45 bg-zinc-400" />
              <span className="text-zinc-200 font-medium">Dual Signatures</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Provider + user co-signed receipts as proof of service.</p>
          </div>

          {/* Economic Bonds */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <rect x="2" y="10" width="3" height="8" rx="1" />
                <rect x="7" y="6" width="3" height="12" rx="1" />
                <rect x="12" y="8" width="3" height="10" rx="1" />
                <rect x="17" y="4" width="3" height="14" rx="1" />
              </svg>
              <span className="text-zinc-200 font-medium">Economic Bonds</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Both parties deposit bonds; loser forfeits to discourage fraud.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
