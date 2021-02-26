import React from "react";
import { IsMobile } from "../Hooks/IsMobile";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import Background from "../Components/Background";
import bg from "../static/images/bg.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  home: {
    width: "100vw",
    height: "100vh",
    maxWidth: "1600px",
  },
}));
const details = {
  bgStyle: {
    backgroundImage: `url(${bg}) `,
    zIndex: -10,
  },
};
const home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Background customStyles={details.bgStyle} />
      {IsMobile() ? <Dropdown /> : <Navbar />}
    </div>
  );
};

export default home;
