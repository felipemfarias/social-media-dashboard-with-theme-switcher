import React from "react";
import useStyles from "./styles";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header />
      <Dashboard />
      <Overview />
    </div>
  );
};

export default App;
