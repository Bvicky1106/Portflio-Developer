import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-black flex items-center justify-center px-4">
      <div className="container mx-auto p-6 flex flex-col items-center justify-center">
        
        {/* Left side content (text and social media icons) */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 2 }}         // Initial scale (zoomed out)
            animate={{ scale: 1 }}         // Final scale (normal size)
            exit={{ scale: 0 }}            // Scale when exiting (zoom out)
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Hello, I'm VIGNESH.B</h1>
          </motion.div>
          <p className="mt-4 text-lg text-gray-300">I am a passionate developer skilled in React JS web development.</p>
          
          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://x.com/bvicky06" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-b-0823952a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-blue-700 hover:text-blue-600" />
            </a>
            <a href="https://github.com/Bvicky1106" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-gray-800 hover:text-blue-600" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
