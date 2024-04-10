// Import necessary React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component from components folder
import Counter from '../components/Counter';

// Render the Counter component before each test
beforeEach(() => {
  render(<Counter />);
});

// Test to check if the counter component renders correctly
test('renders counter message', () => {
  const counterHeading = screen.getByRole('heading', { name: /counter/i });
  expect(counterHeading).toBeInTheDocument();
});

// Test to check if the initial count value is 0
test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

// Test to check if clicking the "+" button increments the count
test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

// Test to check if clicking the "-" button decrements the count
test('clicking - decrements the count', () => {
  // First, increment the count to ensure decrement has an effect
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton); // Count is now 1
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton); // Expected to decrement the count back to 0
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});
