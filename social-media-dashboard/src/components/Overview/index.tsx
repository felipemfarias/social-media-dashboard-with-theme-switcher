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
          viewCount={87}
          viewsToday={3}
          viewRate="up"
        />
        <SmallCard
          label="Likes"
          socialMedia="facebook"
          viewCount={52}
          viewsToday={2}
          viewRate="down"
        />
        <SmallCard
          label="Likes"
          socialMedia="instagram"
          viewCount={5462}
          viewsToday={2257}
          viewRate="up"
        />
        <SmallCard
          label="Profile Views"
          socialMedia="instagram"
          viewCount={52000}
          viewsToday={1375}
          viewRate="up"
        />
        <SmallCard
          label="Retweets"
          socialMedia="twitter"
          viewCount={117}
          viewsToday={303}
          viewRate="up"
        />
        <SmallCard
          label="Likes"
          socialMedia="twitter"
          viewCount={507}
          viewsToday={553}
          viewRate="up"
        />
        <SmallCard
          label="Likes"
          socialMedia="youtube"
          viewCount={107}
          viewsToday={19}
          viewRate="down"
        />
        <SmallCard
          label="Total Views"
          socialMedia="youtube"
          viewCount={1407}
          viewsToday={12}
          viewRate="down"
        />
      </div>
    </section>
  );
};

export default Overview;
