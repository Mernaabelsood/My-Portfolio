
import React from "react";
import image1 from "../assests/images/image1.png";
import image2 from "../assests/images/image2.png";

const projects = [
  {
    name: "E-commerce Application",
    description:
      "A Responsive React Web App Featuring A Dynamic Product Catalog, Detailed Product Pages, Shopping Cart, Wishlist, And Checkout Functionality. It Offers Easy Navigation.",
    techStack: "Context API, React Query, React Router, Bootstrap",
    liveDemo: "https://e-commerce-project-sepia-alpha.vercel.app/",
    github: "https://github.com/Mernaabelsood/E-commerce-project",
    image: image1, 
  },
  {
    name: "Pizza Store",
    description:
      "A Responsive React App Has Features Including A Menu, Cart, User Orders, And Dashboard.",
    techStack: "Redux, React Router, Tailwind CSS",
    liveDemo: "https://pizza-store-eight.vercel.app/",
    github: "https://github.com/Mernaabelsood/pizza-store",
    image: image2,
  },
];

const ProjectList = () => {
  return (
    <div id="projects" className="container mx-auto px-6 py-20 max-w-7xl">
      <div className="space-y-14 flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Frame */}
            <div className="relative border-4 border-gray-300 rounded-2xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Project Details */}
            <div className="p-8 bg-from-pink-100 text-center rounded-b-2xl animate-slide-up">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-md text-gray-600 my-3">{project.description}</p>
              <p className="text-sm font-medium text-gray-800">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <div className="mt-5 flex justify-center gap-6">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-110"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-110"
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

   
