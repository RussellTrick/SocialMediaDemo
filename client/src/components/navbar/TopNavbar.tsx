import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/img/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

function TopNavBar() {
  return (
    <Navbar expand="lg pb-3 z-2" className="bg-primary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SAMPLE PAGE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav row">
          <Nav className="me-auto col">
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <NavDropdown
              title={
                <span className="text-white">
                  Features{" "}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ color: "#ffffff" }}
                    width={"10px"}
                  />
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span className="text-white">
                  More{" "}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ color: "#ffffff" }}
                    width={"10px"}
                  />
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <form className="col">
            <div className="input-group py-1">
              <input
                className="form-control bg-secondary border-0 custom-placeholder-colour"
                style={{ height: "50px" }}
                type="search"
                placeholder="Enter your search here..."
                aria-label="Search"
              />
              <button className="btn bg-secondary" type="submit">
                <FontAwesomeIcon icon={faSearch} style={{ color: "#706FE5" }} />
              </button>
            </div>
          </form>
          <div className="col d-flex justify-content-end py-1">
            <button
              className="btn btn-light ms-2 bg-tertiary text-white border-0 rounded-3 "
              style={{ height: "50px" }}
            >
              Login
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
