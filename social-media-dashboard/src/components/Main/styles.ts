import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    maxWidth: "1440px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: "32px",
    background: ({ theme }: any) => theme.background,
    color: ({ theme }: any) => theme.textPrimary,
  },
});

export default useStyles;
