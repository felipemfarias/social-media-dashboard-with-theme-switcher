import React from "react";
import useStyles from "./styles";
import Card from "../Card";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <section className={classes.dashboard}>
      <Card
        userId="@felipemfarias"
        socialMedia="facebook"
        followerCount={323}
        followerToday={12}
      />
      <Card
        userId="@felipemfarias"
        socialMedia="twitter"
        followerCount={323}
        followerToday={12}
      />
      <Card
        userId="@felipemfarias"
        socialMedia="instagram"
        followerCount={323}
        followerToday={12}
      />
      <Card
        userId="@felipemfarias"
        socialMedia="youtube"
        followerCount={323}
        followerToday={12}
      />
    </section>
  );
};

export default Dashboard;
