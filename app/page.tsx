"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Hero />
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <About />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Experience />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Skills />
      </motion.div>

      {/* Optional: Projects and ContactMe sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <ContactMe />
      </motion.div>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image 
            className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300 ease-in-out hover:scale-110 transform"
            src="/Avatar.jpeg" alt="Avatar" 
            width={40}
            height={40} 
            />
          </div>
        </footer>
      </Link> 
    </div>
  );
}
