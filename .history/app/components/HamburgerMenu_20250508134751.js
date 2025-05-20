/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="fixed left-0 top-0 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-6 z-50 p-2 hover:opacity-80 transition-opacity duration-200"
        aria-label="Toggle menu"
      >
        <Image
          src="/hamburgerIcon.png"
        alt="Menu"
        width={32}
        height={32}
        className="w-8 h-8"
        />
    </button>

    </div>
);
}
