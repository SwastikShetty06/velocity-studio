import React from 'react'

interface AboutSectionProps {
  carType?: 'mustang' | 'porsche'
}

export default function AboutSection({ carType = 'mustang' }: AboutSectionProps) {
  return (
    <section className="scroll-section items-end" style={{ pointerEvents: 'none' }}>
      <div className="gt-card" style={{ pointerEvents: 'auto' }}>
        {/* Dashboard Screw Rivets */}
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        <div className="flex items-center gap-6 mb-6">
          <div className="gauge-pod">
            <div className="gauge-amber-glow" />
            <div className="gauge-needle needle-drag" />
            <div className="gauge-center" />
            <span className="absolute bottom-2 text-[9px] font-mono text-zinc-500 tracking-wider">DRAG</span>
          </div>
          <div className="flex-1">
            <span className="accent-badge font-mono mb-2">Aerodynamics</span>
            <h2 className="text-2xl font-extrabold tracking-tight uppercase">
              {carType === 'mustang' ? 'SCULPTED TO FLY' : 'GERMAN EFFICIENCY'}
            </h2>
          </div>
        </div>

        {carType === 'mustang' ? (
          <p className="text-zinc-455 leading-relaxed font-light mb-6 text-xs font-mono uppercase">
            An ultra-light composite shell perfected inside vintage Shelby wind tunnels. Every contour channels high-speed airflow, anchoring this Fastback coupe to the asphalt.
          </p>
        ) : (
          <p className="text-zinc-455 leading-relaxed font-light mb-6 text-xs font-mono uppercase">
            Crafted with lightweight aluminum-steel composite panels and advanced active aerodynamics. Rear spoiler deploys automatically to maintain high-speed downforce.
          </p>
        )}

        <div className="gt-divider" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-[10px] uppercase text-zinc-500 font-bold tracking-widest">BODY DRAG</span>
            <span className="text-2xl font-black text-white">
              {carType === 'mustang' ? '0.29 Cd' : '0.28 Cd'}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase text-zinc-500 font-bold tracking-widest">DOWNFORCE</span>
            <span className="text-2xl font-black text-white">
              {carType === 'mustang' ? '1,200 LBS' : '1,500 LBS'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
