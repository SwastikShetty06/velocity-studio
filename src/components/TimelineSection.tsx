import React from 'react'

interface TimelineSectionProps {
  carType?: 'mustang' | 'porsche'
}

export default function TimelineSection({ carType = 'mustang' }: TimelineSectionProps) {
  return (
    <section className="relative w-full bg-transparent overflow-hidden" style={{ height: '230vh' }}>
      
      {/* Milestone 1: (Left Side) */}
      <div className="timeline-milestone-card timeline-card-left" style={{ top: '10%' }}>
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        {carType === 'mustang' ? (
          <>
            <span className="accent-badge font-mono mb-2">1964</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">BIRTH OF THE PONY</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              Ford unveils the very first Mustang at the World's Fair. A massive cultural icon is born, establishing the legendary "Pony Car" racing legacy.
            </p>
          </>
        ) : (
          <>
            <span className="accent-badge font-mono mb-2">1963</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">THE FIRST 911</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              Porsche introduces the 901 at the Frankfurt Motor Show. Re-designated as the 911, it establishes the layout that would define sports cars.
            </p>
          </>
        )}
      </div>

      {/* Milestone 2: (Right Side) */}
      <div className="timeline-milestone-card timeline-card-right" style={{ top: '34%' }}>
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        {carType === 'mustang' ? (
          <>
            <span className="accent-badge font-mono mb-2">1967</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">FASTBACK REVOLUTION</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              The classic Fastback shape takes shape with an aggressive front grille profile, sweeping rear louvers, and Carroll Shelby's legendary race tuning.
            </p>
          </>
        ) : (
          <>
            <span className="accent-badge font-mono mb-2">1974</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">TURBO CHARGED ERA</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              The 930 Turbo is born, combining high-pressure forced induction with the iconic whale-tail rear spoiler to create an instant supercar icon.
            </p>
          </>
        )}
      </div>

      {/* Milestone 3: (Left Side) */}
      <div className="timeline-milestone-card timeline-card-left" style={{ top: '58%' }}>
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        {carType === 'mustang' ? (
          <>
            <span className="accent-badge font-mono mb-2">1969</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">THE MIGHTY BOSS 429</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              Engineered for NASCAR drag-strip dominance. Equips the massive, heavy-displacement semi-hemispherical 429 CID V8 racing engine.
            </p>
          </>
        ) : (
          <>
            <span className="accent-badge font-mono mb-2">1997</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">WATER-COOLED SHIFT</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              The 996 generation moves to water-cooling, modernizing the Flat-Six engine while maintaining the classic rear-engine balance.
            </p>
          </>
        )}
      </div>

      {/* Milestone 4: (Right Side) */}
      <div className="timeline-milestone-card timeline-card-right" style={{ top: '82%' }}>
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        {carType === 'mustang' ? (
          <>
            <span className="accent-badge font-mono mb-2">2019</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">NASCAR LEGACY</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              A glorious tribute. Re-engineered as a modern track weapon, packing 750 high-revving horsepower inside a carbon-clad composite frame.
            </p>
          </>
        ) : (
          <>
            <span className="accent-badge font-mono mb-2">2024</span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2">HYBRID PERFORMANCE</h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
              The 992.2 Carrera GTS debuts with the T-Hybrid system, merging electric power with turbocharging for unparalleled track performance.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
