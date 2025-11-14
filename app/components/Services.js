
"use client";

import React, { useState } from "react";
import { SERVICES } from "../data/ServicesData";
// import { CardFrontFace } from "./CardFrontFace";
// import { CardBackFace } from "./CardBackFace";

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
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[var(--accent)]">Services</h2>
          <p className="text-[var(--text-secondary)] mt-2">What I offer — tap or hover each card to see details.</p>
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
                    className={`relative w-full h-80 [perspective:1000px]`}
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
                      {/* FRONT
                                            <CardFrontFace service={s}
                                                isFlipped={flipped.has(s.id)} /> */}

                      <div
                        className="absolute inset-0 rounded-2xl bg-white border border-subtleBorder shadow-card-soft overflow-hidden flex flex-col p-6 justify-between"
                        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style={{ background: "linear-gradient(90deg,var(--accent-light,#eef6ff),transparent)", color: "var(--highlight)" }}>
                            {s.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[var(--text-primary)]">{s.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)] mt-1">{s.short}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm text-[#315b9a] font-medium">From</div>
                          <div className="text-sm text-brandBlue font-semibold">Let's talk</div>
                        </div>
                      </div>

                      {/* BACK */}
                      {/* <CardBackFace s={s} /> */}

                      <div
                        className="absolute inset-0 rounded-2xl bg-white border border-subtleBorder shadow-card-soft overflow-hidden p-6"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{s.title}</h3>
                          <p className="text-sm text-[var(--text-secondary)] mb-3">What I do:</p>
                          <ul className="list-disc ml-5 text-sm text-[#41607f] space-y-1">
                            {s.details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <a
                            href={`/contact`}
                            onClick={() => isFlipped(new Set())}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-95 transition"
                          >
                            Hire me
                          </a>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip(s.id);
                            }}
                            className="text-sm text-gray-500 underline"
                          >
                            Close
                          </button>
                        </div>
                      </div>
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