"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/admin/date-picker"
import { ArrowLeft, Save } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - would come from your database
const matchData = {
  id: 3,
  homeTeam: "East High",
  awayTeam: "Central Prep",
  date: new Date("2024-02-22"),
  time: "15:30",
  location: "East Field",
  status: "upcoming",
  homeScore: null,
  awayScore: null,
  notes: "",
}

const schools = [
  "West High",
  "East High",
  "North Academy",
  "South High",
  "Central Prep",
  "Valley School",
  "Mountain View",
  "Riverside HS",
]

const locations = [
  "West Field",
  "East Field",
  "North Stadium",
  "South Stadium",
  "Central Stadium",
  "Valley Field",
  "Mountain View Field",
  "Riverside Stadium",
]

export default function EditMatchPage({ params }: { params: { id: string } }) {
  const [match, setMatch] = useState(matchData)
  const [activeTab, setActiveTab] = useState("details")

  const handleChange = (field: string, value: any) => {
    setMatch({ ...match, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save changes to the database
    console.log("Saving match:", match)
    // Redirect to matches page
    window.location.href = "/admin/matches"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/matches">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Edit Match</h1>
        </div>
        <Button className="bg-green-800 hover:bg-green-700" onClick={handleSubmit}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="details">Match Details</TabsTrigger>
          <TabsTrigger value="results" disabled={match.status !== "completed"}>
            Match Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Match Information</CardTitle>
                <CardDescription>Edit the details of this match</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="homeTeam">Home Team</Label>
                    <Select value={match.homeTeam} onValueChange={(value) => handleChange("homeTeam", value)}>
                      <SelectTrigger id="homeTeam">
                        <SelectValue placeholder="Select home team" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school} value={school}>
                            {school}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="awayTeam">Away Team</Label>
                    <Select value={match.awayTeam} onValueChange={(value) => handleChange("awayTeam", value)}>
                      <SelectTrigger id="awayTeam">
                        <SelectValue placeholder="Select away team" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school} value={school}>
                            {school}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Match Date</Label>
                    <DatePicker date={match.date} setDate={(date) => handleChange("date", date)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Match Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={match.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select value={match.location} onValueChange={(value) => handleChange("location", value)}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={match.status}
                    onValueChange={(value) => {
                      handleChange("status", value)
                      if (value === "completed") {
                        setActiveTab("results")
                      }
                    }}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="postponed">Postponed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/matches">Cancel</Link>
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Match Results</CardTitle>
              <CardDescription>Record the final score and match statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-md">
                <div className="text-xl font-medium mb-4">Final Score</div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-medium mb-2">{match.homeTeam}</div>
                    <Input
                      type="number"
                      min={0}
                      className="w-16 text-center text-xl"
                      value={match.homeScore || ""}
                      onChange={(e) => handleChange("homeScore", Number.parseInt(e.target.value))}
                    />
                  </div>
                  <div className="text-2xl font-bold">-</div>
                  <div className="text-center">
                    <div className="font-medium mb-2">{match.awayTeam}</div>
                    <Input
                      type="number"
                      min={0}
                      className="w-16 text-center text-xl"
                      value={match.awayScore || ""}
                      onChange={(e) => handleChange("awayScore", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Match Notes</Label>
                <textarea
                  id="notes"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Enter any notable events, player performances, or other match details..."
                  value={match.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-green-800 hover:bg-green-700" onClick={handleSubmit}>
                  Save Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
