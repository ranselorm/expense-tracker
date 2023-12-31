import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
// import "chart.js";

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
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
