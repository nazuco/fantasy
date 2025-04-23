"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data - would come from your database
const data = [
  {
    name: "9th Grade",
    teams: 82,
    activeUsers: 78,
    avgPoints: 245,
  },
  {
    name: "10th Grade",
    teams: 68,
    activeUsers: 62,
    avgPoints: 312,
  },
  {
    name: "11th-12th",
    teams: 94,
    activeUsers: 89,
    avgPoints: 356,
  },
  {
    name: "Teachers",
    teams: 43,
    activeUsers: 41,
    avgPoints: 287,
  },
]

export function AdminLeagueOverview() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="teams" fill="#047857" name="Total Teams" />
          <Bar dataKey="activeUsers" fill="#10b981" name="Active Users" />
          <Bar dataKey="avgPoints" fill="#34d399" name="Avg. Points" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
