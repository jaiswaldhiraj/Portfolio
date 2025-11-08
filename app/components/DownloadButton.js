"use client";

import { motion } from "framer-motion";
import { icons } from "./icons";


const DownloadButton = ({ href, text, icon }) => {
  const Icon = icons[icon];

  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-[var(--accent)] text-xl text-white rounded-3xl font-semibold transition duration-500
      hover:bg-[var(--accent-light)] hover:text-[var(--accent)] border-2"
      whileHover={{ scale: 1.05 }}
    >
      {text}
      {Icon && <Icon/>}
    </motion.a>
  );
};

export default DownloadButton;
