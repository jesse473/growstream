import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GrowthSection() {
  return (
    <section id="growth" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Growth Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Just as plants require patience, care, and the right conditions to flourish, our community believes in
            organic growth that stands the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="plant-shadow organic-border overflow-hidden bg-card p-6">
              <Image
                src="/time-lapse-sequence-of-plant-growing-from-seed-to-.jpg"
                alt="Plant growth stages"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full">
              <span className="text-2xl">🌱</span>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="plant-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="text-2xl">🌰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">The Seed</h3>
                    <p className="text-muted-foreground">
                      Every great growth story begins with a single seed. Your investment in GrowStream is that seed,
                      planted with intention and nurtured by community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="plant-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">The Sprout</h3>
                    <p className="text-muted-foreground">
                      With patience and proper conditions, the first signs of life emerge. This is where most see the
                      first glimpse of potential.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="plant-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <span className="text-2xl">🌳</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">The Tree</h3>
                    <p className="text-muted-foreground">
                      Through consistent care and community support, what started as a seed becomes a mighty tree,
                      providing value for generations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
            Start Your Growth Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
