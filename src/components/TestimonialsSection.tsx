import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative py-20 overflow-hidden" id="testimonials">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black" />
        
        {/* Animated light lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent w-full animate-[pulse_4s_ease-in-out_infinite]"
              style={{ 
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.2 + Math.random() * 0.3
              }}
            />
          ))}
          
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent h-full animate-[pulse_4s_ease-in-out_infinite]"
              style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.2 + Math.random() * 0.3
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          <span className="relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              What People Say
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform"></span>
          </span>
        </h2>
        
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`absolute w-full transition-all duration-1000 ease-in-out ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < activeIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div 
                className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 shadow-lg mx-auto max-w-2xl text-center"
                style={{ 
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.15), 0 0 40px rgba(168, 85, 247, 0.05) inset',
                }}
              >
                <p className="text-gray-300 text-lg italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-purple-500 w-6' 
                  : 'bg-gray-600 hover:bg-purple-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;