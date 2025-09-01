"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Application Developer", "Web Developer ", "Tech Enthusiast 🚀"],
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
      <section
        id="firstsection"
        className="m-10 mt-32 flex flex-col md:flex-row justify-center items-center gap-12"
      >
        {/* Text Section */}
        <motion.div
          id="textsection"
          className="w-96 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-lg text-gray-400">Hello, I Am</div>
          <div className="text-5xl font-extrabold text-orange-700">
            Dhiraj Jaiswal
          </div>
          <div className="mt-2 text-2xl font-medium">
            <span ref={typedRef}></span>
          </div>

          {/* Call to Action */}
          <motion.a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          id="imagesection"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/developer.png"
            alt="My Photo"
            width={600}
            height={600}
          />
        </motion.div>
      </section>

      <div className="border-t border-gray-300 my-16 w-3/4 mx-auto"></div>

      <section id="secondsection">



      </section>

    </>
  );
}
