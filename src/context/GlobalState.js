import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Salary', amount: 1500 },
    { id: 2, text: 'Rent', amount: -250 },
    { id: 3, text: 'Grocery', amount: -150 },
    { id: 4, text: 'Expenses', amount: -180 },
  ],
};

//  Create Context
export const GlobalContext = createContext(initialState);

// Provider for other components yo have access to our global state
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
