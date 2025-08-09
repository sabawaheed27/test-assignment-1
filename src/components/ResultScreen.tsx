import React from 'react';
import styles from '../styles/ResultScreen.module.scss';

export default function ResultScreen({ score, total, onPlayAgain }: { score: number; total: number; onPlayAgain: () => void }) {
  return (
    <section className={styles.result} aria-label="result">
      <h2>Quiz complete!</h2>
      <p>Your score: <strong>{score}</strong> / {total}</p>
      <button onClick={onPlayAgain} aria-label="play-again">Play Again</button>
    </section>
  );
}
