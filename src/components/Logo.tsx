import React, { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div 
      className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Modern Futuristic Dynamic Animated SVG Emblem */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        {/* Outer Glow Halo */}
        <div 
          className={`absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-emerald-400/20 blur-md transition-all duration-500 ${
            isHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
          }`} 
        />

        {/* SVG Container */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="cyberGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            
            <linearGradient id="cyberGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dynamic Outer Octagon / Tech Ring */}
          <g className={`origin-center ${isHovered ? 'animate-spin' : 'animate-spin-slow'}`} style={{ transformOrigin: '50% 50%' }}>
            <polygon 
              points="50,6 81,19 94,50 81,81 50,94 19,81 6,50 19,19" 
              fill="none" 
              stroke="url(#cyberGrad1)" 
              strokeWidth="2.5" 
              strokeDasharray="14 10" 
              className="opacity-75"
            />
            {/* Tech Corner Nodes */}
            <circle cx="50" cy="6" r="3" fill="#38bdf8" />
            <circle cx="94" cy="50" r="3" fill="#10b981" />
            <circle cx="50" cy="94" r="3" fill="#06b6d4" />
            <circle cx="6" cy="50" r="3" fill="#60a5fa" />
          </g>

          {/* Counter-rotating Inner Hexagon Orbit */}
          <g className={`origin-center ${isHovered ? 'animate-spin' : 'animate-spin-reverse'}`} style={{ transformOrigin: '50% 50%' }}>
            <polygon 
              points="50,20 76,35 76,65 50,80 24,65 24,35" 
              fill="none" 
              stroke="url(#cyberGrad2)" 
              strokeWidth="2" 
              strokeDasharray="8 6" 
              className="opacity-90"
            />
            <circle cx="76" cy="35" r="2.5" fill="#38bdf8" />
            <circle cx="24" cy="65" r="2.5" fill="#34d399" />
          </g>

          {/* Stylized Futuristic "S" Monogram Vector Core */}
          <path
            d="M 64 36 C 64 30, 48 28, 40 34 C 32 40, 36 48, 50 51 C 64 54, 66 62, 58 68 C 50 74, 34 72, 34 64"
            fill="none"
            stroke="url(#cyberGrad1)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#neonGlow)"
            className="transition-all duration-300"
          />

          {/* Central Pulsing Cyber Node */}
          <circle 
            cx="50" 
            cy="50" 
            r="4.5" 
            fill="#ffffff" 
            className="animate-pulse-subtle"
          />
        </svg>
      </div>

      {/* Brand Typographic Lockup */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-extrabold tracking-tight text-white font-display ${textSizes[size]}`}>
            SERGIO
          </span>
          <span className={`font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent font-display ${textSizes[size]}`}>
            SITETECH
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
        </div>
        
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-medium">
              Lead Pages
            </span>
            <span className="text-[9px] text-cyan-500/70">✦</span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-medium">
              Sites Institucionais
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
