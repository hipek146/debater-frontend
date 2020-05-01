import React from "react";
import { connect } from "react-redux";
import "./MessageBox.css";

import { closeMessage } from "actions";

import times from "assets/images/times.svg";

export const MessageBoxComponent = (props) => {
  const { active, title, content } = props.message;
  return (
    <div className={active ? "MessageBox" : "MessageBox-disable"}>
      <div className="MessageBox-main">
        <div className="MessageBox-title">
          {title}
          <div className="MessageBox-close">
            <img src={times} alt="colse" onClick={props.closeMessage} />
          </div>
        </div>
        <div className="MessageBox-content">
          {content}
          <div className="MessageBox-buttons">
            <div className="MessageBox-button" onClick={props.closeMessage}>
              OK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { message: state.message };
};
const mapDispatchToProps = { closeMessage };

export const MessageBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoxComponent);
