"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: Array<{
    src: string
    alt: string
    title: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageLightbox({ images, currentIndex, isOpen, onClose, onNavigate }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
        onNavigate(prevIndex)
      } else if (e.key === "ArrowRight") {
        const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
        onNavigate(nextIndex)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    onNavigate(prevIndex)
  }

  const handleNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    onNavigate(nextIndex)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Main image */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Image info */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-white text-xl font-semibold mb-2">{currentImage.title}</h3>
        <p className="text-white/70 text-sm">
          {currentIndex + 1} of {images.length}
        </p>
      </div>

      {/* Thumbnail navigation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
