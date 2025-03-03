import React from "react";

const projects = [
    {
      name: "Task Manager App",
      description:
        "A task management app built with React and Redux, featuring authentication and real-time updates.",
      techStack: "React, Redux, Tailwind CSS, Firebase",
      liveDemo: "https://your-vercel-link.vercel.app",
      github: "https://github.com/your-github/task-manager",
      image: "https://via.placeholder.com/1400x400" // Replace with actual project image URL
    },
    {
      name: "E-Commerce Store",
      description:
        "An e-commerce platform with product filtering, cart functionality, and Stripe payment integration.",
      techStack: "Next.js, Tailwind CSS, Stripe API, MongoDB",
      liveDemo: "https://your-vercel-link.vercel.app",
      github: "https://github.com/your-github/e-commerce",
      image: "https://via.placeholder.com/1400x400" // Replace with actual project image URL
    },
    // Add more projects as needed
  ];

  const ProjectList = () => {
    return (
      <div id="projects" className="container mx-auto px-6 py-20 max-w-7xl">

        <div className="space-y-20 flex flex-col items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full max-w-6xl  rounded-3xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="p-12 bg-from-pink-100 text-center rounded-b-3xl animate-slide-up">
                <h3 className="text-4xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-lg text-gray-600 my-4">{project.description}</p>
                <p className="text-md font-medium text-gray-800">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <div className="mt-6 flex justify-center gap-8">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white px-12 py-4 rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-110"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-12 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-110"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProjectList;
