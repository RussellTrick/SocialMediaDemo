import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardImage from "./CardImage";

export type UserCardProps = {
  name: string;
  handle?: string;
  imageUrl?: string;
  error?: string;
  level?: number;
  verified?: boolean;
  pro?: boolean;
  imageless?: boolean;
};

const UserCard = ({
  name,
  handle,
  error,
  verified,
  pro,
  imageless,
  imageUrl,
  level,
}: UserCardProps) => {
  if (!error) {
    return (
      <>
        {!imageless && imageUrl && level ? (
          <CardImage imageUrl={imageUrl} level={level} />
        ) : null}
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
      </>
    );
  } else {
    return <p>{error}</p>;
  }
};

export default UserCard;
