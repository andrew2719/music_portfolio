import React from 'react';
import { Mail, Instagram, Music, Headphones } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        
        {/* Glowing border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-2 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                <Headphones className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Andrew Blaze</h3>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Creating unforgettable soundscapes across multiple genres including Pop, EDM, Indian fusion, and cinematic scores.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <a 
                  href="mailto:andrewblaze2719@gmail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  andrewblaze2719@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-purple-400" />
                <a 
                  href="https://instagram.com/andrew.pitta_music" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  @andrew.pitta_music
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                About
              </a>
              <a href="#audio" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Music
              </a>
              <a href="#testimonials" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Testimonials
              </a>
              <a href="mailto:andrewblaze2719@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Contact
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <h4 className="text-white font-medium mb-4">Genres</h4>
              <div className="flex flex-wrap gap-2">
                {['Pop', 'EDM', 'Indian Fusion', 'Cinematic', 'Rock', 'Ambient'].map((genre) => (
                  <span 
                    key={genre} 
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center"
                  >
                    <Music className="h-3 w-3 mr-1 text-purple-400" />
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Andrew Blaze. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-xs">
              Designed with passion for music
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;