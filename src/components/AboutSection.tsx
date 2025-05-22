import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="about">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', 
            filter: 'blur(3px) brightness(0.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-black/90 via-purple-900/40 to-black/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left side - glowing circular border */}
          <div className="w-full max-w-xs md:max-w-sm flex-shrink-0">
            <div className="relative rounded-full aspect-square overflow-hidden border-2 border-purple-500/50 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 animate-pulse-slow rounded-full"></div>
              <div className="h-full w-full rounded-full overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Andrew Blaze"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - text content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Who is Andrew Blaze?
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm a multi-genre music producer creating everything from Pop to EDM to Indian fusion and cinematic scores. I blend emotion, melody, and production to create unforgettable soundscapes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With over a decade of experience in composition and production, I've developed a unique style that bridges traditional musical elements with cutting-edge electronic production techniques.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a 
                  href="mailto:andrewblaze2719@gmail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  andrewblaze2719@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-purple-400" />
                <a 
                  href="https://instagram.com/andrew.pitta_music" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  @andrew.pitta_music
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;