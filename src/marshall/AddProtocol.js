import React from "react";
import { connect } from "react-redux";
import goTop from "assets/images/goTop.png";
import "./AddProtocol.css";

import { createMessage } from "actions";

export const AddProtocolComponent = (props) => {
 return (
    <div className="AddProtocol-main">
        <div
          className="AddProtocol-send"
          onClick={() =>
            props.createMessage({
              title: "Protokół został wysłany",
              content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,
            })
          }
        >
          ZATWIERDŹ PROTOKÓŁ
        </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { createMessage };

export const AddProtocol = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProtocolComponent);
