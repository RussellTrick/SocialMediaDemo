import styles from "./UserCard.module.scss";
import UserLevelHexagon from "./UserLevelHexagon";

// eslint-disable-next-line react-refresh/only-export-components

export const CardImage = ({
  imageUrl,
  level,
}: {
  imageUrl: string;
  level: number;
}) => {
  const generateLines = (level: number) => {
    const lines = [];
    //Loop through each line and generate them based on the level prop
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

  /* Add a unique ID for each user card. This is needed because multiple UserCards are on screen at once and therefore the pattern potentially references the wrong card.
  It's possible to use a library for this such as UUID but I decided to use this method instead.*/
  const uniqueId = `img-${Math.random().toString(36).slice(2, 11)}`;

  return (
    <div className="h-100 mx-2">
      <div className="position-relative">
        <svg
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className={styles ? styles.hexSvg : ""}
        >
          <defs>
            <pattern
              id={uniqueId}
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                xlinkHref={imageUrl ? imageUrl : ""}
                x="-25"
                width="150"
                height="100"
              />
            </pattern>
          </defs>
          <polygon
            className={styles ? styles.hex : ""}
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill={`url(#${uniqueId})`}
          />
          {generateLines(level ? level : 0)}
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
  );
};

export default CardImage;
