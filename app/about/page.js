"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Certificates } from "../components/Certificates";
import { Educations } from "../components/Educations";
import { Skills } from "../components/Skills";
import ActiveChips from "../components/ActiveChips";
import OnlyIcon from "../components/OnlyIcon";

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto md:mt-32 mt-28 mb-56 px-6">
      {/* ABOUT HERO */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
      >
        {/* Avatar + Info */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
            transition: { duration: 0.2 },
          }}
          className="md:col-span-1 flex flex-col items-center text-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white mb-4">
            <Image
              src="/avatar.png"
              alt="Dhiraj Jaiswal"
              loading="lazy"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>


          <h3 className="text-xl font-extrabold text-[var(--accent)]">
            Dhiraj Jaiswal
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Web & App Developer • BCA
          </p>

          <p className="mt-3 text-sm text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-xs" > <OnlyIcon icon={"mapmarker"} /></span>Mumbai, India

          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
            transition: { duration: 0.2 },
          }}
          className="md:col-span-2"
        >
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-3">
            Hi, I&#39;m{" "}
            <span className="font-extrabold text-2xl text-[var(--accent)]">
              Dhiraj Jaiswal
            </span>
            — I build modern web & mobile apps with a focus on clean UX and
            smooth performance.
          </p>

          <p className="text-[var(--text-primary)] leading-relaxed">
            I enjoy working with technologies like{" "}
            <span className="font-semibold">
              Next.js, Tailwind CSS, Firebase, Java (XML)
            </span>{" "}
            and I love converting ideas into functional and beautiful products.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap justify-center">
            <ActiveChips href="https://github.com/jaiswaldhiraj/Portfolio/releases/download/v1.0/Dhiraj.Jaiswal.Resume.pdf"
              text="Download Resume"
              icon="downloadpdf" />
          </div>
        </motion.div>

      </motion.div>

      {/* SKILLS SECTION */}
      <Skills />

      {/* EDUCATION TIMELINE */}
      <Educations />

      {/* CERTIFICATIONS */}
      <Certificates />
    </section>
  );
};

export default Page;
