import { useState } from 'react';
import './App.css';
import DrinkButton from './components/DrinkButton'; 

interface Drink {
  id: string,
  name: string;
  price: number;
}

// Define the drinks array
const drinks: Drink[] = [
  { id: 'coffee', name: 'Coffee', price: 480 },
  { id: 'tea', name: 'Tea', price: 280 },
  { id: 'milk', name: 'Milk', price: 180 },
  { id: 'coke', name: 'Coke', price: 190 },
  { id: 'beer', name: 'Beer', price: 580.5 },
  //{ id: 'wine', name: 'Wine', price: 500 },
];

// Define the type for the count state
type Counts = { [key: string]: number };

function App() {
  // Initialize counts dynamically based on the drinks array
  const initialCounts = drinks.reduce((acc: Counts, drink: Drink) => {
    acc[drink.id] = 0;
    return acc;
  }, {});

  // Set the state for counts
  const [counts, setCounts] = useState<Counts>(initialCounts);

  // Handle ordering drinks and update the counts
  const handleOrder = (drinkId: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [drinkId]: prevCounts[drinkId] + 1,
    }));
  };

  // Calculate the total count and total price
  const totalCount = Object.values(counts).reduce((acc, count) => acc + count, 0);
  const totalPrice = drinks.reduce((acc, drink) => {
    return acc + counts[drink.id] * drink.price;
  }, 0);

  return (
    <div className="App">
      {/* Display the order buttons dynamically from the drinks array */}
      <div className="container">
        <div className="buttons">
          {drinks.map((drink) => (
            <DrinkButton
              key={drink.id}
              id={drink.id}
              name={drink.name}
              price={drink.price}
              count={counts[drink.id]}
              onOrder={handleOrder}
            />
          ))}
        </div>

        {/* Display the total count and price */}
        <div className="total-container">
          <p className='bill'>Your bill</p>
          <hr></hr>
          <span id='count' className='total'>Items ordered: {totalCount}</span>
          <span id='price' className='price'>Total price: {totalPrice} yen</span>
        </div>
      </div>
    </div>
  );
}

export default App;