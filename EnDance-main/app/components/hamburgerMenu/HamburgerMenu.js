/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/hamburgerMenu/HamburgerMenu.module.css";
import { useRouter } from "next/navigation";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
          <div
            className={styles.profileSection}
            style={{ cursor: "pointer" }}
            onClick={() => {
              alert("You are now brought to the Profile page");
              setIsOpen(false);
              router.push("/jobs");
            }}
          >
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
        <Link
          key={menuItems[0].name}
          href={menuItems[0].href}
          className={styles.menuItem}
          onClick={(e) => {
            e.preventDefault();
            alert("You are now brought to the Home page");
            setIsOpen(false);
            router.push("/jobs");
          }}
        >
          <div className={styles.menuItemContent}>
            <Image
              src={menuItems[0].icon}
              alt={`${menuItems[0].name} icon`}
              width={24}
              height={24}
              className={styles.menuItemIcon}
            />
            <span>{menuItems[0].name}</span>
          </div>
        </Link>
        <div className={styles.subMenuGroup}>
          <Link
            key={menuItems[1].name}
            href={menuItems[1].href}
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              router.push("/jobs");
            }}
          >
            <div className={styles.menuItemContent}>
              <Image
                src={menuItems[1].icon}
                alt={`${menuItems[1].name} icon`}
                width={24}
                height={24}
                className={styles.menuItemIcon}
              />
              <span>{menuItems[1].name}</span>
            </div>
          </Link>
          {menuItems.slice(2, 5).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.menuItem}
              onClick={(e) => {
                e.preventDefault();
                alert(`You are now brought to the ${item.name} page`);
                setIsOpen(false);
                router.push("/jobs");
              }}
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
        {menuItems.slice(5, 7).map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              alert(`You are now brought to the ${item.name} page`);
              setIsOpen(false);
              router.push("/jobs");
            }}
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
        <Link
          key={menuItems[7].name}
          href={menuItems[7].href}
          className={styles.menuItem}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            router.push('/settings');
          }}
        >
          <div className={styles.menuItemContent}>
            <Image
              src={menuItems[7].icon}
              alt={`${menuItems[7].name} icon`}
              width={24}
              height={24}
              className={styles.menuItemIcon}
            />
            <span>{menuItems[7].name}</span>
          </div>
        </Link>
      </div>
      {isOpen && (
        <button
          className={styles.logoutButton}
          onClick={() => {
            alert("You have now logged out");
          }}
        >
          Log Out
        </button>
      )}
      <div
        className={`${styles.hamburgerMenuOverlay} ${
          isOpen ? styles.open : ""
        }`}
      ></div>
    </div>
  );
}
