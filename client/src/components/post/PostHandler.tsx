import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard, { UserCardProps } from "../usercard/UserCard";
import CardImage from "../usercard/CardImage";
import { timeAgo } from "../../helpers/utils";

type PostHandlerProps = {
  type: string;
  content: string;
  replyTarget?: string;
  forum?: string;
  timestamp: string;
  user: UserCardProps;
};

const PostHandler = ({
  type,
  forum,
  replyTarget,
  user,
  content,
  timestamp,
}: PostHandlerProps) => {
  const renderPostHeader = () => {
    switch (type) {
      case "update":
        return (
          <div>
            <span>post an update</span>
          </div>
        );
      case "reply":
        return (
          <>
            replied to the topic <strong>{replyTarget}</strong> in the forum{" "}
            <strong>{forum}</strong>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex">
        <div className="d-flex">
          {user.imageUrl && user.level && (
            <CardImage imageUrl={user.imageUrl} level={user.level} />
          )}
        </div>
        <div className="d-flex flex-column">
          <span className="">
            <UserCard
              name={user.name}
              verified={user.verified}
              pro={user.pro}
              imageless
            />
            {renderPostHeader()}
          </span>
          <span className="small text-muted">{timeAgo(timestamp)}</span>
        </div>
      </div>
      <p className="small text-muted">{content}</p>
    </div>
  );
};

export default PostHandler;
