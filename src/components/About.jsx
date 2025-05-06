import React from "react";
import { motion } from "framer-motion";

// const About = () => (
//     <section id="about" className="container mx-auto pt-20 text-center">
//       <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-200 to-purple-300 shadow-xl rounded-3xl p-10 border border-gray-200 animate-fade-in">
//         <h2 className="text-5xl font-extrabold text-pink-600 mb-6">About Me</h2>
//         <p className="text-xl text-gray-700 leading-relaxed">I'm a passionate Front-End Developer with experience in React, JavaScript, TypeScript and Next.js, dedicated to building seamless and modern web applications.</p>
//       </div>
//     </section>
//   );

const About = () => (
  <motion.section
    id="about"
    className="py-12 px-4 sm:px-8 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#D9EAFD] to-[#BCCCDC] dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-3xl p-10 border border-gray-200 dark:border-gray-700 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-[#7B8793] dark:text-gray-100 mb-6">About Me</h2>
      <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
        I'm a passionate Front-End Developer with experience in React,
        JavaScript, TypeScript and Next.js, dedicated to building seamless and
        modern web applications.
      </p>
    </div>
  </motion.section>
);

export default About;
