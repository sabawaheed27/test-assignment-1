import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('QuickQuiz Integration Tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('1. Starts quiz from landing screen', () => {
    // Landing screen is visible
    expect(screen.getByRole('heading', { name: /welcome to quickquiz/i })).toBeInTheDocument();
    const startButton = screen.getByRole('button', { name: /start-quiz/i });
    expect(startButton).toBeInTheDocument();

    // Click start and question screen appears
    fireEvent.click(startButton);
    expect(screen.getByRole('heading', { level: 2 })).not.toHaveTextContent(/welcome to quickquiz/i);
  });

  it('2. Answers a question and updates scoreboard', () => {
    fireEvent.click(screen.getByRole('button', { name: /start-quiz/i }));

    // Select first option (answer-0) and submit
    const option = screen.getByLabelText('answer-0');
    fireEvent.click(option);
    const submit = screen.getByRole('button', { name: /submit-answer/i });
    expect(submit).not.toBeDisabled();
    fireEvent.click(submit);

    // ScoreBoard should update (answered = 1, score might be 0 or 1 depending on correct answer)
    expect(screen.getByRole('status')).toHaveTextContent(/answered: 1/i);
    expect(screen.getByRole('status')).toHaveTextContent(/score:/i);
  });

  it('3. Completes quiz and shows result screen', () => {
    fireEvent.click(screen.getByRole('button', { name: /start-quiz/i }));

    // Answer all questions (choose first option)
    while (screen.queryByRole('button', { name: /submit-answer/i })) {
      fireEvent.click(screen.getByLabelText('answer-0'));
      fireEvent.click(screen.getByRole('button', { name: /submit-answer/i }));
    }

    // Result screen appears
    expect(screen.getByRole('heading', { name: /quiz complete!/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /play-again/i })).toBeInTheDocument();
  });

  it('4. Play again resets quiz', () => {
    fireEvent.click(screen.getByRole('button', { name: /start-quiz/i }));

    // Complete quiz quickly
    while (screen.queryByRole('button', { name: /submit-answer/i })) {
      fireEvent.click(screen.getByLabelText('answer-0'));
      fireEvent.click(screen.getByRole('button', { name: /submit-answer/i }));
    }

    // Click Play Again
    fireEvent.click(screen.getByRole('button', { name: /play-again/i }));

    // Should be back to landing screen with Start button
    expect(screen.getByRole('button', { name: /start-quiz/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /welcome to quickquiz/i })).toBeInTheDocument();
  });

  it('5. Toggles theme and persists across quiz', () => {
    // Initial theme button label is 'Switch to dark'
    const toggle = screen.getByRole('button', { name: /toggle-theme/i });
    expect(toggle).toHaveTextContent(/Switch to dark/i);

    // Toggle theme to dark
    fireEvent.click(toggle);
    expect(toggle).toHaveTextContent(/Switch to light/i);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');



    // Start quiz, theme should persist
    fireEvent.click(screen.getByRole('button', { name: /start-quiz/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');



    // Toggle back to light
    fireEvent.click(screen.getByRole('button', { name: /toggle-theme/i }));
    expect(toggle).toHaveTextContent(/switch to dark/i);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
