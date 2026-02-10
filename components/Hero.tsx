import React from 'react';
import { LargeLavenderBunch, LavenderPetals } from './LavenderDecor';
import Logo from './Logo';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const section = document.getElementById('produtos');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A3A40]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#152e33] via-[#1A3A40] to-[#152e33] z-0"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
      
      {/* Floating Petals everywhere */}
      <LavenderPetals />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 flex flex-col items-center text-center relative">
        
        {/* Soft light behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="animate-fade-in-up flex flex-col items-center">
           {/* Logo - Slightly larger */}
           <Logo size={320} className="mb-8" />

           {/* Store Name - New Addition */}
           <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#C5A028] via-[#F3E5AB] to-[#C5A028] mb-6 tracking-[0.2em] uppercase drop-shadow-2xl">
             KMaia's Craft
           </h1>

           {/* Decorative Separator */}
           <div className="flex items-center gap-4 mb-8 opacity-70">
             <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-brand-gold"></div>
             <div className="w-2 h-2 rotate-45 border border-brand-gold bg-brand-dark"></div>
             <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-brand-gold"></div>
           </div>

           {/* New Tagline */}
           <p className="font-serif text-2xl md:text-4xl text-[#E0D8EA] italic font-light tracking-wide mb-14 drop-shadow-lg leading-relaxed">
             "Onde a tua estética se torna colecionável"
           </p>
           
           <button 
             onClick={scrollToProducts}
             className="group relative px-14 py-4 bg-transparent border border-brand-gold/40 text-brand-gold font-display tracking-[0.25em] text-xs md:text-sm hover:border-brand-gold hover:text-brand-dark transition-all duration-700 rounded-sm overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]"
           >
             <span className="relative z-10 font-bold group-hover:text-brand-dark transition-colors">VER COLEÇÃO</span>
             <div className="absolute inset-0 bg-brand-goldLight transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
           </button>
        </div>
      </div>

      {/* Large Artistic Lavender Bunches in Corners */}
      <div className="absolute bottom-[-60px] left-[-40px] w-72 h-[450px] md:w-96 md:h-[600px] pointer-events-none z-10 opacity-80 transition-transform hover:scale-105 duration-1000 filter brightness-90">
          <LargeLavenderBunch className="w-full h-full" />
      </div>

      <div className="absolute bottom-[-60px] right-[-40px] w-72 h-[450px] md:w-96 md:h-[600px] pointer-events-none z-10 opacity-80 transform scale-x-[-1] transition-transform hover:scale-x-[-1] hover:scale-y-105 duration-1000 filter brightness-90">
          <LargeLavenderBunch className="w-full h-full" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce text-brand-gold/60 cursor-pointer hover:text-brand-gold transition-colors" onClick={scrollToProducts}>
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;