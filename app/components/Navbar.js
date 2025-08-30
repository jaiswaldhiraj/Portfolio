"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <nav className='flex items-center justify-between h-16 text-blue-50 bg-black'>

        <div id="nav_logo" className='ml-8 text-2xl'>Dhiraj's Portfolio</div>

        <div id="nav_links" className='mr-12 text-l'>
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <ul
            className={`${open ? "block" : "hidden"
              } md:flex md:space-x-6 gap-8 text-xl`}
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar