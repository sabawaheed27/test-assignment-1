
import React, { useState, useEffect } from "react";
import type { Question } from "../../App";

interface QuestionCardProps {
  question: Question;
  onSubmit: (selectedIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSubmit }) => {
  const [selected, setSelected] = useState<number | null>(null);

  // Reset selection when question changes
  useEffect(() => {
    setSelected(null);
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected !== null) onSubmit(selected);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-white dark:bg-gray-600 p-6 rounded-lg shadow-lg text-center transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
      <div className="space-y-3 mb-6 text-left">
        {question.options.map((option, idx) => (
          <label
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer dark:text-white">
            <input
              type="radio"
              name={question.id}
              checked={selected === idx}
              onChange={() => setSelected(idx)}
              className="accent-blue-600"
              aria-label={`answer-${idx}`} />
            {option}
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={selected === null}
        aria-label="submit-answer"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
        Submit Answer
      </button>
    </form>
  );
};

export default QuestionCard;
