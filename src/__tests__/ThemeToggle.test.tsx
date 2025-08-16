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

  it('changes label after clicking', () => {
    const { rerender } = render(<ThemeToggle theme="light" onToggle={() => rerender(<ThemeToggle theme="dark" onToggle={() => {}} />)} />);
    
    const button = screen.getByRole('button', { name: /toggle-theme/i });
    fireEvent.click(button);

    expect(button).toHaveTextContent('Switch to light');
  });

  it('has the correct aria-label attribute', () => {
    render(<ThemeToggle theme="light" onToggle={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'toggle-theme');
  });
});
