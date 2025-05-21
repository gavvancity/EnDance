'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './settings.module.css';
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu';

export default function Settings() {
  const router = useRouter();

  const settingsOptions = [
    {
      title: 'Account preferences',
      href: '/settings/terms'
    },
    {
      title: 'Sign in & security',
      href: '/settings/terms'
    },
    {
      title: 'Visibility',
      href: '/settings/terms'
    },
    {
      title: 'Notifications',
      href: '/settings/terms'
    },
    {
      title: 'Terms of Service',
      href: '/settings/terms'
    }
  ];

  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: black !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
      `}</style>
      <main className={styles.container}>
        <div className={styles.menuWrapper}>
          <HamburgerMenu />
        </div>
        <header className={styles.header}>
          <div className={styles.profileSection}>
            <Image
              src="/alyssaProfilePic.png"
              alt="Profile"
              width={44}
              height={44}
              className={styles.profileImage}
              priority
            />
            <h1 className={styles.title}>Settings</h1>
          </div>
        </header>

        <div className={styles.optionsContainer}>
          {settingsOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className={styles.optionItem}
              onClick={(e) => {
                e.preventDefault();
                router.push(option.href);
              }}
            >
              {option.title}
            </Link>
          ))}
          
          <button
            className={styles.signOutButton}
            onClick={() => {
              router.push('/');
            }}
          >
            Sign Out
          </button>

          <div className={styles.versionInfo}>
            Version 1.1
          </div>
        </div>
      </main>
    </>
  );
} 