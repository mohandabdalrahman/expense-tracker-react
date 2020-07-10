import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import TransactionItem from './TransactionItem';
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
