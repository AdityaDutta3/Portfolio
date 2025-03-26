import { FaPython, FaJs, FaJava, FaDocker, FaAws, FaFigma } from "react-icons/fa";
import { DiMysql, DiPostgresql, DiMongodb } from "react-icons/di";
import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={skillVariants}
        >
          My Skills
        </motion.h2>

        {/* Skills Icons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* JavaScript */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <FaJs className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
          </motion.div>

          {/* Python */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <FaPython className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Python</h3>
          </motion.div>

          {/* Java */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <FaJava className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Java</h3>
          </motion.div>

          {/* Docker */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <FaDocker className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Docker</h3>
          </motion.div>

          {/* AWS */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <FaAws className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">AWS</h3>
          </motion.div>

          {/* MySQL */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <DiMysql className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">MySQL</h3>
          </motion.div>

          {/* PostgreSQL */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <DiPostgresql className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">PostgreSQL</h3>
          </motion.div>

          {/* MongoDB */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <DiMongodb className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">MongoDB</h3>
          </motion.div>

          {/* Figma */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <FaFigma className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Figma</h3>
          </motion.div>

          {/* React */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <SiReact className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">React</h3>
          </motion.div>

          {/* Next.js */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <SiNextdotjs className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Next.js</h3>
          </motion.div>

          {/* TailwindCSS */}
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110"
            variants={skillVariants}
          >
            <SiTailwindcss className="text-5xl text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">TailwindCSS</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
