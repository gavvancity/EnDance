import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ children, bold, disabled }) => (
  <div
    className={
      styles.menuItem +
      (bold ? ' ' + styles.bold : '') +
      (disabled ? ' ' + styles.disabled : '')
    }
  >
    {children}
  </div>
);

export default MenuItem; 