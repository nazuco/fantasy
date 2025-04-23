"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

// Updated mock player data with class names instead of schools
const mockPlayers = [
  { id: 1, name: "Alex Johnson", position: "GK", class: "1ta", points: 43, price: 5.0, form: "↑" },
  { id: 2, name: "Marcus Lee", position: "DEF", class: "1tb", points: 37, price: 4.5, form: "→" },
  { id: 3, name: "Jacob Williams", position: "DEF", class: "2ta", points: 28, price: 4.0, form: "↓" },
  { id: 4, name: "Ethan Brown", position: "DEF", class: "2tb", points: 52, price: 5.5, form: "↑" },
  { id: 5, name: "Noah Davis", position: "DEF", class: "3ta", points: 31, price: 4.2, form: "→" },
  { id: 6, name: "Daniel Wilson", position: "MID", class: "3tb", points: 63, price: 6.8, form: "↑" },
  { id: 7, name: "Anthony Martinez", position: "MID", class: "1pa", points: 42, price: 5.7, form: "→" },
  { id: 8, name: "Liam Garcia", position: "MID", class: "1pb", points: 71, price: 7.2, form: "↑" },
  { id: 9, name: "Oliver Rodriguez", position: "FWD", class: "2pa", points: 84, price: 8.5, form: "↑" },
  { id: 10, name: "William Hernandez", position: "FWD", class: "2pb", points: 56, price: 6.3, form: "→" },
  { id: 11, name: "James Lopez", position: "FWD", class: "3pa", points: 49, price: 5.9, form: "↓" },
  { id: 12, name: "Benjamin Gonzalez", position: "GK", class: "3pb", points: 38, price: 4.8, form: "→" },
  { id: 13, name: "Samuel Perez", position: "DEF", class: "4ta", points: 27, price: 4.1, form: "↓" },
  { id: 14, name: "Henry Sanchez", position: "MID", class: "4tb", points: 59, price: 6.4, form: "↑" },
  { id: 15, name: "David Ramirez", position: "FWD", class: "4pa", points: 67, price: 7.0, form: "→" },
]

export default function PlayersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")
  const [classFilter, setClassFilter] = useState("all")
  const [sortBy, setSortBy] = useState("points")

  // Extract unique class names for the filter
  const classes = Array.from(new Set(mockPlayers.map((player) => player.class)))

  // Group classes by year and section for better organization
  const classGroups = {
    "1st Year ITI": classes.filter((c) => c.startsWith("1t")),
    "1st Year IPI": classes.filter((c) => c.startsWith("1p")),
    "2nd Year ITI": classes.filter((c) => c.startsWith("2t")),
    "2nd Year IPI": classes.filter((c) => c.startsWith("2p")),
    "3rd Year ITI": classes.filter((c) => c.startsWith("3t")),
    "3rd Year IPI": classes.filter((c) => c.startsWith("3p")),
    "4th Year ITI": classes.filter((c) => c.startsWith("4t")),
    "4th Year IPI": classes.filter((c) => c.startsWith("4p")),
  }

  // Apply filters and sorting
  const filteredPlayers = mockPlayers
    .filter((player) => {
      if (searchTerm && !player.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }
      if (positionFilter !== "all" && player.position !== positionFilter) {
        return false
      }
      if (classFilter !== "all" && player.class !== classFilter) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return b.price - a.price
      if (sortBy === "class") return a.class.localeCompare(b.class)
      return b.points - a.points // default: points
    })

  // Helper function to format class name for display
  const formatClassName = (className: string) => {
    const year = className.charAt(0)
    const section = className.charAt(1) === "t" ? "ITI" : "IPI"
    const group = className.charAt(2)
    return `${year}${section}-${group.toUpperCase()}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Players</h1>

      <div className="mb-6"></div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">Name</th>
              <th className="text-left py-2 px-3">Position</th>
              <th className="text-left py-2 px-3">Class</th>
              <th className="text-right py-2 px-3">Points</th>
              <th className="text-right py-2 px-3">Price</th>
              <th className="text-right py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr key={player.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-3">{player.name}</td>
                <td className="py-3 px-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                      player.position === "GK"
                        ? "bg-yellow-100 text-yellow-800"
                        : player.position === "DEF"
                          ? "bg-blue-100 text-blue-800"
                          : player.position === "MID"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                    }`}
                  >
                    {player.position}
                  </span>
                </td>
                <td className="py-3 px-3">{formatClassName(player.class)}</td>
                <td className="py-3 px-3 text-right">{player.points}</td>
                <td className="py-3 px-3 text-right">${player.price.toFixed(1)}M</td>
                <td className="py-3 px-3 text-right">
                  <Button variant="outline" size="sm">
                    <PlusIcon className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-8 text-gray-500">No players match your search criteria</div>
      )}
    </div>
  )
}
