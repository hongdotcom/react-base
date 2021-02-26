import React from "react";
import { CssBaseline } from "@material-ui/core";
import Fonts from "./Components/Fonts";
import { IsMobile } from "./Hooks/IsMobile";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Components/Background";
import bg from "./static/images/bg.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "1600px",

    // overflow: "hidden",
  },
}));
const details = {
  customStyles: {
    backgroundImage: `url(${bg}) `,
    zIndex: -10,
  },
};
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fonts />
      <Background customStyles={details.customStyles} />
      {IsMobile() ? <Dropdown /> : <Navbar />}
    </div>
  );
}
