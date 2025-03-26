import { Button } from "@/components/ui/button";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 container mx-auto py-4 flex items-center justify-between relative z-10">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="flex space-x-4">
          <SocialIcon
            className="rounded-full text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
            fgColor="currentColor"
            bgColor="transparent"
            url="https://www.linkedin.com/in/dutta-aditya/"
          />
          <SocialIcon
            className="rounded-full text-gray-400 hover:text-black transition duration-300 ease-in-out"
            fgColor="currentColor"
            bgColor="transparent"
            url="https://github.com/AdityaDutta3"
          />
          <SocialIcon
            className="rounded-full text-gray-400 hover:text-black transition duration-300 ease-in-out"
            fgColor="currentColor"
            bgColor="transparent"
            url="https://x.com/AdityaDutt37555"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 hover:text-white cursor-pointer"
      >
        <div>
          <Button
            className="bg-transparent text-gray-400 text-[15px] hover:text-white hover:bg-black
         transition duration-300 ease-in-out border border-gray-400 hover:border-black rounded-full px-3 py-2"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            GET IN TOUCH
          </Button>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
