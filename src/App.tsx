
import React, { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import ScoreBoard from "./components/ScoreBoard";
import ThemeToggle from "./components/ThemeToggle";

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  { id: "q1", question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus"], correctIndex: 1 },
  { id: "q2", question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"], correctIndex: 1 },
  { id: "q3", question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain"], correctIndex: 0 },
  { id: "q4", question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "120°C"], correctIndex: 1 },
  { id: "q5", question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correctIndex: 1 },
  { id: "q6", question: "What is the smallest prime number?", options: ["0", "1", "2"], correctIndex: 2 },
];

export default function App() {
  const [stage, setStage] = useState<"landing" | "quiz" | "result">("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const startQuiz = () => {
    setStage("quiz");
    setScore(0);
    setAnswered(0);
    setCurrentIndex(0);
  };

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentIndex].correctIndex) {
      setScore((prev) => prev + 1);
    }
    setAnswered((prev) => prev + 1);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStage("result");
    }
  };

const toggleTheme = () => {
  setTheme((prev) => {
    const newTheme = prev === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme); // <-- add this
    return newTheme;
  });
};

  return (
<div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"} min-h-screen flex flex-col transition-colors duration-300`}>
      {/* Header */}
      <header className="justify center items-center px-6 py-4 shadow-md bg-white dark:bg-gray-400">
        <h1 className="text-5xl text-center font-bold">QuickQuiz</h1>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {stage === "landing" && <LandingScreen onStart={startQuiz} />}
        {stage === "quiz" && (
          <>
            <ScoreBoard score={score} answered={answered} total={questions.length} />
            <QuestionCard question={questions[currentIndex]} onSubmit={handleAnswer} />
          </>
        )}
        {stage === "result" && (
<ResultScreen
  score={score}
  total={questions.length}
  onPlayAgain={() => {
    setStage('landing');
    setScore(0);
    setAnswered(0);
    setCurrentIndex(0);
  }}
/>
        )}
      </main>
    </div>
  );
}




