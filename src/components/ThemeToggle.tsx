import React from 'react';
import styles from '../styles/ThemeToggle.module.scss';

export default function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <button className={styles.toggle} onClick={onToggle} aria-label="toggle-theme">
      {theme === 'light' ? 'Switch to dark' : 'Switch to light'}
    </button>
  );
}
