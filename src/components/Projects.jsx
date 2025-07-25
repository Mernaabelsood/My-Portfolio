import React, { useState } from "react";
import image1 from "../assests/images/image1.png";
import image2 from "../assests/images/image2.png";
import image3 from "../assests/images/image3.png";
import image4 from "../assests/images/image4.png";
import image5 from "../assests/images/image5.png";
import image6 from "../assests/images/image6.png";
import image7 from "../assests/images/image7.png";
import image8 from "../assests/images/image8.png";
import image9 from "../assests/images/image9.png";
import image10 from "../assests/images/image10.png";
import image11 from "../assests/images/image11.png";
import image12 from "../assests/images/image12.png";
import image13 from "../assests/images/image13.png";
import image14 from "../assests/images/image14.png";
import { motion } from "framer-motion";

const projects = [
  {
    name: "EduNas",
    description:
      "A comprehensive admin panel for an educational platform. Features dual-system architecture supporting both organizations and instructors, complete with courses management, community features, user profiles, dashboards, financial management, and integrated payment gateway.",
    techStack: "React, Tailwind CSS, Antd, SWR, Redux Toolkit",
    liveDemo: "https://edunas.digitalhub.com.eg/",
    image: image13,
  },
  {
    name: "Wild Oasis Website",
    description:
      "A fullstack website for discovering and booking cabins, featuring secure authentication, a responsive UI, and server-side rendering (SSR) for optimal performance and SEO.",
    techStack: "Next.Js, React.Js, Context API, Supabase, Tailwind CSS",
    liveDemo: "https://wild-oasis-website-jade.vercel.app/",
    github: "https://github.com/Mernaabelsood/Wild-Oasis-Website",
    image: image8,
  },

  {
    name: "Pizza Store",
    description:
      "React app with features including a menu, cart, user orders, and dashboard, supporting English/Arabic with RTL/LTR toggle and unit testing.",
    techStack:
      "Redux Toolkit, React Router, Tailwind CSS, Jest, Testing Library, Cypress",
    liveDemo: "https://pizza-store-eight.vercel.app/",
    github: "https://github.com/Mernaabelsood/pizza-store",
    image: image2,
  },
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
    name: "Educational Platform",
    description:
      "A comprehensive UI implementation of an educational platform admin panel with multiple pages, featuring modern design patterns and responsive layouts.",
    techStack: "React, Tailwind CSS, Antd",
    liveDemo: "https://test-project-ui-sand.vercel.app/",
    github: "https://github.com/Mernaabelsood/test-project-ui",
    image: image14,
  },
  {
    name: " Social Media App",
    description:
      "A responsive React app includes features like a night mode option and updating profile.",
    techStack: "Redux Toolkit, React Router, Material UI ",
    liveDemo: "https://social-media-app-beta-smoky.vercel.app/",
    github: "https://github.com/Mernaabelsood/social-media-app",
    image: image3,
  },
  {
    name: "Wild Oasis Application",
    description:
      "A modern React cabin booking web app featuring real-time data fetching, sorting, filtering, dark mode, pagination and many features.",
    techStack: "React Router, supabase, React Query, Styled Components",
    liveDemo: "https://the-wild-oasis-lovat-eight.vercel.app/",
    github: "https://github.com/Mernaabelsood/The-Wild-Oasis",
    image: image7,
  },
  {
    name: "Sports Website",
    description:
      "A modern React sports  web app featuring charts dashboard and analytics.",
    techStack: "React, Chart.js, Tailwind CSS, Context API",
    liveDemo: "https://sports-app-ebon.vercel.app/",
    image: image9,
  },
  {
    name: "AIO System",
    description:
      "A modern web application platform for business process automation and management. Features dashboards, analytics, and secure user access.",
    techStack: "React, Tailwind CSS, Antd, SWR, Redux Toolkit",
    liveDemo: "https://aio.achievo.app/",
    image: image11,
  },
  {
    name: "AIO Security System",
    description:
      "A secure digital hub for managing and monitoring security operations. Includes real-time analytics and user management.",
    techStack: "Next.Js, Tailwind CSS, Antd, SWR, Redux Toolkit",
    liveDemo: "https://aio-security.digitalhub.com.eg/",
    image: image10,
  },
  {
    name: "SmartCharts Landing",
    description: "A responsive landing page of charts, calendar, sidebar",
    techStack: "TypeScript, Tailwind CSS, SASS",
    liveDemo: "https://landing-page-task-peach.vercel.app/",
    image: image12,
  },
  {
    name: "Games-Review Website",
    description: "A website for game reviews with fetching data.",
    techStack: "HTML, CSS, Bootstrap, JavaScript, APIs",
    liveDemo: "https://game-review-website.vercel.app/",
    github: "https://github.com/Mernaabelsood/Game-Website",
    image: image4,
  },
  {
    name: "Weather App",
    description:
      "simple website that gives users the ability to check the weather of three consecutive days in any place in the world.",
    techStack: "HTML, CSS, Bootstrap, JavaScript",
    liveDemo: "https://weatherapp-weld-nine.vercel.app/",
    github: "https://github.com/Mernaabelsood/Weather-APP",
    image: image6,
  },

  {
    name: "Resturant Landing Page",
    description: "A landing page for a restaurant.",
    techStack: "HTML, CSS",
    liveDemo: "https://mernaabelsood.github.io/Mealify/",
    github: "https://github.com/Mernaabelsood/Mealify",
    image: image5,
  },
];

const tabOptions = [
  { label: "All", value: "all" },
  { label: "Personal Projects", value: "personal" },
  { label: "Work Projects", value: "work" },
];

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  let filteredProjects = projects;
  if (selectedTab === "personal") {
    filteredProjects = projects.filter(
      (project) =>
        project.name !== "Sports Website" &&
        project.name !== "AIO System" &&
        project.name !== "AIO Security System" &&
        project.name !== "SmartCharts Landing" &&
        project.name !== "EduNas"
    );
  } else if (selectedTab === "work") {
    filteredProjects = projects.filter(
      (project) =>
        project.name === "Sports Website" ||
        project.name === "AIO System" ||
        project.name === "AIO Security System" ||
        project.name === "SmartCharts Landing" ||
        project.name === "EduNas"
    );
  }

  return (
    <div id="projects" className="container mx-auto px-6 max-w-7xl">
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl shadow-md bg-[#D9EAFD] dark:bg-gray-800">
          {tabOptions.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={`px-6 py-2 font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
                ${
                  selectedTab === tab.value
                    ? "bg-[#9AA6B2] dark:bg-gray-700 text-white"
                    : "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-[#BCCCDC] dark:hover:bg-gray-700"
                }
              `}
              aria-current={selectedTab === tab.value ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Projects List */}
      <div className="space-y-14 flex flex-col items-center">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-4xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-gradient-to-br from-[#D9EAFD] to-[#BCCCDC] dark:from-gray-800 dark:to-gray-900 transition-colors duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image Frame */}
            <div className="relative border-4 border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            {/* Project Details */}
            <div className="p-8 text-center rounded-b-2xl">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {project.name}
              </h3>
              <p className="text-md text-gray-600 dark:text-gray-300 my-3">
                {project.description}
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-6">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9AA6B2] dark:bg-gray-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#7B8793] dark:hover:bg-gray-600 transition-transform transform hover:scale-110 font-semibold"
                >
                  Live Demo
                </a>
                {project.name !== "Sports Website" &&
                  project.name !== "AIO System" &&
                  project.name !== "AIO Security System" &&
                  project.name !== "SmartCharts Landing" &&
                  project.name !== "EduNas" &&
                  project.name !== "Educational Platform" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5F6A75] dark:bg-gray-900 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#3E4A56] dark:hover:bg-gray-800 transition-transform transform hover:scale-110 font-semibold"
                    >
                      GitHub Repo
                    </a>
                  )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
