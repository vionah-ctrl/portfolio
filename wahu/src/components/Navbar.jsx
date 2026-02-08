import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Services", href: "#" },
    { name: "About Me", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-10 py-4 flex items-center justify-between text-white bg-black/30 backdrop-blur-sm">
      
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 600 260"
          className="w-36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Camera Outline */}
          <path d="M150 95h50l20-20h160l20 20h50c20 0 30 10 30 30v60c0 20-10 30-30 30H150c-20 0-30-10-30-30v-60c0-20 10-30 30-30z" stroke="white" strokeWidth="6" strokeLinejoin="round" />
          {/* Gold swoosh */}
          <path d="M200 110c60-40 180-40 240 0" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" />
          {/* Lens */}
          <circle cx="300" cy="150" r="40" stroke="white" strokeWidth="6" />
          <circle cx="300" cy="150" r="30" fill="#d4af37" />
          {/* Shutter blades */}
          <path d="M300 120l20 15-20 15-20-15z" fill="#111" />
          <path d="M330 150l-15 20-15-20 15-20z" fill="#111" />
          <path d="M300 180l-20-15 20-15 20 15z" fill="#111" />
          <path d="M270 150l15-20 15 20-15 20z" fill="#111" />
          {/* Text */}
          <text x="300" y="230" textAnchor="middle" fontSize="52" fill="white" fontFamily="cursive">Ivy Wahu</text>
          <text x="300" y="255" textAnchor="middle" fontSize="20" fill="#d4af37" letterSpacing="4" fontFamily="serif">PHOTOGRAPHY</text>
        </svg>
      </div>

      {/* NAV LINKS for md+ */}
      <nav className="hidden md:flex gap-8 text-sm text-gray-200 items-center">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              relative
              px-1
              py-1
              transition-all duration-300
              hover:text-white
              hover:scale-105
            `}
          >
            {link.name}
            {/* underline effect on hover */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#c9a66b] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* CTA button */}
      <button className="hidden md:block bg-[#c9a66b] text-black px-5 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-300">
        Hire Me
      </button>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-6 md:hidden space-y-4 animate-fadeIn">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg hover:text-[#c9a66b] transition transform hover:scale-105 duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#c9a66b] text-black px-6 py-2 rounded-md mt-2 hover:scale-105 transition-transform duration-300">
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
