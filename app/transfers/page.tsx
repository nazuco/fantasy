"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusIcon, MinusCircle, Search, ArrowRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Helper function to format class name for display
const formatClassName = (className: string) => {
  const year = className.charAt(0)
  const section = className.charAt(1) === "t" ? "ITI" : "IPI"
  const group = className.charAt(2)
  return `${year}${section}-${group.toUpperCase()}`
}

// Mock data - would come from your database
const mockSquad = [
  { id: 1, name: "Alex Johnson", position: "GK", class: "1ta", points: 43, price: 5.0, selected: true },
  { id: 2, name: "Marcus Lee", position: "DEF", class: "1tb", points: 37, price: 4.5, selected: true },
  { id: 3, name: "Jacob Williams", position: "DEF", class: "2ta", points: 28, price: 4.0, selected: true },
  { id: 6, name: "Daniel Wilson", position: "MID", class: "3tb", points: 63, price: 6.8, selected: true },
  { id: 7, name: "Anthony Martinez", position: "MID", class: "1pa", points: 42, price: 5.7, selected: true },
  { id: 8, name: "Liam Garcia", position: "MID", class: "1pb", points: 71, price: 7.2, selected: true },
  { id: 9, name: "Oliver Rodriguez", position: "FWD", class: "2pa", points: 84, price: 8.5, selected: true },
  { id: 12, name: "Benjamin Gonzalez", position: "GK", class: "3pb", points: 38, price: 4.8, selected: false },
  { id: 13, name: "Samuel Perez", position: "DEF", class: "4ta", points: 27, price: 4.1, selected: false },
  { id: 14, name: "Henry Sanchez", position: "MID", class: "4tb", points: 59, price: 6.4, selected: false },
]

const availablePlayers = [
  { id: 101, name: "Michael Parker", position: "GK", class: "2tc", points: 51, price: 5.2, form: "↑" },
  { id: 102, name: "Robert Chen", position: "DEF", class: "3tc", points: 45, price: 4.8, form: "→" },
  { id: 103, name: "Kevin Wong", position: "DEF", class: "4tc", points: 32, price: 4.3, form: "↓" },
  { id: 104, name: "Tyler Adams", position: "MID", class: "2pc", points: 68, price: 6.9, form: "↑" },
  { id: 105, name: "Brandon Collins", position: "MID", class: "3pc", points: 74, price: 7.5, form: "↑" },
  { id: 106, name: "Carlos Rodriguez", position: "FWD", class: "4pc", points: 89, price: 8.8, form: "↑" },
  { id: 107, name: "Jason Smith", position: "FWD", class: "1tc", points: 61, price: 6.5, form: "→" },
]

