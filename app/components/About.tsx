import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 min-h-screen bg-gray-50 flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              src="/Aditya.jpg"
              alt="Aditya Dutta"
              className="rounded-full w-48 h-48 object-cover border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hello, I'm Aditya Dutta, a passionate and detail-oriented software engineer with a knack for creating efficient, user-friendly, and innovative solutions. With a solid foundation in modern web technologies, I specialize in building scalable and maintainable applications that make a positive impact on businesses and users alike.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I believe in the power of collaboration and continuous learning, always striving to stay ahead of industry trends. Whether working independently or as part of a team, I take pride in delivering high-quality code and ensuring seamless user experiences. My goal is to build impactful software that solves real-world problems.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. In my free time, I also love traveling, reading tech blogs, and experimenting with new programming languages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
