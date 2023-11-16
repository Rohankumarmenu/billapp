
import React, { useState } from 'react';
import './ClerkDashboard.css'; 

const ClerkDashboard = () => {
  const [billItems, setBillItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItemToBill = () => {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: parseFloat(itemPrice),
      };

      setBillItems([...billItems, newItem]);
      setTotalAmount(totalAmount + newItem.price);
      clearForm();
    } else {
      alert('Please fill in both item name and price');
    }
  };

  const deleteBillItem = (index) => {
    const updatedBillItems = [...billItems];
    const deletedItem = updatedBillItems.splice(index, 1)[0];
    setTotalAmount(totalAmount - deletedItem.price);
    setBillItems(updatedBillItems);
  };

  const clearForm = () => {
    setItemName('');
    setItemPrice('');
  };

  const checkoutBill = () => {
   
    alert('Checking out bill...');

    setTimeout(() => {   
      alert(`Total Amount: $${totalAmount}\nBill Checked Out!`);
      setBillItems([]);
      setTotalAmount(0);
    }, 1000);
  };

  const saveBillForLater = () => {
    
    alert('Saving bill for later...');

    setTimeout(() => {
   
      alert('Bill Saved for Later!');
      
      setBillItems([]);
      setTotalAmount(0);
    }, 1000);
  };

  return (
    <div className="clerk-dashboard">
      <h2>Clerk Dashboard</h2>

      <div className="bill-form">
        <h3>Add Items to the Bill</h3>
        <label className="label" htmlFor="item-name">
          Item Name:
        </label>
        <input
          className="input"
          type="text"
          id="item-name"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label className="label" htmlFor="item-price">
          Item Price:
        </label>
        <input
          className="input"
          type="number"
          id="item-price"
          placeholder="Enter item price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />

        <button className="button" onClick={addItemToBill}>
          Add Item to Bill
        </button>
      </div>

      <div className="bill-summary">
        <h3>Bill Summary</h3>
        <ul>
          {billItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button className="button" onClick={() => deleteBillItem(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <p>Total Amount: ${totalAmount}</p>
      </div>

      <div>
        <button className="button" onClick={checkoutBill}>
          Checkout Bill
        </button>
        <button className="button" onClick={saveBillForLater}>
          Save Bill for Later
        </button>
      </div>
    </div>
  );
};

export default ClerkDashboard;
