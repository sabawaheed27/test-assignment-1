import React, { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import ResultScreen from "./components/ResultScreen";



const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => setQuizStarted(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Landing screen */}
      {!quizStarted && !showResult && (
        <LandingScreen onStart={handleStart} />
      )}

      {/* Placeholder for quiz flow */}
      {quizStarted && !showResult && (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Quiz in progress...</h2>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={() => setShowResult(true)}
          >
            Finish Quiz
          </button>
        </div>
      )}

      {/* Result screen */}
      {showResult && (
        <ResultScreen
          score={7}
          total={10}
          onPlayAgain={() => {
            setQuizStarted(false);
            setShowResult(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
