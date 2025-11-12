// components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    description: "Polished, responsive UI — from layouts to animations.",
    items: [
      { name: "HTML & CSS", pct: 92 },
      { name: "JavaScript", pct: 88 },
      { name: "React", pct: 85 },
    ],
    chips: ["Tailwind CSS", "Responsive", "Framer Motion"],
  },
  {
    title: "Backend",
    description: "APIs, auth and server-side logic.",
    items: [
      { name: "Node.js", pct: 82 },
      { name: "Express", pct: 78 },
      { name: "Databases", pct: 76 },
    ],
    chips: ["MongoDB", "Firebase", "REST APIs"],
  },
  {
    title: "Tools & Others",
    description: "Daily tooling & collaboration.",
    items: [
      { name: "Git", pct: 90 },
      { name: "Figma", pct: 80 },
      { name: "Testing", pct: 74 },
    ],
    chips: ["Postman", "VS Code", "CI/CD"],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#eef9fb] py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0d62c8] tracking-tight">
              Skills
            </h2>
            <p className="mt-2 text-gray-600">What I build with — grouped and rated.</p>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((card) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-[#0d62c8]">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.description}</p>

              <div className="mt-5 space-y-4">
                {card.items.map((it) => (
                  <SkillRow key={it.name} name={it.name} pct={it.pct} />
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {card.chips.map((c) => (
                  <span
                    key={c}
                    className="text-sm bg-[#eef6ff] text-[#0d62c8] px-3 py-1.5 rounded-full border border-[#e0f0ff] shadow-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** SkillRow: single row with animated fill */
function SkillRow({ name, pct }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-36 text-sm text-gray-700">{name}</div>

      <div
        className="h-3 flex-1 rounded-full bg-[#f0fbfd] border border-[#e6f7fa] overflow-hidden"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={pct}
      >
        {/* motion div for the fill */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#6ee7b7] to-[#4cc0ff] flex items-center justify-end pr-2 text-[11px] font-semibold text-[#022233]"
          initial={{ width: "0%" }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span aria-hidden="true">{pct}%</span>
        </motion.div>
      </div>

      <div className="w-12 text-right text-sm text-gray-600">{pct}%</div>
    </div>
  );
}
