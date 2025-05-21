'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './settings.module.css';
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu';

export default function Settings() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('./terms');
  };

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
          <button className={styles.optionItem} onClick={handleNavigation}>
            Account preferences
          </button>
          <button className={styles.optionItem} onClick={handleNavigation}>
            Sign in & security
          </button>
          <button className={styles.optionItem} onClick={handleNavigation}>
            Visibility
          </button>
          <button className={styles.optionItem} onClick={handleNavigation}>
            Notifications
          </button>
          <button className={styles.optionItem} onClick={handleNavigation}>
            Terms of Service
          </button>
          
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