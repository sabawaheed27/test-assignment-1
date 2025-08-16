import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionCard from '../components/QuestionCard';
import type { Question } from '../App';

const sampleQuestion: Question = {
  id: 'q1',
  question: 'What is 2 + 2?',
  options: ['3', '4', '5'],
  correctIndex: 1,
};

describe('QuestionCard', () => {
  it('renders question text', () => {
    render(<QuestionCard question={sampleQuestion} onSubmit={() => {}} />);
    expect(screen.getByRole('heading', { level: 2 }))
      .toHaveTextContent(sampleQuestion.question);
  });

  it('renders all options as radio inputs', () => {
    render(<QuestionCard question={sampleQuestion} onSubmit={() => {}} />);
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(sampleQuestion.options.length);
  });

  it('renders all option labels correctly', () => {
    render(<QuestionCard question={sampleQuestion} onSubmit={() => {}} />);
    sampleQuestion.options.forEach(opt => {
      expect(screen.getByText(opt)).toBeInTheDocument();
    });
  });

  it('disables submit button when no option selected', () => {
    render(<QuestionCard question={sampleQuestion} onSubmit={() => {}} />);
    const submitButton = screen.getByRole('button', { name: /submit-answer/i });
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when option selected', () => {
    render(<QuestionCard question={sampleQuestion} onSubmit={() => {}} />);
    const radios = screen.getAllByRole('radio');
    fireEvent.click(radios[0]);
    const submitButton = screen.getByRole('button', { name: /submit-answer/i });
    expect(submitButton).not.toBeDisabled();
  });

  it('updates selection when a different option is clicked', () => {
    render(<QuestionCard question={sampleQuestion} onSubmit={() => {}} />);
    const radios = screen.getAllByRole('radio');

    fireEvent.click(radios[0]);
    expect(radios[0]).toBeChecked();

    fireEvent.click(radios[2]);
    expect(radios[2]).toBeChecked();
    expect(radios[0]).not.toBeChecked();
  });

  it('submits answer and shows feedback to user', () => {
    const { rerender } = render(
      <QuestionCard
        question={sampleQuestion}
        onSubmit={() => rerender(<p>Answer submitted</p>)}
      />
    );

    fireEvent.click(screen.getAllByRole('radio')[1]); // select "4"
    fireEvent.click(screen.getByRole('button', { name: /submit-answer/i }));

    expect(screen.getByText('Answer submitted')).toBeInTheDocument();
  });
});
