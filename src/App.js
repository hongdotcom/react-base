import React from "react";
import { CssBaseline } from "@material-ui/core";
import Fonts from "./Components/Fonts";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "1600px",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fonts />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        {/* Redirect all 404 to Home */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
