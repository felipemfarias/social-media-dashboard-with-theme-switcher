import React, { useState } from "react";
import Main from "./components/Main";

import { ThemeProvider } from "react-jss";
import { lightTheme, darkTheme } from "./themes";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const ChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Main currentTheme={theme} themeSwitcher={ChangeTheme} />
    </ThemeProvider>
  );
};

export default App;
