'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MustangRef } from '@/components/Mustang'
import ShowroomCanvas from '@/components/ShowroomCanvas'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SpecsSection from '@/components/SpecsSection'
import TimelineSection from '@/components/TimelineSection'
import FinaleSection from '@/components/FinaleSection'

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mustangRef = useRef<MustangRef>(null)
  const [mounted, setMounted] = useState(false)

  // Defer rendering of R3F Canvas until the client mounts to prevent SSR hydration errors
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    let ctx: any

    // Poll every 100ms until the 3D model finishes loading and mounting via Suspense
    const checkInterval = setInterval(() => {
      const car = mustangRef.current?.car
      const spinningGroup = mustangRef.current?.spinningGroup
      const platform = mustangRef.current?.platform

      if (car && spinningGroup && platform) {
        clearInterval(checkInterval)

        ctx = gsap.context(() => {
          // Setup infinite looping spin tween for 360 view
          const spinTween = gsap.to(spinningGroup.rotation, {
            y: Math.PI * 2,
            duration: 16, // Slow, elegant spin
            repeat: -1,
            ease: 'none',
            paused: true,
          })

          // Trigger spinTween play/pause based on ScrollTrigger
          ScrollTrigger.create({
            trigger: '#scroll-container',
            start: '82% top', // When Section 4 enters!
            onEnter: () => {
              spinTween.progress(0).play()
            },
            onLeaveBack: () => {
              spinTween.pause()
              // Smoothly reset rotation
              gsap.to(spinningGroup.rotation, { y: 0, duration: 0.8, ease: 'power2.out' })
            },
            onEnterBack: () => {
              spinTween.play()
            }
          })

          // Master timeline scrubbing through the page height
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#scroll-container',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.5, // Ultra-smooth inertia scrub
            },
          })

          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

          // Define dynamic responsive layout values (Desktop remains exactly as perfect, Mobile gets tailored fits!)
          const heroPos = isMobile ? { x: 0, y: -0.05, z: -0.5 } : { x: 0, y: -0.07, z: 0 }
          const heroScale = isMobile ? 0.65 : 1.0
          
          const s1Pos = isMobile ? { x: 0, y: 0.5, z: 0.2 } : { x: -1.7, y: -0.07, z: 0.5 }
          
          const s2Pos = isMobile ? { x: 0, y: 0.5, z: -0.3 } : { x: 0.55, y: 0.45, z: -0.15 }
          const s2Rot = isMobile ? { y: Math.PI * 0.25, x: 0.3, z: 0 } : { y: Math.PI * 0.1, x: 0.45, z: -0.1 }
          
          const s3Pos = isMobile ? { x: 0, y: 0.55, z: -1.4 } : { x: 0, y: 0.55, z: -0.9 }
          const s3Scale = isMobile ? 0.32 : 0.52
          
          const s4Pos = isMobile ? { x: 0, y: -0.08, z: -1.8 } : { x: 0, y: -0.12, z: -1.1 }
          const s4Scale = isMobile ? 0.58 : 0.95
          const s4PlatformScale = isMobile ? 0.62 : 1.0

          // --- SECTION 0: Initial Hero State ---
          gsap.set(car.position, heroPos)
          gsap.set(car.rotation, { x: 0.05, y: -0.55, z: -0.02 }) // Cinematic 3/4 stance
          gsap.set(car.scale, { x: heroScale, y: heroScale, z: heroScale }) // Calibrated life-sized meter scale
          gsap.set(platform.scale, { x: 0, y: 0, z: 0 }) // Hidden initially, only appears in Section 4 attached to the footer stage!

          // TRANSITION 1: Hero (Section 0) -> About (Section 1)
          tl.to('.hero-bg-text', {
            y: -150,
            opacity: 0,
            ease: 'power2.inOut',
          }, 0)
          .to(car.position, {
            x: s1Pos.x,
            y: s1Pos.y,
            z: s1Pos.z,
            ease: 'power2.inOut',
          }, 0)
          .to(car.rotation, {
            y: Math.PI * 0.5, // 90-degree rotate showing left profile
            x: 0,
            z: 0,
            ease: 'power2.inOut',
          }, 0)
          .to('.needle-drag', {
            rotation: 40,
            ease: 'back.out(1.2)',
          }, 0)

          // TRANSITION 2: About (Section 1) -> Specs (Section 2)
          tl.to(car.position, {
            x: s2Pos.x,          
            y: s2Pos.y,          
            z: s2Pos.z,         
            ease: 'power2.inOut',
          }, 1)
          .to(car.rotation, {
            y: s2Rot.y, 
            x: s2Rot.x,          
            z: s2Rot.z,          
            ease: 'power2.inOut',
          }, 1)
          .to('.needle-rpm', {
            rotation: 120,
            ease: 'back.out(1.2)',
          }, 1)

          // TRANSITION 3: Specs (Section 2) -> Timeline Ride (Section 3)
          tl.to(car.position, {
            x: s3Pos.x,
            y: s3Pos.y,          
            z: s3Pos.z,          
            ease: 'power2.inOut',
          }, 2)
          .to(car.rotation, {
            x: Math.PI * 0.43, 
            y: 0,
            z: 0,
            ease: 'power2.inOut',
          }, 2)
          .to(car.scale, {
            x: s3Scale,          
            y: s3Scale,
            z: s3Scale,
            ease: 'power2.inOut',
          }, 2)
          .to(platform.scale, {
            x: 0,             
            y: 0,
            z: 0,
            ease: 'power2.inOut',
          }, 2)
          .to('.timeline-road-track', {
            opacity: 1,
            ease: 'power2.inOut',
          }, 2)

          // HOLD & RIDE TIMELINE (Section 3 duration)
          tl.to(car.position, {
            x: s3Pos.x,
            y: s3Pos.y,
            z: s3Pos.z,
            duration: 1, 
          }, 3)
          .to(car.rotation, {
            x: Math.PI * 0.43, 
            y: 0,
            z: 0,
            duration: 1,
          }, 3)
          .to(car.scale, {
            x: s3Scale,
            y: s3Scale,
            z: s3Scale,
            duration: 1,
          }, 3)
          .to(platform.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
          }, 3)
          .to('.timeline-road-stripes', {
            backgroundPositionY: '1200px',
            ease: 'none',
            duration: 1,
          }, 3)

          // TRANSITION 4: Timeline Ride (Section 3) -> Finale (Section 4)
          .to('.timeline-road-track', {
            opacity: 0,
            ease: 'power2.inOut',
          }, 4)
          .to('.shelby-stripes-bg', {
            opacity: 0,
            ease: 'power2.inOut',
          }, 4)
          .to('.finale-dark-bg', {
            opacity: 1,
            ease: 'power2.inOut',
          }, 4)
          .to(car.position, {
            x: s4Pos.x,             
            y: s4Pos.y,          
            z: s4Pos.z,          
            ease: 'power3.inOut',
          }, 4)
          .to(car.rotation, {
            y: Math.PI * 1.5, 
            x: 0,
            z: 0,
            ease: 'power3.inOut',
          }, 4)
          .to(car.scale, {
            x: s4Scale,          
            y: s4Scale,
            z: s4Scale,
            ease: 'power3.inOut',
          }, 4)
          .to(platform.scale, {
            x: s4PlatformScale,             
            y: s4PlatformScale,
            z: s4PlatformScale,
            ease: 'power3.inOut',
          }, 4)

        })
      }
    }, 100)

    return () => {
      clearInterval(checkInterval)
      if (ctx) ctx.revert() 
    }
  }, [mounted])

  return (
    <div className="relative min-h-screen w-full bg-[var(--background)] overflow-x-hidden">
      
      {/* 1. Road Asphalt Grit overlay texture */}
      <div className="paper-texture" />

      {/* 2. Le Mans Shelby twin vertical background racing stripes */}
      <div className="shelby-stripes-bg" />

      {/* 2.5. Dynamic dark background for Section 4 finale stage */}
      <div className="finale-dark-bg" />

      {/* 3. Backdrop Text */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-start justify-center pointer-events-none select-none z-[3] overflow-hidden">
        <h1 className="hero-bg-text text-[22vw] tracking-[-0.05em] uppercase leading-[0.75] transform scale-y-[1.8] origin-top mt-[8vh]">
          MUSTANG
        </h1>
      </div>

      {/* 4. The Timeline Highway Fixed Road Track */}
      <div className="timeline-road-track opacity-0">
        <div className="timeline-road-stripes" />
      </div>

      {/* 5. 3D WebGL Canvas Layer */}
      {mounted && <ShowroomCanvas mustangRef={mustangRef} />}

      {/* 6. HTML Overlay Text & Sections */}
      <main 
        ref={containerRef}
        id="scroll-container" 
        className="relative w-full bg-transparent"
      >
        <HeroSection />
        <AboutSection />
        <SpecsSection />
        <TimelineSection />
        <FinaleSection />
      </main>
    </div>
  )
}

