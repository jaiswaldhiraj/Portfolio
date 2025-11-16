"use client"

import Link from "next/link";


const NavLink = ({ href, label, pathname, setOpen }) => (
  <Link
    href={href}
    className={` relative after:absolute after:w-0 after:h-[2px] after:bg-[var(--accent)] 
      after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
      ${pathname === href ? "text-[var(--accent)] after:w-full" : "text-[var(--text-secondary)]"}`}
    onClick={() => setOpen(false)} // close dropdown when link is clicked
  >
    {label}
  </Link>
);

export default NavLink;