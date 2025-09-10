"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setOpen(false);

  return (
    <nav className="w-auto z-50 flex items-center justify-between h-16 bg-black text-blue-50 shadow-md">
      {/* Logo */}
      <div id="nav_logo" className="ml-8 text-3xl font-bold">
        <Link href="/">Dhiraj&#39;s Portfolio</Link>
      </div>

      {/* Links */}
      <div id="nav_links" className="text-2xl">
        <button
          className="text-white md:hidden mr-6"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul
          className={`absolute top-16 right-0 bg-black w-40 md:w-auto text-white text-xl 
          transition-all duration-500 ease-in-out overflow-hidden z-50
          ${open ? "max-h-[300px] opacity-100 p-4" : "max-h-0 opacity-0"}
          md:static md:flex md:space-x-6 md:opacity-100 md:max-h-none md:p-0 md:mr-12 md:gap-8`}
        >
          <li className="m-2" onClick={handleClose}>
            <Link href="/"
              className={`
              relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 
              after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
              ${pathname === "/" ? "text-orange-500 after:w-full" : "text-white"}
            `}
            >
              Home
            </Link>
          </li>

          <li className="m-2" onClick={handleClose}>
            <Link
              href="/about"
              className={`
              relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 
              after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
              ${pathname === "/about" ? "text-orange-500 after:w-full" : "text-white"}
            `}
            >
              About me
            </Link>
          </li>

          <li className="m-2" onClick={handleClose}>
            <Link
              href="/projects"
              className={`
              relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 
              after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
              ${pathname === "/projects" ? "text-orange-500 after:w-full" : "text-white"}
            `}
            >
              Projects
            </Link>
          </li>

          <li className="m-2" onClick={handleClose}>
            <Link
              href="/contact"
              className={`
              relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 
              after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
              ${pathname === "/contact" ? "text-orange-500 after:w-full" : "text-white"}
            `}
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
