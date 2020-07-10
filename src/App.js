import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/globalState'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conatiner">
        <GlobalProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </GlobalProvider>

      </div>
    </div>
  );
}

export default App;
