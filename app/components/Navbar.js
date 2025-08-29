import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <> 
    <nav className='flex items-center justify-between h-16 text-blue-50 bg-black'>

        <div id="nav_logo" className='ml-8 text-2xl'>Dhiraj's Portfolio</div>

        <div id="nav_links" className='mr-12 text-l'>

            <ul className='flex gap-8 text-1xl'>

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