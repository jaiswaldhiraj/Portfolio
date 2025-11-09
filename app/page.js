"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";
import DownloadButton from "./components/DownloadButton";
import Chips from "./components/Chips";
import ActiveChips from "./components/ActiveChips";


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
        className="m-10 mt-32 flex flex-col md:flex-row justify-center items-center gap-12 md:pl-4"
      >

        {/* Intro Text Section */}
        <motion.div
          id="textsection"
          className="w-96 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-lg text-[var(--text-secondary)]">Hello, I Am</div>

          <div className="md:text-5xl text-4xl font-extrabold text-[var(--accent)]">
            Dhiraj Jaiswal
          </div>

          {/* Typed JS here */}
          <div className="mt-2 text-2xl font-medium text-[var(--text-primary)]">
            <span ref={typedRef}></span>
          </div>

          {/* Download Resume */}

          <DownloadButton
            href="https://github.com/jaiswaldhiraj/Portfolio/releases/download/v1.0/Dhiraj.Jaiswal.Resume.pdf"
            text="Download Resume"
            icon="downloadpdf"
          />

        </motion.div>

        {/* Intro Image Section */}
        <motion.div
          id="imagesection"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/developer.png"
            className="transform hover:scale-95 transition duration-750"
            alt="My Photo"
            width={600} height={600}
            loading="lazy"
          />

        </motion.div>

      </section>



      {/* Divider */}
      {/* <div className="border-t bg-gray-200 my-16 w-6/7 mx-auto"></div> */}

      {/* Project Heading */}
      <h1 className="md:text-5xl text-3xl font-bold text-[var(--accent)] md:ml-40 ml-8 ">
        My Projects
      </h1>


      {/* ===== Projects Section ===== */}
      <section id="projects" className="m-10 md:mt-22 mt-10 mb-56 flex flex-col justify-center items-center gap-12">
        {/* Project 1 - Milap */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="transform hover:scale-95 duration-750">

            <Image
              src="/milap.svg"
              alt="Portfolio Website"
              width={500}
              height={300}
              loading="lazy"
              className=" rounded-4xl shadow-2xl"
              style={{ boxShadow: "var(--shadow-image)" }}
            />

          </div>
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="md:text-5xl text-3xl font-bold text-[var(--highlight)]">Milap &#x2013; (Dating App)</h2>
            <p className="mt-4 text-[var(--text-primary)]">
              A modern dating app with swipe cards, real-time chat, and
              Firebase-powered matchmaking.
            </p>
            <p className="mt-2 text-[var(--text-secondary)] text-l">
              Technologies used &#x2013;
            </p>

            <div className="mt-2 flex flex-wrap gap-1 justify-center md:justify-start">

              <Chips text="Java" icon="java" />
              <Chips text="Firebase" icon="firebase" />
              <ActiveChips href="https://github.com/jaiswaldhiraj/Milap-Repo-Public" text="Git Repo" icon="github" />

            </div>
          </div>
        </motion.div>

        {/* Project 2 - Portfolio Website */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Portfolio Image */}
          <div
            className="transform hover:scale-95 duration-750"
          >
            <Image
              src="/portfolio.jpg"
              alt="Portfolio Website"
              width={500}
              height={250}
              loading="lazy"
              className=" rounded-4xl shadow-2xl"
              style={{ boxShadow: "var(--shadow-image)" }}
            />

          </div>

          {/* Portfolio Text */}

          <div className="w-full md:w-1/2 text-center md:text-left">

            <h2 className="md:text-5xl text-3xl font-bold text-[var(--highlight)]">Portfolio Website</h2>

            <p className="mt-4 text-[var(--text-primary)]">
              My personal portfolio built with Next.js and Tailwind CSS,
              showcasing projects and skills.
            </p>

            <p className="mt-2 text-[var(--text-secondary)] text-l">Technologies used &#x2013;</p>

            <div className="mt-2 flex flex-wrap gap-1 justify-center md:justify-start">

              <Chips text="NextJS" icon="nextjs" />
              <Chips text="TailwindCSS" icon="tailwind" />
              <ActiveChips href="https://github.com/jaiswaldhiraj/Portfolio" text="Git Repo" icon="github" />

            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
