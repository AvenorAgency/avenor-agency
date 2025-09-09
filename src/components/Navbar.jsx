import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black border-b border-gold px-4 sm:px-8 py-4 flex justify-between items-center z-50">
      {/* Logo / Titre */}
      <div className="flex items-center">
        {/* Texte desktop */}
        <div className="hidden sm:block text-gold font-bold text-xl tracking-wide">Avenor Agency</div>
        {/* Logo mobile */}
        <img src={logo} alt="Avenor Agency Logo" className="sm:hidden h-8 w-auto" />
      </div>

      {/* Menu Desktop */}
      <div className="hidden sm:flex space-x-8 text-gold font-semibold">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/services" className="hover:text-white transition">Services</Link>
        <Link to="/join" className="hover:text-white transition">Join</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/faq" className="hover:text-white transition">FAQ</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>
      </div>


      {/* Hamburger Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gold focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile déroulant */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-black border-t border-gold overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-gold font-semibold">
          <Link to="/" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/join" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Join</Link>
          <Link to="/about" className="hover:text-white transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/faq" className="hover:text-white transition" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/contact" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
