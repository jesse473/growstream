"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { use } from "react";

export default function Header({ whitepaper, scrollY, setOpenNav, openNav }) {
  return (
    <nav className={`stickyNav py-2 md:py-3 border-b border-black ${scrollY > 500 && 'bg-[#f9f4e8]'}`}>
      <div className={`w-full ${whitepaper ? 'max-w-[950px]' : 'max-w-[1250px]'} overflow-hidden rounded-full mx-auto`}>
        <div className="bg-brow bg-opacity-5 flex items-center justify-between px-5">
          <a href="/" className="center gap-1">
            <img src="/icon.png" className="h-6" />
            <h1 className="font-[900] text-xl pt-1">GrowStream</h1>
          </a>
          <div className="center gap-20">
            <div className="hidden md:flex items-center justify-center gap-5 text-sm mt-1">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#faq">FAQs</a>
              <a href="#footer">Community</a>
            </div>
            <a href="#" className="hidden md:block text-sm comics border border-black text-black rounded-full px-5">Watch Live</a>
            <button onClick={() => setOpenNav(!openNav)} className="md:hidden">
              { openNav ? <XIcon /> : <MenuIcon /> }
            </button>
          </div>
        </div>
      </div>
      {openNav &&
        <div className="md:hidden flex flex-col bg-blue border-4 border-black gap-8 frozen absolute w-[95%] left-[2.5%] p-5 mt-5 rounded-xl">
          <a onClick={() => setOpenNav(false)} href="#" className="z-20 underline">Home</a>
          <a onClick={() => setOpenNav(false)} href="#about" className="z-20 underline">About</a>
          <a onClick={() => setOpenNav(false)} href="#faq" className="z-20 underline">FAQs</a>
          <a onClick={() => setOpenNav(false)} href="#footer" className="z-20 underline">Community</a>
          <div className='bg-black -bottom-2 rounded-lg -right-2 h-full absolute w-full z-1' />
          <div className='bg-yellow rounded-lg bottom-0 right-0 h-full absolute w-full !z-2' />
        </div>
      }
    </nav>
  );
}