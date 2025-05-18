"use client";

import { FiTerminal } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleLinkClick = () => {
    setIsClick(false);
  };

  return (
    <header className="relative py-4 border-b border-white/15 md:border-none">
      <div className="px-5 mx-auto max-w-3xl">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 rounded-xl">
          <Link href={"/"}>
            <div className="flex items-center font-semibold">
              <FiTerminal />
              <span>TIAGO</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm md:text-base">
              <a href="#" className="text-white/70 hover:text-white transition">
                Home
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white/70 hover:text-white transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <button className="transform rounded-lg bg-black px-4 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Download CV
            </button>
            <button onClick={toggleNavbar}>
              {isClick ? (
                <IoMdClose size={30} className="md:hidden" />
              ) : (
                <HiMenuAlt3 size={30} className="md:hidden" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu com animação */}
      <AnimatePresence>
        {isClick && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#060608] px-4 pt-4 pb-6 space-y-4 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#"
              onClick={handleLinkClick}
              className="block text-xl text-white/70 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="block text-xl text-white/70 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="block text-xl text-white/70 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block text-xl text-white/70 hover:text-white transition"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
