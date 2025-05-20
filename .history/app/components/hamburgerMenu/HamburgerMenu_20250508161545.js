/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/hamburgerMenu/HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", icon: "/homeIcon.png" },
    { name: "Jobs", href: "/jobs", icon: "/jobsIcon.png" },
    { name: "Auditions", href: "/auditions", icon: "/auditionsIcon.png" },
    { name: "Highlights", href: "/highlights", icon: "/highlightsIcon.png" },
    { name: "Events", href: "/events", icon: "/eventsIcon.png" },
    { name: "Messages", href: "/messages", icon: "/messagesIcon.png" },
    {
      name: "Notifications",
      href: "/notifications",
      icon: "/notificationsIcon.png",
    },
    { name: "Settings", href: "/settings", icon: "/settingsIcon.png" },
  ];

  return (
    <div
      className={`${styles.hamburgerMenuContainer} ${
        isOpen ? styles.open : ""
      }`}
    >
      <div className={styles.menuHeaderRow}>
        {isOpen && (
          <div className={styles.profileSection}>
            <Image
              src="/alyssaProfilePic.png"
              alt="Alyssa L."
              width={44}
              height={44}
              className={styles.profilePic}
            />
            <span className={styles.profileName}>Alyssa L.</span>
          </div>
        )}
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
      </div>
      <div className={styles.menuItems}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={styles.menuItem}
            onClick={() => setIsOpen(false)}
          >
            <div className={styles.menuItemContent}>
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={24}
                height={24}
                className={styles.menuItemIcon}
              />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`${styles.hamburgerMenuOverlay} ${
          isOpen ? styles.open : ""
        }`}
      ></div>
    </div>
  );
}
