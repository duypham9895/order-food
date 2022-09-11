import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const Backdrop = ({ onCancelModal }) => {
  return <div className={classes.backdrop} onClick={onCancelModal} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ onCancelModal, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancelModal={onCancelModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
