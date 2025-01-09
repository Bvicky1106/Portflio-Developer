import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-dark-black shadow-md p-4">
      <div className="container mx-auto flex justify-center items-center">
        
        

        {/* Mobile Toggle Button */}
        <button
          aria-controls="navbar"
          type="button"
          aria-label="Toggle navigation"
          className="lg:hidden block text-white"
          onClick={toggleMenu}
        >
          <span className="w-6 h-1 bg-white block mb-1"></span>
          <span className="w-6 h-1 bg-white block mb-1"></span>
          <span className="w-6 h-1 bg-white block"></span>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-8">
          <a href="#home" className="text-white hover:text-blue-500">Home</a>
          <a href="#project" className="text-white hover:text-blue-500">Projects</a>
          <a href="#about" className="text-white hover:text-blue-500">About</a>
          <a href="#tools" className="text-white hover:text-blue-500">Skills</a>
          <a href="#resume" className="text-white hover:text-blue-500">Resume</a>
        </div>

       
        
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar">
        <div className="space-y-4">
          <a href="#home" className="block text-white hover:text-blue-500">Home</a>
          <a href="#projects" className="block text-white hover:text-blue-500">Projects</a>
          <a href="#about" className="block text-white hover:text-blue-500">About</a>
          <a href="#skills" className="block text-white hover:text-blue-500">Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
