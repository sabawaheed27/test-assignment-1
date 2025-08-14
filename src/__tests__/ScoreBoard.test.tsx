import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ScoreBoard from '../components/ScoreBoard';

describe('ScoreBoard', () => {
  it('renders score and answered/total text', () => {
    render(<ScoreBoard score={3} answered={5} total={10} />);

    expect(
      screen.getByText((_, element) => element?.textContent === 'Score: 3')
    ).toBeInTheDocument();

    expect(
      screen.getByText((_, element) => element?.textContent === 'Answered: 5/10')
    ).toBeInTheDocument();
  });

  it('renders zero values correctly', () => {
    render(<ScoreBoard score={0} answered={0} total={0} />);

    expect(
      screen.getByText((_, element) => element?.textContent === 'Score: 0')
    ).toBeInTheDocument();

    expect(
      screen.getByText((_, element) => element?.textContent === 'Answered: 0/0')
    ).toBeInTheDocument();
  });
});
