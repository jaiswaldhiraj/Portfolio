"use client"

import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>

      <section className="max-w-4xl mx-auto  md:mt-20 mt-10 mb-56 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div>
            <h1 className="text-5xl font-bold text-orange-700 mb-10">About Me 🧑‍💻 </h1>

            <p className="text-lg pl-4 mb-3 text-gray-500 leading-relaxed">
              Hi, I’m <span className="font-extrabold text-3xl text-orange-700">Dhiraj Jaiswal</span> 👋
            </p>

            <p className='text-lg pl-6 text-gray-500 leading-relaxed'>
              I am a passionate web and app developer with experience in building
              modern, responsive applications. I enjoy working with technologies
              like <span className="font-extrabold">Next.js, Tailwind CSS, Firebase, Java ( XML )</span> and love creating
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
            <h2 className="text-3xl  font-bold text-orange-600 mt-14 mb-5">Skills 🛠</h2>
            <ul className="list-disc pl-5 list-inside mt-2 text-gray-500">
              <li><span className='font-semibold text-gray-400'>Programming:</span> C, C++, Java, Python</li>
              <li><span className='font-semibold text-gray-400'>App Development:</span> Java, Java XML, Firebase</li>
              <li><span className='font-semibold text-gray-400'>Web Development:</span> HTML, CSS, JavaScript, PHP, MySQL, MongoDB</li>
              <li><span className='font-semibold text-gray-400'>Frameworks:</span> Tailwind CSS, React JS, Next.js</li>
              <li>Data Structures & Algorithms <span className="font-bold">(DSA)</span> (C++)</li>
            </ul>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl  font-bold text-orange-600 mt-14 mb-5">Soft Skills 💡 </h2>
            <ul className="list-disc pl-5 list-inside mt-2 text-gray-500">
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
            <h2 className="text-3xl font-bold text-orange-600 mt-14 mb-5">Education 🎓</h2>

            <p className="m-5 mt-2 pl-5 text-gray-500">

              Bachelor of Computer Applications <span className="font-bold">(BCA)</span><br />
              K. P. B. Hinduja College of Commerce (2022 – 2025)<br />
              <span className="font-semibold underline italic text-gray-400">CGPA - 7.47</span>

            </p>
            <p className="m-5 mt-2 pl-5  text-gray-500">

              Higher Secondary Certificate <span className="font-bold">(HSC)</span><br />
              Kapol High School & Jr. College (2021 – 2022)<br />
              <span className="font-semibold underline italic text-gray-400">Percentage 80</span>

            </p>
            <p className="m-5 mt-2 pl-5  text-gray-500">

              Secondary School Certificate <span className="font-bold">(SSC)</span><br />
              St.Augusthi High School (2019 – 2020)<br />
              <span className="font-semibold underline italic text-gray-400">Percentage 80.40</span>

            </p>
          </div>
        </motion.div>
      </section>

    </>
  );
}

export default page