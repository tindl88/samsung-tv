import React from "react";

// Modules
import { Focusable } from "react-js-spatial-navigation";

// Css to change the style of the Focusable Component
import "../css/button.css";

function ButtonLabel(props) {
  return (
    <Focusable
      className="buttonLabel"
      onClickEnter={props.onClick}
      onFocus={props.focus}
    >
      <p className="text">{props.label}</p>
    </Focusable>
  );
}

export default ButtonLabel;
