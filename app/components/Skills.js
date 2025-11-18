import React from 'react'
import { motion } from 'framer-motion'
import OnlyIcon from './OnlyIcon'
import { TechChips } from './TechChips'

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition= {{ duration: 0.2 }}
      viewport={{ once: true }}
      className="mt-14"
    >
      <h2 className="flex md:text-4xl text-2xl gap-4 font-bold text-[var(--highlight)] mb-6">
        Skills<OnlyIcon icon={"skills"} />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Technical Skills */}
        <div className="bg-white/5 p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-3">Technical</h3>

          <div className="flex flex-wrap gap-2">
            <TechChips text={"Java"} icon={"java"} />
            <TechChips text={"C++"} icon={"cpp"} />
            <TechChips text={"Python"} icon={"python"} />
            <TechChips text={"PHP"} icon={"php"} />
            <TechChips text={"React"} icon={"react"} />
            <TechChips text={"MySQL"} icon={"Database"} />
            <TechChips text={"JavaScript"} icon={"javascript"} />
            <TechChips text={"Firebase"} icon={"firebase"} />
            <TechChips text={"NextJS"} icon={"nextjs"} />
            <TechChips text={"TailwindCSS"} icon={"tailwind"} />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white/5 p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-3">Soft Skills</h3>

          <ul className="list-inside space-y-2 text-sm text-[var(--text-primary)]">
            <li>Teamwork & Collaboration</li>
            <li>Creative Problem Solving</li>
            <li>Leadership & Time Management</li>
            <li>UI/UX Ideation</li>
            <li>Quick Learner & Adaptability</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
