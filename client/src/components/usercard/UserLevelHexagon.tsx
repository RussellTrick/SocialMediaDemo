import React from "react";
import styles from "./UserLevelHexagon.module.scss";

type UserLevel = {
  level: number;
  style?: object;
};

const UserLevelHexagon = (props: UserLevel) => {
  return (
    <svg
      className={styles.hexSvg}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <defs>
        <pattern
          id="img"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        ></pattern>
      </defs>
      <polygon
        className={styles.hex}
        points="50 1 95 25 95 75 50 99 5 75 5 25"
        fill="#44437D"
      />
      <text
        className={styles.text}
        font-size="50"
        x="50"
        y="66"
        text-anchor="middle"
      >
        {props.level.toString()}
      </text>
    </svg>
  );
};

export default UserLevelHexagon;
