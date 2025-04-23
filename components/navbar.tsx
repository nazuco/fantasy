"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu, Trophy, Home, Users, BarChart2, UserCircle } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-green-800" />
              <span className="font-bold text-xl">Fantasy Soccer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-green-800">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-500 hover:text-green-800">
              Dashboard
            </Link>
            <Link href="/players" className="text-sm font-medium text-gray-500 hover:text-green-800">
              Players
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium text-gray-500 hover:text-green-800">
              Leaderboard
            </Link>
            <Link href="/rules" className="text-sm font-medium text-gray-500 hover:text-green-800">
              Rules
            </Link>
          </nav>

          <div className="hidden md:flex gap-4">
            <Button asChild variant="outline">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-green-800 hover:bg-green-700">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-800"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} />
              Home
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-800"
              onClick={() => setIsOpen(false)}
            >
              <UserCircle size={18} />
              Dashboard
            </Link>
            <Link
              href="/players"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-800"
              onClick={() => setIsOpen(false)}
            >
              <Users size={18} />
              Players
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-800"
              onClick={() => setIsOpen(false)}
            >
              <BarChart2 size={18} />
              Leaderboard
            </Link>
            <Link
              href="/rules"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-800"
              onClick={() => setIsOpen(false)}
            >
              <Trophy size={18} />
              Rules
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="w-full bg-green-800 hover:bg-green-700">
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
