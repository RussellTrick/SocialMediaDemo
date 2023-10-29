type QuestTypes = {
  completed?: boolean;
  name: string;
  description: string;
  image?: string;
};

const Quest = ({ completed, name, description, image }: QuestTypes) => {
  if (completed) {
    return (
      <div className="d-flex gap-2">
        <div className="complete-background">
          {image ? (
            image
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 64 512"
            >
              <path
                fill="white"
                d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              />
            </svg>
          )}
        </div>
        <div className="d-flex flex-column">
          <strong className="small">{name}</strong>
          <span className="small">{description}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex gap-2">
        <div className="incomplete-background">
          {image ? (
            image
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 64 512"
            >
              <path
                fill="white"
                d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              />
            </svg>
          )}
        </div>
        <div className="d-flex flex-column">
          <strong className="small">{name}</strong>
          <span className="small">{description}</span>
        </div>
      </div>
    );
  }
};

export default Quest;
