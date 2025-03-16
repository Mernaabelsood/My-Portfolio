

// const Navbar = () => (
//     <nav className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold tracking-wide">Merna Abou Elsood</h1>
//         <div className="space-x-6 text-lg">
//           <a href="#about" className="hover:text-gray-500 transition">About</a>
//           <a href="#skills" className="hover:text-gray-500 transition">Skills</a>
          
//           <a href="#projects" className="hover:text-gray-500 transition">Projects</a>
//           <a href="#contact" className="hover:text-gray-500 transition">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );




import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] text-[#5F6A75] p-4 shadow-lg sticky top-0 z-50 w-full">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
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
        <div className="hidden md:flex space-x-4 sm:space-x-6 text-lg">
          <a href="#about" className="hover:text-gray-100 transition">About</a>
          <a href="#skills" className="hover:text-gray-100 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-100 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-100 transition">Contact</a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center space-y-3 w-full bg-[#9AA6B2] text-white py-4 rounded-md">
          <a
            href="#about"
            className="block py-2 text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

