import React from "react";

const Navbar = () => (
    <nav className="bg-gradient-to-r from-pink-400 to-purple-500 text-gray-300 p-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Merna Abou Elsood</h1>
        <div className="space-x-6 text-lg">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );

export default Navbar;
