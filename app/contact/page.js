"use client";

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCopy, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from 'react';
import DownloadButton from '../components/DownloadButton';
import ActiveChips from '../components/ActiveChips';

const Page = () => {

  const [copied, setCopied] = useState(false);
  const email = "jaiswaldhiraj928@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="max-w-5xl mx-auto mt-28 px-6">

          <div>
            <h1 className="md:text-5xl text-3xl font-bold text-[var(--accent)] mb-4">Contact Me </h1>
            <p className=' pl-6 text-[var(--text-secondary)] leading-relaxed'>&#x2013; Let&#39;s Build Something Great Together</p>
          </div>
        </section>

        <section id="contact" className="mb-64 mt-10 flex flex-col md:flex-row justify-center items-center gap-56">

          <div className="w-full max-w-sm flex flex-col justify-center gap-5 px-4">

            <ActiveChips href={"mailto:jaiswaldhiraj928@gmail.com"} text={"Email"} icon={"envelope"}/>
            {/* Copy button */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 p-3.5 rounded-3xl bg-[var(--accent)] text-[var(--accent-light)] hover:bg-[var(--accent-light-hover)] hover:text-[var(--accent)] 
              transition duration-300"
            >
              {copied ? <FaCheck className="text-green-400 text-xl" /> : <FaCopy />}
              {copied ? "Copied!" : "Copy Email"}
            </motion.button>
            <ActiveChips href={"https://github.com/jaiswaldhiraj"} text={"GitHub"} icon={"github"}/>
            <ActiveChips href={"https://www.linkedin.com/in/jaiswaldhiraj/"} text={"LinkedIn"} icon={"linkedin"}/>
            <ActiveChips href={"https://github.com/jaiswaldhiraj/Portfolio/releases/download/v1.0/Dhiraj.Jaiswal.Resume.pdf"} text={"Download Resume"} icon={"downloadpdf"}/>

          </div>

          {/* Right side - Image (hidden on small screens) */}
          <div
            className="hidden lg:flex justify-center transform hover:scale-95 duration-750"
          >
            <Image
              src="/contact-page.png"
              alt="Contact illustration"
              width={400}
              height={400}
              loading="lazy"
              className=" rounded-4xl shadow-2xl"
              style={{ boxShadow: "var(--shadow-image)" }}
            />

          </div>
        </section>

      </motion.div>
    </>
  )
}

export default Page