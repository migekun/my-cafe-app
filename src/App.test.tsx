import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';


/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Items ordered:/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('calls handleOrder when a drink button is clicked', () => {
  console.log("Done")
  const handleOrderMock = jest.fn();
  render(<App />);
  
  // Assuming DrinkButton has a text or label you can query
  const drinkButton = screen.getByText(/Drink Name/i);
  fireEvent.click(drinkButton);
  
  expect(handleOrderMock).toHaveBeenCalled();
  console.log("Done")
});