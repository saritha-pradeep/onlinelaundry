// 
import React from 'react';
import ButtonWithIcon from '../../Components/ButtonWithIcon';
import LaundryList from '../../Components/LaundryList';
import "./pricing.css";

const App = () => {
  return (
    <div className="app">
      <div className="buttons">
        <ButtonWithIcon icon="🧺" label="Laundry" />
        <ButtonWithIcon icon="👗" label="Dress" />
        <ButtonWithIcon icon="🕴️" label="Suit" />
        <ButtonWithIcon icon="👖" label="Trousers" />
        <ButtonWithIcon icon="👔" label="Shirt" />
      </div>
      <LaundryList />
    </div>
  );
};

export default App;
