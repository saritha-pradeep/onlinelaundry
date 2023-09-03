import React from 'react';
import './second.css';


const PickupDelivery = () => {
  return (
   
    <div className="pickup-delivery-container">
        
      <div className="pickup">
        <h2>Pickup</h2>
        <img src="pickup_image.png" alt="Pickup" className="image" />
        <label htmlFor="pickup-date">Date:</label>
        <input type="date" id="pickup-date" className="date-input" />
        <label htmlFor="pickup-time">Time:</label>
        <input type="time" id="pickup-time" className="time-input" />
      </div>
      <div className="delivery">
        <h2>Delivery</h2>
        <img src="delivery_image.png" alt="Delivery" className="image" />
        <label htmlFor="delivery-date">Date:</label>
        <input type="date" id="delivery-date" className="date-input" />
        <label htmlFor="delivery-time">Time:</label>
        <input type="time" id="delivery-time" className="time-input" />
      </div>
    </div>
  );
}

export default PickupDelivery;