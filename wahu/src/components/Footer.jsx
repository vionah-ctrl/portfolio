import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1c] text-[#e6e3db]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center gap-4 justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm flex-wrap">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="h-4 w-px bg-white/20" />
          <span className="hover:text-white cursor-pointer">Portfolio</span>
          <span className="h-4 w-px bg-white/20" />
          <span className="hover:text-white cursor-pointer">Services</span>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-blue-400 hover:text-white transition transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M24 4.557a9.825 9.825 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.417A9.867 9.867 0 010 19.54 13.93 13.93 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.776.128 4.572.392 3.515 1.45 2.457 2.507 2.192 3.711 2.134 4.987.012 7.267 0 8.741 0 12c0 3.259.012 4.733.07 6.013.058 1.276.322 2.48 1.38 3.537 1.058 1.058 2.262 1.322 3.537 1.38C8.741 23.988 10.215 24 12 24s3.259-.012 4.537-.07c1.276-.058 2.48-.322 3.537-1.38 1.058-1.058 1.322-2.262 1.38-3.537C23.988 16.741 24 15.267 24 12s-.012-3.259-.07-4.537c-.058-1.276-.322-2.48-1.38-3.537-1.058-1.058-2.262-1.322-3.537-1.38C15.259.012 13.785 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
            </svg>
          </a>
        </div>

        {/* Contact email */}
        <div className="flex items-center gap-2 text-sm">
          <span>Contact</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[#cfcbbf]">info@Ivyphotograph.com</span>
        </div>

        {/* Phone */}
        <div className="text-sm text-[#cfcbbf] whitespace-nowrap">
          +254 700 000 000
        </div>

      </div>
    </footer>
  );
};

export default Footer;
