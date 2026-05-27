import React, { useState } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#overview", label: "Overview" },
    { href: "#skills", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full shadow-md z-50 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-poppins-sans-serif font-semibold">
          <a href="/">
            Shubham&nbsp;
            <span className="font-extrabold text-amber-500">Batwal</span>
          </a>
        </h1>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-amber-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Download Resume */}
          <li>
            <a
              href="ShubhamCV.pdf"
              download="ShubhamCV.pdf"
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                darkMode
                  ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                  : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
            >
              <Download size={16} />
              Resume
            </a>
          </li>

          {/* Dark/Light Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-amber-500"
                  : "bg-gray-200 hover:bg-gray-300 text-amber-500"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Dark/Light Mode Toggle (Mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-amber-500"
                : "bg-gray-200 hover:bg-gray-300 text-amber-500"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Menu Button */}
          <button
            id="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded transition-colors ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-amber-500"
                : "bg-gray-200 hover:bg-gray-300 text-amber-500"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-4 py-2 rounded transition-colors hover:text-amber-500 hover:bg-amber-100 ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Download Resume (Mobile) */}
            <li>
              <a
                href="ShubhamCV.pdf"
                download="ShubhamCV.pdf"
                className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                  darkMode
                    ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                    : "bg-amber-500 hover:bg-amber-600 text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={16} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
