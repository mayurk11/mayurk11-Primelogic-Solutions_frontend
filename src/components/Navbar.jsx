import React, { useState } from "react";
import Logo from "../assets/favicon.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm border-b border-[#26217A] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-14 w-14" />
          <div className="pl-2 border-l-2 border-gray-300">
            <h2 className="text-2xl font-bold leading-none">
              <span className="text-black">PRIME</span>
              <span className="text-blue-500">LOGIC</span>
            </h2>
            <p className="text-xl font-bold text-[#060606] leading-none">
              solutions
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#26217A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex md:items-center gap-10 text-lg font-medium text-[#0c0c14]
          md:static absolute left-0 top-full w-full md:w-auto bg-white md:bg-transparent
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 md:opacity-100"}`}
        >
          {["home", "about", "services", "contact"].map((section, i) => (
            <li key={i} className="text-center py-3 md:py-0">
              <Link
                to={section}
                smooth={true}
                offset={-90}
                duration={500}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
