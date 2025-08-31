"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null); // ✅ no <HTMLSpanElement>

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Application Developer", "Web Developer", "Tech Enthusiast"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="firstsection" className="m-10 mt-32 flex justify-center items-center ">
      {/* Text Section */}
      <div id="textsection" className="text-4xl justify-center w-96">
        <div>Hello, I Am</div>
        <div className="text-orange-700">Dhiraj Jaiswal</div>
        <div>
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
          className=""
        />
      </div>
    </section>
  );
}
