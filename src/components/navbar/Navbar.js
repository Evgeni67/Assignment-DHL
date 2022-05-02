import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.MainNavContainer}>
      <div className={classes.NavLabel}>My Image Collection</div>
    </div>
  );
};

export default Navbar;
