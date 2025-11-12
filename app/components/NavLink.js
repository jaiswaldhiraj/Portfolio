"use client"

import Link from "next/link";


const NavLink = ({ href, label, pathname, setOpen }) => (
  <Link
    href={href}
    className={`font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[var(--highlight)] 
      after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full
      ${pathname === href ? "text-[var(--highlight)] after:w-full" : "text-[var(--text-secondary)]"}`}
    onClick={() => setOpen(false)} // close dropdown when link is clicked
  >
    {label}
  </Link>
);

export default NavLink;