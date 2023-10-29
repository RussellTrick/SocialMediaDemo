import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard, { UserCardProps } from "../usercard/UserCard";
import CardImage from "../usercard/CardImage";
import { timeAgo } from "../../helpers/utils";
import { faFaceGrinSquint } from "@fortawesome/free-solid-svg-icons";
import { UserType } from "../../types/types";
import { useState } from "react";
import { motion } from "framer-motion";

type CommentType = {
  user: UserCardProps;
  comment: string;
  timestamp: string;
};

type CommentsType = {
  comments?: Array<CommentType>;
};

type SharesType = {
  shares?: Array<UserType>;
};

type PostHandlerProps = {
  type: string;
  content: string;
  replyTarget?: string;
  forum?: string;
  timestamp: string;
  user: UserCardProps;
  comments?: CommentsType;
  shares?: SharesType;
  reactions?: Array<UserType>;
};

const PostHandler = ({
  type,
  forum,
  replyTarget,
  user,
  content,
  timestamp,
  comments,
  shares,
  reactions,
}: PostHandlerProps) => {
  const commentsCount: number = comments?.comments?.length || 0;
  const sharesCount: number = shares?.shares?.length || 0;
  const [reactionsCount, setReactionsCount] = useState(reactions?.length || 0);
  const [incrementing, setIncrementing] = useState(true);

  // Add api call to also increment/decrement reacts
  const toggleReaction = () => {
    setReactionsCount((prevCount) => {
      return incrementing ? prevCount + 1 : prevCount - 1;
    });
    setIncrementing((prev) => !prev);
  };

  const renderPostHeader = () => {
    switch (type) {
      case "update":
        return (
          <>
            <span>posted an update</span>
          </>
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
    <>
      <div className="d-flex flex-column gap-3 border-bottom">
        <div className="d-flex">
          <div className="d-flex">
            {user.imageUrl && user.level && (
              <CardImage imageUrl={user.imageUrl} level={user.level} />
            )}
          </div>
          <div className="d-flex flex-column mb-1">
            <span>
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
        <p className="small text-muted mb-4">{content}</p>
      </div>
      <div className="row d-flex justify-content-between pt-2 px-2 flex-nowrap">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 0.9 }}
          className="col-2 user-select-none"
          onClick={toggleReaction}
        >
          <FontAwesomeIcon icon={faFaceGrinSquint} color="orange" size="lg" />
          <strong className="small ms-1">{reactionsCount}</strong>
        </motion.div>

        <div className="col-5 col-md-6 col-lg-5 d-flex justify-content-evenly">
          <strong className="small">{commentsCount} Comments</strong>
          <strong className="small">{sharesCount} Shares</strong>
        </div>
      </div>
    </>
  );
};

export default PostHandler;
