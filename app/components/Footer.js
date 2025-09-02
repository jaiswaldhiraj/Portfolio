"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-orange-500">Dhiraj Jaiswal</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle Section (Nav Links) */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300">Home</Link>
          <Link href="/about" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300">About</Link>
          <Link href="/projects" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300">Projects</Link>
          <Link href="/contact" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300">Contact</Link>
        </div>

        {/* Right Section (Social Links) */}
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300
">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:scale-125 transition-transform duration-300">
            <FaTwitter />
          </a>
        </div>

      </div>
    </footer>
  )
}
