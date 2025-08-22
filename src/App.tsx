import React, { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import QuestionCard from "./components/QuestionCard"; 

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


const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => setQuizStarted(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Render LandingScreen only until quiz starts */}
      {!quizStarted ? (
        <LandingScreen onStart={handleStart} />
      ) : (
        // Placeholder for future quiz components
        <div></div>
      )}
    </div>
    
  );
 };



export default App;
