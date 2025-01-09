import React from 'react';
import {  FaTwitter, FaLinkedin,FaGithub,FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-2xl font-semibold">
              <span>Let's </span>
              <span>Connect!</span>
            </div>

            <div className="flex gap-6 mt-4">
              <a href="https://github.com/Bvicky1106" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://x.com/bvicky06" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/in/vignesh-b-0823952a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900" />
              </a>
              <a href="https://www.linkedin.com/in/vignesh-b-0823952a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} className="text-blue-700 hover:text-blue-900" />
              </a>
            </div>

            <hr className="w-48 border-gray-600 my-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
