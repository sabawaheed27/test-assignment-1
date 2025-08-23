

import React from "react";

interface ResultScreenProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onPlayAgain }) => {
  return (
    <div className="text-center space-y-8 bg-white/90 dark:bg-gray-800/90 p-10 rounded-2xl shadow-2xl max-w-lg animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-transparent bg-clip-text">
         Quiz complete!
      </h2>
      <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
        Your score: <span className="font-bold">{score}</span> / {total}
      </p>
      <button
        onClick={onPlayAgain}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="play-again"> Play Again
      </button>
    </div>
  );
};

export default ResultScreen;

