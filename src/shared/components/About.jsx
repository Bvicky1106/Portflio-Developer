import React from "react";

const About = () => {
  return (
    <section id='about' className="bg-gradient-to-br -mt-10 bg-dark-black to-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-400">
          Energetic Junior Front-End Developer with over 2 years of professional experience specializing in React-based
 applications. Proficient in JavaScript and Git. Successfully developed 10+ user-centric React applications and
 resolved 50+ website issues. Passionate about creating intuitive, responsive designs and eager to contribute
 expertise to impactful projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-500"
          >
            <h3 className="text-2xl font-semibold mb-2">My Journey</h3>
            <p className="text-gray-300">
              I started my journey as a developer with a curiosity for coding. Over the years, I've
              honed my skills in front-end and back-end development, delivering projects that make a
              real impact.
            </p>
          </div>

          {/* Right Section */}
          <div
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-500"
          >
            <h3 className="text-2xl font-semibold mb-2">Skills and Expertise</h3>
            <p className="text-gray-300">
              I am proficient in JavaScript, React and Tailwind CSS. My expertise lies in
              building responsive, user-friendly, and high-performing web applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
