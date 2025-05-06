import { motion } from "framer-motion";

// const Contact = () => (
//   <section id="contact" className="container mx-auto py-20 text-center">
//     <div className="max-w-4xl mx-auto  shadow-xl rounded-3xl p-10 border border-gray-200 animate-slide-up">
//       <h2 className="text-5xl font-extrabold text-pink-600 mb-6">Contact Me</h2>
//       <p className="text-lg">📧 Email: <a href="mailto:merna217@gmail.com" className="text-blue-500 hover:underline">merna217@gmail.com</a></p>
//       <p className="text-lg">📞 Phone: <a href="tel:+201060120767" className="text-blue-500 hover:underline">+20 106 012 0767</a></p>
//       <p className="text-lg">🔗 LinkedIn: <a href="https://www.linkedin.com/in/merna-ab-elsood/" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
//       <p className="text-lg">💻 GitHub: <a href="https://github.com/Mernaabelsood" className="text-blue-500 hover:underline">GitHub Profile</a></p>
//     </div>
//   </section>
// );

const Contact = () => (
  <motion.section
    id="contact"
    className="container mx-auto py-20 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#D9EAFD] to-[#BCCCDC] dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-3xl p-10 border border-gray-200 dark:border-gray-700">
      <h2 className="text-5xl font-extrabold text-[#7B8793] dark:text-gray-100 mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        📧 Email:{" "}
        <a
          href="mailto:merna217@gmail.com"
          className="underline text-gray-600 dark:text-gray-300"
        >
          merna217@gmail.com
        </a>
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        📞 Phone:{" "}
        <a
          href="tel:+201060120767"
          className="underline text-gray-600 dark:text-gray-300"
        >
          +20 106 012 0767
        </a>
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/merna-ab-elsood/"
          className="underline text-gray-600 dark:text-gray-300"
        >
          LinkedIn Profile
        </a>
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        💻 GitHub:{" "}
        <a
          href="https://github.com/Mernaabelsood"
          className="underline text-gray-600 dark:text-gray-300"
        >
          GitHub Profile
        </a>
      </p>
    </div>
  </motion.section>
);

export default Contact;
