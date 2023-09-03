import React from 'react';
import ListItem from '../ListItem';

const LaundryList = () => {
    const items = [
      { name: 'Wash, Dry & Fold', price: 10 },
      { name: '6 Kg Wash, Dry & Fold', price: 15 },
      { name: '6x Loads Bundle Prepaid Pack', price: 50 },
      { name: '10x Loads Bundle Prepaid Pack', price: 80 },
      { name: '20x Loads Bundle Prepaid Pack', price: 150 },
      { name: 'Kitchen Cloth', price: 5 },
    ];
  
    return (
      <div className="laundry-list">
        {items.map((item, index) => (
          <ListItem key={index} item={item.name} price={item.price} />
        ))}
      </div>
    );
  };
  

export default LaundryList;
