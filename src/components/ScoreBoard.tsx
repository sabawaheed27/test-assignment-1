import styles from '../styles/ScoreBoard.module.scss';

export default function ScoreBoard({ score, answered, total }: { score: number; answered: number; total: number }) {
  return (
    <div className={styles.score} role="status" aria-live="polite">
      <div>Score: <strong>{score}</strong></div>
      <div>Answered: {answered}/{total}</div>
    </div>
  );
}
