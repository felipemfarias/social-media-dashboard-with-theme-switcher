import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      Challenge by&nbsp;
      <a
        className={classes.link}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/felipemfarias" className={classes.link}>
        Felipe Farias
      </a>
      .
    </div>
  );
};

export default Footer;
