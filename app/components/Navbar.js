"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 bg-black text-blue-50 shadow-md">
      {/* Logo */}
      <div id="nav_logo" className="ml-8 text-2xl font-bold">
        <Link href="/">Dhiraj's Portfolio</Link>
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
          md:static md:flex md:space-x-6 md:opacity-100 md:max-h-none md:p-0 md:mr-12 md:gap-12`}
        >
          <li className="m-2" onClick={handleClose}>
            <Link href="/" className={pathname === "/" ? "text-blue-400" : ""}>
              Home
            </Link>
          </li>
          <li className="m-2" onClick={handleClose}>
            <Link
              href="/about"
              className={pathname === "/about" ? "text-blue-400" : ""}
            >
              About
            </Link>
          </li>
          <li className="m-2" onClick={handleClose}>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-blue-400" : ""}
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
