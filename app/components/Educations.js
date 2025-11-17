import React from 'react'
import { motion } from 'framer-motion'
import OnlyIcon from './OnlyIcon'

export const Educations = () => {
  return (
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14"
      >
        <h2 className="flex gap-4 md:text-4xl text-2xl font-bold text-[var(--highlight)] mb-6">
          Education <OnlyIcon icon={"education"}/>
        </h2>

        <div className="relative pl-6">
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30"></div>

          {/* Item */}
          {[
            {
              year: "2022–2025",
              title: "BCA (Bachelor of Computer Applications)",
              school: "K. P. B. Hinduja College of Commerce",
              extra: "CGPA: 7.47",
            },
            {
              year: "2021–2022",
              title: "Higher Secondary Certificate (HSC)",
              school: "Kapol High School & Jr. College",
              extra: "80%",
            },
            {
              year: "2019–2020",
              title: "Secondary School Certificate (SSC)",
              school: "St. Augusthi High School",
              extra: "80.40%",
            },
          ].map((edu, i) => (
            <div key={i} className="mb-8 flex items-start gap-4">
              <div className="w-16 text-sm text-[var(--text-secondary)]">
                {edu.year}
              </div>

              <div className="bg-white/5 p-4 rounded-lg shadow-sm w-full">
                <h3 className="font-semibold text-[var(--accent)]">
                  {edu.title}
                </h3>
                <p className="text-sm text-[var(--text-primary)]">
                  {edu.school}
                </p>
                <p className="mt-2 text-sm italic text-[var(--text-primary)]">
                  <span className="font-bold">{edu.extra}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
  )
}
