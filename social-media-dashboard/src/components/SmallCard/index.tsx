import React from "react";
import useStyles from "./styles";

type SmallCardProps = {
  label: string;
  socialMedia: "facebook" | "twitter" | "instagram" | "youtube";
  viewCount: number;
  viewsToday: number;
};

const SmallCard = ({
  label,
  socialMedia,
  viewCount,
  viewsToday,
}: SmallCardProps) => {
  const classes = useStyles();
  const iconPath = require(`../../assets/images/icon-${socialMedia}.svg`);
  return (
    <div className={classes.smallCard}>
      <div className={classes.row}>
        <div className={classes.label}>{label}</div>
        <div className={classes.icon}>
          <img src={iconPath} alt={socialMedia} />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.viewCount}>{viewCount}</div>
        <div className={classes.viewsToday}>
          <span className="arrow"></span>
          {viewsToday}%
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
