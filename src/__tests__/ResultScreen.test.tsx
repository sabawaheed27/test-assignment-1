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

  it('calls onPlayAgain when play again button clicked', () => {
    const onPlayAgain = jest.fn();
    render(<ResultScreen score={7} total={10} onPlayAgain={onPlayAgain} />);
    fireEvent.click(screen.getByRole('button', { name: /play-again/i }));
    expect(onPlayAgain).toHaveBeenCalledTimes(1);
  });

  it('renders the heading "Quiz complete!"', () => {
    render(<ResultScreen score={7} total={10} onPlayAgain={() => {}} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Quiz complete!');
  });
});
