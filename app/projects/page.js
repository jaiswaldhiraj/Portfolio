"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section
        id="projects"
        className="m-10 lg:mt-40 mt-20 mb-56 flex flex-col justify-center items-center gap-24"
      >
        {/* Project 1 - Milap */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Image */}
          <div className="md:w-1/2 flex justify-center p-6 transform hover:scale-95 transition duration-500">
            <Image
              src="/milap-project.svg"
              alt="Milap App"
              width={450}
              height={350}
              className="rounded-2xl shadow-amber-500 shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-orange-700">
              Milap - (A Dating App)
            </h2>
            <p className="mt-4 pl-5 lg:w-xl text-gray-400">
              Milap is a modern dating application built for Android with real-time
              features. It allows users to create profiles, swipe through potential
              matches, and connect through an integrated chat system.
            </p>

            <h3 className="text-2xl mt-6 text-orange-600">Key Features:</h3>
            <ul className="mt-2 text-gray-400 list-disc list-inside pl-5 space-y-1 text-left items-center">
              <li>Swipe-based card system (like/dislike) with animations</li>
              <li>User authentication via phone number (Firebase OTP)</li>
              <li>Profile setup with personal details, gender selection, and photo uploads</li>
              <li>Real-time chat using Firebase Realtime Database</li>
              <li>Matchmaking with like/like-received and mutual matches</li>
              <li>Push notifications with Firebase Cloud Messaging</li>
            </ul>

            <h3 className="text-2xl mt-6 text-orange-600">Tech Stack:</h3>
            <p className="mt-2 pl-5 text-gray-400">
              Java (Android), Firebase (Realtime Database, Authentication, Cloud
              Functions, FCM), Glide, Lottie Animations
            </p>

            <h3 className="text-2xl mt-6 text-orange-600">Role & Contribution:</h3>
            <ul className="mt-2 text-gray-400 list-inside list-disc pl-5 space-y-1 text-left">
              <li>Designed and developed the complete Android app from scratch</li>
              <li>Implemented swipe card animations and profile matching logic</li>
              <li>Integrated Firebase backend for authentication, storage, and messaging</li>
              <li>Built a real-time notification and chat system</li>
            </ul>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="flex justify-center items-center p-2 rounded-xl bg-white">
                <Image src="/java.svg" alt="Java" width={120} height={25} />
              </div>
              <div className="flex justify-center items-center p-2 rounded-xl bg-white">
                <Image src="/firebase.svg" alt="Firebase" width={120} height={25} />
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yourusername/milap"
                className="flex items-center gap-2 p-3 px-2 rounded-xl bg-cyan-950 text-white font-medium shadow-md hover:bg-cyan-900 transition border-2 border-white"
              >
                <FaGithub className="text-xl" />
                GitHub Repository
              </Link>
            </div>
          </div>
        </motion.div>



        {/* Divider */}
        <div className="border-t border-gray-300 my-12 w-6/7 mx-auto"></div>




        {/* Project 2 - Portfolio Website */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl shadow-lg transform hover:scale-95 transition duration-750
">
            <Image
              src="/portfolio.png"
              alt="Portfolio Website"
              width={600}
              height={400}
              className="rounded-2xl shadow-amber-500 shadow-2xl"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold text-orange-700">Personal Portfolio Website</h2>

            <p className="mt-4 pl-5 text-gray-400 ">
              My personal portfolio built with Next.js and Tailwind CSS,
              showcasing projects and skills.
            </p>
            <p className="text-3xl mt-6 text-orange-600">Key Features:</p>
            <ol className="mt-2 text-gray-400 list-disc list-inside text-left">
              <li>Built with Next.js and styled with Tailwind CSS</li>
              <li>Smooth animations using Framer Motion and Lottie</li>
              <li>Responsive navbar with mobile menu</li>
              <li>Dynamic sections: About, Projects, Contact</li>
              <li>Contact page with social links (GitHub, LinkedIn, Gmail)</li>
            </ol>

            <p className="text-3xl mt-6 text-orange-600">Tech Stack:</p>
            <p className="mt-2  text-gray-400 pl-5">Next.js, React, Tailwind CSS, Framer Motion, Vercel (deployment)</p>


            <p className="text-3xl mt-6 text-orange-600">Role & Contribution:</p>

            <ul className="mt-2 text-gray-400 list-disc list-inside text-left">
              <li>Designed UI/UX and implemented responsive layout</li>
              <li>Added interactive animations for modern look</li>
              <li>Structured content for recruiters: About, Projects, Contact</li>
            </ul>

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
                href="https://github.com/yourusername/milap"
                className="flex items-center gap-2 p-3 rounded-xl bg-cyan-950 text-white font-medium shadow-md hover:bg-cyan-900 transition border-2 border-white"
              >
                <FaGithub className="text-xl" />GitHub Repository
              </Link>


            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default page