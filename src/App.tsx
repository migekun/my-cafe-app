import { useState } from 'react';
import './App.css';

function App() {
  // Define state for each drink count
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [teaCount, setTeaCount] = useState(0);
  const [milkCount, setMilkCount] = useState(0);
  const [cokeCount, setCokeCount] = useState(0);
  const [beerCount, setBeerCount] = useState(0);

  // Define prices for each drink
  const prices = {
    coffee: 480,
    tea: 280,
    milk: 180,
    coke: 190,
    beer: 580
  };

  // Define a function to update counts and prices
  const handleOrder = (drink: string) => {
    switch (drink) {
      case 'coffee':
        setCoffeeCount(coffeeCount + 1);
        break;
      case 'tea':
        setTeaCount(teaCount + 1);
        break;
      case 'milk':
        setMilkCount(milkCount + 1);
        break;
      case 'coke':
        setCokeCount(cokeCount + 1);
        break;
      case 'beer':
        setBeerCount(beerCount + 1);
        break;
      default:
        break;
    }
  };

  // Calculate total count and price
  const totalCount = coffeeCount + teaCount + milkCount + cokeCount + beerCount;
  const totalPrice = (coffeeCount * prices.coffee) +
                     (teaCount * prices.tea) +
                     (milkCount * prices.milk) +
                     (cokeCount * prices.coke) +
                     (beerCount * prices.beer);

  return (
    <div className="App">
      {/* Display the order buttons */}
      <div className="buttons">
        <button onClick={() => handleOrder('coffee')}>
          Coffee {prices.coffee} yen
        </button>
        <button onClick={() => handleOrder('tea')}>
          Tea {prices.tea} yen
        </button>
        <button onClick={() => handleOrder('milk')}>
          Milk {prices.milk} yen
        </button>
        <button onClick={() => handleOrder('coke')}>
          Coke {prices.coke} yen
        </button>
        <button onClick={() => handleOrder('beer')}>
          Beer {prices.beer} yen
        </button>
      </div>

      {/* Display the number of orders per item */}
      <div className="order-counts">
        <div id='coffee-count'>Coffee: {coffeeCount}</div>
        <div id='tea-count'>Tea: {teaCount}</div>
        <div id='milk-count'>Milk: {milkCount}</div>
        <div id='coke-count'>Coke: {cokeCount}</div>
        <div id='beer-count'>Beer: {beerCount}</div>
      </div>

      {/* Display the total count and price */}
      <div className="total">
        <span id='count'>Total drinks ordered: {totalCount}</span>
        <span id='price'>Total price: {totalPrice} yen</span>
      </div>
    </div>
  );
}

export default App;