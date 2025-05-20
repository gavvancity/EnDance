import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ children }) => (
  <div className={styles.sectionTitle}>{children}</div>
);

export default SectionTitle; 