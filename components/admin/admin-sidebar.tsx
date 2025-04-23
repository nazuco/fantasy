"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart2,
  Calendar,
  Flag,
  Home,
  Settings,
  Shield,
  Trophy,
  Users,
  UserCircle,
  BellIcon as Whistle,
} from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Leagues", href: "/admin/leagues", icon: Trophy },
    { name: "Players", href: "/admin/players", icon: UserCircle },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Matches", href: "/admin/matches", icon: Whistle },
    { name: "Statistics", href: "/admin/statistics", icon: BarChart2 },
    { name: "Schedule", href: "/admin/schedule", icon: Calendar },
    { name: "Reports", href: "/admin/reports", icon: Flag },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] bg-white border-r">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6 px-2">
          <Shield className="h-5 w-5 text-green-800" />
          <span className="font-semibold">Admin Controls</span>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                  isActive(item.href) ? "bg-green-50 text-green-800 font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
