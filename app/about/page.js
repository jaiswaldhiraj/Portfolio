"use client"

import React from 'react'
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <>

      <section className="max-w-4xl mx-auto  md:mt-16 mt-9 mb-56 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div>
            <h1 className="md:text-5xl text-4xl font-bold text-[var(--accent)] mb-10">About Me 🧑‍💻 </h1>

            <p className=" text-lg pl-4 mb-3 text-[var(--text-secondary)] leading-relaxed">
              Hi, I&rsquo;m <span className="font-extrabold text-2xl text-[var(--accent)]">Dhiraj Jaiswal</span> 👋
            </p>

            <p className='text-lg pl-6 text-[var(--text-primary)] leading-relaxed'>
              I am a passionate web and app developer with experience in building
              modern, responsive applications. I enjoy working with technologies
              like <span className="font-medium">Next.js, Tailwind CSS, Firebase, Java ( XML )</span> and love creating
              intuitive and user-friendly experiences.
            </p>

          </div>

        </motion.div>

        {/* Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="md:text-4xl text-xl  font-bold text-[var(--highlight)] mt-14 mb-5">Skills 🛠</h2>
            <ul className="list-disc pl-5 list-inside mt-2 text-[var(--text-primary)]">
              <li>
                <span
                  className='font-semibold text-[var(--text-primary)]'>Programming: </span>
                C, C++, Java, Python</li>
              <li>
                <span
                  className='font-semibold text-[var(--text-primary)]'>App Development: </span>
                Java, Java XML, Firebase</li>
              <li>
                <span
                  className='font-semibold text-[var(--text-primary)]'>Web Development: </span>
                HTML, CSS, JavaScript, PHP, MySQL, MongoDB</li>
              <li>
                <span
                  className='font-semibold text-[var(--text-primary)]'>Frameworks: </span>
                Tailwind CSS, React JS, Next.js</li>
              <li>Data Structures & Algorithms <span className="font-bold">(DSA)</span> (C++)</li>
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="md:text-4xl text-xl  font-bold text-[var(--highlight)] mt-14 mb-5">Soft Skills 💡 </h2>
            <ul className="list-disc pl-5 list-inside mt-2 text-[var(--text-primary)]">
              <li>Teamwork & Collaboration</li>
              <li>Quick Learner & Adaptability</li>
              <li>Creative Problem Solving</li>
              <li>Leadership & Time Management</li>
              <li>UI/UX Ideation</li>
            </ul>
          </motion.div>
        </div>

        {/* Education section */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="md:text-4xl text-xl font-bold text-[var(--highlight)] mt-14 mb-5">Education 🎓</h2>

            <p className="m-5 mt-2 pl-5 text-[var(--text-primary)]">

              Bachelor of Computer Applications <span className="font-bold">(BCA)</span><br />
              K. P. B. Hinduja College of Commerce (2022 &#x2013; 2025)<br />
              <span className="font-semibold underline italic text-[var(--text-primary)]">CGPA - 7.47</span>

            </p>
            <p className="m-5 mt-2 pl-5  text-[var(--text-primary)]">

              Higher Secondary Certificate <span className="font-bold">(HSC)</span><br />
              Kapol High School & Jr. College (2021 &#x2013; 2022)<br />
              <span className="font-semibold underline italic text-[var(--text-primary)]">Percentage 80</span>

            </p>
            <p className="m-5 mt-2 pl-5  text-[var(--text-primary)]">

              Secondary School Certificate <span className="font-bold">(SSC)</span><br />
              St.Augusthi High School (2019 &#x2013; 2020)<br />
              <span className="font-semibold underline italic text-[var(--text-primary)]">Percentage 80.40</span>

            </p>
          </div>
          <div>
            <h2 className="md:text-4xl text-xl font-bold text-[var(--highlight)] mt-14 mb-5">Certificatons 📜</h2>

            <p className="m-5 mt-2 pl-5 text-[var(--text-primary)]">

              <span className="font-semibold text-[var(--text-primary)]">PHP Programming & Web Designing </span>
              K. P. B. Hinduja College of Commerce (2022 &#x2013; 2023)<br />
              <span className="font-semibold underline italic text-[var(--text-primary)]">Issued: 4th September 2023</span>

            </p>
          </div>
        </motion.div>
      </section>

    </>
  );
}

export default Page