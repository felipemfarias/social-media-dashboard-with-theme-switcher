import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "column",
    "@media (min-width: 600px)": {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  title: {
    margin: 0,
  },
  followers: {
    fontWeight: "bold",
  },
  darkModeToggle: {
    cursor: "pointer",
    marginTop: "0.5em",
    "@media (min-width: 600px)": {
      marginTop: 0,
    },
  },
});

export default useStyles;
