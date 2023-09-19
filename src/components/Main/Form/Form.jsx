import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";
import CustomizedSnackbar from "../../Snackbar/Snackbar";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  function createTransaction() {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    if (
      !formData.category ||
      !formData.type ||
      !formData.amount ||
      !formData.date
    ) {
      setError(true);
      return;
    }
    addTransaction(transaction);
    setFormData(initialState);
    setError(false);
    setOpen(true);
  }

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories?.map((category, index) => (
              <MenuItem value={category.type} key={index}>
                {category.type}
              </MenuItem>
            ))}
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Grid>
      <Button
        variant="outlined"
        fullWidth
        color={`${error ? "secondary" : "primary"}`}
        className={classes.button}
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
