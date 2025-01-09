import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMui, SiTailwindcss } from 'react-icons/si';

const Tools = () => {
  return (
    <section id='tools' className="bg-dark-black py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Tools and Technologies</h2>
        <p className="mt-4 text-lg text-gray-400">
          The tools and technologies I use to build modern web applications.
        </p>
        <div className="flex justify-center mt-8">
          <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 bg-gray-800 rounded-lg p-10 shadow-lg">
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-center">
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <FaHtml5 size={40} className="text-orange-500" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <FaCss3Alt size={40} className="text-blue-500" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <FaReact size={40} className="text-cyan-400" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <SiMui size={40} className="text-blue-800" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <SiTailwindcss size={40} className="text-sky-400" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <FaJsSquare size={40} className="text-yellow-500" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <FaNodeJs size={40} className="text-green-500" />
              </div>
              <div className="flex justify-center items-center w-20 h-20 bg-gray-900 rounded-full shadow-lg hover:scale-110 transform transition duration-200 ease-in-out">
                <FaGitAlt size={40} className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
