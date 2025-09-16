import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function LiveStreamSection() {
  return (
    <section id="about" className="py-20 bg-[#f9f4e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">Live Growth Streams</h2>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience the magic of nature in real-time. We capture every moment of plant growth,
            symbolizing the organic development of your investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Main live stream */}
          <Card className="lg:col-span-2 plant-shadow">
            <CardContent className="p-2">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%20%281%29-2lrHGYPveHUKTLsdGBEpWfVmKrA4wn.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🔴 LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Main Growth Chamber</h3>
                <p className="text-muted-foreground mb-4">
                  Watch our primary seedling as it breaks through the soil and reaches for the light. Every sprout
                  represents potential growth in our community.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Watch Full Stream</Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary streams */}
          <div className="space-y-6">
            <Card className="plant-shadow">
              <CardContent className="p-4">
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%201.11.03%E2%80%AFPM-aRDSo5T4KrJ4xk9aqFbg0MTV29zUbG.jpeg"
                    alt="Secondary growth setup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                    🌱 Growing
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Heather Garden</h4>
                <p className="text-sm text-muted-foreground">Beautiful heather plants showcasing natural diversity</p>
              </CardContent>
            </Card>

            <Card className="plant-shadow">
              <CardContent className="p-4">
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%201.10.54%E2%80%AFPM-6htFQTh7Vp0SoOufnSsCAzzVwbN9to.jpeg"
                    alt="Growth monitoring setup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    📊 Monitoring
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Growth Lab</h4>
                <p className="text-sm text-muted-foreground">Professional monitoring setup with optimal lighting</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    </section>
  )
}
