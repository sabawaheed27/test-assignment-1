import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingScreen from '../components/LandingScreen';

describe('LandingScreen', () => {
  it('renders start button', () => {
    render(<LandingScreen onStart={() => {}} />);
    expect(screen.getByRole('button', { name: /start-quiz/i })).toBeInTheDocument();
  });

  it('calls onStart when start button clicked', () => {
    const onStart = jest.fn();
    render(<LandingScreen onStart={onStart} />);
    fireEvent.click(screen.getByRole('button', { name: /start-quiz/i }));
    expect(onStart).toHaveBeenCalledTimes(1);
  });

  it('renders heading and description text', () => {
    render(<LandingScreen onStart={() => {}} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to QuickQuiz');
    expect(
      screen.getByText('Short multiple-choice quiz to test your knowledge.')
    ).toBeInTheDocument();
  });
});
