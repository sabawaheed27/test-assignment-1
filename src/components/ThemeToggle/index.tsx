// import '@testing-library/jest-dom';
// import { render, screen, fireEvent } from '@testing-library/react';
// import ThemeToggle from '../components/ThemeToggle';

// describe('ThemeToggle', () => {
//   it('renders button with correct label for light theme', () => {
//     render(<ThemeToggle theme="light" onToggle={() => {}} />);
//     expect(screen.getByRole('button', { name: /toggle-theme/i })).toHaveTextContent('Switch to dark');
//   });

//   it('renders button with correct label for dark theme', () => {
//     render(<ThemeToggle theme="dark" onToggle={() => {}} />);
//     expect(screen.getByRole('button', { name: /toggle-theme/i })).toHaveTextContent('Switch to light');
//   });

//   it('changes label after clicking', () => {
//     const { rerender } = render(<ThemeToggle theme="light" onToggle={() => rerender(<ThemeToggle theme="dark" onToggle={() => {}} />)} />);
    
//     const button = screen.getByRole('button', { name: /toggle-theme/i });
//     fireEvent.click(button);

//     expect(button).toHaveTextContent('Switch to light');
//   });

//   it('has the correct aria-label attribute', () => {
//     render(<ThemeToggle theme="light" onToggle={() => {}} />);
//     const button = screen.getByRole('button');
//     expect(button).toHaveAttribute('aria-label', 'toggle-theme');
//   });
// });

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
