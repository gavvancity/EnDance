/** @format */

"use client";
import { useState } from "react";
import Link from "next/link";

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
    <div className="fixed left-0 top-0 h-full">
      {/* Hamburger Button */}
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
        <div className="w-6 h-5 flex flex-col justify-between">
            <span
            className={`w-full h-0.5 bg-black dark:bg-white transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
            className={`w-full h-0.5 bg-black dark:bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black dark:bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-4">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
