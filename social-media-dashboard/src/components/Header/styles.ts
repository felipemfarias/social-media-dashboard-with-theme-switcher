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
    color: ({ theme }: any) => theme.textSecondary,
  },
  darkModeToggle: {
    cursor: "pointer",
    marginTop: "0.5em",
    "@media (min-width: 600px)": {
      marginTop: 0,
    },
  },
  themeSwitcherLabel: {
    fontSize: "0.75em",
    margin: "10px 0",
  },
  switchOff: {
    width: "32px",
    padding: "2px",
    borderRadius: "10px",
    marginLeft: "auto",
    background: "linear-gradient(to left, #aa4b6b, #6b6b83, #3b8d99)",
    display: "flex",
    justifyContent: "flex-start",
  },
  switchOn: {
    extend: "switchOff",
    justifyContent: "flex-end",
  },
  switcher: {
    height: "16px",
    width: "16px",
    borderRadius: "50%",
    background: "#FFFFFF",
  },
});

export default useStyles;
