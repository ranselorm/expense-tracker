import React, { useContext } from "react";
import useStyles from "./styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";

import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const { appName } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={`Expense Tracker`} subheader="Powered by speechly" />
      <CardContent>
        <Typography
          align="center"
          variant="h5"
          style={{ fontSize: "16px", fontWeight: "bold", marginTop: "-10px" }}
          className="custom-font-text"
        >
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "8px", fontSize: "12px" }}
        >
          {/* <InfoCard /> */}
          Try saying: Add income for $100 in Category Salary for next Monday ...
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
