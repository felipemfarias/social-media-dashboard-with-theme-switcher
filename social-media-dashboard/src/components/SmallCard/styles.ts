import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  smallCard: {
    backgroundColor: ({ theme }: any) => theme.card.background,
    borderRadius: "4px",
    textAlign: "center",
    padding: "1em 0",
    margin: "16px 0",
    width: "100%",
    color: ({ theme }: any) => theme.card.primaryText,
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
    color: ({ theme }: any) => theme.card.secondaryText,
  },
  viewsToday: {
    fontSize: "0.75",
    fontWeight: 700,
  },
  increase: {
    color: "hsl(163, 72%, 41%)",
  },
  decrease: {
    color: "hsl(356, 69%, 56%)",
  },
  arrow: {
    padding: "4px",
  },
});

export default useStyles;
