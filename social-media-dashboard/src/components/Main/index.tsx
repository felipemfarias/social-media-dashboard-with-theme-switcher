import React from "react";
import Header from "../Header";
import Dashboard from "../Dashboard";
import Overview from "../Overview";
import Footer from "../Footer";
import useStyles from "./styles";
import { useTheme } from "react-jss";

const Main = ({ themeSwitcher, currentTheme }: any) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.main}>
      <Header currentTheme={currentTheme} themeSwitcher={themeSwitcher} />
      <Dashboard />
      <Overview />
      <Footer />
    </div>
  );
};

export default Main;
