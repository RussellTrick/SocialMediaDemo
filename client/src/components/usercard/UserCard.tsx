import React from "react";
import styles from "./UserCard.module.scss";
import UserLevelHexagon from "./UserLevelHexagon";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserCardProps = {
  name: string;
  handle?: string;
  imageUrl: string;
  error?: string;
  level: number;
  verified?: boolean;
  pro?: boolean;
};

const UserCard = ({
  name,
  handle,
  imageUrl,
  error,
  level,
  verified,
  pro,
}: UserCardProps) => {
  if (!error) {
    const generateLines = (level: number) => {
      const lines = [];

      for (let i = 1; i <= level; i++) {
        let x1, y1, x2, y2, strokeColor;

        switch (i) {
          case 1:
            x1 = 95;
            y1 = 25;
            x2 = 50;
            y2 = 1;
            strokeColor = "#5d5df5";
            break;
          case 2:
            x1 = 95;
            y1 = 25;
            x2 = 95;
            y2 = 75;
            strokeColor = "#5d5df5";
            break;
          case 3:
            x1 = 95;
            y1 = 75;
            x2 = 50;
            y2 = 99;
            strokeColor = "#00d2e0";
            break;
          case 4:
            x1 = 5;
            y1 = 75;
            x2 = 50;
            y2 = 99;
            strokeColor = "#00d2e0";
            break;
          case 5:
            x1 = 5;
            y1 = 25;
            x2 = 5;
            y2 = 75;
            strokeColor = "#44437D";
            break;
          case 6:
            x1 = 5;
            y1 = 25;
            x2 = 50;
            y2 = 1;
            strokeColor = "#44437D";
            break;
          default:
            break;
        }

        lines.push(
          <line
            key={`level-${i}/${level}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={strokeColor}
            strokeWidth="6"
          />
        );
      }

      return lines;
    };
    return (
      <div className="d-flex py-1">
        <div className="mx-2">
          <div className="position-relative">
            <svg
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.hexSvg}
            >
              <defs>
                <pattern
                  id="img"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <image
                    xlinkHref={imageUrl}
                    x="-25"
                    width="150"
                    height="100"
                  />
                </pattern>
              </defs>
              <polygon
                className={styles.hex}
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="url(#img)"
              />
              {generateLines(level)}
            </svg>
            <UserLevelHexagon
              level={level}
              style={{
                position: "absolute",
                top: "25",
                left: "25",
                zIndex: "1",
              }}
            />
          </div>
        </div>
        <article className="d-flex flex-column">
          <span className="fw-bold">
            {name}{" "}
            {verified && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#00a1ee" }}
              />
            )}{" "}
            {pro && (
              <span className="small text-white rounded-4 bg-primary fw-normal p-1">
                Pro Member
              </span>
            )}{" "}
          </span>
          {handle && <span className="small text-muted">@{handle}</span>}
        </article>
      </div>
    );
  } else {
    return <p>{error}</p>;
  }
};

export default UserCard;
