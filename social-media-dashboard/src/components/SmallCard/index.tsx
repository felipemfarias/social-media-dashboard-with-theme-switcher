import React from "react";
import useStyles from "./styles";
import { useTheme } from "react-jss";

type SmallCardProps = {
  label: string;
  socialMedia: "facebook" | "twitter" | "instagram" | "youtube";
  viewCount: number;
  viewsToday: number;
  viewRate: "up" | "down";
};

const SmallCard = ({
  label,
  socialMedia,
  viewCount,
  viewsToday,
  viewRate,
}: SmallCardProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const iconPath = require(`../../assets/images/icon-${socialMedia}.svg`);
  const arrowUp = require(`../../assets/images/icon-up.svg`);
  const arrowDown = require(`../../assets/images/icon-down.svg`);

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
          <div
            className={viewRate === "up" ? classes.increase : classes.decrease}
          >
            <span>
              <img
                className={classes.arrow}
                alt=""
                src={viewRate === "up" ? arrowUp : arrowDown}
              />
            </span>
            {viewsToday}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
