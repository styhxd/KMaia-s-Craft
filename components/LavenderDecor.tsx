import React from 'react';

// Enhanced color palette for realism
const STEM_DARK = "#4A6741"; 
const STEM_LIGHT = "#6B8E5F";
const FLOWER_DEEP = "#483D8B"; // Dark Slate Blue
const FLOWER_MAIN = "#7B68EE"; // Medium Slate Blue
const FLOWER_LIGHT = "#9370DB"; // Medium Purple
const FLOWER_HIGHLIGHT = "#E6E6FA"; // Lavender

interface LavenderProps {
  className?: string;
  delay?: string;
}

// A highly detailed, realistic lavender stalk
export const LavenderStalk: React.FC<LavenderProps> = ({ className = "", delay = "0s" }) => {
  return (
    <svg 
      viewBox="0 0 120 400" 
      className={`overflow-visible ${className}`}
      style={{ animationDelay: delay }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="stemGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={STEM_DARK} />
          <stop offset="40%" stopColor={STEM_LIGHT} />
          <stop offset="100%" stopColor={STEM_DARK} />
        </linearGradient>
      </defs>

      {/* Main Stem - Organic curve */}
      <path 
        d="M60,400 C60,320 65,240 55,100" 
        stroke="url(#stemGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      
      {/* Leaves - Linear-lanceolate shape (realistic lavender leaf) */}
      <g>
        {/* Lower leaves */}
        <path d="M60,350 Q30,330 10,310" stroke="url(#stemGradient)" strokeWidth="2" fill="none" />
        <path d="M60,340 Q90,320 110,300" stroke="url(#stemGradient)" strokeWidth="2" fill="none" />
        
        {/* Middle leaves */}
        <path d="M58,280 Q25,260 20,220" stroke="url(#stemGradient)" strokeWidth="2" fill="none" />
        <path d="M62,270 Q95,250 100,210" stroke="url(#stemGradient)" strokeWidth="2" fill="none" />
        
        {/* Upper small leaves */}
        <path d="M57,190 Q40,170 35,150" stroke="url(#stemGradient)" strokeWidth="1.5" fill="none" />
        <path d="M63,185 Q80,165 85,145" stroke="url(#stemGradient)" strokeWidth="1.5" fill="none" />
      </g>

      {/* Flower Clusters (Verticillasters) */}
      {/* Using groups of ellipses to simulate the tubular flowers in whorls */}
      
      {/* Whorl 1 (Bottom) */}
      <g transform="translate(56, 160)">
        <ellipse cx="-12" cy="5" rx="4" ry="8" fill={FLOWER_DEEP} transform="rotate(-60)" />
        <ellipse cx="12" cy="5" rx="4" ry="8" fill={FLOWER_DEEP} transform="rotate(60)" />
        <ellipse cx="0" cy="8" rx="5" ry="9" fill={FLOWER_MAIN} />
        <ellipse cx="-6" cy="2" rx="4" ry="7" fill={FLOWER_LIGHT} transform="rotate(-30)" />
        <ellipse cx="6" cy="2" rx="4" ry="7" fill={FLOWER_LIGHT} transform="rotate(30)" />
      </g>

      {/* Whorl 2 */}
      <g transform="translate(55, 130)">
        <ellipse cx="-10" cy="2" rx="4" ry="8" fill={FLOWER_MAIN} transform="rotate(-45)" />
        <ellipse cx="10" cy="2" rx="4" ry="8" fill={FLOWER_MAIN} transform="rotate(45)" />
        <ellipse cx="0" cy="5" rx="5" ry="9" fill={FLOWER_LIGHT} />
        <circle cx="0" cy="0" r="3" fill={FLOWER_DEEP} opacity="0.6" />
      </g>

      {/* Whorl 3 */}
      <g transform="translate(54, 100)">
        <ellipse cx="-8" cy="0" rx="4" ry="7" fill={FLOWER_DEEP} transform="rotate(-30)" />
        <ellipse cx="8" cy="0" rx="4" ry="7" fill={FLOWER_MAIN} transform="rotate(30)" />
        <ellipse cx="0" cy="3" rx="4" ry="8" fill={FLOWER_LIGHT} />
      </g>

      {/* Top Cluster (Tip) */}
      <g transform="translate(55, 75)">
        <ellipse cx="0" cy="0" rx="3" ry="6" fill={FLOWER_HIGHLIGHT} />
        <ellipse cx="-4" cy="4" rx="3" ry="6" fill={FLOWER_LIGHT} transform="rotate(-20)" />
        <ellipse cx="4" cy="4" rx="3" ry="6" fill={FLOWER_LIGHT} transform="rotate(20)" />
        <ellipse cx="0" cy="-5" rx="2" ry="4" fill={FLOWER_HIGHLIGHT} opacity="0.8" />
      </g>
    </svg>
  );
};

export const LavenderCurve: React.FC<LavenderProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={`overflow-visible ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
     <defs>
        <linearGradient id="stemCurve" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={STEM_DARK} />
          <stop offset="100%" stopColor={STEM_LIGHT} />
        </linearGradient>
     </defs>
     <path d="M0,200 C40,160 80,140 160,80" stroke="url(#stemCurve)" strokeWidth="2" fill="none" />
     
     {/* Scattered buds along the curve */}
     <g transform="translate(80, 140)">
        <ellipse cx="0" cy="0" rx="3" ry="6" fill={FLOWER_MAIN} transform="rotate(45)" />
        <ellipse cx="5" cy="-5" rx="3" ry="5" fill={FLOWER_LIGHT} transform="rotate(60)" />
     </g>
     <g transform="translate(110, 110)">
        <ellipse cx="0" cy="0" rx="4" ry="7" fill={FLOWER_DEEP} transform="rotate(45)" />
        <ellipse cx="6" cy="-4" rx="3" ry="6" fill={FLOWER_HIGHLIGHT} transform="rotate(50)" />
     </g>
     <g transform="translate(140, 90)">
        <ellipse cx="0" cy="0" rx="3" ry="6" fill={FLOWER_MAIN} transform="rotate(40)" />
     </g>
     <g transform="translate(160, 80)">
         <ellipse cx="0" cy="0" rx="3" ry="6" fill={FLOWER_HIGHLIGHT} transform="rotate(30)"/>
     </g>
  </svg>
);

export const LavenderPetals: React.FC = () => {
  // Increased count and varying sizes for better atmosphere
  const petals = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${10 + Math.random() * 25}s`,
    delay: `${Math.random() * 10}s`,
    opacity: 0.2 + Math.random() * 0.5,
    size: 2 + Math.random() * 6,
    rotation: Math.random() * 360,
    color: Math.random() > 0.5 ? FLOWER_LIGHT : FLOWER_HIGHLIGHT
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            backgroundColor: petal.color,
            left: petal.left,
            top: petal.top,
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`,
            animation: `float ${petal.animationDuration} infinite ease-in-out`
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg) translateX(0); }
          25% { transform: translateY(-15px) rotate(45deg) translateX(10px); }
          50% { transform: translateY(-30px) rotate(90deg) translateX(-10px); }
          75% { transform: translateY(-15px) rotate(135deg) translateX(10px); }
          100% { transform: translateY(0) rotate(180deg) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export const LargeLavenderBunch: React.FC<{className?: string}> = ({className}) => (
  <div className={`relative ${className}`}>
      {/* Layered stalks for a full bush effect */}
      <LavenderStalk className="absolute bottom-0 left-[-20px] w-[90%] h-[90%] transform -rotate-12 origin-bottom opacity-70 blur-[1px]" />
      <LavenderStalk className="absolute bottom-0 right-[-20px] w-[90%] h-[90%] transform rotate-12 origin-bottom opacity-70 blur-[1px]" />
      
      <LavenderStalk className="absolute bottom-0 left-[-10px] w-full h-full transform -rotate-6 origin-bottom z-10" />
      <LavenderStalk className="absolute bottom-0 left-[10px] w-full h-full transform rotate-6 origin-bottom z-10" />
      
      <LavenderStalk className="absolute bottom-[-10px] left-0 w-[110%] h-[110%] transform origin-bottom z-20" />
  </div>
);