import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AudioSection from './components/AudioSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  const audioSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToAudio = () => {
    audioSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection scrollToAudio={scrollToAudio} />
        <AboutSection />
        <div ref={audioSectionRef}>
          <AudioSection />
        </div>
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;