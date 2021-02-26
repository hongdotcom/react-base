import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Background: {
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: -10,
  },
}));
const Background = (props) => {
  const classes = useStyles();
  return <div className={classes.Background} style={props.customStyles}></div>;
};

export default Background;
