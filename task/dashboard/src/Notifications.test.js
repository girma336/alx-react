import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders Notifications without crashing', () => {
  render(<Notifications />);
});

test('renders three list items', () => {
  const { getAllByRole } = render(<Notifications />);
  const listItems = getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

test('renders the correct text', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});