"use client"

import { motion } from "framer-motion"

const capabilityTypes = [
  { name: "AI_INFER", icon: "◇" },
  { name: "STORE_BYTES", icon: "◎" },
  { name: "QUERY_DATA", icon: "◈" },
  { name: "COMPUTE", icon: "◉" },
  { name: "STREAM", icon: "◊" },
  { name: "SEARCH", icon: "○" },
  { name: "EMBED", icon: "◆" },
  { name: "DEPLOY", icon: "◌" },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Powering autonomous economies across every chain.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            From AI agents to DeFi protocols to storage networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {capabilityTypes.map((cap) => (
                <div key={cap.name} className="text-white font-semibold text-xl flex items-center gap-2">
                  <span className="text-indigo-400 text-2xl">{cap.icon}</span>
                  <span className="font-mono text-sm">{cap.name}</span>
                </div>
              ))}
            </div>

            {/* Hover overlay button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full text-sm text-zinc-300 flex items-center gap-2">
                View all permission types
                <span aria-hidden="true">›</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
