
import React from 'react';

interface ClubLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const ClubLogo: React.FC<ClubLogoProps> = ({ className = "w-12 h-12", variant = 'dark' }) => {
  return (
    <div className={className}>
      <img
        src="/logo.png"
        alt="SKV Rutesheim 1945 e.V."
        className="w-full h-full object-contain"
      />
    </div>
  );
};
