import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
  transactions: [],
}

export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransation(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransation
    }}>
      {children}
    </GlobalContext.Provider>
  )
}