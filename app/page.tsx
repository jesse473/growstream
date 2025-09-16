"use client";
import { HeroSection } from "@/components/hero-section"
import { LiveStreamSection } from "@/components/live-stream-section"
import { PumpFunSection } from "@/components/pumpfun-section"
import { GrowthSection } from "@/components/growth-section"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <main className="min-h-screen bg-[#f9f4e8]">
      <Header whitepaper={false} scrollY={scrollY} setOpenNav={setOpenNav} openNav={openNav} />
      <HeroSection />
      <LiveStreamSection />
      <div className="border-black">
        <Faq />
        <Footer />
      </div>
    </main>
  )
}
