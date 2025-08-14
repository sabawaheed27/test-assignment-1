import { useState, useEffect } from 'react';
import type { Question } from "../App";
import styles from '../styles/QuestionCard.module.scss';

export default function QuestionCard({ question, onSubmit }: { question: Question; onSubmit: (i: number) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    setSelected(null);  // reset selection whenever the question changes
  }, [question]);


  return (
    <article className={styles.card}>
      <h2>{question.question}</h2>

      <form onSubmit={(e) => { e.preventDefault(); if (selected !== null) onSubmit(selected); }}>
        <fieldset className={styles.options}>
          <legend className="sr-only">Answers</legend>
          {question.options.map((opt, idx) => (
            <label key={idx} className={styles.option}>
              <input
                type="radio"
                name={`q-${question.id}`}
                value={idx}
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                aria-label={`answer-${idx}`}
              />
              <span>{opt}</span>
            </label>
          ))}
        </fieldset>

        <button type="submit" disabled={selected === null} aria-label="submit-answer">
          Submit Answer
        </button>
      </form>
    </article>
  );
}
