"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Application Developer",
          "Web Developer ",
          "Tech Enthusiast",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      {/* ===== Intro Section ===== */}
      <section
        id="firstsection"
        className="m-10 mt-32 flex flex-col md:flex-row justify-center items-center gap-12"
      >

        {/* Intro Text Section */}
        <motion.div
          id="textsection"
          className="w-96 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-lg text-gray-400">Hello, I Am</div>

          <div className="text-5xl font-extrabold text-orange-700">
            Dhiraj Jaiswal
          </div>

          {/* Typed JS here */}
          <div className="mt-2 text-2xl font-medium">
            <span ref={typedRef}></span>
          </div>

          {/* Download Resume */}
          <motion.a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-orange-600 text-xl text-white rounded-lg font-semibold hover:bg-orange-700 transition duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

        </motion.div>

        {/* Intro Image Section */}
        <motion.div
          id="imagesection"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image 
            src="/developer.png" 
            className="transform hover:scale-95 transition duration-750"
            alt="My Photo" 
            width={600} height={600} 
          />

        </motion.div>

      </section>



      {/* Divider */}
      <div className="border-t border-gray-300 my-16 w-6/7 mx-auto"></div>

      {/* Project Heading */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-5xl font-bold text-orange-700 md:ml-40 ml-8 ">
            My Projects 🚀
          </h1>

      </motion.div>



      {/* ===== Projects Section ===== */}
      <section id="projects" className="m-10 mt-22 mb-56 flex flex-col justify-center items-center gap-12">
        {/* Project 1 - Milap */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl shadow-amber-500 shadow-2xl relative flex justify-center items-center p-6 overflow-hidden transform hover:scale-95 transition duration-750">
            {/* Background image with transparency */}
            <div className="absolute inset-0 bg-[url('/milap-bg.png')] bg-cover bg-center opacity-95"></div>

            {/* Foreground content */}
            <Image
              src="/milap.svg"
              alt="Milap App"
              width={450}
              height={350}
              className="relative z-10 "
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold text-orange-700">Milap - ( Dating App )</h2>
            <p className="mt-4 text-gray-600">
              A modern dating app with swipe cards, real-time chat, and
              Firebase-powered matchmaking.
            </p>
            <p className="mt-2 text-gray-400 text-l">
              Technologies used -
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">


              <div className=" flex justify-center items-center p-1 rounded-xl bg-white">
                <Image
                  src="/java.svg"
                  alt="Portfolio Website"
                  width={120}
                  height={20}
                />
              </div>
              <div className=" flex justify-center items-center p-1 rounded-xl bg-white">
                <Image
                  src="/firebase.svg"
                  alt="Portfolio Website"
                  width={120}
                  height={20}
                />
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jaiswaldhiraj/Milap"
                className="flex items-center gap-2 p-3 rounded-xl bg-cyan-950 text-white font-medium shadow-md hover:bg-cyan-900 transition border-2 border-white"
              >
                <FaGithub className="text-xl" />Git Repo
              </Link>

              <a
                href="/projects" // Replace with your GitHub repo link
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-orange-600 text-white font-medium shadow-md hover:bg-orange-700 transition border-2 border-white"
              >
                Read More ➤
              </a>

            </div>
          </div>
        </motion.div>

        {/* Project 2 - Portfolio Website */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >

          {/* Portfolio Image */}
          <div 
          className="md:w-1/2 rounded-2xl shadow-lg transform hover:scale-95 transition duration-750"
          >
            <Image
              src="/portfolio.png"
              alt="Portfolio Website"
              width={600}
              height={400}
              className=" rounded-2xl shadow-amber-500 shadow-2xl"
            />

          </div>

          {/* Portfolio Text */}

          <div className="w-full md:w-1/2 text-center md:text-left">

            <h2 className="text-5xl font-bold text-orange-700">Portfolio Website</h2>

            <p className="mt-4 text-gray-600">
              My personal portfolio built with Next.js and Tailwind CSS,
              showcasing projects and skills.
            </p>

            <p className="mt-2 text-gray-400 text-l">Technologies used -</p>

            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">

              <div className=" flex justify-center items-center p-4 rounded-xl bg-white">
                <Image
                  src="/nextjs.svg"
                  alt="Portfolio Website"
                  width={120}
                  height={30}
                />
              </div>

              <div className=" flex justify-center items-center p-4 rounded-xl bg-white ">
                <Image
                  src="/tailwindcss.svg"
                  alt="Portfolio Website"
                  width={120}
                  height={30}
                />
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jaiswaldhiraj/Portfolio"
                className="flex items-center gap-2 p-3 rounded-xl bg-cyan-950 text-white font-medium shadow-md hover:bg-cyan-900 transition border-2 border-white"
              >
                <FaGithub className="text-xl" />
                Git Repo
              </Link>

              <a
                href="/projects"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-orange-600 text-white font-medium shadow-md hover:bg-orange-500 
                transition border-2 border-white"
                >
                Read More ➤
              </a>

            </div>
          </div>
        </motion.div> 
      </section>
    </>
  );
}
