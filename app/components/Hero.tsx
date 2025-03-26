import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero= () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="mb-4"
      >
        <motion.div
          whileInView={{ y: [0, -50], opacity: [1, 0.7] }}
          transition={{
            duration: 2,
            ease: "easeOut",
            type: "tween",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative"
        >
          <Image
            className="rounded-full mx-auto border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-110"
            width={256} // Increased width
            height={256} // Increased height
            src="/Avatar.jpeg"
            alt="Jurhyung Fark"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="text-lg uppercase text-gray-600 pb-2 tracking-[12px] md:text-xl"
      >
        Software Engineer
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="text-4xl font-semibold lg:text-7xl text-gray-800 scroll-px-10 px-4 md:text-5xl"
      >
        Aditya Dutta
      </motion.h1>

      <div className="pt-5">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0"
        >
          <Button variant="ghost" className="w-full md:w-auto">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" className="w-full md:w-auto">
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="ghost" className="w-full md:w-auto">
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" className="w-full md:w-auto">
            <Link href="#experience">Experience</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
