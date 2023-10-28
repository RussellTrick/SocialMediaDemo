import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserCard from "../components/usercard/UserCard.tsx";
import LeftNavbar from "../components/navbar/LeftNavbar.tsx";
import HeaderImg from "../assets/img/header.png";
import GroupCard from "../components/groupcard/GroupCard.tsx";
import PostHandler from "../components/post/PostHandler.tsx";

// Dummy Data to emulate api calls
import UserData from "../data/UserDummyData.json";
import GroupData from "../data/GroupDummyData.json";
import Photo from "../assets/img/pexels-photo-1036623.webp";
import PostData from "../data/MessageDummyData.json";

const Home = () => {
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
      <div className="container">
        <header className="rounded-3 my-4">
          <img
            src={HeaderImg}
            alt="Header"
            className="header-image img-fluid rounded-4"
          />
        </header>
        <div className="row">
          <div className="col d-none d-lg-block">
            <div className="bg-white rounded-3 p-4 d-flex flex-column gap-3">
              <strong className="mb-3">Newest Members</strong>
              {latestUsers.map((user, index) => (
                <div className="d-flex py-1">
                  <UserCard
                    key={index}
                    name={user.name}
                    handle={user.handle}
                    imageUrl={Photo}
                    level={user.level}
                    verified={user.verified}
                  />
                </div>
              ))}
            </div>
          </div>
          <main className="col-lg-6 col-md-12">
            <div className="bg-white rounded-3 mb-3">
              <div className="d-flex justify-content-between">
                <div className="h-100 p-4 d-flex justify-content-center align-items-center border-bottom border-tertiary border-4">
                  <strong>All Updates</strong>
                </div>
                <Dropdown className="d-inline mx-2 p-4" autoClose="outside">
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
            <div className="bg-white rounded-3 p-4 mb-3">
              <PostHandler
                type={PostData[1].type}
                content={PostData[1].content}
                timestamp={PostData[1].timestamp}
                forum={PostData[1].forum}
                user={UserData[1]}
                replyTarget={PostData[1].replyTarget}
              />
            </div>
          </main>

          <div className="col d-none d-lg-block">
            <div className="bg-white rounded-3 p-4 d-flex flex-column gap-3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
