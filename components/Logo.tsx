import React from 'react';
import { LOGO_IMAGE_URL } from '../constants';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 150 }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* 
        Logo displayed "loose" as requested.
        Removed rounded-full, borders, and background colors.
        Added a subtle drop-shadow to lift it from the background if it has transparency.
      */}
      <img 
        src={LOGO_IMAGE_URL} 
        alt="KMaia's Craft Logo" 
        style={{ width: size, height: 'auto' }}
        className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default Logo;