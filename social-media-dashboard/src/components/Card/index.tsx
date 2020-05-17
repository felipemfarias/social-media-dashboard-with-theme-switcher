import React from "react";
import useStyles from "./styles";

type CardProps = {
  userId: string;
  socialMedia: "facebook" | "twitter" | "instagram" | "youtube";
  followerCount: number;
  followerToday: number;
};

const Card = ({
  userId,
  socialMedia,
  followerCount,
  followerToday,
}: CardProps) => {
  const classes = useStyles();
  const iconPath = require(`../../assets/images/icon-${socialMedia}.svg`);

  const GetCardDecoration = (socialMedia: string) => {
    switch (socialMedia) {
      case "facebook":
        return classes.facebook;
      case "twitter":
        return classes.twitter;
      case "instagram":
        return classes.instagram;
      case "youtube":
        return classes.youtube;
      default:
    }
  };

  return (
    <div className={classes.card}>
      <div className={GetCardDecoration(socialMedia)}></div>
      <div className={classes.userId}>
        <div className={classes.icon}>
          <img src={iconPath} alt={socialMedia} />
        </div>
        {userId}
      </div>
      <div className={classes.followerCount}>{followerCount}</div>
      <div className={classes.followerLabel}>Followers</div>
      <div className={classes.followerToday}>
        <div className="increase">
          <span className="arrow"></span>
          {followerToday} Today
        </div>
      </div>
    </div>
  );
};

export default Card;
