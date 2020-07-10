import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
const TransactionItem = ({ transaction: { text, amount, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text}{' '}
        <span>
          {amount < 0 ? '-' : '+'}${Math.abs(amount)}
        </span>
        <button onClick={() => deleteTransaction(id)} className="delete-btn">
          x
        </button>
      </li>
    </>
  );
};

export default TransactionItem;
