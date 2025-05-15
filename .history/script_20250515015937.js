import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, variant = "primary", disabled = false }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
