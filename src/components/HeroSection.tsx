import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToAudio: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToAudio }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', 
            filter: 'blur(4px) brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/70 to-rose-900/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-300">
            Andrew Blaze
          </span>
        </h1>
        <div className="h-0.5 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6" />
        <h2 className="text-xl md:text-2xl font-light mb-10 text-gray-300 tracking-wide">
          <span className="inline-block px-2">Keyboardist</span>
          <span className="inline-block text-purple-400 mx-1">|</span>
          <span className="inline-block px-2">Guitarist</span>
          <span className="inline-block text-purple-400 mx-1">|</span>
          <span className="inline-block px-2">Songwriter</span>
          <span className="inline-block text-purple-400 mx-1">|</span>
          <span className="inline-block px-2">Music Producer</span>
        </h2>
        <button 
          onClick={scrollToAudio}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium text-white transition duration-300 ease-out"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600"></span>
          <span className="absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 blur-3xl transition-all duration-500 ease-out group-hover:rotate-90 group-hover:opacity-40"></span>
          <span className="relative flex items-center gap-2 text-white">
            🎧 Hear My Work
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </span>
        </button>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;