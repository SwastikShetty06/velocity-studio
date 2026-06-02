import React from 'react'

export default function FinaleSection() {
  return (
    <section 
      id="finale-section"
      className="scroll-section flex flex-col justify-end items-center h-screen py-12 px-8 relative z-20 select-none"
      style={{ pointerEvents: 'none' }}
    >
      {/* Curved SVG Typography - Desktop Only */}
      <div 
        className="md:block hidden absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-10 flex flex-col items-center"
        style={{ pointerEvents: 'auto' }}
      >
        <svg 
          viewBox="0 0 1000 240" 
          className="w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {/* Concentric curved paths matching the circular turntable stage */}
          <defs>
            <path id="name-path" d="M 80,30 Q 500,120 920,30" fill="none" />
            <path id="dev-path" d="M 120,70 Q 500,150 880,70" fill="none" />
            <path id="tech-path" d="M 180,105 Q 500,175 820,105" fill="none" />
            <path id="links-path" d="M 220,140 Q 500,205 780,140" fill="none" />
          </defs>

          {/* 1. SWASTIK SHETTY - Large, Bold & Extremely Stylish (Bebas Neue) */}
          <text 
            className="fill-white uppercase font-black"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              fontSize: "64px", 
              letterSpacing: "0.22em" 
            }}
          >
            <textPath href="#name-path" startOffset="50%" textAnchor="middle">
              SWASTIK SHETTY
            </textPath>
          </text>

          {/* 2. FULL STACK DEVELOPER • MERNS JAVA SPECIALIST */}
          <text 
            className="fill-[#ef4444] uppercase font-bold"
            style={{ 
              fontFamily: "'Share Tech Mono', monospace", 
              fontSize: "15px", 
              letterSpacing: "0.25em" 
            }}
          >
            <textPath href="#dev-path" startOffset="50%" textAnchor="middle">
              FULL STACK DEVELOPER • MERNS JAVA SPECIALIST
            </textPath>
          </text>

          {/* 3. JAVA, REACT. JS, NODE.JS */}
          <text 
            className="fill-zinc-400 uppercase font-medium"
            style={{ 
              fontFamily: "'Share Tech Mono', monospace", 
              fontSize: "11px", 
              letterSpacing: "0.2em" 
            }}
          >
            <textPath href="#tech-path" startOffset="50%" textAnchor="middle">
              JAVA, REACT. JS, NODE.JS
            </textPath>
          </text>

          {/* 4. SWASTIKSHETTY06SS@gmail.com | LINKEDIN | GITHUB */}
          <text 
            className="uppercase font-bold"
            style={{ 
              fontFamily: "'Share Tech Mono', monospace", 
              fontSize: "13px", 
              letterSpacing: "0.15em" 
            }}
          >
            <textPath href="#links-path" startOffset="50%" textAnchor="middle">
              <a 
                href="mailto:swastikshetty06ss@gmail.com" 
                className="hover:fill-[#ef4444] fill-zinc-400 transition-colors duration-300"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                SWASTIKSHETTY06SS@gmail.com
              </a>
              <tspan fill="#3f3f46">   |   </tspan>
              <a 
                href="https://linkedin.com/in/swastik-shetty-186802235" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:fill-[#ef4444] fill-zinc-400 transition-colors duration-300"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                LINKEDIN
              </a>
              <tspan fill="#3f3f46">   |   </tspan>
              <a 
                href="https://github.com/SwastikShetty06" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:fill-[#ef4444] fill-zinc-400 transition-colors duration-300"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                GITHUB
              </a>
            </textPath>
          </text>
        </svg>
      </div>

      {/* Clean Stacked Typography & Touch-Friendly Links - Mobile Only */}
      <div 
        className="md:hidden flex flex-col items-center w-full px-6 absolute bottom-[3vh] left-1/2 transform -translate-x-1/2 z-10 z-[30]"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="mobile-footer-card w-full max-w-[340px] bg-[#0c0c0e]/92 backdrop-blur-md border border-zinc-800/80 rounded-md p-5 flex flex-col items-center shadow-[0_16px_40px_rgba(0,0,0,0.85)] relative overflow-hidden transition-all duration-300 gap-3.5 min-h-[190px] justify-between">
          
          {/* Dashboard Accent Top Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent" />
          
          {/* Micro Corner Screws / Rivets */}
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80 absolute top-2.5 left-2.5 shadow-inner" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80 absolute top-2.5 right-2.5 shadow-inner" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80 absolute bottom-2.5 left-2.5 shadow-inner" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80 absolute bottom-2.5 right-2.5 shadow-inner" />

          {/* Typography container */}
          <div className="flex flex-col items-center text-center gap-1 mt-1.5">
            <h3 
              className="text-white text-3xl tracking-widest uppercase font-black leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              SWASTIK SHETTY
            </h3>
            <p className="text-[#ef4444] text-[10px] font-mono font-bold tracking-wider uppercase mt-1">
              FULL STACK DEVELOPER • MERNS JAVA SPECIALIST
            </p>
            <p className="text-zinc-500 text-[8px] font-mono tracking-wider uppercase">
              JAVA, REACT. JS, NODE.JS
            </p>
          </div>
          
          {/* Tiny elegant dashboard divider */}
          <div className="w-24 h-[1px] bg-zinc-800" />
          
          {/* Interactive Button Pod */}
          <div className="flex flex-col items-center gap-1.5 w-full font-mono text-[11px] sm:text-xs">
            <a 
              href="mailto:swastikshetty06ss@gmail.com" 
              className="text-zinc-300 hover:text-[#ef4444] active:text-[#ef4444] transition-colors duration-300 font-bold tracking-wider py-1.5 px-3 bg-zinc-950/80 rounded border border-zinc-800/80 w-full text-center block"
            >
              swastikshetty06ss@gmail.com
            </a>
            <div className="flex gap-2 w-full">
              <a 
                href="https://linkedin.com/in/swastik-shetty-186802235" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-300 hover:text-[#ef4444] active:text-[#ef4444] transition-colors duration-300 font-bold tracking-wider py-1.5 px-3 bg-zinc-950/80 rounded border border-zinc-800/80 flex-1 text-center block"
              >
                LINKEDIN
              </a>
              <a 
                href="https://github.com/SwastikShetty06" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-300 hover:text-[#ef4444] active:text-[#ef4444] transition-colors duration-300 font-bold tracking-wider py-1.5 px-3 bg-zinc-950/80 rounded border border-zinc-800/80 flex-1 text-center block"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
