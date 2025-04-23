"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PencilIcon } from "lucide-react"

// Update the mockTeam data to use class instead of school
const mockTeam = {
  name: "Dream Team FC",
  formation: "2-3-1",
  players: [
    { id: 1, name: "Alex Johnson", position: "GK", class: "1ta", points: 5 },
    { id: 2, name: "Marcus Lee", position: "DEF", class: "1tb", points: 7 },
    { id: 3, name: "Jacob Williams", position: "DEF", class: "2ta", points: 2 },
    { id: 4, name: "Daniel Wilson", position: "MID", class: "3tb", points: 8 },
    { id: 5, name: "Anthony Martinez", position: "MID", class: "1pa", points: 3 },
    { id: 6, name: "Liam Garcia", position: "MID", class: "1pb", points: 9 },
    { id: 7, name: "Oliver Rodriguez", position: "FWD", class: "2pa", points: 12 },
    { id: 12, name: "Benjamin Gonzalez", position: "GK", class: "3pb", points: 2, bench: true },
    { id: 13, name: "Samuel Perez", position: "DEF", class: "4ta", points: 0, bench: true },
    { id: 14, name: "Henry Sanchez", position: "MID", class: "4tb", points: 1, bench: true },
  ],
}

// Helper function to format class name for display
const formatClassName = (className: string) => {
  const year = className.charAt(0)
  const section = className.charAt(1) === "t" ? "ITI" : "IPI"
  const group = className.charAt(2)
  return `${year}${section}-${group.toUpperCase()}`
}

export function UserFantasyTeam() {
  const [view, setView] = useState<"lineup" | "list">("lineup")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{mockTeam.name}</CardTitle>
          <p className="text-sm text-gray-500">Formation: {mockTeam.formation}</p>
        </div>
        <Button variant="outline" size="sm">
          <PencilIcon className="h-4 w-4 mr-2" />
          Edit Team
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pitch" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="pitch">Pitch View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="pitch">
            <div className="relative bg-green-100 aspect-[16/10] rounded-md overflow-hidden">
              {/* Soccer field visualization */}
              <div className="absolute inset-0 bg-green-800/10">
                {/* Center line */}
                <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white/70 transform -translate-x-1/2" />
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 h-24 w-24 rounded-full border-2 border-white/70 transform -translate-x-1/2 -translate-y-1/2" />
                {/* Penalty areas */}
                <div className="absolute top-1/2 left-0 h-48 w-16 border-2 border-l-0 border-white/70 transform -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 h-48 w-16 border-2 border-r-0 border-white/70 transform -translate-y-1/2" />
              </div>

              {/* Goalkeeper */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <PlayerIcon player={mockTeam.players.find((p) => p.position === "GK" && !p.bench)!} />
              </div>

              {/* Defenders */}
              <div className="absolute bottom-1/4 left-0 right-0 flex justify-around">
                {mockTeam.players
                  .filter((p) => p.position === "DEF" && !p.bench)
                  .map((player) => (
                    <PlayerIcon key={player.id} player={player} />
                  ))}
              </div>

              {/* Midfielders */}
              <div className="absolute bottom-1/2 left-0 right-0 flex justify-around">
                {mockTeam.players
                  .filter((p) => p.position === "MID" && !p.bench)
                  .map((player) => (
                    <PlayerIcon key={player.id} player={player} />
                  ))}
              </div>

              {/* Forwards */}
              <div className="absolute bottom-3/4 left-0 right-0 flex justify-around">
                {mockTeam.players
                  .filter((p) => p.position === "FWD" && !p.bench)
                  .map((player) => (
                    <PlayerIcon key={player.id} player={player} />
                  ))}
              </div>
            </div>

            {/* Bench players */}
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Bench</h3>
              <div className="grid grid-cols-4 gap-2">
                {mockTeam.players
                  .filter((p) => p.bench)
                  .map((player) => (
                    <div key={player.id} className="text-center">
                      <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-1">
                        <span className="text-xs font-medium">{player.position.substring(0, 1)}</span>
                      </div>
                      <span className="text-xs block truncate">{player.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="list">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Player</th>
                    <th className="text-left pb-2">Position</th>
                    <th className="text-left pb-2">Class</th>
                    <th className="text-right pb-2">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTeam.players.map((player) => (
                    <tr key={player.id} className="border-b last:border-0">
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span>{player.name}</span>
                          {player.bench && <span className="text-xs text-gray-500">(Bench)</span>}
                        </div>
                      </td>
                      <td className="py-2">{player.position}</td>
                      <td className="py-2">{formatClassName(player.class)}</td>
                      <td className="text-right py-2">{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function PlayerIcon({ player }: { player: (typeof mockTeam.players)[0] }) {
  const positionColors = {
    GK: "bg-yellow-500",
    DEF: "bg-blue-500",
    MID: "bg-green-500",
    FWD: "bg-red-500",
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${positionColors[player.position as keyof typeof positionColors]} h-10 w-10 rounded-full flex items-center justify-center text-white`}
      >
        {player.position.substring(0, 1)}
      </div>
      <div className="mt-1 text-xs font-medium bg-white/90 px-1 rounded max-w-20 truncate text-center">
        {player.name.split(" ")[0]}
      </div>
    </div>
  )
}
