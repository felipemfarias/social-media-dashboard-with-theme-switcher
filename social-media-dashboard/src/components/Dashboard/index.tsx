import React from "react";
import useStyles from "./styles";
import Card from "../Card";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <section className={classes.dashboard}>
      <Card
        userId="@nathanf"
        socialMedia="facebook"
        followerCount={1987}
        followerToday={12}
        followerRate="up"
      />
      <Card
        userId="@nathanf"
        socialMedia="twitter"
        followerCount={1044}
        followerToday={99}
        followerRate="up"
      />
      <Card
        userId="@realnathanf"
        socialMedia="instagram"
        followerCount={11000}
        followerToday={1099}
        followerRate="up"
      />
      <Card
        userId="Nathan F."
        socialMedia="youtube"
        followerCount={8239}
        followerToday={144}
        followerRate="down"
      />
    </section>
  );
};

export default Dashboard;
