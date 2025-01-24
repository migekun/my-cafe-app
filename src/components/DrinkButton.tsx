import React from 'react';
import './DrinkButton.css';

interface DrinkButtonProps {
  id: string,
  name: string;
  price: number;
  count: number;
  onOrder: (id: string) => void;
}

const DrinkButton: React.FC<DrinkButtonProps> = ({ id, name, price, count, onOrder }) => {
  return (
    <div className='drink-container'>
        <button id={id} onClick={() => onOrder(id)}>
            <span className="drink-name">{name}</span>
            <span className="price">{price} yen</span>
        </button>
        <div id={id + '-count'} className="red-circle">{count}</div>
    </div>
    );
};

export default DrinkButton;