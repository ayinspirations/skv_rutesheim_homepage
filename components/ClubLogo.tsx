
import React from 'react';

interface ClubLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const ClubLogo: React.FC<ClubLogoProps> = ({ className = "w-12 h-12", variant = 'dark' }) => {
  const primaryColor = variant === 'dark' ? '#000000' : '#FFFFFF';
  const secondaryColor = variant === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <div className={className}>
      <svg viewBox="0 0 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm overflow-visible">
        {/* Shield Shape */}
        <path 
          d="M10 10H290V160C290 240 215 305 150 325C85 305 10 240 10 160V10Z" 
          fill={secondaryColor} 
          stroke={primaryColor} 
          strokeWidth="12"
          strokeLinejoin="miter"
        />
        
        {/* Top Bar */}
        <path d="M10 10H290V85H10V10Z" fill={primaryColor} />
        
        {/* "RUTESHEIM" Text */}
        <text 
          x="150" 
          y="62" 
          textAnchor="middle" 
          fill={secondaryColor} 
          style={{ font: '900 48px sans-serif', letterSpacing: '0.05em' }}
        >
          RUTESHEIM
        </text>

        {/* Large Serif 'S' */}
        <text 
          x="142" 
          y="268" 
          textAnchor="middle" 
          fill={primaryColor} 
          style={{ font: '900 240px "Times New Roman", Times, serif' }}
        >
          S
        </text>

        {/* '19' & '45' */}
        <text 
          x="65" 
          y="225" 
          textAnchor="middle" 
          fill={primaryColor} 
          style={{ font: '900 72px sans-serif' }}
        >
          19
        </text>
        <text 
          x="235" 
          y="225" 
          textAnchor="middle" 
          fill={primaryColor} 
          style={{ font: '900 72px sans-serif' }}
        >
          45
        </text>

        {/* 'K' & 'V' */}
        <text 
          x="188" 
          y="155" 
          textAnchor="middle" 
          fill={primaryColor} 
          style={{ font: '900 56px sans-serif' }}
        >
          K
        </text>
        <text 
          x="188" 
          y="282" 
          textAnchor="middle" 
          fill={primaryColor} 
          style={{ font: '900 56px sans-serif' }}
        >
          V
        </text>
      </svg>
    </div>
  );
};
