/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/hamburgerMenu/HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const profile = {
    name: "Alyssa L.",
    image: "/alyssa.png", // Place Alyssa's image in public/alyssa.png
    href: "/profile",
  };

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: "/homeIcon.png",
      active: true, // For demo, Home is active
      subItems: [
        { name: "Jobs", href: "/jobs", icon: "/jobsIcon.png" },
        { name: "Auditions", href: "/auditions", icon: "/auditionsIcon.png" },
        { name: "Highlights", href: "/highlights", icon: "/highlightsIcon.png" },
        { name: "Events", href: "/events", icon: "/eventsIcon.png" },
      ],
    },
    { name: "Messages", href: "/messages", icon: "/messagesIcon.png" },
    { name: "Notifications", href: "/notifications", icon: "/notificationsIcon.png" },
    { name: "Settings", href: "/settings", icon: "/settingsIcon.png" },
  ];

  return (
    <div
      className={`${styles.hamburgerMenuContainer} ${
        isOpen ? styles.open : ""
      }`}
    >
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

      {/* Profile Section */}
      <div className={styles.profileSection}>
        <Link href={profile.href} className={styles.profileLink} onClick={() => setIsOpen(false)}>
          <Image src={profile.image} alt="Alyssa L." width={48} height={48} className={styles.profileImage} />
          <span className={styles.profileName}>{profile.name}</span>
        </Link>
      </div>

      <div className={styles.menuItems}>
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={`${styles.menuItem} ${item.active ? styles.activeMenuItem : ''}`}
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
            {/* Sub-items for Home */}
            {item.subItems && (
              <div className={styles.subMenuItems}>
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className={styles.subMenuItem}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={styles.subMenuItemContent}>
                      <Image
                        src={sub.icon}
                        alt={`${sub.name} icon`}
                        width={20}
                        height={20}
                        className={styles.subMenuItemIcon}
                      />
                      <span>{sub.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Log Out at the bottom */}
      <div className={styles.logoutSection}>
        <button className={styles.logoutButton}>Log Out</button>
      </div>

      <div
        className={`