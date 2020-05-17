import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    backgroundColor: "hsl(227, 47%, 96%)",
    borderRadius: "4px",
    textAlign: "center",
    padding: 0,
    margin: "16px 0",
    width: "100%",
    color: "hsl(228, 12%, 44%)",
    "@media (min-width: 600px)": {
      width: "300px",
    },
  },
  topDecoration: {
    height: "3px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    content: '""',
  },
  facebook: {
    extend: "topDecoration",
    background: "hsl(203, 89%, 53%)",
  },
  twitter: {
    extend: "topDecoration",
    background: "hsl(195, 100%, 50%)",
  },
  instagram: {
    extend: "topDecoration",
    background:
      "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  },
  youtube: {
    extend: "topDecoration",
    background: "hsl(348, 97%, 39%)",
  },
  cardItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userId: {
    extend: "cardItem",
    margin: "24px 0",
    fontWeight: 700,
    fontSize: "0.75em",
  },
  icon: {
    width: "24px",
    height: "24px",
    margin: "0 8px",
    "& > img": {
      height: "24px",
    },
  },
  followerCount: {
    extend: "cardItem",
    fontSize: "3em",
    fontWeight: 700,
    color: "hsl(230, 17%, 14%)",
  },
  followerLabel: {
    extend: "cardItem",
    textTransform: "uppercase",
    fontSize: "1em",
    letterSpacing: "2px",
    margin: "0 0 24px 0",
  },
  followerToday: {
    marginBottom: "1.5em",
    fontWeight: 700,
    fontSize: "0.75",
  },
});

export default useStyles;
