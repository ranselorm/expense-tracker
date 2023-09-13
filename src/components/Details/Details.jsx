import React, { useContext } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../context/context";

const Details = ({ title }) => {
  const { transactions } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="DATA" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
