
import React, { useState } from "react";
import OnlyIcon from "./OnlyIcon";
import { CardChips } from "./CardChips";
import { ProgressBar } from "./ProgressBar";
import { DATA } from "../data/skillsData";
import { Categories } from "./Categories";
import { motion } from "framer-motion";

const categories = Object.keys(DATA);

export default function SkillsCarousel() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const items = DATA[activeCategory];

  return (
    <section>
      <motion.div
        id="imagesection"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8">
        <h1 className="md:text-5xl text-center text-3xl font-extrabold text-[var(--accent)] ">
          My Skills
        </h1>
        <h2 className="mt-7 pl-10 pr-10 text-center text-l text-[var(--text-secondary)] mx-auto">
          Technologies I use and how confident I am with each — presented in the same layout as my projects.
        </h2>
      </motion.div>

      {/* Categories */}
      <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Carousel area */}
      <div className="relative">
        {/* Cards container*/}
        <div className="flex flex-wrap justify-center items-start gap-6 pb-4 px-10">
          {items.map((skill, idx) => {
            return (
              <div
                key={skill.id}
                data-index={idx}
                className={`snap-center w-full sm:w-[320px] md:w-[320px] md:h-96 p-6 rounded-2xl border border-[var(--highlight)] bg-[var(--background)] shadow-md hover:shadow-[var(--shadow-card)] hover:scale-[1] transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-2xl text-[var(--highlight)]"><OnlyIcon icon={skill.emoji} /></div>
                  </div>

                  <div className="flex-1 pl-3">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">{skill.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{skill.desc}</p>
                  </div>
                </div>

                {/* progress */}
                <ProgressBar skill={skill} />

                {/* Chips */}
                <CardChips Skills={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}