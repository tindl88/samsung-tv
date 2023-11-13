import React, { useEffect } from "react";

// Css
import ButtonLabel from "../components/buttonLabel";

// Modules
import { connect } from "react-redux";

function Exit(props) {
  const keyHandler = (key) => {
    // check if keycode is the return button on the remote and the remove button on your keyboard
    if (key.keyCode === 10009 || key.keyCode === 8) {
      props.setIsLeaving(false);
    }
  };

  const exitApplication = () => {
    window.tizen.application.getCurrentApplication().exit();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  return (
    <div className="container center">
      <h3>Are you sure you want to exit the application?</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <ButtonLabel onClick={exitApplication} label="Yes" />
        <ButtonLabel onClick={() => props.setIsLeaving(false)} label="No" />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLeaving: (data) => {
      dispatch({
        type: "SET_IS_LEAVING",
        isLeaving: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Exit);
