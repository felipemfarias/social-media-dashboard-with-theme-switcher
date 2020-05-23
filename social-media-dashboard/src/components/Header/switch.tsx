import React from "react";
import useStyles from "./styles";
import { useTheme } from "react-jss";

const Switch = ({ currentTheme }: any) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div
      className={
        currentTheme === "light" ? classes.switchOff : classes.switchOn
      }
    >
      <div className={classes.switcher}></div>
    </div>
  );
};

export default Switch;
