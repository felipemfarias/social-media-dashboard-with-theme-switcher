import React from "react";
import useStyles from "./styles";
import SmallCard from "../SmallCard";

const Overview = () => {
  const classes = useStyles();
  return (
    <section>
      <h2>Overview - Today</h2>
      <div className={classes.overviewContent}>
        <SmallCard
          label="Page Views"
          socialMedia="facebook"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Likes"
          socialMedia="facebook"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Likes"
          socialMedia="instagram"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Profile Views"
          socialMedia="instagram"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Retweets"
          socialMedia="twitter"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Likes"
          socialMedia="twitter"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Likes"
          socialMedia="youtube"
          viewCount={300}
          viewsToday={26}
        />
        <SmallCard
          label="Total Views"
          socialMedia="youtube"
          viewCount={300}
          viewsToday={26}
        />
      </div>
    </section>
  );
};

export default Overview;
