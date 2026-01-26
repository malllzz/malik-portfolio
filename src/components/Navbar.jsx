import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide cursor-pointer transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Malik<span className="text-[#6366F1]">.</span>
        </div>

        <div className="flex items-center gap-8">

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#6366F1] font-medium cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/CV_Malik_Aziz_Ramadhan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-wave hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#6366F1] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FileText size={18} />
            My Resume
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-lg">
          <ul className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="/CV_Malik_Aziz_Ramadhan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 w-full px-5 py-3 bg-[#6366F1] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText size={18} />
                My Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;