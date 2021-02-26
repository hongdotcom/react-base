import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { menuData } from "../Constants/MenuData";
const useStyles = makeStyles((theme) => ({
  Nav: {
    background: "none",
    backgroundImage:
      "linear-gradient( rgba(19, 84, 122,1) 0%, rgba(50, 190, 242,0.4) 80%,rgba(198, 247, 242,0) 100%)",
    height: "25vh",
    display: "flex",
    zIndex: 10,
    justifyContent: "space-between",
  },
  NavLink: {
    color: "white",
    marginRight: "2rem",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3vh",
    fontWeight: "800",
    listStyleType: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-out",
    "&:hover": {
      opacity: "0.5",
      transform: "scale(1.1)",
    },
  },
  ul: {
    display: "flex",
    marginTop: "4vh",
    alignContent: "center",
    justifyContent: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.Nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={classes.ul}>
        {menuData.map((item, index) => (
          <Link to={item.link} className={classes.NavLink} key={index}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
