import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserCard from "../components/usercard/UserCard.tsx";
import LeftNavbar from "../components/navbar/LeftNavbar.tsx";
import HeaderImg from "../assets/img/header.png";
import GroupCard from "../components/groupcard/GroupCard.tsx";
import PostHandler from "../components/post/PostHandler.tsx";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader.tsx";
import Quest from "../components/quest/Quest.tsx";
import Badges from "../components/badges/Badges.tsx";

// Dummy Data to emulate api calls
import UserData from "../data/UserDummyData.json";
import GroupData from "../data/GroupDummyData.json";
import Photo from "../assets/img/pexels-photo-1036623.webp";
import PostData from "../data/MessageDummyData.json";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  //************************************************************************************ */
  // REFACTOR AFTER API IMPLEMENTATION

  // Simulate calling an api
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const getRandomImageUrl = () => {
    const randomImageId = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `https://picsum.photos/300/300?image=${randomImageId}`;
  };

  //************************************************************************************ */

  // Sort users by createdDateTime in descending order
  const sortedUsers = UserData.sort(
    (a, b) =>
      new Date(b.createdDateTime).valueOf() -
      new Date(a.createdDateTime).valueOf() //valueOf not needed but TypeScript will complain otherwise
  );
  // Take the first 5 users
  const latestUsers = sortedUsers.slice(0, 5);

  // Sort groups by memberCount in descending order
  const sortedGroups = GroupData.slice().sort(
    (a, b) => b.memberCount - a.memberCount
  );

  // Take the first 5 groups based on member count
  const top5Groups = sortedGroups.slice(0, 5);

  return (
    <>
      <LeftNavbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <header className="rounded-4 my-4">
            <img
              src={HeaderImg}
              alt="Header"
              className="header-image img-fluid rounded-4"
            />
          </header>
          <div className="row">
            <div className="col d-none d-lg-block">
              <div className="bg-white rounded-4 p-4 d-flex flex-column gap-3 mb-3">
                <strong className="mb-3">Newest Members</strong>
                {latestUsers.map((user, index) => (
                  <div className="d-flex py-1">
                    <UserCard
                      key={index}
                      name={user.name}
                      handle={user.handle}
                      imageUrl={getRandomImageUrl()}
                      level={user.level}
                      verified={user.verified}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-4 p-4 d-flex flex-column gap-3 mb-3">
                <strong className="mb-3">Quests</strong>
                <Quest
                  name="Posting Machine"
                  description="Posted more than 20 profile activities in one day"
                />
              </div>
            </div>
            <main className="col-lg-6 col-md-12">
              <div className="bg-white rounded-4 mb-3">
                <div className="d-flex justify-content-between">
                  <div className="h-100 p-4 d-flex justify-content-center align-items-center border-bottom border-tertiary border-4">
                    <strong>All Updates</strong>
                  </div>
                  <Dropdown className="d-inline mx-2 p-3" autoClose="outside">
                    <Dropdown.Toggle
                      id="dropdown-autoclose-outside"
                      className="text-black bg-white"
                    >
                      Everything{" "}
                      <FontAwesomeIcon icon={faAngleDown} width={"10px"} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Friends</Dropdown.Item>
                      <Dropdown.Item href="#">Following</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              {PostData.map((post, index) => (
                <div className="bg-white rounded-4 p-4 mb-3">
                  <PostHandler
                    key={index}
                    type={post.type}
                    content={post.content}
                    timestamp={post.timestamp}
                    user={UserData[1]} // This would be another api call based on what post.user returned
                    forum={post.forum || undefined}
                    replyTarget={post.replyTarget || undefined}
                  />
                </div>
              ))}
            </main>

            <div className="col d-none d-lg-block">
              <div className="bg-white rounded-4 p-4 d-flex flex-column gap-3 mb-3">
                <strong className="mb-3">Popular Groups</strong>
                {top5Groups.map((group) => (
                  <GroupCard
                    name={group.name}
                    memberCount={group.memberCount}
                    imageUrl={Photo}
                    priv={group.priv}
                  />
                ))}
              </div>
              <div className="bg-white rounded-4 p-4 d-flex flex-column gap-3 mb-3">
                <strong className="mb-3">Badges</strong>
                <Badges
                  name="Globe Trotter"
                  description="Has joined at least 10 different groups"
                  completed
                ></Badges>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
