import React from "react";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>
        <h1 className={classes.title}>Social Media Dashboard</h1>
        <div className={classes.followers}>Total Followers: 23,004</div>
      </div>
      <div className={classes.darkModeToggle}>Dark Mode</div>
    </div>
  );
};

export default Header;
