"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Mock data - would come from your database
const leagueParticipation = [
  { name: "9th Grade", value: 82, fill: "#047857" },
  { name: "10th Grade", value: 68, fill: "#10b981" },
  { name: "11th-12th Grade", value: 94, fill: "#34d399" },
  { name: "Teachers", value: 43, fill: "#6ee7b7" },
]

const weeklyActivity = [
  { week: "Week 1", users: 245, teams: 210, transfers: 180 },
  { week: "Week 2", users: 285, teams: 230, transfers: 320 },
  { week: "Week 3", users: 310, teams: 250, transfers: 280 },
  { week: "Week 4", users: 290, teams: 240, transfers: 350 },
  { week: "Week 5", users: 315, teams: 260, transfers: 290 },
  { week: "Week 6", users: 340, teams: 280, transfers: 410 },
  { week: "Week 7", users: 360, teams: 290, transfers: 380 },
  { week: "Week 8", users: 330, teams: 270, transfers: 340 },
]

const topPlayers = [
  { name: "Oliver Rodriguez", points: 84, teams: 68, price: 8.5 },
  { name: "Liam Garcia", points: 71, teams: 52, price: 7.2 },
  { name: "Daniel Wilson", points: 63, teams: 45, price: 6.8 },
  { name: "William Hernandez", points: 56, teams: 38, price: 6.3 },
  { name: "Ethan Brown", points: 52, teams: 30, price: 5.5 },
]

export default function StatisticsPage() {
  const [timeframe, setTimeframe] = useState("season")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Statistics & Analytics</h1>
        <div className="flex items-center gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="season">Full Season</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>Active fantasy team managers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">342</div>
            <div className="text-sm text-green-600 mt-1">+12% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Teams</CardTitle>
            <CardDescription>Registered fantasy teams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">287</div>
            <div className="text-sm text-green-600 mt-1">+8% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Points</CardTitle>
            <CardDescription>Per team across all leagues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">312</div>
            <div className="text-sm text-green-600 mt-1">+5% from last month</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="players">Players</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>League Participation</CardTitle>
                <CardDescription>Distribution of teams by league</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={leagueParticipation}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        dataKey="value"
                      />
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>User engagement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="users" stroke="#047857" name="Active Users" />
                      <Line type="monotone" dataKey="teams" stroke="#10b981" name="Active Teams" />
                      <Line type="monotone" dataKey="transfers" stroke="#34d399" name="Transfers Made" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Engagement Metrics</CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#047857" name="Active Users" />
                    <Bar dataKey="teams" fill="#10b981" name="Active Teams" />
                    <Bar dataKey="transfers" fill="#34d399" name="Transfers Made" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="players" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Players</CardTitle>
              <CardDescription>Most selected and highest scoring players</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topPlayers}
                    layout="vertical"
                    margin={{
                      top: 20,
                      right: 30,
                      left: 70,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="points" fill="#047857" name="Total Points" />
                    <Bar dataKey="teams" fill="#10b981" name="% Teams Selected" />
                    <Bar dataKey="price" fill="#34d399" name="Price (in $M)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
