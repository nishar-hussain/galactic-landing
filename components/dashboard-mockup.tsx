"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  ChevronDown,
  ChevronRight,
  Hexagon,
  Search,
  MoreHorizontal,
  Zap,
  HelpCircle,
  Shield,
  Settings,
  Key,
  GitBranch,
  Users,
  Scale,
  Activity,
  Lock,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full bg-zinc-900/80 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Hexagon className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-semibold text-sm">Galactic</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Search...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={BarChart3} label="Overview" active />
          <NavItem icon={Key} label="Capabilities" badge={8} />
        </div>

        {/* Protocol section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Protocol
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={GitBranch} label="Delegation" hasSubmenu />
            <NavItem icon={Shield} label="Verification" hasSubmenu />
            <NavItem icon={Lock} label="Settlement" hasSubmenu />
            <NavItem icon={Scale} label="Disputes" hasSubmenu />
          </div>
        </div>

        {/* Intelligence section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Intelligence
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Activity} label="Analytics" color="text-indigo-400" />
            <NavItem icon={Users} label="Providers" color="text-emerald-400" />
            <NavItem icon={Zap} label="Agents" color="text-orange-400" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto p-3 border-t border-zinc-800/50">
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={HelpCircle} label="Documentation" />
        </div>
      </motion.div>

      {/* Capabilities List */}
      <motion.div
        className="w-[320px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Capabilities</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Key className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <CapabilityItem
            id="CAP-001"
            title="AI Inference — GPT-4o"
            subtitle="AI_INFER · 8,420 / 10,000 units"
            time="Active"
            permType="AI_INFER"
            status="active"
            active
          />
          <CapabilityItem
            id="CAP-002"
            title="Storage — IPFS Cluster"
            subtitle="STORE_BYTES · 2.1 / 5 GB"
            time="Active"
            permType="STORE"
            status="active"
          />
          <CapabilityItem
            id="CAP-003"
            title="Search — Semantic Index"
            subtitle="QUERY_DATA · 45,000 / 50,000"
            time="Active"
            permType="QUERY"
            status="active"
          />
          <CapabilityItem
            id="CAP-004"
            title="Compute — Worker Pool"
            subtitle="COMPUTE · Subscription tier"
            time="Active"
            permType="COMPUTE"
            status="active"
          />
          <CapabilityItem
            id="DEL-001"
            title="Agent Slice — Research Bot"
            subtitle="Delegated · $2.00 budget"
            time="Bounded"
            permType="DELEGATE"
            status="delegated"
          />
          <CapabilityItem
            id="CAP-005"
            title="Embedding — Vector DB"
            subtitle="EMBED · 100,000 / 100,000"
            time="Consumed"
            permType="EMBED"
            status="consumed"
          />
          <CapabilityItem
            id="CAP-006"
            title="Deploy — Smart Contract"
            subtitle="DEPLOY · Expired 2h ago"
            time="Expired"
            permType="DEPLOY"
            status="expired"
          />
          <CapabilityItem
            id="CAP-007"
            title="Stream — Realtime Feed"
            subtitle="STREAM · Revoked by provider"
            time="Revoked"
            permType="STREAM"
            status="revoked"
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Capabilities</span>
            <span className="text-zinc-600">›</span>
            <span className="text-indigo-400">AI Inference — GPT-4o</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">CAP-001</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <h2 className="text-white text-xl font-semibold mb-5">AI Inference — GPT-4o</h2>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Consumed</p>
              <p className="text-white text-lg font-semibold">8,420</p>
              <p className="text-amber-400 text-[10px]">of 10,000 units</p>
            </div>
            <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Nonce</p>
              <p className="text-white text-lg font-semibold">1,247</p>
              <p className="text-emerald-400 text-[10px]">↑ monotonic</p>
            </div>
            <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Lifecycle</p>
              <p className="text-white text-lg font-semibold">Active</p>
              <p className="text-zinc-400 text-[10px]">12d remaining</p>
            </div>
          </div>

          {/* Capability details */}
          <div className="bg-zinc-900/80 rounded-lg p-4 text-[11px] font-mono mb-5 border border-zinc-800/50">
            <div className="space-y-2">
              <div>
                <span className="text-purple-400">id</span>
                <span className="text-zinc-400">: </span>
                <span className="text-cyan-300">0xc4a1...b7f3</span>
              </div>
              <div>
                <span className="text-purple-400">issuer</span>
                <span className="text-zinc-400">: </span>
                <span className="text-cyan-300">0x8e2a...3d91</span>
                <span className="text-zinc-500"> // OpenAI Provider</span>
              </div>
              <div>
                <span className="text-purple-400">owner</span>
                <span className="text-zinc-400">: </span>
                <span className="text-cyan-300">0x1a2b...9f8e</span>
              </div>
              <div>
                <span className="text-purple-400">permission</span>
                <span className="text-zinc-400">: </span>
                <span className="text-emerald-400">&quot;AI_INFER&quot;</span>
              </div>
              <div>
                <span className="text-purple-400">accounting</span>
                <span className="text-zinc-400">{": { "}</span>
                <span className="text-amber-300">total</span>
                <span className="text-zinc-400">: </span>
                <span className="text-amber-300">10000</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">consumed</span>
                <span className="text-zinc-400">: </span>
                <span className="text-amber-300">8420</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">nonce</span>
                <span className="text-zinc-400">: </span>
                <span className="text-amber-300">1247</span>
                <span className="text-zinc-400">{" }"}</span>
              </div>
              <div>
                <span className="text-purple-400">lifecycle</span>
                <span className="text-zinc-400">{": { "}</span>
                <span className="text-amber-300">state</span>
                <span className="text-zinc-400">: </span>
                <span className="text-emerald-400">&quot;ACTIVE&quot;</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">expiry</span>
                <span className="text-zinc-400">: </span>
                <span className="text-emerald-400">&quot;2026-03-05&quot;</span>
                <span className="text-zinc-400">{" }"}</span>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="pt-4 border-t border-zinc-800/50">
            <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">Settlement Activity</div>
            <div className="space-y-3">
              <ActivityItem
                name="Receipt batch"
                action="settled"
                from="342 units"
                to="nonce 1247"
                time="2 hours ago"
              />
              <ActivityItem
                name="Agent delegation"
                action="issued slice"
                from="500 units"
                time="5 hours ago"
              />
              <ActivityItem
                name="Verification"
                action="mutual receipt"
                from="signed by both"
                time="6 hours ago"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
        }`}
    >
      <Icon className={`w-4 h-4 ${color || ""}`} />
      <span className="flex-1 text-xs">{label}</span>
      {badge && (
        <span className="bg-indigo-500/80 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium px-1">
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600" />}
    </div>
  )
}

function CapabilityItem({
  id,
  title,
  subtitle,
  time,
  permType,
  status,
  active,
}: {
  id?: string
  title: string
  subtitle?: string
  time?: string
  permType?: string
  status: string
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    active: "bg-emerald-500",
    delegated: "bg-indigo-500",
    consumed: "bg-amber-500",
    expired: "bg-zinc-500",
    revoked: "bg-red-500",
  }

  const permColors: Record<string, string> = {
    AI_INFER: "text-indigo-400",
    STORE: "text-emerald-400",
    QUERY: "text-cyan-400",
    COMPUTE: "text-purple-400",
    DELEGATE: "text-indigo-400",
    EMBED: "text-amber-400",
    DEPLOY: "text-orange-400",
    STREAM: "text-pink-400",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${active ? "bg-zinc-800/50" : "hover:bg-zinc-800/30"
        }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center shrink-0 mt-0.5">
          <Key className={`w-4 h-4 ${permColors[permType || ""] || "text-indigo-400"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-zinc-500 text-[10px]">{id}</span>}
            <div className={`w-2 h-2 rounded-full ${statusColors[status] || "bg-zinc-500"}`} />
          </div>
          <p className="text-white text-xs truncate leading-tight">{title}</p>
          {subtitle && <p className="text-zinc-500 text-[10px] mt-0.5 truncate">{subtitle}</p>}
        </div>
        {time && <span className="text-zinc-600 text-[10px] shrink-0">{time}</span>}
      </div>
    </div>
  )
}

function ActivityItem({
  name,
  action,
  from,
  to,
  time,
}: {
  name: string
  action: string
  from: string
  to?: string
  time: string
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center">
        <Zap className="w-3 h-3 text-indigo-400" />
      </div>
      <div className="flex-1">
        <p className="text-zinc-400 text-xs">
          <span className="text-white">{name}</span>
          <span className="text-zinc-500"> {action} </span>
          <span className="text-zinc-300">{from}</span>
          {to && (
            <>
              <span className="text-zinc-500"> → </span>
              <span className="text-zinc-300">{to}</span>
            </>
          )}
        </p>
        <p className="text-zinc-600 text-[10px] mt-0.5">{time}</p>
      </div>
    </div>
  )
}
