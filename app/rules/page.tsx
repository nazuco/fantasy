import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RulesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fantasy Soccer Rules</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="bg-green-50">
            <CardTitle className="text-center">Team Creation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-sm">
              <li>7 players per squad (7 starting, 3 bench)</li>
              <li>$70M budget to build your team</li>
              <li>Maximum 2 players from the same school</li>
              <li>Team must follow selected formation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-50">
            <CardTitle className="text-center">Scoring System</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-sm">
              <li>Goals: 5 points (GK/DEF), 4 points (MID), 3 points (FWD)</li>
              <li>Assists: 3 points</li>
              <li>Clean Sheet: 4 points (GK/DEF), 1 point (MID)</li>
              <li>Save: 0.5 points per save (GK)</li>
              <li>-2 points for red cards</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-green-50">
            <CardTitle className="text-center">Transfers</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-sm">
              <li>1 free transfer per week</li>
              <li>Additional transfers cost 4 points each</li>
              <li>Unused transfers roll over (max 2)</li>
              <li>Player prices change based on form</li>
              <li>Transfer deadline: 30 min before first match</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Detailed Rules & FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the scoring system work?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Points are awarded based on player performances in real-life school soccer matches:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Attacking Points</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Goal scored by a goalkeeper or defender: 5 points</li>
                      <li>Goal scored by a midfielder: 4 points</li>
                      <li>Goal scored by a forward: 3 points</li>
                      <li>Assist: 3 points</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Defensive Points</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Clean sheet by a goalkeeper or defender: 4 points</li>
                      <li>Clean sheet by a midfielder: 1 point</li>
                      <li>Every 3 saves made by a goalkeeper: 1 point</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Penalty Points</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Yellow card: -1 point</li>
                      <li>Red card: -3 points</li>
                      <li>Own goal: -2 points</li>
                      <li>Penalty miss: -2 points</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do player prices change?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  Player prices fluctuate based on their performance and popularity among fantasy managers:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Player prices can rise or fall based on their recent performances and how many managers are
                    transferring them in or out.
                  </li>
                  <li>
                    Price changes happen overnight, typically between 2:00 AM and 3:00 AM based on the transfer
                    activity.
                  </li>
                  <li>A player's price can change by a maximum of $0.3M in a single gameweek.</li>
                  <li>When you sell a player, you receive half of the profit rounded down to the nearest $0.1M.</li>
                </ul>

                <p className="mt-3 text-sm text-gray-500">
                  For example, if you bought a player for $5.0M and their price rose to $5.6M, you would receive $5.3M
                  when selling (original $5.0M + half of the $0.6M profit).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What are the league and tournament structures?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">The Fantasy Soccer app includes various leagues and tournaments:</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Grade Leagues</h4>
                    <p>Players are automatically entered into their grade-specific league:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>9th Grade League</li>
                      <li>10th Grade League</li>
                      <li>11th-12th Grade League</li>
                      <li>Teachers League</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Private Leagues</h4>
                    <p>
                      Create or join private leagues to compete against friends, classmates, or teammates. Each private
                      league can have up to 20 members.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">School Cup</h4>
                    <p>
                      A knockout tournament that runs throughout the season. The top 32 managers qualify, and matches
                      are decided based on head-to-head points in each gameweek.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Inter-School Tournament</h4>
                    <p>
                      The top 3 teams from each grade league qualify for the inter-school tournament, competing against
                      other schools in the district.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do chips and special moves work?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">Special chips can be used once per season to gain an advantage:</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Bench Boost</h4>
                    <p>Points scored by your bench players in the gameweek are included in your total score.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Triple Captain</h4>
                    <p>Your captain's points are tripled instead of doubled for one gameweek.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Free Hit</h4>
                    <p>
                      Make unlimited free transfers for a single gameweek. Your squad returns to how it was before the
                      chip was played for the following gameweek.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Wildcard</h4>
                    <p>
                      Make unlimited free transfers. This chip can be used twice per season - once in the fall semester
                      and once in the spring semester.
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-500">Note: Only one chip can be active in a single gameweek.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What are the deadlines and timelines?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Team Selection Deadline:</strong> 30 minutes before the first match of each gameweek
                  </li>
                  <li>
                    <strong>Transfer Deadline:</strong> Same as the team selection deadline
                  </li>
                  <li>
                    <strong>Captain Changes:</strong> Can be made until the team selection deadline
                  </li>
                  <li>
                    <strong>League Registration:</strong> Teams must be registered before the third gameweek to qualify
                    for full-season competitions
                  </li>
                  <li>
                    <strong>Season Timeline:</strong> The fantasy season runs parallel to the school soccer season,
                    typically September through May
                  </li>
                </ul>

                <p className="mt-3 text-sm text-gray-600">
                  All deadlines are strictly enforced by the system with no exceptions. The app displays a countdown
                  timer to remind you of upcoming deadlines.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code of Conduct</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The School Fantasy Soccer League is designed to be fun, competitive, and fair for all participants. All
            players must adhere to the following code of conduct:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Show respect to all participants, including fellow students, teachers, and administrators</li>
            <li>Use appropriate team and league names that comply with school policies</li>
            <li>No creating multiple accounts to gain an unfair advantage</li>
            <li>No sharing accounts or credentials with others</li>
            <li>Report any bugs or issues to the league administrators promptly</li>
            <li>Follow all school computer usage policies when accessing the fantasy platform</li>
          </ul>

          <p className="mt-4 text-sm text-gray-600">
            Violations of these rules may result in penalties, point deductions, or removal from the league at the
            discretion of league administrators. The administrators' decisions are final.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
