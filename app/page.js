"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";
import DownloadButton from "./components/DownloadButton";
import SkillsCarousel from "./components/Skillcarousel";
import { TechChips } from "./components/TechChips";
import { ExtraCards } from "./components/ExtraCards";
import Services from "./components/Services";


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
        className=" mt-32 md:mt-40 flex flex-col md:flex-row justify-center items-center gap-12 md:pl-4"
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
      {/* <div className=" pl-16 md:pl-52 p-3 text-sm font-bold text-[var(--text-secondary)]">Tech Stack</div> */}
      <section
        className="pl-10 md:pl-52 mb-20 gap-3 mt-10 flex flex-wrap items-start"
      >
        <TechChips text={"Java"} icon={"java"} />
        <TechChips text={"Python"} icon={"python"} />
        <TechChips text={"JavaScript"} icon={"javascript"} />
        <TechChips text={"C++"} icon={"cpp"} />
        <TechChips text={"MySQL"} icon={"Database"} />
        <TechChips text={"Firebase"} icon={"firebase"} />
        <TechChips text={"React"} icon={"react"} />
        <TechChips text={"TailwindCSS"} icon={"tailwind"} />
      </section>


      {/* My Skills */}
      <section className="pt-16 pb-28 bg-[var(--background-dark)]">
        <SkillsCarousel />
      </section>



      {/* At a Glance */}
      <div className="pt-16">
        <h1 className="md:text-5xl text-center text-3xl font-extrabold text-[var(--accent)] ">
          At a Glance
        </h1>
        <h2 className="mt-5 mb-10 pl-10 pr-10 text-center text-l text-[var(--text-secondary)] mx-auto">
          A quick breakdown of the technologies I use and the work I&apos;ve completed so far.
        </h2>
      </div>

      <div className="pb-32 flex flex-wrap gap-20 justify-center items-center ml-36 mr-36">
        <ExtraCards no={"5+"} text={"Languages"} />
        <ExtraCards no={"3+"} text={"Frameworks"} />
        <ExtraCards no={"2+"} text={"Projects"} />
        <ExtraCards no={"2+"} text={"Tools"} />
      </div>




      {/* My Services */}
      <div className="pt-16 pb-32 bg-[var(--background-dark)]">
        <Services />
      </div>


    </>
  );
}
