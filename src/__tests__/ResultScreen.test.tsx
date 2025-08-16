import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ResultScreen from '../components/ResultScreen';

describe('ResultScreen', () => {
  it('displays final score', () => {
    render(<ResultScreen score={7} total={10} onPlayAgain={() => {}} />);
    expect(
      screen.getByText((_, element) => element?.textContent === 'Your score: 7 / 10')
    ).toBeInTheDocument();
  });

  it('returns to landing screen when play again clicked', () => {
    const { rerender } = render(
      <ResultScreen score={7} total={10} onPlayAgain={() => rerender(<h2>Welcome to QuickQuiz</h2>)} />
    );

    fireEvent.click(screen.getByRole('button', { name: /play-again/i }));

    expect(screen.getByRole('heading', { name: /welcome to quickquiz/i })).toBeInTheDocument();
  });

  it('renders the heading "Quiz complete!"', () => {
    render(<ResultScreen score={7} total={10} onPlayAgain={() => {}} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Quiz complete!');
  });
});
