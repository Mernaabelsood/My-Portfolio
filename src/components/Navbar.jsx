import React from "react";

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

const Navbar = () => (
  <nav className="bg-gradient-to-r from-[#BCCCDC] to-[#9AA6B2] text-[#5F6A75] p-6 shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-wide">Merna Abou Elsood</h1>
      <div className="space-x-6 text-lg">
        <a href="#about" className="hover:text-gray-100 transition">About</a>
        <a href="#skills" className="hover:text-gray-100 transition">Skills</a>
        <a href="#projects" className="hover:text-gray-100 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-100 transition">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
