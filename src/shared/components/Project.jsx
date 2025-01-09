import React from "react";

const Project = () => {
  const projectList = [
    {
      title: "CRUD Application",
      description: "A simple CRUD application using React Js.",
      link: "https://github.com/Bvicky1106/CRUD-Operations-",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and experience.",
      link: "https://github.com/Bvicky1106/vigneshportfolio",
    },
    {
      title: "REST Application",
      description: "Application created for demonstrating REST API features.",
      link: "https://github.com/Bvicky1106/REST-Application",
    },
    {
      title: "React Router",
      description:
        "A productivity app to organize tasks, set reminders, and track progress.",
      link: "https://github.com/Bvicky1106/ReactRouter",
    },
  ];

  return (
    <section id="project" className="bg-dark-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-400 mt-4">
            Explore some of the projects I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 justify-center">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 h-full flex flex-col items-center text-center"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                GitHub Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
