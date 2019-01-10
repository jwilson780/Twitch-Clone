import React from "react";
import ReactDOM from "react-dom";

/*
 * Make a createPortal
 * Needs a div to create the
 */
const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss} //what we want to have happen when they click outside of modal
      className="ui dimmer modals visable active"
    >
      <div
        onClick={event => event.stopPropagation()} //have to stop the click propagation
        className="ui standard modal visable active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    //portal to new modal div in index.html
    document.querySelector("#modal")
  );
};

export default Modal;
