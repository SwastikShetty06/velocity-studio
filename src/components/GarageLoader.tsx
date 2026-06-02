'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface GarageLoaderProps {
  active: boolean
  onComplete: () => void
}

export default function GarageLoader({ active, onComplete }: GarageLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shutterRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [percent, setPercent] = useState(0)

  // Simulate progress indicator while waiting for the model
  useEffect(() => {
    if (!active) {
      setPercent(100)
      return
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 92) {
          clearInterval(interval)
          return prev
        }
        return prev + Math.floor(Math.random() * 8) + 2
      })
    }, 150)

    return () => clearInterval(interval)
  }, [active])

  // Shutter door lift animation
  useEffect(() => {
    if (active) return

    const tl = gsap.timeline({
      onComplete: onComplete
    })

    // 1. Flash neon red indicator to green/white (ready to lift!)
    tl.to('.neon-stripe', {
      backgroundColor: '#22c55e',
      boxShadow: '0 0 16px rgba(34, 197, 94, 0.8)',
      duration: 0.3,
    })
    // 2. Scale logo and progress bar down smoothly
    .to([logoRef.current, progressRef.current], {
      scale: 0.85,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    }, 0.2)
    // 3. Shutter Door Lifting vertically (brushed metal rolling up!)
    .to(shutterRef.current, {
      yPercent: -100,
      duration: 1.8,
      ease: 'power4.inOut', // Heavy industrial hydraulic lifting feel!
    }, 0.5)
    // 4. Fade out the dark backdrop overlay container
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'none',
    }, 1.6)

  }, [active, onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#0a0a0c] z-[9999] flex items-center justify-center overflow-hidden select-none pointer-events-none"
    >
      {/* Heavy industrial steel shutter background */}
      <div 
        ref={shutterRef}
        className="absolute inset-0 w-full h-full bg-[#121215] flex flex-col justify-between p-8 border-b-8 border-[#1a1a1f] pointer-events-auto"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '100% 24px, 48px 100%',
        }}
      >
        {/* Horizontal metal slats details */}
        <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
             style={{
               background: 'repeating-linear-gradient(to bottom, transparent, transparent 12px, rgba(0,0,0,0.8) 12px, rgba(0,0,0,0.8) 24px)'
             }} 
        />

        {/* Top rivet bezel */}
        <div className="flex justify-between w-full opacity-30 px-6">
          <div className="w-4 h-4 rounded-full bg-zinc-600 shadow-inner" />
          <div className="w-4 h-4 rounded-full bg-zinc-600 shadow-inner" />
          <div className="w-4 h-4 rounded-full bg-zinc-600 shadow-inner" />
        </div>

        {/* Center Display Pod */}
        <div className="flex flex-col items-center justify-center flex-grow text-center z-10 relative">
          
          {/* Shelby Crimson Neon Stripe Indicator Running Across Shutter */}
          <div className="neon-stripe w-64 h-1 bg-[#ef4444] rounded-full mb-8 shadow-[0_0_12px_rgba(239,68,68,0.7)] transition-all" />

          {/* Core Logo Pod */}
          <div ref={logoRef} className="mb-6">
            <h1 className="font-condensed text-5xl md:text-7xl text-zinc-100 tracking-[0.15em] leading-none uppercase">
              VELOCITY
            </h1>
            <h2 className="font-mono text-[#ef4444] text-xs md:text-sm tracking-[0.4em] uppercase mt-2">
              STUDIO // ACTIVE BAY
            </h2>
          </div>

          {/* Shutter mechanical progress */}
          <div ref={progressRef} className="w-64 max-w-full flex flex-col items-center">
            <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-[1px]">
              <div 
                className="h-full bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between w-full mt-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
              <span>SYS_BOOST</span>
              <span>{percent}%</span>
            </div>
          </div>
        </div>

        {/* Bottom rivet bezel and warning stripe */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-4 mb-8 bg-repeating bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_10px,#18181b_10px,#18181b_20px)] opacity-30 rounded-sm" />
          <div className="flex justify-between w-full opacity-30 px-6">
            <div className="w-4 h-4 rounded-full bg-zinc-600 shadow-inner" />
            <div className="w-4 h-4 rounded-full bg-zinc-600 shadow-inner" />
            <div className="w-4 h-4 rounded-full bg-zinc-600 shadow-inner" />
          </div>
        </div>
      </div>
    </div>
  )
}
