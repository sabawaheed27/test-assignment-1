import React from 'react';
import styles from '../styles/LandingScreen.module.scss';

export default function LandingScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className={styles.landing} aria-label="landing">
      <h2>Welcome to QuickQuiz</h2>
      <p>Short multiple-choice quiz to test your knowledge.</p>
      <button onClick={onStart} aria-label="start-quiz">Start Quiz</button>
    </section>
  );
}
