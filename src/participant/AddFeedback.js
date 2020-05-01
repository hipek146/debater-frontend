import React from "react";
import { connect } from "react-redux";
import goTop from "assets/images/goTop.png";
import "./AddFeedback.css";

import { createMessage } from "actions";

export const AddFeedbackComponent = (props) => {
  return (
    <div className="AddFeedback-main">
      <div className="AddFeedback-left">
        <textarea className="AddFeedback-textarea" />
        <div
          className="AddFeedback-send"
          onClick={() =>
            props.createMessage({
              title: "Feedback został wysłany",
              content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,
            })
          }
        >
          WYŚLIJ
        </div>
      </div>
      <div className="AddFeedback-right">
        <img src={goTop} alt="w górę" onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { createMessage };

export const AddFeedback = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFeedbackComponent);
