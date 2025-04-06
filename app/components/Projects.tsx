import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "GigJet",
    description:
      "A capstone winning full stack iOS and Android application catering to two user bases: taskers and talent seekers. " +
      "Taskers can post tasks they need help with, and talent seekers can browse tasks and apply to complete them. The app features a chat system, task tracking, and geolocation sharing.",
    image: "/GigJet.png",
    gitLink: "https://www.youtube.com/watch?v=M1adKEKeFLo&t=2s",
    technologies: ["React Native", "Firebase", "Tailwind CSS", "Figma"],
    buttonName: "Watch Video"
  },
  {
    title: "ED-VOICE.AI",
    description:
      "ED-VOICE.AI is an AI-powered platform for mock interviews, Q&A practice, and personalized feedback." +
      " It helps users prepare for interviews by offering realistic simulations and detailed performance reviews to boost confidence and improve skills.",
    image: "/Ed-Voice.png",
    gitLink: "https://ed-voice-ai-5tsn.vercel.app/",
    technologies: [
      "Next.js",
      "AssemblyAI",
      "AWS Polly",
      "Taiwind CSS",
      "OpenRouter.ai",
      "Convex",
    ],
    buttonName: "Live Demo"
  },
  {
    title: "BlackJacks",
    description:
      "Blackjack Console Game (Java) is a simple text-based card game where the player competes against the computer (dealer). The goal is to get a hand value closest to 21 without exceeding it. " +
      'The game includes options to "hit" or "stand" and handles card values, including aces as 1 or 11. It’s a basic console-based version of Blackjack',
    image: "/BlackJacks.webp",
    gitLink: "https://github.com/AdityaDutta3/Blackjacks/tree/master/src/blackjacks",
    technologies: ["Java"],
    buttonName: "Github"
  },
  {
    title: "CacheFlux",
    description:
      "CacheFlux is a fast and efficient API for handling real-time data and caching."+
      " It allows developers to easily interact with Redis for storing and retrieving key-value data, making it ideal for high-performance applications. "+
      "The API provides a simple interface to manage sessions, caching, and quick data lookups, enabling scalable and responsive web applications.",
    image: "/CacheFlux.png",
    gitLink: "https://github.com/AdityaDutta3/RedisAPI",
    technologies: ["Hono","Next.js","Redis"],
    buttonName: "Github"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-semibold text-gray-900 mb-12"
        >
          My Projects
        </motion.h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <Link href={project.gitLink} passHref>
                    <button className="w-full bg-black text-white p-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                      {project.buttonName}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technology Used Section */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
