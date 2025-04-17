"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { title: "Início", href: "#home" },
  { title: "Sobre", href: "#about" },
  { title: "Projetos", href: "#projects" },
  { title: "Contato", href: "#contact" },
];

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-[rgb(var(--background-start-rgb))] bg-opacity-90 shadow-lg py-2"
          : "py-6"
      }`}>
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Vinícius<span className="text-white">Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link
                href={item.href}
                className="relative font-medium tracking-wide hover:text-[rgb(var(--primary-color))] transition-colors group">
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(var(--primary-color))] transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative font-medium tracking-wide hover:text-[rgb(var(--primary-color))] transition-colors group"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            Currículo
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(var(--primary-color))] transition-all group-hover:w-full"></span>
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {menuOpen ? (
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

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-[rgb(var(--background-start-rgb))] bg-opacity-95 shadow-lg p-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-lg py-2 hover:text-[rgb(var(--primary-color))] transition-colors border-b border-gray-800"
                  onClick={() => setMenuOpen(false)}>
                  {item.title}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
                onClick={() => setMenuOpen(false)}>
                Currículo
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
