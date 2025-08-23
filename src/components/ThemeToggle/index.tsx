
import React from "react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="toggle-theme"
      className="px-5 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium shadow-md hover:shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
    >
      {theme === "light" ? "Switch to dark" : "Switch to light"}
    </button>
  );
};

export default ThemeToggle;
