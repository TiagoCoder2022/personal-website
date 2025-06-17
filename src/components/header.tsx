"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const items = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (hash: string) => {
    if (pathname !== "/") {
      // Se não está na home, vai pra home com scroll
      router.push("/" + hash);
    } else {
      // Se já está na home, apenas rola até a seção
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <div className="flex gap-4">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.link)}
              className="text-base text-neutral-800 dark:text-neutral-200/80 hover:text-neutral-200 "
            >
              {item.name}
            </button>
          ))}
        </div>
        <NavbarButton href="/resume/Full-Stack-cv.pdf" download>
          My Resume
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {items.map((item) => (
            <button
              key={item.link}
              onClick={() => {
                handleNavClick(item.link);
                setMenuOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-neutral-800 dark:text-neutral-200"
            >
              {item.name}
            </button>
          ))}
          <NavbarButton
            href="/resume/Full-Stack-cv.pdf"
            download
            className="mt-4 w-full"
          >
            My Resume
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
