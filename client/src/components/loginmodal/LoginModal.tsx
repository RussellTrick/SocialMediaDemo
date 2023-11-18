import React from "react";
import { Modal, Button } from "react-bootstrap";

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
