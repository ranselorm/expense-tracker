import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../../context/context";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";

import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";
// const transactions = [
//   {
//     id: 1,
//     type: "Income",
//     category: "Salary",
//     amount: 500,
//     date: " Wed Sep 13",
//   },
//   {
//     id: 2,
//     type: "Expense",
//     category: "Utility",
//     amount: 200,
//     date: " Wed Sep 13",
//   },
//   {
//     id: 3,
//     type: "Income",
//     category: "Salary",
//     amount: 500,
//     date: "Wed Sep 13",
//   },
// ];

const List = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <MUIList className={classes.list} dense={false}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
