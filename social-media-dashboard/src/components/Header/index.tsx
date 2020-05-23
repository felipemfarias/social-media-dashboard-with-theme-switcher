import React from "react";
import useStyles from "./styles";
import { useTheme } from "react-jss";
import Switch from "./switch";

const Header = ({ themeSwitcher, currentTheme }: any) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.header}>
      <div>
        <h1 className={classes.title}>Social Media Dashboard</h1>
        <div className={classes.followers}>Total Followers: 23,004</div>
      </div>
      <div className={classes.darkModeToggle} onClick={themeSwitcher}>
        <div className={classes.themeSwitcherLabel}>Toggle theme</div>
        <Switch currentTheme={currentTheme} />
      </div>
    </div>
  );
};

export default Header;
