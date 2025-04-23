import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart2,
  Calendar,
  Flag,
  Trophy,
  Users,
  UserCircle,
  BellIcon as Whistle,
  TrendingUp,
  TrendingDown,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdminStatCard } from "@/components/admin/admin-stat-card"
import { AdminActivityFeed } from "@/components/admin/admin-activity-feed"
import { AdminLeagueOverview } from "@/components/admin/admin-league-overview"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">Export Data</Button>
          <Button className="bg-green-800 hover:bg-green-700">New League</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard
          title="Total Users"
          value="342"
          change="+12%"
          trend="up"
          description="vs. last month"
          icon={Users}
        />
        <AdminStatCard
          title="Active Teams"
          value="287"
          change="+8%"
          trend="up"
          description="vs. last month"
          icon={Trophy}
        />
        <AdminStatCard
          title="Upcoming Matches"
          value="18"
          change="0"
          trend="neutral"
          description="this week"
          icon={Calendar}
        />
        <AdminStatCard
          title="Issues Reported"
          value="5"
          change="-2"
          trend="down"
          description="vs. last week"
          icon={Flag}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>League Overview</CardTitle>
            <CardDescription>Performance metrics across all leagues</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminLeagueOverview />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminActivityFeed />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/admin/players/new">
                <Button variant="outline" className="w-full justify-start">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Add Player
                </Button>
              </Link>
              <Link href="/admin/matches/new">
                <Button variant="outline" className="w-full justify-start">
                  <Whistle className="mr-2 h-4 w-4" />
                  Record Match
                </Button>
              </Link>
              <Link href="/admin/statistics">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  View Stats
                </Button>
              </Link>
              <Link href="/admin/reports">
                <Button variant="outline" className="w-full justify-start">
                  <Flag className="mr-2 h-4 w-4" />
                  View Reports
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="font-medium">Upcoming Deadline</p>
                  <p className="text-sm text-gray-600">League registration closes in 2 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-md">
                <TrendingDown className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Low Participation</p>
                  <p className="text-sm text-gray-600">10th Grade League has 30% fewer teams than expected</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">High Engagement</p>
                  <p className="text-sm text-gray-600">Teachers League has 95% active participation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
