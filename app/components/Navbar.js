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

        <div id="nav_links" className='text-2xl'>
          <button
            className="text-white md:hidden mr-6"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <ul
            className={`absolute top-16 md:mr-8 right-0 bg-black w-40 md:w-auto text-white text-xl 
            transition-all duration-500 ease-in-out overflow-hidden z-50
            ${open ? 'translate-x-0 max-h-[300px] p-4' : 'translate-x-full max-h-0'}
            md:static md:flex md:space-x-6 md:translate-x-0 md:max-h-none md:p-0`}
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