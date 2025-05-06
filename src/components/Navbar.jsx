import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] dark:from-gray-800 dark:to-gray-700 text-[#5F6A75] dark:text-gray-100 p-4 shadow-lg sticky top-0 z-50 w-full transition-colors duration-500">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#5F6A75] dark:text-gray-100">
            Merna Abou Elsood
          </h1>

          {/*  Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 sm:space-x-6 text-lg items-center">
            <a
              href="#about"
              className="hover:text-gray-100 dark:hover:text-[#BCCCDC] transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-gray-100 dark:hover:text-[#BCCCDC] transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-gray-100 dark:hover:text-[#BCCCDC] transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-100 dark:hover:text-[#BCCCDC] transition"
            >
              Contact
            </a>
            <motion.button
              onClick={() => setShowCV(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 rounded font-semibold shadow transition bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] dark:from-gray-800 dark:to-gray-700 text-[#5F6A75] dark:text-gray-100 border border-[#9AA6B2] dark:border-gray-700"
            >
              Show CV
            </motion.button>
            <button
              onClick={toggleTheme}
              className="ml-2 px-3 py-2 rounded shadow transition bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] dark:from-gray-800 dark:to-gray-700 text-[#5F6A75] dark:text-gray-100 border border-[#9AA6B2] dark:border-gray-700"
              aria-label="Toggle Night Mode"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col items-center space-y-3 w-full bg-[#9AA6B2] dark:bg-gray-800 text-white dark:text-gray-100 py-4 rounded-md transition-colors duration-500">
            <a
              href="#about"
              className="block py-2 text-lg hover:text-gray-300 dark:hover:text-[#BCCCDC] transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block py-2 text-lg hover:text-gray-300 dark:hover:text-[#BCCCDC] transition"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block py-2 text-lg hover:text-gray-300 dark:hover:text-[#BCCCDC] transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-2 text-lg hover:text-gray-300 dark:hover:text-[#BCCCDC] transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <motion.button
              onClick={() => {
                setShowCV(true);
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center py-2 text-lg rounded shadow transition bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] dark:from-gray-800 dark:to-gray-700 text-[#5F6A75] dark:text-gray-100 border border-[#9AA6B2] dark:border-gray-700"
            >
              Show CV
            </motion.button>
            <button
              onClick={toggleTheme}
              className="mt-2 px-3 py-2 rounded shadow transition bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] dark:from-gray-800 dark:to-gray-700 text-[#5F6A75] dark:text-gray-100 border border-[#9AA6B2] dark:border-gray-700"
              aria-label="Toggle Night Mode"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        )}
      </nav>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-6 relative flex flex-col items-center">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white focus:outline-none"
              aria-label="Close CV Modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#5F6A75] dark:text-gray-100">
              My CV
            </h2>
            <iframe
              src="/Merna_Abou_Elsood_CV.pdf"
              title="CV"
              className="w-full h-[60vh] rounded-lg border border-gray-200 dark:border-gray-700 mb-4 bg-white dark:bg-gray-800"
            />
            <a
              href="/Merna_Abou_Elsood_CV.pdf"
              download
              className="px-6 py-2 rounded font-semibold shadow transition bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] dark:from-gray-800 dark:to-gray-700 text-[#5F6A75] dark:text-gray-100 border border-[#9AA6B2] dark:border-gray-700"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
