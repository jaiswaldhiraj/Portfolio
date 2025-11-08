"use client"

import Link from "next/link";


const FooterLink = ({ name, href }) => (
  <Link
    href={href}
    className="hover:text-[var(--accent)] hover:scale-105 transition-transform duration-150"
  >
    {name}
  </Link>
);

export default FooterLink;