import React from "react";
import { Grid } from "@material-ui/core";

//components imports
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

// import styles
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
      className={classes.grid}
    >
      <Grid item xs={12} sm={4} className={classes.mobile}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.main}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.desktop}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.last}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
}

export default App;
