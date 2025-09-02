"use client";



import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const page = () => {
  return (



    <>
      <section id="contact" className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-56">

<div className="w-full max-w-sm flex flex-col justify-center gap-7 px-4">
              <a
                href="mailto:jaiswaldhiraj928@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
              >
                <FaEnvelope className="text-xl" />
                Contact
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
              >
                <FaTwitter className="text-xl" />
                Twitter
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
              >
                <FaFileAlt className="text-xl" />
                Resume
              </a>
        </div>
          

            {/* Right side - Image (hidden on small screens) */}
            <div className=" hidden lg:flex justify-center">
              <Image
                src="/contact-page.png"
                alt="Contact Illustration"
                width={400}
                height={400}
                className="rounded-2xl shadow-amber-500 shadow-2xl "
              />
            </div>
      </section>


    </>
  )
}

export default page