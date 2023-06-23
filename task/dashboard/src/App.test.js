import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  const bodyElement = screen.getByTestId('main');
  const footerElement = screen.getByTestId('footer');
  expect(headerElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});