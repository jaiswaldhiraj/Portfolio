import React from 'react'
import { useState } from 'react';
import { icons } from "./icons";
import { motion } from 'framer-motion';


export const ContactButtons = ({ href, text, icon }) => {
  const Icon = icons[icon];

  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-[var(--accent)] text-xl text-[var(--accent-light)] rounded-3xl hover:bg-[var(--accent-light-hover)] hover:text-[var(--accent)] transition duration-300
      border-2 font-medium"
    >
      {Icon && <Icon />}
      {text}
    </motion.a>
  );
};

export const CopyButton = () => {

  const [copied, setCopied] = useState(false);
  const email = "jaiswaldhiraj928@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CopyIcon = icons["copy"]
  const CheckIcon = icons["check"]

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-[var(--accent)] text-xl text-[var(--accent-light)] rounded-3xl hover:bg-[var(--accent-light-hover)] hover:text-[var(--accent)] transition duration-300
      border-2 font-medium"
    >
      {copied ? <CheckIcon className="text-green-400 text-xl" /> : <CopyIcon />}
      {copied ? "Copied!" : "Copy Email"}
    </motion.button>
  )
}
