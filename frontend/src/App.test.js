import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state initially', () => {
  render(<App />);
  const heading = screen.getByText(/loading/i);
  expect(heading).toBeInTheDocument();
});
