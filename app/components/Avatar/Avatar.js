import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ src, alt }) => (
  <img className={styles.avatar} src={src} alt={alt} />
);

export default Avatar; 