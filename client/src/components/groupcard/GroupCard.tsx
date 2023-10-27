import styles from "./GroupCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faLock } from "@fortawesome/free-solid-svg-icons";

type GroupCardProps = {
  name: string;
  imageUrl: string;
  priv?: boolean;
  memberCount: number;
};

const GroupCard = ({ name, imageUrl, priv, memberCount }: GroupCardProps) => {
  const uniqueId = `img-${Math.random().toString(36).slice(2, 11)}`;
  return (
    <div className="row">
      <div className="col">
        <div className="d-flex gap-1 justify-content-start align-items-center">
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.hexSvg}
          >
            <defs>
              <pattern
                id={uniqueId}
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image xlinkHref={imageUrl} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon
              className={styles.hex}
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill={`url(#${uniqueId})`}
            />
          </svg>
          <div className="d-flex flex-column">
            <strong style={{ fontSize: "15px" }}>{name}</strong>
            <span className="small text-muted">{memberCount} members</span>
          </div>
        </div>
      </div>
      <div className="col-3 d-none d-xl-flex justify-content-center align-items-center">
        {priv ? (
          <FontAwesomeIcon
            color="#aaadc7"
            icon={faLock}
            style={{ fontSize: "1.2em" }}
          />
        ) : (
          <FontAwesomeIcon
            color="#aaadc7"
            icon={faEarthAmericas}
            style={{ fontSize: "1.2em" }}
          />
        )}
      </div>
    </div>
  );
};

export default GroupCard;
