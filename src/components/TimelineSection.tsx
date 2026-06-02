import React from 'react'

export default function TimelineSection() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden" style={{ height: '230vh' }}>
      {/* Milestone 1: 1964 (Left Side) */}
      <div className="timeline-milestone-card timeline-card-left" style={{ top: '10%' }}>
        {/* Dashboard Screw Rivets */}
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        <span className="accent-badge font-mono mb-2">1964</span>
        <h3 className="text-sm font-black uppercase tracking-wider mb-2">BIRTH OF THE PONY</h3>
        <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
          Ford unveils the very first Mustang at the World's Fair. A massive cultural icon is born, establishing the legendary "Pony Car" racing legacy.
        </p>
      </div>

      {/* Milestone 2: 1967 (Right Side) */}
      <div className="timeline-milestone-card timeline-card-right" style={{ top: '34%' }}>
        {/* Dashboard Screw Rivets */}
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        <span className="accent-badge font-mono mb-2">1967</span>
        <h3 className="text-sm font-black uppercase tracking-wider mb-2">FASTBACK REVOLUTION</h3>
        <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
          The classic Fastback shape takes shape with an aggressive front grille profile, sweeping rear louvers, and Carroll Shelby's legendary race tuning.
        </p>
      </div>

      {/* Milestone 3: 1969 (Left Side) */}
      <div className="timeline-milestone-card timeline-card-left" style={{ top: '58%' }}>
        {/* Dashboard Screw Rivets */}
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        <span className="accent-badge font-mono mb-2">1969</span>
        <h3 className="text-sm font-black uppercase tracking-wider mb-2">THE MIGHTY BOSS 429</h3>
        <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
          Engineered for NASCAR drag-strip dominance. Equips the massive, heavy-displacement semi-hemispherical 429 CID V8 racing engine.
        </p>
      </div>

      {/* Milestone 4: 2019 (Right Side) */}
      <div className="timeline-milestone-card timeline-card-right" style={{ top: '82%' }}>
        {/* Dashboard Screw Rivets */}
        <div className="rivet rivet-tl" />
        <div className="rivet rivet-tr" />
        <div className="rivet rivet-bl" />
        <div className="rivet rivet-br" />

        <span className="accent-badge font-mono mb-2">2019</span>
        <h3 className="text-sm font-black uppercase tracking-wider mb-2">NASCAR LEGACY</h3>
        <p className="text-zinc-400 text-[11px] leading-relaxed uppercase">
          A glorious tribute. Re-engineered as a modern track weapon, packing 750 high-revving horsepower inside a carbon-clad composite frame.
        </p>
      </div>
    </section>
  )
}
