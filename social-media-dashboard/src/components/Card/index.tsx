import React from "react";
import useStyles from "./styles";
import { useTheme } from "react-jss";

type CardProps = {
  userId: string;
  socialMedia: "facebook" | "twitter" | "instagram" | "youtube";
  followerCount: number;
  followerToday: number;
  followerRate: "up" | "down";
};

const Card = ({
  userId,
  socialMedia,
  followerCount,
  followerToday,
  followerRate,
}: CardProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const iconPath = require(`../../assets/images/icon-${socialMedia}.svg`);
  const arrowUp = require(`../../assets/images/icon-up.svg`);
  const arrowDown = require(`../../assets/images/icon-down.svg`);

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
        <div
          className={
            followerRate === "up" ? classes.increase : classes.decrease
          }
        >
          <span>
            <img
              className={classes.arrow}
              alt=""
              src={followerRate === "up" ? arrowUp : arrowDown}
            />
          </span>
          {followerToday} Today
        </div>
      </div>
    </div>
  );
};

export default Card;
