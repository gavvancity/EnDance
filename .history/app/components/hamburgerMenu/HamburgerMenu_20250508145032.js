/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/hamburgerMenu/HamburgerMenu.module.css";

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
    <div className={styles.hamburgerMenuContainer}>
      <div className={styles.hamburgerMenuButtonContainer}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.hamburgerMenuButton}
        >
          <Image
            src="/hamburgerIcon.png"
            alt="Menu"
            width={44}
            height={44}
            className={styles.hamburgerMenuIcon}
          />
        </button>
      </div>

      <div className={styles.hamburgerMenuOverlay}></div>

      <div className={`menuItems ${isOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={styles.menuItem}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div
        className={`menBackdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
