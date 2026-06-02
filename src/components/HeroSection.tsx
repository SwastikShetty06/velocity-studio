import React from 'react'

export default function HeroSection() {
  return (
    <section className="scroll-section justify-between py-12 text-center select-none" style={{ pointerEvents: 'none' }}>
      <div className="mt-16 flex flex-col items-center z-10" style={{ pointerEvents: 'auto' }}>
        <span className="accent-badge">1967 GT FASTBACK • VINTAGE SPEC</span>
        <p className="text-stone-600 font-serif italic tracking-wide text-lg md:text-xl max-w-md mt-4">
          An American legacy, re-engineered for the modern road.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-2 z-10 mt-auto">
        <span className="text-[10px] tracking-[0.25em] uppercase text-stone-600 font-black animate-pulse">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-stone-600 to-transparent"></div>
      </div>
    </section>
  )
}
