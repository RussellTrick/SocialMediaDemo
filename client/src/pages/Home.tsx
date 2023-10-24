import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container">
      <header className="header bg-primary rounded-3 my-4">
        <img
          src="header-image.jpg"
          alt="Header"
          className="header-image img-fluid"
        />
      </header>
      <div className="row flex-column flex-md-row">
        <div className="col">
          <div className=" bg-white rounded-3 p-4">
            <strong>Newest Members</strong>
            <p>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.Donec id elit non mi porta gravida
              at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white rounded-3 p-4 d-flex justify-content-between">
            <strong>All Updates</strong>
            <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle
                id="dropdown-autoclose-outside"
                className="text-black bg-white"
              >
                Everything <FontAwesomeIcon icon={faAngleDown} width={"10px"} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Friends</Dropdown.Item>
                <Dropdown.Item href="#">Followed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col">
          <div className="bg-white rounded-3 p-4">
            <strong>Popular groups</strong>
            <p>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.Donec id elit non mi porta gravida
              at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
