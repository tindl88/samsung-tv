import React, { useRef, useEffect, useState } from "react";

// Modules
import { Focusable } from "react-js-spatial-navigation";

// Icons
import FaPlay from "@meronex/icons/fa/FaPlay";
import EnControllerFastForward from "@meronex/icons/en/EnControllerFastForward";
import EnControllerFastBackward from "@meronex/icons/en/EnControllerFastBackward";
import FdPause from "@meronex/icons/fd/FdPause";
// Css to change the style of the Focusable Component
import "../css/button.css";

function ButtonVideoPlayer(props) {
  const vidRef = useRef(null);
  const renderIcon = () => {
    switch (props.icon) {
      case "play":
        return <FaPlay />;
      case "pause":
        return <FdPause />;
      case "right":
        return <EnControllerFastForward />;
      case "left":
        return <EnControllerFastBackward />;
    }
  };

  const onClick = () => {
    props.onClick(props.to);
  };

  useEffect(() => {
    if (props.focused) {
      console.log(vidRef)
      vidRef.current.el.focus()
    }
  });

  return (
    <Focusable
      ref={vidRef}
      className={"buttonVideoPlayer " + props.id}
      onClickEnter={onClick}
      onFocus={props.focus}
    >
      {renderIcon()}
    </Focusable>
  );
}

export default ButtonVideoPlayer;
