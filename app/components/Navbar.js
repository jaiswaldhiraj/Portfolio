"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import OnlyIcon from "./OnlyIcon";
import FooterLinkLogo from "./FooterLinkLogo";
import { icons } from "./icons";
import ActiveChips from "./ActiveChips";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu if clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
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
      <nav
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between md:h-16 h-14
                      bg-white/30 backdrop-blur-md shadow-md border-b border-white/20 px-8"
      >
        {/* Logo */}
        <div className="md:text-3xl text-2xl font-bold text-[var(--accent)]">
          <Link href="/">Dhiraj&#39;s Portfolio</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-xl">
          <li>
            <NavLink href="/" label="Home" pathname={pathname} setOpen={setOpen} />
          </li>
          <li>
            <NavLink href="/about" label="About" pathname={pathname} setOpen={setOpen} />
          </li>
          <li>
            <NavLink href="/projects" label="Projects" pathname={pathname} setOpen={setOpen} />
          </li>
          <li>
            <NavLink href="/contact" label="Contact" pathname={pathname} setOpen={setOpen} />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[var(--accent)] relative z-50 "
          onClick={() => setOpen((prev) => !prev)} // toggle open/close
          aria-label="Toggle menu"
          aria-expanded={open}
          ref={buttonRef}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown + Blur */}
      {open && (
        <div className="fixed inset-0 z-40">
          {/* Background Blur */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/30" />

          {/* Dropdown Menu */}
          {/* make this a full-height right-side panel, flex-col with space-between to pin footer */}
          <aside
            ref={menuRef}
            className="absolute top-12 right-0  h-[calc(100%-3rem)] text-black rounded-l-lg
                       bg-[var(--background)] shadow-md flex flex-col justify-between animate-fadeIn"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {/* Top: navigation links */}
            <nav className="p-6">
              <ul className="space-y-4">
                <li>
                  <NavLink href="/" label="Home" pathname={pathname} setOpen={setOpen} />
                </li>
                <li>
                  <NavLink href="/about" label="About" pathname={pathname} setOpen={setOpen} />
                </li>
                <li>
                  <NavLink href="/projects" label="Projects" pathname={pathname} setOpen={setOpen} />
                </li>
                <li>
                  <NavLink href="/contact" label="Contact" pathname={pathname} setOpen={setOpen} />
                </li>
              </ul>
            </nav>

            {/* Bottom: resume + socials + copyright */}
            <div className="mt-6 p-8 bg-[var(--accent-light)]" >
              {/* Resume CTA */}
              <div className="mb-4">
                <a
                  href="https://github.com/jaiswaldhiraj/Portfolio/releases/download/v1.0/Dhiraj.Jaiswal.Resume.pdf"
                  download
                  className="flex justify-center items-center gap-2 w-full text-center px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-95 transition"
                  onClick={() => setOpen(false)}
                >
                  Resume<OnlyIcon icon={"download"}/>
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center text-[var(--accent)] justify-center gap-4 mb-3">
                  <FooterLinkLogo href={"https://github.com/jaiswaldhiraj"} icon={"github"}/>
                  <FooterLinkLogo href={"https://www.linkedin.com/in/jaiswaldhiraj/"} icon={"linkedin"}/>
                  <FooterLinkLogo href={"mailto:jaiswaldhiraj928@gmail.com"} icon={"envelope"}/>
              </div>

              {/* Copyright / small footer */}
              <p className="text-center text-xs text-[var(--text-secondary)]">
                © {new Date().getFullYear()} Dhiraj Jaiswal
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
