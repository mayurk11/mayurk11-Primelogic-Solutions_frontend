// import Logo from "../assets/Logo.jpg";
import Logo from "../assets/favicon.png";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-[#26217A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-20 w-20" />
          <div className="pl-2 border-l-2 border-gray-300">
            <h2 className="text-2xl font-bold leading-none">
              <span className="text-black">PRIME</span>
              <span className="text-blue-500">LOGIC</span>
            </h2>
            <p className="text-2xl font-bold text-[#060606] leading-none">
              solutions
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-10 text-lg font-medium text-[#0c0c14]">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
              About
            </Link>
          </li>

          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
              Services
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
