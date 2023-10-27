import {
  faUser,
  faBasketShopping,
  faMedal,
  faStar,
  faGem,
  faMessage,
  faClipboardList,
  faTags,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const iconColor = "#aaadc7";
  return (
    <>
      <Navbar className="position-absolute top-0 start-0 vh-100 bg-white z-1  d-none d-xxl-flex">
        <Nav className="py-3 ps-2 pe-3 d-flex flex-column align-items-center h-75 justify-content-around sidebar">
          <Nav.Link as={NavLink} to="/" className="rounded-3">
            <FontAwesomeIcon
              icon={faDesktop}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile" className="rounded-3">
            <FontAwesomeIcon
              icon={faUser}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profiles" className="rounded-3">
            <FontAwesomeIcon
              icon={faUser}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/achievements" className="rounded-3">
            <FontAwesomeIcon
              icon={faMedal}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />{" "}
          </Nav.Link>

          <Nav.Link as={NavLink} to="/favourites" className="rounded-3">
            <FontAwesomeIcon
              icon={faStar}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/awards" className="rounded-3">
            <FontAwesomeIcon
              icon={faTags}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/gems" className="rounded-3">
            <FontAwesomeIcon
              icon={faGem}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/clips" className="rounded-3">
            <FontAwesomeIcon
              icon={faClipboardList}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/messenger" className="rounded-3">
            <FontAwesomeIcon
              icon={faMessage}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/cart" className="rounded-3">
            <FontAwesomeIcon
              icon={faBasketShopping}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/tags" className="rounded-3">
            <FontAwesomeIcon
              icon={faTags}
              color={iconColor}
              style={{ fontSize: "1.2em" }}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default LeftNavbar;
