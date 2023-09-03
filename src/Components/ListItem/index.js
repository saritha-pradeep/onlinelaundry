import React, { useState } from 'react';

const ListItem = ({ item, price }) => {
    const [quantity, setQuantity] = useState(0);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    return (
      <div className="list-item">
        <div className="item-info">
          <span>{item}</span>
          <span>${price}</span>
        </div>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    );
  };
  

export default ListItem;
