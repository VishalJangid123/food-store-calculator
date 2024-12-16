import React, { useState } from 'react';
import './App.css';

import { menuItems } from './constants/MenuItems';
import { applyBundleDiscount } from './Utils/DiscountUtils';

function App() {
  const [orders, setOrders] = useState(getInitialOrderState());
  const [memberCard, setMemberCard] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  // set all to zero initially
  function getInitialOrderState() {
    const initialState = {};
    for (let item in menuItems) {
      initialState[item] = 0;
    }
    return initialState;
  }

  // Handle changes in input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrders({
      ...orders,
      [name]: parseInt(value) || 0,
    });
  };

 

  // Calculate the total price with applied discounts
  const calculateTotal = () => {
    let total = calculateBaseTotal();

    // Apply bundle discounts for Orange, Pink, and Green sets
    total -= applyBundleDiscount(orders['Orange'], 'Orange');
    total -= applyBundleDiscount(orders['Pink'], 'Pink');
    total -= applyBundleDiscount(orders['Green'], 'Green');

    // Apply member card discount (10% off)
    if (memberCard) {
      total -= total * 0.10;
    }

    return total.toFixed(2);
  };

  // Calculate the base total without discounts
  const calculateBaseTotal = () => {
    return Object.keys(orders).reduce((total, item) => {
      return total + menuItems[item] * orders[item];
    }, 0);
  };

  const renderOrderInputs = () => {
    return Object.keys(menuItems).map((item) => (
      <div key={item} className="order-input">
        <label>
          {item} Set ({menuItems[item]} THB):
          <input
            type="number"
            name={item}
            value={orders[item]}
            onChange={handleInputChange}
            min="0"
          />
        </label>
      </div>
    ));
  };

  const renderBreakdown = () => {
    const itemsList = [];
    let totalBeforeDiscounts = calculateBaseTotal();
    
    Object.keys(orders).forEach((item) => {
      if (orders[item] > 0) {
        itemsList.push(`${item} (${menuItems[item]} x ${orders[item]})`);
      }
    });

    if (orders['Orange'] >= 2) {
      itemsList.push(`Orange Bundle Discount: -${(menuItems['Orange'] * 0.05) * Math.floor(orders['Orange'] / 2)} THB`);
    }
    if (orders['Pink'] >= 2) {
      itemsList.push(`Pink Bundle Discount: -${(menuItems['Pink'] * 0.05) * Math.floor(orders['Pink'] / 2)} THB`);
    }
    if (orders['Green'] >= 2) {
      itemsList.push(`Green Bundle Discount: -${(menuItems['Green'] * 0.05) * Math.floor(orders['Green'] / 2)} THB`);
    }

    if (memberCard) {
      const memberDiscount = totalBeforeDiscounts * 0.10;
      itemsList.push(`Member Card Discount: -${memberDiscount} THB`);
      totalBeforeDiscounts -= memberDiscount;
    }

    itemsList.push(`Total After Discounts: ${calculateTotal()} THB`);

    return (
      <div className="breakdown">
        <h3>Price Breakdown</h3>
        {itemsList.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Food Store Calculator</h1>

      <div>
        <label>
          <input
            type="checkbox"
            checked={memberCard}
            onChange={() => setMemberCard(!memberCard)}
          />
          Use Member Card (10% off)
        </label>
      </div>

      <form>
        {renderOrderInputs()}
      </form>

      <h2>Total: {calculateTotal()} THB</h2>

      <button onClick={() => setShowBreakdown(!showBreakdown)}>
        {showBreakdown ? "Hide Calculation Breakdown" : "Show Calculation Breakdown"}
      </button>

      {showBreakdown && renderBreakdown()}
    </div>
  );
}

export default App;
