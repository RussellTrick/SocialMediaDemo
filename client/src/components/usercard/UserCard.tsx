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
    if (!imageless && imageUrl && level) {
      return (
        <article className="d-flex ">
          <CardImage imageUrl={imageUrl} level={level} />
          <div className="d-flex flex-column py-1">
            <span className="fw-bold">
              {name}{" "}
              {verified && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#00a1ee" }}
                />
              )}{" "}
              {pro && (
                <span className="small text-white rounded-4 bg-primary fw-normal">
                  Pro Member
                </span>
              )}{" "}
            </span>
            {handle && <span className="small text-muted">@{handle}</span>}
          </div>
        </article>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  } else {
    return <p>{error}</p>;
  }
};

export default UserCard;
