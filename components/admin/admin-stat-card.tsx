import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface AdminStatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  description: string
  icon: LucideIcon
}

export function AdminStatCard({ title, value, change, trend, description, icon: Icon }: AdminStatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-500">{title}</div>
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <Icon className="h-4 w-4 text-green-800" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline">
          <div className="text-3xl font-bold">{value}</div>
          <div
            className={`ml-2 flex items-center text-sm ${
              trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-500"
            }`}
          >
            {trend === "up" ? (
              <TrendingUp className="mr-1 h-3 w-3" />
            ) : trend === "down" ? (
              <TrendingDown className="mr-1 h-3 w-3" />
            ) : (
              <Minus className="mr-1 h-3 w-3" />
            )}
            {change}
          </div>
        </div>
        <div className="mt-1 text-xs text-gray-500">{description}</div>
      </CardContent>
    </Card>
  )
}