export default function TransfersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [transfers, setTransfers] = useState<Array<{ out: number; in: number }>>([])
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)

  const transfersRemaining = 2 - transfers.length
  const squadPlayers = mockSquad.map((player) => {
    const isTransferOut = transfers.some((t) => t.out === player.id)
    return { ...player, isTransferOut }
  })

  const availablePlayersFiltered = availablePlayers.filter((player) => {
    const alreadyInSquad = mockSquad.some((p) => p.id === player.id)
    const alreadyTransferredIn = transfers.some((t) => t.in === player.id)
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatClassName(player.class).toLowerCase().includes(searchTerm.toLowerCase())

    return !alreadyInSquad && !alreadyTransferredIn && matchesSearch
  })

  const handleSelectPlayer = (playerId: number) => {
    setSelectedPlayer(playerId)
  }

  const handleTransferOut = (playerId: number) => {
    setSelectedPlayer(playerId)
  }

  const handleTransferIn = (inPlayerId: number) => {
    if (selectedPlayer && transfersRemaining > 0) {
      setTransfers([...transfers, { out: selectedPlayer, in: inPlayerId }])
      setSelectedPlayer(null)
    }
  }

  const handleCancelTransfer = (index: number) => {
    const newTransfers = [...transfers]
    newTransfers.splice(index, 1)
    setTransfers(newTransfers)
  }

  // Calculate budget
  const initialBudget = 100.0
  const currentSquadValue = mockSquad.reduce((sum, player) => sum + player.price, 0)
  const outgoingValue = transfers.reduce((sum, transfer) => {
    const player = mockSquad.find((p) => p.id === transfer.out)
    return sum + (player?.price || 0)
  }, 0)
  const incomingValue = transfers.reduce((sum, transfer) => {
    const player = availablePlayers.find((p) => p.id === transfer.in)
    return sum + (player?.price || 0)
  }, 0)

  const remainingBudget = (initialBudget - currentSquadValue + outgoingValue - incomingValue).toFixed(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Transfer Players</h1>
      <p className="text-gray-500 mb-6">Make changes to your squad to improve performance</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Squad</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="GK">
                <TabsList className="mb-4">
                  <TabsTrigger value="GK">Goalkeepers</TabsTrigger>
                  <TabsTrigger value="DEF">Defenders</TabsTrigger>
                  <TabsTrigger value="MID">Midfielders</TabsTrigger>
                  <TabsTrigger value="FWD">Forwards</TabsTrigger>
                </TabsList>

                {["GK", "DEF", "MID", "FWD"].map((pos) => (
                  <TabsContent key={pos} value={pos} className="space-y-4">
                    {squadPlayers
                      .filter((player) => player.position === pos)
                      .map((player) => (
                        <div
                          key={player.id}
                          className={`flex items-center justify-between p-3 rounded-md border ${
                            player.isTransferOut
                              ? "opacity-50 bg-gray-100"
                              : player.id === selectedPlayer
                                ? "border-green-500 bg-green-50"
                                : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                                pos === "GK"
                                  ? "bg-yellow-500"
                                  : pos === "DEF"
                                    ? "bg-blue-500"
                                    : pos === "MID"
                                      ? "bg-green-500"
                                      : "bg-red-500"
                              }`}
                            >
                              {pos.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{player.name}</div>
                              <div className="text-xs text-gray-500">
                                {formatClassName(player.class)} • ${player.price.toFixed(1)}M
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium">{player.points} pts</div>
                              <div className="text-xs text-gray-500">{player.selected ? "Starting XI" : "Bench"}</div>
                            </div>

                            {!player.isTransferOut && (
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={transfersRemaining === 0 && player.id !== selectedPlayer}
                                onClick={() => handleTransferOut(player.id)}
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {selectedPlayer && (
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Select Replacement</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search players..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {availablePlayersFiltered.length > 0 ? (
                    availablePlayersFiltered
                      .filter((player) => {
                        const selectedPlayerData = mockSquad.find((p) => p.id === selectedPlayer)
                        return player.position === selectedPlayerData?.position
                      })
                      .map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-3 rounded-md border hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleTransferIn(player.id)}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                                player.position === "GK"
                                  ? "bg-yellow-500"
                                  : player.position === "DEF"
                                    ? "bg-blue-500"
                                    : player.position === "MID"
                                      ? "bg-green-500"
                                      : "bg-red-500"
                              }`}
                            >
                              {player.position.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{player.name}</div>
                              <div className="text-xs text-gray-500">
                                {formatClassName(player.class)} • ${player.price.toFixed(1)}M
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium">{player.points} pts</div>
                              <div
                                className={`text-xs ${
                                  player.form === "↑"
                                    ? "text-green-600"
                                    : player.form === "↓"
                                      ? "text-red-600"
                                      : "text-gray-600"
                                }`}
                              >
                                {player.form}
                              </div>
                            </div>

                            <Button size="sm" className="bg-green-800 hover:bg-green-700">
                              <PlusIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">No matching players found</div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full" onClick={() => setSelectedPlayer(null)}>
                  Cancel Selection
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Transfer Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Free Transfers:</span>
                  <span className="font-medium">{transfersRemaining} remaining</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Budget:</span>
                  <span className="font-medium">${remainingBudget}M</span>
                </div>
              </div>

              {transfers.length > 0 ? (
                <div className="space-y-3">
                  {transfers.map((transfer, index) => {
                    const outPlayer = mockSquad.find((p) => p.id === transfer.out)
                    const inPlayer = availablePlayers.find((p) => p.id === transfer.in)
                    if (!outPlayer || !inPlayer) return null

                    return (
                      <div key={index} className="flex items-center gap-2 p-3 border rounded-md">
                        <div className="flex-1">
                          <div className="text-sm font-medium">{outPlayer.name}</div>
                          <div className="text-xs text-gray-500">${outPlayer.price.toFixed(1)}M</div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-gray-400" />

                        <div className="flex-1">
                          <div className="text-sm font-medium">{inPlayer.name}</div>
                          <div className="text-xs text-gray-500">${inPlayer.price.toFixed(1)}M</div>
                        </div>

                        <Button variant="ghost" size="sm" onClick={() => handleCancelTransfer(index)}>
                          <MinusCircle className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">No transfers made yet</div>
              )}
            </CardContent>
          </Card>

          {transfers.length > 0 && (
            <Button className="w-full bg-green-800 hover:bg-green-700 mb-6">Confirm Transfers</Button>
          )}

          <Alert>
            <AlertTitle>Transfer Deadline</AlertTitle>
            <AlertDescription>
              You have until Friday, 3:00 PM to make your transfers for this gameweek.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
