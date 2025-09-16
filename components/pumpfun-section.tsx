import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PumpFunSection() {
  return (
    <section id="pumpfun" className="py-20 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-secondary text-secondary-foreground mb-4">🚀 BULLISH ALERT</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Live on PumpFun</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              {
                "🔥 We're making HISTORY! GrowStream is the FIRST project to stream live plant growth on PumpFun 24/7. This isn't just innovation - it's REVOLUTIONARY! Watch nature and your portfolio grow together in real-time."
              }
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">{"First-ever live plant streaming on PumpFun"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">{"24/7 continuous growth documentation"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">{"Community-driven growth milestones"}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Join PumpFun Stream
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                View Token Stats
              </Button>
            </div>
          </div>

          <Card className="plant-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Live PumpFun Integration</h3>
                <p className="text-muted-foreground">Real-time streaming directly integrated with PumpFun platform</p>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Stream Status</span>
                  <Badge className="bg-green-500 text-white">🔴 LIVE</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Viewers</span>
                    <span className="font-semibold text-primary">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Growth Progress</span>
                    <span className="font-semibold text-secondary">Day 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Next Milestone</span>
                    <span className="font-semibold text-accent">First Leaf</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Watch on PumpFun
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
