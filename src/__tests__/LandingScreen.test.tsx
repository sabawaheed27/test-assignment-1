import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingScreen from '../components/LandingScreen';

describe('LandingScreen', () => {
  it('renders start button', () => {
    render(<LandingScreen onStart={() => {}} />);
    expect(screen.getByRole('button', { name: /start-quiz/i })).toBeInTheDocument();
  });

  it('removes landing screen after clicking start', () => {
    // We simulate what would happen if the parent removed LandingScreen
    const { rerender } = render(<LandingScreen onStart={() => rerender(<p>Quiz started</p>)} />);
    fireEvent.click(screen.getByRole('button', { name: /start-quiz/i }));

    // Landing screen heading disappears, replaced by quiz content
    expect(screen.queryByRole('heading', { name: /welcome to quickquiz/i })).not.toBeInTheDocument();
    expect(screen.getByText('Quiz started')).toBeInTheDocument();
  });

  it('renders heading and description text', () => {
    render(<LandingScreen onStart={() => {}} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to QuickQuiz');
    expect(
      screen.getByText('Short multiple-choice quiz to test your knowledge.')
    ).toBeInTheDocument();
  });
});
