import React, { useState } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#overview", label: "Overview" },
    { href: "#skills", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500 ${
        darkMode
          ? "border-white/10 bg-[#070b14]/75 text-white shadow-[0_12px_40px_rgba(2,6,23,0.28)]"
          : "border-slate-200/70 bg-white/75 text-slate-950 shadow-[0_12px_40px_rgba(15,23,42,0.07)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight sm:text-xl">
            Shubham Batwal
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative block rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? "text-slate-300 hover:bg-white/5 hover:text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-linear-to-r from-indigo-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="ShubhamCV.pdf"
            download="ShubhamCV.pdf"
            className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(79,70,229,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(34,211,238,0.25)] active:translate-y-0"
          >
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            Resume
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`group rounded-xl border p-2.5 transition-all duration-300 hover:-translate-y-0.5 ${
              darkMode
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-slate-200 bg-white text-black shadow-sm hover:border-indigo-200"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <span className="block transition-transform duration-500 group-hover:rotate-12">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-xl border p-2.5 transition-all duration-300 ${
              darkMode
                ? "border-white/10 bg-white/5 text-white"
                : "border-slate-200 bg-white text-black"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            id="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`rounded-xl border p-2.5 transition-all duration-300 ${
              darkMode
                ? "border-white/10 bg-white/5 text-white"
                : "border-slate-200 bg-white text-slate-950"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`border-t lg:hidden ${
            darkMode
              ? "border-white/10 bg-[#0b1120]/95"
              : "border-slate-200 bg-white/95"
          }`}
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                      : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="ShubhamCV.pdf"
                download="ShubhamCV.pdf"
                className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
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
