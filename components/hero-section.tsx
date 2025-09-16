import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex pt-40 md:pt-0 md:items-center justify-center overflow-hidden nature-gradient">
      {/* Background forest imagery */}
      <div className="absolute inset-0 sopacity-20">
        <Image src="/hero.jpg" alt="Forest background" fill className="object-cover object-bottom" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-1 md:mb-6 text-balance">
          Live Growth <br /> Real Value
        </h1>

        <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto !text-white">
            Watch plants grow live 24/7 while your investment flourishes. Just as a seed takes time to sprout, the value grows with community patience.
        </p>

        <div className='mt-5 center text-sm frac gap-3 flex-col md:flex-row'>
          <div className='relative md:w-[220px] w-[250px]'>
            <a href="#contact" className='bg-white bg-opacity-10 p-2 md:w-[220px] w-[250px] block border border-white border-opacity-10 rounded-full'>Pumpfun</a>
            <p className='absolute -top-2 bg-red-500 text-white animate-pulse border-2 border-black px-3 rounded-full -right-2'>Live</p>
          </div>
        </div>
        {/* <a href="https://pump.fun" className="bg-green-500 px-5 py-2 rounded-xl">View Stream</a> */}

      </div>
    </section>
  )
}
