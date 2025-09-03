"use client";

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCopy, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from 'react';

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
        viewport={{ once: false, amount: 0.3 }}
      >
        <section className="max-w-5xl mx-auto mt-36 px-6">

          <div>
            <h1 className="text-5xl font-bold text-orange-700 mb-4">Contact Me </h1>
            <p className=' pl-6 text-gray-500 leading-relaxed'>&#x2013; Let&#39;s Build Something Great Together</p>
          </div>
        </section>

        <section id="contact" className="mb-64 mt-10 flex flex-col md:flex-row justify-center items-center gap-56">

          <div className="w-full max-w-sm flex flex-col justify-center gap-5 px-4">

            <motion.a
              href="mailto:jaiswaldhiraj928@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 p-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 
              transition duration-300"
            >
              <FaEnvelope className="text-xl " />
              Email
            </motion.a>

            {/* Copy button */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 p-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 
              transition duration-300"
            >
              {copied ? <FaCheck className="text-green-400 text-xl" /> : <FaCopy />}
              {copied ? "Copied!" : "Copy Email"}
            </motion.button>

            <motion.a
              href="https://github.com/jaiswaldhiraj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 p-3.5 rounded-xl bg-black transition duration-300"
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jaiswaldhiraj/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-white font-bold text-blue-500 
              transition duration-300"
            >
              <FaLinkedin className="text-xl text-blue-500" />
              LinkedIn
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 p-3.5 rounded-xl bg-orange-500 transition duration-300"
            >
              <FaFileAlt className="text-2xl" />
              Resume
            </motion.a>

          </div>

          {/* Right side - Image (hidden on small screens) */}
          <div className=" hidden lg:flex justify-center">
            <Image
              src="/contact-page.png"
              alt="Contact Illustration"
              width={400}
              height={400}
              className="rounded-2xl shadow-amber-500 shadow-2xl transform hover:scale-95 transition duration-750"
            />
          </div>
        </section>

      </motion.div>
    </>
  )
}

export default Page