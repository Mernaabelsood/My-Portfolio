

// const Skills = () => (
//   <section id="skills" className="container mx-auto py-20 text-center">
//     <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-200 to-purple-300 shadow-xl rounded-3xl p-10 border border-gray-200 animate-slide-up">
//       <h2 className="text-5xl font-extrabold text-pink-600 mb-6">Skills</h2>
//       <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
//         {["ReactJS"," JavaScript", "TypeScript", "Tailwind CSS", "Redux", "Cypress", "Git" , "GitHub","Material UI", "Node.js","Next.js", "MongoDB","Regex", "HTML", "CSS", "React Query", "Context Api","SonarQube","Rest Api","Express", "Agile Methods"].map((skill, index) => (
//           <span key={index} className="px-5 py-2 bg-pink-300 rounded-full shadow-md hover:bg-pink-400 transition">{skill}</span>
//         ))}
//       </div>
//     </div>
//   </section>
// );

const Skills = () => (
  <section id="skills" className="container mx-auto py-20 text-center">
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#D9EAFD] to-[#BCCCDC] shadow-xl rounded-3xl p-10 border border-gray-200 animate-slide-up">
      <h2 className="text-5xl font-extrabold text-[#7B8793] mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {["ReactJS", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Cypress", "Git", "GitHub", "Material UI", "Node.js", "Next.js", "MongoDB", "Regex", "HTML", "CSS", "React Query", "Context API", "SonarQube", "Rest API", "Express", "Agile Methods"].map((skill, index) => (
          <span key={index} className="px-5 py-2 bg-[#BCCCDC] rounded-full shadow-md hover:bg-[#9AA6B2] transition">{skill}</span>
        ))}
      </div>
    </div>
  </section>
);


export default Skills;