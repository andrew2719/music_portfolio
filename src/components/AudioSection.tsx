import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import { Track } from '../types';
import { tracks } from '../data/tracks';

const AudioSection: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioSectionRef = useRef<HTMLDivElement>(null);
  
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };
  
  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };
  
  return (
    <section 
      ref={audioSectionRef}
      className="relative py-24 overflow-hidden" 
      id="audio"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        
        {/* Animated waveform grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          <span className="relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              🎧 Featured Tracks
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform"></span>
          </span>
        </h2>
        
        <div className="flex flex-col items-center">
          {/* Current track display */}
          <div className="w-full max-w-2xl">
            <div 
              className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-900/50 shadow-lg overflow-hidden mb-8"
              style={{ 
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.2), 0 0 30px rgba(168, 85, 247, 0.1) inset',
              }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500"></div>
              
              {/* Track info */}
              <h3 className="text-xl text-white font-medium mb-3">
                {tracks[currentTrackIndex].title}
              </h3>
              <p className="text-purple-300 text-sm mb-4">
                {tracks[currentTrackIndex].genre}
              </p>
              
              {/* Audio player */}
              <AudioPlayer 
                trackUrl={tracks[currentTrackIndex].soundCloudUrl} 
                title={tracks[currentTrackIndex].title}
              />
              
              {/* Description */}
              <p className="text-gray-400 mt-4 text-sm">
                {tracks[currentTrackIndex].description}
              </p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevTrack}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 hover:bg-purple-900 border border-purple-500/50 text-white transition-colors duration-300"
              aria-label="Previous track"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800">
              <span className="text-white text-sm">
                {currentTrackIndex + 1} / {tracks.length}
              </span>
            </div>
            <button 
              onClick={nextTrack}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 hover:bg-purple-900 border border-purple-500/50 text-white transition-colors duration-300"
              aria-label="Next track"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;