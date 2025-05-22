import React, { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg shadow-purple-900/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-transparent'}`}>
            <Headphones className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-white font-bold text-lg">Andrew Blaze</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
            Home
          </a>
          <a href="#about" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
            About
          </a>
          <a href="#audio" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
            Music
          </a>
          <a href="#testimonials" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
            Testimonials
          </a>
          <a 
            href="mailto:andrewblaze2719@gmail.com" 
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-80 border-b border-purple-900/50' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#" 
            className="text-white hover:text-purple-400 transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-purple-400 transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#audio" 
            className="text-white hover:text-purple-400 transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Music
          </a>
          <a 
            href="#testimonials" 
            className="text-white hover:text-purple-400 transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="mailto:andrewblaze2719@gmail.com" 
            className="text-white hover:text-purple-400 transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;