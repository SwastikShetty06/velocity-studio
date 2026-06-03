import React from 'react'

interface MenuBarProps {
  activeCar: 'mustang' | 'porsche'
  onCarChange: (car: 'mustang' | 'porsche') => void
}

export default function MenuBar({ activeCar, onCarChange }: MenuBarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-[80] backdrop-blur-md bg-[var(--background)]/60 border-b border-[var(--border-color)] px-6 md:px-12 py-4 flex items-center justify-between pointer-events-auto select-none transition-all duration-300">
      <div className="font-condensed text-xl tracking-[0.1em] text-[var(--foreground)] font-bold">
        VELOCITY <span className="text-[var(--accent)] font-mono text-[10px] md:text-xs font-light tracking-[0.3em] ml-2">// SHOWROOM</span>
      </div>
      <nav className="flex items-center gap-4 md:gap-8 font-mono text-[10px] md:text-xs tracking-[0.2em]">
        <button
          onClick={() => onCarChange('mustang')}
          className={`cursor-pointer transition-all duration-300 py-1 border-b-2 uppercase font-bold ${
            activeCar === 'mustang'
              ? 'border-[var(--accent)] text-[var(--foreground)]'
              : 'border-transparent text-stone-500 hover:text-[var(--foreground)]'
          }`}
        >
          MUSTANG GT
        </button>
        <button
          onClick={() => onCarChange('porsche')}
          className={`cursor-pointer transition-all duration-300 py-1 border-b-2 uppercase font-bold ${
            activeCar === 'porsche'
              ? 'border-[var(--accent)] text-[var(--foreground)]'
              : 'border-transparent text-stone-500 hover:text-[var(--foreground)]'
          }`}
        >
          PORSCHE 911
        </button>
      </nav>
    </header>
  )
}
