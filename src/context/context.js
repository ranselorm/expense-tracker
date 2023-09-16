import React, { useReducer, createContext } from "react";

export const ExpenseTrackerContext = createContext();

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

const reducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));

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

  console.log(transactions);
  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
