"use client"

import FooterLinkLogo from "./FooterLinkLogo"

import FooterLink from "./FooterLink"

const Footer = () =>{
  return (
    <footer className="bg-[var(--background-dark)] text-gray-300 border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-[var(--accent-dark)]">Dhiraj Jaiswal</h2>
          <p className="text-sm text-[var(--text-secondary)]">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle Section (Nav Links) */}
        <div className="flex gap-6 text-s">

          <FooterLink name="Home" href="/"/>
          <FooterLink name="About" href="/about"/>
          <FooterLink name="Projects" href="/projects"/>
          <FooterLink name="Contact" href="/contact"/>

        </div>

        {/* Right Section (Social Links) */}


        <div className="flex gap-5 text-xl text-[var(--accent-dark)]">

          <FooterLinkLogo text="sdsk" href="https://github.com/jaiswaldhiraj" icon="github" />
          <FooterLinkLogo text="sdsk" href="https://www.linkedin.com/in/jaiswaldhiraj/" icon="linkedin" />
          <FooterLinkLogo text="sdsk" href="mailto:jaiswaldhiraj928@gmail.com" icon="envelope" />

        </div>

      </div>
    </footer>
  )
}

export default Footer;
