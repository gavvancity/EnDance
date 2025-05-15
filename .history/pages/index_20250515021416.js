import React from 'react';
import Button from '../components/Button/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Our Wireframe
        </h1>
        
        <div className={styles.buttonGroup}>
          <Button 
            text="Primary Button" 
            variant="primary"
            onClick={() => console.log('Primary clicked')}
          />
          
          <Button 
            text="Secondary Button" 
            variant="secondary"
            onClick={() => console.log('Secondary clicked')}
          />
          
          <Button 
            text="Outline Button" 
            variant="outline"
            onClick={() => console.log('Outline clicked')}
          />
        </div>
      </main>
    </div>
  );
} 