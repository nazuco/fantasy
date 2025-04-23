"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, ArrowRight, CheckIcon } from "lucide-react"

export default function CreateTeamPage() {
  const [teamName, setTeamName] = useState("")
  const [formation, setFormation] = useState("")
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (step === 1 && teamName) {
      setStep(2)
    } else if (step === 2 && formation) {
      setStep(3)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would submit the form and create the team
    // Then redirect to player selection
    window.location.href = "/players"
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`rounded-full w-10 h-10 flex items-center justify-center ${
                  step >= 1 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 1 ? <CheckIcon className="h-5 w-5" /> : 1}
              </div>
              <div className={`ml-2 ${step >= 1 ? "text-green-600 font-medium" : "text-gray-500"}`}>Team Details</div>
            </div>

            <div className={`flex-1 mx-4 h-1 ${step > 1 ? "bg-green-600" : "bg-gray-200"}`} />

            <div className="flex items-center">
              <div
                className={`rounded-full w-10 h-10 flex items-center justify-center ${
                  step >= 2 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > 2 ? <CheckIcon className="h-5 w-5" /> : 2}
              </div>
              <div className={`ml-2 ${step >= 2 ? "text-green-600 font-medium" : "text-gray-500"}`}>Formation</div>
            </div>

            <div className={`flex-1 mx-4 h-1 ${step > 2 ? "bg-green-600" : "bg-gray-200"}`} />

            <div className="flex items-center">
              <div
                className={`rounded-full w-10 h-10 flex items-center justify-center ${
                  step >= 3 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <div className={`ml-2 ${step >= 3 ? "text-green-600 font-medium" : "text-gray-500"}`}>Confirm</div>
            </div>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Team Details */}
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Create Your Fantasy Team</CardTitle>
                  <CardDescription>Let's start with the basics for your fantasy soccer team.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="team-name">Team Name</Label>
                    <Input
                      id="team-name"
                      placeholder="Enter your team name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500">Choose a creative name for your fantasy team</p>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 2: Formation */}
            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Choose Your Formation</CardTitle>
                  <CardDescription>Select a formation for your team. You can change this later.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormationCard
                      name="2-3-1"
                      description="Balanced formation"
                      selected={formation === "2-3-1"}
                      onClick={() => setFormation("2-3-1")}
                    />
                    <FormationCard
                      name="3-2-1"
                      description="Defensive focus"
                      selected={formation === "3-2-1"}
                      onClick={() => setFormation("3-2-1")}
                    />
                    <FormationCard
                      name="2-2-2"
                      description="Attack-oriented"
                      selected={formation === "2-2-2"}
                      onClick={() => setFormation("2-2-2")}
                    />
                    <FormationCard
                      name="1-4-1"
                      description="Midfield control"
                      selected={formation === "1-4-1"}
                      onClick={() => setFormation("1-4-1")}
                    />
                    <FormationCard
                      name="3-1-2"
                      description="Wing attack"
                      selected={formation === "3-1-2"}
                      onClick={() => setFormation("3-1-2")}
                    />
                    <FormationCard
                      name="1-3-2"
                      description="Forward pressure"
                      selected={formation === "1-3-2"}
                      onClick={() => setFormation("1-3-2")}
                    />
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Confirm Your Team</CardTitle>
                  <CardDescription>Review your team details before proceeding to player selection.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-500">Team Name:</span>
                      <span className="font-medium">{teamName}</span>
                    </div>

                    <div className="flex justify-between p-4 bg-green-50 rounded-lg border border-green-200 flex items-start">
                      <AlertCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-medium">Next: Select Your Players</p>
                        <p className="text-sm text-green-600">
                          After creating your team, you'll select players within your budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            <CardFooter className="flex justify-between">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <Button type="button" variant="outline" asChild>
                  <Link href="/">Cancel</Link>
                </Button>
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={(step === 1 && !teamName) || (step === 2 && !formation)}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" className="bg-green-800 hover:bg-green-700">
                  Create Team & Select Players
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

interface FormationCardProps {
  name: string
  description: string
  selected: boolean
  onClick: () => void
}

function FormationCard({ name, description, selected, onClick }: FormationCardProps) {
  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
        selected ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-xl">{name}</span>
        {selected && <CheckIcon className="h-5 w-5 text-green-500" />}
      </div>
      <p className="text-sm text-gray-500">{description}</p>

      {/* Simple formation visualization */}
      <div className="mt-3 relative bg-green-100 h-24 rounded-md overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-around">
          {/* GK */}
          {name === "2-3-1" && <FormationViz def={2} mid={3} fwd={1} />}
          {name === "3-2-1" && <FormationViz def={3} mid={2} fwd={1} />}
          {name === "2-2-2" && <FormationViz def={2} mid={2} fwd={2} />}
          {name === "1-4-1" && <FormationViz def={1} mid={4} fwd={1} />}
          {name === "3-1-2" && <FormationViz def={3} mid={1} fwd={2} />}
          {name === "1-3-2" && <FormationViz def={1} mid={3} fwd={2} />}
        </div>
      </div>
    </div>
  )
}

interface FormationVizProps {
  def: number
  mid: number
  fwd: number
}

function FormationViz({ def, mid, fwd }: FormationVizProps) {
  return (
    <>
      {/* GK */}
      <div className="flex justify-center">
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
      </div>

      {/* DEF */}
      <div className="flex justify-around">
        {Array.from({ length: def }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-blue-500" />
        ))}
      </div>

      {/* MID */}
      <div className="flex justify-around">
        {Array.from({ length: mid }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-green-500" />
        ))}
      </div>

      {/* FWD */}
      <div className="flex justify-around">
        {Array.from({ length: fwd }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-red-500" />
        ))}
      </div>
    </>
  )
}
