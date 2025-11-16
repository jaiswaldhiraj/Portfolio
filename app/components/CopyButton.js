import { useState } from 'react';
import { icons } from './icons';

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
    <button
      onClick={handleCopy}
      className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-[var(--accent)] text-xl text-[var(--accent-light)] rounded-3xl font-normal hover:bg-[var(--accent-light-hover)] hover:text-[var(--accent)]"
    >
      {copied ? <CheckIcon className="text-green-400 text-xl" /> : <CopyIcon/>}
      {copied ? "Copied!" : "Copy Email"}
    </button>
  )
}
