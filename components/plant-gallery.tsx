"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageLightbox } from "./image-lightbox"

export function PlantGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%206.33.18%E2%80%AFPM-gkb0jJl22S3XNjkNVreOwQYHCN7gWP.jpeg",
      alt: "Professional streaming setup with ring light and heather plants",
      title: "The Setup",
      height: "h-80", // tall
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%206.33.20%E2%80%AFPM-BYPA7XrpjdNJPdP2WqaYtfRkzxTv0I.jpeg",
      alt: "Overhead view of plant streaming station",
      title: "Live Stream Ready",
      height: "h-64", // medium
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%206.33.22%E2%80%AFPM-AQI9dNW9Efr8iCldHE0zWP4xNQPUq1.jpeg",
      alt: "PlantCo seed packet in the growing container",
      title: "Premium Seeds",
      height: "h-72", // medium-tall
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%206.33.19%E2%80%AFPM-XKMF1jkSKCFcvZZWwOvHufeXIfd5s1.jpeg",
      alt: "Glass container with soil and PlantCo seeds",
      title: "Growth Chamber",
      height: "h-60", // short
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%206.33.21%E2%80%AFPM-XZ2htcrhhqRGfWVCqY5DgTP10rjDQy.jpeg",
      alt: "PlantCo branding among colorful heather plants",
      title: "Natural Vibes",
      height: "h-80", // tall
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-16%206.33.17%E2%80%AFPM-cJ4yYDSzhzKq2U1wbL9xcz5Rb8oMf0.jpeg",
      alt: "Complete streaming setup from above",
      title: "24/7 Stream",
      height: "h-64", // medium
    },
  ]

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sage-50 to-cream-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6 text-balance">Behind the Scenes</h2>
          <p className="text-lg text-forest-600 mb-8 max-w-2xl mx-auto leading-relaxed">Live Growth Documentation</p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-64 ${image.height} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 snap-center cursor-pointer`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.title}
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-forest-300"></div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-sage-200">
            <h3 className="text-2xl font-bold text-forest-800 mb-4">{"From Seed to Moon"}</h3>
            <p className="text-forest-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              {
                "Join thousands watching our plant grow live on stream. Every leaf that unfurls is a step closer to astronomical gains. Nature doesn't rush, but when it moves, it MOVES!"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://pump.fun">
                <button className="bg-gradient-to-r from-growth-600 to-growth-700 border border-growth-600 px-8 py-3 rounded-full font-semibold hover:from-growth-700 hover:to-forest-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Watch Live Stream
                </button>
              </a>
              <a href="https://x.com/growstreamfun">
                <button className="bg-white text-growth-600 shadow-lg border-2 border-growth-600 px-8 py-3 rounded-full font-semibold hover:bg-growth-50 transition-all duration-300">
                    Join Community
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  )
}
