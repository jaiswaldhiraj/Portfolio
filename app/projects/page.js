"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaAndroid   } from "react-icons/fa";
import Chips from "../components/Chips";
import ActiveChips from "../components/ActiveChips";

const Page = () => {
  
  return (
    <>
      <section
        id="projects"
        className="m-10 lg:mt-36 mt-20 mb-56 flex flex-col justify-center items-center gap-24"
      >

        {/* Project 1 - Milap */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
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
            <h2 className="md:text-5xl text-3xl font-bold text-[var(--accent)]">
              Milap &#x2013; (Dating App)
            </h2>
            <p className="mt-4 pl-5 lg:w-xl text-[var(--text-primary)]">
              Milap is a modern dating application built for Android with real-time
              features. It allows users to create profiles, swipe through potential
              matches, and connect through an integrated chat system.
            </p>

            <h3 className="md:text-3xl text-xl mt-6 font-bold text-[var(--highlight)]">Key Features:</h3>

            <ul className="mt-2 text-[var(--text-primary)] list-disc list-inside pl-5 space-y-1 text-left items-center">
              <li>Swipe-based card system (like/dislike) with animations</li>
              <li>User authentication via phone number (Firebase OTP)</li>
              <li>Profile setup with personal details, gender selection, and photo uploads</li>
              <li>Real-time chat using Firebase Realtime Database</li>
              <li>Matchmaking with like/like-received and mutual matches</li>
              <li>Push notifications with Firebase Cloud Messaging</li>
            </ul>

            <h3 className="md:text-3xl text-xl mt-6 font-bold text-[var(--highlight)]">Tech Stack:</h3>

            <p className="mt-2 pl-5 text-[var(--text-primary)]">
              Java (Android), Firebase (Realtime Database, Authentication, Cloud
              Functions, FCM), Glide, Lottie Animations
            </p>

            <h3 className="md:text-3xl text-xl mt-6 font-bold text-[var(--highlight)]">Role & Contribution:</h3>

            <ul className="mt-2 text-[var(--text-primary)] list-inside list-disc pl-5 space-y-1 text-left">
              <li>Designed and developed the complete Android app from scratch</li>
              <li>Implemented swipe card animations and profile matching logic</li>
              <li>Integrated Firebase backend for authentication, storage, and messaging</li>
              <li>Built a real-time notification and chat system</li>
            </ul>

            {/* Chips */}

            <div className="mt-2 flex flex-wrap gap-1 justify-center md:justify-start">

              <Chips text="Java" icon="java" />
              <Chips text="Firebase" icon="firebase" />
              <Chips text="Firebase RTDB" icon="rtdb" />
              <ActiveChips href="https://github.com/jaiswaldhiraj/Milap-Repo-Public" text="Git Repo" icon="github" />
              <ActiveChips href="https://github.com/jaiswaldhiraj/Milap-Repo-Public" text="Download Milap Apk" icon="android" />

            </div>

          </div>
        </motion.div>



        {/* Divider */}
        {/* <div className="border-t border-gray-300 my-12 w-6/7 mx-auto"></div> */}



        {/* Project 2 - Portfolio Website */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div
            className="transform hover:scale-95  duration-750"
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

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <h2 className="md:text-5xl text-3xl font-bold text-[var(--accent)]">Portfolio Website</h2>

            <p className="mt-4 pl-5 text-[var(--text-primary)] ">
              My personal portfolio built with Next.js and Tailwind CSS,
              showcasing projects and skills.
            </p>

            <p className="md:text-3xl text-xl mt-6 font-bold text-[var(--highlight)]">Key Features:</p>

            <ol className="mt-2 pl-5 text-[var(--text-primary)] list-disc list-inside text-left">
              <li>Built with Next.js and styled with Tailwind CSS</li>
              <li>Smooth animations using Framer Motion and Lottie</li>
              <li>Responsive navbar with mobile menu</li>
              <li>Dynamic sections: About, Projects, Contact</li>
              <li>Contact page with social links (GitHub, LinkedIn, Gmail)</li>
            </ol>

            <p className="md:text-3xl text-xl mt-6 font-bold text-[var(--highlight)]">Tech Stack:</p>

            <p className="mt-2  text-[var(--text-primary)] pl-5">Next.js, React, Tailwind CSS, Framer Motion, Vercel (deployment)</p>

            <p className="md:text-3xl text-xl mt-6 font-bold text-[var(--highlight)]">Role & Contribution:</p>

            <ul className="mt-2 pl-5 text-[var(--text-primary)] list-disc list-inside text-left">
              <li>Designed UI/UX and implemented responsive layout</li>
              <li>Added interactive animations for modern look</li>
              <li>Structured content for recruiters: About, Projects, Contact</li>
            </ul>

          <div className="mt-2 flex flex-wrap gap-1 justify-center md:justify-start">

              <Chips text="NextJS" icon="nextjs" />
              <Chips text="React" icon="react" />
              <Chips text="TailwindCSS" icon="tailwind" />
              <Chips text="Vercel" icon="vercel" />
              <ActiveChips href="https://github.com/jaiswaldhiraj/Portfolio" text="git repo" icon="github" />

            </div>
  
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Page