"use client";

import styles from './TextArea.module.css';

export default function TextArea({ placeholder }) {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      rows={4}
    />
  );
} 