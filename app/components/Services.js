
"use client";

import React, { useState } from "react";
import { SERVICES } from "../data/ServicesData";
import { CardFrontFace } from "./CardFrontFace";
import { CardBackFace } from "./CardBackFace";

export default function Services({ services = SERVICES }) {
  // track which card is flipped on mobile/tap (store set of ids)
  const [flipped, setFlipped] = useState(new Set());

  function toggleFlip(id) {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="md:text-5xl text-center text-3xl font-extrabold text-[var(--accent)]">My Services</h2>
          <p className="mt-5 md:mt-7 pl-10 pr-10 text-center text-l text-[var(--text-secondary)] mx-auto">From websites to full applications, I design and build
solutions that are fast, responsive, and reliable.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const isFlipped = flipped.has(s.id);

            return (
              <div
                key={s.id}
                // container provides perspective for 3D transform
                className="group relative"
              >
                {/* The clickable surface for touch devices */}
                <div
                  onClick={() => toggleFlip(s.id)}
                  aria-pressed={isFlipped}
                  aria-label={`${s.title} details`}
                  className="w-full h-full focus:outline-none"
                >
                  {/* 3D scene */}
                  <div
                    className={`relative w-full h-[28rem] md:h-[25rem] [perspective:1000px]`}
                  // ensure children aren't clipped
                  >
                    {/* card wrapper that flips */}
                    <div
                      className={`relative w-full h-full duration-600 [transform-style:preserve-3d] transition-transform
                                        ${isFlipped ? "rotate-y-180" : ""}
                                        group-hover:rotate-y-180
                                    `}
                      // Tailwind doesn't have rotate-y by default; we'll add inline styles for non-supported transforms below
                      style={{
                        transition: "transform 0.6s",
                        transformStyle: "preserve-3d",
                        // hover-controlled rotate via group-hover + class above (rotate-y-180) won't work in plain Tailwind for Y; use inline depending on state + group hover using CSS below in style tag
                      }}
                    >


                      {/* FRONT */}
                      <CardFrontFace s={s}/>

                      {/* BACK */}
                      <CardBackFace s={s} />

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}