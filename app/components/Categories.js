
import React from 'react'
import OnlyIcon from "./OnlyIcon";
import { motion } from 'framer-motion';

export const Categories = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <motion.div
            id="imagesection"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 m-10 mt-7">
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
        </motion.div>
    )
}
