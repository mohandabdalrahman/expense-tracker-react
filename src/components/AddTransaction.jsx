import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';
const AddTransaction = () => {
  const { addTransation } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      addTransation({
        text,
        amount: +amount,
        id: Math.random(),
      });
      setText('');
      setAmount(0);
    }
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
