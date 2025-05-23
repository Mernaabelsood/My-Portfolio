import { motion } from "framer-motion";

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

const skillList = [
  "ReactJS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Cypress",
  "Git",
  "GitHub",
  "Material UI",
  "Node.js",
  "Next.js",
  "MongoDB",
  "Regex",
  "HTML",
  "CSS",
  "React Query",
  "Context API",
  "SonarQube",
  "Rest API",
  "Express",
  "Agile Methods",
  "Jest",
  "Testing Library",
];

const Skills = () => (
  <motion.section
    id="skills"
    className="container mx-auto py-20 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#D9EAFD] to-[#BCCCDC] dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-3xl p-10 border border-gray-200 dark:border-gray-700">
      <h2 className="text-5xl font-extrabold text-[#7B8793] dark:text-gray-100 mb-6">
        Skills
      </h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {skillList.map((skill, index) => (
          <motion.span
            key={index}
            className="px-5 py-2 bg-[#BCCCDC] dark:bg-gray-700 rounded-full shadow-md hover:bg-[#9AA6B2] dark:hover:bg-gray-600 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Skills;
