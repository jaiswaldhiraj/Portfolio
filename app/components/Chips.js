"use client";

import { icons } from "./icons";

const Chips = ({ text, icon }) => {
  const Icon = icons[icon];

  return (
    <a
      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-light)] text-xl text-[var(--accent)] rounded-3xl font-normal 
      hover:bg-[var(--accent-light-hover)] hover:text-[var(--accent)]"
    >
      {Icon && <Icon/>}
      {text}
    </a>
  );
};

export default Chips;
