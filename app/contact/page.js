"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { ContactButtons,CopyButton } from '../components/ContactButtons';

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="max-w-5xl mx-auto mt-24 px-6">
          <div className="pt-16">
            <h1 className="md:text-5xl text-center text-3xl font-extrabold text-[var(--accent)] ">
              Contact Me
            </h1>
            <h2 className="mt-5 mb-10 pl-10 pr-10 text-center text-l text-[var(--text-secondary)] mx-auto">
              Let&#39;s Build Something Great Together
            </h2>
          </div>
        </section>

        <section id="contact" className="mb-64 mt-10 flex flex-col md:flex-row justify-center items-center">

          <div className="w-full max-w-sm flex flex-col justify-center gap-2 md:gap-5 px-4">

            <ContactButtons href={"mailto:jaiswaldhiraj928@gmail.com"} text={"Email"} icon={"envelope"} />
            <CopyButton />
            <ContactButtons href={"https://github.com/jaiswaldhiraj"} text={"GitHub"} icon={"github"} />
            <ContactButtons href={"https://www.linkedin.com/in/jaiswaldhiraj/"} text={"LinkedIn"} icon={"linkedin"} />
            <ContactButtons href={"https://github.com/jaiswaldhiraj/Portfolio/releases/download/v1.0/Dhiraj.Jaiswal.Resume.pdf"} text={"Download Resume"} icon={"downloadpdf"} />

          </div>
        </section>

      </motion.div>
    </>
  )
}

export default Page