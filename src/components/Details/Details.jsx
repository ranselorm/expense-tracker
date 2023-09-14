import React, { useContext } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut, Bar } from "react-chartjs-2";
// import "chart.js";

import { ExpenseTrackerContext } from "../../context/context";
import useTransactions from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
  const { chartData, totalAmount } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${totalAmount}</Typography>
        <Bar data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
