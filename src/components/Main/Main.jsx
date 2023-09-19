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

import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card >
      <CardHeader title={`Expense Tracker`} />
      <CardContent>
        <Typography
          align="center"
          variant="h5"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            margin: "10px 0",
          }}
          className="custom-font-text"
        >
          Total Balance ${balance}
        </Typography>
        <Divider style={{ marginBottom: "30px" }} />
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
