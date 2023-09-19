import React, { useReducer, createContext } from "react";

export const ExpenseTrackerContext = createContext();

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 100,
    category: "Pets",
    type: "Expense",
    date: "2023-10-25",
    id: "9d6a14a3-8465-4538-a2b8-0",
  },
  {
    amount: 200,
    category: "Bills",
    type: "Expense",
    date: "2023-10-25",
    id: "6bbcfbd9-ab4c-46e4-bc11-e60cff6de9d1",
  },
  {
    amount: 4500,
    category: "Salary",
    type: "Income",
    date: "2023-10-25",
    id: "e9c32471-7cfd-4b67-ab24-216648e8c24d",
  },
  {
    amount: 250,
    category: "Business",
    type: "Income",
    date: "2023-10-25",
    id: "4fd33e47-07c6-46d6-b714-a874ee48fda2",
  },
];

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

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  console.log(balance, transactions);
  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, addTransaction, deleteTransaction, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
