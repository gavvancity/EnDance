"use client";
import styles from './Filter.module.css';
import { useState } from 'react';

export default function Filter({ icon, label, children, dropdown = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filter}>
      <div
        className={styles.filterHeader}
        onClick={() => dropdown && setOpen((prev) => !prev)}
        tabIndex={0}
        role={dropdown ? 'button' : undefined}
        aria-expanded={dropdown ? open : undefined}
      >
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
        {dropdown && (
          <span className={styles.arrow} style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807614 21.0711 0.807613 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.80761 1.97919 0.807609 1.3934 1.3934C0.807613 1.97918 0.807613 2.92893 1.3934 3.51472L10.9393 13.0607ZM12 9L10.5 9L10.5 12L12 12L13.5 12L13.5 9L12 9Z" fill="#5E5E5E"/>
            </svg>
          </span>
        )}
      </div>
      {dropdown && open && <div className={styles.dropdown}>{children}</div>}
    </div>
  );
}

