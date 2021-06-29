import React, { createContext, useReducer } from 'react';

// Initial state
const initailState = {
  transactions: [
    { id: 1, text: 'Salary', amount: 1500 },
    { id: 2, text: 'Rent', amount: -250 },
    { id: 3, text: 'Grocery', amount: -150 },
    { id: 4, text: 'Expenses', amount: -180 },
  ],
};

//  Create Context
export const GlobalContext = createContext(initailState);
