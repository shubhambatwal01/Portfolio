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
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 border-b ${
        darkMode
          ? "bg-gray-900/95 text-white border-gray-800"
          : "bg-white/95 text-gray-900 border-gray-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          <a
            href="/"
            className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
          >
            Shubham Batwal
          </a>
        </h1>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  darkMode
                    ? "hover:text-amber-400 hover:bg-gray-800/50"
                    : "hover:text-amber-600 hover:bg-gray-100"
                }`}
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
              className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 hover:shadow-lg hover:shadow-amber-600/50"
                  : "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white hover:shadow-lg hover:shadow-amber-600/50"
              }`}
            >
              <Download size={16} />
              Resume
            </a>
          </li>

          {/* Dark/Light Mode Toggle */}
          <li className="ml-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-amber-400"
                  : "bg-gray-100 hover:bg-gray-200 text-amber-600"
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
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-amber-400"
                : "bg-gray-100 hover:bg-gray-200 text-amber-600"
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
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-amber-400"
                : "bg-gray-100 hover:bg-gray-200 text-amber-600"
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
          className={`md:hidden border-t transition-all duration-300 ${
            darkMode
              ? "bg-gray-800/50 border-gray-700"
              : "bg-gray-50/50 border-gray-200"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    darkMode
                      ? "text-gray-100 hover:text-amber-400 hover:bg-gray-700"
                      : "text-gray-900 hover:text-amber-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Download Resume (Mobile) */}
            <li className="pt-2">
              <a
                href="ShubhamCV.pdf"
                download="ShubhamCV.pdf"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900"
                    : "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
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
