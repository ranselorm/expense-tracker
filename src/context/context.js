import React, { useReducer, createContext } from "react";

export const ExpenseTrackerContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];

      return transactions;

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  //actions
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
