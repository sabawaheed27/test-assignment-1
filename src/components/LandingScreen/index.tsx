
import React from "react";

interface LandingScreenProps {
  onStart: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 space-y-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl max-w-lg w-full animate-fadeIn">
      
      {/* Heading must exist */}
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
        Welcome to QuickQuiz
      </h2>

      {/* Description must match exactly what test expects */}
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
        Short multiple-choice quiz to test your knowledge.
      </p>

      {/* Button must be found with name=/start-quiz/i */}
      <button
        onClick={onStart}
        aria-label="start-quiz"  // test looks for this
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default LandingScreen;

