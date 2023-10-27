import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserCard from "../components/usercard/UserCard.tsx";
import Photo from "../assets/img/pexels-photo-1036623.webp";
import LeftNavbar from "../components/navbar/LeftNavbar.tsx";
import HeaderImg from "../assets/img/header.png";
import UserData from "../data/UserDummyData.json";
import Logo from "../assets/img/react.svg";
import GroupCard from "../components/groupcard/GroupCard.tsx";

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

  // Take the first 5 groups

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
                <UserCard
                  key={index}
                  name={user.name}
                  handle={user.handle}
                  imageUrl={Photo}
                  level={user.level}
                  verified={user.verified}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
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
              <div>
                <UserCard
                  name={"John Doe"}
                  imageUrl={Logo}
                  level={2}
                  verified
                />
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <div className="bg-white rounded-3 p-4 d-flex flex-column gap-3">
              <strong className="mb-3">Popular Groups</strong>
              <GroupCard name={"New group"} memberCount={2} imageUrl={Logo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
