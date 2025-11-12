
import React, { useState } from "react";
import OnlyIcon from "./OnlyIcon";
import { CardChips } from "./CardChips";
import { ProgressBar } from "./ProgressBar";
import { DATA, categories } from "../data/SkillsData";

export default function SkillsCarousel() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const items = DATA[activeCategory];

  return (
    <section>
      <div className="mb-8">
        <h1 className="md:text-5xl text-center text-2xl font-extrabold text-[var(--accent)] ">
          My Skills
        </h1>
        <h2 className="mt-7 pl-10 pr-10 text-center text-l text-[var(--text-primary)] mx-auto">
          Technologies I use and how confident I am with each — presented in the same layout as my projects.
        </h2>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center gap-4 m-10 mt-7">
        {/* Loop through all categories and create one button for each */}
        {categories.map((cat) => {
          const active = cat === activeCategory; // Check if this category is currently active
          return (
            <button
              key={cat} // unique key required by React for lists        
              onClick={() => setActiveCategory(cat)} // When clicked, set this category as the active one
              /*            
                Conditional styles (ternary):
                  if active → highlighted background + light text
                  else → normal text color only
              */
              className={`px-6 py-3 rounded-3xl gap-x-2 flex bg-[var(--accent-light)] hover:bg-[var(--accent-hover)] items-center justify-center text-l transition
              ${active
                  ? "bg-[var(--highlight)] text-[var(--accent-light)] hover:bg-[var(--highlight)]"
                  : "text-[var(--accent)]"}
              `}
              /* 
                aria-pressed: accessibility attribute
                - true if this button is active (pressed)
                - false if not active
                Helps screen readers understand toggle state
              */
              aria-pressed={active}
            >
              {/* Always show the icon for the category */}
              <OnlyIcon icon={cat} />
              {/* 
          Show category name text only on medium (md) and larger screens.
          - hidden: hide on small screens
          - md:inline: display inline on md+ screens
        */}
              <span className="hidden md:inline">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Carousel area */}
      <div className="relative">
        <div className="flex flex-wrap justify-center items-start gap-6 pb-4 px-8">
            {items.map((skill, idx) => {
              return (
                <div
                  key={skill.id}
                  data-index={idx}
                  className={`snap-center w-full sm:w-[320px] md:w-[320px] h-96 p-6 rounded-2xl border border-[var(--highlight)] bg-white shadow-lg`}
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
                  <ProgressBar skill={skill}/>

                  {/* Chips */}
                  <CardChips Skills={skill}/>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}