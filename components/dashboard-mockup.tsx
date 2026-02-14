"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  CreditCard,
  Layers,
  Settings,
  Users,
  Wallet,
  ChevronDown,
  ChevronRight,
  Hexagon,
  Search,
  Plus,
  Link2,
  MoreHorizontal,
  Zap,
  HelpCircle,
  Shield,
  Globe,
  Bot,
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
          <NavItem icon={CreditCard} label="Subscriptions" badge={12} />
        </div>

        {/* Billing section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Billing
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Wallet} label="Payments" hasSubmenu />
            <NavItem icon={Layers} label="Plans" hasSubmenu />
            <NavItem icon={Zap} label="Metering" hasSubmenu />
            <NavItem icon={Shield} label="Entitlements" hasSubmenu />
          </div>
        </div>

        {/* Integrations section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            AI & Agents
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Bot} label="Payment MCP" color="text-indigo-400" />
            <NavItem icon={Users} label="A2A Payments" color="text-emerald-400" />
            <NavItem icon={Globe} label="Multi-Chain" color="text-orange-400" />
          </div>
        </div>

        {/* Chains section */}
        <div className="mt-5 px-3 flex-1">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Chains
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Hexagon} label="Ethereum" hasSubmenu />
            <NavItem icon={Hexagon} label="Base" hasSubmenu />
            <NavItem icon={Hexagon} label="Polygon" hasSubmenu />
          </div>
        </div>

        {/* Bottom */}
        <div className="p-3 border-t border-zinc-800/50">
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={HelpCircle} label="Documentation" />
        </div>
      </motion.div>

      {/* Subscriptions List */}
      <motion.div
        className="w-[320px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Subscriptions</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <SubscriptionItem
            id="SUB-001"
            title="DeFi Protocol Alpha"
            subtitle="Pro Plan · 500 USDC/mo"
            time="Active"
            chain="Ethereum"
            status="active"
            active
          />
          <SubscriptionItem
            id="SUB-002"
            title="AI Agent Swarm"
            subtitle="A2A Plan · Usage-based"
            time="Active"
            chain="Base"
            status="active"
          />
          <SubscriptionItem
            id="SUB-003"
            title="NFT Marketplace"
            subtitle="Enterprise · 2,000 USDC/mo"
            time="Active"
            chain="Polygon"
            status="active"
          />
          <SubscriptionItem
            id="SUB-004"
            title="DAO Governance Tool"
            subtitle="Starter · 50 USDC/mo"
            time="Trial"
            chain="Arbitrum"
            status="trial"
          />
          <SubscriptionItem
            id="SUB-005"
            title="GameFi Studio"
            subtitle="Pro Plan · 500 USDC/mo"
            time="Churned"
            chain="Base"
            status="churned"
          />
          <SubscriptionItem
            id="SUB-006"
            title="Data Oracle Network"
            subtitle="Credit Model · Pay-per-query"
            time="Active"
            chain="Ethereum"
            status="active"
          />
          <SubscriptionItem
            id="SUB-007"
            title="Web3 Social App"
            subtitle="Growth · 200 USDC/mo"
            time="Active"
            chain="Polygon"
            status="active"
          />
          <SubscriptionItem
            id="MCP-001"
            title="Claude Agent Billing"
            subtitle="MCP Auto · 0.002 USDC/call"
            time="Active"
            chain="Base"
            status="active"
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Subscriptions</span>
            <span className="text-zinc-600">›</span>
            <span className="text-indigo-400">DeFi Protocol Alpha</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">SUB-001</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <h2 className="text-white text-xl font-semibold mb-5">DeFi Protocol Alpha</h2>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">MRR</p>
              <p className="text-white text-lg font-semibold">$24,500</p>
              <p className="text-emerald-400 text-[10px]">↑ 12.5%</p>
            </div>
            <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">API Calls</p>
              <p className="text-white text-lg font-semibold">1.2M</p>
              <p className="text-emerald-400 text-[10px]">↑ 8.3%</p>
            </div>
            <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/50">
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Active Chains</p>
              <p className="text-white text-lg font-semibold">6</p>
              <p className="text-zinc-400 text-[10px]">EVM chains</p>
            </div>
          </div>

          {/* Plan details */}
          <div className="bg-zinc-900/80 rounded-lg p-4 text-[11px] font-mono mb-5 border border-zinc-800/50">
            <div className="space-y-2">
              <div>
                <span className="text-purple-400">plan</span>
                <span className="text-zinc-400">: </span>
                <span className="text-emerald-400">"Pro"</span>
              </div>
              <div>
                <span className="text-purple-400">price</span>
                <span className="text-zinc-400">: </span>
                <span className="text-amber-300">500</span>
                <span className="text-zinc-500"> // USDC per month</span>
              </div>
              <div>
                <span className="text-purple-400">chain</span>
                <span className="text-zinc-400">: </span>
                <span className="text-emerald-400">"ethereum"</span>
              </div>
              <div>
                <span className="text-purple-400">features</span>
                <span className="text-zinc-400">: [</span>
                <span className="text-emerald-400">"api_access"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-emerald-400">"webhooks"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-emerald-400">"analytics"</span>
                <span className="text-zinc-400">]</span>
              </div>
              <div>
                <span className="text-purple-400">metering</span>
                <span className="text-zinc-400">: {"{"} </span>
                <span className="text-amber-300">api_calls</span>
                <span className="text-zinc-400">: </span>
                <span className="text-amber-300">100000</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">seats</span>
                <span className="text-zinc-400">: </span>
                <span className="text-amber-300">25</span>
                <span className="text-zinc-400"> {"}"}</span>
              </div>
              <div>
                <span className="text-purple-400">wallet</span>
                <span className="text-zinc-400">: </span>
                <span className="text-cyan-300">0x1a2b...9f8e</span>
              </div>
            </div>
          </div>

          {/* Meta actions */}
          <div className="space-y-2 text-sm mb-5">
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add entitlement override</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
              <Link2 className="w-4 h-4" />
              <span>View on-chain transaction</span>
            </div>
          </div>

          {/* Activity */}
          <div className="pt-4 border-t border-zinc-800/50">
            <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">Payment Activity</div>
            <div className="space-y-3">
              <ActivityItem
                name="Auto-renewal"
                action="charged"
                from="500 USDC"
                to="via Ethereum"
                time="2 days ago"
              />
              <ActivityItem
                name="MCP Agent"
                action="checked entitlement"
                from="api_access"
                time="5 hours ago"
              />
              <ActivityItem
                name="Usage meter"
                action="recorded"
                from="12,340 API calls"
                time="1 hour ago"
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
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
        active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
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

function SubscriptionItem({
  id,
  title,
  subtitle,
  time,
  chain,
  status,
  active,
}: {
  id?: string
  title: string
  subtitle?: string
  time?: string
  chain?: string
  status: string
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    active: "bg-emerald-500",
    trial: "bg-amber-500",
    churned: "bg-red-500",
    paused: "bg-zinc-500",
  }

  const chainColors: Record<string, string> = {
    Ethereum: "text-blue-400",
    Base: "text-indigo-400",
    Polygon: "text-purple-400",
    Arbitrum: "text-cyan-400",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/50" : "hover:bg-zinc-800/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center shrink-0 mt-0.5">
          <Hexagon className="w-4 h-4 text-indigo-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-zinc-500 text-[10px]">{id}</span>}
            {chain && <span className={`text-[10px] ${chainColors[chain] || "text-zinc-400"}`}>{chain}</span>}
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
