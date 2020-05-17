import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  smallCard: {
    backgroundColor: "hsl(227, 47%, 96%)",
    borderRadius: "4px",
    textAlign: "center",
    padding: "1em 0",
    margin: "16px 0",
    width: "100%",
    color: "hsl(228, 12%, 44%)",
    "@media (min-width: 600px)": {
      width: "300px",
    },
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 32px",
  },
  label: {
    fontSize: "12px",
  },
  icon: {
    margin: 0,
    height: "24px",
  },
  viewCount: {
    fontSize: "2em",
    fontWeight: 700,
    color: "hsl(230, 17%, 14%)",
  },
  viewsToday: {
    fontSize: "0.75",
    fontWeight: 700,
  },
});

export default useStyles;
