"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/admin/date-picker"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save } from "lucide-react"

// Mock data - would come from your database
const leagueData = {
  id: 1,
  name: "9th Grade League",
  description: "Fantasy soccer league for 9th grade students",
  status: "active",
  startDate: new Date("2023-09-05"),
  endDate: new Date("2024-05-15"),
  maxTeams: 100,
  visibility: "public",
  allowTransfers: true,
  transfersPerWeek: 1,
  pointsPerWin: 3,
  pointsPerDraw: 1,
  pointsPerLoss: 0,
}

export default function EditLeaguePage({ params }: { params: { id: string } }) {
  const [league, setLeague] = useState(leagueData)

  const handleChange = (field: string, value: any) => {
    setLeague({ ...league, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save changes to the database
    console.log("Saving league:", league)
    // Redirect to league details page
    window.location.href = `/admin/leagues/${params.id}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/leagues">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Edit League</h1>
        </div>
        <Button className="bg-green-800 hover:bg-green-700" onClick={handleSubmit}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Edit the league's core details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">League Name</Label>
                <Input id="name" value={league.name} onChange={(e) => handleChange("name", e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={league.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={league.status} onValueChange={(value) => handleChange("status", value)}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="visibility">Visibility</Label>
                <Select value={league.visibility} onValueChange={(value) => handleChange("visibility", value)}>
                  <SelectTrigger id="visibility">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxTeams">Maximum Teams</Label>
                <Input
                  id="maxTeams"
                  type="number"
                  value={league.maxTeams}
                  onChange={(e) => handleChange("maxTeams", Number.parseInt(e.target.value))}
                  min={1}
                />
                <p className="text-xs text-gray-500">Each team has 7 players (plus bench)</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule & Rules</CardTitle>
              <CardDescription>Set the league timeline and scoring rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <DatePicker date={league.startDate} setDate={(date) => handleChange("startDate", date)} />
              </div>

              <div className="space-y-2">
                <Label>End Date</Label>
                <DatePicker date={league.endDate} setDate={(date) => handleChange("endDate", date)} />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pointsPerWin">Points Per Win</Label>
                  <Input
                    id="pointsPerWin"
                    type="number"
                    value={league.pointsPerWin}
                    onChange={(e) => handleChange("pointsPerWin", Number.parseInt(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pointsPerDraw">Points Per Draw</Label>
                  <Input
                    id="pointsPerDraw"
                    type="number"
                    value={league.pointsPerDraw}
                    onChange={(e) => handleChange("pointsPerDraw", Number.parseInt(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pointsPerLoss">Points Per Loss</Label>
                  <Input
                    id="pointsPerLoss"
                    type="number"
                    value={league.pointsPerLoss}
                    onChange={(e) => handleChange("pointsPerLoss", Number.parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="allowTransfers">Allow Transfers</Label>
                <Switch
                  id="allowTransfers"
                  checked={league.allowTransfers}
                  onCheckedChange={(checked) => handleChange("allowTransfers", checked)}
                />
              </div>

              {league.allowTransfers && (
                <div className="space-y-2">
                  <Label htmlFor="transfersPerWeek">Transfers Per Week</Label>
                  <Input
                    id="transfersPerWeek"
                    type="number"
                    value={league.transfersPerWeek}
                    onChange={(e) => handleChange("transfersPerWeek", Number.parseInt(e.target.value))}
                    min={1}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
            <CardDescription>Destructive actions for this league</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-md bg-red-50">
              <div>
                <h3 className="font-medium text-red-800">Reset League</h3>
                <p className="text-sm text-red-600">
                  This will reset all teams, points, and standings. This action cannot be undone.
                </p>
              </div>
              <Button variant="destructive">Reset League</Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-red-200 rounded-md bg-red-50">
              <div>
                <h3 className="font-medium text-red-800">Delete League</h3>
                <p className="text-sm text-red-600">
                  This will permanently delete the league and all associated data. This action cannot be undone.
                </p>
              </div>
              <Button variant="destructive">Delete League</Button>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/leagues">Cancel</Link>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
