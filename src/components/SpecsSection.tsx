import React from 'react'

interface SpecsSectionProps {
  carType?: 'mustang' | 'porsche'
}

export default function SpecsSection({ carType = 'mustang' }: SpecsSectionProps) {
  return (
    <section className="scroll-section items-start" style={{ pointerEvents: 'none' }}>
      <div className="gt-card" style={{ pointerEvents: 'auto' }}>
        {/* Dashboard Screw Rivets */}
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        <div className="flex items-center gap-6 mb-6">
          <div className="gauge-pod">
            <div className="gauge-amber-glow" />
            <div className="gauge-needle needle-rpm" />
            <div className="gauge-center" />
            <span className="absolute bottom-2 text-[9px] font-mono text-zinc-500 tracking-wider">RPM</span>
          </div>
          <div className="flex-1">
            <span className="accent-badge font-mono mb-2">Powertrain</span>
            <h2 className="text-2xl font-extrabold tracking-tight uppercase">
              {carType === 'mustang' ? 'GT FASTBACK V8' : 'FLAT-SIX TWIN TURBO'}
            </h2>
          </div>
        </div>

        {carType === 'mustang' ? (
          <p className="text-zinc-455 leading-relaxed font-light mb-6 text-xs font-mono uppercase">
            An engineering masterpiece. Under the scooped hood sits the legendary high-performance 390 CID V8 engine, delivering massive acceleration and an unmistakable raw American exhaust rumble.
          </p>
        ) : (
          <p className="text-zinc-455 leading-relaxed font-light mb-6 text-xs font-mono uppercase">
            A rear-mounted mechanical masterpiece. The twin-turbocharged 3.0L flat-six engine delivers instantaneous throttle response and high-revving precision performance.
          </p>
        )}

        <div className="gt-divider" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-[10px] uppercase text-zinc-500 font-bold tracking-widest">HORSEPOWER</span>
            <span className="text-2xl font-black text-[#ef4444]">
              {carType === 'mustang' ? '450 HP' : '473 HP'}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase text-zinc-500 font-bold tracking-widest">DISPLACEMENT</span>
            <span className="text-2xl font-black text-white">
              {carType === 'mustang' ? '390 CID' : '3.0L BOXER'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
