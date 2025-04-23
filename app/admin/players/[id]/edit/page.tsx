"use client"

import { SelectLabel } from "@/components/ui/select"

import { SelectGroup } from "@/components/ui/select"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Helper function to format class name for display
const formatClassName = (className: string) => {
  const year = className.charAt(0)
  const section = className.charAt(1) === "t" ? "ITI" : "IPI"
  const group = className.charAt(2)
  return `${year}${section}-${group.toUpperCase()}`
}

// Mock data - would come from your database
const playerData = {
  id: 1,
  name: "Alex Johnson",
  position: "GK",
  class: "1ta",
  grade: "9th",
  points: 43,
  price: 5.0,
  status: "active",
  bio: "Team captain with excellent reflexes and leadership skills.",
  stats: {
    appearances: 12,
    goals: 0,
    assists: 0,
    cleanSheets: 5,
    saves: 42,
    yellowCards: 1,
    redCards: 0,
  },
}

// Generate class options
const classOptions = []
for (let year = 1; year <= 4; year++) {
  for (const section of ["t", "p"]) {
    for (const group of ["a", "b", "c"]) {
      classOptions.push(`${year}${section}${group}`)
    }
  }
}

export default function EditPlayerPage({ params }: { params: { id: string } }) {
  const [player, setPlayer] = useState(playerData)
  const [stats, setStats] = useState(playerData.stats)

  const handleChange = (field: string, value: any) => {
    setPlayer({ ...player, [field]: value })
  }

  const handleStatsChange = (field: string, value: any) => {
    setStats({ ...stats, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save changes to the database
    const updatedPlayer = { ...player, stats }
    console.log("Saving player:", updatedPlayer)
    // Redirect to players page
    window.location.href = "/admin/players"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/players">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Edit Player</h1>
        </div>
        <Button className="bg-green-800 hover:bg-green-700" onClick={handleSubmit}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>

      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Player Details</TabsTrigger>
          <TabsTrigger value="stats">Player Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Player Information</CardTitle>
                <CardDescription>Edit the player's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Player Name</Label>
                    <Input
                      id="name"
                      value={player.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Select value={player.position} onValueChange={(value) => handleChange("position", value)}>
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GK">Goalkeeper</SelectItem>
                        <SelectItem value="DEF">Defender</SelectItem>
                        <SelectItem value="MID">Midfielder</SelectItem>
                        <SelectItem value="FWD">Forward</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Select value={player.class} onValueChange={(value) => handleChange("class", value)}>
                      <SelectTrigger id="class">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>1st Year ITI</SelectLabel>
                          <SelectItem value="1ta">1ITI-A</SelectItem>
                          <SelectItem value="1tb">1ITI-B</SelectItem>
                          <SelectItem value="1tc">1ITI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>1st Year IPI</SelectLabel>
                          <SelectItem value="1pa">1IPI-A</SelectItem>
                          <SelectItem value="1pb">1IPI-B</SelectItem>
                          <SelectItem value="1pc">1IPI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>2nd Year ITI</SelectLabel>
                          <SelectItem value="2ta">2ITI-A</SelectItem>
                          <SelectItem value="2tb">2ITI-B</SelectItem>
                          <SelectItem value="2tc">2ITI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>2nd Year IPI</SelectLabel>
                          <SelectItem value="2pa">2IPI-A</SelectItem>
                          <SelectItem value="2pb">2IPI-B</SelectItem>
                          <SelectItem value="2pc">2IPI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>3rd Year ITI</SelectLabel>
                          <SelectItem value="3ta">3ITI-A</SelectItem>
                          <SelectItem value="3tb">3ITI-B</SelectItem>
                          <SelectItem value="3tc">3ITI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>3rd Year IPI</SelectLabel>
                          <SelectItem value="3pa">3IPI-A</SelectItem>
                          <SelectItem value="3pb">3IPI-B</SelectItem>
                          <SelectItem value="3pc">3IPI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>4th Year ITI</SelectLabel>
                          <SelectItem value="4ta">4ITI-A</SelectItem>
                          <SelectItem value="4tb">4ITI-B</SelectItem>
                          <SelectItem value="4tc">4ITI-C</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>4th Year IPI</SelectLabel>
                          <SelectItem value="4pa">4IPI-A</SelectItem>
                          <SelectItem value="4pb">4IPI-B</SelectItem>
                          <SelectItem value="4pc">4IPI-C</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade</Label>
                    <Select value={player.grade} onValueChange={(value) => handleChange("grade", value)}>
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9th">9th Grade</SelectItem>
                        <SelectItem value="10th">10th Grade</SelectItem>
                        <SelectItem value="11th">11th Grade</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (in $M)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.1"
                      min="4.0"
                      max="15.0"
                      value={player.price}
                      onChange={(e) => handleChange("price", Number.parseFloat(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={player.status} onValueChange={(value) => handleChange("status", value)}>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="injured">Injured</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                        <SelectItem value="unavailable">Unavailable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Player Bio</Label>
                  <Textarea
                    id="bio"
                    value={player.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/players">Cancel</Link>
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Player Statistics</CardTitle>
              <CardDescription>Update the player's performance statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appearances">Appearances</Label>
                  <Input
                    id="appearances"
                    type="number"
                    min="0"
                    value={stats.appearances}
                    onChange={(e) => handleStatsChange("appearances", Number.parseInt(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Goals</Label>
                  <Input
                    id="goals"
                    type="number"
                    min="0"
                    value={stats.goals}
                    onChange={(e) => handleStatsChange("goals", Number.parseInt(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assists">Assists</Label>
                  <Input
                    id="assists"
                    type="number"
                    min="0"
                    value={stats.assists}
                    onChange={(e) => handleStatsChange("assists", Number.parseInt(e.target.value))}
                  />
                </div>

                {player.position === "GK" && (
                  <div className="space-y-2">
                    <Label htmlFor="saves">Saves</Label>
                    <Input
                      id="saves"
                      type="number"
                      min="0"
                      value={stats.saves}
                      onChange={(e) => handleStatsChange("saves", Number.parseInt(e.target.value))}
                    />
                  </div>
                )}

                {(player.position === "GK" || player.position === "DEF") && (
                  <div className="space-y-2">
                    <Label htmlFor="cleanSheets">Clean Sheets</Label>
                    <Input
                      id="cleanSheets"
                      type="number"
                      min="0"
                      value={stats.cleanSheets}
                      onChange={(e) => handleStatsChange("cleanSheets", Number.parseInt(e.target.value))}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="yellowCards">Yellow Cards</Label>
                  <Input
                    id="yellowCards"
                    type="number"
                    min="0"
                    value={stats.yellowCards}
                    onChange={(e) => handleStatsChange("yellowCards", Number.parseInt(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="redCards">Red Cards</Label>
                  <Input
                    id="redCards"
                    type="number"
                    min="0"
                    value={stats.redCards}
                    onChange={(e) => handleStatsChange("redCards", Number.parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium mb-2">Fantasy Points Calculation</h3>
                <div className="text-sm text-gray-600">
                  <p>Based on current stats, this player has earned:</p>
                  <div className="mt-2 font-medium text-lg">{player.points} points</div>
                  <p className="mt-2 text-xs">
                    Note: Points are automatically calculated based on the player's statistics and position according to
                    the league's scoring rules.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/admin/players">Cancel</Link>
              </Button>
              <Button className="bg-green-800 hover:bg-green-700" onClick={handleSubmit}>
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
