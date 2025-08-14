import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders button with correct label for light theme', () => {
    render(<ThemeToggle theme="light" onToggle={() => {}} />);
    expect(screen.getByRole('button', { name: /toggle-theme/i })).toHaveTextContent('Switch to dark');
  });

  it('renders button with correct label for dark theme', () => {
    render(<ThemeToggle theme="dark" onToggle={() => {}} />);
    expect(screen.getByRole('button', { name: /toggle-theme/i })).toHaveTextContent('Switch to light');
  });

  it('calls onToggle when clicked', () => {
    const onToggle = jest.fn();
    render(<ThemeToggle theme="light" onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /toggle-theme/i }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('has the correct aria-label attribute', () => {
    render(<ThemeToggle theme="light" onToggle={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'toggle-theme');
  });
});
