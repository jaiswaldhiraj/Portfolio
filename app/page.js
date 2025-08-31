"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Application Developer", "Web Developer", "Tech Enthusiast"],
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
    <section
      id="firstsection"
      className="m-10 mt-32 flex flex-col md:flex-row justify-center items-center gap-12"
    >
      {/* Text Section */}
      <div id="textsection" className="w-96 text-center md:text-left">
        <div className="text-lg text-gray-600">Hello, I Am</div>
        <div className="text-5xl font-extrabold text-orange-700">
          Dhiraj Jaiswal
        </div>
        <div className="mt-2 text-2xl font-medium bg-gradient-to-r from-orange-700 to-yellow-200 bg-clip-text text-transparent">
          <span ref={typedRef}></span>
        </div>

      </div>

      {/* Image Section */}
      <div id="imagesection">
        <Image
          src="/developer.png"
          alt="My Photo"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
