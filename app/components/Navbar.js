"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu if clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // To prevent scroll when the dropdown is open
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden", "h-screen");
    } else {
      document.documentElement.classList.remove("overflow-hidden", "h-screen");
    }
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between md:h-16 h-14
                      bg-white/30 backdrop-blur-md shadow-md border-b border-white/20 px-8">
        {/* Logo */}
        <div className="md:text-3xl text-2xl font-bold text-[var(--accent)]">
          <Link href="/">Dhiraj&#39;s Portfolio</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-xl">
          <li><NavLink href="/" label="Home" pathname={pathname} setOpen={setOpen} /></li>
          <li><NavLink href="/about" label="About" pathname={pathname} setOpen={setOpen} /></li>
          <li><NavLink href="/projects" label="Projects" pathname={pathname} setOpen={setOpen} /></li>
          <li><NavLink href="/contact" label="Contact" pathname={pathname} setOpen={setOpen} /></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-black md:hidden text-2xl relative z-50"
          onClick={() => setOpen((prev) => !prev)} // toggle open/close
          aria-label="Toggle menu"
          ref={buttonRef}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown + Blur */}
      {open && (
        <div className="fixed inset-0 z-40">
          {/* Background Blur */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

          {/* Dropdown Menu (only this has the ref) */}
          <ul
            ref={menuRef}
            className="absolute top-12 pt-6 right-0 w-36 h-[100%] text-black text-lg rounded-md 
                       bg-[var(--background)] shadow-md p-4 space-y-4 animate-fadeIn"
          >
            <li><NavLink href="/" label="Home" pathname={pathname} setOpen={setOpen} /></li>
            <li><NavLink href="/about" label="About" pathname={pathname} setOpen={setOpen} /></li>
            <li><NavLink href="/projects" label="Projects" pathname={pathname} setOpen={setOpen} /></li>
            <li><NavLink href="/contact" label="Contact" pathname={pathname} setOpen={setOpen} /></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
