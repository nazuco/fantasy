import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">School Fantasy Soccer League</h1>
          <p className="max-w-[700px] text-lg md:text-xl text-green-100">
            Create your dream team, compete with classmates, and prove your soccer knowledge!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-100">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900">
                    1
                  </span>
                  Create Your Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Sign up, name your team, and get ready to build your roster of soccer stars from our school leagues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900">
                    2
                  </span>
                  Draft Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Select players within your budget. Choose wisely – their real-life performance determines your points!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900">
                    3
                  </span>
                  Compete Weekly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Set your lineup each week and compete against other teams in your league to climb the rankings.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials/School Spirit Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Join the School Soccer Community</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Over 200 students and faculty are already competing in our fantasy leagues. Will your team rise to the top
              of the leaderboard?
            </p>
            <Button asChild size="lg" className="bg-green-800 hover:bg-green-700">
              <Link href="/signup">Start Your Team Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 mt-auto">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">© 2024 School Fantasy Soccer League. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/about" className="text-sm text-gray-500 hover:underline">
                About
              </Link>
              <Link href="/rules" className="text-sm text-gray-500 hover:underline">
                Rules
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
