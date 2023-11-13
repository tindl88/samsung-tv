import React from "react";

// Modules
import { Focusable } from "react-js-spatial-navigation";
import { useHistory } from "react-router-dom";

// Icons
import FdHome from "@meronex/icons/fd/FdHome";
import BiLogOutCircle from "@meronex/icons/bi/BiLogOutCircle";
import VscLoading from "@meronex/icons/vsc/VscLoading";
import BisVideos from "@meronex/icons/bi/BisVideos";
import AiFillGithub from "@meronex/icons/ai/AiFillGithub";

// Css to change the style of the Focusable Component
import "../css/button.css";

function Button(props) {
  const history = useHistory();

  const renderIcon = () => {
    switch (props.icon) {
      case "home":
        return <FdHome />;
      case "loading":
        return <VscLoading />;
      case "video":
        return <BisVideos />;
      case "github":
        return <AiFillGithub />;
      default:
        return <BiLogOutCircle />;
    }
  };

  const onClick = () => {
    history.push(props.to);
    props.onClick(props.to);
  };

  return (
    <Focusable
      className={"button " + (props.active ? "active" : "")}
      onClickEnter={onClick}
      onFocus={props.focus}
    >
      {renderIcon()}
    </Focusable>
  );
}

export default Button;
