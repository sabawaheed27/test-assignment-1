import React, { useState, useEffect } from 'react';
import LandingScreen from './components/LandingScreen';
import QuestionCard from './components/QuestionCard';
import ScoreBoard from './components/ScoreBoard';
import ResultScreen from './components/ResultScreen';
import ThemeToggle from './components/ThemeToggle';
import styles from './styles/App.module.scss';

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

const DEFAULT_QUESTIONS: Question[] = [
  { id: 'q1', question: 'What is 2 + 2?', options: ['3', '4', '5'], correctIndex: 1 },
  { id: 'q2', question: 'Capital of France?', options: ['Paris', 'Berlin', 'Rome'], correctIndex: 0 },
  { id: 'q3', question: 'Which is a JavaScript library?', options: ['Django', 'React', 'Laravel'], correctIndex: 1 },
];

export default function App({ initialQuestions = DEFAULT_QUESTIONS }: { initialQuestions?: Question[] }) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const questions = initialQuestions;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function handleStart() {
    setStarted(true);
    setCurrentIndex(0);
    setScore(0);
  }

  function handleSubmit(answerIndex: number) {
    if (questions[currentIndex].correctIndex === answerIndex) {
      setScore((s) => s + 1);
    }
    setCurrentIndex((i) => i + 1);
  }

  function handlePlayAgain() {
    setStarted(false);
    setCurrentIndex(0);
    setScore(0);
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>QuickQuiz</h1>
        <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />
      </header>

      <main className={styles.main}>
        {!started && <LandingScreen onStart={handleStart} />}

        {started && currentIndex < questions.length && (
          <>
            <ScoreBoard score={score} answered={currentIndex} total={questions.length} />
            <QuestionCard question={questions[currentIndex]} onSubmit={handleSubmit} />
          </>
        )}

        {started && currentIndex >= questions.length && (
          <ResultScreen score={score} total={questions.length} onPlayAgain={handlePlayAgain} />
        )}
      </main>
    </div>
  );
}
