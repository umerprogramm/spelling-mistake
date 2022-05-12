import { render, screen } from '@testing-library/react';
import Header from './header/Header';

test('renders learn react link', () => {
  render(<Header/>);
  const linkElement = screen.getByText(/spelling challenge/i);
  expect(linkElement).toBeInTheDocument();
});
