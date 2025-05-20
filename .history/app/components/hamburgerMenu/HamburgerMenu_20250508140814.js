/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./hamburgerMenu.css";

export default function HamburgerMenu() {
const [isOpen, setIsOpen] = useState(false);

const menuItems = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Auditions", href: "/auditions" },
    { name: "Highlights", href: "/highlights" },
    { name: "Events", href: "/events" },
    { name: "Messages", href: "/messages" },
    { name: "Notifications", href: "/notifications" },
    { name: "Settings", href: "/settings" },
];

  return (
    <div className="hamburger-menu-container">
      <div className="hamburger-menu-button-container">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger-menu-button"
          aria-label="Toggle menu"
        >
          <Image
            src="/hamburgerIcon.png"
            alt="Menu"
            width={32}
            height={32}
            className="hamburger-menu-icon"
          />
        </button>
      </div>

      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="menu-item"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div
        className={`menu-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
